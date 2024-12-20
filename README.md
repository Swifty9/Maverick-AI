# Content Moderation Software

### Deploy Link : https://maverick-ai.onrender.com/

___

## Help & Support
For any doubts & support, contact the maintainers of the project.
1. Siddhesh Rajale ➡️ [![Twitter](https://img.shields.io/twitter/follow/Siddhesh_Rajale?style=social)](https://twitter.com/intent/follow?screen_name=Scholar_js)
2. Mehul Pardeshi ➡️ [![Twitter](https://img.shields.io/twitter/follow/Mehul_Pardeshi?style=social)](https://twitter.com/intent/follow?screen_name=MehulPardeshi2)
3. Divyesh Mali ➡️ [![Twitter](https://img.shields.io/twitter/follow/Divyesh_Mali?style=social)](https://twitter.com/intent/follow?screen_name=divyesh_mali_)
____

## AI-Powered Content Moderation Software

A modern, real-time content moderation platform powered by TensorFlow.js and advanced AI models to help protect online communities from harmful content.

### Purpose and Vision

This open source project aims to create a scalable, AI-powered content moderation software that can be integrated into various social media platforms and online communities. By offering an API, this software will enable platforms to seamlessly moderate text (and potentially image) content to ensure a safer environment for users. The long-term goal is to develop a robust, versatile solution that can be adopted by social media apps and other online platforms requiring effective content moderation.

In the future, this software API could serve as a comprehensive moderation backbone for various apps, handling moderation tasks across diverse platforms and helping developers maintain community standards. This vision allows the project to expand beyond individual applications, providing a reliable, adaptable, and scalable content moderation service.

### Features

+ 🚀 Real-time content analysis and moderation
+ 🛡️ Detection of multiple content categories:
+ Toxicity and hate speech
+ Spam and scam content
+ Inappropriate language
+ Personal attacks and threats
+ 📊 Detailed analysis reports with confidence scores
+ 💾 Exportable moderation reports
+ ⚡ Built with modern web technologies

### Tech Stack

+ React 18 with TypeScript
+ TensorFlow.js for AI-powered analysis
+ Tailwind CSS for styling
+ Vite for blazing fast development
+ Node js & Supabase for backend
+ Github Actions for CI/CD
+ Docker for containerization

### Getting Started

1. Fork the repository
2. Clone the repository: *git clone https://github.com/yourusername/content-moderation-software.git*

## Running the project

### 1. Via Docker
1. Install dependencies: *npm install* in root directory
2. Start Docker Desktop
3. Run command `docker-compose up --build` in root directory
4. In Docker Desktop, go to Containers section and select 'maverick-ai'. Now click on `3000:80` port to open website in browser

### 2. Via Node JS
1. Install dependencies: *npm install* in root directory
2. Start the development server: *npm run dev* in root directory

## Working with AI Features

### Development without API Keys
The project includes a mock service for developing AI features without requiring API keys:

1. *Automatic Mock Service*
   - When no API key is present, the system automatically uses mock responses
   - Perfect for testing and development of AI-related features
   - No configuration needed


2. *Getting Real API Keys*
   When you need to test with real API:
   - Request a development API key from project maintainers
   - Create .env.local file in project root
   - Add: VITE_HUGGINGFACE_API_KEY=your_key_here

3. *Switching Between Mock and Real API*
   - Remove/rename .env.local file to use mock service
   - Restore .env.local file to use real API
   - No code changes required


### How It Works

The application uses TensorFlow.js toxicity models to analyze text content in real-time. It evaluates content across multiple dimensions including:

+ Toxicity levels
+ Identity-based attacks
+ Insults and threats
+ Obscene content
+ Spam patterns
+ Inappropriate language
   
### Each analysis provides detailed feedback with:

+ Specific content flags
+ Confidence scores
+ Context highlighting
+ Overall toxicity assessment
---

### Data Flow Architecture
```mermaid
sequenceDiagram
    participant GHA as GitHub Actions
    participant GH as GitHub API
    participant SS as Sync Script
    participant SB as Supabase
    participant WEB as Web Frontend
    participant UI as User Interface
    participant MS as Mistral Service
    
    Note over GHA: Triggers every 6 hours
    
    GHA->>SS: Initialize sync process
    activate SS
    
    SS->>GH: Request contributors list
    GH-->>SS: Return contributor data
    
    loop For each contributor
        SS->>GH: Fetch detailed user info
        GH-->>SS: Return user details
        SS->>SB: Upsert contributor data
        SB-->>SS: Confirm storage
    end
    
    deactivate SS
    
    WEB->>SB: Request contributors
    activate WEB
    SB-->>WEB: Return contributor list
    
    WEB->>UI: Render contributor grid
    
    Note over UI: User submits text for moderation
    
    UI->>WEB: Text submission
    WEB->>MS: Text classification
    MS-->>WEB: Mistral predictions
    WEB->>UI: Display moderation results
    
    deactivate WEB
```

---

### Deployment
```mermaid

graph TB
    subgraph "Production Environment"
        NGINX[Nginx Server]
        DOCKER[Docker Container]
        ENV[Environment Variables]
        STATIC[Static Assets]
    end

    subgraph "Build Process"
        NPM[npm build]
        VITE[Vite Bundler]
        TS[TypeScript Compiler]
    end

    subgraph "Version Control"
        GIT[Git Repository]
        GHA[GitHub Actions]
        SECRETS[GitHub Secrets]
    end

    subgraph "External Services"
        GITHUB[GitHub API]
        SUPABASE[Supabase]
        MISTRAL[Mistral API]
    end

    GIT --> GHA
    SECRETS --> GHA
    GHA --> NPM
    NPM --> VITE
    VITE --> TS
    TS --> DOCKER
    DOCKER --> NGINX
    ENV --> DOCKER
    STATIC --> NGINX
    
    DOCKER --> MISTRAL
    
    classDef primary fill:#2563eb,stroke:#fff,stroke-width:2px,color:#fff
    classDef secondary fill:#4b5563,stroke:#fff,stroke-width:2px,color:#fff
    classDef external fill:#059669,stroke:#fff,stroke-width:2px,color:#fff
    classDef ai fill:#9333ea,stroke:#fff,stroke-width:2px,color:#fff

    class MISTRAL ai
    class GITHUB,SUPABASE external

```

---

### System Components

```mermaid
graph TB
    subgraph "Frontend Application"
        WEB[Web Interface]
        COMP[React Components]
        HOOKS[React Hooks]
        ROUTE[React Router]
        MOD_UI[Moderation UI]
        
        WEB --> COMP
        COMP --> HOOKS
        WEB --> ROUTE
        COMP --> MOD_UI
    end

    subgraph "Backend Services"
        GHA[GitHub Actions]
        SYNC[Sync Service]
        FETCH[Data Fetcher]
        
        subgraph "AI Services"
            MS[Mistral Service]
            MOD[Moderation Logic]
            
            MS --> MOD
        end
        
        GHA --> SYNC
        SYNC --> FETCH
    end

    subgraph "External APIs"
        GITHUB[GitHub API]
        SUPA[Supabase API]
        MISTRAL[Mistral API]
        
        FETCH --> GITHUB
        MS --> MISTRAL
    end

    subgraph "Database Layer"
        DB[(Supabase DB)]
        
        SUPA --> DB
    end

    subgraph "CI/CD Pipeline"
        DOCKER[Docker Container]
        NGINX[Nginx Server]
        ENV[Environment Variables]
        
        DOCKER --> NGINX
        ENV --> DOCKER
    end

    WEB --> SUPA
    MOD_UI --> MOD
    
    classDef primary fill:#2563eb,stroke:#fff,stroke-width:2px,color:#fff
    classDef secondary fill:#4b5563,stroke:#fff,stroke-width:2px,color:#fff
    classDef external fill:#059669,stroke:#fff,stroke-width:2px,color:#fff
    classDef ai fill:#9333ea,stroke:#fff,stroke-width:2px,color:#fff
    
    class WEB,COMP,HOOKS,ROUTE primary
    class GHA,SYNC,FETCH secondary
    class GITHUB,SUPA,MISTRAL external
    class MS,MOD ai
```

---
## Contributing
 

Contributions are welcome! Please feel free to submit a Pull Request. For more details, refer to the [CONTRIBUTING.md](https://github.com/Swifty9/Maverick-AI/blob/main/CONTRIBUTING.md) file.

## License
 
#### MIT License - feel free to use this project for your own purposes.  
