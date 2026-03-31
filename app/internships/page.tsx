"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Clock, Users, Briefcase, Award, Star, ChevronRight, TrendingUp } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimationUtils";
import HeroCarousel from "@/components/HeroCarousel";

const internships = [
  { title: "Software Developer", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&q=80&auto=format&fit=crop", type: "Full-time", level: "Entry", duration: "3-6 months", mode: "Remote", tags: ["React", "Node.js"], color: "border-l-blue-500" },
  { title: "Software Associate Developer", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80&auto=format&fit=crop", type: "Full-time", level: "Entry", duration: "3-6 months", mode: "Remote", tags: ["JS", "CSS"], color: "border-l-primary" },
  { title: "Java Developer", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1400&q=80&auto=format&fit=crop", type: "Remote", level: "Senior", duration: "3-6 months", mode: "Remote", tags: ["Java", "Spring"], color: "border-l-green-500" },
  { title: "Data Science Analyst", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1400&q=80&auto=format&fit=crop", type: "Part-time", level: "Entry", duration: "3-6 months", mode: "Remote", tags: ["Python", "ML"], color: "border-l-purple-500" },
  { title: "Python Full Stack Developer", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1400&q=80&auto=format&fit=crop", type: "Remote", level: "Entry", duration: "3 months", mode: "Remote", tags: ["Python", "Django"], color: "border-l-yellow-500" },
  { title: "Flutter Developer", image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e06?w=1400&q=80&auto=format&fit=crop", type: "Full-time", level: "Entry", duration: "3-6 months", mode: "Remote", tags: ["Flutter", "Dart"], color: "border-l-cyan-500" },
  { title: "Data Visualist", image: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=1400&q=80&auto=format&fit=crop", type: "Contract", level: "Entry", duration: "2-3 months", mode: "Remote", tags: ["PowerBI", "Tableau"], color: "border-l-pink-500" },
  { title: "C# Developer", image: "https://images.unsplash.com/photo-1505672678657-cc7037095e2c?w=1400&q=80&auto=format&fit=crop", type: "Full-time", level: "Entry", duration: "3-6 months", mode: "Remote", tags: ["C#", ".NET"], color: "border-l-indigo-500" },
];

const steps = [
  { step: 1, title: "Enroll & Choose Path", desc: "Choose from 220+ internship programs across IT, data, design, and marketing domains." },
  { step: 2, title: "Structured Learning", desc: "Follow a structured curriculum with live sessions, recorded content, and guided projects." },
  { step: 3, title: "Project-Based Tasks", desc: "Work on real client projects supervised by industry mentors with weekly feedback." },
  { step: 4, title: "Mentorship & Review", desc: "Regular 1:1 sessions with experienced professionals to guide your progress." },
  { step: 5, title: "Industry Connections", desc: "Get connected with 1000+ hiring partners across India and globally." },
  { step: 6, title: "Lifetime Access & Career Support", desc: "Lifetime access to resources and ongoing career support post-program." },
];

const perks = [
  { icon: "🎓", title: "Certificate at Completion", desc: "Industry-recognized certificate from Innovyasa to showcase your achievement." },
  { icon: "💻", title: "Hands-on Experience on Live Projects", desc: "Work on actual client projects and build a portfolio that stands out." },
  { icon: "🤝", title: "Expert Mentorship & Guidance", desc: "Personal guidance from experienced industry professionals at every step." },
  { icon: "📈", title: "Career Growth & Placement Assistance", desc: "Dedicated placement team to connect you with top hiring companies." },
  { icon: "🌐", title: "Networking Opportunities", desc: "Join a network of 2500+ alumni and industry professionals worldwide." },
  { icon: "👨‍🏫", title: "Top mentor guidance", desc: "Work with mentors from Google, Amazon, TCS and other top companies." },
];

const alumni = [
  { name: "Sanya Kapoor", role: "Placed at Infosys", course: "Full Stack Development", rating: 5, avatar: "SK" },
  { name: "Rahul Das", role: "Placed at TCS", course: "Data Science", rating: 5, avatar: "RD" },
  { name: "Preethi Nair", role: "Placed at Wipro", course: "UI/UX Design", rating: 5, avatar: "PN" },
];

export default function InternshipsPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-navy to-[#1A2E5A] overflow-hidden">
        <div className="absolute inset-0 section-grid opacity-10" />
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-0 right-0 w-80 h-80 bg-primary/10 blur-3xl rounded-full" />

        <div className="max-w-7xl mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="hero-tag inline-flex mb-6 border-primary/30 bg-primary/10 text-primary">
            220+ Live Internships
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6" style={{ fontFamily: "Sora, sans-serif" }}>
                We Shape <span className="text-primary">Careers</span> and Empower the Next Generation of{" "}
                <span className="text-primary">Innovators</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-gray-300 mb-8 leading-relaxed">
                Gain real-world experience, work on live projects, and launch your career with expert mentorship. Join our internship programs and take the first step toward a successful future.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-4 mb-8">
                <Link href="#apply" className="btn-primary">Apply Now <ArrowRight className="w-4 h-4" /></Link>
                <Link href="#journey" className="btn-outline border-white text-white hover:bg-white hover:text-navy">Learn More</Link>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex gap-8">
                <div>
                  <div className="text-3xl font-black text-primary">2000+</div>
                  <div className="text-gray-400 text-sm">Happy Students</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-primary">150+</div>
                  <div className="text-gray-400 text-sm">Hiring Companies</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-primary">90%</div>
                  <div className="text-gray-400 text-sm">Satisfaction Rate</div>
                </div>
              </motion.div>
            </div>

            <div className="hidden lg:block">
              <HeroCarousel images={internships.slice(0, 4).map(i => i.image)} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <FadeIn>
              <span className="hero-tag inline-flex mb-6">Real Experience</span>
              <h2 className="section-title mb-6">
                Why Choose <span className="text-primary">Innovyasa</span> for Your Internship?
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Innovyasa, we believe in learning by doing. Our internship program offers a perfect blend of mentorship, innovation, and real-world challenges to help you grow and succeed.
              </p>
              {[
                "Work on live projects with industry experts",
                "Learn from industry experts",
                "Get hands-on training with the latest tools and technologies",
                "Build a strong network and enhance your career prospects",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{point}</span>
                </div>
              ))}
            </FadeIn>

            <FadeIn delay={0.2} direction="left" className="pt-10">
              <div className="bg-gradient-to-br from-primary/5 to-navy/5 rounded-3xl p-6 border border-gray-100 overflow-hidden">
                <div className="w-full">
                  <video
                    src="/assets/videos/Internship_Video_Creation_Request.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-50 sm:h-50 md:h-70 lg:h-60 object-cover rounded-lg"
                  />
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                    <div className="text-3xl font-black text-primary">2000+</div>
                    <div className="text-xs text-gray-500">Happy Students</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                    <div className="text-3xl font-black text-primary">150+</div>
                    <div className="text-xs text-gray-500">Hiring Companies</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Apply Now - Job Listings */}
      <section id="apply" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-12">
            <span className="hero-tag inline-flex mb-4">Open Positions</span>
            <h2 className="section-title">
              Apply Now &amp; <span className="text-primary">Kickstart Your Career</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl">
              Ready to gain real-world experience and take your skills to the next level? Apply now and become part of Innovyasa's dynamic internship program!
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-4">
            {internships.map((intern) => (
              <StaggerItem key={intern.title}>
                <motion.div
                  whileHover={{ x: 4, boxShadow: "0 4px 20px rgba(255,107,43,0.1)" }}
                  className={`bg-white rounded-2xl p-6 border-l-4 ${intern.color} border border-gray-100 hover:border-primary/20 transition-all duration-300`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-navy mb-1" style={{ fontFamily: "Sora, sans-serif" }}>
                        {intern.title}
                        <span className="ml-2 text-xs text-primary font-normal bg-primary/10 px-2 py-0.5 rounded-full">{intern.type}</span>
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {intern.duration}</span>
                        <span>•</span>
                        <span>{intern.mode}</span>
                        <span>•</span>
                        <span>{intern.level}</span>
                      </div>
                    </div>
                    <Link
                      href="/internships/apply"
                      className="btn-primary text-xs py-2 px-4 flex-shrink-0"
                    >
                      Apply Now
                    </Link>
                  </div>
                  <div className="flex gap-2">
                    {intern.tags.map(t => (
                      <span key={t} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{t}</span>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="text-center mt-8">
            <Link href="#" className="btn-outline">
              Explore More <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Step by Step Guide */}
      <section id="journey" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="hero-tag inline-flex mb-4">The Process</span>
            <h2 className="section-title">
              Step-by-Step Guide to Your{" "}
              <span className="text-primary">Internship Journey</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
              Wondering how to get started with our internship program? We've designed a seamless and structured process to ensure you have a smooth and enriching experience.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <StaggerItem key={step.step}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-7 border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-orange-400 rounded-xl flex items-center justify-center text-white font-black text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-navy mb-2" style={{ fontFamily: "Sora, sans-serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
        {/* Floating abstract backgrounds */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 -right-16 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
        />
        {/* Dot grid pattern */}
        <div className="absolute inset-0 section-dots opacity-30 pointer-events-none" />
        {/* Abstract geometric shapes */}
        <svg className="absolute top-10 right-10 w-24 h-24 text-primary/5 pointer-events-none" viewBox="0 0 100 100">
          <motion.polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="currentColor" animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} />
        </svg>
        <svg className="absolute bottom-20 left-10 w-16 h-16 text-navy/5 pointer-events-none" viewBox="0 0 100 100">
          <motion.circle cx="50" cy="50" r="45" fill="currentColor" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
        </svg>

        <div className="max-w-7xl mx-auto relative">
          <FadeIn className="text-center mb-14">
            <h2 className="section-title">
              Perks &amp; <span className="text-primary">Benefits</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Supercharge Your Career with Innovyasa Internships
            </p>
          </FadeIn>

          {/* Analytics Dashboard Cards */}
          <FadeIn className="mb-16">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Applications Chart */}
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 20px 50px rgba(255,107,43,0.08)" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-primary/20 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-semibold text-navy">Internship Selected Applications</h4>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-primary inline-block" /> Number of Students(300+300+)
                  </span>
                </div>
                <div className="h-40 flex items-end justify-between gap-1 px-2">
                  {[40, 55, 45, 60, 50, 75, 65, 85, 70, 90, 60, 50].map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 flex flex-col items-center gap-1"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
                      style={{ originY: 1 }}
                    >
                      <div
                        className="w-full rounded-t-sm transition-all duration-500"
                        style={{
                          height: `${h}%`,
                          background: i === 9 ? '#FF6B2B' : `rgba(255, 107, 43, ${0.15 + (h / 200)})`,
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-[10px] text-gray-400 px-2">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(m => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs text-emerald-600 font-medium">+54.07%</span>
                </div>
              </motion.div>

              {/* Success Stories Chart */}
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 20px 50px rgba(13,27,62,0.08)" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-navy/20 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-gray-400">Activity</p>
                    <h4 className="text-sm font-semibold text-navy">Success Stories</h4>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-navy">2,313</span>
                  </div>
                </div>
                <div className="h-40 flex items-end justify-between gap-3 px-2">
                  {[50, 65, 80, 72, 90, 60, 75].map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 flex flex-col items-center"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
                      style={{ originY: 1 }}
                    >
                      <div
                        className="w-full rounded-t-lg transition-all duration-500"
                        style={{
                          height: `${h}%`,
                          background: i === 4 ? '#FF6B2B' : '#0D1B3E',
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-[10px] text-gray-400 px-2">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(d => (
                    <span key={d}>{d}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          </FadeIn>

          {/* Real-Time Internship Insights */}
          <FadeIn className="mb-16">
            <motion.div
              whileHover={{ y: -3 }}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-navy rounded-3xl p-8 md:p-10 text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 section-grid opacity-5" />
              {/* Animated abstract blobs inside the card */}
              <motion.div
                animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
              />
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "Sora, sans-serif" }}>
                  Real-Time Internship Insights
                </h3>
                <div className="space-y-3 mb-8">
                  <p className="text-gray-300 text-sm md:text-base">
                    <strong className="text-white">Live Intern Count:</strong> Over{" "}
                    <span className="text-primary font-bold">5,000+</span> students enrolled.
                  </p>
                  <p className="text-gray-300 text-sm md:text-base">
                    <strong className="text-white">Placement Success:</strong> More than{" "}
                    <span className="text-primary font-bold">3,500+</span> interns placed in leading companies.
                  </p>
                  <p className="text-gray-300 text-sm md:text-base">
                    <strong className="text-white">Skill Certifications:</strong> Over{" "}
                    <span className="text-primary font-bold">4,200+</span> certifications issued to successful interns.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: "5,000+", label: "students enrolled.", trend: "+54.07%" },
                    { value: "3,500+", label: "Interns placed in leading companies", trend: "+48.34%" },
                    { value: "4,200+", label: "certifications issued to successful interns.", trend: "47.89%" },
                  ].map((stat) => (
                    <motion.div
                      key={stat.label}
                      className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <div className="text-2xl md:text-3xl font-black text-primary mb-1">{stat.value}</div>
                      <p className="text-gray-400 text-xs leading-relaxed mb-3">{stat.label}</p>
                      {/* Mini sparkline */}
                      <div className="flex items-end gap-[2px] h-8">
                        {[30, 45, 35, 55, 40, 65, 50, 70, 60, 80].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t-sm"
                            style={{
                              height: `${h}%`,
                              background: i >= 7 ? '#FF6B2B' : 'rgba(255,255,255,0.15)',
                            }}
                          />
                        ))}
                      </div>
                      <p className="text-emerald-400 text-xs font-medium mt-2">{stat.trend}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </FadeIn>

          {/* 90% Satisfaction Rate */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 relative">
            {/* Floating decorative ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -left-10 top-1/2 -translate-y-1/2 w-20 h-20 border-2 border-dashed border-primary/10 rounded-full pointer-events-none hidden lg:block"
            />
            <FadeIn>
              <motion.div
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 relative overflow-hidden"
                whileHover={{ boxShadow: "0 25px 60px rgba(255,107,43,0.1)" }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-sm text-gray-500 font-medium mb-6">90% satisfaction rate</p>
                <div className="flex justify-center">
                  {/* Donut Chart Visual */}
                  <div className="relative w-52 h-52">
                    <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                      <circle cx="60" cy="60" r="50" fill="none" stroke="#F3F4F6" strokeWidth="12" />
                      <motion.circle
                        cx="60" cy="60" r="50" fill="none"
                        stroke="#FF6B2B" strokeWidth="12"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: `0 ${2 * Math.PI * 50}` }}
                        whileInView={{ strokeDasharray: `${2 * Math.PI * 50 * 0.9} ${2 * Math.PI * 50 * 0.1}` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-5xl font-black text-navy">90%</span>
                    </div>
                    {/* Small indicator dot */}
                    <div className="absolute bottom-2 right-6 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/40" />
                  </div>
                </div>
                <p className="text-center text-gray-400 text-xs mt-4">Invest: $24,400</p>
                {/* Subtle radial glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
              </motion.div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2" style={{ fontFamily: "Sora, sans-serif" }}>
                <span className="text-primary">90%</span> Satisfaction Rate —{" "}
                <span className="underline decoration-primary decoration-2 underline-offset-4">Trusted</span> by Thousands!
              </h2>
              <p className="text-gray-600 leading-relaxed mt-4">
                At Innovyasa, we prioritize quality learning, hands-on experience, and career growth, ensuring that every intern gains maximum value. With a 90% satisfaction rate, our interns have transformed their careers, gaining skills, confidence, and job opportunities with top companies.
              </p>
            </FadeIn>
          </div>

          {/* Internship Certification */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 relative">
            {/* Abstract triangle */}
            <svg className="absolute -right-6 top-0 w-32 h-32 text-primary/[0.03] pointer-events-none hidden lg:block" viewBox="0 0 100 100">
              <polygon points="50,0 100,100 0,100" fill="currentColor" />
            </svg>
            <FadeIn>
              <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4 underline decoration-2 underline-offset-4" style={{ fontFamily: "Sora, sans-serif" }}>
                Innovyasa Internship Certification
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Innovyasa provides a prestigious certification upon successful completion of your internship. This certificate validates your expertise and practical experience, making you stand out in the competitive job market.
              </p>
              <Link href="#" className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all group">
                View Certificate
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <motion.div
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-orange-100 flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                {/* Animated floating circles */}
                <motion.div
                  animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 right-4 w-12 h-12 bg-primary/10 rounded-full blur-xl"
                />
                <motion.div
                  animate={{ y: [0, 8, 0], x: [0, -6, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-6 left-6 w-16 h-16 bg-amber-300/10 rounded-full blur-xl"
                />
                <div className="relative">
                  <motion.div
                    className="w-64 h-48 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-gray-100"
                    whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(255,107,43,0.15)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center p-6">
                      <Award className="w-12 h-12 text-primary mx-auto mb-3" />
                      <p className="text-navy font-bold text-sm" style={{ fontFamily: "Sora, sans-serif" }}>Certificate of Completion</p>
                      <p className="text-xs text-gray-400 mt-1">Innovyasa Internship Program</p>
                      <div className="mt-3 h-px w-16 bg-primary/30 mx-auto" />
                    </div>
                  </motion.div>
                  {/* Decorative elements */}
                  <motion.div
                    className="absolute -top-3 -right-3 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Award className="w-5 h-5 text-primary" />
                  </motion.div>
                  {/* Extra decorative dot */}
                  <motion.div
                    className="absolute -bottom-2 -left-2 w-6 h-6 bg-amber-400/20 rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            </FadeIn>
          </div>

          {/* Skill Assessment */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 relative">
            {/* Floating accent lines */}
            <motion.div
              animate={{ width: ["0%", "60%", "0%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-1/4 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent pointer-events-none"
            />
            <FadeIn>
              <motion.div
                className="relative bg-gradient-to-br from-navy to-[#1A2E5A] rounded-3xl p-8 overflow-hidden"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4 }}
              >
                <div className="absolute inset-0 section-grid opacity-5" />
                {/* Animated glow blob */}
                <motion.div
                  animate={{ x: [0, 20, 0], y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
                />
                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-4">
                    <h4 className="text-white font-bold text-lg mb-2">Boost Your Skills with Real-Time Assessments</h4>
                    {[
                      { width: "75%", color: "bg-primary", textColor: "text-primary", label: "75%" },
                      { width: "60%", color: "bg-emerald-400", textColor: "text-emerald-400", label: "60%" },
                      { width: "88%", color: "bg-blue-400", textColor: "text-blue-400", label: "88%" },
                    ].map((bar, idx) => (
                      <div key={idx} className="flex items-center gap-3 mt-3 first:mt-4">
                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full ${bar.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: bar.width }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 + idx * 0.15, ease: "easeOut" }}
                          />
                        </div>
                        <span className={`${bar.textColor} text-xs font-bold`}>{bar.label}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-400 text-xs text-center">
                    Track your growth with data-driven insights and personalized evaluations
                  </p>
                </div>
              </motion.div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <h3 className="text-2xl md:text-3xl font-bold text-navy mb-2" style={{ fontFamily: "Sora, sans-serif" }}>
                Skill Assessment – Measure, <span className="text-primary">Improve</span>, Succeed
              </h3>
              <p className="text-gray-600 leading-relaxed mt-3 mb-6">
                Innovyasa&apos;s Skill Assessment helps you track your progress and sharpen your expertise. Our AI-driven evaluation provides:
              </p>
              <div className="space-y-4">
                {[
                  { label: "Real-time Performance Insights", desc: "Identify strengths & areas for improvement." },
                  { label: "Industry-Standard Benchmarking", desc: "Compare your skills with industry standards." },
                  { label: "Personalized Learning Paths", desc: "Tailored recommendations for growth." },
                  { label: "Certification Readiness", desc: "Ensure you're job-market ready!" },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-navy font-semibold text-sm">{item.label}</span>
                      <span className="text-gray-500 text-sm"> – {item.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Hands-On Experience */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 relative">
            {/* Decorative cross pattern */}
            <motion.div
              animate={{ rotate: [0, 90, 180, 270, 360] }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute -right-8 bottom-0 w-16 h-16 border border-primary/5 rounded-lg pointer-events-none hidden lg:block"
            />
            <FadeIn>
              <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
                <span className="text-primary">Hands</span>-On Experience: Learn by Doing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Gain real-world skills with practical, interactive projects and real-time simulations. Innovyasa&apos;s hands-on approach ensures you&apos;re job-ready with industry-relevant experience.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Briefcase, color: "blue", gradFrom: "from-blue-50", gradTo: "to-indigo-50", borderColor: "border-blue-100", iconColor: "text-blue-500", title: "Real Client Projects", sub: "Work with actual companies" },
                  { icon: Users, color: "primary", gradFrom: "from-primary/5", gradTo: "to-orange-50", borderColor: "border-primary/10", iconColor: "text-primary", title: "Team Collaboration", sub: "Build with real teams" },
                  { icon: TrendingUp, color: "emerald", gradFrom: "from-emerald-50", gradTo: "to-green-50", borderColor: "border-emerald-100", iconColor: "text-emerald-500", title: "Portfolio Building", sub: "Showcase your work" },
                  { icon: Award, color: "purple", gradFrom: "from-purple-50", gradTo: "to-violet-50", borderColor: "border-purple-100", iconColor: "text-purple-500", title: "Industry Standards", sub: "Professional workflows" },
                ].map((card, idx) => (
                  <motion.div
                    key={card.title}
                    className={`bg-gradient-to-br ${card.gradFrom} ${card.gradTo} rounded-2xl p-6 border ${card.borderColor} group`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    whileHover={{ y: -6, boxShadow: "0 15px 40px rgba(0,0,0,0.06)" }}
                  >
                    <card.icon className={`w-8 h-8 ${card.iconColor} mb-3 transition-transform duration-300 group-hover:scale-110`} />
                    <p className="text-navy font-semibold text-sm">{card.title}</p>
                    <p className="text-gray-400 text-xs mt-1">{card.sub}</p>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* 24/7 Support */}
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center relative">
              {/* Floating decorative dots */}
              <motion.div
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 left-1/3 flex gap-2 pointer-events-none"
              >
                <div className="w-2 h-2 rounded-full bg-primary/20" />
                <div className="w-2 h-2 rounded-full bg-primary/30" />
                <div className="w-2 h-2 rounded-full bg-primary/10" />
              </motion.div>
              <div className="grid grid-cols-2 gap-3">
                <motion.div
                  className="bg-gradient-to-br from-primary/10 to-orange-50 rounded-2xl p-5 border border-primary/10 row-span-2 flex flex-col justify-center items-center text-center relative overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Pulse ring */}
                  <motion.div
                    animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    className="absolute w-14 h-14 rounded-2xl border-2 border-primary/30"
                  />
                  <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-3 relative z-10">
                    <span className="text-2xl font-black text-primary">24/7</span>
                  </div>
                  <p className="text-navy font-bold text-sm relative z-10">Always Available</p>
                  <p className="text-gray-400 text-xs mt-1 relative z-10">Round the clock support</p>
                </motion.div>
                <motion.div
                  className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                  whileHover={{ y: -3, boxShadow: "0 10px 30px rgba(255,107,43,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Users className="w-6 h-6 text-primary mb-2" />
                  <p className="text-navy font-semibold text-xs">Mentors</p>
                </motion.div>
                <motion.div
                  className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                  whileHover={{ y: -3, boxShadow: "0 10px 30px rgba(255,107,43,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Star className="w-6 h-6 text-amber-400 mb-2" />
                  <p className="text-navy font-semibold text-xs">Community</p>
                </motion.div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-navy mb-2" style={{ fontFamily: "Sora, sans-serif" }}>
                  24/7 Support: We&apos;ve Got Your Back Anytime, <span className="text-primary">Anywhere</span>
                </h3>
                <p className="text-gray-600 leading-relaxed mt-3 mb-6">
                  Never feel stuck! Innovyasa provides round-the-clock mentorship and technical support to help you succeed.
                </p>
                <div className="space-y-4">
                  {[
                    { title: "Dedicated Mentors:", desc: "Get instant assistance from industry experts." },
                    { title: "Live Chat & Community Forums:", desc: "Connect with peers and mentors for real-time support." },
                    { title: "Resource Hub:", desc: "Access a vast library of FAQs, guides, and video tutorials." },
                  ].map((item, idx) => (
                    <motion.div
                      key={item.title}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">
                        <strong className="text-navy">{item.title}</strong> {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Alumni Success Stories */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        {/* Abstract background for alumni */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 w-44 h-44 bg-primary/[0.03] rounded-full blur-2xl pointer-events-none"
        />
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-10 w-36 h-36 bg-navy/[0.03] rounded-full blur-2xl pointer-events-none"
        />
        <div className="max-w-7xl mx-auto relative">
          <FadeIn className="text-center mb-14">
            <span className="hero-tag inline-flex mb-4">Success Stories</span>
            <h2 className="section-title">
              Alumni <span className="text-primary">Success Stories</span>
            </h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {alumni.map((a) => (
              <StaggerItem key={a.name}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: a.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm italic mb-4">
                    &ldquo;Innovyasa gave me the skills and confidence to land my dream job. The real-world projects and expert mentorship made all the difference!&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-sm">
                      {a.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-navy text-sm">{a.name}</div>
                      <div className="text-xs text-gray-400">{a.role} • {a.course}</div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Who Can Apply */}
      <section className="py-16 px-4 bg-primary/5 relative overflow-hidden">
        {/* Animated flowing line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
          <motion.path
            d="M0,50 Q250,0 500,50 T1000,50"
            fill="none"
            stroke="rgba(255,107,43,0.06)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
        <div className="max-w-3xl mx-auto text-center relative">
          <FadeIn>
            <h2 className="section-title mb-4">Who Can <span className="text-primary">Apply?</span></h2>
            <motion.p
              className="text-gray-600 leading-relaxed bg-white rounded-2xl p-8 shadow-sm border border-primary/10"
              whileHover={{ boxShadow: "0 15px 50px rgba(255,107,43,0.08)" }}
              transition={{ duration: 0.4 }}
            >
              &ldquo;We welcome passionate learners, fresh graduates, and students eager to gain industry experience. If you have the enthusiasm to learn and innovate, this internship is for you!&rdquo;
            </motion.p>
            <Link href="/internships/apply" className="btn-primary mt-8 inline-flex">
              Start Your Application <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
