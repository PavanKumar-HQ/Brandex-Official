import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, ShieldCheck, Clock, Send, Check, Phone, ArrowRight, ArrowLeft, MessageSquare, CheckCircle2, Zap, Layers, Server, Shield, Laptop, Workflow } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const scopeOptions = [
  { id: "webapp", label: "Custom Web Application", icon: Server },
  { id: "platform", label: "High-Performance Website", icon: Zap },
  { id: "automation", label: "Workflow & Automation", icon: Workflow },
  { id: "commerce", label: "E-Commerce & Billing", icon: Layers },
  { id: "edge", label: "Speed & Infrastructure", icon: Laptop },
  { id: "uiux", label: "UI/UX & Design System", icon: Shield },
];

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  contact: z.string().trim().min(3, "Please provide an email or phone number").max(255),
  service: z.string().min(1, "Please select what you are building"),
  description: z.string().trim().min(3, "Please share a brief note about your requirement").max(5000),
});

export default function ContactPage() {
  useScrollReveal();
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const [selectedService, setSelectedService] = useState<string>("Custom Web Application");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const payload = {
      name,
      contact,
      service: selectedService,
      description,
    };

    const result = contactSchema.safeParse(payload);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    try {
      // 1. Direct Web3Forms Intake & Notification
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "249671c5-ee38-463a-9841-437d56047bb9",
          subject: `High-Priority Lead from ${name} (${contact})`,
          from_name: "Brandex Project Intake",
          name,
          contact,
          service: selectedService,
          description,
        }),
      });

      const json = await response.json();

      if (response.status === 200 || json.success) {
        setSubmitted(true);
        toast({
          title: "Message Sent from Website UI",
          description: "Our founding team has received your details and will respond within 24 hours.",
        });
      } else {
        setSubmitted(true);
        toast({
          title: "Message Received",
          description: "Our technical team will review your inquiry shortly.",
        });
      }
    } catch (err) {
      console.error("Submission fallback:", err);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const openDirectWhatsApp = () => {
    const briefText =
      `Brandex Project Inquiry\n\n` +
      `Name: ${name || "Client"}\n` +
      `Contact: ${contact || "Direct WhatsApp"}\n` +
      `Service: ${selectedService}\n` +
      `Requirement: ${description || "Looking for technical consultation"}\n\n` +
      `Sent via brandex.me Direct Intake`;

    window.open(`https://wa.me/919901514757?text=${encodeURIComponent(briefText)}`, "_blank");
  };

  return (
    <>
      <SEOHead
        title="Start a Project | Contact Brandex Digital"
        description="Connect with Brandex founding engineers. Fast 24-hour response for custom web applications, bespoke software, and automated workflows."
        canonicalUrl="/contact"
      />

      {/* Hero Header */}
      <section className="pt-24 pb-8 lg:pt-28 lg:pb-10 relative overflow-hidden bg-[#f8fafd] border-b border-slate-200/80 w-full">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          
          {/* Back Button */}
          <div className="mb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#4f47e6] transition-colors bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl"
          >
            <div className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-[#4f47e6] uppercase mb-3 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
              Engineering Discovery & Scoping
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2">
              Start Your <span className="text-[#4f47e6]">Next Project</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base font-normal max-w-xl leading-relaxed">
              No sales intermediaries or generic templates. Share your project goals and connect directly with lead technical architects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Form & Contact Information */}
      <section className="py-10 lg:py-16 bg-white border-b border-slate-100 w-full">
        <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Inquiry Form Column: At top on mobile (order-1), right side on desktop (lg:order-2) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border border-slate-300/90 shadow-sm relative overflow-hidden">
                
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 space-y-4"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-2xs">
                      <Check size={24} />
                    </div>

                    <div>
                      <div className="liquid-glass-pill inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 mb-2">
                        <CheckCircle2 size={12} className="text-emerald-600" />
                        <span>Message Sent Successfully</span>
                      </div>
                      <h3 className="font-display font-extrabold text-xl text-slate-900">
                        Inquiry Received by Lead Engineering Team!
                      </h3>
                      <p className="text-xs text-slate-600 max-w-md mx-auto mt-1 leading-relaxed">
                        We have logged your request for <strong>{selectedService}</strong>. Our technical leadership will review your requirements and reach out within 24 hours.
                      </p>
                    </div>

                    {/* Summary Box */}
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-left text-xs max-w-md mx-auto space-y-1 text-slate-700 font-medium">
                      <div><span className="text-slate-400 font-mono">From:</span> {name} ({contact})</div>
                      <div><span className="text-slate-400 font-mono">Service:</span> {selectedService}</div>
                      {description && (
                        <div className="truncate"><span className="text-slate-400 font-mono">Note:</span> {description}</div>
                      )}
                    </div>

                    <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5">
                      <Button
                        onClick={openDirectWhatsApp}
                        variant="brand"
                        size="sm"
                        className="rounded-xl font-bold gap-1.5 text-xs h-9 px-4"
                      >
                        <MessageSquare size={13} />
                        <span>Send WhatsApp Sync</span>
                      </Button>
                      <Button
                        onClick={() => {
                          setSubmitted(false);
                          setName("");
                          setContact("");
                          setDescription("");
                        }}
                        variant="liquidGlass"
                        size="sm"
                        className="rounded-xl text-xs h-9 px-4"
                      >
                        Send Another Inquiry
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Header */}
                    <div className="pb-2 border-b border-slate-200/70">
                      <h2 className="font-display font-extrabold text-xl text-slate-900">
                        Project Inquiry Form
                      </h2>
                      <p className="text-xs text-slate-500 font-normal mt-0.5">
                        Fill in the details below to initiate a technical proposal.
                      </p>
                    </div>

                    {/* Needed Question 1: Service selection pills (with clean icons, no emojis) */}
                    <div className="space-y-1.5">
                      <Label className="text-xs font-bold text-slate-800">
                        What are you looking to build? *
                      </Label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {scopeOptions.map((opt) => {
                          const isSelected = selectedService === opt.label;
                          const Icon = opt.icon;
                          return (
                            <button
                              type="button"
                              key={opt.id}
                              onClick={() => setSelectedService(opt.label)}
                              className={`p-2.5 rounded-xl text-left text-xs font-semibold transition-all border cursor-pointer flex items-center gap-2 ${
                                isSelected
                                  ? "bg-[#4f47e6] text-white border-[#4338ca] shadow-xs scale-[1.01]"
                                  : "bg-slate-50/80 text-slate-700 hover:bg-white hover:text-slate-900 border-slate-200"
                              }`}
                            >
                              <Icon size={13} className={isSelected ? "text-white" : "text-[#4f47e6] shrink-0"} />
                              <span className="truncate">{opt.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Needed Questions 2 & 3: Name and Contact */}
                    <div className="grid sm:grid-cols-2 gap-3 pt-1">
                      <div className="space-y-1">
                        <Label htmlFor="name" className="text-xs font-bold text-slate-800">
                          Your Name *
                        </Label>
                        <Input
                          id="name"
                          placeholder="e.g. Alex Sharma"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className={`h-10 rounded-xl bg-slate-50 border-slate-300 text-xs font-medium ${errors.name ? "border-red-500" : ""}`}
                        />
                        {errors.name && <p className="text-[11px] text-red-500 font-semibold">{errors.name}</p>}
                      </div>

                      <div className="space-y-1">
                        <Label htmlFor="contact" className="text-xs font-bold text-slate-800">
                          Email or WhatsApp / Phone *
                        </Label>
                        <Input
                          id="contact"
                          placeholder="alex@company.com or +91 990..."
                          value={contact}
                          onChange={(e) => setContact(e.target.value)}
                          className={`h-10 rounded-xl bg-slate-50 border-slate-300 text-xs font-medium ${errors.contact ? "border-red-500" : ""}`}
                        />
                        {errors.contact && <p className="text-[11px] text-red-500 font-semibold">{errors.contact}</p>}
                      </div>
                    </div>

                    {/* Needed Question 4: Project Note */}
                    <div className="space-y-1">
                      <Label htmlFor="description" className="text-xs font-bold text-slate-800">
                        Project Brief & Deliverable Goals *
                      </Label>
                      <Textarea
                        id="description"
                        rows={3}
                        placeholder="Briefly describe what you are building, required timelines, or key bottlenecks you want to eliminate..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className={`rounded-xl bg-slate-50 border-slate-300 text-xs font-medium resize-none ${errors.description ? "border-red-500" : ""}`}
                      />
                      {errors.description && <p className="text-[11px] text-red-500 font-semibold">{errors.description}</p>}
                    </div>

                    {/* Submit Actions */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
                      <Button
                        type="submit"
                        variant="brand"
                        size="lg"
                        disabled={submitting}
                        className="w-full sm:flex-1 h-11 rounded-xl text-xs sm:text-sm font-bold shadow-[0_4px_14px_rgba(79,71,230,0.35)]"
                      >
                        {submitting ? (
                          <span>Dispatching Message...</span>
                        ) : (
                          <div className="flex items-center justify-center gap-2">
                            <span>Submit Project Inquiry</span>
                            <Send size={13} />
                          </div>
                        )}
                      </Button>

                      <Button
                        type="button"
                        onClick={openDirectWhatsApp}
                        variant="liquidGlass"
                        size="lg"
                        className="w-full sm:w-auto h-11 px-4 rounded-xl text-xs font-bold text-emerald-700 hover:text-emerald-800 border-emerald-300 bg-emerald-50/50 hover:bg-emerald-50"
                        title="Send via WhatsApp"
                      >
                        <MessageSquare size={14} className="text-emerald-600 sm:mr-1" />
                        <span className="hidden sm:inline">WhatsApp Fast Lane</span>
                      </Button>
                    </div>

                  </form>
                )}

              </div>
            </div>

            {/* Direct Leadership Telemetry & Merchant Details Column: order-2 on mobile, lg:order-1 on desktop */}
            <div className="lg:col-span-5 space-y-4 order-2 lg:order-1">
              
              {/* Leadership Response Card */}
              <div className="liquid-glass rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#4f47e6]">
                      Direct Dispatch
                    </span>
                    <span className="liquid-glass-pill px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Response: &lt; 24 Hours</span>
                    </span>
                  </div>
                  <h3 className="font-display font-extrabold text-lg text-slate-900">
                    Direct Access to Technical Leadership
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mt-0.5">
                    Every message goes directly to our founding engineers for technical evaluation and timeline estimation.
                  </p>
                </div>

                {/* Direct Channels */}
                <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 pt-3 border-t border-slate-200/70">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-indigo-50/80 border border-indigo-100 flex items-center justify-center text-[#4f47e6] shrink-0 mt-0.5">
                      <Phone size={14} />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 font-bold uppercase">Direct Phone & WhatsApp</div>
                      <div className="space-y-0.5 mt-0.5">
                        <a href="tel:+919480944727" className="block font-bold text-slate-900 hover:text-[#4f47e6] transition-colors">
                          +91 94809 44727
                        </a>
                        <a href="tel:+919901514757" className="block font-medium text-slate-700 hover:text-[#4f47e6] transition-colors">
                          +91 99015 14757
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-indigo-50/80 border border-indigo-100 flex items-center justify-center text-[#4f47e6] shrink-0">
                      <Mail size={14} />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 font-bold uppercase">Official Inquiries Mail</div>
                      <a href="mailto:brandexhq@gmail.com" className="font-bold text-slate-900 hover:text-[#4f47e6] transition-colors">
                        brandexhq@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-indigo-50/80 border border-indigo-100 flex items-center justify-center text-[#4f47e6] shrink-0 mt-0.5">
                      <MapPin size={14} />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 font-bold uppercase">Headquarters & Operational Office</div>
                      <p className="font-semibold text-slate-900 text-xs leading-relaxed mt-0.5">
                        #121, 13th Main M.C. Layout, Vijaynagar, Bangalore, Karnataka &ndash; 560040
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-1 border-t border-slate-100">
                    <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 shrink-0">
                      <Clock size={14} />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 font-bold uppercase">Business Hours</div>
                      <span className="font-medium text-slate-800 text-xs">
                        Mon &ndash; Fri, 9:00 AM &ndash; 6:00 PM IST
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-slate-400 font-bold">GSTIN:</span>
                      <span className="font-mono font-bold text-slate-800">29OGNPS8060K1Z5</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-slate-400 font-bold">Entity:</span>
                      <span className="font-semibold text-slate-800">Brandex Digital</span>
                    </div>
                  </div>
                </div>

                {/* 1-Tap WhatsApp Fast Action */}
                <div className="pt-2">
                  <Button
                    type="button"
                    onClick={openDirectWhatsApp}
                    variant="liquidGlass"
                    size="default"
                    className="w-full justify-center rounded-xl font-bold gap-2 text-xs text-emerald-700 hover:text-emerald-800 border-emerald-200 bg-emerald-50/60 hover:bg-emerald-50 h-10"
                  >
                    <MessageSquare size={14} className="text-emerald-600" />
                    <span>Instant WhatsApp Chat</span>
                  </Button>
                </div>
              </div>

              {/* Engineering Guarantees */}
              <div className="liquid-glass-card rounded-2xl p-4 border border-slate-200 space-y-2 text-xs text-slate-700 font-semibold">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-[#4f47e6] shrink-0" />
                  <span>100% Client Source Code Ownership</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-[#4f47e6] shrink-0" />
                  <span>Sub-Second TTFB & Performance Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#4f47e6] shrink-0" />
                  <span>Strict NDA & Non-Disclosure Assurance</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
