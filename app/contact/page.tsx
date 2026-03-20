"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimationUtils";

export default function ContactPage() {
  return (
    <div className="overflow-x-hidden">
      <section className="py-24 px-4 bg-gradient-to-br from-navy to-[#1A2E5A] text-center relative overflow-hidden">
        <div className="absolute inset-0 section-grid opacity-10" />
        <FadeIn className="relative">
          <span className="hero-tag inline-flex mb-6 border-primary/30 bg-primary/10 text-primary">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
            We&apos;d Love to <span className="text-primary">Hear from You</span>
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">Have questions about our courses, internships, or services? Our team is ready to help!</p>
        </FadeIn>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14">
            <FadeIn>
              <h2 className="section-title mb-6">Get In <span className="text-primary">Touch</span></h2>
              <div className="space-y-5 mb-8">
                {[
                  { icon: Mail, label: "Email", value: "innovyasa@gmail.com" },
                  { icon: Phone, label: "Phone", value: "+91 9876543210" },
                  { icon: MapPin, label: "Address", value: "Hyderabad, Telangana, India" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium">{label}</div>
                      <div className="text-navy font-semibold">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {["Fast response within 24 hours", "Dedicated program advisors", "Free consultation call available"].map(p => (
                  <div key={p} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{p}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="left">
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <h3 className="font-bold text-navy text-xl mb-6" style={{ fontFamily: "Sora, sans-serif" }}>Send us a Message</h3>
                <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Your Name" className="w-full bg-white border border-gray-200 px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors" />
                    <input type="email" placeholder="Your Email" className="w-full bg-white border border-gray-200 px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <input type="tel" placeholder="Phone Number" className="w-full bg-white border border-gray-200 px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors" />
                  <select className="w-full bg-white border border-gray-200 px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors text-gray-500">
                    <option>What are you interested in?</option>
                    <option>Online Courses</option>
                    <option>Internship Program</option>
                    <option>IT Services / Devsol</option>
                    <option>Community</option>
                  </select>
                  <textarea rows={4} placeholder="Your Message" className="w-full bg-white border border-gray-200 px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors resize-none" />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full btn-primary justify-center py-4"
                  >
                    Send Message <Send className="w-4 h-4" />
                  </motion.button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
