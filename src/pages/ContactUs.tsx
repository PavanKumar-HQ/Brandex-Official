import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Phone, MapPin, Building2, Clock, ArrowLeft, ShieldCheck, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const merchantDetails = [
  {
    icon: Building2,
    label: "Merchant Legal Entity Name",
    content: <span className="text-slate-900 font-bold text-base sm:text-lg">Brandex</span>,
  },
  {
    icon: FileText,
    label: "GSTIN Identification Number",
    content: <span className="text-slate-900 font-mono font-bold text-sm sm:text-base">29OGNPS8060K1Z5</span>,
  },
  {
    icon: MapPin,
    label: "Registered & Operational Address",
    content: (
      <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
        #121, 13th Main M.C. Layout,<br />
        Vijaynagar, Bangalore,<br />
        Karnataka, PIN: 560040
      </p>
    ),
  },
  {
    icon: Phone,
    label: "Telephone & WhatsApp Direct Lines",
    content: (
      <div className="space-y-1">
        <div>
          <a href="tel:+919480944727" className="text-slate-900 hover:text-[#4f47e6] transition-colors font-bold text-sm sm:text-base">
            +91 94809 44727
          </a>
        </div>
      </div>
    ),
  },
  {
    icon: Mail,
    label: "Official Support & Inquiries Email",
    content: (
      <a href="mailto:brandexhq@gmail.com" className="text-slate-900 hover:text-[#4f47e6] transition-colors font-bold text-sm sm:text-base break-all">
        brandexhq@gmail.com
      </a>
    ),
  },
  {
    icon: Clock,
    label: "Operational Business Hours",
    content: (
      <p className="text-slate-800 text-sm sm:text-base font-medium">
        Monday &ndash; Friday, 9:00 AM &ndash; 6:00 PM IST
      </p>
    ),
  },
];

export default function ContactUsPage() {
  useScrollReveal();

  return (
    <>
      <SEOHead
        title="Merchant Details & Contact Us | Brandex"
        description="Official registered merchant information, operational office address, and contact lines for Brandex. Vijaynagar, Bangalore."
        canonicalUrl="/contact-us"
      />

      <section className="pt-24 pb-16 lg:pt-28 lg:pb-20 bg-[#f8fafd] min-h-screen border-b border-slate-200/80">
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
          <div className="max-w-3xl mb-8 sm:mb-12 scroll-reveal">
            <div className="liquid-glass-pill inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider text-[#4f47e6] uppercase mb-3 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
              Verified Merchant & Business Information
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
              Merchant Details & Support
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 font-mono">
              Official Registered Business Profile &bull; Updated for Fiscal Year 2026
            </p>
          </div>

          {/* Main Card */}
          <div className="w-full max-w-3xl scroll-reveal">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-sm space-y-6">

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                You may contact Brandex for service inquiries, institutional contracts, merchant verification, or technical support using the verified credentials below:
              </p>

              {/* Detail rows */}
              <div className="divide-y divide-slate-100">
                {merchantDetails.map(({ icon: Icon, label, content }) => (
                  <div key={label} className="py-4.5 flex items-start gap-4 sm:gap-5 first:pt-2 last:pb-0">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100/80 flex items-center justify-center text-[#4f47e6] shrink-0 mt-0.5 shadow-2xs">
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0 flex-1 space-y-1">
                      <p className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                        {label}
                      </p>
                      <div>{content}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Security Badge */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-500">
                <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
                <span>Verified Direct Support &bull; Bangalore, Karnataka, India</span>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}
