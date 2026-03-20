"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, ArrowRight, Youtube, Instagram, Linkedin, Facebook, Twitter } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimationUtils";

const events = [
  { title: "Art Workshop", desc: "Join us for a creative art workshop led by renowned artist venkat sharma.", date: "Feb 18, 2025", action: "Register", color: "text-primary", img: "🎨" },
  { title: "Tech Conference", desc: "Explore the latest in tech innovations at our annual conference.", date: "May 4, 2025", action: "Learn more", color: "text-primary", img: "💻" },
  { title: "Hackathon", desc: "Join us for an exciting hackathon where innovation meets collaboration.", date: "May 25, 2025", action: "Register", color: "text-primary", img: "⚡" },
  { title: "Chess Competition", desc: "Unleash your strategic genius at our thrilling chess competition.", date: "June 20, 2025", action: "Register", color: "text-primary", img: "♟️" },
];

const webinars = [
  { title: "Digital Marketing", desc: "Learn the latest trends in digital marketing from industry experts.", date: "July 17, 2025, 3:00 pm", img: "📊" },
  { title: "AI Innovations", desc: "Explore the advancements in AI technology and its future implications.", date: "July 30, 2025, 11:00 am", img: "🤖" },
  { title: "Sustainability", desc: "Discover Sustainable business practices for a greener future.", date: "Nov 25, 2025, 4:00 pm", img: "🌱" },
  { title: "Remote Work Tips", desc: "Learn effective remote work strategies to boost productivity.", date: "Dec 13, 2025, 6:00 pm", img: "🏠" },
];

const blogs = [
  { title: "Mastering UI Elements: A Practical guide for designers", author: "Reva Richard", tag: "Design", excerpt: "Dive into the world of user interfaces with our expert guides. Latest trends and practical tips." },
  { title: "Crafting Seamless Experiences: The Art of intuitive UI design", author: "George", tag: "UX", excerpt: "Explore the principles and techniques that drive user-centric UI design, ensuring a seamless experience." },
  { title: "Beyond Aesthetics: The Power of Emotional UX Design", author: "Isabella Carter", tag: "UX", excerpt: "Delve into the realm of emotional design and discover how incorporating empathy and psychology enhances UX." },
];

const socials = [
  { icon: Youtube, label: "YouTube", color: "bg-red-500", followers: "12K" },
  { icon: Instagram, label: "Instagram", color: "bg-pink-500", followers: "8.5K" },
  { icon: Linkedin, label: "LinkedIn", color: "bg-blue-700", followers: "15K" },
  { icon: Facebook, label: "Facebook", color: "bg-blue-600", followers: "10K" },
  { icon: Twitter, label: "Twitter", color: "bg-sky-500", followers: "6K" },
];

export default function CommunityPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="py-24 px-4 bg-gradient-to-br from-white to-orange-50 relative overflow-hidden">
        <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 8, repeat: Infinity }} className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <span className="hero-tag inline-flex mb-6">Join Our Community</span>
              <h1 className="text-4xl md:text-5xl font-bold text-navy leading-tight mb-6" style={{ fontFamily: "Sora, sans-serif" }}>
                Join the Innovative{" "}
                <span className="text-primary">Community</span>
              </h1>
              <p className="text-gray-600 text-lg mb-4">Learn, Connect, and grow with fellow Creators</p>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Participate in hackathons, coding challenges, workshops, and expert Q&A sessions. Build your network, share knowledge, and grow with thousands of passionate learners.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/auth/signup" className="btn-primary">
                  Join us now <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/community/demo" className="btn-outline">
                  Request demo
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="left">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2500+", label: "Active Members" },
                  { value: "100+", label: "Events Per Year" },
                  { value: "50+", label: "Expert Speakers" },
                  { value: "30+", label: "Countries Represented" },
                ].map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ scale: 1.03, y: -3 }}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
                  >
                    <div className="text-3xl font-black text-primary mb-1" style={{ fontFamily: "Sora, sans-serif" }}>{s.value}</div>
                    <div className="text-gray-500 text-sm">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Latest Events */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-12">
            <h2 className="section-title text-center">
              <span className="text-primary">Latest</span> Events
            </h2>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6">
            {events.map((event) => (
              <StaggerItem key={event.title}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(255,107,43,0.08)" }}
                  className="border border-gray-200 rounded-2xl p-6 flex gap-5 hover:border-primary/30 transition-all"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                    {event.img}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-primary text-lg mb-1" style={{ fontFamily: "Sora, sans-serif" }}>{event.title}</h3>
                    <p className="text-gray-500 text-sm mb-3">{event.desc}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Calendar className="w-3.5 h-3.5" />
                        {event.date}
                      </div>
                      <button className="border border-gray-200 hover:border-primary hover:text-primary text-gray-600 text-xs px-4 py-1.5 rounded-lg transition-colors font-medium">
                        {event.action}
                      </button>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-12">
            <h2 className="section-title text-center">
              Upcoming <span className="text-primary">Webinars</span>
            </h2>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6">
            {webinars.map((w) => (
              <StaggerItem key={w.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="border border-gray-200 bg-white rounded-2xl p-6 flex gap-5 hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="w-16 h-16 bg-navy/5 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                    {w.img}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-primary text-lg mb-1" style={{ fontFamily: "Sora, sans-serif" }}>{w.title}</h3>
                    <p className="text-gray-500 text-sm mb-3">{w.desc}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Clock className="w-3.5 h-3.5" />
                        {w.date}
                      </div>
                      <button className="btn-primary text-xs py-2 px-4">
                        Register Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Recent Blogs */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="flex justify-between items-end mb-12">
            <h2 className="section-title">
              <span className="text-primary">Recent</span> Blogs
            </h2>
            <Link href="/blogs" className="btn-outline text-sm">All Blogs</Link>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <StaggerItem key={blog.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all group"
                >
                  <div className="h-44 bg-gradient-to-br from-navy/10 to-primary/10 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow flex items-center justify-center">
                      <span className="text-2xl">📝</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="badge-orange text-xs mb-3 inline-block">{blog.tag}</span>
                    <h3 className="font-bold text-navy mb-2 group-hover:text-primary transition-colors line-clamp-2" style={{ fontFamily: "Sora, sans-serif" }}>
                      {blog.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">{blog.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs text-primary font-bold">
                          {blog.author[0]}
                        </div>
                        <span className="text-xs text-gray-500">{blog.author}</span>
                      </div>
                      <Link href="/blogs" className="text-xs text-primary font-semibold flex items-center gap-1 hover:underline">
                        View Blog <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Social Follow */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="section-title mb-4">
              Follow Us <span className="text-primary">On:</span>
            </h2>
            <div className="flex justify-center gap-4 flex-wrap">
              {socials.map(({ icon: Icon, label, color, followers }) => (
                <motion.a
                  key={label}
                  href="#"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-6 py-4 hover:shadow-lg transition-all"
                >
                  <div className={`w-10 h-10 ${color} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-navy">{label}</div>
                    <div className="text-xs text-gray-400">{followers} followers</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
