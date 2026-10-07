import { useState, useMemo } from "react";
import { Link, useParams } from 'react-router-dom';

import { CURRICULUM_DATA, Lesson, Chapter } from "@/education/lib/curriculum-data";
import { ChevronLeft, ChevronRight, ChevronDown, PlayCircle, HelpCircle, Tv, ArrowRight, CheckCircle2, BookOpen } from "lucide-react";
import { BrandexYouTubePlayer } from "@/education/learning/BrandexYouTubePlayer";
import { ClassroomModeModal } from "@/education/classroom/ClassroomModeModal";
import { QuizRunnerModal } from "@/education/quiz/QuizRunnerModal";

export default function SubjectStudioPage() {
  const params = useParams();
  
  const classData = CURRICULUM_DATA.find((c) => c.id === params.classId || c.slug === params.classId);
  const subjectData = classData?.subjects.find((s) => s.slug === params.subjectSlug);

  const defaultChapter = subjectData?.chapters[0];
  const defaultLesson = defaultChapter?.topics[0]?.lessons[0];

  const [activeLesson, setActiveLesson] = useState<Lesson | null>(defaultLesson || null);
  const [activeChapter, setActiveChapter] = useState<Chapter | null>(defaultChapter || null);
  const [expandedChapterId, setExpandedChapterId] = useState<string>(defaultChapter?.id || "");

  const [isClassroomOpen, setIsClassroomOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  // Flatten all lessons in current subject for next/prev navigation
  const allSubjectLessons = useMemo(() => {
    if (!subjectData) return [];
    const list: Array<{ lesson: Lesson; chapter: Chapter }> = [];
    subjectData.chapters.forEach((ch) => {
      ch.topics.forEach((top) => {
        top.lessons.forEach((l) => {
          list.push({ lesson: l, chapter: ch });
        });
      });
    });
    return list;
  }, [subjectData]);

  if (!classData) return <div className="p-12 text-center text-slate-500">Class not found.</div>;
  if (!subjectData) return <div className="p-12 text-center text-slate-500">Subject not found.</div>;

  const currentIndex = allSubjectLessons.findIndex((item) => item.lesson.id === activeLesson?.id);
  const prevItem = currentIndex > 0 ? allSubjectLessons[currentIndex - 1] : null;
  const nextItem = currentIndex !== -1 && currentIndex < allSubjectLessons.length - 1 ? allSubjectLessons[currentIndex + 1] : null;

  return (
    <div className="w-full min-h-full flex flex-col p-4 lg:p-8 pb-20 max-w-screen-2xl mx-auto">
      
      {/* Top Header / Back Button */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Link to="/education" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#4F46E5] transition-colors bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm w-fit group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to Education
        </Link>
      </div>

      {/* Master 2-Column Wide Studio Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start w-full">
        
        {/* Left Column: Chapter & Topic Syllabus Navigator (4 cols) */}
        <div className="lg:col-span-4 xl:col-span-4 bg-white rounded-3xl border border-[#E2E8F0] shadow-sm overflow-hidden sticky top-0 max-h-[calc(100vh-64px)] flex flex-col">
          <div className="p-5 border-b border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-between shrink-0">
            <div>
              <h3 className="text-sm font-semibold text-[#0F172A]">
                {classData.name} • {subjectData.name}
              </h3>
              <p className="text-xs text-[#64748B] mt-0.5 font-medium">
                {subjectData.chapters.length} Chapters • {allSubjectLessons.length} Video Lessons
              </p>
            </div>
            <span className="text-xs font-mono font-semibold text-[#4338CA] bg-[#EEF2FF] px-2.5 py-1 rounded-lg border border-[#E0E7FF]">
              Playlist
            </span>
          </div>

          {/* Chapters & Lessons Drawer */}
          <div className="divide-y divide-[#E2E8F0] overflow-y-auto flex-1">
            {subjectData.chapters.map((chapter) => {
              const isExpanded = expandedChapterId === chapter.id;
              const totalChapterLessons = chapter.topics.reduce((acc, t) => acc + t.lessons.length, 0);

              return (
                <div key={chapter.id}>
                  {/* Chapter Row Header */}
                  <div
                    onClick={() => setExpandedChapterId(isExpanded ? "" : chapter.id)}
                    className={`flex items-center justify-between p-4 cursor-pointer hover:bg-slate-50 transition-colors ${
                      isExpanded ? "bg-[#F8FAFC]" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0 pr-2">
                      <span className="w-7 h-7 rounded-lg bg-[#EEF2FF] text-[#4338CA] flex items-center justify-center text-xs font-semibold font-mono shrink-0">
                        {chapter.chapterNumber}
                      </span>
                      <div className="min-w-0">
                        <h4 className="text-sm font-semibold text-[#0F172A] truncate">
                          {chapter.title}
                        </h4>
                        <span className="text-[11px] text-[#64748B] font-medium block mt-0.5">
                          {totalChapterLessons} Lessons
                        </span>
                      </div>
                    </div>

                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform shrink-0 ${
                        isExpanded ? "rotate-180 text-[#4F46E5]" : ""
                      }`}
                    />
                  </div>

                  {/* Topic & Lessons List */}
                  {isExpanded && (
                    <div className="px-3 pb-3 bg-[#F8FAFC] space-y-3 pt-2">
                      {chapter.topics.map((topic) => (
                        <div key={topic.id} className="space-y-1.5">
                          <span className="text-[10px] font-semibold text-[#4338CA] uppercase font-mono px-2 block pt-1">
                            {topic.title}
                          </span>

                          {topic.lessons.map((lesson) => {
                            const isActive = activeLesson?.id === lesson.id;
                            return (
                              <div
                                key={lesson.id}
                                onClick={() => {
                                  setActiveLesson(lesson);
                                  setActiveChapter(chapter);
                                }}
                                className={`flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all border ${
                                  isActive
                                    ? "bg-[#EEF2FF] border-[#C7D2FE] text-[#4338CA] shadow-sm"
                                    : "bg-white border-[#E2E8F0] hover:border-slate-300 text-slate-700"
                                }`}
                              >
                                <div className="flex items-center gap-2.5 min-w-0 pr-2">
                                  <div
                                    className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${
                                      isActive
                                        ? "bg-[#4F46E5] text-white shadow-sm"
                                        : "bg-[#F1F5F9] text-slate-500"
                                    }`}
                                  >
                                    <PlayCircle className="w-3.5 h-3.5" />
                                  </div>
                                  <span className="text-xs font-semibold truncate pr-1">
                                    {lesson.title}
                                  </span>
                                </div>

                                <div className="flex items-center gap-1.5 shrink-0">
                                  <span className="text-[10px] font-mono font-medium text-slate-400">
                                    {lesson.duration}
                                  </span>
                                  {lesson.quiz && (
                                    <span className="w-2 h-2 rounded-full bg-emerald-500" title="Quiz Attached" />
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Active Video Stage & Quiz Engine (8 cols) */}
        <div className="lg:col-span-8 xl:col-span-8 space-y-6">
          {activeLesson && activeChapter ? (
            <>
              {/* Large Video Player Frame */}
              <div className="bg-slate-950 rounded-3xl overflow-hidden shadow-md border border-slate-800">
                <BrandexYouTubePlayer
                  videoId={activeLesson.youtubeId}
                  title={activeLesson.title}
                  onEnterClassroomMode={() => setIsClassroomOpen(true)}
                />
              </div>

              {/* Active Lesson Details Card */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E2E8F0] shadow-sm space-y-6">
                {/* Title & Next/Prev Controls */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E2E8F0] pb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#4338CA] bg-[#EEF2FF] px-2.5 py-0.5 rounded-md border border-[#E0E7FF]">
                        {classData.name} • {subjectData.name} • Ch {activeChapter.chapterNumber}
                      </span>
                      <span className="text-xs font-mono font-medium text-slate-400">
                        Duration: {activeLesson.duration}
                      </span>
                    </div>
                    <h2 className="text-2xl font-semibold text-[#0F172A] tracking-tight">
                      {activeLesson.title}
                    </h2>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center gap-2 shrink-0">
                    {prevItem ? (
                      <button
                        onClick={() => {
                          setActiveLesson(prevItem.lesson);
                          setActiveChapter(prevItem.chapter);
                          setExpandedChapterId(prevItem.chapter.id);
                        }}
                        className="flex items-center gap-1 px-3.5 py-2 rounded-xl border border-[#E2E8F0] text-xs font-semibold text-[#0F172A] hover:bg-slate-50 transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" /> Prev
                      </button>
                    ) : (
                      <span className="px-3.5 py-2 text-xs font-semibold text-slate-300 border border-[#E2E8F0] rounded-xl cursor-not-allowed">
                        Prev
                      </span>
                    )}

                    {nextItem ? (
                      <button
                        onClick={() => {
                          setActiveLesson(nextItem.lesson);
                          setActiveChapter(nextItem.chapter);
                          setExpandedChapterId(nextItem.chapter.id);
                        }}
                        className="flex items-center gap-1 px-4 py-2 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-semibold transition-colors shadow-sm"
                      >
                        Next <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <span className="px-3.5 py-2 text-xs font-semibold text-slate-300 border border-[#E2E8F0] rounded-xl cursor-not-allowed">
                        Next
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Bar (Classroom Mode + Quiz) */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setIsClassroomOpen(true)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-semibold transition-colors shadow-sm"
                  >
                    <Tv className="w-4 h-4" />
                    <span>Launch Classroom Presentation</span>
                  </button>

                  {activeLesson.quiz && (
                    <button
                      onClick={() => setIsQuizOpen(true)}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white hover:bg-[#EEF2FF] text-[#4338CA] text-xs font-semibold border border-[#E0E7FF] transition-colors"
                    >
                      <HelpCircle className="w-4 h-4 text-[#4F46E5]" />
                      <span>Take Predefined Assessment ({activeLesson.quiz.questions.length} Questions)</span>
                    </button>
                  )}
                </div>

                {/* Lesson Description */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Topic Summary
                  </h4>
                  <p className="text-sm text-[#475569] leading-relaxed font-medium">
                    {activeLesson.description}
                  </p>
                </div>

                {/* Learning Objectives */}
                {activeLesson.learningObjectives?.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Key Learning Objectives
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeLesson.learningObjectives.map((obj, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0F172A] font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{obj}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="p-12 text-center bg-white rounded-3xl border border-[#E2E8F0] text-slate-500">
              <BookOpen className="w-10 h-10 mx-auto text-slate-300 mb-3" />
              <p className="text-sm font-semibold text-slate-800">Select a lesson from the playlist</p>
            </div>
          )}
        </div>
      </div>

      {/* Classroom Mode Modal */}
      {activeLesson && activeChapter && (
        <ClassroomModeModal
          lesson={activeLesson}
          chapter={activeChapter}
          subject={subjectData}
          classLevel={classData}
          isOpen={isClassroomOpen}
          onClose={() => setIsClassroomOpen(false)}
          hasNextLesson={!!nextItem}
          hasPrevLesson={!!prevItem}
          onSelectNextLesson={() => {
            if (nextItem) {
              setActiveLesson(nextItem.lesson);
              setActiveChapter(nextItem.chapter);
              setExpandedChapterId(nextItem.chapter.id);
            }
          }}
          onSelectPrevLesson={() => {
            if (prevItem) {
              setActiveLesson(prevItem.lesson);
              setActiveChapter(prevItem.chapter);
              setExpandedChapterId(prevItem.chapter.id);
            }
          }}
        />
      )}

      {/* Quiz Runner Modal */}
      {activeLesson?.quiz && (
        <QuizRunnerModal
          quiz={activeLesson.quiz}
          isOpen={isQuizOpen}
          onClose={() => setIsQuizOpen(false)}
        />
      )}
    </div>
  );
}
