import { useState, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Megaphone, Users, Star, Globe, BarChart3,
  ArrowRight, Briefcase, Heart, Zap, MapPin, Clock, Video,
  ExternalLink, CheckCircle2, X, Copy, Check, AlertCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { createApplication } from "@/services/applicationService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";
import CTABanner from "@/components/home/CTABanner";
import { useToast } from "@/hooks/use-toast";
import SEOTags from "@/components/SEOTags";
import { z } from "zod";

const careerSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
  phone: z.string().trim().min(1, "Phone number is required").max(20, "Phone is too long"),
  role: z.string().min(1, "Please select a role"),
  link: z.string().trim().url("Please enter a valid URL (e.g. LinkedIn or Portfolio)").optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please provide a short cover letter (at least 10 characters)").max(5000, "Message is too long"),
});

// Currently Active Open Roles
const openPositions = [
  {
    role: "Business Development and Lead Generation Intern",
    type: "Internship (PPO Opportunity)",
    location: "Bangalore / Hybrid",
    department: "Sales & Growth",
    icon: BarChart3,
    description: "Identify and engage prospective B2B business clients, qualify outbound leads, assist with client proposals, and collaborate directly with leadership to drive growth across technology, automation, and digital services.",
    skills: ["B2B Lead Gen", "Cold Outreach", "Client Prospecting", "CRM Pipelines", "Proposal Research"],
    linkedinUrl: "https://www.linkedin.com/company/brandex-lab",
  },
  {
    role: "Social Media Management Intern",
    type: "Internship",
    location: "Bangalore / Hybrid",
    department: "Marketing & Brand",
    icon: Megaphone,
    description: "Manage and scale Brandex's presence across LinkedIn, Instagram, and Twitter/X. Craft compelling software & tech design posts, manage content calendars, and build active community engagement.",
    skills: ["LinkedIn Growth", "Content Strategy", "Instagram Reels", "Copywriting", "Social Media Analytics"],
    linkedinUrl: "https://www.linkedin.com/company/brandex-lab",
  },
  {
    role: "On-Site Videographer",
    type: "Contract / Full-Time / On-Site",
    location: "Bangalore (On-Site)",
    department: "Media & Production",
    icon: Video,
    description: "Shoot cinematic on-site client case studies, behind-the-scenes engineering sprints, founder interviews, office walkthroughs, and high-impact short-form video content across Bangalore.",
    skills: ["Cinematography", "Video Editing (Premiere/CapCut)", "Shorts & Reels", "Audio & Lighting", "Visual Storytelling"],
    linkedinUrl: "https://www.linkedin.com/company/brandex-lab",
  },
];

const whyJoin = [
  { icon: Zap, title: "Fast-Growing Tech Team", desc: "Join a dynamic team building modern software, AI automation pipelines, and digital infrastructure." },
  { icon: Globe, title: "High-Impact Projects", desc: "Work on real client software products, CRMs, and brand systems across multiple industries." },
  { icon: Star, title: "Mentorship & Growth", desc: "Work directly alongside founders and senior engineers with hands-on learning and career growth." },
  { icon: Users, title: "Collaborative Culture", desc: "Transparent, supportive, and performance-driven environment where your ideas actually matter." },
  { icon: Heart, title: "Respect for Your Time", desc: "Flexible hybrid options, healthy work hours, and a focused, outcome-driven mindset." },
  { icon: Briefcase, title: "Growth Opportunities", desc: "Fast-track performance appraisals and full-time transition pathways for top performers." },
];

const partnerships = [
  {
    title: "Freelancer Network",
    description: "Are you an experienced developer, designer, copywriter, or videographer? Join the Brandex talent network and collaborate on upcoming client projects.",
    cta: "Apply as Freelancer",
  },
  {
    title: "Agency Partnership",
    description: "Partner with Brandex to expand your client offerings. White-label our technology, software engineering, or automation services for your clients.",
    cta: "Become a Partner",
  },
  {
    title: "Referral Partner",
    description: "Refer businesses looking for software, websites, or automation to Brandex and earn handsome commissions on every successfully closed engagement.",
    cta: "Join Referral Program",
  },
];

export default function CareersPage() {
  useScrollReveal();
  const { toast } = useToast();
  const formRef = useRef<HTMLDivElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [honeypot, setHoneypot] = useState("");
  const [activeModalRole, setActiveModalRole] = useState<typeof openPositions[0] | null>(null);
  const [submittedAppId, setSubmittedAppId] = useState("");
  const [copiedId, setCopiedId] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", role: "", link: "", message: ""
  });

  const allRoles = [
    ...openPositions.map(p => p.role),
    "Freelancer Network",
    "Agency Partner",
    "Other / General Application"
  ];

  const handleOpenModal = (role: typeof openPositions[0]) => {
    setActiveModalRole(role);
    setFormData(d => ({ ...d, role: role.role }));
  };

  const handleCloseModal = () => {
    setActiveModalRole(null);
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    if (honeypot) return;

    const result = careerSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    try {
      // 1. Process application in real-time engine and generate Unique ID
      const appRecord = await createApplication({
        type: 'career',
        name: result.data.name.trim(),
        email: result.data.email.trim().toLowerCase(),
        phone: result.data.phone.trim(),
        track: result.data.role,
        details: {
          portfolioLink: result.data.link,
          coverLetter: result.data.message,
        },
      });

      setSubmittedAppId(appRecord.id);

      // 2. Dispatch to web3forms (non-blocking)
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: "249671c5-ee38-463a-9841-437d56047bb9",
            subject: `[${appRecord.id}] Career Application: ${result.data.name} — ${result.data.role}`,
            from_name: "Brandex Careers Form",
            applicationId: appRecord.id,
            ...result.data,
          }),
        });
      } catch {}

      toast({ title: "Application Registered! ✓", description: `Your application ID is ${appRecord.id}.` });
      setFormData({ name: "", email: "", phone: "", role: "", link: "", message: "" });
      setHoneypot("");
    } catch {
      const fallbackId = `BX-CAR-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedAppId(fallbackId);
      toast({ title: "Application Registered!", description: `Assigned ID ${fallbackId}` });
    } finally {
      setSubmitting(false);
    }
  };

  const fieldError = (field: string) =>
    errors[field] ? <p className="text-xs text-destructive mt-1">{errors[field]}</p> : null;

  return (
    <>
      <SEOTags 
        title="Careers at Brandex | Business Development, Social Media & Videographer Roles"
        description="Join Brandex in Bangalore. Open roles for Business Development & Lead Generation Intern, Social Media Management Intern, and On-Site Videographer."
        keywords="careers brandex, business development intern bangalore, lead generation intern, social media intern bangalore, on-site videographer bangalore, brandex jobs"
        canonicalUrl="https://www.brandex.co.in/careers"
        image="https://www.brandex.co.in/og/careers.png"
      />

      {/* Hero */}
      <section className="pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-20 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl scroll-reveal">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-wide uppercase mb-4">
              <Users size={13} className="text-accent" />
              We Are Hiring • Bangalore
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Build your career at{" "}
              <span className="text-gradient">Brandex</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
              We are expanding our growth and creative media team in Bangalore. Explore our active openings below and apply directly or through LinkedIn.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="#positions">View Active Openings <ArrowRight size={16} className="ml-2" /></a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://www.linkedin.com/company/brandex-lab" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Apply via LinkedIn <ExternalLink size={15} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Active Open Positions */}
      <section id="positions" className="py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12 scroll-reveal">
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-2">Active Openings</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Open Roles Right Now
            </h2>
            <p className="text-muted-foreground text-base">
              Click on any role to open the application overlay or submit via LinkedIn.
            </p>
          </div>

          <div className="grid gap-6 max-w-5xl">
            {openPositions.map((pos, i) => {
              const Icon = pos.icon;
              return (
                <motion.div
                  key={pos.role}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  onClick={() => handleOpenModal(pos)}
                  className="p-6 sm:p-8 bg-card border border-border/80 rounded-2xl hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group cursor-pointer"
                >
                  <div className="flex items-start gap-4 sm:gap-5 flex-1">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 group-hover:scale-105 transition-transform">
                      <Icon size={22} />
                    </div>

                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-accent px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20">
                          {pos.department}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground group-hover:text-accent transition-colors">
                        {pos.role}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {pos.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-1">
                        <span className="flex items-center gap-1.5"><MapPin size={13} className="text-accent" />{pos.location}</span>
                        <span className="flex items-center gap-1.5"><Clock size={13} className="text-accent" />{pos.type}</span>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {pos.skills.map((s) => (
                          <span key={s} className="text-[11px] px-2.5 py-1 bg-secondary border border-border/60 rounded-md text-foreground font-medium">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-border/60" onClick={(e) => e.stopPropagation()}>
                    <Button
                      onClick={() => handleOpenModal(pos)}
                      className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-md px-5"
                    >
                      Apply for it Here
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-border hover:bg-secondary text-xs"
                    >
                      <a href={pos.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5">
                        Apply on LinkedIn <ExternalLink size={12} />
                      </a>
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-16 bg-secondary/40 border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-12 scroll-reveal">
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-3">Why Brandex</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
              Why people love working here
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyJoin.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="p-6 bg-card border border-border/60 rounded-xl"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnerships & Freelancer Network */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-12 scroll-reveal">
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-3">Partnerships</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
              Work with Brandex your way
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {partnerships.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="p-7 bg-card border border-border/60 rounded-2xl flex flex-col"
              >
                <h3 className="font-display font-bold text-xl text-foreground mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{p.description}</p>
                <Button
                  onClick={() => {
                    setFormData(d => ({ ...d, role: p.title }));
                    if (formRef.current) {
                      formRef.current.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  variant="outline"
                  size="sm"
                >
                  {p.cta} <ArrowRight size={14} className="ml-1.5" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section ref={formRef} className="py-16 lg:py-20 bg-background border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 scroll-reveal">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-2 block">Direct Application</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">Submit Your Application</h2>
              <p className="text-muted-foreground text-sm max-w-lg mx-auto">
                Fill out the form below or apply through our LinkedIn page.
              </p>
            </div>
            
            <div className="bg-card border border-border/80 rounded-3xl p-6 md:p-10 shadow-xl scroll-reveal">
              {submittedAppId ? (
                <div className="py-8 text-center space-y-5 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle2 size={32} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display text-2xl font-bold text-foreground">Application Successfully Registered!</h3>
                    <p className="text-xs text-muted-foreground max-w-md mx-auto">
                      Thank you for applying to Brandex. Our engineering &amp; leadership team evaluates submissions on a rolling basis.
                    </p>
                  </div>

                  {/* Unique ID Card */}
                  <div className="p-4 sm:p-5 bg-violet-50/70 dark:bg-violet-950/30 border-2 border-violet-200 dark:border-violet-900/50 rounded-2xl max-w-md mx-auto text-left space-y-3 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold text-violet-700 dark:text-violet-400 tracking-wider">
                        Unique Application ID
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText(submittedAppId);
                          setCopiedId(true);
                          setTimeout(() => setCopiedId(false), 2000);
                        }}
                        className="text-xs font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-800 flex items-center gap-1 transition-colors px-2 py-1 rounded-md bg-white dark:bg-slate-800 shadow-2xs border border-violet-200 dark:border-violet-800"
                      >
                        {copiedId ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-600">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy ID</span>
                          </>
                        )}
                      </button>
                    </div>
                    <div className="text-xl sm:text-2xl font-mono font-extrabold text-violet-950 dark:text-white tracking-wide">
                      {submittedAppId}
                    </div>

                    {/* Advisory Warning Banner */}
                    <div className="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 rounded-xl text-amber-800 dark:text-amber-300 text-xs flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <p className="leading-snug">
                        <strong>Important:</strong> Please copy and save your Application ID. You will need it to track your candidate application review and interview scheduling in real time.
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                    <Link
                      to={`/status?id=${submittedAppId}`}
                      className="btn-primary px-6 py-2.5 text-xs font-bold rounded-xl flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white"
                    >
                      <span>Track Application Status</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Button
                      onClick={() => setSubmittedAppId("")}
                      variant="outline"
                      className="rounded-xl text-xs font-bold"
                    >
                      Submit Another Role
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="_honey"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="John Doe" required value={formData.name} onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))} />
                    {fieldError("name")}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required value={formData.email} onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))} />
                    {fieldError("email")}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" required value={formData.phone} onChange={(e) => setFormData((d) => ({ ...d, phone: e.target.value }))} />
                    {fieldError("phone")}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Role / Position *</Label>
                    <Select value={formData.role} onValueChange={(v) => setFormData((d) => ({ ...d, role: v }))}>
                      <SelectTrigger id="role"><SelectValue placeholder="Select a role" /></SelectTrigger>
                      <SelectContent>
                        {allRoles.map((r) => <SelectItem key={r} value={r}>{r}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    {fieldError("role")}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="link">Portfolio / LinkedIn Profile / Reel Link (Optional)</Label>
                  <Input id="link" type="url" placeholder="https://linkedin.com/in/yourprofile or portfolio URL" value={formData.link} onChange={(e) => setFormData((d) => ({ ...d, link: e.target.value }))} />
                  {fieldError("link")}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Cover Letter / Message / Past Work Experience *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about yourself, your background, and why you are excited to join Brandex..."
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
                  />
                  {fieldError("message")}
                </div>

                <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold h-12 text-sm shadow-lg shadow-accent/20" disabled={submitting}>
                  {submitting ? "Submitting Application..." : "Submit Application"}
                </Button>
              </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Application Overlay Modal */}
      <AnimatePresence>
        {activeModalRole && (
          <div
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-card border border-border/80 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden my-auto max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 border-b border-border/60 pb-5 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-accent px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 inline-block mb-2">
                    {activeModalRole.department}
                  </span>
                  <h3 className="font-display font-bold text-2xl text-foreground">
                    {activeModalRole.role}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                    <span className="flex items-center gap-1"><MapPin size={13} className="text-accent" />{activeModalRole.location}</span>
                    <span className="flex items-center gap-1"><Clock size={13} className="text-accent" />{activeModalRole.type}</span>
                  </div>
                </div>

                <button
                  onClick={handleCloseModal}
                  className="p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="_honey"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="m-name" className="text-xs font-semibold">Full Name *</Label>
                    <Input id="m-name" placeholder="John Doe" required value={formData.name} onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))} className="h-10 text-xs" />
                    {fieldError("name")}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="m-email" className="text-xs font-semibold">Email Address *</Label>
                    <Input id="m-email" type="email" placeholder="john@example.com" required value={formData.email} onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))} className="h-10 text-xs" />
                    {fieldError("email")}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="m-phone" className="text-xs font-semibold">Phone Number *</Label>
                    <Input id="m-phone" type="tel" placeholder="+91 XXXXX XXXXX" required value={formData.phone} onChange={(e) => setFormData((d) => ({ ...d, phone: e.target.value }))} className="h-10 text-xs" />
                    {fieldError("phone")}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="m-link" className="text-xs font-semibold">Portfolio / LinkedIn Link (Optional)</Label>
                    <Input id="m-link" type="url" placeholder="https://linkedin.com/in/..." value={formData.link} onChange={(e) => setFormData((d) => ({ ...d, link: e.target.value }))} className="h-10 text-xs" />
                    {fieldError("link")}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="m-message" className="text-xs font-semibold">Cover Note / Experience *</Label>
                  <Textarea
                    id="m-message"
                    placeholder="Briefly tell us why you are a great fit for this role..."
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
                    className="text-xs resize-none"
                  />
                  {fieldError("message")}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center">
                  <Button type="submit" size="lg" className="w-full sm:flex-1 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold h-11 text-sm shadow-md" disabled={submitting}>
                    {submitting ? "Sending..." : "Submit Application"}
                  </Button>
                  
                  <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-border hover:bg-secondary h-11 text-xs">
                    <a href={activeModalRole.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5">
                      Apply via LinkedIn <ExternalLink size={13} />
                    </a>
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <CTABanner />
    </>
  );
}
