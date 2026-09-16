import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Play,
  Tv,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  HelpCircle,
  Clock,
  ChevronDown,
  Layers,
  Star,
  Zap,
  Target,
  BarChart3,
  MonitorPlay,
  Lightbulb,
  Check,
} from "lucide-react";
import { CURRICULUM_DATA } from "@/lib/curriculum-data";
import { InteractiveSpotlightTour } from "@/components/education/InteractiveSpotlightTour";

export default function EducationHome() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const featureTabs = [
    {
      id: 0,
      title: "Teacher Assistant",
      tagline: "Personalized Content for Frictionless Teaching",
      desc: "Tailored educational modules with zero prep time. High-impact Karnataka State Syllabus video lectures created for different classroom needs.",
      points: [
        {
          title: "One-Click Classroom Launch",
          desc: "Start HD curriculum video lessons in seconds on any smartboard without loading delays.",
        },
        {
          title: "Subject-Wise Topic Breakdowns",
          desc: "Structured chapters with comprehensive concepts, definitions, and textbook exercise solutions.",
        },
        {
          title: "Visual & Interactive Media",
          desc: "Clean diagram animations, formula derivations, and real-world examples that hold student attention.",
        },
        {
          title: "Aligned to KSEEB Standards",
          desc: "Content precisely mapped to Karnataka State Board textbooks for Classes 6 through 10.",
        },
      ],
      previewBadge: "Live Classroom Stream",
      previewTitle: "Class 8 • Science: Cell Structure & Functions",
    },
    {
      id: 1,
      title: "Smarter Assessments",
      tagline: "Immediate Formative Feedback in Class",
      desc: "Assess student comprehension immediately after every lecture with predefined interactive quiz modules.",
      points: [
        {
          title: "Predefined Formative Quizzes",
          desc: "Carefully curated multiple-choice questions mapped to textbook learning goals.",
        },
        {
          title: "Instant Scoring & Feedback",
          desc: "Display detailed explanations on screen to clarify misconceptions on the spot.",
        },
        {
          title: "Confidence Rating Check",
          desc: "Empower students to evaluate their own understanding before moving to the next chapter.",
        },
        {
          title: "Zero Student Login Friction",
          desc: "Conducted directly through the teacher's screen without student device setup.",
        },
      ],
      previewBadge: "Formative Assessment",
      previewTitle: "Class 10 • Mathematics: Quadratic Equations Quiz",
    },
    {
      id: 2,
      title: "Classroom Smartboard",
      tagline: "Distraction-Free Theater Display Mode",
      desc: "Engineered specifically for classroom smartboards, interactive flat panels, and projectors.",
      points: [
        {
          title: "Zero Watermarks & Distractions",
          desc: "Custom player controls with no external branding, sidebars, or unrelated recommendations.",
        },
        {
          title: "Seamless Lesson Navigation",
          desc: "Switch chapters, replay key clips, or skip forward with quick 10-second skip buttons.",
        },
        {
          title: "Full-Monitor Projection",
          desc: "One-click fullscreen expansion optimized for large classroom display screens.",
        },
        {
          title: "Keyboard Shortcuts",
          desc: "Control playback smoothly with standard teacher-friendly presentation keys.",
        },
      ],
      previewBadge: "Smartboard Projector Mode",
      previewTitle: "Class 9 • Social Science: Natural Vegetation of India",
    },
    {
      id: 3,
      title: "PWA Offline Readiness",
      tagline: "Reliable Performance in Every School",
      desc: "Fast app shell caching ensures the platform runs smoothly even with intermittent school Wi-Fi.",
      points: [
        {
          title: "Installable Desktop & Tablet App",
          desc: "Install directly onto classroom laptops or teacher tablets with a single click.",
        },
        {
          title: "Cached Curriculum Directory",
          desc: "Browse subjects, chapters, and assessment metadata with zero network delay.",
        },
        {
          title: "Lightweight & Blazing Fast",
          desc: "Optimized React engine loads in under a second.",
        },
        {
          title: "Enterprise Grade Security",
          desc: "Protected by unique Educator authentication to prevent unauthorized classroom access.",
        },
      ],
      previewBadge: "Offline PWA Shell",
      previewTitle: "Class 7 • English: Grammar & Sentence Structure",
    },
  ];

  const testimonials = [
    {
      quote:
        "Brandex has completely transformed our smartboard lectures. Having curriculum-mapped lessons organized by chapter with zero distractions allows our teachers to focus 100% on teaching.",
      name: "Dr. Ramesh H. S.",
      role: "Principal",
      school: "Bangalore North High School",
      rating: 5,
    },
    {
      quote:
        "The built-in formative quizzes right after the video lessons are a game changer. Students stay engaged and we can immediately address topics they find difficult.",
      name: "Suma Venkatesh",
      role: "Senior Science Teacher",
      school: "Mysore Public Vidyalaya",
      rating: 5,
    },
    {
      quote:
        "The list view and step-by-step curriculum navigation make finding any chapter seamless during live lectures. It is fast, clean, and built exactly for schools.",
      name: "Praveen Kumar",
      role: "Mathematics Faculty",
      school: "Mangalore Composite PU & High School",
      rating: 5,
    },
    {
      quote:
        "No YouTube ads, no distractions, and beautifully structured Karnataka syllabus. Our smartboards feel like dedicated digital learning devices.",
      name: "Ananya Rao",
      role: "Academic Coordinator",
      school: "Hubli Modern English School",
      rating: 5,
    },
  ];

  const faqs = [
    {
      q: "Is the curriculum aligned with Karnataka State Board (KSEEB)?",
      a: "Yes. All subjects (Science, Mathematics, Social Science, and English) across Classes 6 through 10 are strictly mapped to Karnataka State Board textbooks and syllabus standards.",
    },
    {
      q: "How does Classroom Mode work on smartboards and projectors?",
      a: "Classroom Mode provides a full-monitor theater view that strips away all external web chrome, watermarks, and recommendations, leaving a clean presentation stage with dedicated teacher controls.",
    },
    {
      q: "Can the platform be installed as an offline-ready PWA?",
      a: "Yes! Brandex Digital Learning is a Progressive Web App (PWA). You can install it on teacher laptops, desktop smartboards, or tablets for instant access with cached curriculum navigation.",
    },
    {
      q: "Do students need individual accounts or logins?",
      a: "No. The platform is designed for teachers to present and evaluate directly in the classroom. Only educators need an account to unlock the curriculum, saving precious lecture time.",
    },
    {
      q: "Are formative assessments and quizzes included?",
      a: "Yes. Every lesson module includes pre-built multiple-choice questions with instant scoring and detailed answer explanations for live classroom evaluation.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafd] flex flex-col selection:bg-[#4f47e6] selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-24 sm:pt-28 pb-16 lg:pb-20 border-b border-slate-200/90 w-full">
        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          {/* Back Button */}
          <div className="mb-6">
            <Link
              to="/"
              className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-[#4f47e6] transition-colors"
            >
              &larr; Back to Main Website
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-7">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <div className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-[#4f47e6] uppercase shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
                  Karnataka State Board (KSEEB) Aligned
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                  Digital learning <br />
                  <span className="text-[#4f47e6]">built for smart schools.</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
                  Streamline classroom teaching with distraction-free smartboard video lessons, structured chapter modules, and built-in formative assessment quizzes for Classes 6 to 10.
                </p>
              </motion.div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  id="tour-explore-cta"
                  to="/education/explore"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#4f47e6] hover:bg-[#4338ca] text-white font-bold text-sm shadow-[0_4px_16px_rgba(79,71,230,0.3)] hover:shadow-[0_6px_22px_rgba(79,71,230,0.4)] transition-all hover:-translate-y-0.5"
                >
                  <BookOpen size={16} />
                  <span>Explore Class 6–10 Syllabus</span>
                  <ArrowRight size={15} />
                </Link>

                <Link
                  to="/education/classroom"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-800 font-bold text-sm border border-slate-200 transition-all hover:-translate-y-0.5 shadow-2xs"
                >
                  <Tv size={16} className="text-[#4f47e6]" />
                  <span>Launch Live Classroom Mode</span>
                </Link>
              </div>

              {/* Key Trust Highlights */}
              <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#4f47e6] shrink-0" />
                  <span>Classes 6 to 10</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#4f47e6] shrink-0" />
                  <span>Maths & Science</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#4f47e6] shrink-0" />
                  <span>Instant Quizzes</span>
                </div>
              </div>
            </div>

            {/* Right Visual Column: Interactive Smartboard Simulation */}
            <div className="lg:col-span-6" id="tour-hero-stage">
              <div className="relative rounded-3xl p-4 sm:p-6 liquid-glass border border-slate-200 shadow-xl overflow-hidden">
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-inner flex flex-col justify-between p-5 text-white">
                  {/* Top Status Bar */}
                  <div className="flex items-center justify-between z-10">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] font-mono tracking-wider uppercase font-bold text-emerald-300">
                        Live Smartboard Stage
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-[10px] font-mono font-bold backdrop-blur-md border border-white/10">
                      Class 10 • Mathematics
                    </span>
                  </div>

                  {/* Center Play Graphic */}
                  <div className="flex flex-col items-center justify-center my-auto text-center space-y-3 z-10">
                    <div className="w-16 h-16 rounded-2xl bg-[#4f47e6] flex items-center justify-center text-white shadow-[0_0_30px_rgba(79,71,230,0.6)] cursor-pointer hover:scale-110 transition-transform">
                      <Play size={24} className="ml-1 fill-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-lg text-white">
                        Quadratic Equations & Roots
                      </h3>
                      <p className="text-xs text-slate-300 font-mono">
                        Chapter 10 • Video Lecture (18:45)
                      </p>
                    </div>
                  </div>

                  {/* Bottom Controls Bar */}
                  <div className="flex items-center justify-between text-xs font-mono text-slate-300 pt-3 border-t border-white/10 z-10">
                    <div className="flex items-center gap-3">
                      <span>04:12 / 18:45</span>
                      <span className="text-slate-500">|</span>
                      <span>1080p HD</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-white/10 text-[10px]">Quiz Ready</span>
                      <span className="px-2 py-0.5 rounded bg-[#4f47e6] text-white text-[10px] font-bold">Classroom Mode</span>
                    </div>
                  </div>

                  {/* Ambient Glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#4f47e6]/30 via-transparent to-cyan-500/20 pointer-events-none" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. GRADE-WISE QUICK EXPLORER */}
      <section className="py-16 sm:py-20 bg-[#f8fafd] border-b border-slate-200/90 w-full" id="tour-classes-list">
        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-[#4f47e6] uppercase mb-3 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
              Direct Grade Selection
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Select Your Classroom Grade
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-normal">
              Structured chapters, topic breakdowns, and assessments for Karnataka State Board.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {CURRICULUM_DATA.map((cls) => {
              const totalLessons = cls.subjects.reduce(
                (sum, s) => sum + s.chapters.reduce((cSum, ch) => cSum + ch.topics.reduce((tSum, t) => tSum + t.lessons.length, 0), 0),
                0
              );

              return (
                <Link
                  key={cls.id}
                  to={`/education/explore`}
                  className="group liquid-glass-card hover:bg-white p-6 rounded-3xl border border-slate-200/90 hover:border-[#4f47e6] shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1.5 flex flex-col justify-between h-[240px]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-50 group-hover:bg-[#4f47e6] text-[#4f47e6] group-hover:text-white border border-indigo-100 flex items-center justify-center font-display font-extrabold text-xl transition-colors shadow-2xs">
                        {cls.grade}
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#4f47e6] liquid-glass-pill px-2.5 py-0.5 rounded-full">
                        {cls.subjects.length} Subjects
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-[#4f47e6] transition-colors leading-snug">
                      {cls.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 font-normal line-clamp-2">
                      {cls.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-500 font-semibold">{totalLessons} Lessons</span>
                    <span className="font-bold text-[#4f47e6] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <span>Explore</span>
                      <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. FEATURE TABS & CLASSROOM TOOLS */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/90 w-full" id="tour-feature-tabs">
        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-[#4f47e6] uppercase mb-3 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
              Classroom Superpowers
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Engineered specifically for the <span className="text-[#4f47e6]">live classroom</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 font-normal">
              Eliminate distractions and empower educators with purpose-built presentation and evaluation tools.
            </p>
          </div>

          {/* Feature Tab Selector Strip */}
          <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
            {featureTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#4f47e6] text-white shadow-[0_4px_14px_rgba(79,71,230,0.3)] scale-102"
                    : "liquid-glass text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Active Feature Detail Card */}
          <div className="liquid-glass rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#4f47e6]">
                    {featureTabs[activeTab].tagline}
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 mt-1 mb-3">
                    {featureTabs[activeTab].title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {featureTabs[activeTab].desc}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  {featureTabs[activeTab].points.map((pt) => (
                    <div key={pt.title} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <div className="flex items-center gap-2 font-bold text-sm text-slate-900 mb-1">
                        <CheckCircle2 size={15} className="text-[#4f47e6] shrink-0" />
                        <span>{pt.title}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed pl-5 font-normal">
                        {pt.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="p-6 rounded-2xl bg-slate-900 text-white shadow-xl space-y-4 border border-slate-800">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-emerald-400">
                      {featureTabs[activeTab].previewBadge}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                  <h4 className="font-display font-bold text-base text-white">
                    {featureTabs[activeTab].previewTitle}
                  </h4>
                  <div className="aspect-[16/9] w-full rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center p-4 text-center">
                    <div className="space-y-2">
                      <Tv size={28} className="text-[#4f47e6] mx-auto animate-pulse" />
                      <p className="text-xs text-slate-300 font-mono">Dedicated Smartboard Stage</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 4. VERIFIED EDUCATOR REVIEWS */}
      <section className="py-20 lg:py-24 bg-[#f8fafd] border-b border-slate-200/90 w-full">
        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-[#4f47e6] uppercase mb-3 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
              School Endorsements
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Trusted by Karnataka Educators
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-normal">
              Principals and subject faculties sharing their classroom outcomes with Brandex.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="liquid-glass-card hover:bg-white rounded-3xl p-6 flex flex-col justify-between border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div>
                  <div className="flex gap-0.5 text-amber-400 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal mb-5">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="font-display font-bold text-sm text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500 font-medium">{t.role} &bull; {t.school}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. FAQ */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/90 w-full">
        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="text-center mb-10">
              <div className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-[#4f47e6] uppercase mb-3 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
                Frequently Asked Questions
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`liquid-glass-card rounded-2xl p-5 sm:p-6 transition-all border ${
                    isOpen ? "border-[#4f47e6] bg-white shadow-md ring-1 ring-[#4f47e6]/15" : "border-slate-200"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between text-left group focus:outline-none cursor-pointer gap-4"
                  >
                    <span className={`font-display font-bold text-base sm:text-lg transition-colors ${
                      isOpen ? "text-[#4f47e6]" : "text-slate-900"
                    }`}>
                      {faq.q}
                    </span>
                    <ChevronDown size={16} className={`text-slate-500 transition-transform ${isOpen ? "rotate-180 text-[#4f47e6]" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-slate-600 text-sm sm:text-base pt-3 border-t border-slate-100 mt-3 font-normal leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Floating Spotlight Tour Trigger */}
      <InteractiveSpotlightTour />

    </div>
  );
}
