import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Mail,
  Phone,
  MapPin,
  Building2,
  Clock,
  ArrowLeft,
  ShieldCheck,
  FileText,
  Copy,
  Check,
  MessageSquare,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { SITE_CONFIG } from "@/config/site";

export default function ContactUsPage() {
  useScrollReveal();
  const [copiedGstin, setCopiedGstin] = useState(false);

  const copyGstin = () => {
    navigator.clipboard.writeText("29OGNPS8060K1Z5");
    setCopiedGstin(true);
    setTimeout(() => setCopiedGstin(false), 2000);
  };

  return (
    <>
      <SEOHead
        title="Merchant Details & Contact Us | Brandex"
        description="Official registered merchant information, operational office address, and contact lines for Brandex. Vijaynagar, Bangalore."
        canonicalUrl="/contact-us"
      />

      <section className="pt-24 pb-20 lg:pt-28 lg:pb-24 bg-[#f8fafd] min-h-screen border-b border-slate-200/80">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back link */}
          <div className="mb-6">
            <Link
              to="/"
              className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 hover:text-[#4f47e6] transition-colors shadow-2xs"
            >
              <ArrowLeft size={13} /> <span>Back to Home</span>
            </Link>
          </div>

          {/* Header */}
          <div className="max-w-2xl mb-10 scroll-reveal">
            <div className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider text-[#4f47e6] uppercase mb-3 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
              Verified Merchant Profile
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
              Merchant Details & Support
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Official registered credentials for institutional contracts, client verification, and technical support.
            </p>
          </div>

          {/* Elegant Bento Grid Layout (Uncluttered, Spacious & Modern) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-8 scroll-reveal">
            
            {/* 1. Legal Entity & GSTIN Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4f47e6]">
                    <Building2 size={18} />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <ShieldCheck size={13} className="text-emerald-600" />
                    <span>Active Merchant</span>
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Merchant Legal Entity Name
                    </span>
                    <h2 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
                      Brandex
                    </h2>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                      GSTIN Identification Number
                    </span>
                    <div className="flex items-center gap-2">
                      <code className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 font-mono font-bold text-sm text-slate-800 tracking-wider">
                        29OGNPS8060K1Z5
                      </code>
                      <button
                        type="button"
                        onClick={copyGstin}
                        className="px-2.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-500 hover:text-slate-800 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                        title="Copy GSTIN"
                      >
                        {copiedGstin ? (
                          <>
                            <Check size={13} className="text-emerald-600" />
                            <span className="text-emerald-600 text-[11px]">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy size={13} />
                            <span className="text-[11px]">Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Direct Communications Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4f47e6]">
                    <Phone size={18} />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
                    <span>Direct Founders Line</span>
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Telephone & WhatsApp Support
                    </span>
                    <a
                      href="tel:+919480944727"
                      className="text-lg sm:text-xl font-bold text-slate-900 hover:text-[#4f47e6] transition-colors block"
                    >
                      +91 94809 44727
                    </a>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Official Support & Inquiries Email
                    </span>
                    <a
                      href="mailto:brandexhq@gmail.com"
                      className="text-sm sm:text-base font-bold text-slate-900 hover:text-[#4f47e6] transition-colors block break-all"
                    >
                      brandexhq@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2">
                <Button
                  asChild
                  variant="brand"
                  size="sm"
                  className="rounded-xl flex-1 text-xs h-9"
                >
                  <a
                    href="https://wa.me/919480944727?text=Hello%20Brandex%2C%20I%20am%20reaching%20out%20regarding%20merchant%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-1.5"
                  >
                    <MessageSquare size={13} />
                    <span>WhatsApp Us</span>
                  </a>
                </Button>
                <Button
                  asChild
                  variant="liquidGlass"
                  size="sm"
                  className="rounded-xl flex-1 text-xs h-9"
                >
                  <a href="mailto:brandexhq@gmail.com" className="gap-1.5">
                    <Mail size={13} />
                    <span>Email Support</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* 3. Registered & Operational Address Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4f47e6]">
                    <MapPin size={18} />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 font-bold uppercase">
                    Karnataka &bull; PIN: 560040
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                    Registered & Operational Address
                  </span>
                  <address className="not-italic text-sm sm:text-base text-slate-800 leading-relaxed font-semibold">
                    #121, 13th Main M.C. Layout,<br />
                    Vijaynagar, Bangalore,<br />
                    Karnataka, India &ndash; 560040
                  </address>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                Centrally located technical engineering & operations office
              </div>
            </div>

            {/* 4. Operating Business Hours & SLA Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4f47e6]">
                    <Clock size={18} />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Response &lt; 24h</span>
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Operational Business Hours
                    </span>
                    <p className="text-base sm:text-lg font-bold text-slate-900">
                      Monday &ndash; Friday
                    </p>
                    <p className="text-sm font-semibold text-slate-600">
                      9:00 AM &ndash; 6:00 PM IST
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Emergency technical escalations for active client production systems are monitored 24/7/365.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#4f47e6]">
                <ShieldCheck size={14} className="text-emerald-600 shrink-0" />
                <span>Verified Direct Support &bull; Bangalore, Karnataka, India</span>
              </div>
            </div>

          </div>

          {/* Institutional Compliance Seal Bar */}
          <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 shadow-2xs scroll-reveal">
            <div className="flex items-center gap-2.5 text-center sm:text-left">
              <ShieldCheck size={18} className="text-[#4f47e6] shrink-0" />
              <span>
                Brandex operates in full compliance with Indian Goods and Services Tax regulations (GSTIN: 29OGNPS8060K1Z5).
              </span>
            </div>
            <Link
              to="/contact"
              className="text-[#4f47e6] hover:underline font-bold text-xs shrink-0 flex items-center gap-1"
            >
              <span>Schedule Technical Consultation</span>
              <ArrowLeft size={12} className="rotate-180" />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
