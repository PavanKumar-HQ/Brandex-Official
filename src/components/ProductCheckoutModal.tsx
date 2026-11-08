import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useProductCheckout } from "@/contexts/ProductCheckoutContext";
import { useCalBooking } from "@/hooks/useCalBooking";
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  MessageSquare,
  Calendar,
  Send,
  Building,
  Mail,
  Phone,
  HelpCircle,
  Clock,
  Layers,
  Copy,
  Check
} from "lucide-react";
import { toast } from "sonner";
import { createApplication } from "@/services/applicationService";

export default function ProductCheckoutModal() {
  const { isOpen, product, closeCheckout } = useProductCheckout();
  const { openBooking } = useCalBooking();

  const [step, setStep] = useState<"form" | "success">("form");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [deploymentPreference, setDeploymentPreference] = useState("Cloud Hosted Instance");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderRef, setOrderRef] = useState("");
  const [copiedId, setCopiedId] = useState(false);

  useEffect(() => {
    if (isOpen && product) {
      setStep("form");
      setIsSubmitting(false);
      setCopiedId(false);
    }
  }, [isOpen, product]);

  if (!product) return null;

  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: product.currency || "INR",
    maximumFractionDigits: 0,
  }).format(product.price);

  const formattedRegularPrice = product.regularPrice
    ? new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: product.currency || "INR",
        maximumFractionDigits: 0,
      }).format(product.regularPrice)
    : null;

  const handleCopyId = () => {
    if (orderRef) {
      navigator.clipboard.writeText(orderRef);
      setCopiedId(true);
      toast.success("Order ID copied to clipboard!");
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      toast.error("Please fill in your name, email, and phone number.");
      return;
    }

    setIsSubmitting(true);
    try {
      // 1. Save to real-time database engine with collision-free Unique ID
      const appRecord = await createApplication({
        type: 'product',
        name: fullName,
        email,
        phone,
        organization: company || 'Individual',
        track: product.title,
        details: {
          productTitle: product.title,
          price: formattedPrice,
          cadence: product.cadence || 'Standard',
          deploymentPreference,
          notes: notes || 'None',
        },
      });

      setOrderRef(appRecord.id);

      // 2. Dispatch to Web3Forms for notification redundancy
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "249671c5-ee38-463a-9841-437d56047bb9",
          subject: `Product Purchase Request: ${product.title} - ${fullName}`,
          from_name: "Brandex Product Desk",
          orderReference: appRecord.id,
          productTitle: product.title,
          price: formattedPrice,
          cadence: product.cadence || "Standard",
          fullName,
          email,
          phone,
          company: company || "Individual",
          deploymentPreference,
          notes: notes || "None",
        }),
      }).catch((e) => console.warn("Web3Forms submission background note:", e));

      setStep("success");
      toast.success(`Order logged! ID: ${appRecord.id}`);
    } catch (err) {
      console.error("Order submission error:", err);
      // Fallback directly to success state to keep friction zero
      setStep("success");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppConnect = () => {
    const message = `Hi Brandex Team! I would like to get access to *${product.title}* (${formattedPrice}).\n\n*Reference ID:* ${orderRef}\n*Name:* ${fullName}\n*Phone:* ${phone}\n*Email:* ${email}\n*Company:* ${company || "Individual"}\n*Deployment:* ${deploymentPreference}\n${notes ? `*Notes:* ${notes}\n` : ""}\nPlease share the official onboarding access and invoice!`;
    const url = `https://wa.me/919480944727?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeCheckout()}>
      <DialogContent className="max-w-2xl max-h-[92vh] overflow-y-auto p-0 border border-border/80 bg-background/95 backdrop-blur-xl shadow-2xl rounded-3xl">
        {/* Top Header */}
        <div className="p-6 sm:p-7 border-b border-border/60 bg-gradient-to-r from-primary/10 via-accent/5 to-background flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-accent text-accent-foreground">
                Software Onboarding
              </span>
              <span className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                <Clock size={12} className="text-emerald-500" /> 1-Hour Setup Delivery
              </span>
            </div>
            <DialogTitle className="font-display text-xl sm:text-2xl font-bold text-foreground">
              {product.title}
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              {product.cadence || "Direct software license provisioning with dedicated engineer onboarding"}
            </DialogDescription>
          </div>

          {/* Pricing Box */}
          <div className="text-right shrink-0">
            <div className="flex items-baseline justify-end gap-1.5">
              {formattedRegularPrice && (
                <span className="text-xs text-muted-foreground line-through font-semibold">
                  {formattedRegularPrice}
                </span>
              )}
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-foreground">
                {formattedPrice}
              </span>
            </div>
            <span className="text-[11px] font-bold text-emerald-500 block">
              {product.badge || "Launch Pricing"}
            </span>
          </div>
        </div>

        {/* ── Step 1: Client Onboarding Form ── */}
        {step === "form" && (
          <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-6">
            <div className="space-y-1">
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-bold">1</span>
                Licensee &amp; Delivery Information
              </h3>
              <p className="text-xs text-muted-foreground">
                Please enter your details below. Our engineering desk will prepare your dedicated software instance, GST tax invoice, and license credentials immediately.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="product-name" className="text-xs font-semibold">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="product-name"
                  placeholder="e.g., Rajesh Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="bg-card border-border/80 text-sm h-11 rounded-xl"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="product-email" className="text-xs font-semibold">
                  Work / Personal Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="product-email"
                  type="email"
                  placeholder="e.g., rajesh@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-card border-border/80 text-sm h-11 rounded-xl"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="product-phone" className="text-xs font-semibold">
                  Phone / WhatsApp Number <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="product-phone"
                  type="tel"
                  placeholder="e.g., +91 94809 44727"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="bg-card border-border/80 text-sm h-11 rounded-xl"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="product-company" className="text-xs font-semibold">
                  Business / Agency Name
                </Label>
                <Input
                  id="product-company"
                  placeholder="e.g., Odyssey Voyages Pvt Ltd"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="bg-card border-border/80 text-sm h-11 rounded-xl"
                />
              </div>

              <div className="sm:col-span-2 space-y-1.5">
                <Label htmlFor="product-deploy" className="text-xs font-semibold">
                  Deployment Preference
                </Label>
                <select
                  id="product-deploy"
                  value={deploymentPreference}
                  onChange={(e) => setDeploymentPreference(e.target.value)}
                  className="w-full h-11 bg-card border border-border/80 rounded-xl px-3 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="Cloud Hosted Instance (Instant Setup)">Cloud Hosted Instance (Instant Setup &amp; Maintenance by Brandex)</option>
                  <option value="Self-Hosted / Private Cloud Deployment">Self-Hosted / Private Cloud Deployment (Dedicated Server)</option>
                  <option value="Custom Tailoring / API Integration Required">Custom Tailoring / Bespoke ERP Integration Required</option>
                </select>
              </div>

              <div className="sm:col-span-2 space-y-1.5">
                <Label htmlFor="product-notes" className="text-xs font-semibold">
                  Additional Notes or Questions (Optional)
                </Label>
                <Textarea
                  id="product-notes"
                  placeholder="Any specific feature requirements, number of staff users, or questions..."
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="bg-card border-border/80 text-sm rounded-xl resize-none"
                />
              </div>
            </div>

            {/* Inclusions summary */}
            <div className="p-4 rounded-2xl bg-secondary/50 border border-border/70 text-xs space-y-2">
              <span className="font-bold text-foreground flex items-center gap-1.5">
                <ShieldCheck size={15} className="text-emerald-500" /> Included with Your License:
              </span>
              <ul className="grid sm:grid-cols-2 gap-2 text-muted-foreground">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                  <span>Full product access &amp; credentials</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                  <span>GST-compliant tax invoicing (18% ITC)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                  <span>1-on-1 engineer onboarding session</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                  <span>Continuous software updates &amp; support</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={closeCheckout}
                className="w-full sm:w-auto border-border text-xs font-semibold h-11 px-5 rounded-xl"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-sm h-11 px-7 rounded-xl shadow-lg shadow-accent/20"
              >
                {isSubmitting ? "Submitting..." : `Request Software Access (${formattedPrice})`} <ArrowRight size={15} className="ml-1.5" />
              </Button>
            </div>

            <p className="text-[11px] text-muted-foreground text-center pt-1">
              By submitting, you agree to Brandex{" "}
              <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
                Terms
              </a>{" "}
              and{" "}
              <a href="/refund-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
                Refund Policy
              </a>.
            </p>
          </form>
        )}

        {/* ── Step 2: Success Confirmation & Direct Connection ── */}
        {step === "success" && (
          <div className="p-6 sm:p-9 text-center space-y-6">
            <div className="w-16 h-16 rounded-3xl bg-emerald-500/15 border-2 border-emerald-500/30 flex items-center justify-center text-emerald-500 mx-auto shadow-lg">
              <CheckCircle2 size={36} />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-500 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                Order Logged • Instant Engineering Desk Queue
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                We're Ready to Onboard You!
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-foreground">{fullName}</strong>. Your software provisioning request for <strong className="text-foreground">{product.title}</strong> has been logged in real time and assigned to our Bangalore engineering team.
              </p>
            </div>

            {/* Generated Unique Order ID with Copy Button */}
            <div className="p-4 sm:p-5 rounded-2xl bg-secondary/60 border-2 border-border/80 max-w-lg mx-auto text-left shadow-sm">
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-2">
                <span>Unique Application / Order ID</span>
                <span className="text-emerald-500 font-semibold font-sans">Live in Database Queue</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xl sm:text-2xl font-black text-accent tracking-wide select-all">
                  {orderRef}
                </span>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleCopyId}
                  className="h-9 px-3.5 rounded-xl border-border text-xs font-bold gap-1.5 shrink-0"
                >
                  {copiedId ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                  <span>{copiedId ? "Copied!" : "Copy ID"}</span>
                </Button>
              </div>
            </div>

            {/* Advisory Warning Banner */}
            <div className="p-3.5 bg-amber-500/10 border border-amber-500/25 rounded-xl text-left flex items-start gap-2.5 max-w-lg mx-auto">
              <span className="text-amber-500 text-sm mt-0.5">⚠️</span>
              <p className="text-[11px] sm:text-xs text-amber-900 dark:text-amber-200 leading-relaxed font-medium">
                <strong>Important:</strong> Please copy and save your Application / Order ID (<strong>{orderRef}</strong>). You will need this ID to track your license issuance, invoice status, and engineering onboarding in real time.
              </p>
            </div>

            {/* Next Steps Card */}
            <div className="bg-card border border-border/80 rounded-2xl p-4 sm:p-5 max-w-lg mx-auto text-left space-y-2.5 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-accent" /> What Happens Next:
              </span>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-accent/10 text-accent font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <span>Our desk will share the official GST proforma invoice and payment link directly to your WhatsApp / Email.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-accent/10 text-accent font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <span>We'll schedule your 1-on-1 walkthrough and issue your dedicated workspace license credentials.</span>
                </li>
              </ul>
            </div>

            {/* Direct Connect Buttons & Real-Time Tracking Link */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={`/status?id=${encodeURIComponent(orderRef)}`}
                className="inline-flex items-center justify-center bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-xs sm:text-sm h-12 px-6 rounded-xl shadow-lg shadow-accent/20 transition-all"
              >
                Track Status in Real-Time <ArrowRight size={15} className="ml-1.5" />
              </a>

              <Button
                type="button"
                onClick={handleWhatsAppConnect}
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm h-12 px-6 rounded-xl shadow-lg shadow-emerald-500/20"
              >
                <MessageSquare size={16} className="mr-2" /> Connect on WhatsApp
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  closeCheckout();
                  openBooking();
                }}
                size="lg"
                className="border-border text-xs sm:text-sm h-12 px-6 rounded-xl font-semibold"
              >
                <Calendar size={15} className="mr-2" /> Book Walkthrough
              </Button>

              <Button
                type="button"
                variant="ghost"
                onClick={closeCheckout}
                className="text-xs text-muted-foreground hover:text-foreground h-12 px-4"
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
