"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ArrowLeft, CheckCircle, User, GraduationCap,
  Code, Upload, Eye, Send, Clock, MapPin, Briefcase, Star,
  FileText, AlertCircle, Sparkles
} from "lucide-react";
import { FadeIn } from "@/components/AnimationUtils";

const steps = [
  { id: 1, title: "Personal Details", icon: User, desc: "Basic info about you" },
  { id: 2, title: "Education", icon: GraduationCap, desc: "Your academic background" },
  { id: 3, title: "Skills & Experience", icon: Code, desc: "What you bring to the table" },
  { id: 4, title: "Documents", icon: Upload, desc: "Resume and links" },
  { id: 5, title: "Review & Submit", icon: Eye, desc: "Double-check everything" },
];

const internshipRoles = [
  "Software Developer",
  "UI/UX Designer",
  "Data Science Analyst",
  "Flutter Developer",
  "Python Full Stack Developer",
  "Java Developer",
  "Data Visualist",
  "C# Developer",
];

const skillsList = [
  "Python", "JavaScript", "React", "Flutter", "Java", "Node.js",
  "SQL", "Machine Learning", "UI/UX Design", "Figma", "C#", "Django",
  "TypeScript", "MongoDB", "Data Analysis", "Power BI",
];

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  role: string;
  degree: string;
  college: string;
  year: string;
  cgpa: string;
  skills: string[];
  experience: string;
  motivation: string;
  linkedin: string;
  github: string;
  portfolio: string;
  resumeName: string;
};

const initialForm: FormData = {
  firstName: "", lastName: "", email: "", phone: "", city: "", role: "",
  degree: "", college: "", year: "", cgpa: "",
  skills: [], experience: "", motivation: "",
  linkedin: "", github: "", portfolio: "", resumeName: "",
};

export default function InternshipApplyPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const update = (field: keyof FormData, value: string | string[]) =>
    setForm(prev => ({ ...prev, [field]: value }));

  const toggleSkill = (skill: string) => {
    const current = form.skills;
    if (current.includes(skill)) {
      update("skills", current.filter(s => s !== skill));
    } else if (current.length < 8) {
      update("skills", [...current, skill]);
    }
  };

  const validateStep = () => {
    const newErrors: typeof errors = {};
    if (step === 1) {
      if (!form.firstName) newErrors.firstName = "Required";
      if (!form.lastName) newErrors.lastName = "Required";
      if (!form.email) newErrors.email = "Required";
      if (!form.phone) newErrors.phone = "Required";
      if (!form.role) newErrors.role = "Please select a role";
    }
    if (step === 2) {
      if (!form.degree) newErrors.degree = "Required";
      if (!form.college) newErrors.college = "Required";
      if (!form.year) newErrors.year = "Required";
    }
    if (step === 3) {
      if (form.skills.length === 0) newErrors.skills = "Select at least one skill";
      if (!form.motivation) newErrors.motivation = "Required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const next = () => {
    if (validateStep()) setStep(s => Math.min(s + 1, 5));
  };
  const back = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const inputClass = (field: keyof FormData) =>
    `w-full border ${errors[field] ? "border-red-300 bg-red-50" : "border-gray-200"} px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-gray-400`;

  const selectClass = (field: keyof FormData) =>
    `w-full border ${errors[field] ? "border-red-300 bg-red-50" : "border-gray-200"} px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors text-gray-700`;

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white flex items-center justify-center px-4 py-24">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="max-w-lg w-full text-center"
        >
          <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-emerald-600" />
          </div>
          <h1 className="text-3xl font-bold text-navy mb-3" style={{ fontFamily: "Sora, sans-serif" }}>
            Application Submitted! 🎉
          </h1>
          <p className="text-gray-600 mb-2">
            Thanks, <strong>{form.firstName}</strong>! We've received your application for{" "}
            <strong>{form.role}</strong> at INNOVYASA.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            Our team will review your profile and reach out within 3–5 business days at{" "}
            <strong>{form.email}</strong>.
          </p>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-8 text-left">
            <h3 className="font-bold text-navy mb-4 text-sm">What happens next?</h3>
            {[
              { step: "1", text: "Profile review by our team (1-2 days)" },
              { step: "2", text: "Online assessment or assignment" },
              { step: "3", text: "Video interview with mentor" },
              { step: "4", text: "Offer letter & onboarding" },
            ].map(s => (
              <div key={s.step} className="flex items-center gap-3 mb-3 last:mb-0">
                <div className="w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {s.step}
                </div>
                <span className="text-gray-600 text-sm">{s.text}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/internships" className="btn-primary">
              Browse More Internships
            </Link>
            <Link href="/courses" className="btn-outline">
              Explore Courses
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ─── HEADER ─────────────────────────────────────────────────────── */}
      <div className="bg-gradient-to-br from-navy to-[#1A2E5A] py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 section-grid opacity-10" />
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full" />
        <div className="max-w-4xl mx-auto relative">
          <Link href="/internships" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Internships
          </Link>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <span className="hero-tag inline-flex mb-4">Apply Now</span>
              <h1 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "Sora, sans-serif" }}>
                {form.role || "Internship Application"}
              </h1>
              <p className="text-gray-300 mt-2">INNOVYASA • Remote • 3–6 Months</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="bg-white/10 border border-white/10 rounded-xl px-4 py-2.5 text-center">
                <div className="text-white font-bold text-sm">Remote</div>
                <div className="text-gray-400 text-xs flex items-center gap-1 mt-0.5"><MapPin className="w-3 h-3" /> Work Mode</div>
              </div>
              <div className="bg-white/10 border border-white/10 rounded-xl px-4 py-2.5 text-center">
                <div className="text-white font-bold text-sm">3–6 Months</div>
                <div className="text-gray-400 text-xs flex items-center gap-1 mt-0.5"><Clock className="w-3 h-3" /> Duration</div>
              </div>
              <div className="bg-white/10 border border-white/10 rounded-xl px-4 py-2.5 text-center">
                <div className="text-primary font-bold text-sm">₹5K–15K/mo</div>
                <div className="text-gray-400 text-xs flex items-center gap-1 mt-0.5"><Star className="w-3 h-3" /> Stipend</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── PROGRESS STEPS ────────────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-100 px-4 py-4 sticky top-16 z-30 shadow-sm">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between overflow-x-auto gap-1">
            {steps.map((s, i) => (
              <div key={s.id} className="flex items-center gap-1 flex-shrink-0">
                <div className="flex items-center gap-2">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${step > s.id ? "bg-emerald-500" : step === s.id ? "bg-primary" : "bg-gray-100"}`}>
                    {step > s.id ? (
                      <CheckCircle className="w-5 h-5 text-white" />
                    ) : (
                      <s.icon className={`w-4 h-4 ${step === s.id ? "text-white" : "text-gray-400"}`} />
                    )}
                  </div>
                  <div className="hidden sm:block">
                    <div className={`text-xs font-semibold ${step === s.id ? "text-navy" : step > s.id ? "text-emerald-600" : "text-gray-400"}`}>
                      {s.title}
                    </div>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className={`w-8 md:w-16 h-0.5 flex-shrink-0 mx-1 transition-colors duration-500 ${step > s.id ? "bg-emerald-400" : "bg-gray-200"}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── FORM ───────────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-[1fr_280px] gap-8">
          {/* Main form */}
          <div>
            <AnimatePresence mode="wait">
              {/* STEP 1 — Personal */}
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                  <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-7">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h2 className="font-bold text-navy text-xl" style={{ fontFamily: "Sora, sans-serif" }}>Personal Details</h2>
                        <p className="text-gray-400 text-sm">Tell us a bit about yourself</p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="text-xs font-semibold text-gray-600 mb-1.5 block">First Name *</label>
                        <input value={form.firstName} onChange={e => update("firstName", e.target.value)} placeholder="Rahul" className={inputClass("firstName")} />
                        {errors.firstName && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.firstName}</p>}
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Last Name *</label>
                        <input value={form.lastName} onChange={e => update("lastName", e.target.value)} placeholder="Sharma" className={inputClass("lastName")} />
                        {errors.lastName && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.lastName}</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Email Address *</label>
                        <input type="email" value={form.email} onChange={e => update("email", e.target.value)} placeholder="rahul@example.com" className={inputClass("email")} />
                        {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Phone Number *</label>
                        <input type="tel" value={form.phone} onChange={e => update("phone", e.target.value)} placeholder="+91 98765 43210" className={inputClass("phone")} />
                        {errors.phone && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="text-xs font-semibold text-gray-600 mb-1.5 block">City / Location</label>
                      <input value={form.city} onChange={e => update("city", e.target.value)} placeholder="Hyderabad, Telangana" className={inputClass("city")} />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Apply For Role *</label>
                      <select value={form.role} onChange={e => update("role", e.target.value)} className={selectClass("role")}>
                        <option value="">Select internship role</option>
                        {internshipRoles.map(r => <option key={r} value={r}>{r}</option>)}
                      </select>
                      {errors.role && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.role}</p>}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 2 — Education */}
              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                  <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-7">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="font-bold text-navy text-xl" style={{ fontFamily: "Sora, sans-serif" }}>Education Background</h2>
                        <p className="text-gray-400 text-sm">Your academic qualifications</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Degree / Qualification *</label>
                      <select value={form.degree} onChange={e => update("degree", e.target.value)} className={selectClass("degree")}>
                        <option value="">Select degree</option>
                        <option>B.Tech / B.E.</option>
                        <option>BCA / BSc CS</option>
                        <option>MCA / M.Tech</option>
                        <option>BBA / MBA (Tech)</option>
                        <option>Diploma (Engineering)</option>
                        <option>Other</option>
                      </select>
                      {errors.degree && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.degree}</p>}
                    </div>

                    <div className="mb-4">
                      <label className="text-xs font-semibold text-gray-600 mb-1.5 block">College / University *</label>
                      <input value={form.college} onChange={e => update("college", e.target.value)} placeholder="e.g. JNTU Hyderabad" className={inputClass("college")} />
                      {errors.college && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.college}</p>}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Current Year / Status *</label>
                        <select value={form.year} onChange={e => update("year", e.target.value)} className={selectClass("year")}>
                          <option value="">Select year</option>
                          <option>1st Year</option>
                          <option>2nd Year</option>
                          <option>3rd Year</option>
                          <option>Final Year</option>
                          <option>Recently Graduated</option>
                        </select>
                        {errors.year && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.year}</p>}
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-gray-600 mb-1.5 block">CGPA / Percentage</label>
                        <input value={form.cgpa} onChange={e => update("cgpa", e.target.value)} placeholder="e.g. 8.2 / 82%" className={inputClass("cgpa")} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 3 — Skills */}
              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                  <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-7">
                      <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
                        <Code className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h2 className="font-bold text-navy text-xl" style={{ fontFamily: "Sora, sans-serif" }}>Skills & Motivation</h2>
                        <p className="text-gray-400 text-sm">What you know and why you're applying</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="text-xs font-semibold text-gray-600 mb-3 block">
                        Technical Skills * (select up to 8)
                        {form.skills.length > 0 && <span className="ml-2 text-primary">{form.skills.length}/8 selected</span>}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {skillsList.map(skill => (
                          <button
                            key={skill}
                            type="button"
                            onClick={() => toggleSkill(skill)}
                            className={`text-sm px-4 py-2 rounded-full border transition-all duration-200 ${form.skills.includes(skill) ? "bg-primary text-white border-primary shadow-md" : "border-gray-200 text-gray-600 hover:border-primary hover:text-primary"}`}
                          >
                            {skill}
                          </button>
                        ))}
                      </div>
                      {errors.skills && <p className="text-red-500 text-xs mt-2 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.skills}</p>}
                    </div>

                    <div className="mb-5">
                      <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Prior Experience (optional)</label>
                      <select value={form.experience} onChange={e => update("experience", e.target.value)} className={selectClass("experience")}>
                        <option value="">Select experience level</option>
                        <option>No experience (fresher)</option>
                        <option>Less than 6 months</option>
                        <option>6 months – 1 year</option>
                        <option>1–2 years</option>
                        <option>2+ years</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Why do you want this internship? *</label>
                      <textarea
                        value={form.motivation}
                        onChange={e => update("motivation", e.target.value)}
                        rows={5}
                        placeholder="Tell us what excites you about this role and what you hope to learn..."
                        className={`${inputClass("motivation")} resize-none`}
                      />
                      {errors.motivation && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.motivation}</p>}
                      <p className="text-gray-400 text-xs mt-1">{form.motivation.length}/500 characters</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 4 — Documents */}
              {step === 4 && (
                <motion.div key="step4" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                  <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-7">
                      <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
                        <Upload className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <h2 className="font-bold text-navy text-xl" style={{ fontFamily: "Sora, sans-serif" }}>Documents & Links</h2>
                        <p className="text-gray-400 text-sm">Share your portfolio and resume</p>
                      </div>
                    </div>

                    {/* Resume upload */}
                    <div className="mb-6">
                      <label className="text-xs font-semibold text-gray-600 mb-2 block">Resume / CV</label>
                      <div
                        className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${form.resumeName ? "border-primary bg-primary/5" : "border-gray-200 hover:border-primary/50 hover:bg-gray-50"}`}
                        onClick={() => {
                          // Simulate file pick
                          update("resumeName", "Resume_Rahul_Sharma.pdf");
                        }}
                      >
                        {form.resumeName ? (
                          <div className="flex items-center justify-center gap-3 text-primary">
                            <FileText className="w-6 h-6" />
                            <div>
                              <div className="font-semibold text-sm">{form.resumeName}</div>
                              <div className="text-xs text-gray-400 mt-0.5">Click to change</div>
                            </div>
                            <CheckCircle className="w-5 h-5 text-emerald-500 ml-2" />
                          </div>
                        ) : (
                          <>
                            <Upload className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                            <p className="text-gray-500 text-sm mb-1">Click to upload your resume</p>
                            <p className="text-gray-400 text-xs">PDF or DOCX, max 5MB</p>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="space-y-4">
                      {[
                        { field: "linkedin" as const, label: "LinkedIn Profile", placeholder: "https://linkedin.com/in/yourname" },
                        { field: "github" as const, label: "GitHub Profile", placeholder: "https://github.com/yourname" },
                        { field: "portfolio" as const, label: "Portfolio / Website", placeholder: "https://yourportfolio.com" },
                      ].map(({ field, label, placeholder }) => (
                        <div key={field}>
                          <label className="text-xs font-semibold text-gray-600 mb-1.5 block">{label}</label>
                          <input value={form[field]} onChange={e => update(field, e.target.value)} placeholder={placeholder} className={inputClass(field)} />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 5 — Review */}
              {step === 5 && (
                <motion.div key="step5" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                  <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-7">
                      <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
                        <Eye className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <h2 className="font-bold text-navy text-xl" style={{ fontFamily: "Sora, sans-serif" }}>Review Application</h2>
                        <p className="text-gray-400 text-sm">Confirm everything before submitting</p>
                      </div>
                    </div>

                    {[
                      {
                        title: "Personal Details",
                        icon: "👤",
                        fields: [
                          { label: "Name", value: `${form.firstName} ${form.lastName}` },
                          { label: "Email", value: form.email },
                          { label: "Phone", value: form.phone },
                          { label: "Role", value: form.role },
                          { label: "City", value: form.city || "Not specified" },
                        ]
                      },
                      {
                        title: "Education",
                        icon: "🎓",
                        fields: [
                          { label: "Degree", value: form.degree },
                          { label: "College", value: form.college },
                          { label: "Year", value: form.year },
                          { label: "CGPA/Marks", value: form.cgpa || "Not specified" },
                        ]
                      },
                      {
                        title: "Skills & Experience",
                        icon: "💻",
                        fields: [
                          { label: "Skills", value: form.skills.join(", ") || "None" },
                          { label: "Experience", value: form.experience || "Not specified" },
                        ]
                      },
                    ].map(section => (
                      <div key={section.title} className="mb-6 border border-gray-100 rounded-2xl p-5">
                        <h3 className="font-semibold text-navy mb-4 flex items-center gap-2">
                          <span>{section.icon}</span> {section.title}
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {section.fields.map(f => (
                            <div key={f.label}>
                              <div className="text-xs text-gray-400 mb-0.5">{f.label}</div>
                              <div className="text-sm font-medium text-gray-800 truncate">{f.value || "—"}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}

                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">
                        By submitting, you confirm that all information is accurate. Our team will reach out within <strong>3–5 business days</strong>.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex justify-between mt-6">
              <button
                onClick={back}
                disabled={step === 1}
                className="btn-outline disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              {step < 5 ? (
                <button onClick={next} className="btn-primary">
                  Next Step <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleSubmit}
                  className="btn-primary shadow-lg shadow-primary/30"
                >
                  <Send className="w-4 h-4" /> Submit Application
                </motion.button>
              )}
            </div>
          </div>

          {/* Sidebar info */}
          <div className="hidden lg:block">
            <div className="sticky top-36 space-y-4">
              {/* Progress card */}
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-navy text-sm mb-4">Your Progress</h3>
                <div className="space-y-3">
                  {steps.map(s => (
                    <div key={s.id} className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${step > s.id ? "bg-emerald-500" : step === s.id ? "bg-primary" : "bg-gray-100"}`}>
                        {step > s.id ? (
                          <CheckCircle className="w-3.5 h-3.5 text-white" />
                        ) : (
                          <span className={`text-[10px] font-bold ${step === s.id ? "text-white" : "text-gray-400"}`}>{s.id}</span>
                        )}
                      </div>
                      <div>
                        <div className={`text-xs font-semibold ${step === s.id ? "text-navy" : step > s.id ? "text-emerald-600" : "text-gray-400"}`}>{s.title}</div>
                        <div className="text-[10px] text-gray-400">{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="mt-5">
                  <div className="flex justify-between text-xs text-gray-400 mb-1.5">
                    <span>Progress</span>
                    <span>{Math.round(((step - 1) / 4) * 100)}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-orange-400 rounded-full"
                      animate={{ width: `${((step - 1) / 4) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </div>

              {/* Tips */}
              <div className="bg-navy rounded-2xl p-5 relative overflow-hidden">
                <div className="absolute inset-0 section-grid opacity-10" />
                <div className="relative">
                  <div className="text-2xl mb-3">💡</div>
                  <h3 className="font-bold text-white text-sm mb-2">Pro Tips</h3>
                  <ul className="space-y-2 text-gray-300 text-xs">
                    <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />Keep motivation answer specific and personal</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />Upload an updated 1-page resume</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />Add GitHub if you have project code</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />Applications reviewed within 3–5 days</li>
                  </ul>
                </div>
              </div>

              {/* Support */}
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-center">
                <p className="text-gray-500 text-xs mb-2">Need help applying?</p>
                <Link href="/contact" className="text-primary text-sm font-semibold hover:underline">
                  Contact Support →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
