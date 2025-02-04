import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Namibia Self Drive",
  description: "Information about how Namibia Self Drive uses cookies and similar technologies",
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen py-24">
      <div className="content-wrapper">
        <h1 className="text-4xl font-light mb-8">Cookie Policy</h1>
        <div className="prose prose-primary max-w-none">
          <h2>1. Introduction</h2>
          <p>
            This Cookie Policy explains how Namibia Self Drive uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>

          <h2>2. What Are Cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are widely used by website owners to make their websites work, or work more efficiently, as well as to provide reporting information.
          </p>

          <h2>3. Types of Cookies We Use</h2>
          
          <h3>3.1. Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
          </p>
          <ul>
            <li>Session management</li>
            <li>Security features</li>
            <li>Load balancing</li>
          </ul>

          <h3>3.2. Analytics Cookies</h3>
          <p>
            These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
          </p>
          <ul>
            <li>Page visit statistics</li>
            <li>Traffic sources</li>
            <li>User behavior patterns</li>
          </ul>

          <h3>3.3. Functional Cookies</h3>
          <p>
            These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.
          </p>
          <ul>
            <li>Language preferences</li>
            <li>Location settings</li>
            <li>User customizations</li>
          </ul>

          <h3>3.4. Marketing Cookies</h3>
          <p>
            These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad.
          </p>

          <h2>4. Cookie Duration</h2>
          <p>
            Cookies can remain on your computer or mobile device for different periods of time:
          </p>
          <ul>
            <li><strong>Session Cookies:</strong> These cookies exist only while your browser is open and are automatically deleted when you close your browser.</li>
            <li><strong>Persistent Cookies:</strong> These cookies stay on your device until they expire or are deleted. The duration varies from cookie to cookie.</li>
          </ul>

          <h2>5. Cookie Management</h2>
          <p>
            Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may impact your overall user experience. Below are links to manage cookie settings on common browsers:
          </p>
          <ul>
            <li>Google Chrome</li>
            <li>Mozilla Firefox</li>
            <li>Safari</li>
            <li>Microsoft Edge</li>
          </ul>

          <h2>6. Third-Party Cookies</h2>
          <p>
            We may use third-party services that use cookies on our website. These third-party services include:
          </p>
          <ul>
            <li>Google Analytics for website analytics</li>
            <li>Payment processors for secure transactions</li>
            <li>Social media plugins for content sharing</li>
          </ul>

          <h2>7. Your Consent</h2>
          <p>
            When you first visit our website, you will be shown a cookie consent banner. By clicking "Accept," you consent to our use of cookies as described in this policy. You can change your cookie preferences at any time through your browser settings.
          </p>

          <h2>8. Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. Any changes will become effective when we post the revised policy on our website.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about our use of cookies, please contact us at:<br />
            Email: traveldesk@namibiaselfdrive.com<br />
            Phone: +264 81 340 2394
          </p>
        </div>
      </div>
    </main>
  );
}