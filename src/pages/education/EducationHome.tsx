import { useState } from "react";
import { Link, useParams } from 'react-router-dom';
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
  Sparkles,
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
import { CURRICULUM_DATA } from "@/education/lib/curriculum-data";
import { InteractiveSpotlightTour } from "@/education/tour/InteractiveSpotlightTour";

export default function ProductLandingPage() {
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
          desc: "Optimized Next.js Turbopack engine loads in under a second.",
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

  const comparisonFeatures = [
    {
      feature: "Karnataka State Board (KSEEB) Aligned",
      brandex: true,
      generic: "Generic / Mixed State",
      description: "Mapped directly chapter-by-chapter to Karnataka textbooks",
    },
    {
      feature: "Distraction-Free Smartboard Theater",
      brandex: true,
      generic: "Ad-heavy with popups",
      description: "Custom player controls with zero YouTube watermarks or sidebars",
    },
    {
      feature: "Built-In Formative Quizzes & Feedback",
      brandex: true,
      generic: "Requires 3rd party tool",
      description: "Pre-built assessments for instant classroom comprehension check",
    },
    {
      feature: "Zero Student Login Friction",
      brandex: true,
      generic: "Complex account setup",
      description: "Teachers present directly without student credential headaches",
    },
    {
      feature: "Installable Offline-Ready PWA",
      brandex: true,
      generic: "Web browser only",
      description: "Caches app shell for reliable performance on school Wi-Fi",
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
    {
      quote:
        "The PWA app installed instantly on our classroom laptops. Even when school Wi-Fi fluctuates, teachers can navigate chapters effortlessly.",
      name: "Kiran Patil",
      role: "IT & Digital Learning Head",
      school: "Belgaum Central Academy",
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
    <div className="min-h-screen bg-[#FAFAFC] flex flex-col selection:bg-indigo-500 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-20 sm:pt-28 pb-20 border-b border-slate-200/90">
        <div className="w-full px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-7">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12]">
                  Digital learning <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600">
                    built for schools.
                  </span>
                </h1>
                
                <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
                  Karnataka State Syllabus video lessons and interactive chapter assessments for Classes 6 to 10. Present on smartboards, explore modules, and evaluate comprehension with zero setup friction.
                </p>
              </motion.div>

              {/* Call To Action Button with Spotlight Tour ID */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-center gap-4 pt-1"
              >
                <Link
                  id="tour-explore-cta"
                  href="/explore"
                  className="px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm sm:text-base transition-all shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Explore Curriculum</span>
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="pt-2 flex flex-wrap items-center gap-6 text-xs font-semibold text-slate-500"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Classes 6 to 10 (KSEEB)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>All Core Subjects</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Predefined Quizzes</span>
                </div>
              </motion.div>
            </div>

            {/* Right Hero Teacher Teaching Illustration (Blends 100% naturally with pure white background) */}
            <motion.div
              id="tour-hero-stage"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-6 relative flex items-center justify-center select-none"
            >
              <div className="relative w-full max-w-xl">
                <img
                  src="/hero-teacher.webp"
                  alt="Teacher presenting interactive lesson with Brandex Digital Curriculum"
                  className="w-full h-auto object-contain select-none"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE TABBED FEATURE DISCOVERY SECTION with Spotlight Tour ID */}
      <section id="tour-feature-tabs" className="py-20 bg-white border-b border-slate-200/90">
        <div className="w-full px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold font-mono uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Transformative Upgrades
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Discover the latest upgrades for schools & teachers
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Built from the ground up to solve real classroom teaching challenges.
            </p>
          </div>

          {/* Feature Tabs Selector */}
          <div className="flex items-center justify-center border-b border-slate-200/90 overflow-x-auto gap-2 sm:gap-6 pb-2">
            {featureTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer relative ${
                  activeTab === tab.id
                    ? "text-indigo-600 bg-indigo-50/80 border border-indigo-200"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {tab.title}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute -bottom-2.5 left-0 right-0 h-0.5 bg-indigo-600"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Active Tab Content Card */}
          <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200/90 p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    {featureTabs[activeTab].tagline}
                  </h3>
                  <p className="text-sm text-slate-600 font-normal mt-2 leading-relaxed">
                    {featureTabs[activeTab].desc}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {featureTabs[activeTab].points.map((pt, i) => (
                    <div key={i} className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-2xs space-y-1">
                      <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                        <span>{pt.title}</span>
                      </h4>
                      <p className="text-xs text-slate-500 font-normal leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Visual Frame */}
              <div className="lg:col-span-5">
                <div className="bg-white rounded-xl border border-slate-200 shadow-md p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-[11px] font-mono font-bold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded border border-indigo-100">
                      {featureTabs[activeTab].previewBadge}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>

                  <div className="aspect-video rounded-lg bg-slate-950 flex flex-col justify-between p-4 relative overflow-hidden shadow-inner">
                    <div className="flex items-center justify-between text-white/70 text-[10px] font-mono">
                      <span>BRANDEX HD ENGINE</span>
                      <span className="bg-white/10 px-2 py-0.5 rounded">1080p 60fps</span>
                    </div>

                    <div className="flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shadow-lg">
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      </div>
                    </div>

                    <div className="text-white">
                      <span className="text-[10px] font-mono text-indigo-300 block uppercase">
                        Active Presentation
                      </span>
                      <p className="text-xs font-bold truncate">
                        {featureTabs[activeTab].previewTitle}
                      </p>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-lg text-xs font-semibold text-slate-600 flex items-center justify-between border border-slate-200/70">
                    <span>Syllabus Verified</span>
                    <span className="text-indigo-600 font-bold">100% KSEEB Standard</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. HOW WE STAND APART (Comparison Matrix) */}
      <section className="py-20 bg-[#FAFAFC] border-b border-slate-200/90">
        <div className="w-full px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold font-mono uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Why Schools Choose Brandex
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              How Brandex stands apart from generic platforms
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Engineered specifically for classroom teachers rather than passive consumer viewing.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden divide-y divide-slate-100">
            {/* Header row */}
            <div className="grid grid-cols-12 p-5 bg-slate-50/80 text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
              <div className="col-span-6 sm:col-span-7">Feature & Classroom Benefit</div>
              <div className="col-span-3 sm:col-span-3 text-center text-indigo-700 font-bold">Brandex EDU</div>
              <div className="col-span-3 sm:col-span-2 text-center text-slate-400">Generic Tools</div>
            </div>

            {comparisonFeatures.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-5 sm:p-6 items-center hover:bg-slate-50/50 transition-colors"
              >
                <div className="col-span-6 sm:col-span-7 pr-4">
                  <h4 className="text-sm font-bold text-slate-900">{item.feature}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{item.description}</p>
                </div>

                <div className="col-span-3 sm:col-span-3 flex justify-center">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                    <span>Included</span>
                  </div>
                </div>

                <div className="col-span-3 sm:col-span-2 flex justify-center text-center">
                  <span className="text-xs text-slate-400 font-medium">{item.generic}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. CLASSES LIST VIEW SECTION with Spotlight Tour ID */}
      <section id="tour-classes-list" className="py-20 bg-white border-b border-slate-200/90">
        <div className="w-full px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold font-mono uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                Full Curriculum Library
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-2">
                Explore by Class
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 font-normal">
                Select your class to enter the step-by-step curriculum browser.
              </p>
            </div>

            <Link to="/explore"
              className="px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-indigo-600 font-bold text-xs border border-slate-200 shadow-2xs hover:border-indigo-300 flex items-center gap-1.5 transition-all self-start md:self-auto"
            >
              <span>View full curriculum</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Classes List View */}
          <div className="space-y-3.5 max-w-5xl mx-auto">
            {CURRICULUM_DATA.map((cls) => {
              const totalLessons = cls.subjects.reduce(
                (sum, s) =>
                  sum +
                  s.chapters.reduce(
                    (cSum, ch) =>
                      cSum + ch.topics.reduce((tSum, t) => tSum + t.lessons.length, 0),
                    0
                  ),
                0
              );

              return (
                <Link
                  key={cls.id}
                  href={`/explore/${cls.slug}`}
                  className="group bg-[#FAFAFC] hover:bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-13 h-13 rounded-xl bg-indigo-50 group-hover:bg-indigo-600 text-indigo-600 group-hover:text-white border border-indigo-100 flex items-center justify-center font-bold text-2xl transition-colors shrink-0 shadow-2xs">
                      {cls.grade}
                    </div>

                    <div>
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors tracking-tight">
                          {cls.name}
                        </h3>
                        <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-100">
                          {cls.subjects.length} Core Subjects
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-500 font-normal mt-0.5">
                        {cls.description} • Karnataka State Board Syllabus
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3.5 shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                    <div className="text-xs font-mono font-semibold text-slate-600 whitespace-nowrap bg-white px-3 py-1.5 rounded-lg border border-slate-200/70">
                      {totalLessons} Video Lessons
                    </div>
                    
                    <div className="px-5 py-2.5 rounded-xl bg-indigo-50 group-hover:bg-indigo-600 text-indigo-600 group-hover:text-white font-bold text-xs flex items-center gap-2 transition-all shadow-2xs whitespace-nowrap">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. INFINITE MARQUEE TESTIMONIALS SECTION */}
      <section className="py-20 bg-[#F8FAFC] border-b border-slate-200/90 overflow-hidden">
        <div className="w-full space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 px-6">
            <span className="text-xs font-bold font-mono uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Trusted by Educators
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              What Karnataka school teachers say
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Empowering classrooms across Karnataka with reliable, structured digital curriculum.
            </p>
          </div>

          {/* Continuous Marquee Container with fade edge masks */}
          <div className="relative w-full overflow-hidden group">
            {/* Left & Right Gradient Shadows */}
            <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

            {/* Scrolling Track with Framer Motion infinite loop */}
            <motion.div
              className="flex gap-6 w-max py-2 select-none"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 45,
                  ease: "linear",
                },
              }}
            >
              {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, idx) => (
                <div
                  key={idx}
                  className="w-[380px] sm:w-[420px] p-7 bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-indigo-200 transition-all flex flex-col justify-between space-y-5 shrink-0"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal italic">
                      "{t.quote}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-600 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{t.name}</h4>
                      <p className="text-[11px] text-slate-500 font-medium">
                        {t.role} • {t.school}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>

      {/* 6. FREQUENTLY ASKED QUESTIONS (FAQS) */}
      <section className="py-20 bg-white border-b border-slate-200/90">
        <div className="w-full px-6 sm:px-10 lg:px-16 max-w-4xl mx-auto space-y-10">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold font-mono uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600 font-normal">
              Everything you need to know about Brandex Digital Learning for your school.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200/90 bg-[#FAFAFC] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-indigo-600 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-indigo-600" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed border-t border-slate-200/60 pt-3"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. BOTTOM CTA BANNER */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F8FAFC]">
        <div className="w-full px-6 sm:px-10 lg:px-16 max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Ready to modernize your classroom learning?
          </h2>
          <p className="text-base text-slate-600 max-w-xl mx-auto font-normal">
            Choose your class and start teaching with curated video modules and assessments today.
          </p>
          <div className="pt-2 flex justify-center items-center">
            <Link to="/explore"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base transition-all shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 hover:-translate-y-0.5"
            >
              <BookOpen className="w-5 h-5" />
              <span>Explore Curriculum Library</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* First-time Visitor Spotlight Onboarding Tour */}
      <InteractiveSpotlightTour />

    </div>
  );
}
