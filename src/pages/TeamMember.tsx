import { useParams, Link, Navigate } from "react-router-dom";
import { getTeamMember, teamMembers } from "@/data/team";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SEOTags from "@/components/SEOTags";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { 
  Linkedin, 
  Github, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  ExternalLink,
  ShieldCheck,
  User,
  Code2,
  GraduationCap,
  FolderGit2
} from "lucide-react";
import { motion } from "framer-motion";

export default function TeamMemberPage() {
  useScrollReveal();
  const { slug } = useParams<{ slug: string }>();
  
  const member = slug ? getTeamMember(slug) : undefined;

  if (!member) {
    return <Navigate to="/about" replace />;
  }

  const otherMembers = teamMembers.filter((m) => m.slug !== member.slug);

  const canonicalUrl = `https://www.brandex.co.in/team/${member.slug}`;

  return (
    <>
      <SEOTags
        title={`${member.name} — Co-Founder at Brandex`}
        description={
          member.slug === "pavan-kumar"
            ? "Pavan Kumar is a co-founder at Brandex, working across software, technology, AI and education initiatives based in Bengaluru."
            : `${member.name} is the ${member.role} at Brandex. ${member.bio}`
        }
        keywords={`${member.name}, ${member.role}, Brandex co-founder, ${member.slug === "pavan-kumar" ? "Pavan Kumar Bangalore, Geniusphere, AI literacy workshops" : "Sathvik Nagesh cybersecurity, Zero-Trust"}, Brandex leadership, technology team Bangalore, ${member.expertise.slice(0, 3).join(", ")}`}
        canonicalUrl={canonicalUrl}
        type="profile"
        image={member.image ? `https://www.brandex.co.in${member.image}` : "https://www.brandex.co.in/og/about.png"}
        schema={[
          {
            "@type": "ProfilePage",
            "@id": `${canonicalUrl}#profile`,
            "name": `${member.name} Official Profile`,
            "url": canonicalUrl,
            "isPartOf": { "@id": "https://www.brandex.co.in/#website" },
            "mainEntity": { "@id": `${canonicalUrl}#person` }
          },
          {
            "@type": "Person",
            "@id": `${canonicalUrl}#person`,
            "name": member.name,
            "jobTitle": member.role,
            "description": member.bio,
            "email": member.email,
            "worksFor": {
              "@type": "Organization",
              "@id": "https://www.brandex.co.in/#organization",
              "name": "Brandex",
              "url": "https://www.brandex.co.in"
            },
            "knowsAbout": member.expertise,
            "sameAs": [
              member.linkedin,
              member.github
            ].filter(Boolean)
          }
        ]}
      />

      <section className="pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-20 relative overflow-hidden bg-background">
        <div className="container mx-auto px-6 relative z-10">
          <Breadcrumb
            items={[
              { label: "About", href: "/about" },
              { label: "Leadership", href: "/about#team" },
              { label: member.name },
            ]}
            className="mb-6"
          />

          {/* Hero Grid */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Photo Frame / Avatar & Contact Card */}
            <div className="lg:col-span-5 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-3xl p-2 bg-gradient-to-b from-accent/30 via-border/50 to-border/30 border border-border/80 shadow-2xl shadow-accent/[0.05]"
              >
                {/* Photo Space / Image Placeholder */}
                <div className="relative aspect-[4/5] rounded-2xl bg-gradient-to-br from-card to-secondary overflow-hidden flex flex-col items-center justify-center p-8 border border-border/60">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  ) : (
                    <div className="text-center space-y-4">
                      <div className="w-28 h-28 rounded-full bg-accent/15 border-2 border-accent/30 text-accent font-display text-4xl font-extrabold flex items-center justify-center mx-auto shadow-inner">
                        {member.initials}
                      </div>
                      <div className="space-y-1">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs font-medium border border-border">
                          <User size={13} className="text-accent" /> Verified Leadership Profile
                        </div>
                        <p className="text-xs text-muted-foreground/70">
                          Brandex Founding Team
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Quick Contact & Info Card */}
              <div className="bg-card border-2 border-border/80 rounded-2xl p-6 space-y-4 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Direct Connection &amp; Socials</h3>
                <div className="space-y-2.5">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-3 text-sm text-foreground hover:text-accent font-medium transition-colors p-2.5 rounded-xl bg-secondary/50 hover:bg-secondary border border-border/50"
                  >
                    <Mail size={16} className="text-accent flex-shrink-0" />
                    <span className="truncate">{member.email}</span>
                  </a>

                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-sm text-foreground hover:text-accent font-medium transition-colors p-2.5 rounded-xl bg-secondary/50 hover:bg-secondary border border-border/50"
                    >
                      <div className="flex items-center gap-3">
                        <Linkedin size={16} className="text-[#0A66C2] flex-shrink-0" />
                        <span>LinkedIn Profile</span>
                      </div>
                      <ExternalLink size={14} className="text-muted-foreground" />
                    </a>
                  )}

                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-sm text-foreground hover:text-accent font-medium transition-colors p-2.5 rounded-xl bg-secondary/50 hover:bg-secondary border border-border/50"
                    >
                      <div className="flex items-center gap-3">
                        <Github size={16} className="text-foreground flex-shrink-0" />
                        <span>GitHub Profile &amp; Repos</span>
                      </div>
                      <ExternalLink size={14} className="text-muted-foreground" />
                    </a>
                  )}
                </div>

                <div className="pt-2">
                  <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold shadow-md shadow-accent/20 h-11 rounded-xl cursor-pointer">
                    <Link to="/contact">
                      Book Technical Consultation <ArrowRight size={14} className="ml-1.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column: Bio, Expertise, Education, Open Source, Initiatives */}
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-wide uppercase">
                  <Award size={13} /> {member.title}
                </div>
                <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                  {member.name}
                </h1>
                <p className="text-lg font-medium text-accent">
                  {member.role}
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed pt-1">
                  {member.tagline}
                </p>
              </div>

              {/* Biography */}
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <h2 className="font-display text-2xl font-bold text-foreground">Background &amp; Philosophy</h2>
                {member.longBio.map((paragraph, idx) => (
                  <p key={idx} className="text-base leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Specialized Credentials / Education */}
              {member.educationOrCertifications && (
                <div className="space-y-3">
                  <h2 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
                    <GraduationCap size={20} className="text-accent" /> Specializations &amp; Qualifications
                  </h2>
                  <div className="space-y-2">
                    {member.educationOrCertifications.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3.5 rounded-xl bg-card border-2 border-border/80 text-sm font-medium text-foreground shadow-sm"
                      >
                        <ShieldCheck size={16} className="text-accent flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Core Expertise */}
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-bold text-foreground">Core Competencies &amp; Technical Mastery</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {member.expertise.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-start gap-2.5 p-3.5 rounded-xl bg-card border-2 border-border/80 text-sm font-medium text-foreground shadow-sm"
                    >
                      <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Open Source Projects Spotlight */}
              {member.openSourceProjects && member.openSourceProjects.length > 0 && (
                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between">
                    <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-2.5">
                      <FolderGit2 size={22} className="text-accent" /> Open Source Repositories
                    </h2>
                    <a
                      href={member.github || "https://github.com/Sathvik-Nagesh"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-accent hover:underline flex items-center gap-1"
                    >
                      View All on GitHub <ExternalLink size={12} />
                    </a>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {member.openSourceProjects.map((proj) => (
                      <a
                        key={proj.title}
                        href={proj.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-5 rounded-2xl bg-card border-2 border-border/80 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/[0.06] transition-all duration-300 flex flex-col justify-between space-y-3"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <span className="font-display font-bold text-base text-foreground group-hover:text-accent transition-colors flex items-center gap-1.5">
                              <Code2 size={16} className="text-accent" />
                              {proj.title}
                            </span>
                            <ExternalLink size={13} className="text-muted-foreground group-hover:text-accent transition-colors" />
                          </div>
                          <span className="inline-block text-[11px] font-semibold text-accent/90 mb-2">{proj.category}</span>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {proj.description}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-1 pt-2 border-t border-border/60">
                          {proj.tags.map((tag) => (
                            <span key={tag} className="text-[10px] bg-secondary px-2 py-0.5 rounded text-muted-foreground font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Operating Philosophies */}
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-bold text-foreground">Operating Principles</h2>
                <div className="space-y-3">
                  {member.philosophies.map((phil) => (
                    <div
                      key={phil.title}
                      className="p-5 rounded-2xl bg-card border-2 border-border/80 space-y-1.5 shadow-sm"
                    >
                      <h3 className="font-display font-bold text-base text-foreground flex items-center gap-2">
                        <ShieldCheck size={16} className="text-accent" />
                        {phil.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {phil.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Initiatives */}
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-bold text-foreground">Key Products &amp; Initiatives Led</h2>
                <div className="space-y-3">
                  {member.keyInitiatives.map((init) => (
                    <div
                      key={init.title}
                      className="p-5 rounded-2xl bg-secondary/40 border border-border/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <h3 className="font-display font-bold text-base text-foreground">{init.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{init.desc}</p>
                      </div>
                      {init.link && (
                        init.link.startsWith("http") ? (
                          <Button asChild variant="outline" size="sm" className="flex-shrink-0 border-border bg-card hover:bg-accent hover:text-white font-semibold">
                            <a href={init.link} target="_blank" rel="noopener noreferrer">
                              Explore <ExternalLink size={13} className="ml-1" />
                            </a>
                          </Button>
                        ) : (
                          <Button asChild variant="outline" size="sm" className="flex-shrink-0 border-border bg-card hover:bg-accent hover:text-white font-semibold">
                            <Link to={init.link}>
                              Explore <ArrowRight size={13} className="ml-1" />
                            </Link>
                          </Button>
                        )
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Other Leadership Team Members */}
          {otherMembers.length > 0 && (
            <div className="mt-16 pt-12 border-t border-border/70">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Other Leadership Team Members
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherMembers.map((other) => (
                  <Link
                    key={other.slug}
                    to={`/team/${other.slug}`}
                    className="group p-6 rounded-2xl bg-card border-2 border-border/80 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/[0.05] transition-all duration-300 flex flex-col justify-between space-y-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-accent/15 border border-accent/30 text-accent font-display font-bold text-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                        {other.initials}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg text-foreground group-hover:text-accent transition-colors">
                          {other.name}
                        </h3>
                        <p className="text-xs font-semibold text-accent">{other.role}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {other.bio}
                    </p>
                    <div className="w-full py-2.5 px-4 rounded-xl bg-slate-100 group-hover:bg-[#475fd1] text-slate-800 group-hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-200">
                      <span>View Full Profile</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
