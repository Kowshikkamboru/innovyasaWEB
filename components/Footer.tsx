"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Youtube, Instagram, Linkedin, Facebook, Twitter, Send } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Web Dev Design", href: "/services/web-dev" },
    { label: "Programming", href: "/services/programming" },
    { label: "UI/UX Design", href: "/services/uiux" },
    { label: "Mobile App", href: "/services/mobile" },
    { label: "Social Technology", href: "/services/social" },
  ],
  Support: [
    { label: "About Us", href: "/about" },
    { label: "Team", href: "/about#team" },
    { label: "Blog", href: "/blogs" },
    { label: "Community", href: "/community" },
  ],
  Community: [
    { label: "Track", href: "/community/track" },
    { label: "Discussion", href: "/community/discussion" },
    { label: "Leaderboard", href: "/community/leaderboard" },
    { label: "Mentor Programs", href: "/community/mentors" },
  ],
  Legal: [
    { label: "Terms & Conditions", href: "/legal/terms" },
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Takedown Policy", href: "/legal/takedown" },
    { label: "Community", href: "/community" },
  ],
};

const socials = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-primary to-orange-400 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Ready to Start Your Learning Journey?
          </motion.h2>
          <p className="text-white/80 mb-6">
            Join 2500+ students already transforming their careers with Innovyasa.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/courses" className="bg-white text-primary font-bold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              Explore Courses
            </Link>
            <Link href="/internships" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
              Find Internships
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-primary to-orange-400 rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-sm">IV</span>
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: "Sora, sans-serif" }}>
                Inno<span className="text-primary">v</span>yasa
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              INNOVYASA is a dynamic startup offering a dual-service model integrating IT services and Ed-tech solutions. We bridge the gap between learning and technology.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>innovyasa@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>+91 9876543210</span>
              </div>
            </div>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h4 className="font-semibold text-white mb-1">Subscribe to Our Newsletter</h4>
              <p className="text-gray-400 text-sm">Get internship news and online course updates.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border border-white/20 text-white placeholder:text-gray-500 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-primary flex-1 md:w-72"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-primary-600 p-3 rounded-lg transition-colors flex-shrink-0"
              >
                <Send className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2025 All Rights Reserved | Innovyasa Technologies Pvt Ltd
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <Link href="/legal/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="/legal/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/legal/takedown" className="hover:text-primary transition-colors">Takedown</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
