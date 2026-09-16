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

  // Initial Cinematic Loader
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

  // Fast Top Navigation Beacon on route change
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
              className="h-full bg-gradient-to-r from-[#4f47e6] via-[#818cf8] to-[#38bdf8] shadow-[0_0_14px_rgba(79,71,230,0.85)]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Full Cinematic High-Contrast Initial Loader */}
      <AnimatePresence>
        {initialLoading && (
          <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070d1d] text-white select-none overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.02,
              filter: "blur(8px)",
              transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
            }}
          >
            {/* Ambient Glowing Cosmic Halo */}
            <div className="absolute w-96 h-96 rounded-full bg-[#4f47e6]/25 blur-[100px] pointer-events-none animate-pulse" />
            <div className="absolute w-80 h-80 rounded-full bg-[#38bdf8]/15 blur-[90px] pointer-events-none" />

            {/* Subtle Matrix Grid */}
            <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />

            <div className="flex flex-col items-center gap-7 relative z-10 max-w-sm px-6 text-center">
              
              {/* Brand Logo with Rotating Orbital Ring */}
              <div className="relative flex items-center justify-center">
                {/* Rotating Cybernetic Orbital Ring */}
                <motion.div
                  className="absolute w-24 h-24 rounded-full border-2 border-dashed border-[#4f47e6]/60 pointer-events-none"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Outer Glow Halo */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#4f47e6] via-[#818cf8] to-[#38bdf8] opacity-70 blur-md animate-pulse" />

                {/* Central Emblem Container */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-20 h-20 rounded-2xl bg-[#0b1329] border border-indigo-400/40 shadow-[0_0_30px_rgba(79,71,230,0.5)] flex items-center justify-center p-4 backdrop-blur-md"
                >
                  <img
                    src="/logo_nobg.png"
                    alt="Brandex"
                    className="h-full w-full object-contain filter brightness-0 invert drop-shadow-[0_2px_8px_rgba(255,255,255,0.4)]"
                  />
                </motion.div>
              </div>

              {/* Brand Typography */}
              <div className="space-y-1">
                <h1 className="font-display font-extrabold text-2xl tracking-tight text-white flex items-center justify-center gap-1">
                  <span>Brandex</span>
                  <span className="text-[#818cf8]">.</span>
                </h1>
                <p className="text-[11px] font-mono font-bold tracking-[0.2em] text-indigo-300/80 uppercase">
                  Digital Systems & Infrastructure
                </p>
              </div>

              {/* Progress Bar & Percentage */}
              <div className="w-64 space-y-2.5">
                <div className="w-full h-2 bg-slate-900/90 rounded-full overflow-hidden p-0.5 border border-indigo-500/30 shadow-inner">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#4f47e6] via-[#818cf8] to-[#38bdf8] rounded-full shadow-[0_0_12px_rgba(129,140,248,0.8)]"
                    initial={{ width: "0%" }}
                    animate={{ width: `${Math.min(progress, 100)}%` }}
                    transition={{ ease: "easeOut", duration: 0.15 }}
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-slate-300 font-semibold px-0.5">
                  <span className="text-indigo-300/90 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    BOOTSTRAPPING
                  </span>
                  <span className="text-white font-bold tracking-wider">{Math.min(progress, 100)}%</span>
                </div>
              </div>

              {/* Dynamic Telemetry Status Ticker */}
              <div className="h-6 flex items-center justify-center">
                <motion.p
                  key={telemetryIndex}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="text-[10px] font-mono font-medium text-slate-400 tracking-wide truncate max-w-xs"
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
