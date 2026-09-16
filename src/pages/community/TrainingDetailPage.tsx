import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  GraduationCap,
  Clock,
  Layers,
  ArrowLeft,
  CheckCircle2,
  BookOpen,
  Award,
  Sparkles,
} from "lucide-react";
import { getTrainingProgramBySlug } from "@/data/community/repository";
import { TrainingProgram } from "@/models/community";
import { Button } from "@/components/ui/button";

export default function TrainingDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [program, setProgram] = useState<TrainingProgram | null>(null);
  const [enrolled, setEnrolled] = useState(false);

  useEffect(() => {
    async function loadData() {
      if (slug) {
        const data = await getTrainingProgramBySlug(slug);
        setProgram(data || null);
      }
    }
    loadData();
  }, [slug]);

  if (!program) {
    return (
      <div className="min-h-screen bg-[#f8fafd] flex items-center justify-center p-6 text-center">
        <div className="space-y-4">
          <h2 className="font-display font-extrabold text-2xl text-slate-900">Training Module Not Found</h2>
          <Button asChild variant="brand" size="sm" className="rounded-xl">
            <Link to="/community/training">Browse All Training Programs</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafd] py-12 sm:py-16 selection:bg-[#4f47e6] selection:text-white pt-10">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 space-y-8">
        
        {/* Navigation */}
        <div>
          <Link
            to="/community/training"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#4f47e6] transition-colors bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Training Programs</span>
          </Link>
        </div>

        {/* Main Card */}
        <div className="liquid-glass rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="text-xs font-mono font-bold text-[#4f47e6] bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100 uppercase tracking-wider">
                {program.category}
              </span>
              <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                {program.level} Level
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              {program.title}
            </h1>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700">
            <div className="flex items-center gap-2.5">
              <Clock size={18} className="text-[#4f47e6] shrink-0" />
              <div>
                <div className="font-bold text-slate-900">Duration & Format</div>
                <div className="text-xs text-slate-500">{program.duration} ({program.format})</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Layers size={18} className="text-[#4f47e6] shrink-0" />
              <div>
                <div className="font-bold text-slate-900">Next Cohort</div>
                <div className="text-xs text-slate-500">{program.schedule}</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Award size={18} className="text-[#4f47e6] shrink-0" />
              <div>
                <div className="font-bold text-slate-900">Certification</div>
                <div className="text-xs text-slate-500">Brandex Verified Architect</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-display font-bold text-xl text-slate-900">Program Curriculum & Goals</h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {program.description}
            </p>
          </div>

          {/* Highlights */}
          {program.highlights && program.highlights.length > 0 && (
            <div className="space-y-3 pt-4 border-t border-slate-200">
              <h3 className="font-display font-bold text-base text-slate-900">What You Will Master:</h3>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {program.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 size={15} className="text-[#4f47e6] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Row */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-slate-900">Cohort Enrollment Application</div>
              <p className="text-xs text-slate-500">Includes live mentor office hours and GitHub code reviews</p>
            </div>

            {enrolled ? (
              <div className="px-6 py-3 rounded-xl bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200 flex items-center gap-2">
                <CheckCircle2 size={16} />
                <span>Application Submitted! Check email for syllabus.</span>
              </div>
            ) : (
              <Button
                onClick={() => setEnrolled(true)}
                className="bg-[#4f47e6] hover:bg-[#4338ca] text-white font-bold rounded-xl px-8 h-12 text-sm shadow-md"
              >
                Apply for Cohort
              </Button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
