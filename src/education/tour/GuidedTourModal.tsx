import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  BookOpen,
  Tv,
  HelpCircle,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";
import { Link } from 'react-router-dom';

interface GuidedTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const tourSteps = [
  {
    step: 1,
    title: "Welcome to Brandex Digital Learning!",
    subtitle: "Your complete Karnataka State Syllabus classroom companion.",
    desc: "Designed specifically for school educators to find, present, and evaluate lessons on classroom smartboards with zero friction.",
    icon: GraduationCap,
    badge: "Step 1 of 4: Platform Overview",
    actionLabel: "Next: Class Selection",
  },
  {
    step: 2,
    title: "1. Select Your Class & Subjects",
    subtitle: "Classes 6 through 10 fully mapped to KSEEB textbooks.",
    desc: "Choose from Science, Mathematics, Social Science, and English. Every subject is broken down into structured chapter modules and topics.",
    icon: BookOpen,
    badge: "Step 2 of 4: Curriculum Library",
    actionLabel: "Next: Smartboard Mode",
  },
  {
    step: 3,
    title: "2. Distraction-Free Classroom Theater",
    subtitle: "Zero ads, zero watermarks, 100% focused learning.",
    desc: "Present high-definition curriculum video lectures directly on your classroom projector or interactive flat panel with dedicated teacher controls.",
    icon: Tv,
    badge: "Step 3 of 4: Live Presentation",
    actionLabel: "Next: Formative Quizzes",
  },
  {
    step: 4,
    title: "3. Predefined Formative Quizzes",
    subtitle: "Evaluate concept retention right on the spot.",
    desc: "Run interactive multiple-choice assessments with instant explanations to clarify student doubts before concluding your lecture.",
    icon: HelpCircle,
    badge: "Step 4 of 4: Instant Assessment",
    actionLabel: "Start Exploring Now",
  },
];

export function GuidedTourModal({ isOpen, onClose }: GuidedTourModalProps) {
  const [currentStep, setCurrentStep] = useState(0);

  if (!isOpen) return null;

  const stepData = tourSteps[currentStep];
  const isLastStep = currentStep === tourSteps.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      onClose();
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const Icon = stepData.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25 }}
        className="w-full max-w-lg bg-white rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden relative"
      >
        {/* Top Header with Mascot Avatar */}
        <div className="bg-gradient-to-br from-indigo-50/80 via-purple-50/50 to-white p-6 pb-4 border-b border-slate-100 flex items-start justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-14 h-14 rounded-2xl overflow-hidden bg-white border border-indigo-100 shadow-sm flex items-center justify-center shrink-0">
              <img
                src="/mascot.webp"
                alt="Nova - Brandex Tour Guide"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-100">
                {stepData.badge}
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-1 flex items-center gap-1.5">
                <span>Guided Tour with Nova</span>
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 leading-tight">
                {stepData.title}
              </h4>
              <p className="text-xs text-indigo-600 font-medium mt-0.5">
                {stepData.subtitle}
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            {stepData.desc}
          </p>

          {/* Progress Indicators */}
          <div className="flex items-center gap-1.5 pt-2">
            {tourSteps.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentStep
                    ? "w-8 bg-indigo-600"
                    : index < currentStep
                    ? "w-4 bg-indigo-300"
                    : "w-2 bg-slate-200"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Actions Bar */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
          {currentStep > 0 ? (
            <button
              onClick={handlePrev}
              className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs border border-slate-200 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          ) : (
            <button
              onClick={onClose}
              className="px-3.5 py-2 text-xs font-semibold text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
            >
              Skip Tour
            </button>
          )}

          {isLastStep ? (
            <Link
              to="/education/explore"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-indigo-600/20 cursor-pointer"
            >
              <span>{stepData.actionLabel}</span>
              <CheckCircle2 className="w-3.5 h-3.5" />
            </Link>
          ) : (
            <button
              onClick={handleNext}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-indigo-600/20 cursor-pointer"
            >
              <span>{stepData.actionLabel}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export function FloatingTourWidget({ onOpenTour }: { onOpenTour: () => void }) {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onOpenTour}
        className="flex items-center gap-2.5 p-2 pr-4 bg-white/95 backdrop-blur-md rounded-full border border-indigo-200/90 shadow-xl shadow-indigo-500/15 hover:border-indigo-400 text-slate-800 font-bold text-xs transition-all cursor-pointer group"
      >
        <div className="w-9 h-9 rounded-full overflow-hidden bg-indigo-50 border border-indigo-200/80 shadow-2xs relative">
          <img
            src="/mascot.webp"
            alt="Nova"
            className="w-full h-full object-cover"
          />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
        </div>
        <div className="text-left">
          <span className="text-[10px] font-mono text-indigo-600 block uppercase font-bold leading-none">
            Meet Nova
          </span>
          <span className="text-xs font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
            Take Quick Tour
          </span>
        </div>
      </motion.button>
    </div>
  );
}
