import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Award,
  Users,
  CheckCircle2,
  Globe,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BrandAmbassadorPage() {
  const [submitted, setSubmitted] = useState(false);

  const perks = [
    {
      title: "Direct Leadership Access",
      desc: "Bi-weekly architecture syncs and direct mentorship with Brandex founding engineers.",
    },
    {
      title: "Campus Guild Sponsorship",
      desc: "Budget and swag grants to host tech meetups, workshops, and buildathons at your university.",
    },
    {
      title: "Exclusive Fellowship Credentials",
      desc: "Verified Brandex Campus Lead badge for your resume, LinkedIn, and developer portfolio.",
    },
    {
      title: "Early Access to Core Beta Tooling",
      desc: "First access to internal React libraries, Vite scaffolds, and automated webhook engines.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafd] pt-24 pb-16 lg:pt-28 lg:pb-20 selection:bg-[#4f47e6] selection:text-white">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 space-y-10">
        
        {/* Navigation & Header */}
        <div className="border-b border-slate-200/90 pb-8 space-y-4">
          <Link
            to="/community"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#4f47e6] transition-colors bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Community Hub</span>
          </Link>

          <div className="space-y-2 pt-2">
            <div className="liquid-glass-pill inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold text-[#4f47e6] mb-1">
              Campus & Developer Fellowship
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Brandex Campus Ambassador Program
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              Lead the next generation of software engineers. Establish tech circles, organize hackathons, and represent Brandex at your institution.
            </p>
          </div>
        </div>

        {/* Perks Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {perks.map((p, i) => (
            <div
              key={i}
              className="liquid-glass-card hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-3"
            >
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-100 text-[#4f47e6] flex items-center justify-center font-bold">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900">{p.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Application Card */}
        <div className="liquid-glass rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <div className="space-y-2">
            <h2 className="font-display font-extrabold text-2xl text-slate-900">
              Apply for the 2026 Ambassador Cohort
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Applications are reviewed on a rolling basis. Open to students and community organizers.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold text-sm flex items-center gap-3">
              <CheckCircle2 size={20} className="text-emerald-600" />
              <span>Thank you! Your ambassador nomination has been submitted. Our team will contact you within 48 hours.</span>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4 max-w-xl"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Pavan Kumar"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#4f47e6] text-xs outline-none bg-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">College / University</label>
                  <input
                    required
                    type="text"
                    placeholder="Bangalore University"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#4f47e6] text-xs outline-none bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="name@institution.edu"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#4f47e6] text-xs outline-none bg-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">GitHub / LinkedIn URL</label>
                <input
                  required
                  type="url"
                  placeholder="https://github.com/username"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#4f47e6] text-xs outline-none bg-white"
                />
              </div>

              <Button
                type="submit"
                className="bg-[#4f47e6] hover:bg-[#4338ca] text-white font-bold rounded-xl px-7 h-11 text-xs shadow-md mt-2"
              >
                Submit Ambassador Application
              </Button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
