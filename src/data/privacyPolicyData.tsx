//To add a new section or modify existing ones:
//1. Copy an existing section object.
//2. Change the `id`, `title`, `description`, `details`, `icon`, and `color`.
//3. Add it to the `sectionData` array.

import { Database, Shield, FileText } from 'lucide-react';

export const privacyPolicyData = [
    {
        id: 'dataCollection',
        title: 'Data Collection',
        description: 'We gather personal and non-personal data to enhance your experience. Learn more about the types of data collected.',
        details: `
          <ul class="list-disc pl-6">
              <li><strong>Personal Data:</strong> Name, email address, phone number, payment details, etc.</li>
              <li><strong>Non-Personal Data:</strong> Browser type, IP address, usage statistics, etc.</li>
              <li><strong>Methods of Collection:</strong> Provided by users, collected via cookies, or received from third-party services.</li>
          </ul>
        `,
        icon: Database,
        color: 'text-blue-500', //change color as you need
    },
    {
        id: 'yourRights',
        title: 'Your Rights',
        description: 'As a user, you have the right to access, modify, and delete your personal data. Contact us for assistance.',
        details: `
          <ul class="list-disc pl-6">
              <li><strong>Right to Access:</strong> Request a copy of your data.</li>
              <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete information.</li>
              <li><strong>Right to Deletion:</strong> Under specific conditions, request deletion of your data.</li>
              <li><strong>Right to Object:</strong> Object to processing for specific purposes, such as marketing.</li>
          </ul>
        `,
        icon: Shield,
        color: 'text-green-500', //change color as you need
    },
    {
        id: 'thirdPartyServices',
        title: 'Third-Party Services',
        description: 'We may use third-party services to enhance your experience. Here\'s more information about them.',
        details: `
          <ul class="list-disc pl-6">
              <li><strong>Google Analytics:</strong> To analyze user behavior and improve website functionality.</li>
              <li><strong>Payment Processors:</strong> Securely handle payments via services like Stripe.</li>
              <li><strong>Additional Services:</strong> Other integrations may be added over time to enhance user experience.</li>
          </ul>
        `,
        icon: FileText,
        color: 'text-red-500', //change color as you need
    },
];
