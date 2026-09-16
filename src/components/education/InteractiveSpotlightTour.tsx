import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";

interface Step {
  targetId: string;
  title: string;
  desc: string;
}

const tourSteps: Step[] = [
  {
    targetId: "tour-explore-cta",
    title: "1. Explore Curriculum",
    desc: "Start here to browse Classes 6 through 10 with complete Karnataka State Syllabus subjects and video chapters.",
  },
  {
    targetId: "tour-hero-stage",
    title: "2. Live Smartboard Player",
    desc: "Watch lessons in distraction-free theater mode designed specifically for school projectors and interactive panels.",
  },
  {
    targetId: "tour-feature-tabs",
    title: "3. Transformative Classroom Tools",
    desc: "Switch tabs to explore teacher assistance, predefined formative quizzes, and offline smartboard capability.",
  },
  {
    targetId: "tour-classes-list",
    title: "4. Grade Syllabus Library",
    desc: "Click on any class to access its subjects (Science, Maths, Social Science, English) and chapter modules.",
  },
];

export function InteractiveSpotlightTour() {
  const [isActive, setIsActive] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [highlightStyle, setHighlightStyle] = useState<{
    top: number;
    left: number;
    width: number;
    height: number;
  } | null>(null);

  // Auto-launch for first-time visitors after page settles
  useEffect(() => {
    try {
      const hasSeenTour = localStorage.getItem("brandex_first_tour_completed");
      if (!hasSeenTour) {
        const timer = setTimeout(() => {
          setIsActive(true);
        }, 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // ignore localStorage errors in private browsing
    }
  }, []);

  const updateHighlight = useCallback(() => {
    if (!isActive) return;
    const step = tourSteps[currentStepIndex];
    if (!step) return;

    const el = document.getElementById(step.targetId);
    if (el) {
      const rect = el.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const scrollX = window.scrollX || window.pageXOffset;

      setHighlightStyle({
        top: rect.top + scrollY - 8,
        left: rect.left + scrollX - 8,
        width: rect.width + 16,
        height: rect.height + 16,
      });

      // Smooth scroll target element into viewport
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      setHighlightStyle(null);
    }
  }, [isActive, currentStepIndex]);

  useEffect(() => {
    updateHighlight();
    window.addEventListener("resize", updateHighlight);
    window.addEventListener("scroll", updateHighlight);
    return () => {
      window.removeEventListener("resize", updateHighlight);
      window.removeEventListener("scroll", updateHighlight);
    };
  }, [updateHighlight]);

  const handleNext = () => {
    if (currentStepIndex < tourSteps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const handleComplete = () => {
    setIsActive(false);
    try {
      localStorage.setItem("brandex_first_tour_completed", "true");
    } catch {
      // ignore
    }
  };

  if (!isActive) {
    return (
      <button
        onClick={() => {
          setCurrentStepIndex(0);
          setIsActive(true);
        }}
        className="fixed bottom-6 left-6 z-40 bg-white/95 hover:bg-white text-indigo-600 border border-slate-200 px-4 py-2.5 rounded-full shadow-lg text-xs font-bold flex items-center gap-2 transition-all hover:scale-105 cursor-pointer backdrop-blur-md"
      >
        <Sparkles className="w-3.5 h-3.5 text-indigo-500 animate-pulse" />
        <span>Take Product Tour</span>
      </button>
    );
  }

  const currentStep = tourSteps[currentStepIndex];

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {/* Darkened Backdrop Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-slate-950/60 pointer-events-auto backdrop-blur-[2px]"
        onClick={handleComplete}
      />

      {/* Target Cutout Spotlight */}
      {highlightStyle && (
        <motion.div
          layout
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          style={{
            top: highlightStyle.top,
            left: highlightStyle.left,
            width: highlightStyle.width,
            height: highlightStyle.height,
          }}
          className="absolute z-50 rounded-2xl ring-4 ring-indigo-500/80 shadow-[0_0_40px_rgba(79,70,229,0.5)] pointer-events-none bg-white/5"
        />
      )}

      {/* Interactive Tour Tooltip Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStepIndex}
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -15, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[92vw] max-w-lg bg-white border border-slate-200 rounded-3xl p-6 shadow-2xl pointer-events-auto select-none"
        >
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-ping" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-600">
                Product Walkthrough
              </span>
            </div>

            <button
              onClick={handleComplete}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <h3 className="text-lg font-extrabold text-slate-900 tracking-tight mb-2">
            {currentStep?.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
            {currentStep?.desc}
          </p>

          <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-100">
            {/* Step Indicators */}
            <div className="flex items-center gap-1.5">
              {tourSteps.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentStepIndex ? "w-6 bg-indigo-600" : "w-1.5 bg-slate-200"
                  }`}
                />
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              {currentStepIndex > 0 && (
                <button
                  onClick={handlePrev}
                  className="px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Prev</span>
                </button>
              )}

              <button
                onClick={handleNext}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md flex items-center gap-1.5 transition-all hover:scale-102"
              >
                <span>{currentStepIndex === tourSteps.length - 1 ? "Finish Tour" : "Next Step"}</span>
                {currentStepIndex === tourSteps.length - 1 ? (
                  <CheckCircle2 className="w-3.5 h-3.5" />
                ) : (
                  <ArrowRight className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
