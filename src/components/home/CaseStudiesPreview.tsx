import { Link } from "react-router-dom";
import { ArrowRight, Link2, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { projects } from "@/data/projects";

export default function CaseStudiesPreview() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);

    // Calculate approximate active slide
    const cardWidth = el.firstElementChild ? (el.firstElementChild as HTMLElement).offsetWidth + 24 : 380;
    const currentIdx = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.min(projects.length - 1, Math.max(0, currentIdx)));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    updateScrollState();
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByAmount = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild ? (el.firstElementChild as HTMLElement).offsetWidth + 24 : 380;
    el.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth"
    });
  };

  const scrollToIndex = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[idx] as HTMLElement;
    if (card) {
      el.scrollTo({ left: card.offsetLeft - 24, behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 lg:py-14 border-b border-slate-200/60 relative overflow-hidden" id="case-studies">
      {/* Subtle Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-accent/[0.03] blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header with Clean Separation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-[#475fd1] uppercase mb-3 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#475fd1] animate-pulse" />
              Case Studies &amp; Products
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
              Results that speak for <span className="text-[#475fd1]">themselves</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Explore production software, automated operational pipelines, and high-performance digital platforms built by Brandex.
            </p>
          </motion.div>

          {/* View All Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 self-start md:self-end shrink-0"
          >
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2.5 bg-white hover:bg-[#475fd1] text-slate-900 hover:text-white border-2 border-slate-200 hover:border-[#475fd1] px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-xs hover:shadow-lg hover:shadow-[#475fd1]/25 transition-all duration-300 group"
            >
              <span>View All Case Studies</span>
              <div className="w-5 h-5 rounded-full bg-slate-100 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                <ArrowRight size={12} className="text-[#475fd1] group-hover:text-white group-hover:translate-x-0.5 transition-all" />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Carousel Container with Responsive Touch Snap & Clean Desktop Flanking Arrows */}
        <div className="relative group/carousel">
          {/* Left Arrow Button (Desktop only - mobile uses native touch swipe) */}
          <button
            onClick={() => scrollByAmount("left")}
            disabled={!canScrollLeft}
            aria-label="Previous case study"
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-card/95 backdrop-blur-md border-2 border-border shadow-xl items-center justify-center text-foreground hover:bg-accent hover:border-accent hover:text-white transition-all duration-200 disabled:opacity-0 disabled:pointer-events-none hover:scale-105 active:scale-95"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Right Arrow Button (Desktop only) */}
          <button
            onClick={() => scrollByAmount("right")}
            disabled={!canScrollRight}
            aria-label="Next case study"
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-card/95 backdrop-blur-md border-2 border-border shadow-xl items-center justify-center text-foreground hover:bg-accent hover:border-accent hover:text-white transition-all duration-200 disabled:opacity-0 disabled:pointer-events-none hover:scale-105 active:scale-95"
          >
            <ChevronRight size={22} />
          </button>

          {/* Scrollable Track with Responsive Zero Overflow Margins */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:-mx-6 sm:px-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((cs, i) => (
              <div
                key={cs.id || cs.title}
                className="w-[82vw] sm:w-[360px] md:w-[380px] lg:w-[410px] max-w-[410px] flex-shrink-0 snap-start"
              >
                <CaseStudyCard cs={cs} index={i} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${i === activeIndex
                  ? "w-7 h-2 bg-accent shadow-sm"
                  : "w-2 h-2 bg-border/80 hover:bg-muted-foreground"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Shared Card Component ─── */
function CaseStudyCard({ cs, index }: { cs: (typeof projects)[0]; index: number }) {
  const targetUrl =
    cs.id === "travel-crm"
      ? "/products/travel-crm"
      : cs.id === "invoice-builder"
        ? "/products/invoice-builder"
        : `/case-studies/${cs.id}`;

  const isProduct = cs.id === "travel-crm" || cs.id === "invoice-builder";

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="h-full"
    >
      <Link
        to={targetUrl}
        className="block group bg-card border border-border/70 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-accent/[0.07] hover:border-accent/40 transition-all duration-300 h-full flex flex-col cursor-pointer"
      >
        {/* Mockup Thumbnail */}
        <div className="aspect-[16/10] relative overflow-hidden bg-secondary border-b border-border/50">
          <div className="absolute inset-0 bg-accent/[0.02] group-hover:bg-accent/[0.06] transition-colors duration-500 z-10" />

          <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.03]">
            {cs.id === "travel-crm" ? (
              <div className="w-full h-full relative">
                <div className="absolute top-0 left-0 right-0 h-6 bg-background/90 backdrop-blur border-b border-border/50 flex items-center px-3 gap-1.5 z-10">
                  <div className="w-2 h-2 rounded-full bg-destructive/60" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                  <div className="w-2 h-2 rounded-full bg-green-500/60" />
                  <span className="ml-2 text-[10px] font-mono text-muted-foreground">app.brandex.co.in/travel-crm</span>
                </div>
                <img
                  src="/projects/travel-crm/travel-crm-pdf-builder-preview.webp"
                  alt={cs.title}
                  className="w-full h-full object-cover object-top pt-6"
                  loading="lazy"
                />
              </div>
            ) : cs.id === "invoice-builder" ? (
              <div className="w-full h-full relative">
                <div className="absolute top-0 left-0 right-0 h-6 bg-background/90 backdrop-blur border-b border-border/50 flex items-center px-3 gap-1.5 z-10">
                  <div className="w-2 h-2 rounded-full bg-destructive/60" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                  <div className="w-2 h-2 rounded-full bg-green-500/60" />
                  <span className="ml-2 text-[10px] font-mono text-muted-foreground">app.brandex.co.in/invoice-builder</span>
                </div>
                <img
                  src="/products/invoice-builder/brandex-invoice-builder-dashboard.webp"
                  alt={cs.title}
                  className="w-full h-full object-cover object-top pt-6"
                  loading="lazy"
                />
              </div>
            ) : cs.url && cs.url.startsWith("http") ? (
              <div className="w-full h-full relative">
                <div className="absolute top-0 left-0 right-0 h-6 bg-background/90 backdrop-blur border-b border-border/50 flex items-center px-3 gap-1.5 z-10">
                  <div className="w-2 h-2 rounded-full bg-destructive/60" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                  <div className="w-2 h-2 rounded-full bg-green-500/60" />
                  <span className="ml-2 text-[10px] font-mono text-muted-foreground truncate">
                    {cs.url.replace("https://", "").replace("http://", "")}
                  </span>
                </div>
                <img
                  src={`https://s.wordpress.com/mshots/v1/${encodeURIComponent(cs.url)}?w=800`}
                  alt={cs.title}
                  className="w-full h-full object-cover object-top pt-6"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center p-6 bg-secondary">
                {cs.logo ? (
                  <img src={cs.logo} alt={cs.title} className="max-w-[120px] max-h-16 object-contain" />
                ) : (
                  <span className="text-sm font-medium text-muted-foreground">Brandex Architecture</span>
                )}
              </div>
            )}
          </div>

          {/* Hover Overlay with Result */}
          <div className="absolute inset-0 bg-primary/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-center z-20">
            <span className="text-primary-foreground font-display text-2xl font-bold mb-1.5">{cs.result}</span>
            <span className="text-primary-foreground/70 text-xs line-clamp-2 max-w-xs">{cs.challenge}</span>
            <span className="mt-4 px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-md">
              {isProduct ? "View Product & Pricing" : "View Case Study"} <Link2 size={13} />
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="text-[10px] font-bold text-accent uppercase tracking-wider px-2.5 py-0.5 bg-accent/10 rounded">
              {cs.category}
            </span>
            {cs.duration && (
              <span className="text-[10px] text-muted-foreground font-medium">{cs.duration}</span>
            )}
          </div>
          <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-1">
            {cs.title}
          </h3>
          <p className="text-xs text-muted-foreground mb-4 flex-1 line-clamp-2 leading-relaxed">
            {cs.description}
          </p>
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/50">
            {cs.tech.slice(0, 4).map((t) => (
              <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-secondary text-muted-foreground font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
