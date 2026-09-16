import { useState } from "react";

import { motion } from "framer-motion";
import { useAuth } from "@/education/lib/auth-context";
import { BrandexLogo } from "@/education/lib/BrandexLogo";
import { Lock, User, ArrowRight, ShieldCheck, CheckCircle2, KeyRound } from "lucide-react";

function LoginForm() {
  const navigate = useNavigate();
  const [searchParams] = [new URLSearchParams(window.location.search)];
  const redirectUrl = searchParams.get("redirect") || "/";

  const { login } = useAuth();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Please enter your unique name or educator ID.");
      return;
    }

    if (!password.trim()) {
      setError("Please enter your access password.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const success = login(name.trim(), password, "teacher");
      if (success) {
        navigate(redirectUrl);
      } else {
        setError("Authentication failed. Please check your credentials.");
        setIsSubmitting(false);
      }
    }, 600);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#FAFAFC] relative overflow-hidden py-12 px-4 selection:bg-indigo-500 selection:text-white">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-gradient-to-bl from-indigo-100/60 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[500px] bg-gradient-to-tr from-sky-100/60 to-transparent rounded-full blur-3xl -z-10" />

      <div className="w-full max-w-4xl bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
        
        {/* Left Presentation Column */}
        <div className="md:col-span-6 p-8 sm:p-10 bg-gradient-to-br from-indigo-50/70 via-white to-slate-50 border-b md:border-b-0 md:border-r border-slate-200/80 flex flex-col justify-between">
          <div className="space-y-8">
            <BrandexLogo size="md" />

            <div className="space-y-3 pt-4">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                Classroom Access <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">
                  Portal.
                </span>
              </h1>
              <p className="text-sm text-slate-600 font-normal leading-relaxed">
                Sign in with your unique educator name and access password to explore Karnataka State Syllabus video modules, smartboard presentations, and quizzes.
              </p>
            </div>

            <div className="space-y-2.5 pt-2 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Classes 6 to 10 Syllabus & Quizzes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Full-Screen Smartboard Theater Mode</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Offline-Ready PWA App Shell</span>
              </div>
            </div>
          </div>

          <div className="pt-8 flex items-center gap-2 text-xs font-semibold text-slate-400">
            <ShieldCheck className="w-4 h-4 text-indigo-600" />
            <span>Secure School Authentication</span>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="md:col-span-6 p-8 sm:p-10 flex flex-col justify-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-extrabold text-[#0F172A] tracking-tight">
                Sign In to Continue
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Enter your credentials below to unlock platform features.
              </p>
            </div>

            {error && (
              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 block">
                  Educator / User Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Pavan Kumar / Teacher Name"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:border-indigo-500 focus:bg-white text-xs font-medium text-slate-900 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 block">
                  Access Password
                </label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter school password"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:border-indigo-500 focus:bg-white text-xs font-medium text-slate-900 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 cursor-pointer mt-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <span>Unlock Platform</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>

            <div className="pt-2 text-center">
              <p className="text-[11px] text-slate-400">
                Brandex Digital Learning • Karnataka State Syllabus Portal
              </p>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#FAFAFC] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}
