import { useState, useMemo } from "react";
import { Link, useParams } from 'react-router-dom';
import { CURRICULUM_DATA } from "@/education/lib/curriculum-data";
import {
  ArrowRight,
  ArrowLeft,
  Search,
  BookOpen,
  Filter,
  Layers,
  GraduationCap,
} from "lucide-react";

export default function ExplorePage() {
  const [filterSection, setFilterSection] = useState<"all" | "middle" | "high">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredClasses = useMemo(() => {
    return CURRICULUM_DATA.filter((cls) => {
      // Category filter
      const gradeNum = parseInt(cls.grade, 10);
      if (filterSection === "middle" && (gradeNum < 6 || gradeNum > 8)) return false;
      if (filterSection === "high" && (gradeNum < 9 || gradeNum > 10)) return false;

      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = cls.name.toLowerCase().includes(query);
        const matchesDesc = cls.description.toLowerCase().includes(query);
        const matchesSubject = cls.subjects.some((s) =>
          s.name.toLowerCase().includes(query)
        );
        return matchesName || matchesDesc || matchesSubject;
      }

      return true;
    });
  }, [filterSection, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FAFAFC] py-12 sm:py-16 selection:bg-indigo-500 selection:text-white">
      <div className="w-full px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto space-y-8">
        
        {/* Navigation & Header */}
        <div className="border-b border-slate-200/90 pb-8 space-y-4">
          
          {/* Back Navigation */}
          <div>
            <Link to="/education"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-indigo-600 transition-colors bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Education</span>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-1">
            <div className="space-y-1.5 max-w-2xl">
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Select Your Grade
              </h1>
              <p className="text-sm sm:text-base text-slate-600 font-normal">
                Choose your class to view mapped Karnataka State Syllabus subjects, video lesson modules, and quizzes.
              </p>
            </div>

            {/* Quick Category Filter Pills */}
            <div className="flex items-center gap-2 bg-white p-1.5 rounded-xl border border-slate-200 shadow-2xs shrink-0 overflow-x-auto">
              <button
                onClick={() => setFilterSection("all")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  filterSection === "all"
                    ? "bg-indigo-600 text-white shadow-2xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                All Grades (6–10)
              </button>

              <button
                onClick={() => setFilterSection("middle")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  filterSection === "middle"
                    ? "bg-indigo-600 text-white shadow-2xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                Middle School (6–8)
              </button>

              <button
                onClick={() => setFilterSection("high")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  filterSection === "high"
                    ? "bg-indigo-600 text-white shadow-2xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                High School (9–10)
              </button>
            </div>
          </div>

          {/* Search Filter Bar */}
          <div className="pt-2 max-w-xl">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter by grade or subject (e.g. Science, Class 10)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-xs font-medium text-slate-900 placeholder:text-slate-400 outline-none transition-all shadow-2xs"
              />
            </div>
          </div>

        </div>

        {/* Classes List View */}
        <div className="space-y-4 max-w-5xl">
          {filteredClasses.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-2xl border border-slate-200/90 shadow-xs space-y-3">
              <BookOpen className="w-8 h-8 text-slate-400 mx-auto" />
              <h3 className="text-base font-bold text-slate-800">No matching classes found</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Try clearing your search query or switching the category filter.
              </p>
              <button
                onClick={() => {
                  setFilterSection("all");
                  setSearchQuery("");
                }}
                className="px-4 py-2 bg-indigo-50 text-indigo-600 font-bold text-xs rounded-xl hover:bg-indigo-100 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredClasses.map((cls) => {
              const totalLessons = cls.subjects.reduce(
                (sum, s) =>
                  sum +
                  s.chapters.reduce(
                    (cSum, ch) =>
                      cSum + ch.topics.reduce((tSum, t) => tSum + t.lessons.length, 0),
                    0
                  ),
                0
              );

              return (
                <Link 
                  key={cls.id}
                  to={`/education/explore/${cls.slug}`}
                  className="group bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-200 flex flex-col lg:flex-row lg:items-center justify-between gap-5 shadow-xs hover:-translate-y-0.5"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-13 h-13 rounded-xl bg-indigo-50 group-hover:bg-indigo-600 text-indigo-600 group-hover:text-white border border-indigo-100 flex items-center justify-center font-bold text-2xl transition-colors shrink-0 shadow-2xs">
                      {cls.grade}
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h2 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors tracking-tight">
                          {cls.name}
                        </h2>
                        <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-100">
                          {cls.subjects.length} Core Subjects
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-500 font-normal">
                        {cls.description} • Karnataka State Board Syllabus
                      </p>

                      {/* Subject Preview Tags */}
                      <div className="flex items-center gap-2 pt-1 flex-wrap">
                        {cls.subjects.map((sub) => (
                          <span
                            key={sub.id}
                            className="text-[11px] font-medium text-slate-600 bg-slate-100/70 hover:bg-indigo-50 hover:text-indigo-700 px-2 py-0.5 rounded-md border border-slate-200/60 transition-colors"
                          >
                            {sub.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between lg:justify-end gap-3.5 shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                    <div className="text-xs font-mono font-semibold text-slate-600 whitespace-nowrap bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/70">
                      {totalLessons} Video Lessons
                    </div>
                    
                    <div className="px-5 py-2.5 rounded-xl bg-indigo-50 group-hover:bg-indigo-600 text-indigo-600 group-hover:text-white font-bold text-xs flex items-center gap-2 transition-all shadow-2xs whitespace-nowrap">
                      <span>Explore Syllabus</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
}
