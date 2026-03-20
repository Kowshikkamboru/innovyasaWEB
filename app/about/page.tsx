"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, BookOpen, Users, Star, Award, Globe, Zap, Target, Heart, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimationUtils";

const stats = [
  { value: "1K+", label: "Total Courses", color: "bg-blue-50 text-blue-600" },
  { value: "100+", label: "Expert Tutors", color: "bg-green-50 text-green-600" },
  { value: "2K+", label: "Active Students", color: "bg-orange-50 text-primary" },
  { value: "30+", label: "IT Services", color: "bg-purple-50 text-purple-600" },
];

const foundations = [
  { icon: BookOpen, title: "Easy to Learn", desc: "Allow users to tailor their learning experience based on skill level and goals.", color: "bg-primary/10 text-primary" },
  { icon: Target, title: "Quality", desc: "Focus on real-world applications with projects, and hands-on exercises for better understanding.", color: "bg-blue-100 text-blue-600" },
  { icon: Users, title: "Expert Mentors", desc: "Get one-on-one mentorship sessions to address your specific learning needs and career goals.", color: "bg-green-100 text-green-600" },
  { icon: Globe, title: "Career Guidance", desc: "Access job opportunities through our network of partner companies and exclusive job portals.", color: "bg-purple-100 text-purple-600" },
  { icon: Zap, title: "Flexible Learning", desc: "Learn at your own pace with pre-recorded video lessons, revisiting concepts anytime.", color: "bg-amber-100 text-amber-600" },
];

const team = [
  { name: "Peter Paul John", role: "Professor", avatar: "PJ", color: "bg-blue-100 text-blue-700" },
  { name: "Harry Brooke", role: "Senior Developer", avatar: "HB", color: "bg-green-100 text-green-700" },
  { name: "Jennifer loren", role: "Instructor", avatar: "JL", color: "bg-pink-100 text-pink-700" },
  { name: "Dennis Barette", role: "Assistance Professor", avatar: "DB", color: "bg-orange-100 text-orange-700" },
];

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    name: "Vikram Vedanth",
    role: "Creative director",
    avatar: "VV",
    color: "bg-blue-100 text-blue-700"
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    name: "Jasmine",
    role: "Designer",
    avatar: "JS",
    color: "bg-pink-100 text-pink-700"
  },
];

const features = [
  "Expert Tutors", "Programming for classes", "Passionate Mentors",
  "Everywhere Access", "Easy To Learn"
];

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <span className="hero-tag inline-flex mb-6">About Innovyasa</span>
              <h1 className="text-4xl md:text-5xl font-bold text-navy leading-tight mb-6" style={{ fontFamily: "Sora, sans-serif" }}>
                Shaping the Future with{" "}
                <span className="text-primary">Innovative IT</span> and{" "}
                <span className="text-primary">Ed-Tech</span> Solutions
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                At Innovyasa, we believe in empowering individuals and businesses through cutting-edge IT services and Ed-tech solutions. Our platform offers a seamless learning and development experience.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className={`${s.color} rounded-2xl p-5`}
                  >
                    <div className="text-3xl font-black mb-1" style={{ fontFamily: "Sora, sans-serif" }}>{s.value}</div>
                    <div className="text-sm font-medium opacity-80">{s.label}</div>
                  </motion.div>
                ))}
              </div>
              <Link href="/courses" className="btn-primary">
                Explore Platform <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>

            <FadeIn delay={0.2} direction="left">
              <div className="relative">
                <div className="aspect-square max-w-lg mx-auto relative">
                  <div className="w-full h-full rounded-3xl bg-gradient-to-br from-primary/10 to-navy/5 border border-gray-100 overflow-hidden flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                        transition={{ duration: 6, repeat: Infinity }}
                        className="w-24 h-24 bg-gradient-to-br from-primary to-orange-400 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl"
                      >
                        <span className="text-white font-black text-3xl">IV</span>
                      </motion.div>
                      <h3 className="text-2xl font-bold text-navy" style={{ fontFamily: "Sora, sans-serif" }}>Innovyasa</h3>
                      <p className="text-gray-500">Innovative Approach to Success</p>
                    </div>
                  </div>
                  {/* Floating badges */}
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-4 -right-4 bg-white rounded-2xl px-5 py-3 shadow-xl border border-gray-100"
                  >
                    <div className="text-2xl font-black text-primary">2500+</div>
                    <div className="text-xs text-gray-500">Students Joined</div>
                  </motion.div>
                  <motion.div
                    animate={{ y: [5, -5, 5] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -bottom-4 -left-4 bg-navy rounded-2xl px-5 py-3 shadow-xl"
                  >
                    <div className="text-2xl font-black text-primary">1000+</div>
                    <div className="text-xs text-gray-300">Partner Companies</div>
                  </motion.div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Foundation of Excellence */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="hero-tag inline-flex mb-4">Our Values</span>
            <h2 className="section-title">
              The Foundation of Our{" "}
              <span className="text-primary">Excellence</span>
            </h2>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {foundations.map((f) => (
              <StaggerItem key={f.title}>
                <motion.div
                  whileHover={{ y: -6, shadow: "lg" }}
                  className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 ${f.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <f.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2" style={{ fontFamily: "Sora, sans-serif" }}>{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 2500+ Students */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <FadeIn>
              <div className="relative">
                <div className="w-64 h-64 bg-primary/5 rounded-full flex items-center justify-center mx-auto lg:mx-0">
                  <div className="w-48 h-48 bg-gradient-to-br from-primary/20 to-navy/10 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-black text-primary" style={{ fontFamily: "Sora, sans-serif" }}>2500+</div>
                      <div className="text-sm text-gray-500 font-medium">Students</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="left">
              <span className="hero-tag inline-flex mb-6">Our Community</span>
              <h2 className="section-title mb-6">
                <span className="text-primary">2500+</span> Students Joined Us to Achieve Their Goals
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Every milestone reached by our students is a testament to our unwavering commitment to excellence. Whether it's acing interviews, building innovative solutions, or securing top positions in the industry, we take pride in being your partner in growth.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-orange-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-14">
            <h2 className="section-title">
              What <span className="text-primary">Students</span> Are Saying
            </h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <motion.div whileHover={{ y: -4 }} className="bg-white rounded-2xl p-8 shadow-sm">
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 ${t.color} rounded-full flex items-center justify-center font-bold text-sm`}>
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-navy">{t.name}</div>
                      <div className="text-gray-400 text-xs">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="hero-tag inline-flex mb-4">Our People</span>
            <h2 className="section-title">Meet Our <span className="text-primary">Team</span></h2>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <motion.div whileHover={{ y: -6 }} className="text-center group">
                  <div className="relative mx-auto mb-4">
                    <div className={`w-28 h-28 ${member.color} rounded-full flex items-center justify-center mx-auto text-2xl font-bold`}>
                      {member.avatar}
                    </div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="absolute inset-0 rounded-full border-2 border-primary"
                    />
                  </div>
                  <h3 className="font-bold text-navy">{member.name}</h3>
                  <p className="text-gray-500 text-sm">{member.role}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
