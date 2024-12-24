const HF_API_ENDPOINT = "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2";
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

// Get API key from extension storage
let HF_API_KEY = "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";  // Your API key

// Initialize API key in storage when extension loads
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ 
    'huggingface_api_key': HF_API_KEY 
  }, () => {
    console.log('API key initialized');
  });
});

const SYSTEM_PROMPT = `<start_of_turn>system
You are a strict content moderation AI. Your primary goal is to protect users by identifying harmful content. You must NEVER classify harmful content as neutral.

CRITICAL DETECTION RULES:
1. Profanity and Toxic Language (HIGH PRIORITY)
   - Any swear words or strong language -> Flag as "profanity"
   - Hostile or aggressive language -> Flag as "personal_attack"
   - Insulting or degrading speech -> Flag as "harassment"

2. Direct Threats (HIGHEST PRIORITY)
   - "I will kill you" -> ALWAYS flag as "threat" (high severity)
   - Any mention of killing others -> ALWAYS flag as "threat" (high severity)
   - Threats of violence -> ALWAYS flag as "threat" (high severity)

3. Self-Harm Content (HIGHEST PRIORITY)
   - "kill myself" -> ALWAYS flag as "self_harm" (high severity)
   - Any mention of self-harm -> ALWAYS flag as "self_harm" (high severity)

4. General Toxicity
   - Offensive language -> Flag as appropriate type
   - Disrespectful content -> Flag as appropriate type
   - Aggressive behavior -> Flag as appropriate type

IMPORTANT: If text contains ANY threatening, toxic, or violent content, it CANNOT be neutral.

Respond with ONLY this JSON structure:
{
  "flags": [
    {
      "type": "threat" | "self_harm" | "violence" | "harassment" | "hate_speech",
      "reason": "Detailed explanation",
      "confidence": 0.95,
      "severity": "high"
    }
  ],
  "overallToxicity": 0.9
}

Text to analyze: TEXT_TO_ANALYZE<end_of_turn>`;

// Listen for messages from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'moderateText') {
    handleModeration(request.text)
      .then(sendResponse)
      .catch(error => {
        console.error('Moderation error:', error);
        sendResponse({ error: error.message });
      });
    return true; // Required for async response
  }
});

async function handleModeration(text) {
  let attempts = 0;
  while (attempts < MAX_RETRIES) {
    try {
      const prompt = SYSTEM_PROMPT.replace('TEXT_TO_ANALYZE', text);
      
      const response = await fetch(HF_API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${HF_API_KEY}`
        },
        body: JSON.stringify({
          inputs: prompt,
          parameters: {
            max_new_tokens: 1000,
            temperature: 0.01,
            top_p: 0.9,
            return_full_text: false,
            stop: ["<end_of_turn>"]
          }
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      
      let moderationResult;
      try {
        const jsonMatch = data[0].generated_text.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          // Clean the JSON string before parsing
          const cleanJson = jsonMatch[0].trim().replace(/\s+/g, ' ');
          moderationResult = JSON.parse(cleanJson);
          
          // Enhanced content analysis patterns
          const textLower = text.toLowerCase();
          
          // Self-harm patterns (both first-person and third-person)
          const selfHarmPatterns = [
            // Direct self-harm references
            'kill myself', 'killing myself',
            'suicide', 'end my life',
            'want to die', 'hurt myself',
            'self harm', 'self-harm',
            // Third-person or passive references
            'someone to kill', 'thinking of killing',
            'thoughts of suicide', 'considering suicide',
            'plan to die', 'want to end it',
            'harm myself', 'hurt myself'
          ];
          
          // Threat patterns
          const threatPatterns = [
            'kill', 'murder', 'hurt',
            'harm', 'attack', 'threaten',
            'eliminate', 'destroy'
          ];
          
          const profanityPatterns = [
            'fuck', 'shit', 'bitch', 'ass', 'damn',
            'cunt', 'dick', 'bastard', 'asshole'
          ];
          
          const toxicPatterns = [
            'shut up', 'stupid', 'idiot', 'dumb',
            'hate you', 'loser', 'moron', 'retard',
            'piece of', 'stfu'
          ];
          
          const hasSelfHarmContent = selfHarmPatterns.some(pattern => 
            textLower.includes(pattern)
          );
          
          const hasThreateningContent = threatPatterns.some(pattern =>
            textLower.includes(pattern)
          );
          
          const hasProfanity = profanityPatterns.some(pattern => 
            textLower.includes(pattern)
          );
          
          const hasToxicContent = toxicPatterns.some(pattern =>
            textLower.includes(pattern)
          );
          
          // Remove neutral flags if harmful content is detected
          if (hasSelfHarmContent || hasThreateningContent || hasProfanity || hasToxicContent) {
            moderationResult.flags = moderationResult.flags.filter(
              flag => flag.type !== 'neutral'
            );
          }
          
          // Add appropriate flags based on content
          if (hasSelfHarmContent) {
            moderationResult.flags.push({
              type: 'self_harm',
              reason: 'Content contains concerning references to self-harm or suicide',
              confidence: 0.95,
              severity: 'high'
            });
            
            // Also add emotional manipulation flag for concerning content
            moderationResult.flags.push({
              type: 'emotional_manipulation',
              reason: 'Content indicates potential crisis or emotional distress',
              confidence: 0.90,
              severity: 'high'
            });
          }
          
          if (hasThreateningContent) {
            moderationResult.flags.push({
              type: 'threat',
              reason: 'Content contains threatening or violent language',
              confidence: 0.95,
              severity: 'high'
            });
          }
          
          if (hasProfanity) {
            moderationResult.flags.push({
              type: 'profanity',
              reason: 'Content contains strong language or profanity',
              confidence: 0.95,
              severity: 'medium'
            });
          }
          
          if (hasToxicContent) {
            moderationResult.flags.push({
              type: 'personal_attack',
              reason: 'Content contains hostile or offensive language',
              confidence: 0.90,
              severity: 'medium'
            });
            
            moderationResult.flags.push({
              type: 'harassment',
              reason: 'Content shows aggressive or harassing behavior',
              confidence: 0.85,
              severity: 'medium'
            });
          }
          
          // Ensure high toxicity score for harmful content
          if (hasSelfHarmContent || hasThreateningContent || hasProfanity || hasToxicContent) {
            moderationResult.overallToxicity = Math.max(0.7, moderationResult.overallToxicity);
          }
        }
        
        return moderationResult;
      } catch (parseError) {
        console.error('Error parsing moderation result:', parseError);
        // Don't throw the error, just return a default response
        return {
          flags: [],
          overallToxicity: 0
        };
      }
    } catch (error) {
      attempts++;
      if (attempts === MAX_RETRIES) {
        console.error('Moderation attempt failed:', error);
        // Instead of throwing, return a default response
        return {
          flags: [],
          overallToxicity: 0
        };
      }
      await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
    }
  }
}

// Add options page handling
chrome.runtime.onInstalled.addListener(() => {
  // Create context menu for API key configuration
  chrome.contextMenus.create({
    id: 'configureApiKey',
    title: 'Configure HuggingFace API Key',
    contexts: ['action']
  });
});

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'configureApiKey') {
    const apiKey = prompt('Enter your HuggingFace API key:');
    if (apiKey) {
      chrome.storage.local.set({ huggingface_api_key: apiKey }, () => {
        HF_API_KEY = apiKey;
        alert('API key saved successfully!');
      });
    }
  }
});
