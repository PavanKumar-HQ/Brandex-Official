import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck, CheckCircle2, HeartHandshake, AlertCircle } from "lucide-react";

export default function CommunityGuidelinesPage() {
  const guidelines = [
    {
      title: "1. Respectful & Constructive Discourse",
      desc: "Brandex is a global community of builders with diverse backgrounds. We value constructive architectural critique, respectful peer reviews, and inclusive technical discussions.",
    },
    {
      title: "2. Zero Tolerance for Spam & Direct Promotion",
      desc: "Do not post unsolicited promotional links, mass marketing offers, or spam messages in Telegram/WhatsApp groups. Share real engineering value, open-source repos, and authentic project challenges.",
    },
    {
      title: "3. Open Source & Knowledge Sharing",
      desc: "When sharing architectures, code snippets, or UI concepts, respect intellectual property, MIT/Apache licensing, and clearly credit original authors.",
    },
    {
      title: "4. Privacy & Safe Environment",
      desc: "Protect the private and sensitive information of fellow founders and developers. Never share NDA project keys, production database credentials, or private contact details without explicit consent.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafd] pt-24 pb-16 lg:pt-28 lg:pb-20 selection:bg-[#4f47e6] selection:text-white">
      <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-8 space-y-8">
        
        {/* Navigation */}
        <div className="flex items-center gap-3">
          <Link
            to="/community"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#4f47e6] transition-colors bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Community Hub</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#4f47e6] transition-colors bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs"
          >
            <span>Main Website</span>
          </Link>
        </div>

        {/* Content */}
        <div className="liquid-glass rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          <div className="space-y-2">
            <div className="liquid-glass-pill inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold text-[#4f47e6] mb-1">
              Code of Conduct
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Brandex Community Guidelines
            </h1>
            <p className="text-sm text-slate-600 font-normal">
              Standards and code of conduct for all members participating in Brandex circles, summits, and communication channels.
            </p>
          </div>

          <div className="space-y-6 pt-4 border-t border-slate-200">
            {guidelines.map((g, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <h3 className="font-display font-bold text-base text-slate-900 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#4f47e6]" />
                  <span>{g.title}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pl-6">
                  {g.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-200 text-xs text-slate-500">
            For conduct violations or questions, contact us at{" "}
            <a href="mailto:brandexhq@gmail.com" className="text-[#4f47e6] font-bold hover:underline">
              brandexhq@gmail.com
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
