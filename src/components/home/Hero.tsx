import { useState, useEffect, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";

const EarthGlobe = lazy(() => import("@/components/home/EarthGlobe"));

const TYPED_PHRASES = [
  "Engineering Digital Systems",
  "Building Scalable Cloud Apps",
  "Automating Business Workflows",
  "Crafting Bespoke Web Platforms",
  "Deploying Enterprise AI Engines",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    const currentPhrase = TYPED_PHRASES[phraseIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (text.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setText(currentPhrase.slice(0, text.length + 1));
        }, 65);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(currentPhrase.slice(0, text.length - 1));
        }, 30);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % TYPED_PHRASES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-24 pb-12 lg:pt-28 lg:pb-16 bg-[#f8fafd] border-b border-slate-200/60 w-full">
      {/* Background Grid across entire width */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline with Rock-Solid Continuous Typewriter & Action Buttons */}
          <motion.div
            className="lg:col-span-6 text-left"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Liquid Glass Pill Badge */}
            <motion.div variants={item} className="inline-block mb-5">
              <div className="liquid-glass-pill inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-slate-800 text-xs font-mono font-semibold tracking-wider uppercase shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#4f47e6] animate-pulse" />
                <span className="text-[#4f47e6] font-bold">Brandex</span>
                <span className="text-slate-300">/</span>
                <span className="text-slate-600">Digital Solutions & Systems</span>
              </div>
            </motion.div>

            {/* Zero-Layout-Shift Headline with Original Font Size */}
            <motion.h1
              variants={item}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.15rem] font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-6"
            >
              <div className="grid mb-1">
                <span className="invisible select-none pointer-events-none opacity-0 col-start-1 row-start-1 block" aria-hidden="true">
                  Crafting Bespoke Web Platforms
                </span>
                <span className="col-start-1 row-start-1 block text-slate-900">
                  {text}
                  <span className="inline-block w-[3.5px] sm:w-[4.5px] h-[0.88em] bg-[#4f47e6] ml-1.5 animate-pulse align-middle" />
                </span>
              </div>
              <span className="block text-[#4f47e6]">Built For Real Scale.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={item}
              className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-9 max-w-2xl font-normal"
            >
              We design and engineer bespoke web applications, high-throughput cloud software, and automated workflows tailored to how your business actually works.
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={item} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <MagneticWrapper>
                <Button
                  asChild
                  variant="brand"
                  size="lg"
                  className="w-full sm:w-auto h-12 px-7 text-sm rounded-xl font-bold shadow-[0_4px_16px_rgba(79,71,230,0.3)] hover:shadow-[0_6px_22px_rgba(79,71,230,0.4)]"
                >
                  <Link to="/contact" className="flex items-center justify-center gap-2">
                    <span>Start Your Project</span>
                    <ArrowRight size={15} />
                  </Link>
                </Button>
              </MagneticWrapper>
              
              <MagneticWrapper strength={0.1}>
                <Button
                  asChild
                  variant="liquidGlass"
                  size="lg"
                  className="w-full sm:w-auto h-12 px-6 text-sm rounded-xl font-bold border border-slate-300 flex items-center justify-center"
                >
                  <Link to="/case-studies">View Our Work</Link>
                </Button>
              </MagneticWrapper>
            </motion.div>

            {/* Micro-guarantees */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200/80 text-xs font-semibold text-slate-700"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#4f47e6]" />
                <span>100% Client Code Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#4f47e6]" />
                <span>Zero Recurring Platform Tax</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#4f47e6]" />
                <span>2–4 Week Turnaround</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Embedded Interactive 3D Earth on Desktop / High-Performance Telemetry Card on Mobile */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {isDesktop ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full relative flex items-center justify-center"
              >
                <Suspense fallback={
                  <div className="w-full h-[380px] sm:h-[460px] rounded-3xl bg-slate-900/40 border border-slate-800/80 flex flex-col items-center justify-center gap-3">
                    <div className="w-8 h-8 rounded-full border-2 border-indigo-500/30 border-t-indigo-500 animate-spin" />
                    <span className="text-xs font-mono text-slate-400">Loading Global Infrastructure...</span>
                  </div>
                }>
                  <EarthGlobe />
                </Suspense>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md mx-auto p-5 sm:p-6 rounded-3xl bg-[#080d1a] border border-indigo-500/30 shadow-[0_8px_32px_rgba(0,0,0,0.4)] text-left relative overflow-hidden my-4"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center justify-between gap-3 mb-4 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider">Edge Online</span>
                  </div>
                  <span className="text-[11px] font-mono text-indigo-300 bg-indigo-950/70 px-2.5 py-0.5 rounded-full border border-indigo-700/50">&lt; 18ms TTFB</span>
                </div>
                <div className="space-y-2.5 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/90 flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold text-xs">Bangalore Primary HQ</div>
                      <div className="text-slate-400 text-[10px] mt-0.5">12.97° N, 77.59° E &bull; Systems Cluster</div>
                    </div>
                    <span className="text-[11px] text-indigo-400 font-bold px-2 py-0.5 rounded bg-indigo-950/60 border border-indigo-800/40">Active</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/90 flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold text-xs">Cloud Edge Pipelines</div>
                      <div className="text-slate-400 text-[10px] mt-0.5">Automated Multi-Region &bull; 99.9% SLA</div>
                    </div>
                    <span className="text-[11px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40">Verified</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Client Code Ownership</span>
                  <span className="font-bold text-indigo-400">100% Guaranteed</span>
                </div>
              </motion.div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
