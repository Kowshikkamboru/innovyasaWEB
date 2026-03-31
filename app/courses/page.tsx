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
  { title: "Figma UI/UX Design", category: "UI/UX Designing", price: "₹249", rating: 4.5, reviews: 6512, duration: "3 Weeks", hours: "08 hr 12 mins", lessons: 7, desc: "Use Figma to get a job in UI Design, User Interface, User Experience design.", icon: "🎨", color: "from-[#1a1145] to-[#2d1b69]" },
  { title: "Python Programming", category: "Python Programming", price: "₹399", rating: 4.8, reviews: 8340, duration: "6 Weeks", hours: "18 hr 30 mins", lessons: 12, desc: "Master Python from basics to advanced concepts including data structures and algorithms.", icon: "🐍", color: "from-[#0c2d48] to-[#145374]" },
  { title: "Cyber Security", category: "Web Development", price: "₹500", rating: 4.6, reviews: 3210, duration: "4 Weeks", hours: "12 hr 45 mins", lessons: 9, desc: "Learn ethical hacking, network security, and vulnerability assessment techniques.", icon: "🔒", color: "from-[#3d0c02] to-[#6b2014]" },
  { title: "MongoDB", category: "Web Development", price: "₹599", rating: 4.4, reviews: 4150, duration: "3 Weeks", hours: "09 hr 20 mins", lessons: 8, desc: "Build scalable NoSQL databases with MongoDB for modern web applications.", icon: "🍃", color: "from-[#0b3d2e] to-[#116149]" },
  { title: "Full Stack Dev", category: "Web Development", price: "₹2,850", rating: 4.9, reviews: 12480, duration: "12 Weeks", hours: "42 hr 15 mins", lessons: 24, desc: "Complete full stack development with React, Node.js, and database technologies.", icon: "⚡", color: "from-[#3d2b00] to-[#6b4f0a]" },
  { title: "Java Programming", category: "Java", price: "₹699", rating: 4.7, reviews: 7820, duration: "8 Weeks", hours: "24 hr 40 mins", lessons: 18, desc: "Comprehensive Java programming from OOP fundamentals to enterprise applications.", icon: "☕", color: "from-[#3d1c00] to-[#6b3410]" },
  { title: "Front End", category: "Web Development", price: "₹499", rating: 4.5, reviews: 5640, duration: "5 Weeks", hours: "15 hr 10 mins", lessons: 15, desc: "Build responsive, interactive websites with HTML, CSS, and JavaScript.", icon: "🌐", color: "from-[#0c1d48] to-[#1a3574]" },
  { title: "React.js", category: "Web Development", price: "₹799", rating: 4.8, reviews: 9120, duration: "6 Weeks", hours: "20 hr 30 mins", lessons: 16, desc: "Modern React development with hooks, context, and state management.", icon: "⚛️", color: "from-[#003040] to-[#00546e]" },
  { title: "Angular", category: "Web Development", price: "₹648", rating: 4.3, reviews: 2870, duration: "5 Weeks", hours: "16 hr 50 mins", lessons: 14, desc: "Build enterprise-grade applications with Angular framework and TypeScript.", icon: "🅰️", color: "from-[#3d0a0a] to-[#6b1818]" },
  { title: "Node.js", category: "Web Development", price: "₹648", rating: 4.6, reviews: 5310, duration: "4 Weeks", hours: "13 hr 25 mins", lessons: 12, desc: "Server-side JavaScript with Node.js, Express, and REST API development.", icon: "🔋", color: "from-[#1a3d1a] to-[#2d6b2d]" },
  { title: "HTML & CSS", category: "Web Development", price: "₹499", rating: 4.5, reviews: 11250, duration: "3 Weeks", hours: "10 hr 15 mins", lessons: 10, desc: "Foundation of web development — build beautiful, responsive web pages.", icon: "📄", color: "from-[#3d2800] to-[#6b4800]" },
  { title: "Adobe XD", category: "Designing", price: "₹299", rating: 4.4, reviews: 2340, duration: "2 Weeks", hours: "06 hr 40 mins", lessons: 8, desc: "Design stunning UI prototypes and wireframes with Adobe XD.", icon: "🎭", color: "from-[#3d0c2e] to-[#6b1450]" },
  { title: "Machine Learning", category: "AI & ML", price: "₹1,299", rating: 4.9, reviews: 8760, duration: "10 Weeks", hours: "35 hr 20 mins", lessons: 22, desc: "Build intelligent systems with supervised, unsupervised, and deep learning.", icon: "🤖", color: "from-[#240c48] to-[#3d1474]" },
  { title: "Artificial Intelligence", category: "AI & ML", price: "₹1,499", rating: 4.8, reviews: 6930, duration: "12 Weeks", hours: "40 hr 10 mins", lessons: 26, desc: "Explore neural networks, NLP, and computer vision in this AI course.", icon: "🧠", color: "from-[#0c1848] to-[#1a2d74]" },
  { title: "C", category: "C++", price: "₹199", rating: 4.3, reviews: 4580, duration: "4 Weeks", hours: "12 hr 30 mins", lessons: 12, desc: "Learn the fundamentals of C programming — pointers, memory, and more.", icon: "📝", color: "from-[#1a1a2e] to-[#2d2d48]" },
  { title: "C++", category: "C++", price: "₹299", rating: 4.5, reviews: 3920, duration: "5 Weeks", hours: "14 hr 50 mins", lessons: 14, desc: "Object-oriented programming with C++ including STL and modern features.", icon: "🔧", color: "from-[#0c1840] to-[#142a6b]" },
  { title: ".Net", category: "Web Development", price: "₹749", rating: 4.4, reviews: 3150, duration: "6 Weeks", hours: "19 hr 15 mins", lessons: 16, desc: "Develop web and desktop applications with .NET framework and C#.", icon: "💎", color: "from-[#1a0c48] to-[#2d1474]" },
  { title: "SQL", category: "Web Development", price: "₹399", rating: 4.6, reviews: 6840, duration: "4 Weeks", hours: "11 hr 35 mins", lessons: 10, desc: "Master database querying, design, and optimization with SQL.", icon: "🗄️", color: "from-[#0c2840] to-[#14486b]" },
  { title: "Data Science", category: "AI & ML", price: "₹1,099", rating: 4.8, reviews: 7450, duration: "10 Weeks", hours: "32 hr 45 mins", lessons: 20, desc: "Data analysis, visualization, and statistical modeling with Python.", icon: "📊", color: "from-[#0c3d30] to-[#146b54]" },
  { title: "JavaScript", category: "JavaScript Development", price: "₹599", rating: 4.7, reviews: 9870, duration: "5 Weeks", hours: "16 hr 20 mins", lessons: 15, desc: "Complete JavaScript from ES6+ features to async programming and DOM.", icon: "🟨", color: "from-[#3d3000] to-[#6b5400]" },
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {(search ? filtered : courses.filter(c => c.category === activeCategory || activeCategory === "All")).map((course, i) => (
                <motion.div
                  key={course.title}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="bg-white border border-gray-100/80 shadow-[0_1px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(255,107,43,0.08)] transition-shadow duration-500 overflow-hidden group max-w-[320px] mx-auto w-full"
                  style={{ borderRadius: '5px 62px 5px 62px' }}
                >
                  {/* Image area with inner padding */}
                  <div className="p-3 pb-0">
                    <div className={`relative h-44 bg-gradient-to-br ${course.color} flex items-center justify-center overflow-visible`} style={{ borderRadius: '3px 58px 16px 16px' }}>
                      {/* Subtle pattern overlay */}
                      <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: '3px 58px 16px 16px' }}>
                        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle at 25% 45%, rgba(255,255,255,0.2) 1px, transparent 1px), radial-gradient(circle at 75% 25%, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                      </div>

                      {/* Animated icon */}
                      <motion.span
                        className="relative z-10 text-6xl drop-shadow-lg"
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                      >
                        {course.icon}
                      </motion.span>

                      {/* Duration badge - top left inside image */}
                      <div className="absolute top-3 left-3 bg-primary text-white text-[11px] font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        {course.hours}
                      </div>

                      {/* Weeks badge - top right, overlapping outward */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.06 + 0.3, duration: 0.35 }}
                        className="absolute -top-2 -right-2 bg-white rounded-xl shadow-sm px-3.5 py-2 text-center z-20"
                      >
                        <div className="text-2xl font-black text-primary leading-none">{course.duration.split(' ')[0]}</div>
                        <div className="text-[9px] text-gray-400 font-medium mt-0.5">Weeks</div>
                      </motion.div>

                      {/* Lessons badge - bottom left, overlapping outward */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.06 + 0.4, duration: 0.35 }}
                        className="absolute -bottom-2 -left-2 bg-white rounded-xl shadow-sm px-3.5 py-2 text-center z-20"
                      >
                        <div className="text-2xl font-black text-primary leading-none">{course.lessons}</div>
                        <div className="text-[9px] text-gray-400 font-medium mt-0.5">Lessons</div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="px-5 pt-5 pb-5">
                    <h3 className="font-bold text-navy text-xl mb-2 line-clamp-1" style={{ fontFamily: "Sora, sans-serif" }}>
                      {course.title}..
                    </h3>
                    <p className="text-gray-500 text-[13px] leading-relaxed mb-5 line-clamp-2">
                      {course.desc}
                    </p>

                    {/* Rating row */}
                    <div className="flex items-center gap-2.5 mb-6">
                      <span className="text-primary font-bold text-xl">{course.rating}</span>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star
                            key={idx}
                            className={`w-[18px] h-[18px] ${
                              idx < Math.floor(course.rating)
                                ? 'fill-amber-400 text-amber-400'
                                : idx < course.rating
                                ? 'fill-amber-400/50 text-amber-400'
                                : 'fill-gray-200 text-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-400">({course.reviews.toLocaleString()})</span>
                    </div>

                    {/* Bottom: Enroll + Price */}
                    <div className="flex items-center justify-between">
                      <Link
                        href="/courses/enroll"
                        className="text-[13px] font-semibold border-2 border-primary text-primary rounded-full px-5 py-2 hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-[0_4px_16px_rgba(255,107,43,0.3)]"
                      >
                        Enroll now
                      </Link>
                      <span className="text-xl font-black text-primary">{course.price}</span>
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
