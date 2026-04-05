"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star, Clock, Users, BookOpen, Play, CheckCircle, ChevronDown,
  Globe, Subtitles, FileText, Award, ArrowRight, Heart, Share2,
  BarChart3, Zap, Lock, Video, Download, Infinity as InfinityIcon,
  ChevronLeft
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimationUtils";

// Sample course data — in production, fetch by `params.slug`
const course = {
  title: "Basics of UI/UX Designing",
  subtitle: "Master the complete design process from research to pixel-perfect prototypes",
  category: "UI/UX Designing",
  price: 1999,
  originalPrice: 5999,
  rating: 4.0,
  reviews: 86,
  enrolled: 3240,
  level: "Beginner",
  duration: "41h 53m",
  sections: 13,
  lectures: 103,
  language: "English",
  subtitles: "English, Hindi",
  resources: "12 Files",
  certificate: "On Completion",
  lastUpdated: "March 2025",
  instructor: {
    name: "Kavitha Nair",
    role: "Senior UI/UX Designer",
    rating: 4.8,
    students: 12400,
    courses: 8,
    avatar: "KN",
    bio: "10+ years in product design at top startups. Worked with Figma, Adobe XD, and led design teams at 3 unicorn companies.",
  },
  thumbnail: "🎨",
  thumbnailGradient: "from-[#1a1145] to-[#5b3fa0]",
  tags: ["Figma", "Adobe XD", "Prototyping", "User Research", "Design Systems"],
  whatYouLearn: [
    "The Principles of user interface design and prototype",
    "The basics of Human-Computer Interaction",
    "Buttons, Forms, Icons, Cards, Navigation Bars",
    "Material Design & Human Interface Guidelines",
    "Creating and Using Design Systems",
    "Understanding Design-to-Code Handoff",
    "Figma, Adobe XD, Sketch workflows",
    "User research and usability testing methods",
  ],
  requirements: [
    "No previous knowledge in Figma required!",
    "Desire and passion to learn about interface design",
    "Design according to target audience's design elements",
    "Material Design & Human Interface Guidelines",
    "Patience and positive mindset",
  ],
  curriculum: [
    {
      title: "Introduction",
      lectures: 3,
      duration: "27mins",
      items: [
        { title: "User interface overview", duration: "04:22", type: "video", free: true },
        { title: "User research and user needs", duration: "06:35", type: "video", free: true },
        { title: "User interface Principles", duration: "14:47", type: "video", free: false },
      ],
    },
    {
      title: "Drafting & Wireframing",
      lectures: 8,
      duration: "49mins",
      items: [
        { title: "Introduction to wireframing", duration: "07:15", type: "video", free: false },
        { title: "Low-fidelity sketches", duration: "09:20", type: "video", free: false },
        { title: "Digital wireframes in Figma", duration: "12:40", type: "video", free: false },
        { title: "Wireframe review & critique", duration: "05:55", type: "video", free: false },
      ],
    },
    {
      title: "Visual Design & Demonstration",
      lectures: 5,
      duration: "57mins",
      items: [
        { title: "Color theory for UI designers", duration: "11:30", type: "video", free: false },
        { title: "Typography in UI design", duration: "09:45", type: "video", free: false },
        { title: "Iconography and illustration", duration: "08:20", type: "video", free: false },
      ],
    },
    {
      title: "Prototyping & Interaction",
      lectures: 7,
      duration: "1hr",
      items: [
        { title: "Interactive prototypes in Figma", duration: "14:10", type: "video", free: false },
        { title: "Micro-animations and transitions", duration: "11:25", type: "video", free: false },
        { title: "Prototype testing methods", duration: "08:50", type: "video", free: false },
      ],
    },
    {
      title: "Design Systems & Handoff",
      lectures: 2,
      duration: "7mins",
      items: [
        { title: "Building design tokens", duration: "04:30", type: "video", free: false },
        { title: "Handoff to developers", duration: "03:15", type: "video", free: false },
      ],
    },
  ],
  description: [
    {
      heading: "This Course is constantly being revised and updated with new lessons",
      body: "Online platforms often offer micro-courses or modules, allowing learners to focus on specific topics of interest and acquire targeted skills. This comprehensive UI/UX course covers everything from fundamental principles to advanced prototyping techniques.",
    },
    {
      heading: "You're going to learn everything about user interface design with Figma",
      body: "We'll take you from complete beginner to confident designer. You'll build real projects, get feedback from industry professionals, and leave with a portfolio-ready case study. By the end, you'll be able to design for any platform — web, mobile, or desktop.",
    },
  ],
};

export default function CourseDetailPage() {
  const [openSection, setOpenSection] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<"overview" | "curriculum" | "instructor" | "reviews">("overview");
  const [wishlisted, setWishlisted] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const discount = Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100);

  return (
    <div className="overflow-x-hidden bg-white">

      {/* ─── BREADCRUMB ───────────────────────────────────────────────────── */}
      <div className="bg-gray-50 border-b border-gray-100 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/courses" className="hover:text-primary transition-colors">Courses</Link>
          <span>/</span>
          <Link href="/courses" className="hover:text-primary transition-colors">{course.category}</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium truncate max-w-xs">{course.title}</span>
        </div>
      </div>

      {/* ─── HERO BANNER ─────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-navy via-[#1A2E5A] to-navy relative overflow-hidden">
        <div className="absolute inset-0 section-grid opacity-10" />
        <div className="max-w-7xl mx-auto px-4 py-14 relative">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">
            {/* Left — Course info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap gap-2 mb-5"
              >
                <span className="badge-orange">{course.category}</span>
                <span className="bg-white/10 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full border border-white/10">
                  {course.level}
                </span>
                {course.tags.map(t => (
                  <span key={t} className="text-[11px] bg-white/5 text-gray-400 px-2.5 py-0.5 rounded-full border border-white/10">
                    {t}
                  </span>
                ))}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                {course.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-300 text-lg mb-6"
              >
                {course.subtitle}
              </motion.p>

              {/* Rating */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 mb-6"
              >
                <div className="flex items-center gap-2">
                  <span className="text-primary font-bold text-xl">{course.rating}</span>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(course.rating) ? "fill-amber-400 text-amber-400" : "fill-white/20 text-white/20"}`} />
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm">({course.reviews} ratings)</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-300 text-sm">
                  <Users className="w-4 h-4" />
                  {course.enrolled.toLocaleString()} students enrolled
                </div>
              </motion.div>

              {/* Meta */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-5 text-sm text-gray-400"
              >
                {[
                  { icon: Globe, label: `Language: ${course.language}` },
                  { icon: Subtitles, label: `Subtitles: ${course.subtitles}` },
                  { icon: FileText, label: `Resources: ${course.resources}` },
                  { icon: Award, label: `Certificate: ${course.certificate}` },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-1.5">
                    <Icon className="w-4 h-4 text-primary" />
                    <span>{label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — Course card (desktop only, sticky) */}
            <motion.div
              ref={sidebarRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                {/* Thumbnail */}
                <div className={`h-52 bg-gradient-to-br ${course.thumbnailGradient} flex items-center justify-center relative`}>
                  <span className="text-8xl">{course.thumbnail}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/20"
                  >
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl">
                      <Play className="w-7 h-7 text-navy fill-navy ml-1" />
                    </div>
                  </motion.button>
                  <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    {discount}% OFF
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-black text-navy" style={{ fontFamily: "Sora, sans-serif" }}>
                      ₹{course.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-gray-400 text-base line-through">₹{course.originalPrice.toLocaleString("en-IN")}</span>
                  </div>

                  <Link
                    href="#enroll"
                    className="btn-primary w-full justify-center py-4 text-base mb-3"
                  >
                    Enroll Now
                  </Link>
                  <button className="w-full border-2 border-gray-200 text-gray-700 font-semibold py-3.5 px-6 rounded-xl hover:border-primary hover:text-primary transition-all text-sm flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" /> Demo Videos
                  </button>

                  <p className="text-center text-xs text-gray-400 mt-3">30-Day Money-Back Guarantee</p>

                  {/* Course includes */}
                  <div className="mt-5 pt-5 border-t border-gray-100 space-y-3">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">This course includes:</p>
                    {[
                      { icon: Clock, text: `${course.duration} on-demand video` },
                      { icon: FileText, text: `${course.resources} downloadable resources` },
                      { icon: InfinityIcon, text: "Full lifetime access" },
                      { icon: Globe, text: "Access on mobile and desktop" },
                      { icon: Award, text: "Certificate of completion" },
                    ].map(({ icon: Icon, text }) => (
                      <div key={text} className="flex items-center gap-3 text-sm text-gray-600">
                        <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                        {text}
                      </div>
                    ))}
                  </div>

                  {/* Action row */}
                  <div className="flex gap-3 mt-5 pt-5 border-t border-gray-100">
                    <button
                      onClick={() => setWishlisted(!wishlisted)}
                      className={`flex-1 flex items-center justify-center gap-2 text-xs font-semibold py-2.5 rounded-lg border transition-all ${wishlisted ? "border-rose-200 text-rose-500 bg-rose-50" : "border-gray-200 text-gray-500 hover:border-gray-300"}`}
                    >
                      <Heart className={`w-4 h-4 ${wishlisted ? "fill-rose-500" : ""}`} /> Wishlist
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 text-xs font-semibold py-2.5 rounded-lg border border-gray-200 text-gray-500 hover:border-gray-300 transition-colors">
                      <Share2 className="w-4 h-4" /> Share
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── MOBILE CTA ───────────────────────────────────────────────────── */}
      <div className="lg:hidden sticky top-16 z-40 bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between shadow-sm">
        <div>
          <span className="text-2xl font-black text-navy">₹{course.price.toLocaleString("en-IN")}</span>
          <span className="text-sm text-gray-400 line-through ml-2">₹{course.originalPrice.toLocaleString("en-IN")}</span>
        </div>
        <Link href="#enroll" className="btn-primary text-sm py-2.5 px-6">Enroll Now</Link>
      </div>

      {/* ─── TABS ─────────────────────────────────────────────────────────── */}
      <div className="sticky top-[60px] lg:top-16 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto">
            {(["overview", "curriculum", "instructor", "reviews"] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-4 text-sm font-semibold capitalize whitespace-nowrap transition-colors ${activeTab === tab ? "text-primary" : "text-gray-500 hover:text-gray-800"}`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ─── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-[1fr_380px] gap-14">
          {/* Left */}
          <div>
            <AnimatePresence mode="wait">
              {/* OVERVIEW TAB */}
              {activeTab === "overview" && (
                <motion.div key="overview" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  {/* What You'll Learn */}
                  <section className="mb-12">
                    <h2 className="text-2xl font-bold text-navy mb-6" style={{ fontFamily: "Sora, sans-serif" }}>
                      What You&apos;ll Learn
                    </h2>
                    <div className="border border-gray-100 rounded-2xl p-6 bg-gray-50/50">
                      <div className="grid sm:grid-cols-2 gap-3">
                        {course.whatYouLearn.map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Assignment & Prerequisites */}
                  <div className="grid sm:grid-cols-2 gap-6 mb-12">
                    {[
                      {
                        title: "Assignment",
                        desc: "Practical design challenges after each module. Submit via Figma link and receive mentor feedback within 48 hours.",
                        icon: "📋"
                      },
                      {
                        title: "Prerequisites",
                        desc: "No prior design experience needed. A computer with internet access and willingness to learn is all you need.",
                        icon: "🎯"
                      }
                    ].map(item => (
                      <div key={item.title} className="border border-gray-100 rounded-2xl p-6 hover:border-primary/20 hover:shadow-md transition-all">
                        <div className="text-2xl mb-3">{item.icon}</div>
                        <h3 className="font-bold text-navy text-lg mb-2">{item.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  <section className="mb-12">
                    <h2 className="text-2xl font-bold text-navy mb-6" style={{ fontFamily: "Sora, sans-serif" }}>
                      Description
                    </h2>
                    {course.description.map((block) => (
                      <div key={block.heading} className="mb-6">
                        <h3 className="font-bold text-navy mb-2">{block.heading}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">{block.body}</p>
                      </div>
                    ))}
                  </section>

                  {/* Requirements */}
                  <section>
                    <h2 className="text-2xl font-bold text-navy mb-6" style={{ fontFamily: "Sora, sans-serif" }}>
                      Requirements
                    </h2>
                    <div className="space-y-3">
                      {course.requirements.map((req) => (
                        <div key={req} className="flex items-start gap-3">
                          <div className="w-5 h-5 border-2 border-primary rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <span className="text-gray-700 text-sm">{req}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                </motion.div>
              )}

              {/* CURRICULUM TAB */}
              {activeTab === "curriculum" && (
                <motion.div key="curriculum" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-navy" style={{ fontFamily: "Sora, sans-serif" }}>
                      Course Content
                    </h2>
                    <div className="flex gap-3 text-sm text-gray-500">
                      <span>• {course.sections} Sections</span>
                      <span>• {course.lectures} lectures</span>
                      <span>• {course.duration} total</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {course.curriculum.map((section, si) => (
                      <div key={section.title} className="border border-gray-100 rounded-2xl overflow-hidden">
                        {/* Section header */}
                        <button
                          onClick={() => setOpenSection(openSection === si ? null : si)}
                          className="w-full flex items-center justify-between px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                        >
                          <div className="flex items-center gap-3">
                            <motion.div animate={{ rotate: openSection === si ? 180 : 0 }} transition={{ duration: 0.2 }}>
                              <ChevronDown className="w-4 h-4 text-gray-500" />
                            </motion.div>
                            <span className="font-semibold text-navy">{section.title}</span>
                          </div>
                          <span className="text-xs text-gray-500 flex-shrink-0 ml-4">
                            {section.lectures} lectures • {section.duration}
                          </span>
                        </button>

                        {/* Section items */}
                        <AnimatePresence>
                          {openSection === si && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: "auto" }}
                              exit={{ height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="divide-y divide-gray-50">
                                {section.items.map((item) => (
                                  <div key={item.title} className="flex items-center justify-between px-6 py-3.5 hover:bg-primary/2 transition-colors">
                                    <div className="flex items-center gap-3 min-w-0">
                                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${item.free ? "bg-primary/10" : "bg-gray-100"}`}>
                                        {item.free ? (
                                          <Play className="w-3.5 h-3.5 text-primary" />
                                        ) : (
                                          <Lock className="w-3.5 h-3.5 text-gray-400" />
                                        )}
                                      </div>
                                      <span className={`text-sm truncate ${item.free ? "text-primary font-medium" : "text-gray-700"}`}>
                                        {item.title}
                                        {item.free && <span className="ml-2 text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded-full font-semibold">FREE</span>}
                                      </span>
                                    </div>
                                    <span className="text-xs text-gray-400 flex-shrink-0 ml-4 flex items-center gap-1">
                                      <Clock className="w-3 h-3" /> {item.duration}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* INSTRUCTOR TAB */}
              {activeTab === "instructor" && (
                <motion.div key="instructor" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  <h2 className="text-2xl font-bold text-navy mb-8" style={{ fontFamily: "Sora, sans-serif" }}>
                    Your Instructor
                  </h2>
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                      {course.instructor.avatar}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy mb-1">{course.instructor.name}</h3>
                      <p className="text-gray-500 text-sm mb-3">{course.instructor.role}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /> {course.instructor.rating} Rating</span>
                        <span className="flex items-center gap-1"><Users className="w-4 h-4 text-gray-400" /> {course.instructor.students.toLocaleString()} Students</span>
                        <span className="flex items-center gap-1"><BookOpen className="w-4 h-4 text-gray-400" /> {course.instructor.courses} Courses</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{course.instructor.bio}</p>
                </motion.div>
              )}

              {/* REVIEWS TAB */}
              {activeTab === "reviews" && (
                <motion.div key="reviews" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  <h2 className="text-2xl font-bold text-navy mb-8" style={{ fontFamily: "Sora, sans-serif" }}>
                    Student Reviews
                  </h2>
                  <div className="flex items-center gap-8 bg-gray-50 rounded-2xl p-8 mb-8">
                    <div className="text-center flex-shrink-0">
                      <div className="text-6xl font-black text-primary" style={{ fontFamily: "Sora, sans-serif" }}>{course.rating}</div>
                      <div className="flex gap-0.5 justify-center my-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className={`w-5 h-5 ${i < Math.floor(course.rating) ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`} />
                        ))}
                      </div>
                      <div className="text-xs text-gray-400">Course Rating</div>
                    </div>
                    <div className="flex-1">
                      {[5, 4, 3, 2, 1].map(star => (
                        <div key={star} className="flex items-center gap-3 mb-2">
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-amber-400 rounded-full"
                              style={{ width: star === 4 ? "50%" : star === 5 ? "30%" : star === 3 ? "15%" : "5%" }}
                            />
                          </div>
                          <div className="flex gap-0.5 flex-shrink-0">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} className={`w-3 h-3 ${i < star ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`} />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-500 text-center">Reviews are shown after enrollment. Be the first to share your experience!</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right — Sticky Sidebar (desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-36">
              <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
                {/* Thumbnail */}
                <div className={`h-48 bg-gradient-to-br ${course.thumbnailGradient} flex items-center justify-center relative`}>
                  <span className="text-7xl">{course.thumbnail}</span>
                  <button className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors">
                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-6 h-6 text-navy fill-navy ml-1" />
                    </div>
                  </button>
                  <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {discount}% OFF
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-3xl font-black text-navy">₹{course.price.toLocaleString("en-IN")}</span>
                    <span className="text-gray-400 line-through">₹{course.originalPrice.toLocaleString("en-IN")}</span>
                  </div>

                  <Link href="/courses/enroll" className="btn-primary w-full justify-center py-4 mb-3 text-base">
                    Enroll Now
                  </Link>
                  <button className="w-full border-2 border-gray-200 font-semibold py-3.5 rounded-xl text-sm text-gray-700 hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" /> Demo Videos
                  </button>

                  <p className="text-center text-xs text-gray-400 mt-3">30-Day Money-Back Guarantee</p>

                  <div className="mt-5 pt-5 border-t border-gray-100 space-y-3">
                    {[
                      { icon: Clock, text: `${course.duration} on-demand video` },
                      { icon: FileText, text: `${course.resources} downloadable files` },
                      { icon: InfinityIcon, text: "Full lifetime access" },
                      { icon: Globe, text: "Access everywhere" },
                      { icon: Award, text: "Certificate on completion" },
                    ].map(({ icon: Icon, text }) => (
                      <div key={text} className="flex items-center gap-3 text-sm text-gray-600">
                        <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                        {text}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-5 pt-5 border-t border-gray-100">
                    <button
                      onClick={() => setWishlisted(!wishlisted)}
                      className={`flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold py-2.5 rounded-lg border transition-all ${wishlisted ? "border-rose-200 text-rose-500 bg-rose-50" : "border-gray-200 text-gray-500"}`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${wishlisted ? "fill-rose-500" : ""}`} /> Wishlist
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold py-2.5 rounded-lg border border-gray-200 text-gray-500 hover:border-gray-300 transition-colors">
                      <Share2 className="w-3.5 h-3.5" /> Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── FOOTER CTA STRIP ─────────────────────────────────────────────── */}
      <section id="enroll" className="bg-gradient-to-br from-primary to-orange-400 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
              Ready to Master UI/UX Design?
            </h2>
            <p className="text-white/80 mb-8">
              Join {course.enrolled.toLocaleString()} students already learning. Get lifetime access for just{" "}
              <strong>₹{course.price.toLocaleString("en-IN")}</strong>.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/auth/signup" className="bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors">
                Enroll Now — ₹{course.price.toLocaleString("en-IN")}
              </Link>
              <Link href="/courses" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2">
                <ChevronLeft className="w-4 h-4" /> Browse More Courses
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
