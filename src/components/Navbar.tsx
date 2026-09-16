import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
  sectionId?: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/", sectionId: "hero" },
  { label: "Services", href: "/services", sectionId: "services" },
  { label: "Case Studies", href: "/case-studies", sectionId: "case-studies" },
  { label: "Education", href: "/education" },
  { label: "Community", href: "/community" },
  { label: "Pricing", href: "/#pricing", sectionId: "pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (pathname === "/") {
        const sections = ["hero", "features", "clients", "services", "case-studies", "ecosystem", "testimonials", "pricing", "blog", "faq", "contact"];
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
    if (pathname === "/" && item.sectionId) {
      if (item.sectionId === "hero" && (activeSection === "hero" || activeSection === "features" || activeSection === "clients")) return true;
      if (item.sectionId === "services" && activeSection === "services") return true;
      if (item.sectionId === "case-studies" && activeSection === "case-studies") return true;
      if (item.sectionId === "ecosystem" && activeSection === "ecosystem") return true;
      if (item.sectionId === "pricing" && (activeSection === "pricing" || activeSection === "testimonials" || activeSection === "faq")) return true;
      if (item.sectionId === "contact" && activeSection === "contact") return true;
      return false;
    }
    return pathname === item.href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "liquid-glass border-b border-slate-200/60 py-3"
          : "bg-transparent py-4 md:py-5"
      }`}
    >
      <div className="w-full max-w-[1700px] mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Brand Logo */}
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

        {/* Desktop Liquid Glass Navigation Capsule with ScrollSpy Pill */}
        <nav className="hidden lg:flex items-center gap-1 liquid-glass-pill px-3 py-1.5 rounded-full">
          {navItems.map((item) => {
            const active = isItemActive(item);
            return (
              <Link
                key={item.label}
                to={item.href}
                onClick={(e) => handleNavClick(item, e)}
                className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 rounded-full z-10 ${
                  active
                    ? "text-[#4f47e6]"
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
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
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

        {/* Mobile menu trigger */}
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

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden fixed inset-x-0 top-[4rem] liquid-glass border-b border-slate-200 shadow-xl p-6 overflow-y-auto max-h-[calc(100vh-4rem)]"
          >
            <div className="flex flex-col space-y-1.5">
              <div className="text-[11px] font-mono tracking-widest text-[#4f47e6] uppercase mb-2 font-bold">
                Navigation
              </div>
              {navItems.map((item) => {
                const active = isItemActive(item);
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
