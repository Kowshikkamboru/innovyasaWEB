"use client";
import LegalLayout from "@/components/LegalLayout";

export default function PrivacyPolicyPage() {
  const toc = [
    { id: "personal-data", label: "Personal data we collect" },
    { id: "why", label: "Why we process data" },
    { id: "legal-basis", label: "Legal basis & Indian law" },
    { id: "sharing", label: "Data sharing & third parties" },
    { id: "retention", label: "Data retention" },
    { id: "security", label: "Security" },
    { id: "rights", label: "Your rights" },
    { id: "grievance", label: "Grievance officer & contact" },
    { id: "cookies", label: "Cookies & tracking" },
    { id: "international", label: "International transfers" },
    { id: "changes", label: "Changes to this policy" },
  ];

  return (
    <LegalLayout
      title="Privacy Policy"
      intro={'This Privacy Policy explains how Innovyasa Technologies Pvt Ltd ("Innovyasa", "we", "us") collects, uses, stores and discloses personal data in accordance with applicable Indian law, including the Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000.'}
      toc={toc}
    >
      <section id="personal-data">
        <h2 className="text-xl font-semibold">Personal data we collect</h2>
        <ul className="list-disc pl-6 text-sm text-gray-600">
          <li>Account and contact information (name, email, phone, address).</li>
          <li>Payment and billing details processed by our payment partners.</li>
          <li>Usage data and technical information (IP address, device, logs).</li>
          <li>Communications and user-generated content (messages, support requests, forum posts).</li>
        </ul>
      </section>

      <section id="why">
        <h2 className="text-xl font-semibold">Why we process data</h2>
        <p className="text-sm text-gray-600">We use personal data to provide our services, manage your account, process payments, provide support, improve our products, send relevant communications and comply with legal obligations.</p>
      </section>

      <section id="legal-basis">
        <h2 className="text-xl font-semibold">Legal basis & Indian law</h2>
        <p className="text-sm text-gray-600">Our processing is based on consent, contractual necessity, legitimate interests and compliance with legal obligations. We process personal data in line with the Digital Personal Data Protection Act, 2023 and relevant provisions of the Information Technology Act, 2000 (including Sections 43A and 72A relating to security and confidentiality of data).</p>
      </section>

      <section id="sharing">
        <h2 className="text-xl font-semibold">Data sharing & third parties</h2>
        <p className="text-sm text-gray-600">We share data with service providers (payment processors, analytics, cloud hosting, email providers) under contracts that require appropriate safeguards. We may disclose data to comply with lawful requests from government authorities or to protect our rights.</p>
      </section>

      <section id="retention">
        <h2 className="text-xl font-semibold">Data retention</h2>
        <p className="text-sm text-gray-600">We retain personal data only as long as necessary for the purposes outlined and to comply with legal retention requirements. Retention periods vary by data type; account records and transaction data are kept for statutory audit and tax purposes.</p>
      </section>

      <section id="security">
        <h2 className="text-xl font-semibold">Security</h2>
        <p className="text-sm text-gray-600">We implement industry-standard technical and organizational measures to protect personal data. No method of transmission or storage is 100% secure; if a breach affecting your personal data occurs we will notify affected users and authorities as required by law.</p>
      </section>

      <section id="rights">
        <h2 className="text-xl font-semibold">Your rights</h2>
        <p className="text-sm text-gray-600">Under Indian law you may have rights to access, correct, update, port or delete your personal data, and to withdraw consent where applicable. To exercise these rights or raise a concern contact our Grievance Officer (details below).</p>
      </section>

      <section id="grievance">
        <h2 className="text-xl font-semibold">Grievance officer & contact</h2>
        <p className="text-sm text-gray-600">Grievance Officer: Grievance Officer, Innovyasa Technologies Pvt Ltd<br />Email: legal@innovyasa.com<br />Phone: +91 9492030578</p>
      </section>

      <section id="cookies">
        <h2 className="text-xl font-semibold">Cookies & tracking</h2>
        <p className="text-sm text-gray-600">We use cookies and similar technologies for analytics, personalization and to secure our services. You can control cookie preferences through your browser or device settings.</p>
      </section>

      <section id="international">
        <h2 className="text-xl font-semibold">International transfers</h2>
        <p className="text-sm text-gray-600">We may transfer personal data to third parties located outside India (e.g., cloud providers). Where transfers occur we rely on appropriate safeguards and legal mechanisms to ensure adequate protection.</p>
      </section>

      <section id="changes">
        <h2 className="text-xl font-semibold">Changes to this policy</h2>
        <p className="text-sm text-gray-600">We may update this policy. Material changes will be notified via the website or by email. Check the effective date at the top of the page.</p>
      </section>

      <section>
        <p className="text-sm text-gray-600">For more details or to exercise your rights, please contact us via the Contact page or email <a href="mailto:legal@innovyasa.com" className="text-primary">legal@innovyasa.com</a>.</p>
      </section>
    </LegalLayout>
  );
}
