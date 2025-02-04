import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Namibia Self Drive",
  description: "Terms and conditions for using Namibia Self Drive's services",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen py-24">
      <div className="content-wrapper">
        <h1 className="text-4xl font-light mb-8">Terms & Conditions</h1>
        <div className="prose prose-primary max-w-none">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Namibia Self Drive. These terms and conditions outline the rules and regulations for the use of our website and services.
          </p>

          <h2>2. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by these terms and conditions. If you disagree with any part of these terms, you may not access our website or use our services.
          </p>

          <h2>3. Vehicle Rental Terms</h2>
          <p>
            3.1. All vehicle rentals are subject to availability and confirmation.<br />
            3.2. A valid driver&apos;s license and additional identification are required.<br />
            3.3. Minimum age requirements and driving experience restrictions may apply.<br />
            3.4. Full insurance coverage is mandatory for all rentals.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Namibia Self Drive and is protected by intellectual property laws.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            Namibia Self Drive shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of our website and services.
          </p>

          <h2>6. User Responsibilities</h2>
          <p>
            6.1. Provide accurate and complete information when making reservations.<br />
            6.2. Comply with all traffic laws and regulations while using our vehicles.<br />
            6.3. Report any vehicle issues or accidents immediately.<br />
            6.4. Return vehicles in the same condition as received, accounting for normal wear and tear.
          </p>

          <h2>7. Modifications</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services following any changes indicates your acceptance of the modified terms.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of Namibia. Any disputes shall be subject to the exclusive jurisdiction of the courts of Namibia.
          </p>

          <h2>9. Contact Information</h2>
          <p>
            For any questions regarding these terms, please contact us at:<br />
            Email: traveldesk@namibiaselfdrive.com<br />
            Phone: +264 81 340 2394
          </p>
        </div>
      </div>
    </main>
  );
}