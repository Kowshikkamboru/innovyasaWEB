"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-[#1A2E5A] to-navy flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 section-grid opacity-10" />
      <div className="relative w-full max-w-5xl grid lg:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden shadow-2xl">
        {/* Left */}
        <div className="bg-gradient-to-br from-primary to-orange-400 p-12 flex flex-col justify-between hidden lg:flex">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-10">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <span className="text-white font-black">IV</span>
              </div>
              <span className="text-xl font-bold text-white" style={{ fontFamily: "Sora, sans-serif" }}>Innovyasa</span>
            </Link>
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
              Start Your Learning Journey Today
            </h2>
            <p className="text-white/80 leading-relaxed mb-8">
              Join 2500+ students already transforming their careers with expert-led courses and real-world internships.
            </p>
            {["Access 1000+ courses", "Real internship opportunities", "Expert mentorship", "Certificate programs", "Community access"].map(p => (
              <div key={p} className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-white/90 text-sm">{p}</span>
              </div>
            ))}
          </div>
          <div className="bg-white/20 rounded-2xl p-5">
            <div className="text-white font-bold mb-1">Join 2500+ Learners</div>
            <div className="text-white/70 text-sm">Who are already building their future with Innovyasa</div>
          </div>
        </div>

        {/* Right */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="p-10 lg:p-12">
          <h1 className="text-2xl font-bold text-navy mb-2" style={{ fontFamily: "Sora, sans-serif" }}>Create your account</h1>
          <p className="text-gray-500 text-sm mb-8">Free forever. No credit card required.</p>

          <form className="space-y-4" onSubmit={e => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-gray-600 mb-1.5 block">First Name</label>
                <input type="text" placeholder="John" className="w-full border border-gray-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600 mb-1.5 block">Last Name</label>
                <input type="text" placeholder="Doe" className="w-full border border-gray-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors" />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600 mb-1.5 block">Email Address</label>
              <input type="email" placeholder="you@example.com" className="w-full border border-gray-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600 mb-1.5 block">Phone Number</label>
              <input type="tel" placeholder="+91 98765 43210" className="w-full border border-gray-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600 mb-1.5 block">Password</label>
              <input type="password" placeholder="••••••••" className="w-full border border-gray-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600 mb-1.5 block">I&apos;m interested in</label>
              <select className="w-full border border-gray-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors text-gray-500">
                <option>Select your goal</option>
                <option>Online Courses</option>
                <option>Internship Program</option>
                <option>IT Services</option>
                <option>All of the above</option>
              </select>
            </div>
            <label className="flex items-start gap-2.5 text-xs text-gray-500 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 mt-0.5 accent-primary flex-shrink-0" />
              I agree to the <Link href="/legal/terms" className="text-primary underline">Terms of Service</Link> and <Link href="/legal/privacy" className="text-primary underline">Privacy Policy</Link>
            </label>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full btn-primary justify-center py-4">
              Create Free Account <ArrowRight className="w-4 h-4" />
            </motion.button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-5">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-primary font-semibold hover:underline">Sign in</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
