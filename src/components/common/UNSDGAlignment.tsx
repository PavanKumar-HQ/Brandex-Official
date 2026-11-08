import React from 'react';
import { 
  GraduationCap, 
  TrendingUp, 
  Cpu, 
  Users, 
  Handshake, 
  ExternalLink,
  ShieldCheck,
  Globe2
} from 'lucide-react';

export interface SDGGoal {
  number: number;
  code: string;
  title: string;
  officialName: string;
  color: string;
  bgColor: string;
  borderColor: string;
  icon: React.ElementType;
  brandexInitiatives: string[];
  targetRef: string;
}

export const SUPPORTED_SDGS: SDGGoal[] = [
  {
    number: 4,
    code: "SDG 4",
    title: "Quality Education",
    officialName: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all",
    color: "#C5192D",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
    icon: GraduationCap,
    targetRef: "Target 4.4 & 4.7",
    brandexInitiatives: [
      "AI Literacy & Prompt Engineering workshops for undergraduate & school students",
      "Geniusphere educational curriculum bridging academic theory and practical software engineering",
      "Hands-on full-stack coding bootcamps and digital skills training across Karnataka"
    ]
  },
  {
    number: 8,
    code: "SDG 8",
    title: "Decent Work & Economic Growth",
    officialName: "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all",
    color: "#A21942",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/30",
    icon: TrendingUp,
    targetRef: "Target 8.2 & 8.6",
    brandexInitiatives: [
      "Brandex Campus Ambassador Leadership program fostering student technology careers",
      "Real-world builder incubation, code reviews, and enterprise architecture mentorship",
      "Equipping next-generation builders with in-demand full-stack and AI skills"
    ]
  },
  {
    number: 9,
    code: "SDG 9",
    title: "Industry, Innovation & Infrastructure",
    officialName: "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation",
    color: "#FD6925",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    icon: Cpu,
    targetRef: "Target 9.5 & 9.c",
    brandexInitiatives: [
      "Custom enterprise software architecture (Brandex Travel CRM & Invoice Builder)",
      "Zero-Trust cybersecurity architecture, edge API optimization, and autonomous AI agents",
      "Open-source developer tooling (Convertly, Passworks, Blushbooth, GeoSnap)"
    ]
  },
  {
    number: 10,
    code: "SDG 10",
    title: "Reduced Inequalities",
    officialName: "Reduce inequality within and among countries",
    color: "#DD1367",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/30",
    icon: Users,
    targetRef: "Target 10.2",
    brandexInitiatives: [
      "Democratizing access to advanced AI education beyond metropolitan tier-1 institutions",
      "Free open-source community workshops and low-barrier entry to computer science",
      "Inclusive student incubators supporting diverse early-stage collegiate founders"
    ]
  },
  {
    number: 17,
    code: "SDG 17",
    title: "Partnerships for the Goals",
    officialName: "Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development",
    color: "#19486A",
    bgColor: "bg-sky-500/10",
    borderColor: "border-sky-500/30",
    icon: Handshake,
    targetRef: "Target 17.16 & 17.17",
    brandexInitiatives: [
      "Institutional university and school partnerships across Karnataka",
      "Collaborative builder hackathons and campus chapter networks",
      "Knowledge-sharing ecosystems partnering with industry practitioners and educators"
    ]
  }
];

interface UNSDGAlignmentProps {
  className?: string;
  variant?: 'full' | 'compact';
}

export const UNSDGAlignment: React.FC<UNSDGAlignmentProps> = ({ 
  className = "",
  variant = 'full'
}) => {
  return (
    <section className={`rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden ${className}`}>
      {/* Background Accent Subtle Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-[#475fd1]/10 via-[#C5192D]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Header Banner */}
      <div className="space-y-3 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-bold tracking-wider uppercase">
          <Globe2 size={14} className="text-[#475fd1]" />
          <span>Global Impact Alignment</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-3xl">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Supporting the <span className="text-[#475fd1]">United Nations</span> Sustainable Development Goals
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              At Brandex, our technology engineering, AI literacy bootcamps, and institutional education initiatives are actively engineered to support the United Nations 2030 Agenda for Sustainable Development.
            </p>
          </div>

          <a 
            href="https://sdgs.un.org/goals" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#475fd1] hover:underline shrink-0"
          >
            <span>Official UN SDG Framework</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* Goals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 pt-8 relative z-10">
        {SUPPORTED_SDGS.map((sdg) => {
          const Icon = sdg.icon;
          return (
            <div 
              key={sdg.number}
              className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5 sm:p-6 flex flex-col justify-between hover:border-slate-300 hover:bg-slate-50 hover:shadow-md transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Header Badge & Icon */}
                <div className="flex items-center justify-between">
                  <div 
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-white shadow-xs"
                    style={{ backgroundColor: sdg.color }}
                  >
                    <span>GOAL {sdg.number}</span>
                  </div>
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 shadow-xs"
                    style={{ backgroundColor: sdg.color }}
                  >
                    <Icon size={20} />
                  </div>
                </div>

                {/* Title & Official Target */}
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-[#475fd1] transition-colors">
                    {sdg.title}
                  </h3>
                  <span className="text-[11px] font-mono font-semibold text-slate-500 uppercase tracking-wider block mt-0.5">
                    {sdg.targetRef}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                  {sdg.officialName}
                </p>

                {/* Key Initiatives Bullets */}
                <div className="space-y-2 pt-2 border-t border-slate-200/80">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                    Brandex Active Initiatives:
                  </span>
                  <ul className="space-y-1.5">
                    {sdg.brandexInitiatives.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-normal">
                        <ShieldCheck size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mandatory UN Legal Compliance Notice */}
      <div className="mt-8 pt-5 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] text-slate-500">
        <p className="leading-relaxed">
          <strong>Compliance Disclaimer:</strong> Brandex supports the Sustainable Development Goals. The content of this website has not been approved by the United Nations and does not reflect the official views of the United Nations.
        </p>
        <span className="font-mono text-[10px] text-slate-400 shrink-0">
          UN SDG Guidelines (DGC)
        </span>
      </div>
    </section>
  );
};
