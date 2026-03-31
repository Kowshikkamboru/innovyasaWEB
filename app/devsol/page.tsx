"use client";
import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Code, Monitor, Cpu, Globe, Database, Smartphone,
  CheckCircle, Calendar, Send, Calculator, Package, Layers, Zap,
  Settings, Users, ExternalLink, Mail, Phone, MessageSquare,
  Bot, Palette, Server, Shield, TrendingUp,
  Sparkles, FileText, BarChart3, Clock, Download,
  Building2, User, Target, Rocket, Minus, Plus, ChevronRight, RotateCcw,
  Star, Eye, GraduationCap, Wrench, X, ChevronDown, ChevronLeft, ChevronUp,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, AnimatedCounter } from "@/components/AnimationUtils";

/* ─── Section Nav ─────────────────────────────────────────────────────────── */
const sectionLinks = [
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "products", label: "Products" },
  { id: "estimator", label: "Estimator" },
  { id: "book-call", label: "Book a Call" },
  { id: "enquiry", label: "Enquiry" },
];

/* ─── Services ────────────────────────────────────────────────────────────── */
const services = [
  { icon: Globe, title: "Web Development", desc: "Full-stack web applications built with modern frameworks for scale and performance.", tags: ["React", "Next.js", "Node.js"], color: "bg-blue-50 text-blue-600" },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform mobile apps for iOS and Android with Flutter and React Native.", tags: ["Flutter", "React Native"], color: "bg-green-50 text-green-600" },
  { icon: Palette, title: "UI/UX Design", desc: "Research-driven design that creates intuitive, accessible, and delightful user experiences.", tags: ["Figma", "Adobe XD"], color: "bg-orange-50 text-primary" },
  { icon: Cpu, title: "AI & Machine Learning", desc: "Intelligent solutions that automate processes and derive insights from your business data.", tags: ["Python", "TensorFlow"], color: "bg-purple-50 text-purple-600" },
  { icon: Database, title: "Cloud & Infrastructure", desc: "Scalable cloud architecture on AWS, GCP, and Azure for modern business requirements.", tags: ["AWS", "Docker"], color: "bg-sky-50 text-sky-600" },
  { icon: Monitor, title: "Academic Projects", desc: "End-to-end project development for final-year students with mentoring and documentation.", tags: ["Guidance", "Documentation"], color: "bg-pink-50 text-pink-600" },
  { icon: Zap, title: "n8n Automation", desc: "Workflow automation solutions using n8n for seamless business process integration and efficiency.", tags: ["n8n", "APIs", "Webhooks"], color: "bg-amber-50 text-amber-600" },
  { icon: Bot, title: "UiPath RPA", desc: "Robotic process automation to eliminate repetitive tasks and boost operational efficiency at scale.", tags: ["UiPath", "Automation"], color: "bg-indigo-50 text-indigo-600" },
];

/* ─── Portfolio ────────────────────────────────────────────────────────────── */
const portfolioCategories = ["All", "Web", "Mobile", "AI/ML", "Automation", "Academic"];

const portfolioProjects = [
  { title: "EdTech Platform Redesign", client: "EduLearn Inc", category: "Web", status: "Completed" as const, desc: "Complete redesign and development of a learning management system serving 50,000+ students with live classes, assessments, and analytics.", tags: ["Next.js", "MongoDB", "AWS"], outcome: "40% increase in engagement", gradient: "from-blue-500/20 to-indigo-500/20", liveUrl: "#", review: "Exceptional work! The team delivered beyond expectations with great communication throughout." },
  { title: "Enterprise CRM Solution", client: "TechCorp Ltd", category: "Web", status: "Completed" as const, desc: "Custom CRM system with advanced analytics, real-time notifications, and seamless third-party integration APIs.", tags: ["React", "Node.js", "PostgreSQL"], outcome: "60% faster operations", gradient: "from-green-500/20 to-emerald-500/20", liveUrl: "#", review: "Transformed our sales process. The CRM is intuitive and powerful — our team loves it." },
  { title: "Healthcare Mobile App", client: "MedCare Health", category: "Mobile", status: "Completed" as const, desc: "Patient management app with appointment booking, telemedicine, health tracking, and prescription management.", tags: ["Flutter", "Firebase", "Stripe"], outcome: "10K+ downloads in 30 days", gradient: "from-rose-500/20 to-pink-500/20", liveUrl: "#", review: "Professional, responsive, and delivered on time. Highly recommend for healthcare projects." },
  { title: "AI-Powered Resume Screener", client: "HireRight Solutions", category: "AI/ML", status: "Completed" as const, desc: "ML-driven resume parsing and candidate ranking system that reduced hiring time dramatically.", tags: ["Python", "TensorFlow", "FastAPI"], outcome: "70% faster hiring process", gradient: "from-purple-500/20 to-violet-500/20", liveUrl: "#", review: "Game-changer for our HR team. Accuracy is impressive and saves us hours every week." },
  { title: "E-Commerce Automation Suite", client: "ShopEase Retail", category: "Automation", status: "Ongoing" as const, desc: "End-to-end n8n automation for order processing, inventory management, and customer notifications.", tags: ["n8n", "Shopify API", "Webhooks"], outcome: "90% manual work eliminated", gradient: "from-amber-500/20 to-yellow-500/20" },
  { title: "FinTech Banking App", client: "NovaPay Finance", category: "Mobile", status: "Ongoing" as const, desc: "Secure mobile banking app with UPI integration, biometric auth, and real-time transaction tracking.", tags: ["React Native", "Node.js", "AWS"], outcome: "25K+ active users (projected)", gradient: "from-cyan-500/20 to-teal-500/20" },
  { title: "Invoice Processing RPA", client: "AccuBooks Ltd", category: "Automation", status: "Completed" as const, desc: "UiPath-based RPA solution for automated invoice extraction, validation, and ERP entry across 500+ vendors.", tags: ["UiPath", "OCR", "SAP"], outcome: "95% accuracy, 80% time saved", gradient: "from-indigo-500/20 to-blue-500/20", liveUrl: "#", review: "Reduced our processing time from days to minutes. Incredible ROI." },
  { title: "Smart Inventory Predictor", client: "LogiTech Warehouse", category: "AI/ML", status: "Upcoming" as const, desc: "Machine learning model for demand forecasting and inventory optimization across multiple warehouses.", tags: ["Python", "Scikit-learn", "Dashboard"], outcome: "30% reduction in overstock (expected)", gradient: "from-emerald-500/20 to-green-500/20" },
  { title: "Smart Campus IoT System", client: "JNTU Hyderabad — B.Tech Final Year", category: "Academic", status: "Completed" as const, desc: "IoT-based smart campus management system with attendance tracking, energy monitoring, and automated lighting — submitted as B.Tech final year project with IEEE paper.", tags: ["IoT", "Python", "Firebase"], outcome: "IEEE Paper Published", gradient: "from-sky-500/20 to-blue-500/20", review: "The mentorship and documentation support was outstanding. Project scored top marks." },
  { title: "Blockchain-Based Voting System", client: "CBIT — M.Tech Project", category: "Academic", status: "Completed" as const, desc: "Decentralized e-voting platform with Ethereum smart contracts, voter authentication, and tamper-proof audit trails — M.Tech dissertation with published research paper.", tags: ["Solidity", "React", "Ethereum"], outcome: "Research Paper Published", gradient: "from-violet-500/20 to-purple-500/20", review: "Excellent guidance throughout. The project documentation was publication-ready." },
];

/* ─── Products ─────────────────────────────────────────────────────────────── */
const products = [
  { icon: FileText, title: "InnoLMS", subtitle: "Learning Management System", type: "Web App", desc: "Our in-house learning platform that powers Innovyasa's own courses and internship programs. Used daily by 5,000+ learners for live classes, assessments, and skill tracking.", features: ["Live Video Classes", "Auto-graded Quizzes", "Progress Analytics", "Certificate Engine"], detailFeatures: ["Instructor-led live sessions with screen share & recording", "Auto-graded quizzes with question banks & difficulty levels", "Real-time progress dashboards for students and admins", "Automated certificate generation with unique verification QR", "Batch management & attendance tracking system", "Assignment upload with plagiarism detection"], color: "from-blue-500 to-indigo-600", status: "Live", accessUrl: "#" },
  { icon: BarChart3, title: "InnoCRM", subtitle: "Client Relationship Manager", type: "Web App", desc: "Built to streamline our own client operations — now available for growing businesses. Manage leads, automate follow-ups, and close deals faster.", features: ["Pipeline Board", "Email Sequences", "Deal Analytics", "Team Roles"], detailFeatures: ["Drag-and-drop Kanban pipeline for deal management", "Automated email sequences triggered by deal stage", "Revenue forecasting with visual analytics dashboards", "Role-based access with team performance scorecards", "Client communication history & interaction timeline", "Integration with WhatsApp, Gmail, and calendar apps"], color: "from-emerald-500 to-teal-600", status: "Live", accessUrl: "#" },
  { icon: Bot, title: "InnoBot", subtitle: "AI Chatbot Platform", type: "SaaS", desc: "Intelligent chatbot framework trained on your business data. Handles customer support, lead qualification, and internal queries 24/7 with human handoff.", features: ["Custom AI Training", "Multi-channel", "Analytics Dashboard", "Human Handoff"], detailFeatures: ["Train on your documents, FAQs, and knowledge base", "Deploy on Website, WhatsApp, Telegram & Slack simultaneously", "Conversation analytics with sentiment analysis", "Seamless human handoff with agent routing", "Multi-language support with auto-translation", "Customizable chat widget with your brand identity"], color: "from-purple-500 to-violet-600", status: "Beta", accessUrl: "#" },
  { icon: Zap, title: "InnoFlow", subtitle: "Workflow Automation Engine", type: "Web App", desc: "Visual automation builder connecting 200+ apps. We use it internally to automate invoicing, notifications, and deployments — now open for businesses.", features: ["200+ Integrations", "Visual Builder", "Conditional Logic", "Scheduling"], detailFeatures: ["Drag-and-drop visual workflow canvas", "200+ pre-built connectors (Google, Slack, Stripe, etc.)", "Conditional branching with AND/OR logic", "Cron-based scheduling & webhook triggers", "Error handling with retry policies & alerts", "Execution logs with step-by-step debugging"], color: "from-amber-500 to-orange-600", status: "Coming Soon", accessUrl: "#" },
];

/* ─── Cost Estimator ───────────────────────────────────────────────────────── */
const projectTypes = [
  { id: "website", label: "Website", icon: Globe, basePrice: 25000, perUnit: 3000, unitLabel: "Pages" },
  { id: "webapp", label: "Web App", icon: Monitor, basePrice: 60000, perUnit: 7000, unitLabel: "Modules" },
  { id: "mobile", label: "Mobile App", icon: Smartphone, basePrice: 80000, perUnit: 8000, unitLabel: "Screens" },
  { id: "fullstack", label: "Mobile + Web", icon: Layers, basePrice: 120000, perUnit: 12000, unitLabel: "Screens" },
  { id: "n8n", label: "n8n Automation", icon: Zap, basePrice: 30000, perUnit: 5000, unitLabel: "Workflows" },
  { id: "rpa", label: "UiPath RPA", icon: Bot, basePrice: 50000, perUnit: 8000, unitLabel: "Processes" },
];

const designLevels = [
  { id: "basic", label: "Basic", desc: "Clean, functional design", multiplier: 1.0, emoji: "🎨" },
  { id: "standard", label: "Standard", desc: "Custom UI with brand identity", multiplier: 1.4, emoji: "✨" },
  { id: "premium", label: "Premium", desc: "Pixel-perfect, award-worthy", multiplier: 2.0, emoji: "💎" },
];

const featureAddons = [
  { id: "auth", label: "Authentication & Authorization", price: 10000, icon: Shield },
  { id: "payment", label: "Payment Gateway", price: 15000, icon: Server },
  { id: "admin", label: "Admin Dashboard", price: 20000, icon: Settings },
  { id: "api", label: "API Integration", price: 12000, icon: Code },
  { id: "chat", label: "Real-time Chat", price: 18000, icon: MessageSquare },
  { id: "notifications", label: "Push Notifications", price: 8000, icon: Sparkles },
  { id: "analytics", label: "Analytics & Reports", price: 10000, icon: BarChart3 },
  { id: "seo", label: "SEO Optimization", price: 8000, icon: TrendingUp },
  { id: "multilang", label: "Multi-language Support", price: 12000, icon: Globe },
  { id: "cloud", label: "Cloud Deploy & CI/CD", price: 15000, icon: Database },
];

/* ═══════════════════════════════════════════════════════════════════════════ */

export default function DevsolPage() {
  /* Portfolio filter */
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects = useMemo(
    () => activeCategory === "All" ? portfolioProjects : portfolioProjects.filter(p => p.category === activeCategory),
    [activeCategory],
  );

  /* Portfolio modal */
  const [selectedProjectIdx, setSelectedProjectIdx] = useState<number | null>(null);
  const [portfolioPage, setPortfolioPage] = useState(1);
  const PROJECTS_PER_PAGE = 9;

  const totalPortfolioPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice((portfolioPage - 1) * PROJECTS_PER_PAGE, portfolioPage * PROJECTS_PER_PAGE);

  /* Product modal */
  const [selectedProductIdx, setSelectedProductIdx] = useState<number | null>(null);

  /* Keyboard navigation for modals */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProjectIdx !== null) {
        if (e.key === "Escape") setSelectedProjectIdx(null);
        if (e.key === "ArrowLeft") setSelectedProjectIdx(prev => prev !== null && prev > 0 ? prev - 1 : prev);
        if (e.key === "ArrowRight") setSelectedProjectIdx(prev => prev !== null && prev < filteredProjects.length - 1 ? prev + 1 : prev);
      }
      if (selectedProductIdx !== null) {
        if (e.key === "Escape") setSelectedProductIdx(null);
        if (e.key === "ArrowLeft") setSelectedProductIdx(prev => prev !== null && prev > 0 ? prev - 1 : prev);
        if (e.key === "ArrowRight") setSelectedProductIdx(prev => prev !== null && prev < products.length - 1 ? prev + 1 : prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProjectIdx, selectedProductIdx, filteredProjects.length]);

  /* Lock body scroll when modal is open */
  useEffect(() => {
    if (selectedProjectIdx !== null || selectedProductIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedProjectIdx, selectedProductIdx]);

  /* Cost Estimator — 3-phase flow */
  const [estPhase, setEstPhase] = useState<"landing" | "configure" | "results">("landing");
  const [estType, setEstType] = useState("website");
  const [estPages, setEstPages] = useState(5);
  const [estDesign, setEstDesign] = useState("standard");
  const [estFeatures, setEstFeatures] = useState<string[]>([]);
  const estimatorRef = useRef<HTMLDivElement>(null);

  const currentType = projectTypes.find(t => t.id === estType)!;
  const currentDesign = designLevels.find(d => d.id === estDesign)!;

  const estimatedCost = useMemo(() => {
    const base = currentType.basePrice + currentType.perUnit * estPages;
    const withDesign = base * currentDesign.multiplier;
    const featureCost = estFeatures.reduce((s, fId) => s + (featureAddons.find(a => a.id === fId)?.price ?? 0), 0);
    return Math.round(withDesign + featureCost);
  }, [estType, estPages, estDesign, estFeatures, currentType, currentDesign]);

  const toggleFeature = (id: string) =>
    setEstFeatures(prev => (prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]));

  const handleStartEstimator = () => {
    setEstPhase("configure");
    setTimeout(() => estimatorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  };

  const handleCalculate = () => {
    setEstPhase("results");
    setTimeout(() => estimatorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  };

  const handleRecalculate = () => {
    setEstPhase("configure");
    setTimeout(() => estimatorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  };

  const selectedFeatureNames = estFeatures.map(fId => featureAddons.find(a => a.id === fId)!);

  const handleDownloadPDF = useCallback(() => {
    const featureRows = selectedFeatureNames.map(f => `<tr><td style="padding:10px 16px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#555">${f.label}</td><td style="padding:10px 16px;border-bottom:1px solid #f0f0f0;font-size:13px;text-align:right;font-weight:600;color:#0D1B3E">₹${f.price.toLocaleString("en-IN")}</td></tr>`).join("");
    const html = `<!DOCTYPE html><html><head><title>Innovyasa Devsol — Project Estimate</title><style>@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=DM+Sans:wght@400;500;600&display=swap');*{margin:0;padding:0;box-sizing:border-box}body{font-family:'DM Sans',sans-serif;color:#333;padding:48px;max-width:800px;margin:auto}h1,h2,h3{font-family:'Sora',sans-serif}.header{display:flex;justify-content:space-between;align-items:center;border-bottom:3px solid #FF6B2B;padding-bottom:20px;margin-bottom:36px}.logo{font-size:22px;font-weight:700;color:#0D1B3E}.logo span{color:#FF6B2B}.date{font-size:12px;color:#999}.badge{background:#FF6B2B;color:white;padding:4px 14px;border-radius:20px;font-size:11px;font-weight:600}.summary{background:#FFF8F4;border:1px solid #FFE4D5;border-radius:12px;padding:28px;margin-bottom:28px;text-align:center}.summary .cost{font-size:42px;font-weight:700;color:#FF6B2B;font-family:'Sora',sans-serif}.summary .range{font-size:12px;color:#999;margin-top:6px}table{width:100%;border-collapse:collapse;margin-bottom:28px}th{text-align:left;padding:12px 16px;background:#F9FAFB;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;color:#999;border-bottom:2px solid #E5E7EB}td{padding:10px 16px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#555}.section-title{font-size:16px;font-weight:700;color:#0D1B3E;margin-bottom:14px;display:flex;align-items:center;gap:8px}.dot{width:8px;height:8px;border-radius:50%;background:#FF6B2B}.footer{margin-top:40px;padding-top:20px;border-top:2px solid #f0f0f0;text-align:center;font-size:11px;color:#bbb}@media print{body{padding:24px}}</style></head><body><div class="header"><div><div class="logo">Inno<span>v</span>yasa Devsol</div><div style="font-size:12px;color:#777;margin-top:2px">Digital Solutions & Academic Projects</div></div><div style="text-align:right"><span class="badge">Estimate</span><div class="date" style="margin-top:6px">${new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</div></div></div><div class="summary"><div style="font-size:12px;color:#999;margin-bottom:6px;text-transform:uppercase;letter-spacing:1px">Estimated Project Cost</div><div class="cost">₹${estimatedCost.toLocaleString("en-IN")}</div><div class="range">Range: ₹${Math.round(estimatedCost * 0.85).toLocaleString("en-IN")} – ₹${Math.round(estimatedCost * 1.15).toLocaleString("en-IN")}</div></div><div class="section-title"><span class="dot"></span> Project Configuration</div><table><thead><tr><th>Parameter</th><th style="text-align:right">Details</th></tr></thead><tbody><tr><td style="padding:10px 16px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#555">Project Type</td><td style="padding:10px 16px;border-bottom:1px solid #f0f0f0;font-size:13px;text-align:right;font-weight:600;color:#0D1B3E">${currentType.label}</td></tr><tr><td style="padding:10px 16px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#555">Number of ${currentType.unitLabel}</td><td style="padding:10px 16px;border-bottom:1px solid #f0f0f0;font-size:13px;text-align:right;font-weight:600;color:#0D1B3E">${estPages}</td></tr><tr><td style="padding:10px 16px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#555">Design Complexity</td><td style="padding:10px 16px;border-bottom:1px solid #f0f0f0;font-size:13px;text-align:right;font-weight:600;color:#0D1B3E">${currentDesign.label} (${currentDesign.multiplier}x)</td></tr></tbody></table><div class="section-title"><span class="dot"></span> Cost Breakdown</div><table><thead><tr><th>Item</th><th style="text-align:right">Amount</th></tr></thead><tbody><tr><td style="padding:10px 16px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#555">${currentType.label} — Base Price</td><td style="padding:10px 16px;border-bottom:1px solid #f0f0f0;font-size:13px;text-align:right;font-weight:600;color:#0D1B3E">₹${currentType.basePrice.toLocaleString("en-IN")}</td></tr><tr><td style="padding:10px 16px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#555">${estPages} ${currentType.unitLabel} × ₹${currentType.perUnit.toLocaleString("en-IN")}</td><td style="padding:10px 16px;border-bottom:1px solid #f0f0f0;font-size:13px;text-align:right;font-weight:600;color:#0D1B3E">₹${(currentType.perUnit * estPages).toLocaleString("en-IN")}</td></tr><tr><td style="padding:10px 16px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#555">Design Multiplier (${currentDesign.label})</td><td style="padding:10px 16px;border-bottom:1px solid #f0f0f0;font-size:13px;text-align:right;font-weight:600;color:#0D1B3E">×${currentDesign.multiplier}</td></tr></tbody></table>${selectedFeatureNames.length > 0 ? `<div class="section-title"><span class="dot"></span> Selected Add-on Features</div><table><thead><tr><th>Feature</th><th style="text-align:right">Cost</th></tr></thead><tbody>${featureRows}</tbody></table>` : ""}<div class="footer"><p>This is an approximate estimate generated by Innovyasa Devsol.</p><p style="margin-top:4px">Final pricing may vary. Contact us: innovyasa@gmail.com | +91 9876543210</p></div></body></html>`;
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const win = window.open(url, "_blank");
    if (win) { setTimeout(() => { win.print(); URL.revokeObjectURL(url); }, 600); }
  }, [estimatedCost, currentType, estPages, currentDesign, selectedFeatureNames]);

  /* Enquiry form */
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", projectType: "", budget: "", timeline: "", description: "", source: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleFormSubmit = (e: React.FormEvent) => { e.preventDefault(); setFormSubmitted(true); };

  return (
    <div className="overflow-x-hidden">

      {/* ═══ HERO ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-32 md:py-36 px-4 bg-gradient-to-br from-navy via-[#0F2149] to-[#1A2E5A] overflow-hidden">
        <div className="absolute inset-0 section-grid opacity-[0.06]" />
        <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.15, 0.08] }} transition={{ duration: 12, repeat: Infinity }} className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
        <motion.div animate={{ scale: [1.2, 1, 1.2], opacity: [0.06, 0.12, 0.06] }} transition={{ duration: 15, repeat: Infinity, delay: 3 }} className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full" />
        <motion.div animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-1/4 right-1/4 w-3 h-3 bg-primary rounded-full opacity-40" />
        <motion.div animate={{ y: [15, -15, 15], x: [10, -10, 10] }} transition={{ duration: 10, repeat: Infinity, delay: 2 }} className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-30" />
        <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity, delay: 1 }} className="absolute top-1/2 left-[10%] w-4 h-4 border-2 border-primary/20 rounded-full" />
        <svg className="absolute top-20 left-[15%] opacity-10" width="60" height="60" viewBox="0 0 60 60"><polygon points="30,0 60,60 0,60" fill="none" stroke="#FF6B2B" strokeWidth="1" /></svg>
        <svg className="absolute bottom-28 right-[12%] opacity-10" width="80" height="80" viewBox="0 0 80 80"><rect x="10" y="10" width="60" height="60" fill="none" stroke="#4F8EFF" strokeWidth="1" transform="rotate(15 40 40)" /></svg>

        <div className="max-w-7xl mx-auto relative text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="hero-tag inline-flex mb-6 border-primary/30 bg-primary/10 text-primary">
            <Sparkles className="w-3.5 h-3.5" /> Devsol — Digital Solutions
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-5xl mx-auto leading-[1.1]" style={{ fontFamily: "Sora, sans-serif" }}>
            We Build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-light">Digital Solutions</span>{" "}
            That Drive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Real Results</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            From startups to enterprises — custom web apps, mobile solutions, AI-powered tools, workflow automation &amp; academic projects. Estimate costs, book a call, and get started in minutes.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex gap-4 justify-center flex-wrap">
            <a href="#estimator" className="btn-primary text-base"><Calculator className="w-4 h-4" /> Estimate Your Project</a>
            <a href="#book-call" className="btn-outline" style={{ color: 'white', borderColor: 'white' }}><Calendar className="w-4 h-4" /> Book a Free Call</a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-16 flex flex-wrap gap-3 justify-center">
            {sectionLinks.map(s => (
              <a key={s.id} href={`#${s.id}`} className="text-xs text-gray-400 hover:text-primary border border-white/10 hover:border-primary/30 px-4 py-2 rounded-full transition-all duration-300 hover:bg-primary/5">
                {s.label}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ STATS BAR ═════════════════════════════════════════════════════ */}
      <section className="relative -mt-10 z-10 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl shadow-navy/10 border border-gray-100 p-8 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 50, suffix: "+", label: "Projects Delivered" },
              { value: 30, suffix: "+", label: "Happy Clients" },
              { value: 98, suffix: "%", label: "Client Satisfaction" },
              { value: 4, suffix: "+", label: "Years Experience" },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="stat-value mb-1"><AnimatedCounter end={stat.value} suffix={stat.suffix} /></div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ══════════════════════════════════════════════════════ */}
      <section id="services" className="pt-28 pb-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="hero-tag inline-flex mb-4">What We Build</span>
            <h2 className="section-title mb-4">Our <span className="text-primary">Services</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">End-to-end digital solutions tailored to your business needs — from concept to deployment and beyond.</p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(s => (
              <StaggerItem key={s.title}>
                <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="group bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full">
                  <div className={`w-12 h-12 ${s.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <s.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-navy text-base mb-2" style={{ fontFamily: "Sora, sans-serif" }}>{s.title}</h3>
                  <p className="text-gray-500 text-sm mb-3 leading-relaxed">{s.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map(t => (<span key={t} className="text-[11px] bg-gray-50 text-gray-500 px-2 py-0.5 rounded-full">{t}</span>))}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ PORTFOLIO — Table / List View ═══════════════════════════════ */}
      <section id="portfolio" className="py-28 px-4 bg-[#f8f9fb] relative overflow-hidden">
        <div className="absolute inset-0 section-dots opacity-[0.13]" />
        <div className="max-w-6xl mx-auto relative">
          <FadeIn className="text-center mb-14">
            <span className="hero-tag inline-flex mb-4">Our Work</span>
            <h2 className="section-title mb-4">Client <span className="text-primary">Portfolio</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Real projects, real results. Click any row to explore the full case study.</p>
          </FadeIn>

          <FadeIn className="flex flex-wrap gap-2 justify-center mb-10">
            {portfolioCategories.map(cat => (
              <button key={cat} onClick={() => { setActiveCategory(cat); setPortfolioPage(1); }} className={cat === activeCategory ? "pill-active" : "pill-inactive"}>{cat}</button>
            ))}
          </FadeIn>

          {/* Table header */}
          <div className="hidden md:grid grid-cols-[1fr_140px_110px_160px_130px] gap-4 px-5 py-3 text-[11px] font-semibold text-gray-400 uppercase tracking-wider border-b border-gray-200 mb-1">
            <span>Project</span>
            <span>Client</span>
            <span>Category</span>
            <span>Tech Stack</span>
            <span className="text-right">Outcome</span>
          </div>

          {/* Project rows */}
          <motion.div layout className="flex flex-col">
            <AnimatePresence mode="popLayout">
              {paginatedProjects.map((p) => {
                const globalIdx = filteredProjects.indexOf(p);
                return (
                  <motion.div key={p.title} layout initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.2 }}>
                    <button onClick={() => setSelectedProjectIdx(globalIdx)} className="w-full text-left group">
                      {/* Mobile card */}
                      <div className="md:hidden bg-gray-50 rounded-xl p-4 mb-2 border border-gray-100 hover:border-primary/30 hover:bg-primary/[0.02] transition-all">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-navy text-sm" style={{ fontFamily: "Sora, sans-serif" }}>{p.title}</h3>
                          <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ml-2 ${p.status === "Completed" ? "bg-green-100 text-green-700" : p.status === "Ongoing" ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700"}`}>{p.status}</span>
                        </div>
                        <div className="text-xs text-gray-400 mb-2">{p.client} &middot; {p.category}</div>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {p.tags.map(t => (<span key={t} className="text-[9px] bg-primary/10 text-primary px-1.5 py-0.5 rounded-full font-medium">{t}</span>))}
                        </div>
                        <div className="flex items-center gap-1 text-[11px] text-green-600 font-medium">
                          <CheckCircle className="w-3 h-3" />{p.outcome}
                        </div>
                      </div>
                      {/* Desktop row */}
                      <div className="hidden md:grid grid-cols-[1fr_140px_110px_160px_130px] gap-4 items-center px-5 py-4 rounded-lg border-l-[3px] border-l-transparent hover:border-l-primary hover:bg-gray-50/80 transition-all duration-200 cursor-pointer group border-b border-gray-100">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className={`w-2 h-2 rounded-full flex-shrink-0 ${p.status === "Completed" ? "bg-green-500" : p.status === "Ongoing" ? "bg-amber-500 animate-pulse" : "bg-blue-500"}`} />
                          <div className="min-w-0">
                            <h3 className="font-bold text-navy text-sm truncate group-hover:text-primary transition-colors" style={{ fontFamily: "Sora, sans-serif" }}>{p.title}</h3>
                          </div>
                        </div>
                        <div className="text-xs text-gray-500 truncate">{p.client}</div>
                        <span className="text-[10px] font-semibold bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md w-fit">{p.category}</span>
                        <div className="flex flex-wrap gap-1">
                          {p.tags.slice(0, 2).map(t => (<span key={t} className="text-[9px] bg-primary/8 text-primary/80 px-2 py-0.5 rounded font-medium">{t}</span>))}
                          {p.tags.length > 2 && <span className="text-[9px] text-gray-400">+{p.tags.length - 2}</span>}
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px] text-green-600 font-semibold justify-end">
                          <CheckCircle className="w-3 h-3 flex-shrink-0" /><span className="truncate">{p.outcome}</span>
                        </div>
                      </div>
                    </button>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Pagination */}
          {totalPortfolioPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              <button onClick={() => setPortfolioPage(p => Math.max(1, p - 1))} disabled={portfolioPage === 1} className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              {Array.from({ length: totalPortfolioPages }, (_, i) => i + 1).map(page => (
                <button key={page} onClick={() => setPortfolioPage(page)} className={`w-9 h-9 rounded-lg text-sm font-semibold transition-colors ${page === portfolioPage ? "bg-primary text-white shadow-md" : "border border-gray-200 text-gray-500 hover:text-primary hover:border-primary"}`}>
                  {page}
                </button>
              ))}
              <button onClick={() => setPortfolioPage(p => Math.min(totalPortfolioPages, p + 1))} disabled={portfolioPage === totalPortfolioPages} className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          <div className="text-center mt-4 text-xs text-gray-400">
            Showing {(portfolioPage - 1) * PROJECTS_PER_PAGE + 1}–{Math.min(portfolioPage * PROJECTS_PER_PAGE, filteredProjects.length)} of {filteredProjects.length} projects
          </div>
        </div>
      </section>

      {/* ═══ PORTFOLIO DETAIL MODAL — Clean left panel ═════════════════ */}
      <AnimatePresence>
        {selectedProjectIdx !== null && filteredProjects[selectedProjectIdx] && (() => {
          const p = filteredProjects[selectedProjectIdx];
          return (
            <motion.div key="portfolio-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex justify-start" onClick={() => setSelectedProjectIdx(null)}>
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
              <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ type: "spring", stiffness: 300, damping: 30 }} onClick={e => e.stopPropagation()} className="relative bg-white w-full max-w-lg h-full overflow-y-auto shadow-2xl">
                {/* Header bar */}
                <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center`}>
                      {p.category === "Academic" ? <GraduationCap className="w-5 h-5 text-white" /> : <Code className="w-5 h-5 text-white" />}
                    </div>
                    <div>
                      <h3 className="font-bold text-navy text-base leading-tight" style={{ fontFamily: "Sora, sans-serif" }}>{p.title}</h3>
                      <div className="text-[11px] text-gray-400">{p.client}</div>
                    </div>
                  </div>
                  <button onClick={() => setSelectedProjectIdx(null)} className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-500 transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Meta badges */}
                <div className="px-6 pt-5 pb-4 flex flex-wrap gap-2 border-b border-gray-50">
                  <span className="text-[10px] font-semibold bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">{p.category}</span>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md ${p.status === "Completed" ? "bg-green-50 text-green-700" : p.status === "Ongoing" ? "bg-amber-50 text-amber-700" : "bg-blue-50 text-blue-700"}`}>
                    {p.status === "Ongoing" && <Wrench className="w-3 h-3 inline mr-0.5 -mt-0.5" />}
                    {p.status}
                  </span>
                </div>

                {/* Body */}
                <div className="px-6 py-6">
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{p.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tags.map(t => (<span key={t} className="text-[11px] bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md font-medium">{t}</span>))}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-green-600 font-semibold mb-5 py-3 border-y border-gray-100">
                    <CheckCircle className="w-4 h-4" />{p.outcome}
                  </div>

                  {/* Client Review */}
                  {p.status === "Completed" && p.review && (
                    <div className="bg-gray-50 rounded-xl p-4 mb-5 border border-gray-100">
                      <div className="flex items-center gap-1 mb-2">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                      </div>
                      <p className="text-sm text-gray-500 italic leading-relaxed">&ldquo;{p.review}&rdquo;</p>
                      <p className="text-xs text-gray-400 mt-2 font-medium">— {p.client}</p>
                    </div>
                  )}

                  {/* Action buttons */}
                  <div className="flex flex-col gap-3">
                    {p.status === "Completed" && p.liveUrl && (
                      <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-sm font-semibold text-primary bg-primary/10 hover:bg-primary/20 px-5 py-3 rounded-xl transition-colors">
                        <Eye className="w-4 h-4" />View Live Project
                      </a>
                    )}
                    <button onClick={() => { setSelectedProjectIdx(null); setFormData(prev => ({ ...prev, projectType: `Similar to: ${p.title}`, description: `Hi, I saw ${p.title} in your portfolio (${p.category}) and I'm interested in a similar project. Please share details.` })); document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" }); }} className="flex items-center justify-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-primary to-orange-light hover:opacity-90 px-5 py-3 rounded-xl transition-opacity shadow-lg shadow-primary/20">
                      <Send className="w-4 h-4" />Enquire Similar Project
                    </button>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 bg-gray-50/50 sticky bottom-0">
                  <button onClick={() => setSelectedProjectIdx(prev => prev !== null && prev > 0 ? prev - 1 : prev)} disabled={selectedProjectIdx === 0} className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                    <ChevronLeft className="w-4 h-4" /> Previous
                  </button>
                  <span className="text-xs text-gray-400">{selectedProjectIdx + 1} / {filteredProjects.length}</span>
                  <button onClick={() => setSelectedProjectIdx(prev => prev !== null && prev < filteredProjects.length - 1 ? prev + 1 : prev)} disabled={selectedProjectIdx === filteredProjects.length - 1} className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                    Next <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

      {/* ═══ PRODUCTS — Dark Showcase ════════════════════════════════════ */}
      <section id="products" className="py-28 px-4 bg-gradient-to-br from-navy via-[#0F2149] to-[#152952] relative overflow-hidden">
        <div className="absolute inset-0 section-grid opacity-[0.05]" />
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.12, 0.06] }} transition={{ duration: 14, repeat: Infinity }} className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
        <motion.div animate={{ scale: [1.1, 1, 1.1] }} transition={{ duration: 18, repeat: Infinity, delay: 5 }} className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-blue-500/8 blur-[100px] rounded-full" />

        <div className="max-w-7xl mx-auto relative">
          <FadeIn className="text-center mb-16">
            <span className="hero-tag inline-flex mb-4 border-primary/30 bg-primary/10 text-primary"><Package className="w-3.5 h-3.5" /> In-House Products</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "Sora, sans-serif" }}>Built by <span className="text-primary">Innovyasa</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Battle-tested platforms we built to solve real problems — now available for your business.</p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((p, idx) => (
              <StaggerItem key={p.title}>
                <motion.button whileHover={{ y: -6, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} onClick={() => setSelectedProductIdx(idx)} className="w-full text-left group h-full">
                  <div className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.07] hover:border-primary/20 transition-all duration-300 relative overflow-hidden h-full flex flex-col">
                    {/* Subtle gradient accent on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${p.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 rounded-2xl`} />

                    <div className="relative flex flex-col gap-4 flex-1">
                      {/* Icon + badges */}
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center flex-shrink-0 shadow-lg shadow-black/20`}>
                          <p.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${p.status === "Live" ? "bg-green-500/20 text-green-400 border border-green-500/30" : p.status === "Beta" ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" : "bg-gray-500/20 text-gray-400 border border-gray-500/30"}`}>{p.status}</span>
                          <span className="text-[9px] font-medium px-2 py-0.5 rounded-full bg-white/10 text-gray-300">{p.type}</span>
                        </div>
                      </div>

                      {/* Title + subtitle */}
                      <div>
                        <h3 className="font-bold text-white text-base mb-0.5" style={{ fontFamily: "Sora, sans-serif" }}>{p.title}</h3>
                        <div className="text-[11px] text-gray-500 font-medium">{p.subtitle}</div>
                      </div>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-1.5 flex-1">
                        {p.features.map(f => (
                          <span key={f} className="text-[10px] text-gray-400 flex items-center gap-1.5">
                            <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />{f}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-xs text-primary font-semibold group-hover:gap-3 transition-all pt-2 border-t border-white/[0.06]">
                        Explore <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </motion.button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ PRODUCT DETAIL MODAL — Slide-in Panel ════════════════════════ */}
      <AnimatePresence>
        {selectedProductIdx !== null && products[selectedProductIdx] && (() => {
          const p = products[selectedProductIdx];
          return (
            <motion.div key="product-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8" onClick={() => setSelectedProductIdx(null)}>
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
              <motion.div initial={{ opacity: 0, scale: 0.92, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.92, y: 30 }} transition={{ type: "spring", stiffness: 300, damping: 30 }} onClick={e => e.stopPropagation()} className="relative bg-navy rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto">
                {/* Gradient Header */}
                <div className={`bg-gradient-to-r ${p.color} p-7 rounded-t-2xl relative`}>
                  <button onClick={() => setSelectedProductIdx(null)} className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/30 transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                      <p.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-white text-2xl" style={{ fontFamily: "Sora, sans-serif" }}>{p.title}</h3>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${p.status === "Live" ? "bg-white/30 text-white" : p.status === "Beta" ? "bg-white/30 text-white" : "bg-white/30 text-white"}`}>{p.status}</span>
                      </div>
                      <div className="text-white/70 text-sm">{p.subtitle} &middot; {p.type}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">{p.desc}</p>

                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {p.features.map(f => (
                      <div key={f} className="flex items-center gap-2 text-sm text-gray-200 bg-white/[0.04] border border-white/[0.06] rounded-xl px-3.5 py-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />{f}
                      </div>
                    ))}
                  </div>

                  <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2" style={{ fontFamily: "Sora, sans-serif" }}>
                    <Sparkles className="w-4 h-4 text-primary" /> Detailed Features & Usage
                  </h4>
                  <div className="grid gap-3 mb-6">
                    {p.detailFeatures.map((df, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-gray-200">
                        <span className="w-6 h-6 rounded-lg bg-primary/10 text-primary text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                        {df}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                    <a href={p.accessUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold text-white bg-gradient-to-r from-primary to-orange-light hover:opacity-90 px-5 py-2.5 rounded-lg transition-opacity shadow-sm">
                      <ExternalLink className="w-3.5 h-3.5" />
                      {p.status === "Coming Soon" ? "Get Notified" : p.status === "Beta" ? "Try Beta" : "Access App"}
                    </a>
                    <button onClick={() => { setSelectedProductIdx(null); setFormData(prev => ({ ...prev, projectType: "webapp", description: `Hi, I'm interested in a custom version of ${p.title} (${p.subtitle}). Please share pricing and customization options.` })); document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" }); }} className="flex items-center gap-1.5 text-xs font-semibold text-white bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 px-5 py-2.5 rounded-lg transition-colors">
                      <Send className="w-3.5 h-3.5" />Request Customization
                    </button>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex items-center justify-between px-7 py-4 border-t border-white/10 bg-white/[0.02] rounded-b-2xl">
                  <button onClick={() => setSelectedProductIdx(prev => prev !== null && prev > 0 ? prev - 1 : prev)} disabled={selectedProductIdx === 0} className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                    <ChevronLeft className="w-4 h-4" /> Previous
                  </button>
                  <span className="text-xs text-gray-300">{selectedProductIdx + 1} / {products.length}</span>
                  <button onClick={() => setSelectedProductIdx(prev => prev !== null && prev < products.length - 1 ? prev + 1 : prev)} disabled={selectedProductIdx === products.length - 1} className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                    Next <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

      {/* ═══ COST ESTIMATOR ════════════════════════════════════════════════ */}
      <section id="estimator" className="py-28 px-4 bg-gradient-to-br from-gray-50 to-orange-50/30 relative overflow-hidden">
        <div className="absolute inset-0 section-grid opacity-[0.04]" />
        <svg className="absolute bottom-0 right-0 opacity-5" width="400" height="400" viewBox="0 0 400 400"><circle cx="400" cy="400" r="300" fill="none" stroke="#FF6B2B" strokeWidth="1" /><circle cx="400" cy="400" r="200" fill="none" stroke="#FF6B2B" strokeWidth="0.5" /></svg>
        <svg className="absolute top-20 left-10 opacity-[0.03]" width="200" height="200" viewBox="0 0 200 200"><polygon points="100,10 190,190 10,190" fill="none" stroke="#0D1B3E" strokeWidth="1.5" /></svg>

        <div ref={estimatorRef} className="max-w-7xl mx-auto relative">
          <AnimatePresence mode="wait">

            {/* ── Phase 1: Landing CTA ─────────────────────────────────── */}
            {estPhase === "landing" && (
              <motion.div key="est-landing" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
                <div className="max-w-3xl mx-auto text-center">
                  <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1 }} className="w-24 h-24 bg-gradient-to-br from-primary to-orange-light rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-primary/20">
                    <Calculator className="w-12 h-12 text-white" />
                  </motion.div>
                  <span className="hero-tag inline-flex mb-6"><Sparkles className="w-3.5 h-3.5" /> Free Instant Estimate</span>
                  <h2 className="section-title mb-5">Calculate Your Project <span className="text-primary">Cost</span></h2>
                  <p className="text-gray-500 text-lg max-w-xl mx-auto mb-6 leading-relaxed">
                    Get an instant ballpark estimate for your next project. Configure project type, design complexity, and features — see pricing in real-time.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center mb-10 text-sm text-gray-400">
                    {["Website", "Web App", "Mobile App", "n8n Automation", "UiPath RPA"].map(t => (
                      <span key={t} className="flex items-center gap-1.5 bg-white border border-gray-100 px-3.5 py-1.5 rounded-full shadow-sm">
                        <CheckCircle className="w-3.5 h-3.5 text-primary" />{t}
                      </span>
                    ))}
                  </div>
                  <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={handleStartEstimator} className="btn-primary shadow-lg shadow-primary/25" style={{ fontSize: '1.125rem', padding: '16px 40px' }}>
                    <Calculator className="w-5 h-5" /> Calculate My Project Estimation <ChevronRight className="w-5 h-5" />
                  </motion.button>
                  <p className="text-xs text-gray-400 mt-5">Free, no signup required. Takes less than 2 minutes.</p>
                </div>
              </motion.div>
            )}

            {/* ── Phase 2: Configuration ──────────────────────────────── */}
            {estPhase === "configure" && (
              <motion.div key="est-configure" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
                <FadeIn className="text-center mb-14">
                  <span className="hero-tag inline-flex mb-4"><Calculator className="w-3.5 h-3.5" /> Step-by-step</span>
                  <h2 className="section-title mb-3">Configure Your <span className="text-primary">Project</span></h2>
                  <p className="text-gray-500 max-w-xl mx-auto">Select your project requirements below. You can adjust everything before calculating.</p>
                </FadeIn>

                <div className="max-w-4xl mx-auto space-y-7">
                  {/* 1 — Project Type */}
                  <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-navy mb-1.5 flex items-center gap-3" style={{ fontFamily: "Sora, sans-serif" }}>
                      <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-xs font-bold">1</span>
                      Project Type
                    </h3>
                    <p className="text-gray-400 text-sm mb-5 ml-11">What are you looking to build?</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 ml-11">
                      {projectTypes.map(t => (
                        <button key={t.id} onClick={() => { setEstType(t.id); setEstPages(5); }} className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${estType === t.id ? "border-primary bg-primary/5 shadow-md" : "border-gray-100 hover:border-primary/30 bg-white"}`}>
                          <t.icon className={`w-6 h-6 mb-2 ${estType === t.id ? "text-primary" : "text-gray-400"}`} />
                          <div className={`text-sm font-semibold ${estType === t.id ? "text-navy" : "text-gray-600"}`}>{t.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 2 — Page Count */}
                  <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-navy mb-1.5 flex items-center gap-3" style={{ fontFamily: "Sora, sans-serif" }}>
                      <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-xs font-bold">2</span>
                      Number of {currentType.unitLabel}
                    </h3>
                    <p className="text-gray-400 text-sm mb-5 ml-11">How many {currentType.unitLabel.toLowerCase()} does your project need?</p>
                    <div className="flex items-center gap-4 ml-11">
                      <button onClick={() => setEstPages(Math.max(1, estPages - 1))} className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"><Minus className="w-4 h-4" /></button>
                      <div className="flex-1">
                        <input type="range" min={1} max={50} value={estPages} onChange={e => setEstPages(Number(e.target.value))} className="estimator-range w-full" />
                        <div className="flex justify-between text-[10px] text-gray-400 mt-1.5 px-1"><span>1</span><span>25</span><span>50</span></div>
                      </div>
                      <button onClick={() => setEstPages(Math.min(50, estPages + 1))} className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"><Plus className="w-4 h-4" /></button>
                      <div className="w-16 h-10 bg-primary/10 rounded-xl flex items-center justify-center"><span className="text-primary font-bold text-lg">{estPages}</span></div>
                    </div>
                  </div>

                  {/* 3 — Design Level */}
                  <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-navy mb-1.5 flex items-center gap-3" style={{ fontFamily: "Sora, sans-serif" }}>
                      <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-xs font-bold">3</span>
                      Design Complexity
                    </h3>
                    <p className="text-gray-400 text-sm mb-5 ml-11">Choose the design quality tier.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 ml-11">
                      {designLevels.map(d => (
                        <button key={d.id} onClick={() => setEstDesign(d.id)} className={`p-5 rounded-xl border-2 text-center transition-all ${estDesign === d.id ? "border-primary bg-primary/5 shadow-md" : "border-gray-100 hover:border-primary/30"}`}>
                          <div className="text-2xl mb-2">{d.emoji}</div>
                          <div className={`text-sm font-bold ${estDesign === d.id ? "text-navy" : "text-gray-600"}`}>{d.label}</div>
                          <div className="text-[11px] text-gray-400 mt-1">{d.desc}</div>
                          <div className="text-[10px] text-primary font-semibold mt-2">{d.multiplier}x</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 4 — Features */}
                  <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-navy mb-1.5 flex items-center gap-3" style={{ fontFamily: "Sora, sans-serif" }}>
                      <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-xs font-bold">4</span>
                      Add-on Features
                    </h3>
                    <p className="text-gray-400 text-sm mb-5 ml-11">Select additional features for your project.</p>
                    <div className="grid sm:grid-cols-2 gap-2.5 ml-11">
                      {featureAddons.map(f => (
                        <button key={f.id} onClick={() => toggleFeature(f.id)} className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all text-left ${estFeatures.includes(f.id) ? "border-primary bg-primary/5" : "border-gray-100 hover:border-gray-200"}`}>
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${estFeatures.includes(f.id) ? "bg-primary text-white" : "bg-gray-50 text-gray-400"}`}>
                            <f.icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className={`text-sm font-medium truncate ${estFeatures.includes(f.id) ? "text-navy" : "text-gray-600"}`}>{f.label}</div>
                            <div className="text-[11px] text-gray-400">+ ₹{f.price.toLocaleString("en-IN")}</div>
                          </div>
                          <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 ${estFeatures.includes(f.id) ? "bg-primary border-primary" : "border-gray-300"}`}>
                            {estFeatures.includes(f.id) && <CheckCircle className="w-3.5 h-3.5 text-white" />}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Calculate Button */}
                  <div className="text-center pt-4 pb-2">
                    <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={handleCalculate} className="btn-primary shadow-lg shadow-primary/25" style={{ fontSize: '1.125rem', padding: '16px 48px' }}>
                      <Calculator className="w-5 h-5" /> Calculate Estimate <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── Phase 3: Results ────────────────────────────────────── */}
            {estPhase === "results" && (
              <motion.div key="est-results" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, delay: 0.1 }} className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                      <CheckCircle className="w-9 h-9 text-green-600" />
                    </motion.div>
                    <h2 className="section-title mb-3">Your Project <span className="text-primary">Estimate</span></h2>
                    <p className="text-gray-500 max-w-lg mx-auto">Here&apos;s the detailed cost breakdown based on your configuration.</p>
                  </div>

                  {/* Main Estimate Card */}
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden mb-8">
                    {/* Top cost banner */}
                    <div className="bg-gradient-to-r from-primary to-orange-light p-8 text-center text-white">
                      <div className="text-sm font-medium opacity-80 mb-2">Estimated Project Cost</div>
                      <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3, type: "spring" }} className="text-5xl md:text-6xl font-bold mb-2" style={{ fontFamily: "Sora, sans-serif" }}>
                        ₹{estimatedCost.toLocaleString("en-IN")}
                      </motion.div>
                      <div className="text-sm opacity-80">
                        Range: ₹{Math.round(estimatedCost * 0.85).toLocaleString("en-IN")} – ₹{Math.round(estimatedCost * 1.15).toLocaleString("en-IN")}
                      </div>
                    </div>

                    {/* Breakdown */}
                    <div className="p-8 md:p-10">
                      {/* Config summary */}
                      <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                        <div className="w-2 h-2 rounded-full bg-primary" /> Project Configuration
                      </div>
                      <div className="grid sm:grid-cols-3 gap-4 mb-8">
                        <div className="bg-gray-50 rounded-xl p-4 text-center">
                          <currentType.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                          <div className="text-xs text-gray-400 mb-0.5">Type</div>
                          <div className="text-sm font-bold text-navy">{currentType.label}</div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4 text-center">
                          <Layers className="w-6 h-6 text-primary mx-auto mb-2" />
                          <div className="text-xs text-gray-400 mb-0.5">{currentType.unitLabel}</div>
                          <div className="text-sm font-bold text-navy">{estPages}</div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4 text-center">
                          <Palette className="w-6 h-6 text-primary mx-auto mb-2" />
                          <div className="text-xs text-gray-400 mb-0.5">Design</div>
                          <div className="text-sm font-bold text-navy">{currentDesign.label} ({currentDesign.multiplier}x)</div>
                        </div>
                      </div>

                      {/* Line items */}
                      <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                        <div className="w-2 h-2 rounded-full bg-primary" /> Cost Breakdown
                      </div>
                      <div className="divide-y divide-gray-100 mb-8">
                        <div className="flex justify-between py-3.5 text-sm"><span className="text-gray-500">{currentType.label} — Base Price</span><span className="font-semibold text-navy">₹{currentType.basePrice.toLocaleString("en-IN")}</span></div>
                        <div className="flex justify-between py-3.5 text-sm"><span className="text-gray-500">{estPages} {currentType.unitLabel} × ₹{currentType.perUnit.toLocaleString("en-IN")}</span><span className="font-semibold text-navy">₹{(currentType.perUnit * estPages).toLocaleString("en-IN")}</span></div>
                        <div className="flex justify-between py-3.5 text-sm"><span className="text-gray-500">Design Multiplier ({currentDesign.label})</span><span className="font-semibold text-navy">×{currentDesign.multiplier}</span></div>
                        {estFeatures.length > 0 && (
                          <div className="flex justify-between py-3.5 text-sm"><span className="text-gray-500">Add-ons ({estFeatures.length} features)</span><span className="font-semibold text-navy">₹{estFeatures.reduce((s, fId) => s + (featureAddons.find(a => a.id === fId)?.price ?? 0), 0).toLocaleString("en-IN")}</span></div>
                        )}
                      </div>

                      {/* Selected features list */}
                      {selectedFeatureNames.length > 0 && (
                        <>
                          <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                            <div className="w-2 h-2 rounded-full bg-primary" /> Selected Features
                          </div>
                          <div className="grid sm:grid-cols-2 gap-2.5 mb-8">
                            {selectedFeatureNames.map(f => (
                              <div key={f.id} className="flex items-center gap-3 bg-primary/5 border border-primary/10 rounded-xl p-3">
                                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"><f.icon className="w-4 h-4 text-primary" /></div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm font-medium text-navy truncate">{f.label}</div>
                                  <div className="text-[11px] text-gray-400">₹{f.price.toLocaleString("en-IN")}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}

                      <p className="text-[11px] text-gray-400 text-center mb-6 border-t border-gray-100 pt-5">* This is an approximate estimate. Final pricing may vary based on detailed requirements and project scope discussion.</p>

                      {/* Action buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleDownloadPDF} className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 bg-navy text-white rounded-xl font-semibold text-sm hover:bg-navy-700 transition-colors shadow-md">
                          <Download className="w-4 h-4" /> Download as PDF
                        </motion.button>
                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => {
                          setFormData(prev => ({
                            ...prev,
                            projectType: estType,
                            budget: estimatedCost <= 50000 ? "25k-50k" : estimatedCost <= 100000 ? "50k-1L" : estimatedCost <= 300000 ? "1L-3L" : estimatedCost <= 500000 ? "3L-5L" : "5Lplus",
                            description: `Project Type: ${currentType.label}\n${currentType.unitLabel}: ${estPages}\nDesign: ${currentDesign.label}\nFeatures: ${selectedFeatureNames.map(f => f.label).join(", ") || "None"}\nEstimated Cost: ₹${estimatedCost.toLocaleString("en-IN")}`,
                          }));
                          document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" });
                        }} className="flex-1 btn-primary justify-center text-sm">
                          <Send className="w-4 h-4" /> Send Enquiry to Innovyasa
                        </motion.button>
                      </div>

                      <div className="flex justify-center mt-6">
                        <button onClick={handleRecalculate} className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors font-medium">
                          <RotateCcw className="w-4 h-4" /> Reconfigure &amp; Recalculate
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </section>

      {/* ═══ BOOK A CALL ═══════════════════════════════════════════════════ */}
      <section id="book-call" className="py-28 px-4 bg-gradient-to-br from-navy via-[#0F2149] to-[#1A2E5A] relative overflow-hidden">
        <div className="absolute inset-0 section-grid opacity-[0.06]" />
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full" />
        <motion.div animate={{ scale: [1.2, 1, 1.2] }} transition={{ duration: 12, repeat: Infinity, delay: 4 }} className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-500/5 blur-[100px] rounded-full" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <FadeIn>
              <span className="hero-tag inline-flex mb-6 border-primary/30 bg-primary/10 text-primary"><Calendar className="w-3.5 h-3.5" /> 1-on-1 Consultation</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Sora, sans-serif" }}>
                Book a <span className="text-primary">Free Strategy Call</span> with Our Experts
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">Get personalized advice on your project requirements, tech stack recommendations, timeline planning, and budget optimization — all in a 30-minute focused session.</p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: Clock, text: "30-minute focused session" },
                  { icon: Target, text: "Tailored tech stack recommendations" },
                  { icon: Shield, text: "NDA-protected confidential discussion" },
                  { icon: TrendingUp, text: "Roadmap & milestone planning" },
                  { icon: Users, text: "Direct access to senior engineers" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"><Icon className="w-4 h-4 text-primary" /></div>
                    <span className="text-gray-300 text-sm">{text}</span>
                  </div>
                ))}
              </div>
              <a href="https://cal.com" target="_blank" rel="noopener noreferrer" className="btn-primary text-base">
                <Calendar className="w-4 h-4" /> Schedule on Cal.com <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-9 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-orange-light rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-white text-xl font-bold mb-3" style={{ fontFamily: "Sora, sans-serif" }}>Quick Book</h3>
                <p className="text-gray-400 text-sm mb-6">Choose your preferred platform to schedule a call with our team.</p>
                <div className="space-y-3">
                  <a href="https://cal.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-3.5 px-6 bg-white text-navy rounded-xl font-semibold text-sm hover:bg-gray-100 transition-colors">
                    <Calendar className="w-5 h-5" /> Book via Cal.com
                  </a>
                  <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-3.5 px-6 bg-white/10 border border-white/20 text-white rounded-xl font-semibold text-sm hover:bg-white/20 transition-colors">
                    <Calendar className="w-5 h-5" /> Book via Calendly
                  </a>
                </div>
                <div className="mt-6 flex items-center justify-center gap-2 text-gray-500 text-xs">
                  <Clock className="w-3.5 h-3.5" /> Available Mon–Sat, 10 AM – 7 PM IST
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ ENQUIRY FORM ══════════════════════════════════════════════════ */}
      <section id="enquiry" className="py-28 px-4 bg-white relative overflow-hidden">
        <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 16, repeat: Infinity }} className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full" />
        <div className="max-w-7xl mx-auto relative">
          <FadeIn className="text-center mb-16">
            <span className="hero-tag inline-flex mb-4"><Send className="w-3.5 h-3.5" /> Project Enquiry</span>
            <h2 className="section-title mb-4">Tell Us About Your <span className="text-primary">Project</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Share your requirements and we&apos;ll get back to you within 24 hours with a detailed proposal and timeline.</p>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {formSubmitted ? (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle className="w-10 h-10 text-green-600" /></div>
                  <h3 className="text-2xl font-bold text-navy mb-3" style={{ fontFamily: "Sora, sans-serif" }}>Enquiry Submitted Successfully!</h3>
                  <p className="text-gray-500 mb-6">Thank you for your interest. Our team will review your requirements and reach out within 24 hours.</p>
                  <button onClick={() => { setFormSubmitted(false); setFormData({ name: "", email: "", phone: "", company: "", projectType: "", budget: "", timeline: "", description: "", source: "" }); }} className="btn-outline text-sm">Submit Another Enquiry</button>
                </motion.div>
              ) : (
                <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleFormSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 md:p-10">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input type="text" name="name" value={formData.name} onChange={handleFormChange} required placeholder="John Doe" className="devsol-input pl-11" />
                      </div>
                    </div>
                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input type="email" name="email" value={formData.email} onChange={handleFormChange} required placeholder="john@company.com" className="devsol-input pl-11" />
                      </div>
                    </div>
                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input type="tel" name="phone" value={formData.phone} onChange={handleFormChange} placeholder="+91 98765 43210" className="devsol-input pl-11" />
                      </div>
                    </div>
                    {/* Company */}
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">Company / Organization</label>
                      <div className="relative">
                        <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input type="text" name="company" value={formData.company} onChange={handleFormChange} placeholder="Acme Corp" className="devsol-input pl-11" />
                      </div>
                    </div>
                    {/* Project Type */}
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">Project Type *</label>
                      <select name="projectType" value={formData.projectType} onChange={handleFormChange} required className="devsol-select">
                        <option value="">Select project type</option>
                        <option value="website">Website</option>
                        <option value="webapp">Web Application</option>
                        <option value="mobile">Mobile App</option>
                        <option value="fullstack">Mobile + Web App</option>
                        <option value="n8n">n8n Automation</option>
                        <option value="rpa">UiPath RPA</option>
                        <option value="ai">AI/ML Solution</option>
                        <option value="academic">Academic Project</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    {/* Budget */}
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">Budget Range</label>
                      <select name="budget" value={formData.budget} onChange={handleFormChange} className="devsol-select">
                        <option value="">Select budget range</option>
                        <option value="lt25k">Under ₹25,000</option>
                        <option value="25k-50k">₹25,000 – ₹50,000</option>
                        <option value="50k-1L">₹50,000 – ₹1,00,000</option>
                        <option value="1L-3L">₹1,00,000 – ₹3,00,000</option>
                        <option value="3L-5L">₹3,00,000 – ₹5,00,000</option>
                        <option value="5Lplus">₹5,00,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Timeline */}
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">Expected Timeline</label>
                      <select name="timeline" value={formData.timeline} onChange={handleFormChange} className="devsol-select">
                        <option value="">Select timeline</option>
                        <option value="lt2w">Less than 2 weeks</option>
                        <option value="2w-1m">2 weeks – 1 month</option>
                        <option value="1m-3m">1 – 3 months</option>
                        <option value="3m-6m">3 – 6 months</option>
                        <option value="6mplus">6+ months</option>
                      </select>
                    </div>
                    {/* Source */}
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">How did you find us?</label>
                      <select name="source" value={formData.source} onChange={handleFormChange} className="devsol-select">
                        <option value="">Select an option</option>
                        <option value="google">Google Search</option>
                        <option value="social">Social Media</option>
                        <option value="referral">Referral</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="event">Event / Workshop</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <label className="block text-sm font-semibold text-navy mb-2">Project Description *</label>
                    <textarea name="description" value={formData.description} onChange={handleFormChange} required rows={5} placeholder="Describe your project requirements, features, target audience, any specific technologies, and other relevant details..." className="devsol-input resize-none" />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <button type="submit" className="btn-primary w-full sm:w-auto text-base"><Send className="w-4 h-4" /> Submit Enquiry</button>
                    <p className="text-xs text-gray-400">We respond within 24 hours. Your data is secure and confidential.</p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══════════════════════════════════════════════════════════ */}
      <section className="py-28 px-4 bg-gradient-to-br from-navy to-[#0F2149] text-center relative overflow-hidden">
        <div className="absolute inset-0 section-dots opacity-10" />
        <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 12, repeat: Infinity }} className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
        <svg className="absolute left-10 bottom-10 opacity-10" width="120" height="120" viewBox="0 0 120 120"><polygon points="60,0 120,120 0,120" fill="none" stroke="#FF6B2B" strokeWidth="1" /></svg>
        <FadeIn className="relative max-w-3xl mx-auto">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6"><Rocket className="w-8 h-8 text-primary" /></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "Sora, sans-serif" }}>
            Ready to Build Something <span className="text-primary">Amazing?</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed">Let&apos;s turn your vision into reality. Get a free consultation, instant cost estimate, and a roadmap to launch.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#estimator" className="btn-primary text-base"><Calculator className="w-4 h-4" /> Get an Estimate</a>
            <a href="#book-call" className="btn-outline" style={{ color: 'white', borderColor: 'white' }}><Calendar className="w-4 h-4" /> Book a Call</a>
            <a href="#enquiry" className="btn-outline"><Send className="w-4 h-4" /> Submit Enquiry</a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
