"use client";
import LegalLayout from "@/components/LegalLayout";

export default function TermsPage() {
  const toc = [
    { id: "agreement", label: "Agreement" },
    { id: "eligibility", label: "Eligibility" },
    { id: "accounts", label: "Accounts" },
    { id: "payments", label: "Payments" },
    { id: "ip", label: "Intellectual property" },
    { id: "user-content", label: "User content" },
    { id: "prohibited", label: "Prohibited activities" },
    { id: "disclaimer", label: "Disclaimers & limitation" },
    { id: "indemnity", label: "Indemnity" },
    { id: "governing", label: "Governing law" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <LegalLayout title="Terms & Conditions" intro="Please read these Terms & Conditions carefully before using Innovyasa services." toc={toc}>
      <section id="agreement">
        <h2 className="text-xl font-semibold">Agreement</h2>
        <p className="text-sm text-gray-600">These Terms form a legally binding agreement between you and Innovyasa Technologies Pvt Ltd. If you do not agree, do not use our services.</p>
      </section>

      <section id="eligibility">
        <h2 className="text-xl font-semibold">Eligibility</h2>
        <p className="text-sm text-gray-600">You must be at least 18 years old or have parental consent to use paid services. By using the services you represent that you are legally capable of entering into binding contracts.</p>
      </section>

      <section id="accounts">
        <h2 className="text-xl font-semibold">Accounts</h2>
        <p className="text-sm text-gray-600">You are responsible for keeping your account credentials secure. You must provide accurate information and notify us of any unauthorized use.</p>
      </section>

      <section id="payments">
        <h2 className="text-xl font-semibold">Payments</h2>
        <p className="text-sm text-gray-600">Prices, billing cycles and payment methods are described on the relevant product pages. All payments are processed by third-party payment gateways; refunds and chargebacks are subject to our Refund Policy.</p>
      </section>

      <section id="ip">
        <h2 className="text-xl font-semibold">Intellectual property</h2>
        <p className="text-sm text-gray-600">All content on the site (text, designs, code, images, courses) is owned or licensed by Innovyasa. You may not reproduce or distribute our materials without prior written permission.</p>
      </section>

      <section id="user-content">
        <h2 className="text-xl font-semibold">User content</h2>
        <p className="text-sm text-gray-600">You retain ownership of content you submit but grant Innovyasa a worldwide, royalty-free license to use it for the operation and promotion of the service. You must not upload infringing or unlawful content.</p>
      </section>

      <section id="prohibited">
        <h2 className="text-xl font-semibold">Prohibited activities</h2>
        <p className="text-sm text-gray-600">You must not misuse the platform, attempt to breach security, reverse engineer, impersonate others, or use the service for illegal activities.</p>
      </section>

      <section id="disclaimer">
        <h2 className="text-xl font-semibold">Disclaimers & limitation of liability</h2>
        <p className="text-sm text-gray-600">Services are provided "as is" and Innovyasa disclaims warranties to the fullest extent permitted by law. Our liability for direct damages is limited to the fees you paid in the 12 months preceding a claim. We are not liable for indirect or consequential losses.</p>
      </section>

      <section id="indemnity">
        <h2 className="text-xl font-semibold">Indemnity</h2>
        <p className="text-sm text-gray-600">You agree to indemnify Innovyasa from claims arising from your violation of these Terms or misuse of the service.</p>
      </section>

      <section id="governing">
        <h2 className="text-xl font-semibold">Governing law</h2>
        <p className="text-sm text-gray-600">These Terms are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana, unless otherwise agreed in writing.</p>
      </section>

      <section id="contact">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="text-sm text-gray-600">For questions about these Terms, contact us at <a href="mailto:legal@innovyasa.com" className="text-primary">legal@innovyasa.com</a> or visit the Contact page.</p>
      </section>
    </LegalLayout>
  );
}
