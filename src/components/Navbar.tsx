import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ArrowRight,
  Search,
  Users,
  GraduationCap,
  Sparkles,
  ArrowUpRight,
  Code2,
  Calendar,
  Building2,
  MessageSquare,
  Zap,
  Share2,
  Award,
  ShieldCheck,
  BookOpen,
  Tv,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
  sectionId?: string;
  icon?: any;
}

const mainNavItems: NavItem[] = [
  { label: "Home", href: "/", sectionId: "hero" },
  { label: "Services", href: "/services", sectionId: "services" },
  { label: "Case Studies", href: "/case-studies", sectionId: "case-studies" },
  { label: "Community", href: "/community" },
  { label: "Education", href: "/education" },
  { label: "Pricing", href: "/#pricing", sectionId: "pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const communityNavItems: NavItem[] = [
  { label: "Overview", href: "/community", icon: Users },
  { label: "Projects", href: "/community/projects", icon: Code2 },
  { label: "Events", href: "/community/events", icon: Calendar },
  { label: "Training", href: "/community/training", icon: GraduationCap },
  { label: "College Partnership", href: "/community/college-partnership", icon: Building2 },
  { label: "Stories", href: "/community/stories", icon: MessageSquare },
  { label: "Careers", href: "/community/careers", icon: Zap },
  { label: "Media", href: "/media", icon: Share2 },
  { label: "Ambassador", href: "/community/ambassador", icon: Award },
  { label: "Status", href: "/community/status", icon: ShieldCheck },
  { label: "Guidelines", href: "/community/guidelines", icon: BookOpen },
];

const educationNavItems: NavItem[] = [
  { label: "Overview", href: "/education", icon: GraduationCap },
  { label: "Classes 6–10 Syllabus", href: "/education/explore", icon: BookOpen },
  { label: "Live Classroom", href: "/education/classroom", icon: Tv },
  { label: "Subject Studio", href: "/education/studio/class-10/science", icon: Layers },
  { label: "Educator Login", href: "/education/login", icon: Award },
  { label: "Admin Console", href: "/education/admin", icon: ShieldCheck },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const { pathname } = useLocation();

  const isCommunity =
    pathname.startsWith("/community") ||
    pathname === "/projects" ||
    pathname === "/careers" ||
    pathname === "/stories" ||
    pathname === "/status" ||
    pathname === "/ambassador";

  const isEducation =
    pathname.startsWith("/education") ||
    pathname === "/explore" ||
    pathname === "/studio" ||
    pathname === "/login" ||
    pathname === "/admin";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (pathname === "/") {
        const sections = [
          "hero",
          "features",
          "clients",
          "services",
          "case-studies",
          "ecosystem",
          "testimonials",
          "pricing",
          "blog",
          "faq",
          "contact",
        ];
        const scrollPosition = window.scrollY + 180;

        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && el.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const handleNavClick = (item: NavItem, e: React.MouseEvent) => {
    if (pathname === "/" && item.sectionId) {
      const el = document.getElementById(item.sectionId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
        setActiveSection(item.sectionId);
        return;
      }
    }
  };

  const isItemActive = (item: NavItem) => {
    if (isCommunity) {
      return pathname === item.href || (item.href !== "/community" && pathname.startsWith(item.href));
    }
    if (isEducation) {
      return pathname === item.href || (item.href !== "/education" && pathname.startsWith(item.href));
    }
    if (pathname === "/" && item.sectionId) {
      if (item.sectionId === "hero" && (activeSection === "hero" || activeSection === "features" || activeSection === "clients")) return true;
      if (item.sectionId === "services" && activeSection === "services") return true;
      if (item.sectionId === "case-studies" && activeSection === "case-studies") return true;
      if (item.sectionId === "pricing" && (activeSection === "pricing" || activeSection === "testimonials" || activeSection === "faq")) return true;
      if (item.sectionId === "contact" && activeSection === "contact") return true;
      return false;
    }
    return pathname === item.href;
  };

  const currentNavItems = isCommunity
    ? communityNavItems
    : isEducation
    ? educationNavItems
    : mainNavItems;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isCommunity || isEducation
          ? "liquid-glass border-b border-slate-200/70 bg-white/90 dark:bg-slate-950/90 py-3 backdrop-blur-xl shadow-2xs"
          : "bg-transparent py-4 md:py-5"
      }`}
    >
      <div className="w-full max-w-[1720px] mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-12 xl:px-16 gap-4">
        
        {/* Brand Logo with dynamic module badge */}
        <div className="flex items-center gap-2.5 shrink-0">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl bg-[#4f47e6] flex items-center justify-center p-1.5 shadow-sm group-hover:scale-105 transition-transform duration-200">
              <img
                src="/logo_nobg.png"
                alt="Brandex Digital"
                className="h-full w-full object-contain filter brightness-0 invert"
              />
            </div>
            <span className="font-display text-lg font-bold tracking-tight text-slate-900 group-hover:text-[#4f47e6] transition-colors">
              Brandex<span className="text-[#4f47e6]">.</span>
            </span>
          </Link>

          {/* Context Tag Pill */}
          {isCommunity && (
            <Link
              to="/community"
              className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-[#4f47e6] text-[11px] font-mono font-bold tracking-tight shadow-2xs hover:bg-indigo-100 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
              Community
            </Link>
          )}

          {isEducation && (
            <Link
              to="/education"
              className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 text-[11px] font-mono font-bold tracking-tight shadow-2xs hover:bg-blue-100 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              Education
            </Link>
          )}
        </div>

        {/* Center Desktop Navigation - Single, Clean, Unified */}
        <nav className="hidden lg:flex items-center gap-1 liquid-glass-pill px-2.5 py-1.5 rounded-full overflow-x-auto no-scrollbar max-w-[850px]">
          {currentNavItems.map((item) => {
            const active = isItemActive(item);
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                to={item.href}
                onClick={(e) => handleNavClick(item, e)}
                className={`relative flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 rounded-full z-10 whitespace-nowrap ${
                  active
                    ? "text-[#4f47e6] font-bold"
                    : "text-slate-600 hover:text-slate-950 hover:bg-white/60"
                }`}
              >
                {active && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-white border border-slate-200/80 rounded-full -z-10 shadow-2xs"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {Icon && <Icon size={13} className={active ? "text-[#4f47e6]" : "opacity-60"} />}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Action Section */}
        <div className="hidden md:flex items-center gap-2.5 shrink-0">
          {isCommunity && (
            <>
              <Link
                to="/community/search"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-slate-900 text-xs font-semibold border border-slate-200/80 shadow-2xs transition-all"
                title="Search Community"
              >
                <Search size={13} className="text-slate-500" />
                <span>Search</span>
              </Link>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="rounded-full px-4 h-9 text-xs font-semibold border-slate-200 hover:bg-white transition-all"
              >
                <Link to="/" className="flex items-center gap-1">
                  <span>Main Site</span>
                  <ArrowUpRight size={12} />
                </Link>
              </Button>
            </>
          )}

          {isEducation && (
            <>
              <Link
                to="/education/explore"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-slate-900 text-xs font-semibold border border-slate-200/80 shadow-2xs transition-all"
                title="Search Curriculum"
              >
                <Search size={13} className="text-slate-500" />
                <span>Explore</span>
              </Link>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="rounded-full px-4 h-9 text-xs font-semibold border-slate-200 hover:bg-white transition-all"
              >
                <Link to="/" className="flex items-center gap-1">
                  <span>Main Site</span>
                  <ArrowUpRight size={12} />
                </Link>
              </Button>
            </>
          )}

          {!isCommunity && !isEducation && (
            <Button
              asChild
              size="sm"
              className="bg-[#4f47e6] hover:bg-[#4338ca] text-white font-semibold shadow-[0_4px_16px_rgba(79,71,230,0.3)] hover:shadow-[0_6px_22px_rgba(79,71,230,0.4)] rounded-full px-5 h-9 text-xs transition-all duration-200 hover:-translate-y-0.5"
            >
              <Link to="/contact" className="flex items-center gap-1.5">
                <span>Start a Project</span>
                <ArrowRight size={13} />
              </Link>
            </Button>
          )}
        </div>

        {/* Mobile Menu Trigger */}
        <div className="lg:hidden flex items-center gap-2 shrink-0">
          {isCommunity && (
            <Link
              to="/community/search"
              className="p-2 text-slate-700 hover:text-[#4f47e6] liquid-glass-pill rounded-xl"
            >
              <Search size={17} />
            </Link>
          )}
          <button
            className="p-2 text-slate-800 hover:text-[#4f47e6] liquid-glass-pill rounded-xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden fixed inset-x-0 top-[3.75rem] liquid-glass border-b border-slate-200 shadow-xl p-6 overflow-y-auto max-h-[calc(100vh-3.75rem)]"
          >
            <div className="flex flex-col space-y-1.5">
              <div className="text-[11px] font-mono tracking-widest text-[#4f47e6] uppercase mb-2 font-bold flex items-center justify-between">
                <span>{isCommunity ? "Community Portals" : isEducation ? "Education Portals" : "Navigation"}</span>
                {(isCommunity || isEducation) && (
                  <Link to="/" onClick={() => setOpen(false)} className="text-[10px] text-slate-500 hover:underline">
                    ← Main Website
                  </Link>
                )}
              </div>

              {currentNavItems.map((item) => {
                const active = isItemActive(item);
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={(e) => {
                      handleNavClick(item, e);
                      setOpen(false);
                    }}
                    className={`flex items-center justify-between p-3 rounded-xl font-semibold text-sm transition-all ${
                      active
                        ? "bg-white text-[#4f47e6] border border-slate-200 shadow-2xs"
                        : "text-slate-700 hover:text-slate-950 hover:bg-white/50"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {Icon && <Icon size={16} className={active ? "text-[#4f47e6]" : "opacity-60"} />}
                      <span>{item.label}</span>
                    </div>
                    <ArrowRight size={14} className={active ? "text-[#4f47e6]" : "opacity-40"} />
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2">
                {isCommunity || isEducation ? (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full rounded-xl h-11 text-sm font-semibold"
                  >
                    <Link to="/" onClick={() => setOpen(false)}>
                      Return to Main Website
                    </Link>
                  </Button>
                ) : (
                  <Button
                    asChild
                    className="w-full bg-[#4f47e6] hover:bg-[#4338ca] text-white font-semibold rounded-xl h-11 text-sm shadow-[0_4px_14px_rgba(79,71,230,0.3)]"
                  >
                    <Link to="/contact" onClick={() => setOpen(false)}>
                      Start a Project
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
