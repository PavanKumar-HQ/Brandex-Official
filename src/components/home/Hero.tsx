import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";

const EarthGlobe = lazy(() => import("@/components/home/EarthGlobe"));

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const headlines = [
  "Technology.",
  "Automation.",
  "Infrastructure.",
  "Growth.",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-10 lg:pt-32 lg:pb-12 bg-background border-b border-border/40 w-full">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      
      {/* Subtle ambient light */}
      <div className="absolute top-16 right-10 w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-accent/[0.03] blur-[80px] pointer-events-none" />

      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Original Hero Text & CTAs */}
          <motion.div
            className="lg:col-span-7"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Badge */}
            <motion.div variants={item}>
              <div className="liquid-glass-pill inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-[#475fd1] text-xs sm:text-sm font-mono font-bold tracking-wider uppercase mb-5 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#475fd1] animate-pulse" />
                End-to-End Technology &amp; Business Solutions
              </div>
            </motion.div>

            {/* Stacked headline */}
            <motion.h1
              variants={item}
              className="font-display text-4xl sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-bold leading-[1.08] tracking-tight text-foreground mb-6"
            >
              {headlines.map((word, i) => (
                <span
                  key={word}
                  className={`block ${i === 3 ? "text-gradient" : ""}`}
                >
                  {word}
                </span>
              ))}
            </motion.h1>

            <motion.p
              variants={item}
              className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10 font-normal"
            >
              Helping businesses build, automate, secure, design, and scale through modern technology solutions.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap items-center gap-4">
              <MagneticWrapper>
                <Button
                  asChild
                  size="lg"
                  className="group bg-[#475fd1] hover:bg-[#3b51be] text-white h-13 sm:h-14 px-8 sm:px-10 rounded-full text-base sm:text-lg font-semibold shadow-lg shadow-[#475fd1]/25 hover:shadow-xl hover:shadow-[#475fd1]/35 transition-all duration-300"
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    <span>Get Free Consultation</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </MagneticWrapper>
              
              <MagneticWrapper strength={0.1}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-13 sm:h-14 px-8 sm:px-10 rounded-full text-base sm:text-lg font-semibold border-slate-300 hover:border-[#4f47e6]/60 hover:bg-[#4f47e6]/5 text-slate-900 transition-all duration-300 bg-white"
                >
                  <Link to="/services">Explore Services</Link>
                </Button>
              </MagneticWrapper>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Earth Globe with authentic GIS Natural Earth projection (No bubble, no cards) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full max-w-[540px] aspect-square relative flex items-center justify-center">
              <Suspense
                fallback={
                  <div className="w-full h-full rounded-full bg-slate-900/10 animate-pulse flex items-center justify-center text-xs text-muted-foreground font-mono">
                    Initializing 3D Telemetry...
                  </div>
                }
              >
                <EarthGlobe />
              </Suspense>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
