import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Users,
  Code2,
  Calendar,
  GraduationCap,
  MessageSquare,
  Zap,
  Share2,
  Award,
  ShieldCheck,
  Search,
  BookOpen,
  Building2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const communityLinks = [
  { label: "Overview", href: "/community", icon: Users },
  { label: "Projects", href: "/community/projects", icon: Code2 },
  { label: "Events", href: "/community/events", icon: Calendar },
  { label: "Training", href: "/community/training", icon: GraduationCap },
  { label: "College Partnership", href: "/community/college-partnership", icon: Building2 },
  { label: "Stories", href: "/community/stories", icon: MessageSquare },
  { label: "Careers", href: "/community/careers", icon: Zap },
  { label: "Media", href: "/community/media", icon: Share2 },
  { label: "Ambassador", href: "/community/ambassador", icon: Award },
  { label: "Status", href: "/community/status", icon: ShieldCheck },
  { label: "Guidelines", href: "/community/guidelines", icon: BookOpen },
];

export default function CommunityNav() {
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
    <div className="w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200/70 dark:border-slate-800/70 sticky top-16 z-30 shadow-2xs transition-all">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between gap-4 h-12">
          
          {/* Center Tabs Navigation Track */}
          <div className="relative flex-1 min-w-0 flex items-center">
            
            {/* Left Scroll Arrow */}
            {canScrollLeft && (
              <button
                onClick={() => scroll("left")}
                aria-label="Scroll left"
                className="absolute left-0 z-20 w-7 h-7 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-[#4f47e6] hover:scale-105 transition-all cursor-pointer"
              >
                <ChevronLeft size={14} />
              </button>
            )}

            {/* Left Fade Gradient */}
            {canScrollLeft && (
              <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />
            )}

            {/* Tabs List */}
            <div
              ref={scrollContainerRef}
              onScroll={checkScroll}
              className="flex items-center gap-1 overflow-x-auto py-1 no-scrollbar scroll-smooth w-full"
            >
              {communityLinks.map((tab) => {
                const isActive = pathname === tab.href || (tab.href !== "/community" && pathname.startsWith(tab.href));
                const Icon = tab.icon;
                return (
                  <Link
                    key={tab.href}
                    to={tab.href}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-150 shrink-0 ${
                      isActive
                        ? "bg-[#4f47e6] text-white shadow-2xs font-bold"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    <Icon size={13} className={isActive ? "text-white" : "text-[#4f47e6]"} />
                    <span>{tab.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Right Fade Gradient */}
            {canScrollRight && (
              <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />
            )}

            {/* Right Scroll Arrow */}
            {canScrollRight && (
              <button
                onClick={() => scroll("right")}
                aria-label="Scroll right"
                className="absolute right-0 z-20 w-7 h-7 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-[#4f47e6] hover:scale-105 transition-all cursor-pointer"
              >
                <ChevronRight size={14} />
              </button>
            )}
          </div>

          {/* Right Action: Search */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              to="/community/search"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200/70 text-slate-700 hover:text-slate-900 text-xs font-semibold transition-all border border-slate-200/60"
              title="Search Portals"
            >
              <Search size={13} className="text-slate-500" />
              <span className="hidden sm:inline">Search</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
