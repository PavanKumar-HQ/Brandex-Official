import React from "react";
import SEOTags from "@/components/SEOTags";
import Breadcrumb from "@/components/Breadcrumb";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { ShieldCheck, RefreshCw, CheckCircle2, AlertCircle, FileText, Mail, Phone, Lock, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RefundPolicy() {
  useScrollReveal();

  return (
    <article className="min-h-screen bg-background text-foreground">
      {/* ── SEO Metadata ── */}
      <SEOTags
        title="Cancellation & Refund Policy | Brandex"
        description="Official universal cancellation, return, and refund policy for Brandex digital software products, SaaS subscriptions, lifetime software licenses, and engineering services."
        keywords="brandex refund policy, cancellation policy, software refund policy, digital products return, saas cancellation, payment terms, brandex bangalore"
        canonicalUrl="https://www.brandex.co.in/refund-policy"
        type="website"
        image="https://www.brandex.co.in/og/terms.png"
      />

      {/* ── Header ── */}
      <header className="relative pt-4 sm:pt-6 pb-10 sm:pb-14 border-b border-border/40 bg-gradient-to-b from-primary/[0.03] via-background to-background">
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <Breadcrumb items={[{ label: "Cancellation & Refund Policy" }]} className="mb-5" />

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-wide uppercase">
              <ShieldCheck size={13} className="text-accent" />
              Customer Protection &amp; Gateway Compliance
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Cancellation &amp; Refund Policy
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              At Brandex, we stand behind the craftsmanship of our software, digital solutions, and engineering services. This universal policy outlines fair, transparent standards for digital software licenses, SaaS subscriptions, deliverables, and refund eligibility.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-muted-foreground">
              <span><strong>Legal Entity:</strong> Brandex</span>
              <span>•</span>
              <span><strong>Last Updated:</strong> October 2026</span>
              <span>•</span>
              <span><strong>Governing Law:</strong> Karnataka, India</span>
            </div>
          </div>
        </div>
      </header>

      {/* ── Policy Sections ── */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-6 max-w-4xl space-y-10">
          {/* Quick Summary Cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-card border border-border/80 shadow-sm space-y-2">
              <div className="w-9 h-9 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                <Clock size={18} />
              </div>
              <h3 className="font-bold text-sm text-foreground">Instant Digital Delivery</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                All software licenses, download access, and onboarding kits are dispatched via email or WhatsApp within 0–2 hours of purchase.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-border/80 shadow-sm space-y-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                <RefreshCw size={18} />
              </div>
              <h3 className="font-bold text-sm text-foreground">7-Day Technical Warranty</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                100% full refund on lifetime digital software licenses if an unresolvable technical defect or bug is verified by Brandex engineering.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-border/80 shadow-sm space-y-2">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                <Lock size={18} />
              </div>
              <h3 className="font-bold text-sm text-foreground">Cancel SaaS Anytime</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Recurring monthly and annual subscriptions can be cancelled at any time before the renewal date with zero hidden exit fees.
              </p>
            </div>
          </div>

          {/* Section 1: Digital Software Products & Licenses */}
          <div className="bg-card border border-border/70 rounded-2xl p-7 sm:p-9 space-y-4 shadow-sm">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-accent/10 text-accent text-xs flex items-center justify-center font-bold">1</span>
              Digital Software Licenses (Lifetime &amp; Subscriptions)
            </h2>

            <div className="space-y-3.5 text-sm text-muted-foreground leading-relaxed">
              <p>
                Brandex develops and distributes digital business software, developer utilities, and cloud applications. To ensure fair protection for both customers and the business:
              </p>

              <h4 className="font-bold text-foreground text-sm pt-2">A. One-Time &amp; Lifetime Software Licenses</h4>
              <ul className="space-y-2 pl-4 list-disc">
                <li>
                  <strong>7-Day Technical Satisfaction Window:</strong> If you experience a verified technical defect, reproducible bug, or core incompatibility that prevents software operation, and our engineering desk is unable to resolve the issue within 7 business days of reporting, you are entitled to a <strong>100% full refund</strong>.
                </li>
                <li>
                  Refund requests must be initiated within <strong>7 calendar days</strong> of purchase by emailing <a href="mailto:billing@brandex.co.in" className="text-accent underline font-semibold">billing@brandex.co.in</a> or <a href="mailto:team@brandex.co.in" className="text-accent underline font-semibold">team@brandex.co.in</a> with your Order Reference ID.
                </li>
              </ul>

              <h4 className="font-bold text-foreground text-sm pt-2">B. Recurring SaaS &amp; Cloud Subscriptions</h4>
              <ul className="space-y-2 pl-4 list-disc">
                <li>
                  <strong>Cancel Anytime:</strong> You may cancel your subscription renewal at any time prior to the next billing date by notifying our billing desk or updating your account preferences.
                </li>
                <li>
                  Upon cancellation, your subscription remains active until the end of your current paid billing period, and no further renewal charges will be levied.
                </li>
                <li>
                  Subscription charges already incurred for active billing cycles are non-refundable once the cycle has commenced.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2: Fulfillment & Digital Delivery Policy */}
          <div className="bg-card border border-border/70 rounded-2xl p-7 sm:p-9 space-y-4 shadow-sm">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-accent/10 text-accent text-xs flex items-center justify-center font-bold">2</span>
              Fulfillment &amp; Digital Delivery Policy
            </h2>

            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                All software products and digital solutions provided on <strong>brandex.co.in</strong> are 100% digital goods.
              </p>
              <ul className="space-y-2 pl-4 list-disc">
                <li>
                  <strong>Delivery Mode:</strong> Automated digital license keys, portal credentials, and onboarding materials are dispatched directly to the customer's registered email address and WhatsApp contact.
                </li>
                <li>
                  <strong>Delivery Timeline:</strong> Instantaneous to a maximum of <strong>2 hours</strong> from payment gateway confirmation.
                </li>
                <li>
                  <strong>Tax Invoicing:</strong> Official GST-compliant tax invoices (incorporating your organization's GSTIN for Input Tax Credit) are generated and emailed within 24 hours of transaction completion.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3: Custom Engineering & Retainer Projects */}
          <div className="bg-card border border-border/70 rounded-2xl p-7 sm:p-9 space-y-4 shadow-sm">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-accent/10 text-accent text-xs flex items-center justify-center font-bold">3</span>
              Custom Engineering &amp; Retainer Services
            </h2>

            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                For custom software engineering, web application development, AI workflow automation, and annual maintenance retainers (AMCs), payments are governed by the specific Statement of Work (SOW) and Master Services Agreement (MSA) executed between Brandex and the Client.
              </p>
              <ul className="space-y-2 pl-4 list-disc">
                <li>
                  <strong>Milestone Acceptance:</strong> Project milestone payments are billed upon mutual sign-off of deliverables. Once a milestone has been reviewed, approved, and deployed, associated milestone fees are non-refundable.
                </li>
                <li>
                  <strong>Advance Deposits:</strong> If a client elects to cancel a custom project prior to kickoff, advance deposits are refundable minus direct discovery hours and administrative costs incurred.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 4: Refund Processing & Timelines */}
          <div className="bg-card border border-border/70 rounded-2xl p-7 sm:p-9 space-y-4 shadow-sm">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-accent/10 text-accent text-xs flex items-center justify-center font-bold">4</span>
              Refund Processing Method &amp; Timelines
            </h2>

            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                When a refund is approved by Brandex:
              </p>
              <ul className="space-y-2 pl-4 list-disc">
                <li>
                  <strong>Original Source Credit:</strong> Refunds are credited strictly back to the original source payment instrument (UPI account, Credit/Debit card, or NetBanking account) processed through our PCI-DSS compliant payment gateway partners.
                </li>
                <li>
                  <strong>Processing Window:</strong> The refund is initiated within <strong>24 to 48 hours</strong> of approval. Banking networks typically reflect credited funds within <strong>5 to 7 business days</strong>.
                </li>
                <li>
                  Brandex does not deduct arbitrary processing fees on valid warranty refunds.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 5: Grievance Desk & Contact Information */}
          <div className="bg-secondary/40 border border-border/80 rounded-2xl p-7 sm:p-9 space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-accent/10 text-accent text-xs flex items-center justify-center font-bold">5</span>
              Grievance Officer &amp; Billing Support
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed">
              For any billing inquiries, cancellation requests, or payment assistance, reach out directly to our designated support desk:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2 text-xs font-medium text-foreground">
              <div className="p-4 rounded-xl bg-card border border-border/70 space-y-1">
                <span className="text-[11px] text-muted-foreground uppercase font-bold">Billing &amp; Support Email</span>
                <p className="text-sm font-bold text-accent">billing@brandex.co.in</p>
                <p className="text-muted-foreground">General Inquiries: <a href="mailto:team@brandex.co.in" className="text-foreground hover:underline font-medium">team@brandex.co.in</a></p>
              </div>

              <div className="p-4 rounded-xl bg-card border border-border/70 space-y-1">
                <span className="text-[11px] text-muted-foreground uppercase font-bold">WhatsApp / Direct Line</span>
                <p className="text-sm font-bold text-foreground">+91 94809 44727</p>
                <p className="text-muted-foreground">Monday – Saturday: 9:00 AM – 7:00 PM IST</p>
              </div>

              <div className="sm:col-span-2 p-4 rounded-xl bg-card border border-border/70 space-y-1">
                <span className="text-[11px] text-muted-foreground uppercase font-bold">Registered Operating Office</span>
                <p className="text-sm font-semibold text-foreground">Brandex</p>
                <p className="text-muted-foreground">Vijaynagar, Bengaluru, Karnataka 560040, India</p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
                <a href="mailto:team@brandex.co.in">
                  <Mail size={14} className="mr-1.5" /> Contact Support Desk
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="border-border">
                <Link to="/products">
                  Explore Software Products
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
