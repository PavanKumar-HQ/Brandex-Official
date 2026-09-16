import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress counter to 100%
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 8;
      });
    }, 100);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#f8fafd] backdrop-blur-xl"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }}
        >
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

          <div className="flex flex-col items-center gap-6 relative z-10">
            
            {/* Brand Logo Container with tactile liquid glass & soft depth */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200/90 shadow-[0_8px_30px_rgba(79,71,230,0.15)] flex items-center justify-center p-3">
                <img
                  src="/logo_nobg.png"
                  alt="Brandex"
                  className="h-full w-full object-contain"
                />
              </div>
            </motion.div>

            {/* Brand Title & System Status */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="text-center"
            >
              <h2 className="font-display font-extrabold text-slate-900 text-lg tracking-tight">
                Brandex<span className="text-[#4f47e6]">.</span>
              </h2>
              <p className="text-[11px] font-mono font-semibold tracking-widest text-slate-500 uppercase mt-0.5">
                Digital Canvas & Systems
              </p>
            </motion.div>

            {/* Progress Bar & Counter */}
            <div className="w-48 space-y-2">
              <div className="w-full h-1.5 bg-slate-200/80 rounded-full overflow-hidden p-0.5 border border-slate-200">
                <motion.div
                  className="h-full bg-[#4f47e6] rounded-full shadow-[0_0_8px_rgba(79,71,230,0.5)]"
                  initial={{ width: "0%" }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ ease: "easeOut", duration: 0.15 }}
                />
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 font-semibold px-0.5">
                <span>INITIALIZING</span>
                <span className="text-[#4f47e6] font-bold">{Math.min(progress, 100)}%</span>
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
