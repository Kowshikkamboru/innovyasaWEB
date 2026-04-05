"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Youtube, Instagram, Linkedin, Facebook, Twitter, Send, ArrowRight, Sparkles } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers", badge: "Hiring" },
    { label: "Blog", href: "/blogs" },
    { label: "Community", href: "/community" },
    { label: "Contact", href: "/contact" },
  ],
  Offerings: [
    { label: "All Courses", href: "/courses" },
    { label: "Internships", href: "/internships" },
    { label: "Devsol (IT Services)", href: "/devsol" },
    { label: "Academic Projects", href: "/devsol#portfolio" },
    { label: "1-on-1 Mentorship", href: "/courses" },
  ],
  Community: [
    { label: "Discussion Forum", href: "/community" },
    { label: "Events & Webinars", href: "/community" },
    { label: "Leaderboard", href: "/community" },
    { label: "Mentor Programs", href: "/community" },
    { label: "Student Success", href: "/about" },
  ],
  Legal: [
    { label: "Terms & Conditions", href: "/legal/terms" },
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Refund Policy", href: "/legal/refund" },
    { label: "Takedown Policy", href: "/legal/takedown" },
  ],
};

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/innovyasa", label: "Instagram", color: "hover:bg-pink-500" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/innovyasa/", label: "LinkedIn", color: "hover:bg-blue-700" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube", color: "hover:bg-red-600" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook", color: "hover:bg-blue-600" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:bg-sky-500" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 section-grid opacity-5 pointer-events-none" />

      {/* ─── CTA BANNER ─────────────────────────────────────────────── */}
      <div className="relative bg-gradient-to-r from-primary via-orange-400 to-primary bg-size-200 animate-gradient-x py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-white/80" />
                <span className="text-white/80 text-sm font-medium">Ready to Level Up?</span>
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-white"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                Start Your Learning Journey Today
              </motion.h2>
              <p className="text-white/75 mt-2">
                Join 2500+ students already transforming their careers.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link href="/courses" className="bg-white text-primary font-bold px-6 py-3.5 rounded-xl hover:bg-gray-50 transition-colors flex items-center gap-2">
                Explore Courses <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/internships" className="border-2 border-white text-white font-bold px-6 py-3.5 rounded-xl hover:bg-white/10 transition-colors">
                Find Internships
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ─── MAIN FOOTER ────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-10 h-10 bg-gradient-to-br from-primary to-orange-400 rounded-xl flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-black text-sm" style={{ fontFamily: "Sora, sans-serif" }}>IV</span>
              </motion.div>
              <div>
                <span className="text-xl font-bold block leading-tight" style={{ fontFamily: "Sora, sans-serif" }}>
                  Inno<span className="text-primary">v</span>yasa
                </span>
                <span className="text-[10px] text-gray-500 tracking-wide">An Innovative Approach to Success</span>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              INNOVYASA is a dynamic startup integrating IT services and Ed-tech solutions. We bridge learning and technology to transform careers.
            </p>

            <div className="space-y-2.5 mb-6">
              {[
                { icon: Mail, text: "innovyas@gmail.com", href: "mailto:innovyas@gmail.com" },
                { icon: Phone, text: "+91 9492030578", href: "tel:+919492030578" },
                { icon: MapPin, text: "Hyderabad, Telangana, India", href: "#" },
              ].map(({ icon: Icon, text, href }) => (
                <a key={text} href={href} className="flex items-center gap-3 text-sm text-gray-400 hover:text-primary transition-colors group">
                  <div className="w-7 h-7 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  {text}
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-9 h-9 rounded-xl bg-white/5 ${color} flex items-center justify-center transition-colors`}
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-5 opacity-80">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center gap-2 group"
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform">{link.label}</span>
                      {"badge" in link && link.badge && (
                        <span className="text-[9px] bg-primary/20 text-primary border border-primary/20 px-1.5 py-0.5 rounded-full font-bold">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border border-white/10 rounded-2xl p-6 mb-10 bg-white/3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-bold text-white text-base mb-1">
                📬 Subscribe to Our Newsletter
              </h4>
              <p className="text-gray-400 text-sm">Get internship opportunities, course updates, and career tips.</p>
            </div>
            <form className="flex gap-2 w-full sm:w-auto" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border border-white/15 text-white placeholder:text-gray-500 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-primary flex-1 sm:w-64 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-primary hover:bg-orange-light px-5 py-3 rounded-xl transition-colors flex-shrink-0"
              >
                <Send className="w-4 h-4 text-white" />
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} All Rights Reserved | Innovyasa Technologies Pvt Ltd
          </p>
          <div className="flex items-center gap-1 text-gray-500 text-xs">
            Made with
            <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
              ❤️
            </motion.span>
            in Hyderabad, India
          </div>
          <div className="flex gap-4 text-xs text-gray-500">
            <Link href="/legal/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="/legal/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/legal/refund" className="hover:text-primary transition-colors">Refund</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
