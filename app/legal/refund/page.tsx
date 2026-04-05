"use client";
import LegalLayout from "@/components/LegalLayout";

export default function RefundPage() {
  const toc = [
    { id: "applicability", label: "Applicability" },
    { id: "digital", label: "Digital products & cancellations" },
    { id: "eligible", label: "Eligible refunds" },
    { id: "consumer", label: "Consumer rights" },
    { id: "request", label: "How to request a refund" },
    { id: "processing", label: "Processing time" },
    { id: "partners", label: "Payment partner policies" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <LegalLayout title="Refund Policy" intro="This Refund Policy explains refund eligibility for courses, subscriptions and services purchased on Innovyasa." toc={toc}>
      <section id="applicability">
        <h2 className="text-xl font-semibold">Applicability</h2>
        <p className="text-sm text-gray-600">This policy applies to purchases of online courses, subscriptions and other paid services made through our platform.</p>
      </section>

      <section id="digital">
        <h2 className="text-xl font-semibold">Digital products and cancellations</h2>
        <p className="text-sm text-gray-600">Because course access and digital content are delivered immediately, some purchases may be non-refundable once access has been granted. Where a product is marked as non-refundable this will be stated at the point of purchase.</p>
      </section>

      <section id="eligible">
        <h2 className="text-xl font-semibold">Eligible refunds</h2>
        <ul className="list-disc pl-6 text-sm text-gray-600">
          <li>If we cancel a course or we are unable to provide a paid service, you will be offered a full refund.</li>
          <li>In case of duplicate payments or technical errors we will refund amounts on verification.</li>
          <li>For subscription cancellations, unused future billing cycles will be refunded where applicable.</li>
        </ul>
      </section>

      <section id="consumer">
        <h2 className="text-xl font-semibold">Consumer rights</h2>
        <p className="text-sm text-gray-600">This policy is without prejudice to rights available to you under the Consumer Protection Act, 2019 and related rules.</p>
      </section>

      <section id="request">
        <h2 className="text-xl font-semibold">How to request a refund</h2>
        <p className="text-sm text-gray-600">To request a refund, email legal@innovyasa.com with your order ID, date of purchase and reason for refund. Provide any supporting documents or screenshots.</p>
      </section>

      <section id="processing">
        <h2 className="text-xl font-semibold">Processing time</h2>
        <p className="text-sm text-gray-600">We will acknowledge refund requests within 3 business days. Approved refunds are processed within 7–14 business days depending on your payment provider and bank clearing cycles.</p>
      </section>

      <section id="partners">
        <h2 className="text-xl font-semibold">Payment partner policies</h2>
        <p className="text-sm text-gray-600">Refunds to payment instruments (cards, wallets, UPI) may be subject to the payment partner's timelines and fees. Where a chargeback is initiated with your bank, we will cooperate with the bank's process.</p>
      </section>

      <section id="contact">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="text-sm text-gray-600">Questions about refunds: <a href="mailto:legal@innovyasa.com" className="text-primary">legal@innovyasa.com</a> or visit the Contact page.</p>
      </section>
    </LegalLayout>
  );
}
