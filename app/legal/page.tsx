"use client";
import Link from "next/link";

export default function LegalIndexPage() {
  return (
    <div className="overflow-x-hidden">
      <section className="py-24 px-4 bg-gradient-to-br from-navy to-[#1A2E5A] text-center relative overflow-hidden">
        <div className="absolute inset-0 section-grid opacity-10" />
        <div className="relative max-w-4xl mx-auto">
          <span className="hero-tag inline-flex mb-6 border-primary/30 bg-primary/10 text-primary">Legal</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
            Legal — Policies & Terms
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">Find our Terms & Conditions, Privacy Policy, Refund Policy and Takedown Policy. These documents reflect compliance with applicable Indian laws and regulations.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <Link href="/legal/terms" className="block p-6 border rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-navy">Terms & Conditions</h3>
              <p className="text-gray-500 text-sm">Rules, obligations and the contractual relationship between you and Innovyasa.</p>
            </Link>

            <Link href="/legal/privacy" className="block p-6 border rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-navy">Privacy Policy</h3>
              <p className="text-gray-500 text-sm">How we collect, use and protect your personal data in line with Indian law.</p>
            </Link>

            <Link href="/legal/refund" className="block p-6 border rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-navy">Refund Policy</h3>
              <p className="text-gray-500 text-sm">Refund eligibility, timelines and the process for course and service purchases.</p>
            </Link>

            <Link href="/legal/takedown" className="block p-6 border rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-navy">Takedown Policy</h3>
              <p className="text-gray-500 text-sm">How to report copyright or IP infringement and how we respond.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
