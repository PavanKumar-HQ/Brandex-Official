import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link, useSearchParams } from "react-router-dom";
import SEOTags from "@/components/SEOTags";
import Breadcrumb from "@/components/Breadcrumb";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import {
  CheckCircle2,
  PhoneCall,
  Mail,
  Calendar,
  Rocket,
  Zap,
  Layers,
  MapPin,
  Cpu,
  ShoppingCart,
  Server,
  Palette,
  Send,
  PlusCircle,
  Building2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useCalBooking } from "@/hooks/useCalBooking";
import { motion, AnimatePresence } from "framer-motion";

const buildOptions = [
  { id: "custom-web", label: "Custom Web Application", icon: Layers },
  { id: "website", label: "High-Performance Website", icon: Zap },
  { id: "automation", label: "Workflow & Automation", icon: Cpu },
  { id: "ecommerce", label: "E-Commerce & Billing", icon: ShoppingCart },
  { id: "infrastructure", label: "Speed & Infrastructure", icon: Server },
  { id: "design-system", label: "UI/UX & Design System", icon: Palette },
  { id: "other", label: "Other / Custom Scope", icon: PlusCircle },
];

export default function ContactPage() {
  useScrollReveal();
  const { toast } = useToast();
  const { openBooking } = useCalBooking();
  const [searchParams] = useSearchParams();
  const prefilledService = searchParams.get("service");

  const [selectedBuild, setSelectedBuild] = useState("Custom Web Application");
  const [customScope, setCustomScope] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [honeypot, setHoneypot] = useState("");

  useEffect(() => {
    if (prefilledService) {
      const match = buildOptions.find(b => b.label.toLowerCase().includes(prefilledService.toLowerCase()));
      if (match) setSelectedBuild(match.label);
    }
  }, [prefilledService]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    if (honeypot) return;

    const schema = z.object({
      name: z.string().trim().min(1, "Please enter your name"),
      contact: z.string().trim().min(3, "Please provide your email or phone number"),
      description: z.string().trim().min(5, "Please provide a brief project description"),
    });

    const result = schema.safeParse({ name, contact, description });
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    const resolvedCategory = selectedBuild === "Other / Custom Scope" && customScope.trim()
      ? `Other: ${customScope.trim()}`
      : selectedBuild;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "249671c5-ee38-463a-9841-437d56047bb9",
          subject: `New Project Inquiry: ${name} - ${resolvedCategory}`,
          from_name: "Brandex Inquiry Engine",
          category: resolvedCategory,
          name,
          contact,
          description,
        }),
      });

      const json = await response.json();
      if (response.status === 200 || json.success) {
        setSubmitted(true);
      } else {
        toast({ title: "Error", description: json.message || "Failed to submit. Please try again.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Network error. Please try again or reach us via WhatsApp.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  const openWhatsAppFastLane = () => {
    const resolvedCategory = selectedBuild === "Other / Custom Scope" && customScope.trim()
      ? `Other (${customScope.trim()})`
      : selectedBuild;

    const text = encodeURIComponent(
      `Hi Brandex! I'm interested in building: ${resolvedCategory}.\nMy Name: ${name || "Founder/Client"}\nContact: ${contact || "Direct"}\nBrief: ${description || "Let's discuss my requirements."}`
    );
    window.open(`https://wa.me/919480944727?text=${text}`, "_blank");
  };

  return (
    <>
      <SEOTags
        title="Contact Brandex | Schedule Technical Consultation | Bangalore"
        description="Contact Brandex in Bangalore to discuss your custom software, web development, AI automation, or infrastructure project. Direct engineering consultation."
        keywords="contact brandex, hire custom software developers, software consultation bangalore, web development company contact, brandex vijaynagar"
        image="https://www.brandex.co.in/og/contact.png"
        canonicalUrl="https://www.brandex.co.in/contact"
        schema={{
          "@type": "ContactPage",
          "@id": "https://www.brandex.co.in/contact#webpage",
          "name": "Contact Brandex",
          "description": "Contact Brandex to start your software, web, AI, or business solutions project in Bangalore.",
          "url": "https://www.brandex.co.in/contact",
          "isPartOf": { "@id": "https://www.brandex.co.in/#website" },
          "about": { "@id": "https://www.brandex.co.in/#organization" }
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-4xl pt-8 sm:pt-10">
        <Breadcrumb items={[{ label: "Contact & Proposal" }]} className="mb-4" />
      </div>

      <section className="min-h-[80vh] pt-4 pb-16 flex flex-col relative overflow-hidden bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl flex-1 flex flex-col relative z-10">

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-card dark:bg-card/95 border-2 border-border/80 dark:border-border/60 rounded-3xl p-6 sm:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
              >
                {/* Form Header */}
                <div className="space-y-1 mb-6">
                  <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    Project Inquiry Form
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Fill in the details below to initiate a technical proposal.
                  </p>
                </div>

                <div className="h-px bg-border/60 mb-6" />

                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="text" name="_honey" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                  {/* Section 1: What are you looking to build */}
                  <div className="space-y-3">
                    <Label className="text-sm font-bold text-foreground">
                      What are you looking to build? *
                    </Label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                      {buildOptions.map((opt) => {
                        const Icon = opt.icon;
                        const isSelected = selectedBuild === opt.label;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => setSelectedBuild(opt.label)}
                            className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 text-left border ${isSelected
                                ? "bg-[#4f47e6] text-white border-[#4f47e6] shadow-md shadow-[#4f47e6]/20"
                                : "bg-white hover:bg-slate-50 border-slate-200/90 text-slate-800"
                              }`}
                          >
                            <Icon size={16} className={isSelected ? "text-white shrink-0" : "text-[#4f47e6] shrink-0"} />
                            <span className="truncate">{opt.label}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Conditional Custom Requirement Input */}
                    {selectedBuild === "Other / Custom Scope" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pt-2 space-y-1.5"
                      >
                        <Label htmlFor="custom-requirement" className="text-xs font-bold text-accent">
                          Specify What You Need To Build *
                        </Label>
                        <Input
                          id="custom-requirement"
                          placeholder="e.g. Mobile App, AI Agent, Blockchain, Cloud Infrastructure..."
                          value={customScope}
                          onChange={(e) => setCustomScope(e.target.value)}
                          className="h-12 bg-background/80 rounded-xl text-sm border-accent/40 focus:border-accent"
                          autoFocus
                        />
                      </motion.div>
                    )}
                  </div>

                  {/* Section 2: Two Columns for Name and Contact */}
                  <div className="grid sm:grid-cols-2 gap-5 pt-2">
                    <div className="space-y-2">
                      <Label htmlFor="inquiry-name" className="text-sm font-bold text-foreground">
                        Your Name *
                      </Label>
                      <Input
                        id="inquiry-name"
                        placeholder="e.g. Alex Sharma"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="h-12 bg-background/80 rounded-xl text-sm border-border/80 focus:border-accent"
                      />
                      {errors.name && <p className="text-xs text-destructive font-medium">{errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inquiry-contact" className="text-sm font-bold text-foreground">
                        Email or WhatsApp / Phone *
                      </Label>
                      <Input
                        id="inquiry-contact"
                        placeholder="alex@company.com or +91 990..."
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        className="h-12 bg-background/80 rounded-xl text-sm border-border/80 focus:border-accent"
                      />
                      {errors.contact && <p className="text-xs text-destructive font-medium">{errors.contact}</p>}
                    </div>
                  </div>

                  {/* Section 3: Project Brief & Deliverable Goals */}
                  <div className="space-y-2">
                    <Label htmlFor="inquiry-brief" className="text-sm font-bold text-foreground">
                      Project Brief &amp; Deliverable Goals *
                    </Label>
                    <Textarea
                      id="inquiry-brief"
                      placeholder="Briefly describe what you are building, required timelines, or key bottlenecks you want to eliminate..."
                      rows={4}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="bg-background/80 rounded-xl text-sm border-border/80 focus:border-accent resize-none"
                    />
                    {errors.description && <p className="text-xs text-destructive font-medium">{errors.description}</p>}
                  </div>

                  {/* Section 4: Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <Button
                      type="submit"
                      disabled={submitting}
                      className="flex-1 bg-[#4f47e6] text-white hover:bg-[#4338ca] h-13 rounded-xl font-bold text-sm shadow-md shadow-[#4f47e6]/25 hover:shadow-lg hover:shadow-[#4f47e6]/35 transition-all"
                    >
                      {submitting ? (
                        "Sending Proposal..."
                      ) : (
                        <>
                          Submit Project Inquiry <Send size={15} className="ml-2" />
                        </>
                      )}
                    </Button>

                    <button
                      type="button"
                      onClick={openWhatsAppFastLane}
                      className="inline-flex items-center justify-center gap-2 px-6 h-13 rounded-xl border border-[#25D366]/60 bg-white hover:bg-[#25D366]/5 text-[#128C7E] font-bold text-sm shadow-xs transition-all duration-200"
                    >
                      <WhatsAppIcon size={18} className="text-[#25D366]" />
                      <span>WhatsApp Fast Lane</span>
                    </button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card dark:bg-card/95 border-2 border-border/80 rounded-3xl p-8 sm:p-12 text-center max-w-xl mx-auto shadow-xl space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-accent/15 text-accent flex items-center justify-center mx-auto border-2 border-accent/30 shadow-lg shadow-accent/20">
                  <CheckCircle2 size={32} />
                </div>

                <div className="space-y-2">
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-foreground">
                    Inquiry Received!
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Thank you, <strong className="text-foreground">{name}</strong>. Our engineering leads will review your inquiry for <strong className="text-foreground">{selectedBuild}</strong> and reach out within 24 business hours.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => openBooking()}
                    className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 h-12 rounded-xl font-bold text-sm shadow-md"
                  >
                    <Calendar size={15} className="mr-2" /> Schedule Call Now
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setContact("");
                      setDescription("");
                    }}
                    className="h-12 rounded-xl font-semibold text-sm"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      {/* Office HQ & Google Maps Embed */}
      <section className="py-14 sm:py-18 border-t border-border/60 bg-secondary/20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                Headquarters
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                Visit our Bangalore Office
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We're located in Vijaynagar, Bangalore. Feel free to reach out directly or schedule an on-site consultation with our engineering leadership.
              </p>

              <div className="space-y-3 pt-2 text-sm text-foreground">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
                    <Mail size={15} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Direct Inquiries</p>
                    <a href="mailto:team@brandex.co.in" className="font-semibold hover:text-accent transition-colors">
                      team@brandex.co.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
                    <PhoneCall size={15} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Phone &amp; WhatsApp</p>
                    <a href="tel:+919480944727" className="font-semibold hover:text-accent transition-colors">
                      +91 94809 44727
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
                    <MapPin size={15} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Office Address</p>
                    <p className="font-semibold text-xs leading-relaxed">
                      #121, 13th Main M.C. Layout, Vijaynagar, Bangalore - 560040, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="rounded-2xl overflow-hidden border border-border/80 shadow-xl bg-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.99938127205664!2d77.53457412823266!3d12.972484828535457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36b017ed2b0e577%3A0x6f01fab66d816957!2sBrandex!5e0!3m2!1sen!2sin!4v1790867675786!5m2!1sen!2sin"
                  width="100%"
                  height="340"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Brandex Bangalore Office Map"
                  className="w-full h-[320px] md:h-[340px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
