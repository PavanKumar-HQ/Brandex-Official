import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { CURRICULUM_DATA } from "@/lib/curriculum-data";
import {
  ArrowRight,
  ArrowLeft,
  Search,
  BookOpen,
  Layers,
  FlaskConical,
  Calculator,
  Globe,
  Video,
} from "lucide-react";

export default function CurriculumExplorer() {
  const [selectedClassSlug, setSelectedClassSlug] = useState<string>("class-10");
  const [filterSection, setFilterSection] = useState<"all" | "middle" | "high">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const currentClass = useMemo(() => {
    return CURRICULUM_DATA.find((c) => c.slug === selectedClassSlug) || CURRICULUM_DATA[0];
  }, [selectedClassSlug]);

  const filteredClasses = useMemo(() => {
    return CURRICULUM_DATA.filter((cls) => {
      const gradeNum = parseInt(cls.grade, 10);
      if (filterSection === "middle" && (gradeNum < 6 || gradeNum > 8)) return false;
      if (filterSection === "high" && (gradeNum < 9 || gradeNum > 10)) return false;

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = cls.name.toLowerCase().includes(query);
        const matchesSubject = cls.subjects.some((s) => s.name.toLowerCase().includes(query));
        return matchesName || matchesSubject;
      }
      return true;
    });
  }, [filterSection, searchQuery]);

  const getSubjectIcon = (slug: string) => {
    switch (slug) {
      case "science":
        return <FlaskConical className="w-6 h-6 text-emerald-600" />;
      case "maths":
      case "mathematics":
        return <Calculator className="w-6 h-6 text-[#4f47e6]" />;
      case "social":
      case "social-science":
        return <Globe className="w-6 h-6 text-amber-600" />;
      default:
        return <BookOpen className="w-6 h-6 text-purple-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafd] py-12 sm:py-16 selection:bg-[#4f47e6] selection:text-white pt-10">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-10">
        
        {/* Navigation & Header */}
        <div className="border-b border-slate-200/90 pb-8 space-y-4">
          <div className="flex items-center gap-3">
            <Link
              to="/education"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#4f47e6] transition-colors bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Education Home</span>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-2">
            <div className="space-y-1.5 max-w-2xl">
              <div className="liquid-glass-pill inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold text-[#4f47e6] mb-1">
                Karnataka State Syllabus (KSEEB)
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Curriculum Explorer
              </h1>
              <p className="text-sm sm:text-base text-slate-600 font-normal">
                Browse chapter video modules and formative quizzes across Classes 6 through 10.
              </p>
            </div>

            {/* Quick Grade Filter Tabs */}
            <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-2xs shrink-0 overflow-x-auto">
              <button
                onClick={() => setFilterSection("all")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  filterSection === "all"
                    ? "bg-[#4f47e6] text-white shadow-2xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                All Grades (6–10)
              </button>

              <button
                onClick={() => setFilterSection("middle")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  filterSection === "middle"
                    ? "bg-[#4f47e6] text-white shadow-2xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                Middle (6–8)
              </button>

              <button
                onClick={() => setFilterSection("high")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  filterSection === "high"
                    ? "bg-[#4f47e6] text-white shadow-2xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                High School (9–10)
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="pt-2 max-w-xl">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search subject or chapter (e.g. Science, Quadratic Equations)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 focus:border-[#4f47e6] focus:ring-1 focus:ring-[#4f47e6] text-xs font-medium text-slate-900 placeholder:text-slate-400 outline-none transition-all shadow-2xs"
              />
            </div>
          </div>
        </div>

        {/* Grade Selection Pill Bar */}
        <div className="space-y-4">
          <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
            Select Class
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {filteredClasses.map((cls) => (
              <button
                key={cls.id}
                onClick={() => setSelectedClassSlug(cls.slug)}
                className={`p-4 rounded-2xl font-display font-extrabold text-left transition-all duration-200 border cursor-pointer ${
                  selectedClassSlug === cls.slug
                    ? "bg-[#4f47e6] text-white border-[#4f47e6] shadow-[0_4px_14px_rgba(79,71,230,0.35)] scale-102"
                    : "liquid-glass-card text-slate-800 hover:bg-white hover:border-slate-300"
                }`}
              >
                <div className="text-xs opacity-80 uppercase tracking-wider font-mono">Karnataka Board</div>
                <div className="text-xl mt-1">{cls.name}</div>
                <div className="text-[11px] font-sans font-normal opacity-80 mt-1">
                  {cls.subjects.length} Core Subjects
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Active Class Subjects Grid */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-extrabold text-2xl text-slate-900">
              {currentClass.name} Subjects & Syllabus
            </h2>
            <Link
              to="/education/classroom"
              className="px-4 py-2 bg-[#4f47e6] text-white font-bold text-xs rounded-xl shadow-sm hover:bg-[#4338ca] transition-all flex items-center gap-1.5"
            >
              <span>Launch Classroom Player</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentClass.subjects.map((subject) => {
              const totalLessons = subject.chapters.reduce(
                (acc, ch) => acc + ch.topics.reduce((a, t) => a + t.lessons.length, 0),
                0
              );

              return (
                <div
                  key={subject.id}
                  className="liquid-glass-card hover:bg-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-2xs">
                        {getSubjectIcon(subject.slug)}
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#4f47e6] liquid-glass-pill px-2.5 py-0.5 rounded-full">
                        {subject.chapters.length} Chapters
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-slate-900 mb-1">
                      {subject.name}
                    </h3>
                    <p className="text-xs text-slate-500 mb-4 font-normal leading-relaxed">
                      {subject.description}
                    </p>

                    {/* Chapter list preview */}
                    <div className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                      {subject.chapters.slice(0, 3).map((ch, idx) => (
                        <div key={ch.id} className="text-xs text-slate-700 flex items-center gap-2">
                          <span className="w-5 h-5 rounded-md bg-slate-100 font-mono text-[10px] font-bold flex items-center justify-center text-slate-600 shrink-0">
                            {idx + 1}
                          </span>
                          <span className="truncate font-medium">{ch.title}</span>
                        </div>
                      ))}
                      {subject.chapters.length > 3 && (
                        <p className="text-[11px] font-mono text-slate-400 pl-7">
                          + {subject.chapters.length - 3} more chapters
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-slate-500">
                      {totalLessons} Video Lectures
                    </span>
                    <Link
                      to={`/education/classroom?class=${currentClass.slug}&subject=${subject.slug}`}
                      className="px-4 py-2 rounded-xl bg-indigo-50 hover:bg-[#4f47e6] text-[#4f47e6] hover:text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-2xs"
                    >
                      <span>Study Syllabus</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
