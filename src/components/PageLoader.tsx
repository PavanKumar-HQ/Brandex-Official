import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PageLoader() {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // 1. Googlebot, Bingbot, and Lighthouse bypass check:
    // Never delay or animate for search crawlers, ensuring instant clean indexing
    if (
      typeof navigator !== "undefined" &&
      /googlebot|bingbot|yandex|baiduspider|duckduckbot|slurp|lighthouse|chrome-lighthouse|headlesschrome/i.test(
        navigator.userAgent
      )
    ) {
      return;
    }

    // 2. Visible, quick top bar animation for real users (finishes in ~400ms)
    setVisible(true);
    setProgress(25);

    const t1 = setTimeout(() => setProgress(75), 100);
    const t2 = setTimeout(() => setProgress(100), 260);
    const t3 = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 420);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
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
      className="fixed top-0 left-0 right-0 z-[99999] h-[3px] pointer-events-none overflow-visible"
    >
      <div
        className="h-full bg-gradient-to-r from-indigo-500 via-[#4f47e6] to-purple-500 shadow-[0_0_10px_rgba(79,70,229,0.85)] transition-all duration-180 ease-out relative"
        style={{ width: `${progress}%` }}
      >
        {/* High-visibility glowing head */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-2 bg-white/70 blur-[2px] rounded-full shadow-[0_0_6px_#ffffff]" />
      </div>
    </div>
  );
}
