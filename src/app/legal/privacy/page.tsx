import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Namibia Self Drive",
  description: "Privacy policy and data protection information for Namibia Self Drive",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-24">
      <div className="content-wrapper">
        <h1 className="text-4xl font-light mb-8">Privacy Policy</h1>
        <div className="prose prose-primary max-w-none">
          <h2>1. Introduction</h2>
          <p>
            At Namibia Self Drive, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2>2. Information We Collect</h2>
          <h3>2.1. Personal Information</h3>
          <p>
            We may collect personal information that you voluntarily provide, including:
          </p>
          <ul>
            <li>Name and contact information</li>
            <li>Driver&apos;s license details</li>
            <li>Payment information</li>
            <li>Travel preferences and history</li>
            <li>Communication records</li>
          </ul>

          <h3>2.2. Automatically Collected Information</h3>
          <p>
            When you visit our website, we automatically collect certain information, including:
          </p>
          <ul>
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device information</li>
            <li>Usage patterns</li>
            <li>Cookies and similar technologies</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>
            We use the collected information for:
          </p>
          <ul>
            <li>Processing your reservations and payments</li>
            <li>Providing customer support</li>
            <li>Sending service updates and marketing communications</li>
            <li>Improving our website and services</li>
            <li>Complying with legal obligations</li>
          </ul>

          <h2>4. Information Sharing</h2>
          <p>
            We may share your information with:
          </p>
          <ul>
            <li>Service providers and business partners</li>
            <li>Legal authorities when required by law</li>
            <li>Third parties with your consent</li>
          </ul>

          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Withdraw consent</li>
          </ul>

          <h2>7. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
          </p>

          <h2>8. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers.
          </p>

          <h2>9. Children&apos;s Privacy</h2>
          <p>
            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:<br />
            Email: traveldesk@namibiaselfdrive.com<br />
            Phone: +264 81 340 2394
          </p>
        </div>
      </div>
    </main>
  );
}