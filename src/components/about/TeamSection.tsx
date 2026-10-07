import { Link } from "react-router-dom";
import { teamMembers } from "@/data/team";
import { ArrowRight, User, ShieldCheck, Sparkles } from "lucide-react";

export default function TeamSection() {
  return (
    <section id="founders" className="py-10 lg:py-14 bg-[#f8fafd] border-b border-slate-200/80 relative">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="max-w-3xl mb-14 scroll-reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#475fd1]/10 border border-[#475fd1]/20 text-[#475fd1] text-xs font-mono font-bold tracking-wider uppercase mb-3">
            <User size={13} /> Founding Leadership
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
            The Founders Behind <span className="text-[#475fd1]">Brandex</span>
          </h2>
          <p className="text-base lg:text-lg text-slate-600 leading-relaxed font-normal">
            Hands-on technical architects and operational leaders committed to building high-performance software, automated digital operations, and long-term client value.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, i) => (
            <Link
              key={member.slug}
              to={`/team/${member.slug}`}
              aria-label={`View full profile of ${member.name}`}
              className={`scroll-reveal scroll-reveal-delay-${i + 1} group block bg-white border border-slate-200/90 hover:border-[#475fd1] rounded-3xl p-7 lg:p-8 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#475fd1]/10 transition-all duration-300 ease-out flex flex-col justify-between cursor-pointer`}
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-[#475fd1]/30 shadow-xs"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-2xl bg-[#475fd1]/10 border border-[#475fd1]/20 flex items-center justify-center group-hover:bg-[#475fd1]/20 group-hover:scale-105 transition-all duration-300 shadow-inner">
                      <span className="text-xl font-display font-extrabold text-[#475fd1]">{member.initials}</span>
                    </div>
                  )}
                  <div>
                    <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-[#475fd1] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#475fd1] tracking-wide mt-0.5">{member.role}</p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
                  {member.bio}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {member.expertise.slice(0, 3).map((exp) => (
                    <span
                      key={exp}
                      className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200/80"
                    >
                      {exp.split("(")[0]}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-slate-100 space-y-3.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-mono text-[11px]">{member.email}</span>
                  <span className="font-mono text-[11px] font-semibold text-[#475fd1] bg-[#475fd1]/10 px-2.5 py-0.5 rounded-full">
                    Executive Profile
                  </span>
                </div>

                <div className="w-full py-3 px-5 rounded-2xl bg-[#475fd1] group-hover:bg-[#3b51be] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-[#475fd1]/20 group-hover:shadow-lg group-hover:shadow-[#475fd1]/30 transition-all duration-200">
                  <span>View Full Profile &amp; Bio</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
