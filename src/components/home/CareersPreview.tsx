import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, MapPin, Sparkles, Code2, TrendingUp, Users, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const featuredOpportunities = [
  {
    id: "eng-fullstack",
    title: "Full-Stack Software Engineer",
    department: "Engineering Guild",
    location: "Bangalore / Hybrid",
    type: "Full-Time / Contract",
    icon: Code2,
    badgeColor: "bg-[#475fd1]/10 text-[#475fd1] border-[#475fd1]/20",
    description: "Architect high-performance web platforms, microservices, and autonomous AI automation pipelines with sub-second response times.",
    skills: ["React / Next.js", "TypeScript", "Node.js", "AI Workflows"],
    applyLink: "/careers",
  },
  {
    id: "growth-bizdev",
    title: "B2B Business Development & Growth",
    department: "Growth & Strategy",
    location: "Bangalore / Hybrid",
    type: "Internship (PPO Opportunity)",
    icon: TrendingUp,
    badgeColor: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
    description: "Drive client outreach, qualify outbound B2B leads, structure custom software proposals, and collaborate directly with leadership.",
    skills: ["B2B Lead Gen", "Client Prospecting", "CRM Pipelines", "Proposal Research"],
    applyLink: "/careers",
  },
  {
    id: "campus-ambassador",
    title: "Campus Ambassador & Community Lead",
    department: "Brandex Community Guild",
    location: "Bangalore & Pan-India",
    type: "Student Cohort 2026",
    icon: Users,
    badgeColor: "bg-amber-500/10 text-amber-700 border-amber-500/20",
    description: "Lead developer meetups, host collegiate hackathons, and represent Brandex with official merchandise, mentorship, and certifications.",
    skills: ["Campus Hackathons", "Community Building", "Leadership", "Mentorship"],
    applyLink: "/education/campus-ambassador",
  },
];

export default function CareersPreview() {
  return (
    <section className="py-10 lg:py-14 relative overflow-hidden border-b border-slate-200/60 w-full bg-[#f8fafd]" id="careers">
      {/* Ambient Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-2xl">
            <div className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-widest text-[#475fd1] uppercase mb-2.5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#475fd1] animate-pulse" />
              Careers &amp; Community Opportunities
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Build With Purpose at <span className="text-[#475fd1]">Brandex</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal mt-1.5">
              Join our engineering, growth, and community guilds in Bangalore or remotely. Work on real production software and developer education.
            </p>
          </div>

          <Button
            asChild
            size="default"
            className="rounded-full self-start md:self-auto shrink-0 font-bold text-xs sm:text-sm h-11 px-6 bg-white hover:bg-[#475fd1] text-slate-900 hover:text-white border-2 border-slate-200 hover:border-[#475fd1] shadow-xs hover:shadow-lg hover:shadow-[#475fd1]/25 transition-all duration-300 group"
          >
            <Link to="/careers" className="flex items-center gap-2.5">
              <span>View All Careers &amp; Openings</span>
              <div className="w-5 h-5 rounded-full bg-slate-100 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                <ArrowRight size={12} className="text-[#475fd1] group-hover:text-white group-hover:translate-x-0.5 transition-all" />
              </div>
            </Link>
          </Button>
        </motion.div>

        {/* 3-Column Opportunities Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {featuredOpportunities.map((role, i) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="liquid-glass-card hover:bg-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between group transition-all duration-200 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-[#475fd1]/40"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <Badge variant="outline" className={`font-mono text-[11px] px-2.5 py-0.5 font-bold ${role.badgeColor}`}>
                      {role.department}
                    </Badge>
                    <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                      <MapPin size={11} className="text-[#475fd1]" /> {role.location}
                    </span>
                  </div>

                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-[#475fd1]/10 flex items-center justify-center text-slate-700 group-hover:text-[#475fd1] transition-colors shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#475fd1] transition-colors leading-snug">
                        {role.title}
                      </h3>
                      <span className="text-xs font-semibold text-slate-500">{role.type}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                    {role.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {role.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                    <Sparkles size={12} className="text-[#475fd1]" /> Active Opportunity
                  </span>
                  
                  <Button
                    asChild
                    size="sm"
                    className="h-8 px-4 rounded-xl bg-[#475fd1] hover:bg-[#3b51be] text-white text-xs font-bold shadow-xs hover:shadow-md hover:shadow-[#475fd1]/20 transition-all"
                  >
                    <Link to={role.applyLink} className="flex items-center gap-1.5">
                      <span>Apply Now</span>
                      <ArrowRight size={12} />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Fused Community Application Status Tracker Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-8 liquid-glass-card rounded-2xl p-5 sm:p-6 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#475fd1]/10 text-[#475fd1] flex items-center justify-center shrink-0">
              <Briefcase size={20} />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm sm:text-base text-slate-900">
                Already submitted an application or fellowship inquiry?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Check live admissions, referral evaluations, and candidate review status directly in our Community Tracker.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="rounded-xl border-slate-300 font-bold text-xs hover:bg-[#475fd1] hover:text-white hover:border-[#475fd1] transition-all"
            >
              <Link to="/community/status" className="flex items-center gap-1.5">
                <span>Check Application Status</span>
                <ArrowRight size={12} />
              </Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="rounded-xl bg-slate-900 hover:bg-[#475fd1] text-white font-bold text-xs transition-all"
            >
              <Link to="/community" className="flex items-center gap-1.5">
                <span>Community Guilds</span>
              </Link>
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
