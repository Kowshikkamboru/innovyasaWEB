"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight, Star, CheckCircle, Play, ChevronLeft, ChevronRight,
  BookOpen, Users, Briefcase, Award, Globe, Code, Cpu, Zap,
  TrendingUp, MessageSquare, Github, Linkedin, Youtube, Instagram, Twitter,
  Brain, Monitor, Shield
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimationUtils";

const companies = [
  "Amazon", "Google", "TCS", "Baker Hughes", "HP", "DOW",
  "Deloitte", "ORACLE", "FedEx", "Accenture", "NVIDIA", "PWC",
  "Meta", "Intel", "IBM", "Infosys", "Cognizant", "TATA",
  "HUAWEI", "Tech Mahindra", "HCL", "SAP", "EY", "Microsoft"
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Developer at TCS",
    content: "Innovyasa completely transformed my career. The hands-on internship program gave me real-world skills that no classroom could.",
    rating: 5,
    avatar: "PS",
    color: "bg-orange-100 text-orange-700"
  },
  {
    name: "Rahul Verma",
    role: "UI/UX Designer at Infosys",
    content: "The courses here are exceptional. I landed my dream job thanks to the portfolio I built during the program.",
    rating: 5,
    avatar: "RV",
    color: "bg-blue-100 text-blue-700"
  },
  {
    name: "Ananya Patel",
    role: "Data Analyst at Amazon",
    content: "From zero coding experience to a full-time data analyst role – Innovyasa made this possible in just 6 months!",
    rating: 5,
    avatar: "AP",
    color: "bg-green-100 text-green-700"
  },
  {
    name: "Kiran Reddy",
    role: "Backend Engineer at Google",
    content: "The mentorship quality here is unmatched. My mentor had 10+ years of industry experience and truly cared.",
    rating: 5,
    avatar: "KR",
    color: "bg-purple-100 text-purple-700"
  },
];

const trendingCourses = [
  {
    title: "Web Development Bootcamp",
    category: "Development",
    price: "₹1299",
    oldPrice: "₹4999",
    rating: 4.8,
    students: "3.2k",
    duration: "12 weeks",
    color: "from-blue-500 to-cyan-500",
    icon: "💻"
  },
  {
    title: "Data Science & AI",
    category: "AI & ML",
    price: "₹1599",
    oldPrice: "₹5999",
    rating: 4.9,
    students: "2.8k",
    duration: "16 weeks",
    color: "from-purple-500 to-pink-500",
    icon: "🧠"
  },
  {
    title: "Cybersecurity Internship",
    category: "Security",
    price: "₹999",
    oldPrice: "₹3999",
    rating: 4.7,
    students: "1.9k",
    duration: "8 weeks",
    color: "from-green-500 to-teal-500",
    icon: "🔒"
  },
];

const services = [
  {
    icon: BookOpen,
    title: "Internships & Courses",
    desc: "Explore internships across various domains with real-world projects. Access certified courses designed by industry experts.",
    color: "bg-orange-50",
    iconColor: "text-primary",
    href: "/courses"
  },
  {
    icon: Code,
    title: "Devsol – Digital Solutions",
    desc: "Tailored digital transformation services for startups & enterprises. Academic project guidance for students.",
    color: "bg-navy/5",
    iconColor: "text-navy",
    href: "/devsol"
  },
  {
    icon: Users,
    title: "Community",
    desc: "Participate in forums, hackathons, coding challenges, and knowledge-sharing sessions with industry experts.",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    href: "/community"
  },
];

const stats = [
  { value: "2500+", label: "Students Enrolled", icon: Users },
  { value: "1000+", label: "Company Partners", icon: Globe },
  { value: "220+", label: "Live Internships", icon: Briefcase },
  { value: "50+", label: "IT Services", icon: Code },
];

export default function HomePage() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const heroRef = useRef(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, []);
  const { scrollYProgress } = useScroll({ target: heroRef });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="overflow-x-hidden">
      {/* ===== HERO SECTION ===== */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-navy via-[#1A2E5A] to-navy overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 section-grid opacity-20" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-primary/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full border border-white/5"
        />
        <div className="absolute top-20 left-20 w-3 h-3 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-2 h-2 bg-orange-300 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-primary/50 rounded-full animate-pulse" style={{ animationDelay: "2s" }} />

        {/* Orange blob */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="hero-tag mb-6"
              >
                <span className="w-2 h-2 bg-primary rounded-full inline-block animate-pulse" />
                An Innovative Approach to Success
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                Discover{" "}
                <span className="text-primary">Opportunities</span> to Learn,
                Grow &amp; Transform Your Future
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-300 text-lg mb-8 leading-relaxed"
              >
                with <strong className="text-white">INNOVYASA</strong>. We believe in empowering individuals and businesses through cutting-edge IT services and Ed-tech solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4 mb-12"
              >
                <Link href="/courses" className="btn-primary text-base">
                  Explore Courses <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/internships" className="btn-outline border-white/40 text-white hover:bg-white hover:text-navy text-base">
                  <Play className="w-4 h-4" /> Find Internships
                </Link>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              >
                {stats.map(({ value, label, icon: Icon }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="text-center p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                  >
                    <div className="text-2xl font-bold text-primary mb-0.5">{value}</div>
                    <div className="text-xs text-gray-400">{label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right - Visual */}
            <div className="hidden lg:block relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Floating cards */}
                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-8 -left-8 bg-white rounded-2xl p-4 shadow-2xl z-10 min-w-[180px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Placement Rate</div>
                      <div className="font-bold text-navy">90% Success</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [8, -8, 8] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-8 bg-white rounded-2xl p-4 shadow-2xl z-10 min-w-[200px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                      <Star className="w-5 h-5 text-green-500 fill-green-500" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Student Rating</div>
                      <div className="font-bold text-navy">4.9/5 Average</div>
                    </div>
                  </div>
                </motion.div>

                {/* Central visual */}
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  <div className="w-full h-full rounded-3xl bg-gradient-to-br from-primary/20 to-navy/40 border border-white/10 flex items-center justify-center overflow-hidden">
                    {/* Decorative circles */}
                    <div className="absolute inset-8 rounded-full border border-white/5" />
                    <div className="absolute inset-16 rounded-full border border-primary/10" />
                    <div className="absolute inset-24 rounded-full bg-primary/5" />

                    {/* Center badge */}
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 6, repeat: Infinity }}
                      className="relative text-center z-10"
                    >
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl glow-primary">
                        <span className="text-white font-black text-2xl">IV</span>
                      </div>
                      <div className="text-white font-bold text-xl mb-1">Innovyasa</div>
                      <div className="text-gray-300 text-sm">IT & EdTech Platform</div>
                    </motion.div>

                    {/* Orbiting icons */}
                    {[BookOpen, Code, Users, Award].map((Icon, i) => (
                      <motion.div
                        key={i}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0"
                        style={{ transformOrigin: "50% 50%" }}
                      >
                        <div
                          className="absolute w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20"
                          style={{
                            top: `${10 + i * 20}%`,
                            left: i % 2 === 0 ? "5%" : "85%",
                          }}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 30C1200 0 960 60 720 30C480 0 240 60 0 30L0 60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ===== WHY INNOVYASA ===== */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="hero-tag inline-flex mb-4">Why Innovyasa?</span>
            <h2 className="section-title">
              Building Bridges Between{" "}
              <span className="highlight-orange">Learning</span> and Technology
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.1}>
                <Link href={service.href}>
                  <motion.div
                    whileHover={{ y: -8, boxShadow: "0 20px 60px rgba(255,107,43,0.12)" }}
                    className={`${service.color} p-8 rounded-2xl h-full cursor-pointer transition-all duration-300`}
                  >
                    <div className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-5 shadow-md`}>
                      <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3" style={{ fontFamily: "Sora, sans-serif" }}>
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                    <div className="mt-4 flex items-center gap-2 text-primary font-semibold text-sm">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRENDING COURSES ===== */}
      <section className="py-20 px-4 bg-gray-50 section-dots">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12">
            <div>
              <span className="hero-tag inline-flex mb-3">Hot Right Now</span>
              <h2 className="section-title">
                Trending Internships &amp;{" "}
                <span className="highlight-orange">Courses</span>
              </h2>
            </div>
            <Link href="/courses" className="btn-outline mt-4 sm:mt-0">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {trendingCourses.map((course) => (
              <StaggerItem key={course.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="course-card group"
                >
                  <div className={`h-40 bg-gradient-to-br ${course.color} flex items-center justify-center text-6xl relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10" />
                    <span className="relative z-10">{course.icon}</span>
                    <div className="absolute top-3 left-3 badge-orange">{course.category}</div>
                    <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {course.duration}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-navy text-lg mb-2 group-hover:text-primary transition-colors" style={{ fontFamily: "Sora, sans-serif" }}>
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="font-semibold text-gray-700">{course.rating}</span>
                      </div>
                      <span>•</span>
                      <span>{course.students} students</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-primary font-bold text-xl">{course.price}</span>
                        <span className="text-gray-400 text-sm line-through">{course.oldPrice}</span>
                      </div>
                      <Link href="/courses" className="btn-primary text-xs py-2 px-4">
                        Enroll
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== PARTNER COMPANIES MARQUEE ===== */}
      <section className="py-20 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="section-title mb-4">
              Innovyasa Collaborates with{" "}
              <span className="highlight-orange">1000+ Companies</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Innovyasa has established strong partnerships with over 1000 companies, ranging from leading tech giants to fast-growing startups.
            </p>
          </FadeIn>

          {/* Marquee Row 1 */}
          <div className="relative overflow-hidden py-4 mb-4">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
            <motion.div
              animate={{ x: [0, -1920] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="flex gap-8 w-max"
            >
              {[...companies, ...companies].map((company, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 bg-gray-50 hover:bg-primary/5 border border-gray-200 hover:border-primary/30 rounded-xl px-6 py-3 text-sm font-semibold text-gray-600 hover:text-primary transition-all duration-200 cursor-pointer whitespace-nowrap"
                >
                  {company}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Marquee Row 2 - reversed */}
          <div className="relative overflow-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
            <motion.div
              animate={{ x: [-1920, 0] }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="flex gap-8 w-max"
            >
              {[...companies.slice(12), ...companies.slice(0, 12), ...companies].map((company, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 bg-gray-50 hover:bg-primary/5 border border-gray-200 hover:border-primary/30 rounded-xl px-6 py-3 text-sm font-semibold text-gray-600 hover:text-primary transition-all duration-200 cursor-pointer whitespace-nowrap"
                >
                  {company}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 px-4 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 section-grid opacity-10" />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto relative">
          <FadeIn className="text-center mb-14">
            <span className="hero-tag inline-flex mb-4 border-primary/30 bg-primary/10">Voice of Success</span>
            <h2 className="text-4xl font-bold text-white" style={{ fontFamily: "Sora, sans-serif" }}>
              What Our Students{" "}
              <span className="text-primary">Are Saying</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-5 italic">
                    &ldquo;{t.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center font-bold text-sm`}>
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{t.name}</div>
                      <div className="text-gray-400 text-xs">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT / GET IN TOUCH ===== */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-navy to-[#1A2E5A] rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 section-grid opacity-10" />
            <div className="relative grid lg:grid-cols-2 gap-0">
              {/* Left visual */}
              <div className="p-10 lg:p-14 flex flex-col justify-between">
                <div>
                  <span className="hero-tag inline-flex mb-6 border-primary/30 bg-primary/10 text-primary">Get In Touch</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
                    Have Questions? We&apos;re Here to Help!
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    Connect with us for internship opportunities, courses, or any queries. Your learning success is our priority!
                  </p>
                </div>
                <div className="space-y-4">
                  {["Expert mentorship from industry professionals", "Real-world project experience", "Placement assistance & career guidance", "24/7 student support"].map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right form */}
              <div className="bg-white/5 backdrop-blur-sm p-10 lg:p-14">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Your Phone No."
                      className="w-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Your Country"
                      className="w-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={3}
                      placeholder="Enter State"
                      className="w-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full btn-primary justify-center py-4"
                  >
                    Submit <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
