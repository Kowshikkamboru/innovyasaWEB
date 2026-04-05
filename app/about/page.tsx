"use client";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
	CheckCircle, BookOpen, Users, Star, Award, Globe, Zap, Target,
	ArrowRight, Play, Quote, ChevronDown, Sparkles, Heart, TrendingUp,
	Code, Lightbulb, Shield, Rocket
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, AnimatedCounter } from "@/components/AnimationUtils";

const stats = [
	{ value: 1, suffix: "K+", label: "Total Courses", icon: BookOpen, color: "from-blue-500 to-indigo-600" },
	{ value: 100, suffix: "+", label: "Expert Tutors", icon: Users, color: "from-emerald-500 to-teal-600" },
	{ value: 2, suffix: "K+", label: "Active Students", icon: Star, color: "from-primary to-orange-light" },
	{ value: 30, suffix: "+", label: "IT Services", icon: Globe, color: "from-purple-500 to-violet-600" },
];

const timeline = [
	{ year: "2022", title: "The Spark", desc: "INNOVYASA was born from a simple idea — bridge the gap between learning and real-world tech." },
	{ year: "2023", title: "First 500 Students", desc: "Launched our flagship courses and internship programs, crossing 500 enrolled learners." },
	{ year: "2024", title: "Devsol Launch", desc: "Expanded into IT services, helping 30+ businesses build their digital products." },
	{ year: "2025", title: "2500+ Community", desc: "A thriving community of learners, mentors, and industry partners across India and beyond." },
];

const values = [
	{
		icon: Lightbulb,
		title: "Innovation First",
		desc: "We constantly evolve our curriculum to stay ahead of industry trends and technologies.",
		color: "bg-amber-50 text-amber-600 border-amber-100",
		iconBg: "bg-amber-100"
	},
	{
		icon: Heart,
		title: "Student-Centric",
		desc: "Every decision we make starts with one question — does this help our students succeed?",
		color: "bg-rose-50 text-rose-600 border-rose-100",
		iconBg: "bg-rose-100"
	},
	{
		icon: Shield,
		title: "Quality Assured",
		desc: "Rigorous vetting of all courses, mentors, and partnerships to maintain excellence.",
		color: "bg-blue-50 text-blue-600 border-blue-100",
		iconBg: "bg-blue-100"
	},
	{
		icon: Rocket,
		title: "Real Impact",
		desc: "We measure success by placements, projects built, and careers transformed.",
		color: "bg-emerald-50 text-emerald-600 border-emerald-100",
		iconBg: "bg-emerald-100"
	},
];

const foundations = [
	{
		icon: BookOpen,
		title: "Easy to Learn",
		desc: "Tailored learning paths based on your skill level and career goals.",
		gradient: "from-blue-500/10 to-indigo-500/10",
		border: "border-blue-100",
		iconColor: "text-blue-600",
		iconBg: "bg-blue-100"
	},
	{
		icon: Target,
		title: "Quality Content",
		desc: "Real-world applications, hands-on projects, and industry-standard exercises.",
		gradient: "from-purple-500/10 to-violet-500/10",
		border: "border-purple-100",
		iconColor: "text-purple-600",
		iconBg: "bg-purple-100"
	},
	{
		icon: Users,
		title: "Expert Mentors",
		desc: "One-on-one mentorship from professionals with 10+ years of industry experience.",
		gradient: "from-emerald-500/10 to-teal-500/10",
		border: "border-emerald-100",
		iconColor: "text-emerald-600",
		iconBg: "bg-emerald-100"
	},
	{
		icon: Globe,
		title: "Career Guidance",
		desc: "Exclusive job portals, partner network, and placement assistance.",
		gradient: "from-primary/10 to-orange-500/10",
		border: "border-orange-100",
		iconColor: "text-primary",
		iconBg: "bg-orange-100"
	},
	{
		icon: Zap,
		title: "Flexible Learning",
		desc: "Learn at your own pace with pre-recorded sessions and live classes.",
		gradient: "from-amber-500/10 to-yellow-500/10",
		border: "border-amber-100",
		iconColor: "text-amber-600",
		iconBg: "bg-amber-100"
	},
];

const team = [
	{ name: "Rajesh Kumar", role: "Founder & CEO", dept: "Leadership", avatar: "RK", gradient: "from-primary to-orange-400" },
	{ name: "Priya Sharma", role: "Head of Education", dept: "Ed-Tech", avatar: "PS", gradient: "from-blue-500 to-indigo-500" },
	{ name: "Arjun Mehta", role: "Lead Developer", dept: "Engineering", avatar: "AM", gradient: "from-emerald-500 to-teal-500" },
	{ name: "Kavitha Nair", role: "Mentor Lead", dept: "Mentorship", avatar: "KN", gradient: "from-purple-500 to-violet-500" },
	{ name: "Sanjay Reddy", role: "Industry Relations", dept: "Partnerships", avatar: "SR", gradient: "from-rose-500 to-pink-500" },
	{ name: "Meena Das", role: "Community Manager", dept: "Community", avatar: "MD", gradient: "from-cyan-500 to-sky-500" },
];

const testimonials = [
	{
		text: "Innovyasa didn't just teach me code — they showed me how to think like a developer. The mentorship was game-changing.",
		name: "Vikram Vedanth",
		role: "SDE at Google",
		rating: 5,
		avatar: "VV",
		color: "from-blue-500 to-indigo-500"
	},
	{
		text: "From zero to landing my first tech job in 6 months. The structured curriculum and real projects made all the difference.",
		name: "Jasmine Patel",
		role: "UI Designer at Swiggy",
		rating: 5,
		avatar: "JP",
		color: "from-primary to-orange-400"
	},
	{
		text: "The internship program opened doors I didn't know existed. Now I work at a startup I genuinely love.",
		name: "Rohan Gupta",
		role: "Full Stack Dev at Razorpay",
		rating: 5,
		avatar: "RG",
		color: "from-emerald-500 to-teal-500"
	},
];

const features = [
	"Expert Tutors", "Programming Workshops", "Passionate Mentors",
	"Everywhere Access", "Easy To Learn", "Industry Projects",
];

export default function AboutPage() {
	const heroRef = useRef(null);
	const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
	const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
	const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
	const [activeTestimonial, setActiveTestimonial] = useState(0);

	return (
		<div className="overflow-x-hidden">

			{/* ─── HERO ─────────────────────────────────────────────────────────── */}
			<section ref={heroRef} className="relative min-h-screen flex items-center bg-navy overflow-hidden">
				{/* Grid pattern */}
				<div className="absolute inset-0 section-grid opacity-10" />

				{/* Animated blobs */}
				<motion.div
					animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.18, 0.08] }}
					transition={{ duration: 10, repeat: Infinity }}
					className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full"
				/>
				<motion.div
					animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.12, 0.05] }}
					transition={{ duration: 14, repeat: Infinity, delay: 4 }}
					className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-blue-500/15 blur-[100px] rounded-full"
				/>

				{/* Floating geometric shapes */}
				{[...Array(6)].map((_, i) => (
					<motion.div
						key={i}
						animate={{ y: [-15, 15, -15], x: [-8, 8, -8], rotate: [0, 180, 360] }}
						transition={{ duration: 8 + i * 2, repeat: Infinity, delay: i * 1.2, ease: "easeInOut" }}
						className="absolute hidden lg:block"
						style={{
							top: `${15 + i * 14}%`,
							left: i % 2 === 0 ? `${5 + i * 3}%` : `${75 + i * 2}%`,
						}}
					>
						<div
							className={`w-${4 + i} h-${4 + i} border border-white/10 ${i % 3 === 0 ? "rounded-full" : i % 3 === 1 ? "rotate-45" : "rounded-lg"}`}
							style={{ width: `${12 + i * 4}px`, height: `${12 + i * 4}px` }}
						/>
					</motion.div>
				))}

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36 relative z-10">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						{/* Left */}
						<motion.div style={{ y: heroY, opacity: heroOpacity }}>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
								className="hero-tag inline-flex mb-8"
							>
								<Sparkles className="w-3.5 h-3.5" /> Our Story
							</motion.div>

							<motion.h1
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.1, duration: 0.7 }}
								className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-8"
								style={{ fontFamily: "Sora, sans-serif" }}
							>
								Shaping the{" "}
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">
									Future
								</span>{" "}
								with Innovative{" "}
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
									IT & Ed-Tech
								</span>
							</motion.h1>

							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.3 }}
								className="text-gray-300 text-lg leading-relaxed mb-10 max-w-lg"
							>
								We believe everyone deserves access to world-class tech education. INNOVYASA bridges the gap between learning and industry — transforming ambitious learners into confident professionals.
							</motion.p>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4 }}
								className="flex flex-wrap gap-4"
							>
								<Link href="/courses" className="btn-primary text-base">
									Explore Courses <ArrowRight className="w-4 h-4" />
								</Link>
								<Link href="/internships" className="btn-outline border-white/30 text-white hover:bg-white hover:text-navy text-base">
									<Play className="w-4 h-4" /> View Internships
								</Link>
							</motion.div>
						</motion.div>

						{/* Right — Stats grid */}
						<motion.div
							initial={{ opacity: 0, x: 40 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.3, duration: 0.7 }}
							className="grid grid-cols-2 gap-4"
						>
							{stats.map((s, i) => (
								<motion.div
									key={s.label}
									initial={{ opacity: 0, scale: 0.85 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 0.5 + i * 0.1 }}
									whileHover={{ scale: 1.05, y: -4 }}
									className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
								>
									<div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4 shadow-lg`}>
										<s.icon className="w-6 h-6 text-white" />
									</div>
									<div className="text-4xl font-black text-white mb-1" style={{ fontFamily: "Sora, sans-serif" }}>
										<AnimatedCounter end={s.value} suffix={s.suffix} />
									</div>
									<div className="text-gray-400 text-sm font-medium">{s.label}</div>
								</motion.div>
							))}
						</motion.div>
					</div>
				</div>

				{/* Scroll cue */}
				<motion.div
					animate={{ y: [0, 8, 0] }}
					transition={{ duration: 2, repeat: Infinity }}
					className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
				>
					<span className="text-xs tracking-widest uppercase">Scroll</span>
					<ChevronDown className="w-4 h-4" />
				</motion.div>
			</section>

			{/* ─── MISSION / VISION ─────────────────────────────────────────────── */}
			<section className="py-28 px-4 bg-white relative overflow-hidden">
				<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl" />

				<div className="max-w-7xl mx-auto">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<FadeIn>
							<span className="hero-tag inline-flex mb-6">Who We Are</span>
							<h2 className="section-title mb-6">
								Built on the Belief That{" "}
								<span className="text-primary">Learning Has No Limits</span>
							</h2>
							<p className="text-gray-600 leading-relaxed mb-6 text-lg">
								INNOVYASA is a dynamic startup offering a dual-service model — integrating cutting-edge IT services with transformative Ed-tech solutions. We exist to empower the next generation of innovators.
							</p>
							<p className="text-gray-500 leading-relaxed mb-8">
								Our platform offers structured learning paths, real-world internships, expert mentorship, and digital solutions for businesses. Whether you're a student starting your journey or a company building a product — we've got you covered.
							</p>
							<div className="grid grid-cols-2 gap-4">
								{[
									{ icon: "🎯", label: "Mission", text: "Democratise quality tech education across India" },
									{ icon: "🔭", label: "Vision", text: "Be the go-to launchpad for every tech career" },
								].map(v => (
									<div key={v.label} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
										<div className="text-2xl mb-2">{v.icon}</div>
										<div className="font-bold text-navy text-sm mb-1">{v.label}</div>
										<div className="text-gray-500 text-xs leading-relaxed">{v.text}</div>
									</div>
								))}
							</div>
						</FadeIn>

						<FadeIn delay={0.2} direction="left">
							<div className="relative">
								{/* Main card */}
								<div className="bg-gradient-to-br from-navy to-[#1A2E5A] rounded-3xl p-10 relative overflow-hidden">
									<div className="absolute inset-0 section-grid opacity-10" />
									<motion.div
										animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
										transition={{ duration: 8, repeat: Infinity }}
										className="absolute -top-10 -right-10 w-48 h-48 bg-primary/30 rounded-full blur-3xl"
									/>
									<div className="relative">
										<div className="text-6xl mb-6">🚀</div>
										<h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
											From Hyderabad to the World
										</h3>
										<p className="text-gray-300 text-sm leading-relaxed mb-6">
											Started in a small co-working space in Hyderabad, INNOVYASA has grown into a platform trusted by thousands of learners across India.
										</p>
										<div className="flex flex-wrap gap-2">
											{["Ed-Tech", "IT Services", "Mentorship", "Community", "Devsol"].map(tag => (
												<span key={tag} className="text-xs bg-white/10 text-white/80 px-3 py-1 rounded-full border border-white/10">
													{tag}
												</span>
											))}
										</div>
									</div>
								</div>

								{/* Floating badges */}
								<motion.div
									animate={{ y: [-5, 5, -5] }}
									transition={{ duration: 3, repeat: Infinity }}
									className="absolute -top-4 -right-4 bg-white rounded-2xl px-5 py-3 shadow-xl border border-gray-100"
								>
									<div className="text-2xl font-black text-primary">4.9★</div>
									<div className="text-xs text-gray-400">Student Rating</div>
								</motion.div>
								<motion.div
									animate={{ y: [5, -5, 5] }}
									transition={{ duration: 4, repeat: Infinity }}
									className="absolute -bottom-4 -left-4 bg-emerald-500 rounded-2xl px-5 py-3 shadow-xl"
								>
									<div className="text-2xl font-black text-white">90%</div>
									<div className="text-xs text-emerald-100">Placement Rate</div>
								</motion.div>
							</div>
						</FadeIn>
					</div>
				</div>
			</section>

			{/* ─── TIMELINE ─────────────────────────────────────────────────────── */}
			<section className="py-24 px-4 bg-gray-50 relative overflow-hidden">
				<div className="absolute inset-0 section-dots opacity-20" />
				<div className="max-w-5xl mx-auto relative">
					<FadeIn className="text-center mb-16">
						<span className="hero-tag inline-flex mb-4">Our Journey</span>
						<h2 className="section-title">
							The <span className="text-primary">INNOVYASA</span> Story
						</h2>
					</FadeIn>

					<div className="relative">
						{/* Center line */}
						<div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10 hidden md:block" />

						{timeline.map((item, i) => (
							<FadeIn key={item.year} delay={i * 0.15}>
								<div className={`flex flex-col md:flex-row items-center gap-8 mb-12 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
									<div className={`flex-1 ${i % 2 === 1 ? "md:text-right" : ""}`}>
										<motion.div
											whileHover={{ scale: 1.02 }}
											className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
										>
											<div className="text-primary font-black text-3xl mb-1" style={{ fontFamily: "Sora, sans-serif" }}>
												{item.year}
											</div>
											<h3 className="font-bold text-navy text-lg mb-2">{item.title}</h3>
											<p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
										</motion.div>
									</div>

									{/* Center dot */}
									<div className="hidden md:flex w-8 h-8 bg-gradient-to-br from-primary to-orange-400 rounded-full items-center justify-center shadow-lg flex-shrink-0 relative z-10">
										<div className="w-3 h-3 bg-white rounded-full" />
									</div>

									<div className="flex-1 hidden md:block" />
								</div>
							</FadeIn>
						))}
					</div>
				</div>
			</section>

			{/* ─── FOUNDATION OF EXCELLENCE ─────────────────────────────────────── */}
			<section className="py-28 px-4 bg-white relative">
				<div className="max-w-7xl mx-auto">
					<FadeIn className="text-center mb-16">
						<span className="hero-tag inline-flex mb-4">Our Pillars</span>
						<h2 className="section-title">
							The Foundation of Our{" "}
							<span className="text-primary">Excellence</span>
						</h2>
						<p className="text-gray-500 mt-4 max-w-xl mx-auto">
							Five core principles that guide everything we build, teach, and deliver.
						</p>
					</FadeIn>

					<StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{foundations.map((f, i) => (
							<StaggerItem key={f.title}>
								<motion.div
									whileHover={{ y: -8 }}
									className={`bg-gradient-to-br ${f.gradient} border ${f.border} rounded-3xl p-8 group transition-all duration-300 hover:shadow-xl`}
								>
									<div className={`w-14 h-14 ${f.iconBg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
										<f.icon className={`w-7 h-7 ${f.iconColor}`} />
									</div>
									<h3 className="font-bold text-navy text-xl mb-3" style={{ fontFamily: "Sora, sans-serif" }}>
										{f.title}
									</h3>
									<p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
								</motion.div>
							</StaggerItem>
						))}

						{/* CTA card */}
						<StaggerItem>
							<motion.div
								whileHover={{ y: -8 }}
								className="bg-gradient-to-br from-navy to-[#1A2E5A] rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden"
							>
								<div className="absolute inset-0 section-grid opacity-10" />
								<div className="relative">
									<div className="text-4xl mb-5">✨</div>
									<h3 className="font-bold text-white text-xl mb-3">Ready to Start?</h3>
									<p className="text-gray-300 text-sm mb-6">Join 2500+ learners building their future with INNOVYASA.</p>
									<Link href="/auth/signup" className="btn-primary text-sm inline-flex">
										Join for Free <ArrowRight className="w-4 h-4" />
									</Link>
								</div>
							</motion.div>
						</StaggerItem>
					</StaggerContainer>
				</div>
			</section>

			{/* ─── 2500+ STUDENTS ───────────────────────────────────────────────── */}
			<section className="py-28 px-4 bg-gradient-to-br from-navy via-[#0F2149] to-navy relative overflow-hidden">
				<div className="absolute inset-0 section-grid opacity-10" />
				<motion.div
					animate={{ scale: [1, 1.2, 1] }}
					transition={{ duration: 10, repeat: Infinity }}
					className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-3xl rounded-full"
				/>

				<div className="max-w-7xl mx-auto relative">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						{/* Left — big number */}
						<FadeIn>
							<div className="text-center lg:text-left">
								<motion.div
									initial={{ scale: 0.5, opacity: 0 }}
									whileInView={{ scale: 1, opacity: 1 }}
									viewport={{ once: true }}
									transition={{ type: "spring", stiffness: 200 }}
									className="inline-block"
								>
									<div className="text-[120px] md:text-[160px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-br from-primary to-orange-300"
										style={{ fontFamily: "Sora, sans-serif" }}>
										2.5K
									</div>
								</motion.div>
								<div className="text-2xl font-bold text-white mb-4">+ Students Joined</div>
								<p className="text-gray-300 leading-relaxed">
									Every milestone reached by our students is a testament to our unwavering commitment to excellence.
								</p>

								{/* Mini stats */}
								<div className="grid grid-cols-3 gap-4 mt-10">
									{[
										{ v: "90%", l: "Satisfaction" },
										{ v: "150+", l: "Hiring Partners" },
										{ v: "220+", l: "Live Internships" },
									].map(s => (
										<div key={s.l} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
											<div className="text-2xl font-black text-primary">{s.v}</div>
											<div className="text-gray-400 text-xs mt-1">{s.l}</div>
										</div>
									))}
								</div>
							</div>
						</FadeIn>

						{/* Right — features grid */}
						<FadeIn delay={0.2} direction="left">
							<div className="grid grid-cols-2 gap-3">
								{features.map((f, i) => (
									<motion.div
										key={f}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ delay: i * 0.08 }}
										whileHover={{ x: 4 }}
										className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-primary/30 transition-all"
									>
										<CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
										<span className="text-gray-200 text-sm font-medium">{f}</span>
									</motion.div>
								))}
							</div>

							<motion.div
								whileHover={{ y: -4 }}
								className="mt-6 bg-primary/10 border border-primary/20 rounded-2xl p-6"
							>
								<Quote className="w-8 h-8 text-primary mb-3" />
								<p className="text-gray-300 text-sm italic leading-relaxed">
									"Whether it's acing interviews, building innovative solutions, or securing top positions in the industry, INNOVYASA is your partner in growth."
								</p>
								<div className="mt-3 text-primary text-xs font-semibold">— INNOVYASA Promise</div>
							</motion.div>
						</FadeIn>
					</div>
				</div>
			</section>

			{/* ─── CORE VALUES ─────────────────────────────────────────────────── */}
			<section className="py-24 px-4 bg-white">
				<div className="max-w-7xl mx-auto">
					<FadeIn className="text-center mb-14">
						<span className="hero-tag inline-flex mb-4">What We Stand For</span>
						<h2 className="section-title">
							Our Core <span className="text-primary">Values</span>
						</h2>
					</FadeIn>

					<StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{values.map((v) => (
							<StaggerItem key={v.title}>
								<motion.div
									whileHover={{ y: -6 }}
									className={`border ${v.color} rounded-2xl p-7 text-center group transition-all duration-300 hover:shadow-lg`}
								>
									<div className={`w-14 h-14 ${v.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
										<v.icon className="w-7 h-7" />
									</div>
									<h3 className="font-bold text-navy text-lg mb-3" style={{ fontFamily: "Sora, sans-serif" }}>
										{v.title}
									</h3>
									<p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
								</motion.div>
							</StaggerItem>
						))}
					</StaggerContainer>
				</div>
			</section>

			{/* ─── TESTIMONIALS ────────────────────────────────────────────────── */}
			<section className="py-24 px-4 bg-orange-50">
				<div className="max-w-5xl mx-auto">
					<FadeIn className="text-center mb-14">
						<h2 className="section-title">
							What <span className="text-primary">Students</span> Are Saying
						</h2>
					</FadeIn>

					{/* Carousel */}
					<div className="relative">
						<motion.div
							key={activeTestimonial}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4 }}
							className="bg-white rounded-3xl p-10 md:p-14 shadow-sm border border-orange-100 text-center"
						>
							<div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonials[activeTestimonial].color} flex items-center justify-center mx-auto mb-6 text-white font-bold text-lg`}>
								{testimonials[activeTestimonial].avatar}
							</div>
							<div className="flex justify-center gap-1 mb-6">
								{Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
									<Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
								))}
							</div>
							<p className="text-gray-700 text-xl leading-relaxed italic mb-6 max-w-2xl mx-auto">
								&ldquo;{testimonials[activeTestimonial].text}&rdquo;
							</p>
							<div className="font-bold text-navy text-lg">{testimonials[activeTestimonial].name}</div>
							<div className="text-gray-400 text-sm mt-1">{testimonials[activeTestimonial].role}</div>
						</motion.div>

						{/* Dots */}
						<div className="flex justify-center gap-2 mt-6">
							{testimonials.map((_, i) => (
								<button
									key={i}
									onClick={() => setActiveTestimonial(i)}
									className={`transition-all duration-300 rounded-full ${i === activeTestimonial ? "w-8 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-gray-300 hover:bg-primary/50"}`}
								/>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ─── MEET THE TEAM ───────────────────────────────────────────────── */}
			<section className="py-28 px-4 bg-white">
				<div className="max-w-7xl mx-auto">
					<FadeIn className="text-center mb-16">
						<span className="hero-tag inline-flex mb-4">The People</span>
						<h2 className="section-title">
							Meet Our <span className="text-primary">Team</span>
						</h2>
						<p className="text-gray-500 mt-4 max-w-xl mx-auto">
							Passionate educators, engineers, and industry experts united by one mission.
						</p>
					</FadeIn>

					<StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
						{team.map((member) => (
							<StaggerItem key={member.name}>
								<motion.div
									whileHover={{ y: -8 }}
									className="group text-center"
								>
									<div className="relative mx-auto mb-5 w-fit">
										<div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:shadow-xl transition-shadow`}>
											{member.avatar}
										</div>
										<motion.div
											initial={{ scale: 0 }}
											whileHover={{ scale: 1 }}
											className="absolute -inset-1 rounded-2xl border-2 border-primary"
										/>
										<div className="absolute -bottom-2 -right-2 w-7 h-7 bg-white rounded-full border border-gray-100 shadow flex items-center justify-center">
											<div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
										</div>
									</div>
									<h3 className="font-bold text-navy text-base">{member.name}</h3>
									<p className="text-gray-500 text-sm">{member.role}</p>
									<span className="inline-block mt-2 text-[11px] bg-gray-100 text-gray-500 px-3 py-1 rounded-full">
										{member.dept}
									</span>
								</motion.div>
							</StaggerItem>
						))}
					</StaggerContainer>

					<FadeIn className="text-center mt-14">
						<Link href="/careers" className="btn-outline">
							Join Our Team <ArrowRight className="w-4 h-4" />
						</Link>
					</FadeIn>
				</div>
			</section>

			{/* ─── CTA BANNER ─────────────────────────────────────────────────── */}
			<section className="py-20 px-4 bg-gradient-to-r from-primary to-orange-400">
				<div className="max-w-4xl mx-auto text-center">
					<FadeIn>
						<h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
							Start Your Journey Today
						</h2>
						<p className="text-white/80 text-lg mb-8">
							Join 2500+ students who are already transforming their careers with INNOVYASA.
						</p>
						<div className="flex flex-wrap gap-4 justify-center">
							<Link href="/courses" className="bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors">
								Browse Courses
							</Link>
							<Link href="/internships" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
								Find Internships
							</Link>
						</div>
					</FadeIn>
				</div>
			</section>
		</div>
	);
}
