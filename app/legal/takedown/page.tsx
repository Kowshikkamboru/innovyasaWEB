"use client";
import LegalLayout from "@/components/LegalLayout";

export default function TakedownPage() {
  const toc = [
    { id: "submit", label: "How to submit a takedown notice" },
    { id: "response", label: "Our response" },
    { id: "counter", label: "Counter-notice" },
    { id: "legal", label: "Legal framework" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <LegalLayout title="Takedown & Copyright Policy" intro="If you believe content on Innovyasa infringes your intellectual property rights, please follow the procedure below." toc={toc}>
      <section id="submit">
        <h2 className="text-xl font-semibold">How to submit a takedown notice</h2>
        <p className="text-sm text-gray-600">Send a written notice to our Grievance Officer (legal@innovyasa.com) containing the following:</p>
        <ol className="list-decimal pl-6 text-sm text-gray-600">
          <li>A description of the copyrighted work you claim has been infringed.</li>
          <li>Identification of the allegedly infringing material and where it is located (provide exact URLs).</li>
          <li>Your name, contact information, and a statement that you are the copyright owner or authorized to act on behalf of the owner.</li>
          <li>A statement, under penalty of perjury, that the information in the notice is accurate and that you believe in good faith that use of the material is not authorized.</li>
          <li>Your electronic or physical signature.</li>
        </ol>
      </section>

      <section id="response">
        <h2 className="text-xl font-semibold">Our response</h2>
        <p className="text-sm text-gray-600">Upon receiving a valid notice, we will take prompt action consistent with applicable law which may include removing or disabling access to the material. We will attempt to notify the uploader when possible and provide an opportunity to submit a counter-notice.</p>
      </section>

      <section id="counter">
        <h2 className="text-xl font-semibold">Counter-notice</h2>
        <p className="text-sm text-gray-600">If you believe your content was removed in error, you may send a counter-notice including:</p>
        <ol className="list-decimal pl-6 text-sm text-gray-600">
          <li>Identification of the removed material and its location before removal.</li>
          <li>A statement under penalty of perjury that you have a good-faith belief the material was removed due to mistake or misidentification.</li>
          <li>Your name, contact information, and consent to the jurisdiction of a court in India for disputes.</li>
          <li>Your signature (electronic or physical).</li>
        </ol>
      </section>

      <section id="legal">
        <h2 className="text-xl font-semibold">Legal framework</h2>
        <p className="text-sm text-gray-600">We process takedown requests in line with the Copyright Act, 1957 and the Information Technology Act, 2000 (including intermediary guidelines and rules). This page does not constitute legal advice.</p>
      </section>

      <section id="contact">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="text-sm text-gray-600">Send notices to: <a href="mailto:legal@innovyasa.com" className="text-primary">legal@innovyasa.com</a>. For faster handling include all the information requested above and any supporting proof of ownership.</p>
      </section>

      <section>
        <p className="text-sm text-gray-600">For guidance you may also consult a qualified legal professional. Innovyasa reserves the right to take additional action as permitted by law.</p>
      </section>
    </LegalLayout>
  );
}
