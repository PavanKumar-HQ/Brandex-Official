import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const TELEMETRY_STEPS = [
  "INITIALIZING DIGITAL ARCHITECTURE...",
  "ESTABLISHING SUB-SECOND EDGE PIPELINE...",
  "OPTIMIZING REACT & THREE.JS SHADERS...",
  "CALIBRATING BRANDEX ECOSYSTEM...",
  "SYSTEM ACTIVE • 100% OPERATIONAL",
];

export default function PageLoader() {
  const location = useLocation();
  const [initialLoading, setInitialLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [telemetryIndex, setTelemetryIndex] = useState(0);
  const [navTransition, setNavTransition] = useState(false);

  // Initial High-End Light Theme Loader
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const step = Math.floor(Math.random() * 18) + 12;
        return Math.min(prev + step, 100);
      });
    }, 110);

    const telemetryInterval = setInterval(() => {
      setTelemetryIndex((prev) => (prev + 1) % TELEMETRY_STEPS.length);
    }, 280);

    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 1400);

    return () => {
      clearInterval(progressInterval);
      clearInterval(telemetryInterval);
      clearTimeout(timer);
    };
  }, []);

  // Top Navigation Beacon on route change
  useEffect(() => {
    if (!initialLoading) {
      setNavTransition(true);
      const timer = setTimeout(() => {
        setNavTransition(false);
      }, 450);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <>
      {/* 1. Ultra-fast Glowing Top Navigation Beacon */}
      <AnimatePresence>
        {navTransition && (
          <motion.div
            className="fixed top-0 left-0 right-0 z-[10000] h-1 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-[#4f47e6] via-[#818cf8] to-[#6366f1] shadow-[0_0_12px_rgba(79,71,230,0.6)]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Full Light Theme Screen Loader */}
      <AnimatePresence>
        {initialLoading && (
          <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#f8fafd] text-slate-900 select-none overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(6px)",
              transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
            }}
          >
            {/* Ambient Indigo/Purple Glow Orbs */}
            <div className="absolute w-[500px] h-[500px] rounded-full bg-[#4f47e6]/10 blur-[120px] pointer-events-none animate-pulse" />
            <div className="absolute w-[400px] h-[400px] rounded-full bg-[#818cf8]/15 blur-[100px] pointer-events-none" />

            {/* Subtle Grid Canvas */}
            <div className="absolute inset-0 bg-grid opacity-35 pointer-events-none" />

            <div className="flex flex-col items-center gap-7 relative z-10 max-w-sm px-6 text-center">
              
              {/* Brand Logo with Rotating Dashed Ring */}
              <div className="relative flex items-center justify-center">
                {/* Rotating Dashed Accent Ring */}
                <motion.div
                  className="absolute w-24 h-24 rounded-full border-2 border-dashed border-[#4f47e6]/40 pointer-events-none"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                />

                {/* Central Emblem Card */}
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-20 h-20 rounded-3xl bg-white border border-slate-200/90 shadow-[0_12px_40px_rgba(79,71,230,0.2)] flex items-center justify-center p-4.5 backdrop-blur-xl"
                >
                  <img
                    src="/logo_nobg.png"
                    alt="Brandex"
                    className="h-full w-full object-contain drop-shadow-sm"
                  />
                </motion.div>
              </div>

              {/* Brand Typography */}
              <div className="space-y-1">
                <h1 className="font-display font-extrabold text-3xl tracking-tight text-slate-900 flex items-center justify-center gap-0.5">
                  <span>Brandex</span>
                  <span className="text-[#4f47e6]">.</span>
                </h1>
                <p className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#4f47e6] uppercase">
                  Digital Canvas & Systems
                </p>
              </div>

              {/* Progress Bar & Percentage Counter */}
              <div className="w-64 space-y-2.5">
                <div className="w-full h-2 bg-slate-200/80 rounded-full overflow-hidden p-0.5 border border-slate-200 shadow-inner">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#4f47e6] via-[#6366f1] to-[#818cf8] rounded-full shadow-[0_0_10px_rgba(79,71,230,0.5)]"
                    initial={{ width: "0%" }}
                    animate={{ width: `${Math.min(progress, 100)}%` }}
                    transition={{ ease: "easeOut", duration: 0.15 }}
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono font-semibold px-0.5">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    BOOTSTRAPPING
                  </span>
                  <span className="text-[#4f47e6] font-bold tracking-wider">{Math.min(progress, 100)}%</span>
                </div>
              </div>

              {/* Dynamic Telemetry Status Ticker */}
              <div className="h-6 flex items-center justify-center">
                <motion.p
                  key={telemetryIndex}
                  initial={{ opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -3 }}
                  className="text-[11px] font-mono font-bold text-slate-600 tracking-wide truncate max-w-xs"
                >
                  {TELEMETRY_STEPS[telemetryIndex]}
                </motion.p>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
