//To add a new section or modify existing ones:
//1. Copy an existing section object.
//2. Change the `id`, `title`, `description`, `details`, `icon`, and `color`.
//3. Add it to the `sectionData` array.
import { Shield, FileText, User} from 'lucide-react';

export const termsOfServiceData = [

    {
        id: 'userRights',
        title: 'User Rights and Responsibilities',
        description: 'As a user, you have the right to use our services within the boundaries of the terms provided. You are also responsible for your actions while using our platform.',
        details: `
          <ul class="list-disc pl-6">
              <li><strong>Rights:</strong> You have the right to access and use our services.</li>
              <li><strong>Responsibilities:</strong> You agree not to engage in illegal activities or violate the rights of others.</li>
          </ul>
        `,
        icon: User,
        color: 'text-blue-500', //change color as you need
    },
    {
        id: 'contentOwnership',
        title: 'Content Ownership',
        description: 'All content on the platform, including text, images, and videos, is owned by us or licensed to us. Users retain ownership of their uploaded content.',
        details: `
          <ul class="list-disc pl-6">
              <li><strong>Ownership:</strong> We retain ownership of all site content unless stated otherwise.</li>
              <li><strong>User-Generated Content:</strong> You retain ownership of content you upload, but grant us a license to use it.</li>
          </ul>
        `,
        icon: FileText,
        color: 'text-red-500', //change color as you need
    },
    {
        id: 'limitations',
        title: 'Limitation of Liability',
        description: 'We are not liable for any damages arising from the use of our platform. Your use of the platform is at your own risk.',
        details: `
          <ul class="list-disc pl-6">
              <li><strong>No Warranty:</strong> We make no warranties regarding the accuracy or reliability of the content.</li>
              <li><strong>Limitation:</strong> Our liability is limited to the maximum extent permitted by law.</li>
          </ul>
        `,
        icon: Shield,
        color: 'text-yellow-500', //change color as you need
    },
    {
        id: 'termination',
        title: 'Termination of Account',
        description: 'We reserve the right to suspend or terminate your account if you violate the terms or engage in prohibited activities.',
        details: `
          <ul class="list-disc pl-6">
              <li><strong>Suspension:</strong> Accounts may be suspended for violating our terms.</li>
              <li><strong>Termination:</strong> We can terminate accounts for severe violations or non-compliance.</li>
          </ul>
        `,
        icon: Shield,
        color: 'text-orange-500', //change color as you need
    },
    {
        id: 'updates',
        title: 'Changes to Terms of Service',
        description: 'We may update our Terms of Service from time to time. Any changes will be communicated to you via our platform.',
        details: `
          <p>We reserve the right to update these terms at any time. Please review them periodically.</p>
        `,
        icon: FileText,
        color: 'text-purple-500', //change color as you need
    },
    {
        id: 'governingLaw',
        title: 'Governing Law',
        description: 'These terms are governed by the laws of the jurisdiction in which our company is based. Any disputes will be handled in the appropriate courts.',
        details: `
          <p>The laws of [Your Country] govern these terms and conditions.</p>
        `,
        icon: Shield,
        color: 'text-indigo-500', //change color as you need
    },
];
