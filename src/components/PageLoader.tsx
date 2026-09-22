import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PageLoader() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Non-blocking top progress bar on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  // Smooth top bar on route transitions
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!loading) return null;

  return (
    <div
      role="progressbar"
      aria-label="Page loading indicator"
      className="fixed top-0 left-0 right-0 z-[10000] h-[3px] pointer-events-none overflow-hidden"
    >
      <div className="h-full bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-500 shadow-[0_0_12px_rgba(79,70,229,0.8)] w-full animate-pulse" />
    </div>
  );
}
