import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Clock,
  Layers,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import { getTrainingPrograms } from "@/data/community/repository";
import { TrainingProgram } from "@/models/community";

export default function TrainingPage() {
  const [programs, setPrograms] = useState<TrainingProgram[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedLevel, setSelectedLevel] = useState<string>("All");

  useEffect(() => {
    async function loadData() {
      const data = await getTrainingPrograms(selectedCategory, selectedLevel);
      setPrograms(data);
    }
    loadData();
  }, [selectedCategory, selectedLevel]);

  const categories = [
    "All",
    "Artificial Intelligence",
    "Cybersecurity",
    "Digital Skills & Software",
    "Design & UX",
    "Business & Strategy",
  ];

  return (
    <div className="min-h-screen bg-[#f8fafd] py-12 sm:py-16 selection:bg-[#4f47e6] selection:text-white pt-10">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-10">
        
        {/* Navigation & Header */}
        <div className="border-b border-slate-200/90 pb-8 space-y-4">
          <Link
            to="/community"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#4f47e6] transition-colors bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Community Hub</span>
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-2">
            <div className="space-y-1.5 max-w-2xl">
              <div className="liquid-glass-pill inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold text-[#4f47e6] mb-1">
                Engineering Bootcamps & Modules
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Hands-On Engineering Bootcamps
              </h1>
              <p className="text-sm sm:text-base text-slate-600 font-normal">
                Intensive, production-focused curriculums teaching sub-second web architecture, automation webhooks & AI models.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {categories.slice(0, 4).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-[#4f47e6] text-white shadow-2xs"
                      : "liquid-glass text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Training Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog) => (
            <div
              key={prog.id}
              className="liquid-glass-card hover:bg-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold text-[#4f47e6] liquid-glass-pill px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {prog.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">
                    {prog.level}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                  {prog.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5 line-clamp-3">
                  {prog.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-[#4f47e6] shrink-0" />
                    <span>{prog.duration} &bull; {prog.format}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers size={14} className="text-[#4f47e6] shrink-0" />
                    <span>{prog.enrolledCount} Enrolled Students</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-slate-100 mt-5 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
                  {prog.schedule}
                </span>
                
                <Link
                  to={`/community/training/${prog.slug}`}
                  className="px-4 py-2 rounded-xl bg-[#4f47e6] hover:bg-[#4338ca] text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-2xs"
                >
                  <span>Syllabus Breakdown</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
