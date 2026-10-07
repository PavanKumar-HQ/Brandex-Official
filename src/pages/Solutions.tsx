import { useState, useMemo, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Globe, Code2, Brain, Building2, Camera, Palette, Megaphone, Printer,
  Home, Sofa, Wind, Zap, Sun, Wrench, Shield, Wifi, Package, ArrowRight,
  Search, Settings, Workflow, Briefcase, ChevronLeft, ChevronRight, FileText, ShoppingBag,
  Users, UtensilsCrossed, GraduationCap, Stethoscope, Mic, MessageSquare,
  PenTool, Contact, LayoutTemplate, MonitorPlay, Truck, Store, LayoutDashboard,
  DoorOpen, Presentation, Cpu, Key, Fingerprint, Flame, Network, Server, Cloud,
  Mail, Battery, BarChart, Share2, Video, Rocket, Check, CalendarDays
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import CTABanner from "@/components/home/CTABanner";
import { useCalBooking } from "@/hooks/useCalBooking";
import SEOTags from "@/components/SEOTags";
import Breadcrumb from "@/components/Breadcrumb";

// Define the type for a solution
type Solution = {
  category: string;
  title: string;
  description?: string;
  steps?: string[];
  includes?: string[];
  icon: any;
  color: string;
};

const solutions: Solution[] = [
  // DIGITAL SOLUTIONS
  {
    category: "Digital",
    title: "Business Website",
    description: "Professional websites designed to generate leads, establish credibility, and grow your business online.",
    steps: ["Plan", "Design", "Launch"],
    icon: Globe,
    color: "hsl(210 70% 50%)",
  },
  {
    category: "Digital",
    title: "E-Commerce Platform",
    steps: ["Browse Products", "Checkout", "Deliver Orders"],
    icon: ShoppingBag,
    color: "hsl(210 70% 50%)",
  },
  {
    category: "Digital",
    title: "CRM Solution",
    steps: ["Capture Leads", "Manage Customers", "Increase Sales"],
    icon: Users,
    color: "hsl(210 70% 50%)",
  },
  {
    category: "Digital",
    title: "ERP Platform",
    steps: ["Manage Operations", "Automate Processes", "Generate Reports"],
    icon: Settings,
    color: "hsl(210 70% 50%)",
  },
  {
    category: "Digital",
    title: "Inventory Management",
    steps: ["Track Inventory", "Manage Stock", "Optimize Purchasing"],
    icon: Package,
    color: "hsl(210 70% 50%)",
  },
  {
    category: "Digital",
    title: "Restaurant POS",
    steps: ["Take Orders", "Kitchen Processing", "Billing"],
    icon: UtensilsCrossed,
    color: "hsl(210 70% 50%)",
  },
  {
    category: "Digital",
    title: "School Management",
    steps: ["Admissions", "Student Portal", "Reports"],
    icon: GraduationCap,
    color: "hsl(210 70% 50%)",
  },
  {
    category: "Digital",
    title: "Hospital Management",
    steps: ["Patient Registration", "Appointments", "Billing"],
    icon: Stethoscope,
    color: "hsl(210 70% 50%)",
  },

  // AI & AUTOMATION
  {
    category: "AI & Automation",
    title: "AI Customer Assistant",
    steps: ["Customer Inquiry", "AI Response", "Qualified Lead"],
    icon: Brain,
    color: "hsl(270 55% 55%)",
  },
  {
    category: "AI & Automation",
    title: "AI Voice Receptionist",
    steps: ["Receive Calls", "Answer Questions", "Book Appointments"],
    icon: Mic,
    color: "hsl(270 55% 55%)",
  },
  {
    category: "AI & Automation",
    title: "Workflow Automation",
    steps: ["Trigger", "Process", "Notify"],
    icon: Workflow,
    color: "hsl(270 55% 55%)",
  },
  {
    category: "AI & Automation",
    title: "WhatsApp Automation",
    steps: ["Customer Message", "AI Reply", "CRM Updated"],
    icon: MessageSquare,
    color: "hsl(270 55% 55%)",
  },
  {
    category: "AI & Automation",
    title: "Document Automation",
    steps: ["Upload", "Extract Data", "Export"],
    icon: FileText,
    color: "hsl(270 55% 55%)",
  },

  // BRANDING
  {
    category: "Branding",
    title: "Complete Brand Identity",
    steps: ["Discover", "Design", "Deliver"],
    icon: Palette,
    color: "hsl(340 60% 52%)",
  },
  {
    category: "Branding",
    title: "Logo & Identity",
    steps: ["Research", "Concept", "Brand Guidelines"],
    icon: PenTool,
    color: "hsl(340 60% 52%)",
  },
  {
    category: "Branding",
    title: "Corporate Branding",
    steps: ["Strategy", "Visual Identity", "Implementation"],
    icon: Briefcase,
    color: "hsl(340 60% 52%)",
  },

  // PRINTING SOLUTIONS
  {
    category: "Printing",
    title: "Corporate Printing",
    steps: ["Design", "Print", "Deliver"],
    icon: Printer,
    color: "hsl(160 50% 45%)",
  },
  {
    category: "Printing",
    title: "Business Cards",
    steps: ["Design", "Approve", "Print"],
    icon: Contact,
    color: "hsl(160 50% 45%)",
  },
  {
    category: "Printing",
    title: "Office Branding",
    steps: ["Survey", "Produce", "Install"],
    icon: LayoutTemplate,
    color: "hsl(160 50% 45%)",
  },
  {
    category: "Printing",
    title: "Signage & ACP Boards",
    steps: ["Design", "Manufacture", "Install"],
    icon: MonitorPlay,
    color: "hsl(160 50% 45%)",
  },
  {
    category: "Printing",
    title: "Vehicle Branding",
    steps: ["Design", "Print", "Apply"],
    icon: Truck,
    color: "hsl(160 50% 45%)",
  },

  // INTERIOR DESIGN
  {
    category: "Interior",
    title: "Office Interior Design",
    steps: ["Consultation", "Design", "Execution"],
    icon: Home,
    color: "hsl(30 55% 48%)",
  },
  {
    category: "Interior",
    title: "Retail Interior",
    steps: ["Planning", "Build", "Launch"],
    icon: Store,
    color: "hsl(30 55% 48%)",
  },
  {
    category: "Interior",
    title: "Workspace Design",
    steps: ["Layout", "Furniture", "Final Setup"],
    icon: LayoutDashboard,
    color: "hsl(30 55% 48%)",
  },
  {
    category: "Interior",
    title: "Reception Design",
    steps: ["Concept", "Construction", "Finishing"],
    icon: DoorOpen,
    color: "hsl(30 55% 48%)",
  },

  // OFFICE SOLUTIONS
  {
    category: "Office Solutions",
    title: "Complete Office Setup",
    description: "Everything required to launch a modern office from a single partner.",
    steps: ["Planning", "Procurement", "Installation"],
    icon: Building2,
    color: "hsl(220 50% 45%)",
  },
  {
    category: "Office Solutions",
    title: "Office Furniture",
    steps: ["Select", "Customize", "Install"],
    icon: Sofa,
    color: "hsl(220 50% 45%)",
  },
  {
    category: "Office Solutions",
    title: "Meeting Room Solutions",
    steps: ["Design", "Install Equipment", "Commission"],
    icon: Presentation,
    color: "hsl(220 50% 45%)",
  },
  {
    category: "Office Solutions",
    title: "Smart Office Automation",
    steps: ["Connect", "Automate", "Control"],
    icon: Cpu,
    color: "hsl(220 50% 45%)",
  },

  // SECURITY
  {
    category: "Security",
    title: "CCTV Surveillance",
    steps: ["Site Survey", "Install", "Monitor"],
    icon: Camera,
    color: "hsl(0 60% 50%)",
  },
  {
    category: "Security",
    title: "Access Control",
    steps: ["Authentication", "Access", "Reporting"],
    icon: Key,
    color: "hsl(0 60% 50%)",
  },
  {
    category: "Security",
    title: "Biometric Attendance",
    steps: ["Register", "Track", "Generate Reports"],
    icon: Fingerprint,
    color: "hsl(0 60% 50%)",
  },
  {
    category: "Security",
    title: "Fire Safety Systems",
    steps: ["Detect", "Alert", "Protect"],
    icon: Flame,
    color: "hsl(0 60% 50%)",
  },

  // INFRASTRUCTURE
  {
    category: "Infrastructure",
    title: "Enterprise Networking",
    steps: ["Design", "Deploy", "Monitor"],
    icon: Network,
    color: "hsl(200 65% 50%)",
  },
  {
    category: "Infrastructure",
    title: "Server Infrastructure",
    steps: ["Configure", "Secure", "Maintain"],
    icon: Server,
    color: "hsl(200 65% 50%)",
  },
  {
    category: "Infrastructure",
    title: "Cloud Migration",
    steps: ["Assess", "Migrate", "Optimize"],
    icon: Cloud,
    color: "hsl(200 65% 50%)",
  },
  {
    category: "Infrastructure",
    title: "Microsoft 365 Setup",
    steps: ["Configure", "Train", "Support"],
    icon: Mail,
    color: "hsl(200 65% 50%)",
  },
  {
    category: "Infrastructure",
    title: "Commercial Air Conditioning",
    steps: ["Design", "Install", "Maintain"],
    icon: Wind,
    color: "hsl(195 65% 50%)",
  },
  {
    category: "Infrastructure",
    title: "Electrical Contracting",
    steps: ["Planning", "Installation", "Testing"],
    icon: Zap,
    color: "hsl(50 80% 48%)",
  },
  {
    category: "Infrastructure",
    title: "UPS & Backup Power",
    steps: ["Install", "Protect", "Monitor"],
    icon: Battery,
    color: "hsl(50 80% 48%)",
  },

  // SOLAR & ENERGY
  {
    category: "Energy",
    title: "Commercial Solar",
    steps: ["Survey", "Install", "Monitor"],
    icon: Sun,
    color: "hsl(45 90% 50%)",
  },
  {
    category: "Energy",
    title: "Energy Monitoring",
    steps: ["Measure", "Analyze", "Optimize"],
    icon: BarChart,
    color: "hsl(45 90% 50%)",
  },

  // MARKETING
  {
    category: "Marketing",
    title: "Digital Marketing",
    steps: ["Reach", "Convert", "Scale"],
    icon: Megaphone,
    color: "hsl(35 80% 50%)",
  },
  {
    category: "Marketing",
    title: "Social Media Management",
    steps: ["Plan", "Publish", "Grow"],
    icon: Share2,
    color: "hsl(35 80% 50%)",
  },
  {
    category: "Marketing",
    title: "Photography & Videography",
    steps: ["Shoot", "Edit", "Deliver"],
    icon: Video,
    color: "hsl(35 80% 50%)",
  },

  // INDUSTRY SOLUTIONS
  {
    category: "Industry Solutions",
    title: "Startup Launch Package",
    includes: ["Logo", "Branding", "Website", "Business Email", "Domain", "Business Cards", "Company Profile", "Social Media", "CRM"],
    icon: Rocket,
    color: "hsl(230 60% 55%)",
  },
  {
    category: "Industry Solutions",
    title: "Restaurant Complete Solution",
    includes: ["Branding", "Interior Design", "POS", "Menu Design", "Website", "Online Ordering", "CCTV", "Digital Marketing"],
    icon: UtensilsCrossed,
    color: "hsl(10 70% 52%)",
  },
  {
    category: "Industry Solutions",
    title: "Corporate Office Solution",
    includes: ["Interior Design", "Furniture", "CCTV", "Networking", "Smart Meeting Rooms", "Air Conditioning", "Printing", "Office Branding"],
    icon: Building2,
    color: "hsl(220 50% 45%)",
  },
  {
    category: "Industry Solutions",
    title: "Retail Store Solution",
    includes: ["Store Interior", "Signage", "POS", "Inventory", "CCTV", "Website"],
    icon: Store,
    color: "hsl(200 65% 50%)",
  },
  {
    category: "Industry Solutions",
    title: "Healthcare Solution",
    includes: ["Hospital Management Software", "Patient Portal", "CCTV", "Networking", "Queue Management"],
    icon: Stethoscope,
    color: "hsl(160 50% 45%)",
  },
  {
    category: "Industry Solutions",
    title: "Educational Institution Solution",
    includes: ["School ERP", "Attendance", "Smart Classrooms", "Website", "CCTV"],
    icon: GraduationCap,
    color: "hsl(270 55% 55%)",
  }
];

const categories = [
  "All",
  "Digital",
  "AI & Automation",
  "Branding",
  "Infrastructure",
  "Security",
  "Interior",
  "Office Solutions",
  "Printing",
  "Marketing",
  "Energy",
  "Industry Solutions"
];

export default function SolutionsPage() {
  useScrollReveal();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const { openBooking } = useCalBooking();

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -200 : 200, behavior: "smooth" });
    }
  };

  const filteredSolutions = useMemo(() => {
    return solutions.filter((sol) => {
      const matchesCategory = activeCategory === "All" || sol.category === activeCategory;
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch =
        sol.title.toLowerCase().includes(searchLower) ||
        (sol.description && sol.description.toLowerCase().includes(searchLower)) ||
        (sol.steps && sol.steps.some(step => step.toLowerCase().includes(searchLower))) ||
        (sol.includes && sol.includes.some(inc => inc.toLowerCase().includes(searchLower)));
      
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <>
      <SEOTags 
        title="Enterprise Business Solutions & Digital Infrastructure | Brandex"
        description="Explore 80+ integrated business solutions by Brandex: custom ERPs, CRM systems, e-commerce, WhatsApp automation, CCTV, networking, and digital infrastructure."
        keywords="enterprise business solutions, custom ERP solutions, CRM systems, business automation, IT networking, office infrastructure bangalore, brandex solutions"
        canonicalUrl="https://www.brandex.co.in/solutions"
        image="https://www.brandex.co.in/og/solutions.png"
        schema={{
          "@type": "CollectionPage",
          "@id": "https://www.brandex.co.in/solutions#webpage",
          "name": "Enterprise Business Solutions — Brandex",
          "description": "Comprehensive business solutions for ERP, e-commerce, automation, digital marketing, and physical IT infrastructure.",
          "url": "https://www.brandex.co.in/solutions",
          "isPartOf": { "@id": "https://www.brandex.co.in/#website" },
          "about": { "@id": "https://www.brandex.co.in/#organization" },
          "mainEntity": {
            "@type": "ItemList",
            "name": "Brandex Business Solutions",
            "numberOfItems": solutions.length,
            "itemListElement": solutions.slice(0, 20).map((sol, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": sol.title,
              "description": sol.description || `${sol.title} solution by Brandex`
            }))
          }
        }}
      />
      {/* Hero */}
      <section className="pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-20 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <Breadcrumb items={[{ label: "Solutions" }]} className="mb-6" />
          <div className="max-w-4xl mx-auto text-center scroll-reveal">
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">Complete Business Solutions</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Complete Business Solutions
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              From branding and business software to office infrastructure and automation, Brandex delivers complete solutions that help businesses launch, operate, and scale.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-5 sticky top-[4.25rem] z-40 bg-background/85 backdrop-blur-lg border-b border-border/40">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4">

            {/* Scroll left arrow */}
            <button
              onClick={() => scroll("left")}
              className="hidden sm:flex flex-shrink-0 w-8 h-8 items-center justify-center rounded-full border border-border/60 bg-background hover:border-accent/30 hover:text-accent transition-colors"
              aria-label="Scroll categories left"
            >
              <ChevronLeft size={16} aria-hidden="true" />
            </button>

            {/* Category chips — scrollable, no scrollbar */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-x-auto scrollbar-hide mask-edges"
            >
              <div className="flex gap-2 w-max py-0.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`whitespace-nowrap h-9 px-4 rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                      activeCategory === cat
                        ? "bg-foreground text-background shadow-sm"
                        : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Scroll right arrow */}
            <button
              onClick={() => scroll("right")}
              className="hidden sm:flex flex-shrink-0 w-8 h-8 items-center justify-center rounded-full border border-border/60 bg-background hover:border-accent/30 hover:text-accent transition-colors"
              aria-label="Scroll categories right"
            >
              <ChevronRight size={16} aria-hidden="true" />
            </button>

            {/* Divider */}
            <div className="hidden lg:block w-px h-6 bg-border/50 flex-shrink-0" />

            {/* Search — same height as chips, aligned */}
            <div className="relative flex-shrink-0 w-64 hidden lg:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={15} />
              <Input
                type="text"
                placeholder="Search solutions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-9 pl-9 pr-3 rounded-full bg-secondary/50 border-border/60 focus:bg-background text-sm"
              />
            </div>
          </div>

          {/* Mobile search */}
          <div className="mt-3 relative lg:hidden">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={15} />
            <Input
              type="text"
              placeholder="Search business solutions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-9 pl-9 pr-3 rounded-full bg-secondary/50 border-border/60 focus:bg-background text-sm w-full"
            />
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 pb-24 min-h-[50vh] bg-secondary/20">
        <div className="container mx-auto px-6">
          {filteredSolutions.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No solutions found matching your criteria.</p>
              <Button variant="link" onClick={() => { setSearchTerm(""); setActiveCategory("All"); }}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeCategory + searchTerm}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.05 }
                  },
                  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
                }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredSolutions.map((sol) => {
                  const Icon = sol.icon;
                  const isIndustry = sol.category === "Industry Solutions";
                  
                  return (
                    <motion.div
                      key={sol.title}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
                      }}
                      className="group flex flex-col p-6 bg-card border border-border/60 rounded-2xl hover:border-accent/30 hover:shadow-xl hover:shadow-black/5 transition-all duration-300 relative overflow-hidden"
                    >
                      {/* Premium Hover Effect Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-5">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm" style={{ background: `${sol.color}15` }}>
                            <Icon size={24} style={{ color: sol.color }} />
                          </div>
                          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 bg-secondary text-muted-foreground rounded-md">
                            {sol.category}
                          </span>
                        </div>
                        
                        <h3 className="font-display font-bold text-xl text-foreground mb-3 leading-tight">{sol.title}</h3>
                        
                        {sol.description && (
                          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                            {sol.description}
                          </p>
                        )}
                        
                        <div className="mt-auto pt-4 border-t border-border/40">
                          {sol.steps && (
                            <div className="space-y-3 mb-6">
                              <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/70">Workflow</p>
                              <div className="flex items-center justify-between">
                                {sol.steps.map((step, idx) => (
                                  <div key={step} className="flex flex-col items-center gap-2 flex-1 relative group/step">
                                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-[10px] font-bold text-muted-foreground group-hover/step:bg-accent group-hover/step:text-accent-foreground transition-colors z-10">
                                      {idx + 1}
                                    </div>
                                    <span className="text-[10px] font-medium text-center text-muted-foreground group-hover/step:text-foreground transition-colors leading-tight px-1">
                                      {step}
                                    </span>
                                    {idx < sol.steps!.length - 1 && (
                                      <div className="absolute top-3 left-[60%] right-[-40%] h-[2px] bg-border/60 -z-0">
                                        <div className="h-full bg-accent/40 w-0 group-hover:w-full transition-all duration-500 delay-100" />
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {isIndustry && sol.includes && (
                            <div className="mb-6">
                              <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/70 mb-3">Includes</p>
                              <ul className="grid grid-cols-2 gap-y-2 gap-x-3">
                                {sol.includes.slice(0, 6).map((item) => (
                                  <li key={item} className="flex items-start gap-1.5 text-[11px] text-muted-foreground">
                                    <Check size={12} className="text-accent flex-shrink-0 mt-0.5" />
                                    <span className="leading-tight">{item}</span>
                                  </li>
                                ))}
                                {sol.includes.length > 6 && (
                                  <li className="text-[11px] text-muted-foreground italic col-span-2 mt-1">
                                    + {sol.includes.length - 6} more services
                                  </li>
                                )}
                              </ul>
                            </div>
                          )}

                          <Button asChild className="w-full bg-foreground text-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-sm group-hover:shadow-md">
                            <Link to={`/contact?service=${encodeURIComponent(sol.title)}`}>
                              Get a Quote <ArrowRight size={16} className="ml-2 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 lg:py-28 bg-background border-t border-border/40">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto scroll-reveal">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Briefcase size={28} className="text-accent" />
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Need a custom solution?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We design tailored business solutions that fit your industry, workflow, and growth goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/contact">
                  Request Consultation <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
              <button
                onClick={() => openBooking()}
                className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md border border-border/60 bg-background text-sm font-medium hover:bg-secondary transition-colors"
                aria-label="Book a 15-minute meeting"
              >
                <CalendarDays size={16} className="text-accent" />
                Book a Free Meeting
              </button>
              <Button asChild variant="outline" size="lg" className="border-border/60 hover:bg-secondary">
                <a href="https://wa.me/919480944727" target="_blank" rel="noopener noreferrer">
                  Talk to an Expert
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
