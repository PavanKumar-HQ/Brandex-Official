import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Sparkles, Terminal, CheckCircle2, ShieldCheck, Github, Linkedin, Mail } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface TeamMember {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  initials: string;
  slug: string;
  specialties: string[];
  status: string;
  github: string;
  linkedin: string;
  email: string;
}

export default function TeamSection() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const members: TeamMember[] = [
      {
        name: "Pavan Kumar S",
        role: "Co-Founder & Chief Systems Architect",
        tagline: "High-throughput cloud architecture, distributed edge infrastructure, and full-stack software systems.",
        bio: "Specializes in architecting sub-second React/TypeScript platforms, database engines, and automated webhook pipelines that eliminate operational friction.",
        initials: "PK",
        slug: "/pavan-kumar",
        specialties: ["Distributed Cloud", "TypeScript Core", "Sub-100ms Edge", "Webhook Pipelines"],
        status: "Leading Systems Engineering",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "brandexhq@gmail.com",
      },
      {
        name: "Sathvik Nagesh",
        role: "Co-Founder & Head of Product Design",
        tagline: "Conversion UI/UX systems, user interaction frameworks, and liquid glass design tokenization.",
        bio: "Pioneers brand conversion architecture, design tokens, and user journey funnels that convert incoming digital traffic into long-term enterprise clients.",
        initials: "SN",
        slug: "/sathvik",
        specialties: ["Product Experience", "CRO Architecture", "Design Token Systems", "Framer Micro-UI"],
        status: "Leading Product & Experience",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "brandexhq@gmail.com",
      }
    ];
    setTeam(members);
    setLoading(false);
  }, []);

  return (
    <section className="py-10 lg:py-14 bg-white border-b border-slate-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="max-w-2xl mb-8">
          <div className="liquid-glass-pill inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-widest text-[#4f47e6] uppercase mb-2 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
            Founding Architects
          </div>
          <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
            Direct Access to Founding Leadership
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mt-1">
            Every engagement is led directly by our founding engineers. No account intermediaries or outsourced sub-contractors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {loading
            ? Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="liquid-glass-card rounded-3xl p-6 space-y-4">
                  <Skeleton className="w-12 h-12 rounded-2xl" />
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-4 w-48" />
                  <Skeleton className="h-16 w-full" />
                </div>
              ))
            : team.map((member) => (
                <div
                  key={member.name}
                  className="liquid-glass-card hover:bg-white/95 rounded-3xl p-6 sm:p-7 transition-all duration-200 flex flex-col justify-between border border-slate-200/90 shadow-xs hover:shadow-sm"
                >
                  <div className="space-y-4">
                    {/* Header with Avatar Crest and Status */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-[#4f47e6] flex items-center justify-center shadow-2xs">
                          <span className="text-sm font-bold text-white font-mono">{member.initials}</span>
                        </div>
                        <div>
                          <Link to={member.slug} className="font-display font-bold text-lg text-slate-900 hover:text-[#4f47e6] transition-colors block">
                            {member.name}
                          </Link>
                          <span className="text-[11px] font-mono font-bold text-[#4f47e6] block">
                            {member.role}
                          </span>
                        </div>
                      </div>

                      <div className="liquid-glass-pill px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 hidden sm:flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Active Lead</span>
                      </div>
                    </div>

                    {/* Tagline & Bio */}
                    <p className="text-xs text-slate-700 font-medium leading-relaxed bg-slate-50/70 p-3 rounded-xl border border-slate-100">
                      "{member.tagline}"
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {member.bio}
                    </p>

                    {/* Specialties Chips */}
                    <div>
                      <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Core Competencies
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {member.specialties.map((spec) => (
                          <span
                            key={spec}
                            className="px-2.5 py-0.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-[11px] font-mono font-medium shadow-2xs"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Links & Actions */}
                  <div className="pt-4 mt-5 border-t border-slate-200/70 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-[#4f47e6] text-slate-600 hover:text-white flex items-center justify-center transition-all border border-slate-200"
                        title="GitHub"
                      >
                        <Github size={13} />
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-[#4f47e6] text-slate-600 hover:text-white flex items-center justify-center transition-all border border-slate-200"
                        title="LinkedIn"
                      >
                        <Linkedin size={13} />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-[#4f47e6] text-slate-600 hover:text-white flex items-center justify-center transition-all border border-slate-200"
                        title="Direct Email"
                      >
                        <Mail size={13} />
                      </a>
                    </div>

                    <Link
                      to={member.slug}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4f47e6] hover:text-[#4338ca] transition-colors group"
                    >
                      <span>Full Technical Dossier</span>
                      <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
