"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Search, Tag, Clock, User } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimationUtils";

const featured = {
  title: "Unlocking Your Programming Efficiency with Innovyasa Services",
  tag: "Development",
  excerpt: "Discover how Innovyasa's curated services and expert-led programs are transforming the way students and professionals approach coding, upskilling, and career development in the modern tech landscape.",
};

const featuredPosts = [
  { title: "Revolutionizing industries through SaaS implementation", img: "⚡" },
  { title: "Navigating SaaS waters with Intuitive UI and UX", img: "🧭" },
  { title: "Transforming SaaS platforms a UI/UX design odyssey", img: "🚀" },
  { title: "Synergizing SaaS and UX design for elevating digital experiences", img: "💡" },
  { title: "Sculpting SaaS Success the art of UI and UX design", img: "🎨" },
];

const recentBlogs = [
  { title: "Mastering UI Elements: A Practical guide for designers", author: "Reva Richard", tag: "Design", excerpt: "Dive into the world of user interfaces with our expert guides. Latest trends and practical tips." },
  { title: "Crafting Seamless Experiences: The Art of intuitive UI design", author: "George", tag: "UX", excerpt: "Explore the principles and techniques that drive user-centric UI design, ensuring a sea..." },
  { title: "Beyond Aesthetics: The Power of Emotional UX Design", author: "Isabella Carter", tag: "UX", excerpt: "Delve into the realm of emotional design and discover how incorporating empathy and psy..." },
];

const popular = [
  { title: "Data Analysis: A Practical guide for Beginners", author: "Benjamin Louis", tag: "Data" },
  { title: "Crafting Seamless Experiences: The Art of intuitive UI design", author: "Julie Ferry", tag: "UX" },
  { title: "Beyond Aesthetics: The Power of Emotional UX Design", author: "John Lanham", tag: "UX" },
];

export default function BlogsPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Blog Post */}
      <section className="py-0 bg-navy relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative h-[420px] flex items-end bg-gradient-to-t from-navy/90 to-transparent"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#1A2E5A] to-navy opacity-80" />
            <div className="absolute inset-0 section-grid opacity-10" />
            <div className="relative p-10 lg:p-16">
              <span className="badge-orange mb-4 inline-block">{featured.tag}</span>
              <h1 className="text-3xl md:text-4xl font-bold text-white max-w-2xl" style={{ fontFamily: "Sora, sans-serif" }}>
                {featured.title}
              </h1>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Featured Posts */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-bold text-primary mb-8" style={{ fontFamily: "Sora, sans-serif" }}>
              Other featured posts
            </h2>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredPosts.map((post, i) => (
              <StaggerItem key={post.title}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-primary/30 hover:bg-primary/2 transition-all cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    {post.img}
                  </div>
                  <p className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Recent Blogs */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-10">
            <h2 className="text-2xl font-bold text-primary" style={{ fontFamily: "Sora, sans-serif" }}>
              Recent Blogs
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {recentBlogs.map((blog) => (
              <StaggerItem key={blog.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
                >
                  <div className="h-44 bg-gradient-to-br from-navy/10 to-primary/10 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow flex items-center justify-center text-2xl">
                      📝
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="badge-orange text-xs mb-3 inline-block">{blog.tag}</span>
                    <h3 className="font-bold text-navy mb-2 group-hover:text-primary transition-colors line-clamp-2" style={{ fontFamily: "Sora, sans-serif" }}>
                      {blog.title}
                    </h3>
                    <p className="text-gray-500 text-xs line-clamp-2 mb-4">{blog.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs text-primary font-bold">
                          {blog.author[0]}
                        </div>
                        <span className="text-xs text-gray-500">{blog.author}</span>
                      </div>
                      <Link href="#" className="text-xs text-primary font-semibold flex items-center gap-1">
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

      {/* Popular */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-10">
            <h2 className="text-2xl font-bold text-primary" style={{ fontFamily: "Sora, sans-serif" }}>Popular</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {popular.map((blog) => (
              <StaggerItem key={blog.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all group cursor-pointer"
                >
                  <div className="h-44 bg-gradient-to-br from-primary/10 to-navy/10 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow flex items-center justify-center text-2xl">🔥</div>
                  </div>
                  <div className="p-5">
                    <span className="badge-orange text-xs mb-3 inline-block">{blog.tag}</span>
                    <h3 className="font-bold text-navy text-sm mb-2 group-hover:text-primary transition-colors line-clamp-2" style={{ fontFamily: "Sora, sans-serif" }}>
                      {blog.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs text-primary font-bold">
                        {blog.author[0]}
                      </div>
                      <span className="text-xs text-gray-500">{blog.author}</span>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Join */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="bg-white rounded-3xl p-10 lg:p-14 flex flex-col lg:flex-row items-center gap-8 shadow-sm border border-gray-100">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-navy mb-3" style={{ fontFamily: "Sora, sans-serif" }}>
                  Take the next step toward your personal and professional goals with{" "}
                  <span className="text-primary">Innovyasa.</span>
                </h2>
                <p className="text-gray-500 text-sm">
                  Join now to receive personalized recommendations from the full Innovyasa catalog.
                </p>
              </div>
              <Link href="/auth/signup" className="btn-primary flex-shrink-0">
                Join for Free <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Got Queries */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border border-gray-200 rounded-2xl p-8">
              <div>
                <h3 className="font-bold text-navy text-lg mb-1">Got more Queries?</h3>
                <p className="text-gray-500 text-sm">Talk to our team, our program advisor will reach out to you.</p>
              </div>
              <Link href="/contact" className="btn-primary flex-shrink-0">
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Follow Us */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-2xl font-bold text-navy mb-6">
              Follow Us <span className="text-primary">On:</span>
            </h2>
            <div className="flex justify-center gap-4">
              {[
                { icon: "▶", color: "bg-red-500", label: "YouTube" },
                { icon: "📸", color: "bg-pink-500", label: "Instagram" },
                { icon: "in", color: "bg-blue-700", label: "LinkedIn" },
                { icon: "f", color: "bg-blue-600", label: "Facebook" },
                { icon: "𝕏", color: "bg-black", label: "Twitter" },
              ].map(({ icon, color, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  whileHover={{ scale: 1.15, y: -3 }}
                  className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center text-white font-bold text-sm cursor-pointer`}
                  aria-label={label}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
