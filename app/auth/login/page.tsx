"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [show, setShow] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-[#1A2E5A] to-navy flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 section-grid opacity-10" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md bg-white rounded-3xl p-10 shadow-2xl"
      >
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange-400 rounded-xl flex items-center justify-center">
              <span className="text-white font-black">IV</span>
            </div>
            <span className="text-xl font-bold text-navy" style={{ fontFamily: "Sora, sans-serif" }}>
              Inno<span className="text-primary">v</span>yasa
            </span>
          </Link>
          <h1 className="text-2xl font-bold text-navy mb-2" style={{ fontFamily: "Sora, sans-serif" }}>Welcome Back!</h1>
          <p className="text-gray-500 text-sm">Sign in to continue your learning journey</p>
        </div>

        <form className="space-y-4" onSubmit={e => e.preventDefault()}>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1.5 block">Email</label>
            <input type="email" placeholder="you@example.com" className="w-full border border-gray-200 px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1.5 block">Password</label>
            <div className="relative">
              <input type={show ? "text" : "password"} placeholder="••••••••" className="w-full border border-gray-200 px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors pr-12" />
              <button type="button" onClick={() => setShow(!show)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-primary" />
              Remember me
            </label>
            <Link href="#" className="text-primary hover:underline font-medium">Forgot password?</Link>
          </div>
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full btn-primary justify-center py-4">
            Sign In <ArrowRight className="w-4 h-4" />
          </motion.button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/auth/signup" className="text-primary font-semibold hover:underline">Sign up for free</Link>
        </p>
      </motion.div>
    </div>
  );
}
