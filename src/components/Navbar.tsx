import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Search,
  Users,
  GraduationCap,
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
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
  sectionId?: string;
  hasDropdown?: "community" | "education";
}

const navItems: NavItem[] = [
  { label: "Home", href: "/", sectionId: "hero" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Community", href: "/community", hasDropdown: "community" },
  { label: "Education", href: "/education", hasDropdown: "education" },
  { label: "Pricing", href: "/#pricing", sectionId: "pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const communityDropdownSections = [
  {
    title: "Core Portals",
    items: [
      {
        title: "Community Overview",
        desc: "Builders guild, member perks & syncs",
        href: "/community",
        icon: Users,
      },
      {
        title: "Open-Source Projects",
        desc: "Active repos & contribution tracks",
        href: "/community/projects",
        icon: Code2,
      },
      {
        title: "Meetups & Sprints",
        desc: "Hackathons, Bangalore tech circles",
        href: "/community/events",
        icon: Calendar,
      },
      {
        title: "Training Bootcamps",
        desc: "Hands-on engineering curriculum",
        href: "/community/training",
        icon: GraduationCap,
      },
      {
        title: "College Partnership",
        desc: "School & university innovation tracks",
        href: "/community/college-partnership",
        icon: Building2,
      },
    ],
  },
  {
    title: "Ecosystem & Guild",
    items: [
      {
        title: "Builder Stories",
        desc: "Architecture case studies & interviews",
        href: "/community/stories",
        icon: MessageSquare,
      },
      {
        title: "Careers & Roles",
        desc: "Open positions at Brandex HQ",
        href: "/community/careers",
        icon: Zap,
      },
      {
        title: "Media Vault",
        desc: "Summit keynotes & visual archives",
        href: "/media",
        icon: Share2,
      },
      {
        title: "Brand Ambassador",
        desc: "Lead campus tech chapters",
        href: "/community/ambassador",
        icon: Award,
      },
      {
        title: "Application Tracker",
        desc: "Live status for cohorts & roles",
        href: "/community/status",
        icon: ShieldCheck,
      },
      {
        title: "Community Guidelines",
        desc: "Conduct rules & security policy",
        href: "/community/guidelines",
        icon: BookOpen,
      },
    ],
  },
];

const educationDropdownSections = [
  {
    title: "Curriculum & Learning",
    items: [
      {
        title: "Education Overview",
        desc: "State board digital curriculum hub",
        href: "/education",
        icon: GraduationCap,
      },
      {
        title: "Classes 6–10 Syllabus",
        desc: "Chapter-wise video lessons & quizzes",
        href: "/education/explore",
        icon: BookOpen,
      },
      {
        title: "Live Classroom Player",
        desc: "Smartboard full-screen video theater",
        href: "/education/classroom",
        icon: Tv,
      },
      {
        title: "Subject Studio",
        desc: "Interactive topic playlist workspace",
        href: "/education/studio/class-10/science",
        icon: Layers,
      },
    ],
  },
  {
    title: "Educator Portal",
    items: [
      {
        title: "Educator Login",
        desc: "Teacher dashboard & student telemetry",
        href: "/education/login",
        icon: Award,
      },
      {
        title: "Content Management Admin",
        desc: "Video lesson catalog & quiz management",
        href: "/education/admin",
        icon: ShieldCheck,
      },
    ],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [activeDropdown, setActiveDropdown] = useState<"community" | "education" | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<"community" | "education" | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { pathname } = useLocation();

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
    setActiveDropdown(null);
  }, [pathname]);

  const handleMouseEnter = (type?: "community" | "education") => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    if (type) {
      setActiveDropdown(type);
    } else {
      setActiveDropdown(null);
    }
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

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
    if (item.href === "/services" && pathname.startsWith("/services")) return true;
    if (item.href === "/case-studies" && pathname.startsWith("/case-studies")) return true;
    if (item.href === "/community" && pathname.startsWith("/community")) return true;
    if (item.href === "/education" && pathname.startsWith("/education")) return true;
    if (pathname === "/" && item.sectionId) {
      if (item.sectionId === "hero" && (activeSection === "hero" || activeSection === "features" || activeSection === "clients")) return true;
      if (item.sectionId === "pricing" && (activeSection === "pricing" || activeSection === "testimonials" || activeSection === "faq")) return true;
      if (item.sectionId === "contact" && activeSection === "contact") return true;
      return false;
    }
    return pathname === item.href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || activeDropdown
          ? "liquid-glass border-b border-slate-200/70 bg-white/95 dark:bg-slate-950/95 py-3 backdrop-blur-xl shadow-2xs"
          : "bg-transparent py-4 md:py-5"
      }`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full max-w-[1720px] mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-12 xl:px-16 relative">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group shrink-0 select-none">
          <img
            src="/brandex-logo.webp"
            alt="Brandex"
            className="h-7 sm:h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation Pill Bar */}
        <nav className="hidden lg:flex items-center gap-1 liquid-glass-pill px-3 py-1.5 rounded-full">
          {navItems.map((item) => {
            const active = isItemActive(item);
            const isDropdownOpen = activeDropdown === item.hasDropdown;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.hasDropdown)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.href}
                  onClick={(e) => handleNavClick(item, e)}
                  className={`relative flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 rounded-full z-10 ${
                    active || isDropdownOpen
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
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180 text-[#4f47e6]" : "opacity-50"
                      }`}
                    />
                  )}
                </Link>

                {/* =========================================================
                    DESKTOP FLYOUT MEGA-DROPDOWN: COMMUNITY
                   ========================================================= */}
                {item.hasDropdown === "community" && (
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <div
                        className="hidden lg:block absolute top-full right-[-80px] xl:left-1/2 xl:-translate-x-1/2 pt-2.5 z-50 pointer-events-auto"
                        onMouseEnter={() => handleMouseEnter("community")}
                        onMouseLeave={handleMouseLeave}
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="w-[680px] max-w-[calc(100vw-32px)] bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl rounded-3xl border border-slate-200/90 dark:border-slate-800/90 shadow-2xl p-6 overflow-hidden"
                        >
                          <div className="grid grid-cols-2 gap-6">
                            {communityDropdownSections.map((section, idx) => (
                              <div key={idx} className="space-y-2">
                                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 px-2 pb-1 border-b border-slate-100 dark:border-slate-800">
                                  {section.title}
                                </div>
                                <div className="space-y-1">
                                  {section.items.map((subItem) => {
                                    const Icon = subItem.icon;
                                    const isSubActive = pathname === subItem.href;
                                    return (
                                      <Link
                                        key={subItem.title}
                                        to={subItem.href}
                                        onClick={() => setActiveDropdown(null)}
                                        className={`flex items-start gap-3 p-2.5 rounded-2xl transition-all group ${
                                          isSubActive
                                            ? "bg-indigo-50/90 text-[#4f47e6]"
                                            : "hover:bg-slate-50 dark:hover:bg-slate-800/60"
                                        }`}
                                      >
                                        <div className="w-8 h-8 rounded-xl bg-indigo-50 text-[#4f47e6] group-hover:bg-[#4f47e6] group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs mt-0.5">
                                          <Icon size={15} />
                                        </div>
                                        <div className="min-w-0">
                                          <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-[#4f47e6] transition-colors leading-tight">
                                            {subItem.title}
                                          </div>
                                          <div className="text-[11px] text-slate-500 font-normal truncate mt-0.5">
                                            {subItem.desc}
                                          </div>
                                        </div>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Dropdown Footer Action */}
                          <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                            <span className="text-[11px] text-slate-500 font-medium">
                              Builders &amp; Founders Club • 1,400+ Active Members
                            </span>
                            <Link
                              to="/community/search"
                              onClick={() => setActiveDropdown(null)}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-indigo-50 text-[#4f47e6] hover:bg-[#4f47e6] hover:text-white text-xs font-bold transition-all shadow-2xs"
                            >
                              <Search size={12} />
                              <span>Search Community</span>
                              <ArrowRight size={12} />
                            </Link>
                          </div>
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                )}

                {/* =========================================================
                    DESKTOP FLYOUT MEGA-DROPDOWN: EDUCATION
                   ========================================================= */}
                {item.hasDropdown === "education" && (
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <div
                        className="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50 pointer-events-auto"
                        onMouseEnter={() => handleMouseEnter("education")}
                        onMouseLeave={handleMouseLeave}
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="w-[680px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl rounded-3xl border border-slate-200/90 dark:border-slate-800/90 shadow-2xl p-6 overflow-hidden"
                        >
                          <div className="grid grid-cols-2 gap-6">
                            {educationDropdownSections.map((section, idx) => (
                              <div key={idx} className="space-y-2">
                                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 px-2 pb-1 border-b border-slate-100 dark:border-slate-800">
                                  {section.title}
                                </div>
                                <div className="space-y-1">
                                  {section.items.map((subItem) => {
                                    const Icon = subItem.icon;
                                    const isSubActive = pathname === subItem.href;
                                    return (
                                      <Link
                                        key={subItem.title}
                                        to={subItem.href}
                                        onClick={() => setActiveDropdown(null)}
                                        className={`flex items-start gap-3 p-2.5 rounded-2xl transition-all group ${
                                          isSubActive
                                            ? "bg-blue-50/90 text-blue-600"
                                            : "hover:bg-slate-50 dark:hover:bg-slate-800/60"
                                        }`}
                                      >
                                        <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs mt-0.5">
                                          <Icon size={15} />
                                        </div>
                                        <div className="min-w-0">
                                          <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors leading-tight">
                                            {subItem.title}
                                          </div>
                                          <div className="text-[11px] text-slate-500 font-normal truncate mt-0.5">
                                            {subItem.desc}
                                          </div>
                                        </div>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Dropdown Footer Action */}
                          <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                            <span className="text-[11px] text-slate-500 font-medium">
                              Karnataka State Syllabus Class 6–10 Digital Labs
                            </span>
                            <Link
                              to="/education/explore"
                              onClick={() => setActiveDropdown(null)}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white text-xs font-bold transition-all shadow-2xs"
                            >
                              <span>Explore All Subjects</span>
                              <ArrowRight size={12} />
                            </Link>
                          </div>
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right Action Button */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
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
        </div>

        {/* Mobile Menu Trigger */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            className="p-2 text-slate-800 hover:text-[#4f47e6] liquid-glass-pill rounded-xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* =========================================================
          MOBILE DRAWER NAVIGATION
         ========================================================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden fixed inset-x-0 top-[3.75rem] liquid-glass border-b border-slate-200 shadow-xl p-5 overflow-y-auto max-h-[calc(100vh-3.75rem)]"
          >
            <div className="flex flex-col space-y-2">
              <div className="text-[11px] font-mono tracking-widest text-[#4f47e6] uppercase mb-1 font-bold">
                Navigation
              </div>

              {navItems.map((item) => {
                const active = isItemActive(item);

                // For dropdown items in mobile, render collapsible groups
                if (item.hasDropdown === "community") {
                  const isExpanded = mobileExpanded === "community";
                  return (
                    <div key={item.label} className="rounded-xl overflow-hidden border border-slate-200/70 bg-white/60">
                      <div className="flex items-center justify-between p-3">
                        <Link
                          to="/community"
                          onClick={() => setOpen(false)}
                          className="font-bold text-sm text-slate-900 flex items-center gap-2"
                        >
                          <Users size={16} className="text-[#4f47e6]" />
                          <span>Community Hub</span>
                        </Link>
                        <button
                          onClick={() => setMobileExpanded(isExpanded ? null : "community")}
                          className="p-1 text-slate-500 hover:text-slate-900"
                        >
                          <ChevronDown size={16} className={`transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                        </button>
                      </div>

                      {isExpanded && (
                        <div className="p-2 pt-0 space-y-1 bg-slate-50/50 border-t border-slate-100">
                          {communityDropdownSections.flatMap((s) => s.items).map((sub) => (
                            <Link
                              key={sub.title}
                              to={sub.href}
                              onClick={() => setOpen(false)}
                              className="flex items-center justify-between p-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#4f47e6] hover:bg-white"
                            >
                              <span>{sub.title}</span>
                              <ArrowRight size={12} className="opacity-40" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                if (item.hasDropdown === "education") {
                  const isExpanded = mobileExpanded === "education";
                  return (
                    <div key={item.label} className="rounded-xl overflow-hidden border border-slate-200/70 bg-white/60">
                      <div className="flex items-center justify-between p-3">
                        <Link
                          to="/education"
                          onClick={() => setOpen(false)}
                          className="font-bold text-sm text-slate-900 flex items-center gap-2"
                        >
                          <GraduationCap size={16} className="text-blue-600" />
                          <span>Education Hub</span>
                        </Link>
                        <button
                          onClick={() => setMobileExpanded(isExpanded ? null : "education")}
                          className="p-1 text-slate-500 hover:text-slate-900"
                        >
                          <ChevronDown size={16} className={`transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                        </button>
                      </div>

                      {isExpanded && (
                        <div className="p-2 pt-0 space-y-1 bg-slate-50/50 border-t border-slate-100">
                          {educationDropdownSections.flatMap((s) => s.items).map((sub) => (
                            <Link
                              key={sub.title}
                              to={sub.href}
                              onClick={() => setOpen(false)}
                              className="flex items-center justify-between p-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-blue-600 hover:bg-white"
                            >
                              <span>{sub.title}</span>
                              <ArrowRight size={12} className="opacity-40" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

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
                    <span>{item.label}</span>
                    <ArrowRight size={14} className={active ? "text-[#4f47e6]" : "opacity-40"} />
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-slate-100">
                <Button
                  asChild
                  className="w-full bg-[#4f47e6] hover:bg-[#4338ca] text-white font-semibold rounded-xl h-11 text-sm shadow-[0_4px_14px_rgba(79,71,230,0.3)]"
                >
                  <Link to="/contact" onClick={() => setOpen(false)}>
                    Start a Project
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
