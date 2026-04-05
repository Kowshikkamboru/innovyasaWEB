"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, MapPin, Clock, Briefcase, Search, Filter,
  Heart, Zap, Globe, Users, TrendingUp, Star, CheckCircle,
  Coffee, Laptop, Award, BookOpen, Code, Palette, BarChart3,
  MessageSquare, Sparkles, ChevronRight, Send
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimationUtils";

const departments = ["All", "Engineering", "Design", "Education", "Marketing", "Business", "Operations"];

const jobs = [
  {
    id: 1,
    title: "Senior Frontend Engineer",
    dept: "Engineering",
    type: "Full-time",
    location: "Hyderabad / Remote",
    experience: "3–5 years",
    skills: ["React", "TypeScript", "Next.js", "Tailwind"],
    desc: "Build exceptional user experiences for our ed-tech platform serving 2500+ learners. Own the frontend architecture and mentor junior devs.",
    posted: "2 days ago",
    urgent: true,
  },
  {
    id: 2,
    title: "Flutter Mobile Developer",
    dept: "Engineering",
    type: "Full-time",
    location: "Remote",
    experience: "2–4 years",
    skills: ["Flutter", "Dart", "Firebase", "REST APIs"],
    desc: "Build and maintain our cross-platform mobile app used by students and mentors daily. Work closely with the product team.",
    posted: "5 days ago",
    urgent: false,
  },
  {
    id: 3,
    title: "UI/UX Product Designer",
    dept: "Design",
    type: "Full-time",
    location: "Hyderabad / Remote",
    experience: "2–4 years",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    desc: "Shape the visual and interaction design of our platform. You'll own end-to-end design from wireframes to pixel-perfect specs.",
    posted: "1 week ago",
    urgent: false,
  },
  {
    id: 4,
    title: "Backend Engineer (Node.js)",
    dept: "Engineering",
    type: "Full-time",
    location: "Remote",
    experience: "2–4 years",
    skills: ["Node.js", "PostgreSQL", "Redis", "AWS"],
    desc: "Design and build scalable APIs, microservices, and real-time features powering the INNOVYASA platform.",
    posted: "3 days ago",
    urgent: true,
  },
  {
    id: 5,
    title: "Curriculum Designer (Tech)",
    dept: "Education",
    type: "Full-time",
    location: "Hyderabad",
    experience: "3+ years",
    skills: ["Instructional Design", "LMS", "Python", "AI/ML"],
    desc: "Design structured, engaging tech curricula for our courses. Work with industry experts to create content that actually gets people hired.",
    posted: "4 days ago",
    urgent: false,
  },
  {
    id: 6,
    title: "Digital Marketing Manager",
    dept: "Marketing",
    type: "Full-time",
    location: "Hyderabad / Remote",
    experience: "2–3 years",
    skills: ["SEO", "Google Ads", "Content", "Analytics"],
    desc: "Drive growth across organic and paid channels. Own campaigns from concept to conversion for our ed-tech and IT services verticals.",
    posted: "1 week ago",
    urgent: false,
  },
  {
    id: 7,
    title: "Business Development Executive",
    dept: "Business",
    type: "Full-time",
    location: "Hyderabad",
    experience: "1–3 years",
    skills: ["B2B Sales", "Partnerships", "CRM", "Communication"],
    desc: "Build relationships with companies for hiring partnerships and corporate training. Help us expand the INNOVYASA network.",
    posted: "6 days ago",
    urgent: false,
  },
  {
    id: 8,
    title: "DevOps / Cloud Engineer",
    dept: "Engineering",
    type: "Full-time",
    location: "Remote",
    experience: "2–4 years",
    skills: ["AWS", "Docker", "CI/CD", "Kubernetes"],
    desc: "Maintain and evolve our cloud infrastructure. Ensure uptime, performance, and security for our growing platform.",
    posted: "2 days ago",
    urgent: false,
  },
  {
    id: 9,
    title: "Community & Student Success",
    dept: "Operations",
    type: "Full-time",
    location: "Hyderabad / Remote",
    experience: "1–2 years",
    skills: ["Community Management", "Support", "Events", "Excel"],
    desc: "Be the voice of INNOVYASA to our student community. Run events, manage Discord/WhatsApp groups, and ensure student happiness.",
    posted: "3 days ago",
    urgent: false,
  },
];

const perks = [
  { icon: Coffee, title: "Flexible Hours", desc: "Work when you're at your best. Results over rigid schedules." },
  { icon: Laptop, title: "Remote-Friendly", desc: "Most roles are remote or hybrid. Work from anywhere in India." },
  { icon: BookOpen, title: "Learning Budget", desc: "₹15,000/year for courses, books, and conferences." },
  { icon: Heart, title: "Health Coverage", desc: "Health insurance for you and your immediate family." },
  { icon: TrendingUp, title: "Equity Options", desc: "Early joiners get ESOPs. Grow with us as we grow." },
  { icon: Users, title: "Mentorship", desc: "Work directly with founders and senior industry experts." },
  { icon: Globe, title: "Global Exposure", desc: "Build products used across India and partner with global firms." },
  { icon: Zap, title: "Fast-Track Growth", desc: "Startup pace means rapid responsibility and career acceleration." },
];

const values = [
  { emoji: "🚀", title: "Ship Fast, Learn Faster", desc: "We believe in moving with urgency and learning from every iteration." },
  { emoji: "🤝", title: "Radical Transparency", desc: "Honest conversations, open metrics, and no hidden agendas." },
  { emoji: "💡", title: "Student Obsession", desc: "Every decision traces back to impact on our learners." },
  { emoji: "🌱", title: "Grow Together", desc: "Individual growth and company growth are the same thing here." },
];

const deptColors: Record<string, string> = {
  Engineering: "bg-blue-100 text-blue-700",
  Design: "bg-purple-100 text-purple-700",
  Education: "bg-emerald-100 text-emerald-700",
  Marketing: "bg-amber-100 text-amber-700",
  Business: "bg-rose-100 text-rose-700",
  Operations: "bg-cyan-100 text-cyan-700",
};

const deptIcons: Record<string, typeof Code> = {
  Engineering: Code,
  Design: Palette,
  Education: BookOpen,
  Marketing: BarChart3,
  Business: Briefcase,
  Operations: MessageSquare,
};

export default function CareersPage() {
  const [activeDept, setActiveDept] = useState("All");
  const [search, setSearch] = useState("");
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const filtered = jobs.filter(j => {
    const matchDept = activeDept === "All" || j.dept === activeDept;
    const matchSearch = !search ||
      j.title.toLowerCase().includes(search.toLowerCase()) ||
      j.skills.some(s => s.toLowerCase().includes(search.toLowerCase()));
    return matchDept && matchSearch;
  });

  return (
    <div className="overflow-x-hidden">

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-navy via-[#0D2447] to-navy overflow-hidden">
        <div className="absolute inset-0 section-grid opacity-10" />
        <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.06, 0.14, 0.06] }} transition={{ duration: 12, repeat: Infinity }} className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/15 blur-[120px] rounded-full" />
        <motion.div animate={{ scale: [1.2, 1, 1.2] }} transition={{ duration: 15, repeat: Infinity, delay: 4 }} className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full" />

        {/* Floating shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [-12, 12, -12], rotate: [0, 90, 180, 270, 360] }}
            transition={{ duration: 10 + i * 2, repeat: Infinity, delay: i * 0.8 }}
            className="absolute hidden lg:block opacity-20"
            style={{ top: `${10 + i * 11}%`, left: i % 2 === 0 ? `${3 + i * 2}%` : `${78 + i}%` }}
          >
            <div className={`border border-white/20 ${i % 3 === 0 ? "rounded-full" : i % 3 === 1 ? "rotate-45" : "rounded-lg"}`}
              style={{ width: `${10 + i * 3}px`, height: `${10 + i * 3}px` }} />
          </motion.div>
        ))}

        <div className="max-w-7xl mx-auto px-4 py-24 relative">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="hero-tag inline-flex mb-8">
              <Sparkles className="w-3.5 h-3.5" /> We&apos;re Hiring
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              Build the Future of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">
                Learning
              </span>{" "}
              with Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="text-gray-300 text-xl leading-relaxed mb-10"
            >
              Join a passionate team building India's most innovative ed-tech platform. We're growing fast and looking for people who care deeply about impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <a href="#openings" className="btn-primary text-base">
                View Open Roles <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#culture" className="btn-outline border-white/30 text-white hover:bg-white hover:text-navy text-base">
                Our Culture
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {[
                { value: jobs.length, suffix: "+", label: "Open Roles" },
                { value: "2024", suffix: "", label: "Founded" },
                { value: "50+", suffix: "", label: "Team Members" },
                { value: "100%", suffix: "", label: "Remote Options" },
              ].map(s => (
                <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-black text-primary">{s.value}{s.suffix}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CULTURE ──────────────────────────────────────────────────────── */}
      <section id="culture" className="py-28 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="hero-tag inline-flex mb-4">Life at INNOVYASA</span>
            <h2 className="section-title">
              A Culture Built on <span className="text-primary">Purpose</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              We're not just building a company — we're building a movement. Here&apos;s what it means to be part of the team.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {values.map(v => (
              <StaggerItem key={v.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all text-center"
                >
                  <div className="text-4xl mb-4">{v.emoji}</div>
                  <h3 className="font-bold text-navy text-base mb-2" style={{ fontFamily: "Sora, sans-serif" }}>{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Culture photo mosaic */}
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { emoji: "🖥️", label: "Deep work sessions", bg: "from-blue-500/10 to-indigo-500/10" },
                { emoji: "🏆", label: "Team hackathons", bg: "from-primary/10 to-orange-500/10" },
                { emoji: "🌿", label: "Offsite retreats", bg: "from-emerald-500/10 to-teal-500/10" },
                { emoji: "📚", label: "Learning Fridays", bg: "from-purple-500/10 to-violet-500/10" },
                { emoji: "🎉", label: "Celebrating wins", bg: "from-amber-500/10 to-yellow-500/10" },
                { emoji: "🤝", label: "Cross-team collab", bg: "from-rose-500/10 to-pink-500/10" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.03 }}
                  className={`bg-gradient-to-br ${item.bg} border border-gray-100 rounded-2xl p-8 flex flex-col items-center justify-center text-center ${i === 1 ? "md:col-span-1" : ""}`}
                  style={{ minHeight: "140px" }}
                >
                  <span className="text-4xl mb-2">{item.emoji}</span>
                  <span className="text-gray-600 text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── PERKS ───────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-gradient-to-br from-navy to-[#0D2447] relative overflow-hidden">
        <div className="absolute inset-0 section-grid opacity-10" />
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-3xl rounded-full" />

        <div className="max-w-7xl mx-auto relative">
          <FadeIn className="text-center mb-14">
            <span className="hero-tag inline-flex mb-4 border-primary/30 bg-primary/10 text-primary">Benefits & Perks</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "Sora, sans-serif" }}>
              We Take Care of <span className="text-primary">Our People</span>
            </h2>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {perks.map(p => (
              <StaggerItem key={p.title}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary/20 transition-all"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <p.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-white text-base mb-2">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── JOB OPENINGS ────────────────────────────────────────────────── */}
      <section id="openings" className="py-28 px-4 bg-gray-50 relative">
        <div className="absolute inset-0 section-dots opacity-15" />
        <div className="max-w-7xl mx-auto relative">
          <FadeIn className="text-center mb-12">
            <span className="hero-tag inline-flex mb-4">Open Positions</span>
            <h2 className="section-title">
              {filtered.length} Open <span className="text-primary">Role{filtered.length !== 1 ? "s" : ""}</span>
            </h2>
          </FadeIn>

          {/* Search + filter */}
          <FadeIn className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search roles or skills..."
                  className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary shadow-sm"
                />
              </div>
            </div>

            {/* Department pills */}
            <div className="flex flex-wrap gap-2 mt-4">
              {departments.map(dept => (
                <motion.button
                  key={dept}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveDept(dept)}
                  className={activeDept === dept ? "pill-active" : "pill-inactive"}
                >
                  {dept}
                </motion.button>
              ))}
            </div>
          </FadeIn>

          {/* Job cards */}
          <div className="space-y-4">
            <AnimatePresence>
              {filtered.map((job, i) => {
                const DeptIcon = deptIcons[job.dept] || Briefcase;
                const isExpanded = expandedJob === job.id;

                return (
                  <motion.div
                    key={job.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-primary/20 hover:shadow-md transition-all overflow-hidden"
                  >
                    {/* Card header */}
                    <div
                      className="p-6 cursor-pointer"
                      onClick={() => setExpandedJob(isExpanded ? null : job.id)}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4 min-w-0">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${deptColors[job.dept] || "bg-gray-100 text-gray-600"}`}>
                            <DeptIcon className="w-5 h-5" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 flex-wrap mb-1">
                              <h3 className="font-bold text-navy text-lg" style={{ fontFamily: "Sora, sans-serif" }}>{job.title}</h3>
                              {job.urgent && (
                                <span className="text-[10px] bg-red-50 text-red-500 border border-red-100 px-2 py-0.5 rounded-full font-bold">
                                  🔥 Urgent
                                </span>
                              )}
                            </div>
                            <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{job.location}</span>
                              <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" />{job.type}</span>
                              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{job.experience}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <span className="hidden sm:block text-xs text-gray-400">{job.posted}</span>
                          <motion.div animate={{ rotate: isExpanded ? 90 : 0 }} transition={{ duration: 0.2 }}>
                            <ChevronRight className="w-5 h-5 text-gray-400" />
                          </motion.div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-4 ml-16">
                        {job.skills.map(s => (
                          <span key={s} className="text-[11px] bg-gray-50 border border-gray-100 text-gray-500 px-2.5 py-1 rounded-full">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 border-t border-gray-50 pt-5">
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">{job.desc}</p>
                            <div className="flex flex-wrap gap-3">
                              <Link
                                href={`/careers/apply?role=${encodeURIComponent(job.title)}&dept=${job.dept}`}
                                className="btn-primary text-sm"
                              >
                                Apply for This Role <ArrowRight className="w-4 h-4" />
                              </Link>
                              <button className="btn-outline text-sm">
                                Learn More
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {filtered.length === 0 && (
              <div className="text-center py-16">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="font-bold text-navy text-lg mb-2">No roles found</h3>
                <p className="text-gray-400 text-sm">Try a different search or department filter.</p>
              </div>
            )}
          </div>

          {/* Open application */}
          <FadeIn className="mt-12">
            <div className="bg-white border border-dashed border-gray-200 rounded-2xl p-8 text-center hover:border-primary/30 transition-colors">
              <div className="text-3xl mb-3">💌</div>
              <h3 className="font-bold text-navy text-xl mb-2" style={{ fontFamily: "Sora, sans-serif" }}>Don&apos;t see the right fit?</h3>
              <p className="text-gray-500 text-sm mb-5 max-w-md mx-auto">
                We're always interested in exceptional people. Send us your profile and we'll reach out if something opens up.
              </p>
              <a href="mailto:careers@innovyasa.com" className="btn-primary inline-flex">
                <Send className="w-4 h-4" /> Send Open Application
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── HIRING PROCESS ───────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="hero-tag inline-flex mb-4">How We Hire</span>
            <h2 className="section-title">
              Simple. <span className="text-primary">Transparent.</span> Fair.
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: "01", icon: "📝", title: "Apply Online", desc: "Submit your application in under 5 minutes. No cover letter required." },
              { step: "02", icon: "📞", title: "Intro Call", desc: "30-minute chat with our talent team to learn about you and share about us." },
              { step: "03", icon: "🧠", title: "Technical / Portfolio Round", desc: "A practical task or case study relevant to the role. No trick questions." },
              { step: "04", icon: "🤝", title: "Offer & Onboarding", desc: "Final conversation with the team lead. Offer within 3 business days." },
            ].map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.1}>
                <div className="relative">
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all text-center h-full">
                    <div className="text-xs font-black text-primary opacity-30 mb-3 text-3xl" style={{ fontFamily: "Sora, sans-serif" }}>{step.step}</div>
                    <div className="text-3xl mb-3">{step.icon}</div>
                    <h3 className="font-bold text-navy text-base mb-2">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 z-10">
                      <ArrowRight className="w-5 h-5 text-gray-200" />
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-orange-400">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="text-5xl mb-6">🚀</div>
            <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
              Ready to Make an Impact?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Join the team that&apos;s reshaping how India learns, grows, and builds.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#openings" className="bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors">
                View All Openings
              </a>
              <a href="mailto:careers@innovyasa.com" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2">
                <Send className="w-4 h-4" /> careers@innovyasa.com
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
