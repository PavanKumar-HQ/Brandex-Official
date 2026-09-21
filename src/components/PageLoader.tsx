import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const location = useLocation();
  const [initialLoading, setInitialLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [navTransition, setNavTransition] = useState(false);

  // Initial High-End Screen Loader (Plays on initial page load / refresh)
  useEffect(() => {
    const startTime = Date.now();
    const duration = 950; // Smooth ~0.95s loading experience

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setInitialLoading(false);
        }, 180);
      }
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Top Navigation Beacon on route change
  useEffect(() => {
    if (!initialLoading) {
      setNavTransition(true);
      const timer = setTimeout(() => {
        setNavTransition(false);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, initialLoading]);

  return (
    <>
      {/* 1. Ultra-sleek Top Navigation Bar (Route Changes) */}
      <AnimatePresence>
        {navTransition && (
          <motion.div
            className="fixed top-0 left-0 right-0 z-[10000] h-[2.5px] pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-500 shadow-[0_0_10px_rgba(79,70,229,0.7)]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Premium Minimalist Initial Screen Loader */}
      <AnimatePresence>
        {initialLoading && (
          <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#f8fafd] text-slate-900 select-none overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.02,
              filter: "blur(8px)",
              transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
            }}
          >
            {/* Soft Ambient Radial Glow */}
            <div className="absolute w-[450px] h-[450px] rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none animate-pulse" />
            <div className="absolute w-[300px] h-[300px] rounded-full bg-violet-500/10 blur-[80px] pointer-events-none" />

            <div className="flex flex-col items-center gap-6 relative z-10 max-w-xs px-6 text-center">
              {/* Brand Logo Emblem with Ethereal Orbit Ring */}
              <div className="relative flex items-center justify-center">
                {/* Smooth Rotating Orbit Ring */}
                <motion.div
                  className="absolute -inset-2.5 rounded-3xl border border-indigo-500/25 pointer-events-none"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />

                {/* Second Counter-Rotating Glow Ring */}
                <motion.div
                  className="absolute -inset-4 rounded-3xl border border-indigo-500/10 pointer-events-none"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                />

                {/* Central Glass Card */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-18 h-18 rounded-2xl bg-white border border-slate-200/90 shadow-[0_10px_35px_rgba(79,70,229,0.14)] flex items-center justify-center p-3.5 backdrop-blur-xl"
                >
                  <img
                    src="/logo_nobg.png"
                    alt="Brandex"
                    className="h-full w-full object-contain drop-shadow-[0_2px_8px_rgba(79,70,229,0.2)]"
                  />
                </motion.div>
              </div>

              {/* Minimal Brand Identity */}
              <div className="space-y-1">
                <h1 className="font-display font-extrabold text-2xl tracking-tight text-slate-900 flex items-center justify-center gap-0.5">
                  <span>Brandex</span>
                  <span className="text-indigo-600">.</span>
                </h1>
                <p className="text-[10px] font-mono font-semibold tracking-[0.25em] text-slate-400 uppercase">
                  Digital & IT Solutions
                </p>
              </div>

              {/* Slender Liquid Progress Bar */}
              <div className="w-48 space-y-2">
                <div className="w-full h-[3px] bg-slate-200/80 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full shadow-[0_0_8px_rgba(79,70,229,0.6)]"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: "easeOut", duration: 0.05 }}
                  />
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono font-medium text-slate-400 px-0.5">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
                    <span>Loading</span>
                  </span>
                  <span className="font-semibold text-slate-600">{progress}%</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
