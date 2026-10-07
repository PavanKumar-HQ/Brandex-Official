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
    desc: "Switch tabs to explore teacher assistance, predefined formative quizzes, and offline PWA capability.",
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
        }, 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // ignore localStorage errors in private browsing
    }
  }, []);

  const updatePosition = useCallback(() => {
    if (!isActive) return;
    const step = tourSteps[currentStepIndex];
    const el = document.getElementById(step.targetId);
    if (el) {
      const rect = el.getBoundingClientRect();
      setHighlightStyle({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      });
    } else {
      setHighlightStyle(null);
    }
  }, [isActive, currentStepIndex]);

  useEffect(() => {
    if (!isActive) return;

    const step = tourSteps[currentStepIndex];
    const el = document.getElementById(step.targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    // Update immediately and on scroll/resize
    updatePosition();
    const interval = setInterval(updatePosition, 100);
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [isActive, currentStepIndex, updatePosition]);

  const handleClose = () => {
    setIsActive(false);
    try {
      localStorage.setItem("brandex_first_tour_completed", "true");
    } catch {
      // ignore
    }
  };

  const handleNext = () => {
    if (currentStepIndex < tourSteps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      handleClose();
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  if (!isActive) return null;

  const currentStep = tourSteps[currentStepIndex];
  const isLast = currentStepIndex === tourSteps.length - 1;

  return (
    <div className="fixed inset-0 z-50 pointer-events-auto select-none">
      
      {/* Dark Dimming Backdrop (clicking skips tour) */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-[1px] transition-opacity duration-300 cursor-pointer"
      />

      {/* Target Element Spotlight Ring (if target found) */}
      {highlightStyle && (
        <div
          style={{
            top: highlightStyle.top - 6,
            left: highlightStyle.left - 6,
            width: highlightStyle.width + 12,
            height: highlightStyle.height + 12,
          }}
          className="fixed rounded-2xl border-2 border-indigo-400 shadow-[0_0_0_9999px_rgba(7,11,20,0.65)] pointer-events-none transition-all duration-200 z-50 ring-4 ring-indigo-500/20"
        />
      )}

      {/* Centered / Bottom Floating Tooltip Card */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4 pointer-events-auto">
        <motion.div
          key={currentStepIndex}
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-2xl border border-slate-200 shadow-2xl p-5 space-y-4"
        >
          {/* Header with Mascot Nova */}
          <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-indigo-50 border border-indigo-200 shadow-2xs shrink-0">
                <img src="/mascot.webp" alt="Nova" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-indigo-600 uppercase tracking-wider block">
                  Step {currentStepIndex + 1} of {tourSteps.length}
                </span>
                <h4 className="text-sm font-bold text-slate-900 leading-tight">
                  {currentStep.title}
                </h4>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Description */}
          <p className="text-xs text-slate-600 font-normal leading-relaxed">
            {currentStep.desc}
          </p>

          {/* Progress Indicators */}
          <div className="flex items-center gap-1.5 pt-1">
            {tourSteps.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  idx === currentStepIndex
                    ? "w-6 bg-indigo-600"
                    : idx < currentStepIndex
                    ? "w-3 bg-indigo-300"
                    : "w-2 bg-slate-200"
                }`}
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-1 border-t border-slate-100">
            <button
              onClick={handleClose}
              className="text-xs font-semibold text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              Skip Tour
            </button>

            <div className="flex items-center gap-2">
              {currentStepIndex > 0 && (
                <button
                  onClick={handlePrev}
                  className="px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 cursor-pointer transition-colors"
                >
                  Back
                </button>
              )}

              <button
                onClick={handleNext}
                className="px-4.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm shadow-indigo-600/20 cursor-pointer transition-colors"
              >
                <span>{isLast ? "Got it!" : "Next"}</span>
                {!isLast && <ArrowRight className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
