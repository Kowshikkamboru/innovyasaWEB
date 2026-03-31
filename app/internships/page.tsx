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

            <FadeIn delay={0.2} direction="left">
              <div className="bg-gradient-to-br from-primary/5 to-navy/5 rounded-3xl p-6 border border-gray-100 overflow-hidden">
                <div className="w-full">
                  <video
                    src="/assets/videos/Internship_Video_Creation_Request.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-50 sm:h-50 md:h-64 object-cover rounded-lg"
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
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-12">
            <span className="hero-tag inline-flex mb-4">Benefits</span>
            <h2 className="section-title">
              Perks &amp; <span className="text-primary">Benefits</span>
            </h2>
            <p className="text-gray-500 mt-3 text-sm">
              At Innovyasa, our interns receive valuable learning experiences along with exciting benefits.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk) => (
              <StaggerItem key={perk.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{perk.icon}</div>
                  <h3 className="font-bold text-navy mb-2" style={{ fontFamily: "Sora, sans-serif" }}>{perk.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{perk.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Satisfaction Rate */}
      <section className="py-20 px-4 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 section-grid opacity-10" />
        <div className="max-w-5xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-40 h-40 rounded-full border-8 border-primary/30 mb-6 mx-auto lg:mx-0">
                  <div className="text-center">
                    <div className="text-5xl font-black text-primary">90%</div>
                    <div className="text-white/60 text-xs">satisfaction rate</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">from 5,000+ students</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
                <span className="text-primary">90% Satisfaction Rate</span> — Trusted by Thousands
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our internship program achieves an exceptional 90% satisfaction rate, as the majority of participants agree that Innovyasa delivered real-world preparation, industry connection, and career growth.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "5,000+", label: "Live Users Enrolled" },
                  { value: "3,500+", label: "Students in leading companies" },
                  { value: "4,200+", label: "certifications issued" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-black text-primary">{s.value}</div>
                    <div className="text-gray-400 text-xs mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Alumni Success Stories */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
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
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="section-title mb-4">Who Can <span className="text-primary">Apply?</span></h2>
            <p className="text-gray-600 leading-relaxed bg-white rounded-2xl p-8 shadow-sm border border-primary/10">
              &ldquo;We welcome passionate learners, fresh graduates, and students eager to gain industry experience. If you have the enthusiasm to learn and innovate, this internship is for you!&rdquo;
            </p>
            <Link href="/internships/apply" className="btn-primary mt-8 inline-flex">
              Start Your Application <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
