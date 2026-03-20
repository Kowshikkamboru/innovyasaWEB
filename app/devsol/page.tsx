"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code, Monitor, Cpu, Globe, Database, Smartphone, CheckCircle } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimationUtils";

const services = [
  { icon: Globe, title: "Web Development", desc: "Full-stack web applications built with modern frameworks for scale and performance.", tags: ["React", "Next.js", "Node.js"], color: "bg-blue-50 text-blue-600" },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform mobile apps for iOS and Android with Flutter and React Native.", tags: ["Flutter", "React Native"], color: "bg-green-50 text-green-600" },
  { icon: Code, title: "UI/UX Design", desc: "Research-driven design that creates intuitive, accessible, and delightful user experiences.", tags: ["Figma", "Adobe XD"], color: "bg-orange-50 text-primary" },
  { icon: Cpu, title: "AI & Machine Learning", desc: "Intelligent solutions that automate processes and derive insights from your business data.", tags: ["Python", "TensorFlow"], color: "bg-purple-50 text-purple-600" },
  { icon: Database, title: "Cloud & Infrastructure", desc: "Scalable cloud architecture on AWS, GCP, and Azure for modern business requirements.", tags: ["AWS", "Docker"], color: "bg-sky-50 text-sky-600" },
  { icon: Monitor, title: "Academic Projects", desc: "End-to-end project development for final-year students with mentoring and documentation.", tags: ["Guidance", "Documentation"], color: "bg-pink-50 text-pink-600" },
];

const projects = [
  { title: "EdTech Platform Redesign", client: "EduLearn Inc", desc: "Complete redesign and development of a learning management system serving 50,000+ students.", tags: ["Next.js", "MongoDB", "AWS"], outcome: "40% increase in engagement" },
  { title: "Enterprise CRM Solution", client: "TechCorp Ltd", desc: "Custom CRM system with advanced analytics, real-time notifications, and integration APIs.", tags: ["React", "Node", "PostgreSQL"], outcome: "60% faster operations" },
  { title: "Healthcare Mobile App", client: "MedCare Health", desc: "Patient management app with appointment booking, telemedicine, and health tracking features.", tags: ["Flutter", "Firebase"], outcome: "10K+ downloads in 30 days" },
];

export default function DevsolPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="py-24 px-4 bg-gradient-to-br from-navy to-[#1A2E5A] relative overflow-hidden">
        <div className="absolute inset-0 section-grid opacity-10" />
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-3xl rounded-full" />

        <div className="max-w-7xl mx-auto relative text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="hero-tag inline-flex mb-6 border-primary/30 bg-primary/10 text-primary">
            Devsol — Digital Solutions
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto" style={{ fontFamily: "Sora, sans-serif" }}>
            Devsol – Digital Solutions &amp;{" "}
            <span className="text-primary">Academic Projects</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Tailored digital transformation services for startups &amp; enterprises. Direct client collaboration with meeting scheduling &amp; project tracking tools.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn-primary text-base">Get a Free Quote <ArrowRight className="w-4 h-4" /></Link>
            <Link href="#services" className="btn-outline border-white text-white hover:bg-white hover:text-navy text-base">Our Services</Link>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="hero-tag inline-flex mb-4">What We Build</span>
            <h2 className="section-title">Our <span className="text-primary">Services</span></h2>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <motion.div whileHover={{ y: -8 }} className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                  <div className={`w-14 h-14 ${s.color} rounded-2xl flex items-center justify-center mb-5`}>
                    <s.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-navy text-lg mb-2" style={{ fontFamily: "Sora, sans-serif" }}>{s.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map(t => (
                      <span key={t} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="hero-tag inline-flex mb-4">Portfolio</span>
            <h2 className="section-title">Featured <span className="text-primary">Projects</span></h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <StaggerItem key={p.title}>
                <motion.div whileHover={{ y: -6 }} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all border border-gray-100">
                  <div className="h-32 bg-gradient-to-br from-primary/10 to-navy/10 rounded-xl mb-5 flex items-center justify-center">
                    <Code className="w-10 h-10 text-primary" />
                  </div>
                  <div className="text-xs text-primary font-semibold mb-1">{p.client}</div>
                  <h3 className="font-bold text-navy mb-2" style={{ fontFamily: "Sora, sans-serif" }}>{p.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map(t => (
                      <span key={t} className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-green-600 font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    {p.outcome}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-navy text-center">
        <FadeIn>
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
            Ready to Build Something <span className="text-primary">Amazing?</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">Let's discuss your project and create a tailored solution that drives real business results.</p>
          <Link href="/contact" className="btn-primary text-base">
            Start Your Project <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
