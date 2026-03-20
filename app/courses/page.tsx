"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Clock, Users, Search, Filter, ArrowRight, BookOpen, TrendingUp, Award } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimationUtils";

const categories = [
  "UI/UX Designing", "Web Development", "Designing", "AI & ML",
  "Word Press Development", "Application Development", "Java",
  "Laravel Development", "JavaScript Development", "Python Programming",
  "C++", "FullStack Java", "Power BI", "MS Office", "More+"
];

const courses = [
  { title: "Figma UI/UX Design", category: "UI/UX Designing", price: "₹249", rating: 4.5, students: 120, duration: "3 Weeks", lessons: 7, tags: ["Figma", "Adobe XD"], icon: "🎨", color: "from-purple-500 to-pink-500" },
  { title: "Python Programming", category: "Python Programming", price: "₹399", rating: 4.8, students: 280, duration: "6 Weeks", lessons: 12, tags: ["Python", "ML"], icon: "🐍", color: "from-blue-500 to-cyan-500" },
  { title: "Cyber Security", category: "Web Development", price: "₹500", rating: 4.6, students: 95, duration: "4 Weeks", lessons: 9, tags: ["Security", "Network"], icon: "🔒", color: "from-red-500 to-orange-500" },
  { title: "MongoDB", category: "Web Development", price: "₹599", rating: 4.4, students: 150, duration: "3 Weeks", lessons: 8, tags: ["MongoDB", "NoSQL"], icon: "🍃", color: "from-green-500 to-teal-500" },
  { title: "Full Stack Dev", category: "Web Development", price: "₹2,850", rating: 4.9, students: 420, duration: "12 Weeks", lessons: 24, tags: ["React", "Node", "DB"], icon: "⚡", color: "from-yellow-500 to-orange-500" },
  { title: "Java Programming", category: "Java", price: "₹699", rating: 4.7, students: 310, duration: "8 Weeks", lessons: 18, tags: ["Java", "OOP"], icon: "☕", color: "from-orange-500 to-red-500" },
  { title: "Front End", category: "Web Development", price: "₹499", rating: 4.5, students: 200, duration: "5 Weeks", lessons: 15, tags: ["HTML", "CSS", "JS"], icon: "🌐", color: "from-blue-400 to-indigo-500" },
  { title: "React.js", category: "Web Development", price: "₹799", rating: 4.8, students: 350, duration: "6 Weeks", lessons: 16, tags: ["React", "Hooks"], icon: "⚛️", color: "from-cyan-500 to-blue-500" },
  { title: "Angular", category: "Web Development", price: "₹648", rating: 4.3, students: 115, duration: "5 Weeks", lessons: 14, tags: ["Angular", "TS"], icon: "🅰️", color: "from-red-600 to-red-400" },
  { title: "Node.js", category: "Web Development", price: "₹648", rating: 4.6, students: 180, duration: "4 Weeks", lessons: 12, tags: ["Node", "Express"], icon: "🔋", color: "from-green-600 to-green-400" },
  { title: "HTML & CSS", category: "Web Development", price: "₹499", rating: 4.5, students: 450, duration: "3 Weeks", lessons: 10, tags: ["HTML", "CSS"], icon: "📄", color: "from-orange-400 to-yellow-400" },
  { title: "Adobe XD", category: "Designing", price: "₹299", rating: 4.4, students: 90, duration: "2 Weeks", lessons: 8, tags: ["XD", "UI"], icon: "🎭", color: "from-pink-500 to-rose-500" },
  { title: "Machine Learning", category: "AI & ML", price: "₹1,299", rating: 4.9, students: 380, duration: "10 Weeks", lessons: 22, tags: ["ML", "Python"], icon: "🤖", color: "from-violet-500 to-purple-500" },
  { title: "Artificial Intelligence", category: "AI & ML", price: "₹1,499", rating: 4.8, students: 290, duration: "12 Weeks", lessons: 26, tags: ["AI", "TF"], icon: "🧠", color: "from-indigo-500 to-blue-500" },
  { title: "C", category: "C++", price: "₹199", rating: 4.3, students: 210, duration: "4 Weeks", lessons: 12, tags: ["C", "Programming"], icon: "📝", color: "from-gray-600 to-gray-400" },
  { title: "C++", category: "C++", price: "₹299", rating: 4.5, students: 175, duration: "5 Weeks", lessons: 14, tags: ["C++", "OOP"], icon: "🔧", color: "from-blue-700 to-blue-500" },
  { title: ".Net", category: "Web Development", price: "₹749", rating: 4.4, students: 130, duration: "6 Weeks", lessons: 16, tags: [".NET", "C#"], icon: "💎", color: "from-indigo-600 to-violet-500" },
  { title: "SQL", category: "Web Development", price: "₹399", rating: 4.6, students: 240, duration: "4 Weeks", lessons: 10, tags: ["SQL", "DB"], icon: "🗄️", color: "from-blue-500 to-cyan-400" },
  { title: "Data Science", category: "AI & ML", price: "₹1,099", rating: 4.8, students: 320, duration: "10 Weeks", lessons: 20, tags: ["Python", "Stats"], icon: "📊", color: "from-teal-500 to-green-500" },
  { title: "JavaScript", category: "JavaScript Development", price: "₹599", rating: 4.7, students: 410, duration: "5 Weeks", lessons: 15, tags: ["JS", "ES6"], icon: "🟨", color: "from-yellow-400 to-orange-400" },
];

const whyChoose = [
  { icon: "🏆", title: "Expert-Led Learning", desc: "Learn from top industry professionals and domain experts who bring real-world knowledge." },
  { icon: "🕐", title: "Flexible Learning Options", desc: "Choose between self-paced or live interactive sessions — learn anytime, anywhere." },
  { icon: "🌐", title: "Community & Networking", desc: "Join a thriving community of learners, professionals, and mentors to collaborate and grow." },
];

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("UI/UX Designing");
  const [search, setSearch] = useState("");

  const filtered = courses.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || c.category === activeCategory;
    return matchesSearch && (search || matchesCategory);
  });

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-navy via-[#1A2E5A] to-navy relative overflow-hidden">
        <div className="absolute inset-0 section-grid opacity-10" />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="hero-tag mb-6 border-primary/30 bg-primary/10 text-primary inline-flex"
              >
                1000+ Courses Available
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                Enhance Your Skills with Our{" "}
                <span className="text-primary">Expert-Led Courses</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-300 mb-8 leading-relaxed"
              >
                Get certified and gain real-world knowledge on today's trending technologies. Join 2500+ learners building their future.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex gap-3"
              >
                <Link href="#courses" className="btn-primary">
                  Explore Courses <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
            <div className="hidden lg:grid grid-cols-3 gap-4">
              {[
                { value: "10+", label: "Virtual Expert Programs" },
                { value: "1K+", label: "5-star student reviews" },
                { value: "20+", label: "Professional Certifications" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/10"
                >
                  <div className="text-3xl font-black text-primary mb-1">{s.value}</div>
                  <div className="text-gray-300 text-xs">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="section-title">
              Why Choose <span className="text-primary">INNOVYASA</span> Courses?
            </h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {whyChoose.map((w) => (
              <StaggerItem key={w.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="border border-gray-100 rounded-2xl p-7 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{w.icon}</div>
                  <h3 className="font-bold text-navy text-lg mb-2" style={{ fontFamily: "Sora, sans-serif" }}>
                    <span className="text-primary">{w.title.split(" ")[0]} </span>
                    {w.title.split(" ").slice(1).join(" ")}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Course Catalog */}
      <section id="courses" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-10">
            <h2 className="section-title mb-3">
              Unlock New Skills with Our{" "}
              <span className="text-primary">Course Categories</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Our carefully curated courses are designed to help you acquire different skills, gain new skills and advance your knowledge.
            </p>
          </FadeIn>

          {/* Search */}
          <FadeIn className="mb-6">
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-primary shadow-sm"
              />
            </div>
          </FadeIn>

          {/* Category Filters */}
          {!search && (
            <FadeIn>
              <div className="flex flex-wrap gap-2 justify-center mb-10">
                {categories.map((cat) => (
                  <motion.button
                    key={cat}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveCategory(cat)}
                    className={activeCategory === cat ? "pill-active" : "pill-inactive"}
                  >
                    {cat}
                  </motion.button>
                ))}
              </div>
            </FadeIn>
          )}

          {/* Course Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <AnimatePresence mode="popLayout">
              {(search ? filtered : courses.filter(c => c.category === activeCategory || activeCategory === "All")).map((course, i) => (
                <motion.div
                  key={course.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  whileHover={{ y: -6 }}
                  className="course-card bg-white"
                >
                  <div className={`h-32 bg-gradient-to-br ${course.color} flex items-center justify-center text-5xl relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10" />
                    <span className="relative z-10">{course.icon}</span>
                    <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded-full">
                      {course.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-primary font-semibold mb-1">{course.category}</div>
                    <h3 className="font-bold text-navy text-sm mb-2 line-clamp-2" style={{ fontFamily: "Sora, sans-serif" }}>
                      {course.title}
                    </h3>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {course.tags.map(t => (
                        <span key={t} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{t}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="font-semibold text-gray-700">{course.rating}</span>
                      <span>•</span>
                      <Users className="w-3.5 h-3.5" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-bold">{course.price}</span>
                      <Link href="/courses/enroll" className="text-xs btn-primary py-1.5 px-3">
                        Enroll
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <FadeIn className="text-center mt-10">
            <Link href="#" className="btn-outline">
              Load More Courses <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-navy text-white">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
              Start Your Journey <span className="text-primary">TODAY!</span>
            </h2>
            <p className="text-gray-300 mb-8">
              Join thousands of learners who are already transforming their careers with Innovyasa&apos;s expert-led courses and real-world training.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/courses" className="btn-primary">
                Explore Courses
              </Link>
              <Link href="/internships" className="btn-outline border-white text-white hover:bg-white hover:text-navy">
                Free Demo
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
