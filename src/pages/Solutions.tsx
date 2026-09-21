import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  UtensilsCrossed, CalendarCheck, BarChart3, Zap, ArrowRight, ArrowLeft, Search,
  ShoppingCart, GraduationCap, Building2, Truck, Stethoscope,
  HeadphonesIcon, CreditCard, Megaphone
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";

const categories = ["All", "Operations", "Customer-Facing", "Analytics", "Industry-Specific"];

const solutions = [
  {
    icon: UtensilsCrossed,
    title: "Restaurant Ordering Systems",
    category: "Industry-Specific",
    description: "Digital menus, online ordering, kitchen display systems, and delivery management — all integrated into one platform your staff and customers will love.",
    workflow: [
      { step: "Browse Menu", detail: "Customers view your digital menu with photos and descriptions" },
      { step: "Place Order", detail: "Orders placed online or in-store go directly to your kitchen" },
      { step: "Track & Deliver", detail: "Real-time tracking with automatic inventory updates" },
    ],
  },
  {
    icon: CalendarCheck,
    title: "Appointment Booking Platforms",
    category: "Customer-Facing",
    description: "Let customers book, reschedule, and manage appointments 24/7. Automated confirmations, reminders, and follow-ups keep your schedule full and no-shows low.",
    workflow: [
      { step: "Pick a Time", detail: "Customers choose from your real-time availability" },
      { step: "Auto-Confirm", detail: "Instant confirmation via email and SMS" },
      { step: "Remind & Follow Up", detail: "Automated reminders reduce no-shows by up to 60%" },
    ],
  },
  {
    icon: BarChart3,
    title: "Business Dashboards",
    category: "Analytics",
    description: "See your entire business at a glance. Real-time metrics, visual reports, and actionable insights — all customized to the KPIs that matter to you.",
    workflow: [
      { step: "Connect Data", detail: "Pull data from all your tools and systems" },
      { step: "Visualize", detail: "Auto-generated charts, tables, and real-time metrics" },
      { step: "Decide", detail: "Actionable insights that drive better business decisions" },
    ],
  },
  {
    icon: Zap,
    title: "Automation Tools",
    category: "Operations",
    description: "Connect your apps, eliminate repetitive tasks, and build workflows that run on autopilot. From invoicing to customer onboarding — automate it all.",
    workflow: [
      { step: "Define Triggers", detail: "Set conditions that start your automated workflows" },
      { step: "Execute Actions", detail: "Tasks run automatically across all connected tools" },
      { step: "Monitor & Report", detail: "Track performance and get alerts when attention is needed" },
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Platforms",
    category: "Customer-Facing",
    description: "Custom online stores with inventory management, payment processing, and seamless checkout experiences that convert browsers into buyers.",
    workflow: [
      { step: "Browse & Search", detail: "Customers explore products with filters and smart search" },
      { step: "Cart & Checkout", detail: "Frictionless checkout with multiple payment options" },
      { step: "Fulfill & Track", detail: "Automated order fulfillment with real-time shipping updates" },
    ],
  },
  {
    icon: GraduationCap,
    title: "Learning Management Systems",
    category: "Industry-Specific",
    description: "Custom LMS platforms with course creation, progress tracking, certifications, and interactive content for training companies and educational institutions.",
    workflow: [
      { step: "Create Courses", detail: "Build interactive lessons with video, quizzes, and assignments" },
      { step: "Track Progress", detail: "Monitor learner engagement and completion rates" },
      { step: "Certify", detail: "Automated certificates and compliance reporting" },
    ],
  },
  {
    icon: Building2,
    title: "Real Estate Portals",
    category: "Industry-Specific",
    description: "Property listing platforms with virtual tours, lead management, and automated matching — connecting buyers, sellers, and agents seamlessly.",
    workflow: [
      { step: "List Properties", detail: "Upload listings with photos, floor plans, and virtual tours" },
      { step: "Match & Alert", detail: "AI-powered matching notifies buyers of relevant properties" },
      { step: "Close Deals", detail: "Document management and e-signing for faster closings" },
    ],
  },
  {
    icon: Truck,
    title: "Logistics & Fleet Management",
    category: "Operations",
    description: "Track shipments, optimize routes, manage drivers, and automate dispatch — all from a single dashboard built for logistics companies.",
    workflow: [
      { step: "Plan Routes", detail: "AI-optimized routing to reduce fuel costs and delivery times" },
      { step: "Track Live", detail: "Real-time GPS tracking with automated status updates" },
      { step: "Report & Optimize", detail: "Performance analytics and cost optimization insights" },
    ],
  },
  {
    icon: Stethoscope,
    title: "Healthcare Portals",
    category: "Industry-Specific",
    description: "Patient portals, telemedicine integrations, and health record management systems that are secure and built for modern healthcare providers.",
    workflow: [
      { step: "Patient Onboarding", detail: "Digital intake forms and insurance verification" },
      { step: "Virtual Visits", detail: "Integrated telemedicine with secure video calls" },
      { step: "Records & Billing", detail: "Centralized records with automated billing workflows" },
    ],
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Support Systems",
    category: "Customer-Facing",
    description: "Helpdesk and ticketing systems with live chat, knowledge bases, and AI-powered responses that keep your customers happy and your team efficient.",
    workflow: [
      { step: "Submit Ticket", detail: "Multi-channel intake via chat, email, or form" },
      { step: "Route & Prioritize", detail: "Smart routing to the right agent with SLA tracking" },
      { step: "Resolve & Learn", detail: "Resolution tracking with feedback and knowledge base updates" },
    ],
  },
  {
    icon: CreditCard,
    title: "Invoicing & Payments",
    category: "Operations",
    description: "Automated invoicing, payment collection, and financial reporting — eliminate manual billing and get paid faster with custom payment workflows.",
    workflow: [
      { step: "Generate Invoice", detail: "Auto-create invoices from project data or time tracking" },
      { step: "Collect Payment", detail: "Multiple payment methods with automated reminders" },
      { step: "Reconcile", detail: "Automatic reconciliation with accounting software" },
    ],
  },
  {
    icon: Megaphone,
    title: "Marketing Automation",
    category: "Analytics",
    description: "Email campaigns, lead scoring, funnel tracking, and multi-channel marketing — all automated and tied to real conversion data.",
    workflow: [
      { step: "Capture Leads", detail: "Landing pages and forms that feed your CRM automatically" },
      { step: "Nurture", detail: "Automated email sequences personalized to each lead" },
      { step: "Convert & Measure", detail: "Attribution tracking across every marketing channel" },
    ],
  },
];

export default function SolutionsPage() {
  useScrollReveal();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = solutions.filter((s) => {
    const matchesSearch = s.title.toLowerCase().includes(search.toLowerCase()) || s.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || s.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEOHead
        title="Industry Solutions & Business Systems | Brandex"
        description="Explore proven digital blueprints and automated workflows engineered for restaurants, clinics, logistics, and service enterprises."
        canonicalUrl="/solutions"
      />

      <section className="pt-24 pb-12 lg:pt-28 lg:pb-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6">
          {/* Back link */}
          <div className="mb-6">
            <Link
              to="/"
              className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-[#4f47e6] transition-colors"
            >
              <ArrowLeft size={13} /> Back to Home
            </Link>
          </div>

          <div className="max-w-3xl scroll-reveal">
            <div className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-widest text-[#4f47e6] uppercase mb-4 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
              Industry Blueprints
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Turnkey systems <span className="text-[#4f47e6]">engineered for scale</span>.
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              Proven digital products and automation engines that eliminate operational bottlenecks out of the box.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-[#4f47e6] text-white shadow-2xs"
                      : "liquid-glass-pill text-slate-700 hover:text-slate-950 hover:bg-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-72">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search solutions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 h-10 rounded-xl bg-white/80 border-slate-200 focus:border-[#4f47e6] focus:ring-1 focus:ring-[#4f47e6] text-xs font-medium text-slate-900"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="pb-24 lg:pb-32 bg-white">
        <div className="container mx-auto px-6">
          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((sol, i) => (
                <motion.div
                  key={sol.title}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group liquid-glass-card hover:bg-white/95 rounded-3xl p-7 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center mb-5 shadow-2xs group-hover:scale-105 transition-all duration-300">
                      <sol.icon size={22} className="text-[#4f47e6]" />
                    </div>
                    <span className="liquid-glass-pill text-[10px] font-mono font-bold text-[#4f47e6] uppercase tracking-wider px-2.5 py-0.5 rounded-md">{sol.category}</span>
                    <h3 className="font-display text-xl font-bold text-slate-900 mt-3 mb-2 group-hover:text-[#4f47e6] transition-colors">{sol.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">{sol.description}</p>

                    <div className="space-y-2 mb-6 pt-4 border-t border-slate-200/60">
                      {sol.workflow.map((w, j) => (
                        <div key={j} className="flex items-start gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-white text-[#4f47e6] border border-slate-200 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                            <span className="text-[10px] font-bold">{j + 1}</span>
                          </div>
                          <div>
                            <span className="text-xs font-bold text-slate-800">{w.step}</span>
                            <p className="text-[11px] text-slate-500 font-normal leading-tight">{w.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button asChild size="sm" className="bg-[#4f47e6] hover:bg-[#4338ca] text-white w-full rounded-xl h-10 font-semibold text-xs shadow-2xs">
                    <Link to="/contact">
                      <span>Build This Architecture</span>
                      <ArrowRight size={13} className="ml-1" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-slate-500 text-base">No solutions found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
