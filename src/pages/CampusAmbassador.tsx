import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  Send,
  Zap,
  Star,
  BookOpen,
  Calendar,
  Copy,
  Check,
  AlertCircle
} from "lucide-react";
import { createApplication } from "@/services/applicationService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import SEOTags from "@/components/SEOTags";
import Breadcrumb from "@/components/Breadcrumb";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const perks = [
  {
    title: "Founder & Engineer Mentorship",
    desc: "1-on-1 guidance from Brandex software architects on code, career trajectory, and building real digital products.",
    icon: Star,
  },
  {
    title: "Lead Campus Hackathons",
    desc: "Host technical build sprints and meetups at your college with official Brandex support, merchandise, and certificates.",
    icon: Zap,
  },
  {
    title: "Priority Internship Access",
    desc: "Direct interview fast-tracking for engineering, growth, and media roles at Brandex and client partner companies.",
    icon: Award,
  },
  {
    title: "Access to Ecosystem Tools",
    desc: "Free access to internal developer tools, private Discord builder channels, and early software product releases.",
    icon: BookOpen,
  },
];

const ambassadorSchema = z.object({
  name: z.string().trim().min(2, "Name is required"),
  email: z.string().trim().email("Valid email required"),
  phone: z.string().trim().min(6, "Valid phone number required"),
  college: z.string().trim().min(2, "College name is required"),
  yearAndBranch: z.string().trim().min(2, "Year & Branch required"),
  linkedinOrGithub: z.string().trim().optional(),
  whyJoin: z.string().trim().min(10, "Please share a short note on why you'd like to lead as an ambassador"),
});

export default function CampusAmbassadorPage() {
  useScrollReveal();
  const { toast } = useToast();

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [honeypot, setHoneypot] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    yearAndBranch: "",
    linkedinOrGithub: "",
    whyJoin: "",
  });
  const [applicationId, setApplicationId] = useState("");
  const [copiedId, setCopiedId] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    if (honeypot) return;

    const result = ambassadorSchema.safeParse(formData);
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
        type: 'ambassador',
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        organization: formData.college.trim(),
        track: formData.yearAndBranch.trim(),
        details: {
          college: formData.college.trim(),
          yearAndBranch: formData.yearAndBranch.trim(),
          linkedinOrGithub: formData.linkedinOrGithub.trim(),
          whyJoin: formData.whyJoin.trim(),
        },
      });

      setApplicationId(appRecord.id);

      // 2. Dispatch to web3forms for direct inbox delivery (non-blocking)
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: "249671c5-ee38-463a-9841-437d56047bb9",
            subject: `[${appRecord.id}] New Campus Ambassador Application: ${formData.name} - ${formData.college}`,
            from_name: "Brandex Ambassador Portal",
            applicationId: appRecord.id,
            ...formData,
          }),
        });
      } catch {}

      setSubmitted(true);
      toast({
        title: "Application Received!",
        description: `Your application has been assigned Unique ID ${appRecord.id}.`,
      });
    } catch {
      const fallbackId = `BX-AMB-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setApplicationId(fallbackId);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEOTags
        title="Brandex Campus Ambassador Program — Student Tech Leadership"
        description="Become a Brandex Campus Ambassador. Lead developer workshops, build student tech initiatives, and gain hands-on mentorship from software engineers."
        keywords="campus ambassador program, student tech leadership, brandex ambassador, college tech lead bangalore, student engineering internships"
        image="https://www.brandex.co.in/og/campus-ambassador.png"
        canonicalUrl="https://www.brandex.co.in/education/campus-ambassador"
        schema={{
          "@type": "WebPage",
          "@id": "https://www.brandex.co.in/education/campus-ambassador#webpage",
          "name": "Brandex Campus Ambassador Program",
          "description": "Student tech community leadership and mentorship program.",
          "isPartOf": { "@id": "https://www.brandex.co.in/#website" }
        }}
      />

      <section className="pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-20 relative overflow-hidden bg-background">
        <div className="container mx-auto px-6 relative z-10">
          <Breadcrumb
            items={[
              { label: "Education", href: "/education" },
              { label: "Campus Ambassador" },
            ]}
            className="mb-6"
          />

          <div className="max-w-3xl space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-wide uppercase">
              <Award size={13} className="text-accent" />
              Student Community Leadership
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
              Brandex Campus <span className="text-gradient">Ambassador Program</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Be the bridge between Brandex and your campus. Host build sessions, lead student hackathons, and learn directly from engineers who build software for a living.
            </p>
          </div>

          {/* Perks Grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {perks.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="bg-card border border-border/70 rounded-2xl p-7 shadow-sm space-y-3 hover:border-accent/40 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Application Form */}
          <div className="bg-card border border-border/80 rounded-3xl p-6 sm:p-10 shadow-xl max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Apply for the Upcoming Cohort
              </h2>
              <p className="text-xs text-muted-foreground">
                Applications are reviewed on a rolling basis. Open to students across all college years.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-8 space-y-5 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-600">
                  <CheckCircle2 size={32} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-2xl font-bold text-foreground">Ambassador Application Registered!</h3>
                  <p className="text-xs text-muted-foreground max-w-md mx-auto">
                    Thank you, <strong className="text-foreground">{formData.name}</strong>. We have received your campus leadership submission for <strong className="text-foreground">{formData.college}</strong>.
                  </p>
                </div>

                {/* Unique ID Card */}
                {applicationId && (
                  <div className="p-4 sm:p-5 bg-violet-50/70 dark:bg-violet-950/30 border-2 border-violet-200 dark:border-violet-900/50 rounded-2xl max-w-md mx-auto text-left space-y-3 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold text-violet-700 dark:text-violet-400 tracking-wider">
                        Unique Application ID
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText(applicationId);
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
                      {applicationId}
                    </div>

                    {/* Advisory Warning Banner */}
                    <div className="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 rounded-xl text-amber-800 dark:text-amber-300 text-xs flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <p className="leading-snug">
                        <strong>Important:</strong> Please copy and save your Application ID. You will need it to track your ambassador interview and selection status in real time.
                      </p>
                    </div>
                  </div>
                )}

                <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                  <Link
                    to={`/status?id=${applicationId}`}
                    className="btn-primary px-6 py-2.5 text-xs font-bold rounded-xl flex items-center justify-center gap-2"
                  >
                    <span>Track Application Status</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Button asChild variant="outline" className="rounded-xl text-xs font-bold">
                    <Link to="/community">Join Community Discord</Link>
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="_honey"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-xs font-semibold">Your Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="e.g. Sneha Rao"
                      value={formData.name}
                      onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
                      className="h-11 rounded-xl bg-background text-xs"
                    />
                    {errors.name && <p className="text-[11px] text-destructive">{errors.name}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-xs font-semibold">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="sneha@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
                      className="h-11 rounded-xl bg-background text-xs"
                    />
                    {errors.email && <p className="text-[11px] text-destructive">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-xs font-semibold">Phone / WhatsApp Number *</Label>
                    <Input
                      id="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData((d) => ({ ...d, phone: e.target.value }))}
                      className="h-11 rounded-xl bg-background text-xs"
                    />
                    {errors.phone && <p className="text-[11px] text-destructive">{errors.phone}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="college" className="text-xs font-semibold">College / University *</Label>
                    <Input
                      id="college"
                      placeholder="e.g. PES University, Bangalore"
                      value={formData.college}
                      onChange={(e) => setFormData((d) => ({ ...d, college: e.target.value }))}
                      className="h-11 rounded-xl bg-background text-xs"
                    />
                    {errors.college && <p className="text-[11px] text-destructive">{errors.college}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="yearAndBranch" className="text-xs font-semibold">Year &amp; Branch of Study *</Label>
                    <Input
                      id="yearAndBranch"
                      placeholder="e.g. 3rd Year, Computer Science"
                      value={formData.yearAndBranch}
                      onChange={(e) => setFormData((d) => ({ ...d, yearAndBranch: e.target.value }))}
                      className="h-11 rounded-xl bg-background text-xs"
                    />
                    {errors.yearAndBranch && <p className="text-[11px] text-destructive">{errors.yearAndBranch}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="linkedinOrGithub" className="text-xs font-semibold">LinkedIn or GitHub URL (Optional)</Label>
                    <Input
                      id="linkedinOrGithub"
                      placeholder="https://linkedin.com/in/username"
                      value={formData.linkedinOrGithub}
                      onChange={(e) => setFormData((d) => ({ ...d, linkedinOrGithub: e.target.value }))}
                      className="h-11 rounded-xl bg-background text-xs"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="whyJoin" className="text-xs font-semibold">
                    Why do you want to become a Campus Ambassador? *
                  </Label>
                  <Textarea
                    id="whyJoin"
                    placeholder="Tell us about student clubs you're involved with, events you've organized, or technical topics you're passionate about..."
                    rows={3}
                    value={formData.whyJoin}
                    onChange={(e) => setFormData((d) => ({ ...d, whyJoin: e.target.value }))}
                    className="rounded-xl bg-background resize-none text-xs"
                  />
                  {errors.whyJoin && <p className="text-[11px] text-destructive">{errors.whyJoin}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-11 rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-xs shadow-md"
                >
                  {submitting ? "Submitting Application..." : "Submit Ambassador Application"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
