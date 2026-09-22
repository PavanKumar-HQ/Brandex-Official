import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function PageLoader() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const isFirst = useRef(true);

  // Smooth fast top bar only on client-side route transitions
  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 150);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!loading) return null;

  return (
    <div
      role="progressbar"
      aria-label="Loading indicator"
      className="fixed top-0 left-0 right-0 z-[10000] h-[2px] pointer-events-none overflow-hidden bg-transparent"
    >
      <div className="h-full bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-600 shadow-[0_0_8px_rgba(79,70,229,0.8)] w-full transition-all duration-150" />
    </div>
  );
}
