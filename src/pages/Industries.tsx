import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Rocket, Building2, Factory, ShoppingBag, UtensilsCrossed, Hotel,
  Stethoscope, GraduationCap, Landmark, Package, Truck, HardHat,
  Home, Heart, DollarSign, Users, Scissors, Dumbbell, BookOpen, Coffee,
  Store, Globe, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import CTABanner from "@/components/home/CTABanner";
import SEOTags from "@/components/SEOTags";
import Breadcrumb from "@/components/Breadcrumb";

const industries = [
  {
    icon: Rocket,
    name: "Startups",
    description: "Launch fast with MVP development, branding, digital presence, and scalable infrastructure built for growth.",
    services: ["Custom Software", "Branding", "Website", "AI Automation"],
    color: "hsl(230 60% 55%)",
  },
  {
    icon: Store,
    name: "MSMEs",
    description: "Digitize and modernize your small or medium business with affordable, high-impact technology solutions.",
    services: ["ERP", "Website", "Digital Marketing", "Office Setup"],
    color: "hsl(200 65% 50%)",
  },
  {
    icon: Building2,
    name: "Enterprises",
    description: "Enterprise-grade software, cybersecurity, cloud infrastructure, and digital transformation at scale.",
    services: ["Enterprise Software", "Cybersecurity", "Cloud", "AI Systems"],
    color: "hsl(220 50% 45%)",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Inventory management, ERP systems, floor automation, and IoT solutions for manufacturing operations.",
    services: ["ERP", "Inventory", "IoT", "Business Automation"],
    color: "hsl(240 35% 50%)",
  },
  {
    icon: ShoppingBag,
    name: "Retail",
    description: "POS software, ecommerce platforms, inventory, billing systems, and digital marketing for retail businesses.",
    services: ["POS", "Ecommerce", "Inventory", "Digital Marketing"],
    color: "hsl(35 80% 50%)",
  },
  {
    icon: UtensilsCrossed,
    name: "Restaurants",
    description: "Online ordering, kitchen display systems, table management, billing, and WhatsApp automation for F&B.",
    services: ["Ordering System", "Kitchen Display", "Billing", "WhatsApp Bot"],
    color: "hsl(10 70% 52%)",
  },
  {
    icon: Coffee,
    name: "Cafes",
    description: "Digital menus, loyalty programs, POS systems, and social media marketing for cafes and coffee shops.",
    services: ["POS", "Digital Menu", "Loyalty", "Social Media"],
    color: "hsl(30 60% 45%)",
  },
  {
    icon: Hotel,
    name: "Hotels",
    description: "Booking systems, property management software, guest portals, CCTV, and smart room solutions for hospitality.",
    services: ["Booking System", "PMS", "CCTV", "Smart Rooms"],
    color: "hsl(190 60% 45%)",
  },
  {
    icon: Stethoscope,
    name: "Hospitals",
    description: "Hospital management systems, patient portals, appointment booking, billing, and secure data management.",
    services: ["HMS", "Patient Portal", "Billing", "Appointment Booking"],
    color: "hsl(160 50% 45%)",
  },
  {
    icon: Heart,
    name: "Clinics",
    description: "Appointment scheduling, EMR systems, patient management, billing, and WhatsApp reminders for clinics.",
    services: ["Appointments", "EMR", "Patient Mgmt", "WhatsApp Reminders"],
    color: "hsl(340 60% 52%)",
  },
  {
    icon: GraduationCap,
    name: "Schools",
    description: "School management systems, parent portals, fee management, attendance, and e-learning platforms.",
    services: ["School ERP", "Parent App", "Attendance", "Fee Management"],
    color: "hsl(270 55% 55%)",
  },
  {
    icon: BookOpen,
    name: "Colleges",
    description: "College management, student portals, LMS, admissions automation, and digital marketing for educational institutions.",
    services: ["College ERP", "LMS", "Admissions", "Student Portal"],
    color: "hsl(250 60% 55%)",
  },
  {
    icon: BookOpen,
    name: "Publishers",
    description: "Digital publishing platforms, ecommerce for books, content management systems, and author portals.",
    services: ["CMS", "Ecommerce", "Author Portal", "Digital Publishing"],
    color: "hsl(45 90% 50%)",
  },
  {
    icon: Package,
    name: "Warehouses",
    description: "Warehouse management systems, inventory tracking, barcode systems, and logistics integration.",
    services: ["WMS", "Inventory", "Barcode", "Logistics Integration"],
    color: "hsl(210 70% 50%)",
  },
  {
    icon: Truck,
    name: "Logistics",
    description: "Fleet management, route optimization, delivery tracking, and customer notification systems for logistics companies.",
    services: ["Fleet Mgmt", "Tracking", "Route Optimization", "Customer Alerts"],
    color: "hsl(220 55% 50%)",
  },
  {
    icon: HardHat,
    name: "Construction",
    description: "Project management software, site management apps, contractor portals, and material tracking systems.",
    services: ["Project Mgmt", "Site App", "Contractor Portal", "Inventory"],
    color: "hsl(30 55% 48%)",
  },
  {
    icon: Home,
    name: "Real Estate",
    description: "Property listing platforms, CRM for agents, virtual tours, lead management, and digital marketing.",
    services: ["Property Portal", "Agent CRM", "Lead Mgmt", "Digital Marketing"],
    color: "hsl(160 45% 45%)",
  },
  {
    icon: Landmark,
    name: "Government",
    description: "Citizen portals, document management, grievance systems, and secure government software solutions.",
    services: ["Citizen Portal", "Document Mgmt", "Grievance System", "Secure Systems"],
    color: "hsl(215 55% 45%)",
  },
  {
    icon: Globe,
    name: "NGOs",
    description: "Donor management systems, volunteer portals, reporting dashboards, and websites for nonprofits and NGOs.",
    services: ["Donor Mgmt", "Volunteer Portal", "Reports", "Website"],
    color: "hsl(195 60% 45%)",
  },
  {
    icon: DollarSign,
    name: "Finance",
    description: "Fintech applications, loan management, secure payment portals, compliance systems, and customer portals.",
    services: ["Fintech App", "Loan Mgmt", "Payment Portal", "Compliance"],
    color: "hsl(140 50% 45%)",
  },
  {
    icon: Scissors,
    name: "Salons",
    description: "Appointment booking, POS, customer loyalty programs, and social media marketing for salons and spas.",
    services: ["Appointments", "POS", "Loyalty", "Social Media"],
    color: "hsl(310 55% 52%)",
  },
  {
    icon: Dumbbell,
    name: "Gyms",
    description: "Member management, attendance tracking, billing, class scheduling, and digital marketing for fitness businesses.",
    services: ["Member Mgmt", "Attendance", "Billing", "Class Scheduling"],
    color: "hsl(20 70% 50%)",
  },
];

export default function IndustriesPage() {
  useScrollReveal();

  return (
    <>
      <SEOTags 
        title="Industry-Specific Software & Digital Solutions | Brandex"
        description="Tailored software, digital transformation, and business automation solutions for 22+ industries including Healthcare, Retail, Education, Real Estate, and Manufacturing."
        keywords="industry software solutions, healthcare IT solutions, retail POS, real estate software, edtech platforms, manufacturing ERP, startup technology partner"
        canonicalUrl="https://www.brandex.co.in/industries"
        image="https://www.brandex.co.in/og/industries.png"
        schema={{
          "@type": "WebPage",
          "@id": "https://www.brandex.co.in/industries#webpage",
          "name": "Industry-Specific Software & Digital Solutions — Brandex",
          "description": "Brandex builds tailored technology solutions for 22+ industries including Startups, Healthcare, Retail, Real Estate, Manufacturing, and Education.",
          "url": "https://www.brandex.co.in/industries",
          "isPartOf": { "@id": "https://www.brandex.co.in/#website" },
          "about": { "@id": "https://www.brandex.co.in/#organization" }
        }}
      />
      {/* Hero */}
      <section className="pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-20 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <Breadcrumb items={[{ label: "Industries" }]} className="mb-6" />
          <div className="max-w-3xl scroll-reveal">
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">Industries</p>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Built for every{" "}
              <span className="text-gradient">industry</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Whether you're a startup, hospital, manufacturer, or hotel — Brandex has delivered technology and business solutions across 22+ industries.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: i * 0.035 }}
                  className="group p-6 bg-card border border-border/60 rounded-2xl hover:border-accent/20 hover:shadow-lg hover:shadow-black/5 transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 flex-shrink-0" style={{ background: `${industry.color}18` }}>
                      <Icon size={20} style={{ color: industry.color }} />
                    </div>
                    <h3 className="font-display font-bold text-lg text-foreground">{industry.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{industry.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {industry.services.map((s) => (
                      <span key={s} className="text-[11px] font-medium px-2 py-0.5 rounded-md border border-border/60 text-muted-foreground bg-secondary/50">
                        {s}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-2.5 transition-all duration-200"
                  >
                    Get a Solution <ArrowRight size={14} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-secondary/40">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4 scroll-reveal">
            Don't see your industry?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto scroll-reveal">
            We work with businesses across all sectors. Talk to us about your specific needs and we'll find the right solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4 scroll-reveal">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">Talk to Us <ArrowRight size={16} className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
