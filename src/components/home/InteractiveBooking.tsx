import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Send,
  Sparkles,
  Zap,
  Layers,
  Cpu,
  Calendar,
  MessageSquare,
  ShieldCheck,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const systemTypes = [
  {
    id: "web-app",
    icon: Cpu,
    title: "Custom Web App / SaaS",
    desc: "Full-stack React/Node platform with database, auth, and dashboard."
  },
  {
    id: "automation",
    icon: Zap,
    title: "Workflow Automation & Webhooks",
    desc: "End-to-end sync between CRM, payments, ERP, and databases."
  },
  {
    id: "high-converting-site",
    icon: Layers,
    title: "High-Performance Digital Presence",
    desc: "Sub-second marketing architecture engineered for maximal conversion."
  },
  {
    id: "enterprise",
    icon: ShieldCheck,
    title: "Enterprise Custom Ecosystem",
    desc: "Multi-tenant cloud infrastructure and dedicated architecture retainer."
  }
];

const timelines = [
  { id: "urgent", label: "Fast-Track Sprint", duration: "2–3 Weeks", note: "Priority rapid deployment" },
  { id: "standard", label: "Standard Production", duration: "3–6 Weeks", note: "Comprehensive build & testing" },
  { id: "retainer", label: "Continuous Retainer", duration: "Ongoing", note: "Dedicated engineering squad" }
];

export default function InteractiveBooking() {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState<string>("web-app");
  const [selectedTimeline, setSelectedTimeline] = useState<string>("standard");
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    notes: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Brandex Engineering Team, I would like to book an architectural diagnostic.\n\n` +
      `System: ${selectedType}\n` +
      `Timeline: ${selectedTimeline}\n` +
      `Name: ${formData.name || "Founder"}\n` +
      `Details: ${formData.notes || "Ready to discuss scope"}`
    );
    window.open(`https://wa.me/919901514757?text=${text}`, "_blank");
  };

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#f8fafd] border-b border-slate-200/80" id="booking">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
        >
          <div className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-widest text-[#4f47e6] uppercase mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
            Direct Technical Intake
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            Scope Your Project in <span className="text-[#4f47e6]">3 Simple Steps</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal mt-3 leading-relaxed">
            No endless sales questionnaires. Select your system architecture requirements and get an instant engineering response within 24 hours.
          </p>
        </motion.div>

        {/* Master Liquid Glass Booking Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="liquid-glass rounded-3xl p-6 sm:p-10 shadow-xs relative"
        >
          {/* Step Indicator Bar */}
          {!isSubmitted && (
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-200/60 text-xs font-mono">
              <div className="flex items-center gap-3">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                        step === s
                          ? "bg-[#4f47e6] text-white shadow-xs"
                          : step > s
                          ? "bg-emerald-500 text-white"
                          : "bg-slate-100 text-slate-500 border border-slate-200"
                      }`}
                    >
                      {step > s ? "✓" : s}
                    </div>
                    <span className={`hidden sm:inline font-semibold ${step === s ? "text-slate-900" : "text-slate-500"}`}>
                      {s === 1 ? "Architecture" : s === 2 ? "Timeline" : "Contact"}
                    </span>
                    {s < 3 && <span className="text-slate-300 mx-1">/</span>}
                  </div>
                ))}
              </div>

              <div className="text-slate-500 text-[11px] font-semibold">
                Step {step} of 3
              </div>
            </div>
          )}

          {/* Step 1: Select Architecture */}
          {step === 1 && !isSubmitted && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-1">
                  1. What system architecture does your business need?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal">
                  Select the primary deliverable category for your project.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {systemTypes.map((item) => {
                  const Icon = item.icon;
                  const isSelected = selectedType === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedType(item.id)}
                      className={`p-5 rounded-2xl cursor-pointer transition-all duration-200 border ${
                        isSelected
                          ? "bg-white border-[#4f47e6] shadow-sm ring-1 ring-[#4f47e6]"
                          : "liquid-glass-card hover:bg-white hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-start gap-3.5">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                          isSelected ? "bg-[#4f47e6] text-white" : "bg-slate-100 text-slate-700"
                        }`}>
                          <Icon size={18} />
                        </div>
                        <div>
                          <div className="font-display font-bold text-sm text-slate-900 mb-1">
                            {item.title}
                          </div>
                          <div className="text-xs text-slate-600 leading-relaxed font-normal">
                            {item.desc}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-end pt-4">
                <Button
                  onClick={() => setStep(2)}
                  variant="brand"
                  size="default"
                  className="gap-2"
                >
                  <span>Continue to Timeline</span>
                  <ArrowRight size={15} />
                </Button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Target Timeline */}
          {step === 2 && !isSubmitted && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-1">
                  2. What is your target deployment timeline?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal">
                  All sprints include dedicated code delivery and post-launch hypercare.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {timelines.map((t) => {
                  const isSelected = selectedTimeline === t.id;
                  return (
                    <div
                      key={t.id}
                      onClick={() => setSelectedTimeline(t.id)}
                      className={`p-5 rounded-2xl cursor-pointer transition-all duration-200 border text-center ${
                        isSelected
                          ? "bg-white border-[#4f47e6] shadow-sm ring-1 ring-[#4f47e6]"
                          : "liquid-glass-card hover:bg-white hover:border-slate-300"
                      }`}
                    >
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#4f47e6] block mb-1">
                        {t.duration}
                      </span>
                      <div className="font-display font-bold text-base text-slate-900 mb-1">
                        {t.label}
                      </div>
                      <div className="text-[11px] text-slate-500 font-normal">
                        {t.note}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-4">
                <Button
                  onClick={() => setStep(1)}
                  variant="liquidGlass"
                  size="default"
                  className="gap-2"
                >
                  <ArrowLeft size={15} />
                  <span>Back</span>
                </Button>

                <Button
                  onClick={() => setStep(3)}
                  variant="brand"
                  size="default"
                  className="gap-2"
                >
                  <span>Continue to Details</span>
                  <ArrowRight size={15} />
                </Button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Contact & Submit */}
          {step === 3 && !isSubmitted && (
            <motion.form
              key="step3"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-1">
                  3. Where should we send your architectural scope?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal">
                  Our founding engineers review every submission personally within 24 hours.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-mono">
                    YOUR NAME *
                  </label>
                  <Input
                    required
                    placeholder="e.g. Alex Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-11 rounded-xl bg-white border-slate-200 text-sm font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-mono">
                    WORK EMAIL OR WHATSAPP *
                  </label>
                  <Input
                    required
                    placeholder="e.g. alex@company.com or +91..."
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="h-11 rounded-xl bg-white border-slate-200 text-sm font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-mono">
                  BRIEF PROJECT GOALS OR CURRENT BOTTLENECK (OPTIONAL)
                </label>
                <Textarea
                  placeholder="Tell us what you're building or automating..."
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="rounded-xl bg-white border-slate-200 text-sm font-medium resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-4">
                <Button
                  type="button"
                  onClick={() => setStep(2)}
                  variant="liquidGlass"
                  size="default"
                  className="gap-2"
                >
                  <ArrowLeft size={15} />
                  <span>Back</span>
                </Button>

                <div className="flex items-center gap-3">
                  <Button
                    type="button"
                    onClick={openWhatsApp}
                    variant="liquidGlass"
                    size="default"
                    className="gap-2 text-[#4f47e6]"
                  >
                    <MessageSquare size={15} />
                    <span>Send via WhatsApp</span>
                  </Button>

                  <Button
                    type="submit"
                    variant="brand"
                    size="default"
                    className="gap-2"
                  >
                    <Send size={15} />
                    <span>Submit Project Scope</span>
                  </Button>
                </div>
              </div>
            </motion.form>
          )}

          {/* Success Screen */}
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-2xs">
                <CheckCircle2 size={32} />
              </div>

              <div className="max-w-md mx-auto">
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                  Project Scope Received!
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. Our technical leads are reviewing your {selectedType} requirements and will respond via {formData.contact} within 24 hours.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                <Button
                  onClick={openWhatsApp}
                  variant="brand"
                  size="default"
                  className="gap-2"
                >
                  <MessageSquare size={15} />
                  <span>Fast-Track on WhatsApp</span>
                </Button>

                <Button
                  onClick={() => {
                    setIsSubmitted(false);
                    setStep(1);
                  }}
                  variant="liquidGlass"
                  size="default"
                >
                  <span>Submit Another Project</span>
                </Button>
              </div>
            </motion.div>
          )}
        </motion.div>

      </div>
    </section>
  );
}
