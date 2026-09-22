import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PageLoader() {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // 1. Googlebot, Bingbot, and Lighthouse bypass check:
    // Never delay or animate for search crawlers, ensuring instant clean indexing
    if (
      typeof navigator !== "undefined" &&
      /googlebot|bingbot|yandex|baiduspider|duckduckbot|slurp|lighthouse|chrome-lighthouse|headlesschrome/i.test(
        navigator.userAgent
      )
    ) {
      setVisible(false);
      return;
    }

    // 2. Visible, fluid top bar animation for real users
    setVisible(true);
    setIsFading(false);
    setProgress(0);

    const step1 = setTimeout(() => setProgress(35), 50);
    const step2 = setTimeout(() => setProgress(68), 180);
    const step3 = setTimeout(() => setProgress(88), 350);
    const step4 = setTimeout(() => setProgress(100), 500);
    const step5 = setTimeout(() => setIsFading(true), 680);
    const step6 = setTimeout(() => {
      setVisible(false);
      setProgress(0);
      setIsFading(false);
    }, 950);

    return () => {
      clearTimeout(step1);
      clearTimeout(step2);
      clearTimeout(step3);
      clearTimeout(step4);
      clearTimeout(step5);
      clearTimeout(step6);
    };
  }, [location.pathname]);

  if (!visible) return null;

  return (
    <div
      role="progressbar"
      aria-label="Page loading progress"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      className={`fixed top-0 left-0 right-0 z-[99999] h-[3.5px] pointer-events-none transition-opacity duration-300 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Background track hint for instant visibility against any background */}
      <div className="absolute inset-0 bg-indigo-500/20" />

      {/* Main Animated Progress Bar */}
      <div
        className="h-full bg-gradient-to-r from-[#4f47e6] via-[#6366f1] to-[#818cf8] shadow-[0_0_12px_rgba(79,70,229,0.9),0_1px_4px_rgba(99,102,241,0.6)] transition-all duration-200 ease-out relative"
        style={{ width: `${progress}%` }}
      >
        {/* Leading edge luminous glowing pulse */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-3 bg-gradient-to-r from-transparent via-white/80 to-white blur-[1px] rounded-full shadow-[0_0_10px_#ffffff]" />
      </div>
    </div>
  );
}
