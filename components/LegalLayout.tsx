"use client";
import React from "react";

type TocItem = { id: string; label: string };

export default function LegalLayout({
  title,
  intro,
  toc,
  children,
}: {
  title: string;
  intro?: string;
  toc?: TocItem[];
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-x-hidden scroll-smooth">
      <section className="py-20 px-4 bg-gradient-to-br from-navy to-[#1A2E5A] text-center relative overflow-hidden">
        <div className="absolute inset-0 section-grid opacity-10" />
        <div className="relative max-w-5xl mx-auto">
          <span className="hero-tag inline-flex mb-4 border-primary/30 bg-primary/10 text-primary">Legal</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: "Sora, sans-serif" }}>
            {title}
          </h1>
          {intro && <p className="text-gray-300 max-w-2xl mx-auto">{intro}</p>}
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {toc && toc.length > 0 && (
            <aside className="md:col-span-1">
              <div className="sticky top-28">
                <div className="bg-white/60 backdrop-blur-sm border border-gray-100 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-navy mb-3">On this page</h4>
                  <nav className="space-y-2 text-sm">
                    {toc.map((t) => (
                      <a key={t.id} href={`#${t.id}`} className="block text-gray-600 hover:text-primary transition-colors">
                        {t.label}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </aside>
          )}

          <main className="md:col-span-3">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-6 text-gray-700 leading-relaxed">
              {children}
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
