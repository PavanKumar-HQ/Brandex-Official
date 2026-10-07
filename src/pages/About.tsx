import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Target, Eye, Heart, Users, Shield, Zap, Clock, TrendingUp, Star, CheckCircle, Globe, Layers } from "lucide-react";
import TeamSection from "@/components/about/TeamSection";
import CTABanner from "@/components/home/CTABanner";
import SEOTags from "@/components/SEOTags";
import Breadcrumb from "@/components/Breadcrumb";
import { motion } from "framer-motion";

const values = [
  {
    icon: Target,
    title: "Purpose-Driven",
    description: "Every line of code serves a business goal. We don't build for the sake of building — we build to create real impact.",
  },
  {
    icon: Eye,
    title: "Clarity Over Complexity",
    description: "Simple solutions to complex problems. We believe the best technology is invisible — it just works.",
  },
  {
    icon: Heart,
    title: "Craft & Care",
    description: "We treat every project like our own. Attention to detail, clean code, and thoughtful design are non-negotiable.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We're not just vendors — we're your digital team. We grow with you, iterate with you, and succeed with you.",
  },
];

const whyChoose = [
  {
    icon: Layers,
    title: "One Technology Partner",
    description: "Software, AI, branding, infrastructure, printing, and interiors — all from one trusted company.",
  },
  {
    icon: Globe,
    title: "End-to-End Solutions",
    description: "We don't hand off work. We own the entire project lifecycle from strategy to delivery to support.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Our team has built software, AI systems, and physical infrastructure for businesses across 20+ industries.",
  },
  {
    icon: CheckCircle,
    title: "Transparent Pricing",
    description: "No surprise charges. We give you a clear, detailed proposal before any work begins.",
  },
  {
    icon: Shield,
    title: "Secure by Design",
    description: "Security isn't an afterthought. Every system we build is designed with security best practices from day one.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "We build for where you're going, not just where you are. All our solutions are designed to scale with your growth.",
  },
  {
    icon: Zap,
    title: "AI Ready",
    description: "Every solution we deliver is built to integrate AI capabilities — today or in the future.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "We move fast without cutting corners. Our processes are optimized for speed and quality at the same time.",
  },
  {
    icon: Star,
    title: "Long-Term Support",
    description: "We don't disappear after launch. AMCs, maintenance retainers, and dedicated support keep you covered.",
  },
  {
    icon: Heart,
    title: "Business First Approach",
    description: "We always ask: does this decision grow the business? Technology serves business goals — not the other way around.",
  },
];

export default function AboutPage() {
  useScrollReveal();

  return (
    <>
      <SEOTags 
        title="About Brandex | Technology Leadership & Engineering Philosophy"
        description="Meet Brandex — a technology, digital transformation, and custom software company based in Bangalore, India. Founded by Sathvik Nagesh and Pavan Kumar S."
        keywords="about brandex, sathvik nagesh, pavan kumar s, technology company bangalore, software agency vijaynagar, custom software development"
        canonicalUrl="https://www.brandex.co.in/about"
        type="profile"
        image="https://www.brandex.co.in/og/about.png"
        schema={[
          {
            "@type": "AboutPage",
            "@id": "https://www.brandex.co.in/about#webpage",
            "name": "About Brandex",
            "description": "Learn about Brandex — an end-to-end Technology and Business Solutions Company headquartered in Vijaynagar, Bangalore, India.",
            "url": "https://www.brandex.co.in/about",
            "isPartOf": { "@id": "https://www.brandex.co.in/#website" },
            "about": { "@id": "https://www.brandex.co.in/#organization" }
          },
          {
            "@type": "Person",
            "@id": "https://www.brandex.co.in/about#sathvik-nagesh",
            "name": "Sathvik Nagesh",
            "jobTitle": "Founder & Chief Technology Officer",
            "description": "Sathvik Nagesh leads technology, engineering, and product vision at Brandex.",
            "worksFor": { "@id": "https://www.brandex.co.in/#organization" },
            "knowsAbout": ["Software Development", "AI Engineering", "Cloud Architecture", "Cybersecurity"]
          },
          {
            "@type": "Person",
            "@id": "https://www.brandex.co.in/about#pavan-kumar",
            "name": "Pavan Kumar S",
            "jobTitle": "Co-founder & Chief Executive Officer",
            "description": "Pavan Kumar S drives company vision, institutional university partnerships, student ecosystem growth, and executive operations at Brandex.",
            "worksFor": { "@id": "https://www.brandex.co.in/#organization" },
            "knowsAbout": ["Executive Leadership", "Strategic Partnerships", "Technology Education", "Enterprise Operations"]
          }
        ]}
      />
      {/* 1. FUSED ABOUT BRANDEX & MISSION SECTION */}
      <section className="pt-4 sm:pt-6 pb-10 sm:pb-12 lg:pb-14 bg-white relative overflow-hidden border-b border-slate-200/80">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <Breadcrumb items={[{ label: "About Brandex" }]} className="mb-6" />
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6 scroll-reveal">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#475fd1]/10 border border-[#475fd1]/20 text-[#475fd1] text-xs font-mono font-bold tracking-wider uppercase shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#475fd1] animate-pulse" />
                About Brandex &amp; Our Mission
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                The technology partner businesses trust to <span className="text-[#475fd1]">build, automate &amp; scale</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal">
                Headquartered in Vijaynagar, Bangalore, Brandex is an end-to-end Technology, Digital Transformation, Business Solutions, and Infrastructure Company founded in 2023. We help ambitious companies engineer custom software, automate mission-critical operations, build modern web platforms, and secure digital infrastructure.
              </p>

              {/* Fused Mission Statement */}
              <div className="p-6 rounded-2xl bg-[#f8fafd] border border-slate-200/90 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#475fd1]">
                  <Target size={14} className="text-[#475fd1]" />
                  <span>Our Mission</span>
                </div>
                <p className="text-base text-slate-700 leading-relaxed">
                  Brandex exists to be the definitive, single technology partner for every growing business. We eliminate the friction and compounding cost of juggling multiple disjointed agencies by delivering everything under one roof — high-performance software engineering, AI agent pipelines, zero-trust cloud setups, branding, and physical digital infrastructure.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  We don't build bloated enterprise shelf-ware. We deliver lean, fast, secure architectures that generate measurable business ROI and remain 100% owned by our clients from day one.
                </p>
              </div>

              {/* Verified Commitments */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                  <span className="block text-xs font-mono font-bold text-[#475fd1] uppercase">Ownership</span>
                  <span className="text-xs font-semibold text-slate-800">100% Source Code Handover</span>
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                  <span className="block text-xs font-mono font-bold text-[#475fd1] uppercase">Performance</span>
                  <span className="text-xs font-semibold text-slate-800">95+ Core Web Vitals</span>
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white col-span-2 sm:col-span-1">
                  <span className="block text-xs font-mono font-bold text-[#475fd1] uppercase">Headquarters</span>
                  <span className="text-xs font-semibold text-slate-800">Vijaynagar, Bangalore</span>
                </div>
              </div>
            </div>

            {/* Right Card / Visual Entity */}
            <div className="lg:col-span-5 scroll-reveal scroll-reveal-delay-2">
              <div className="bg-[#f8fafd] border-2 border-slate-200 rounded-3xl p-8 sm:p-10 shadow-sm relative overflow-hidden flex flex-col justify-between space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#475fd1] bg-[#475fd1]/10 px-3 py-1 rounded-full">
                    Entity Profile
                  </span>
                  <span className="text-xs font-mono font-semibold text-slate-500">
                    Est. 2023
                  </span>
                </div>

                <div className="flex justify-center py-4">
                  <img
                    src="/main_logo.webp"
                    alt="Brandex"
                    className="max-w-[260px] sm:max-w-[300px] w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-200">
                  <div className="flex items-start justify-between text-xs">
                    <span className="text-slate-500 font-medium">Headquarters</span>
                    <span className="text-slate-800 font-semibold text-right">#121, 13th Main, Vijaynagar, BLR</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">GSTIN</span>
                    <span className="font-mono font-semibold text-slate-800">29OGNPS8060K1Z5</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">Contact</span>
                    <span className="font-mono font-semibold text-[#475fd1]">+91 94809 44727</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">Email</span>
                    <span className="font-mono font-semibold text-slate-800">team@brandex.co.in</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUNDERS SECTION (PLACED AS 2ND SECTION DIRECTLY AFTER ABOUT & MISSION) */}
      <TeamSection />

      {/* 3. Values */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200/80">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="max-w-2xl mb-10 scroll-reveal">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#475fd1]/10 text-[#475fd1] text-xs font-mono font-bold tracking-wider uppercase mb-3">
              Core Principles
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">What we stand for</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              These principles guide every architectural decision we make and every product we ship.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div key={v.title} className={`scroll-reveal scroll-reveal-delay-${i + 1} p-5 sm:p-6 bg-[#f8fafd] border border-slate-200/90 rounded-2xl hover:border-[#475fd1]/40 transition-all`}>
                <div className="w-11 h-11 rounded-xl bg-[#475fd1]/10 flex items-center justify-center mb-4 text-[#475fd1]">
                  <v.icon size={20} />
                </div>
                <h3 className="font-display font-bold text-base text-slate-900 mb-1.5">{v.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Brandex */}
      <section className="py-12 lg:py-16 bg-[#f8fafd] border-b border-slate-200/80">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-center max-w-2xl mx-auto mb-10 scroll-reveal">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#475fd1] mb-2">Why Us</p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Why choose <span className="text-[#475fd1]">Brandex</span>?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We deliver complete digital transformation and engineering solutions — not just standalone code.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {whyChoose.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="p-4 bg-white border border-slate-200/90 rounded-2xl hover:border-[#475fd1]/50 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#475fd1]/10 flex items-center justify-center mb-3 text-[#475fd1]">
                    <Icon size={16} />
                  </div>
                  <h3 className="font-display font-bold text-xs sm:text-sm text-slate-900 mb-1.5">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Vision */}
      <section className="py-14 lg:py-18 bg-[#111d36] text-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center max-w-3xl scroll-reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-slate-300 text-xs font-mono font-bold tracking-wider uppercase mb-4">
            Our Vision
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Enterprise-Grade Technology for Every Ambitious Business
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            A world where every business — regardless of scale — has direct access to the same high-performance technology, AI workflows, and digital infrastructure that powers global enterprises. We are building that future with our clients.
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
