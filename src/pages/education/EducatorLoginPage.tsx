import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Lock, User, ArrowRight, ShieldCheck, CheckCircle2, KeyRound, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function EducatorLoginPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectUrl = searchParams.get("redirect") || "/education/classroom";

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Please enter your educator name or institution ID.");
      return;
    }

    if (!password.trim()) {
      setError("Please enter your classroom access key.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      localStorage.setItem(
        "brandex_educator",
        JSON.stringify({ name: name.trim(), role: "teacher", loggedInAt: new Date().toISOString() })
      );
      navigate(redirectUrl);
    }, 600);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f8fafd] relative overflow-hidden pt-24 pb-16 lg:pt-28 lg:pb-20 px-4 selection:bg-[#4f47e6] selection:text-white">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-gradient-to-bl from-indigo-200/40 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-gradient-to-tr from-purple-200/40 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-4xl liquid-glass rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 relative z-10">
        
        {/* Left Presentation Column */}
        <div className="md:col-span-6 p-8 sm:p-10 bg-gradient-to-br from-indigo-50/70 via-white to-slate-50 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col justify-between">
          <div className="space-y-6">
            <Link
              to="/education"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#4f47e6] transition-colors bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-2xs w-max"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Education</span>
            </Link>

            <div className="space-y-2">
              <div className="liquid-glass-pill inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold text-[#4f47e6]">
                KSEEB Smartboard Portal
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                Educator & Classroom Access
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Unlock full-screen classroom presentation mode, topic quiz answers, and syllabus progress tracking across Classes 6–10.
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              {[
                "Instant Smartboard Video Theater View",
                "Formative Quiz Keys & Explanations",
                "Offline Curriculum Sync for Karnataka Board",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200/80 text-[11px] text-slate-500">
            Official Karnataka State Board Digital Initiative &bull; Brandex Education
          </div>
        </div>

        {/* Right Form Column */}
        <div className="md:col-span-6 p-8 sm:p-10 bg-white flex flex-col justify-center">
          <div className="max-w-sm mx-auto w-full space-y-6">
            <div>
              <h3 className="font-display font-bold text-xl text-slate-900">Sign In to Launch</h3>
              <p className="text-xs text-slate-500 mt-1">Enter your institution or demo educator credentials.</p>
            </div>

            {error && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 font-medium">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Educator Name / ID</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Principal / Teacher ID"
                    className="pl-10 h-11 text-xs bg-slate-50 rounded-xl border-slate-200"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Classroom Passkey</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="pl-10 h-11 text-xs bg-slate-50 rounded-xl border-slate-200"
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="brand"
                size="default"
                disabled={isSubmitting}
                className="w-full h-11 rounded-xl font-bold flex items-center justify-center gap-2 mt-2"
              >
                <span>{isSubmitting ? "Authenticating..." : "Enter Classroom Mode"}</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-600 flex items-start gap-2">
              <KeyRound className="w-4 h-4 text-[#4f47e6] shrink-0 mt-0.5" />
              <span>
                <strong>Demo Mode:</strong> Enter any name and password to immediately preview Educator Smartboard capabilities.
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
