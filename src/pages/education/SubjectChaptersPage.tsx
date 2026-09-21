
import { Link, useParams } from 'react-router-dom';
import { CURRICULUM_DATA } from "@/education/lib/curriculum-data";
import { ArrowLeft, PlayCircle, BookOpen, Layers, Sparkles, CheckCircle2, ArrowRight, Tv, HelpCircle } from "lucide-react";

export default function SubjectChaptersPage() {
  const params = useParams();
  const currentClass = CURRICULUM_DATA.find((c) => c.slug === params.classId);
  const currentSubject = currentClass?.subjects.find((s) => s.slug === params.subjectSlug);

  if (!currentClass || !currentSubject) return <div className="p-12 text-center text-slate-500">Page not found.</div>;

  const totalLessons = currentSubject.chapters.reduce(
    (acc, ch) => acc + ch.topics.reduce((a, t) => a + t.lessons.length, 0),
    0
  );

  return (
    <div className="min-h-screen bg-[#FAFAFC] py-16 selection:bg-indigo-500 selection:text-white">
      <div className="w-full px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto space-y-12">
        
        {/* Navigation & Header */}
        <div className="border-b border-[#E2E8F0] pb-8 space-y-4">
          <Link to={`/education/explore/${currentClass.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#4F46E5] transition-colors bg-white px-3.5 py-2 rounded-xl border border-[#E2E8F0] shadow-2xs cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to {currentClass.name} Subjects
          </Link>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight flex items-center gap-3">
                <span>{currentSubject.name}</span>
                <span className="text-sm font-mono font-bold text-[#4F46E5] bg-indigo-50 px-3 py-1 rounded-md border border-indigo-100">
                  {currentClass.name}
                </span>
              </h1>
              <p className="text-base text-slate-600 mt-1 font-normal">
                {currentSubject.description}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold px-4 py-2 bg-indigo-50 text-[#4F46E5] rounded-lg border border-indigo-100 font-mono">
                {currentSubject.chapters.length} Chapters • {totalLessons} Videos
              </span>
            </div>
          </div>
        </div>

        {/* Chapters Stack */}
        <div className="space-y-8">
          {currentSubject.chapters.map((chapter, index) => (
            <div key={chapter.id} className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden">
              
              {/* Chapter Header */}
              <div className="px-7 py-5 border-b border-slate-100 bg-gradient-to-r from-slate-50/80 via-white to-slate-50/40 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <span className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-extrabold font-mono text-xs border border-indigo-100/80 shadow-2xs">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h2 className="text-lg font-extrabold text-[#0F172A] tracking-tight">
                      Chapter {index + 1}: {chapter.title.replace(/^Chapter\s*\d+\s*:\s*/i, "")}
                    </h2>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {chapter.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-semibold text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-2xs">
                    {chapter.topics.length} Topics
                  </span>
                </div>
              </div>

              {/* Topics & Lessons */}
              <div className="p-7 space-y-7 bg-[#F9FAFB]/90">
                {chapter.topics.map((topic) => (
                  <div key={topic.id} className="space-y-3.5">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-indigo-600" />
                      <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-700 font-mono">
                        Topic: {topic.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-3.5">
                      {topic.lessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-400 hover:shadow-md transition-all duration-200 group"
                        >
                          <div className="flex flex-col sm:flex-row items-start gap-4">
                            {/* Left Thumbnail */}
                            <div className="relative w-full sm:w-36 md:w-44 aspect-video rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200/80 shadow-2xs">
                              <img
                                src={`https://img.youtube.com/vi/${lesson.youtubeId}/maxresdefault.jpg`}
                                alt={lesson.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                                <PlayCircle className="w-8 h-8 text-white drop-shadow" />
                              </div>
                              <span className="absolute bottom-1.5 right-1.5 px-2 py-0.5 bg-black/80 text-[10px] font-mono font-bold text-white rounded-md">
                                {lesson.duration}
                              </span>
                            </div>

                            {/* Middle & Right Content */}
                            <div className="min-w-0 flex-1 space-y-2.5 w-full">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="text-base sm:text-lg font-bold text-[#0F172A] group-hover:text-indigo-600 transition-colors leading-snug">
                                    {lesson.title}
                                  </span>
                                  <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md font-mono border border-indigo-100 shrink-0">
                                    HD Video
                                  </span>
                                </div>

                                {/* Desktop / Tablet Button */}
                                <Link
                                  to={`/education/lesson/${lesson.slug}`}
                                  className="hidden sm:inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-xs hover:shadow-indigo-600/25 shrink-0"
                                >
                                  <span>Watch Lesson</span>
                                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                              </div>

                              <p className="text-xs text-slate-500 font-normal leading-relaxed">
                                {lesson.description}
                              </p>

                              {/* Topics Covered Grid (Spans full available width cleanly) */}
                              {lesson.learningObjectives?.length > 0 && (
                                <div className="pt-2 border-t border-slate-100 space-y-1.5">
                                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                                    Topics Covered:
                                  </span>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {lesson.learningObjectives.map((obj, i) => (
                                      <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700 bg-slate-50/90 p-2 rounded-lg border border-slate-200/70 font-medium">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                        <span className="leading-snug">{obj}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Mobile Only Button */}
                              <div className="pt-2 sm:hidden w-full">
                                <Link
                                  to={`/education/lesson/${lesson.slug}`}
                                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-xs text-center"
                                >
                                  <span>Watch Lesson</span>
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
