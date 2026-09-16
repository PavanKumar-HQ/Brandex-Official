import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  GraduationCap,
  BookOpen,
  Tv,
  Layers,
  ShieldCheck,
  Award,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowUpRight,
  Search
} from "lucide-react";

const educationLinks = [
  { label: "Overview", href: "/education", icon: GraduationCap },
  { label: "Classes 6–10 Syllabus", href: "/education/explore", icon: BookOpen },
  { label: "Live Classroom Player", href: "/education/classroom", icon: Tv },
  { label: "Subject Studio", href: "/education/studio/class-10/science", icon: Layers },
  { label: "Educator Login", href: "/education/login", icon: Award },
  { label: "Admin Console", href: "/education/admin", icon: ShieldCheck },
];

export default function EducationNav() {
  const { pathname } = useLocation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 10);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (el) {
      const scrollAmount = direction === "left" ? -280 : 280;
      el.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(checkScroll, 350);
    }
  };

  return (
    <div className="w-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 sticky top-16 z-30 shadow-xs transition-all">
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between gap-3 h-14">
          
          {/* Left Brand Badge */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              to="/education"
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border border-blue-100/80 hover:border-blue-300 text-[#4f47e6] transition-all shadow-2xs group"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4f47e6]"></span>
              </span>
              <span className="text-xs font-bold tracking-tight font-display text-slate-900 group-hover:text-[#4f47e6] transition-colors">
                Education Hub
              </span>
            </Link>
          </div>

          {/* Center Navigation Track with Glass Pill Links */}
          <div className="relative flex-1 min-w-0 flex items-center mx-1 sm:mx-3">
            
            {/* Left Scroll Arrow */}
            {canScrollLeft && (
              <button
                onClick={() => scroll("left")}
                aria-label="Scroll left"
                className="absolute left-0 z-20 w-8 h-8 rounded-full bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-700 shadow-md flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-[#4f47e6] hover:scale-105 transition-all cursor-pointer"
              >
                <ChevronLeft size={16} />
              </button>
            )}

            {/* Left Fade Gradient Mask */}
            {canScrollLeft && (
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white/90 dark:from-slate-950/90 to-transparent z-10 pointer-events-none" />
            )}

            {/* Tabs List */}
            <div
              ref={scrollContainerRef}
              onScroll={checkScroll}
              className="flex items-center gap-1.5 overflow-x-auto py-1.5 no-scrollbar scroll-smooth w-full px-1"
            >
              {educationLinks.map((tab) => {
                const isActive = pathname === tab.href || (tab.href !== "/education" && pathname.startsWith(tab.href));
                const Icon = tab.icon;
                return (
                  <Link
                    key={tab.href}
                    to={tab.href}
                    className={`relative flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                      isActive
                        ? "bg-[#4f47e6] text-white shadow-sm shadow-[#4f47e6]/25 font-bold"
                        : "text-slate-600 hover:text-slate-950 hover:bg-slate-100/90"
                    }`}
                  >
                    <Icon size={14} className={isActive ? "text-white" : "text-[#4f47e6]"} />
                    <span>{tab.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Right Fade Gradient Mask */}
            {canScrollRight && (
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/90 dark:from-slate-950/90 to-transparent z-10 pointer-events-none" />
            )}

            {/* Right Scroll Arrow */}
            {canScrollRight && (
              <button
                onClick={() => scroll("right")}
                aria-label="Scroll right"
                className="absolute right-0 z-20 w-8 h-8 rounded-full bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-700 shadow-md flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-[#4f47e6] hover:scale-105 transition-all cursor-pointer"
              >
                <ChevronRight size={16} />
              </button>
            )}
          </div>

          {/* Right Action: Quick Switcher to Community */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              to="/education/explore"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 hover:text-slate-900 text-xs font-bold transition-all border border-slate-200/60 shadow-2xs group"
              title="Explore Syllabus"
            >
              <Search size={13} className="text-slate-500 group-hover:text-[#4f47e6] transition-colors" />
              <span className="hidden md:inline">Find Topics</span>
            </Link>

            <Link
              to="/community"
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-xs font-bold transition-all shadow-2xs hover:shadow-sm"
              title="Go to Community Hub"
            >
              <Sparkles size={12} />
              <span>Community</span>
              <ArrowUpRight size={12} />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
