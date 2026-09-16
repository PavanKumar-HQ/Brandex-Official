import { useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { CURRICULUM_DATA, Lesson, Chapter } from "@/lib/curriculum-data";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  PlayCircle,
  HelpCircle,
  Tv,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  ArrowLeft,
  Volume2,
  Maximize2,
  Award,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SubjectStudioPage() {
  const { classId = "class-10", subjectSlug = "science" } = useParams();

  const classData = useMemo(() => {
    return (
      CURRICULUM_DATA.find((c) => c.id === classId || c.slug === classId) ||
      CURRICULUM_DATA[4] // default Class 10
    );
  }, [classId]);

  const subjectData = useMemo(() => {
    return (
      classData.subjects.find((s) => s.slug === subjectSlug || s.id === subjectSlug) ||
      classData.subjects[0]
    );
  }, [classData, subjectSlug]);

  const defaultChapter = subjectData.chapters[0];
  const defaultLesson = defaultChapter?.topics[0]?.lessons[0];

  const [activeLesson, setActiveLesson] = useState<Lesson | null>(defaultLesson || null);
  const [activeChapter, setActiveChapter] = useState<Chapter | null>(defaultChapter || null);
  const [expandedChapterId, setExpandedChapterId] = useState<string>(defaultChapter?.id || "");
  const [activeTab, setActiveTab] = useState<"video" | "quiz">("video");
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [quizScore, setQuizScore] = useState<number | null>(null);

  // Flatten all lessons in current subject for next/prev navigation
  const allSubjectLessons = useMemo(() => {
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

  const currentIndex = allSubjectLessons.findIndex((item) => item.lesson.id === activeLesson?.id);
  const prevItem = currentIndex > 0 ? allSubjectLessons[currentIndex - 1] : null;
  const nextItem =
    currentIndex !== -1 && currentIndex < allSubjectLessons.length - 1
      ? allSubjectLessons[currentIndex + 1]
      : null;

  const currentQuiz = activeLesson?.quiz?.questions || [
    {
      question: "What is the primary conceptual focus of this curriculum module?",
      options: [
        "Core foundational definitions and empirical principles",
        "Historical chronological dates",
        "Rote memorization formulas without derivations",
        "Non-standard board syllabus references"
      ],
      correctAnswer: 0,
      explanation: "This module emphasizes conceptual understanding mapped directly to Karnataka State Board learning goals."
    }
  ];

  const handleSelectOption = (qIdx: number, optIdx: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleEvaluateQuiz = () => {
    let score = 0;
    currentQuiz.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) score += 1;
    });
    setQuizScore(score);
  };

  const resetQuiz = () => {
    setQuizScore(null);
    setSelectedAnswers({});
  };

  return (
    <div className="min-h-screen bg-[#f8fafd] pt-24 pb-16 lg:pt-28 lg:pb-20 selection:bg-[#4f47e6] selection:text-white">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-6">
        
        {/* Top Header / Back Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
          <div className="flex items-center gap-3">
            <Link
              to="/education/explore"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#4f47e6] transition-colors bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-2xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Syllabus Explorer</span>
            </Link>
            <Link
              to="/education"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#4f47e6] transition-colors bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs"
            >
              <span>Education Hub</span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={`/education/classroom?class=${classData.slug}&subject=${subjectData.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#4f47e6] hover:bg-[#4338ca] text-white font-bold text-xs shadow-md transition-all"
            >
              <Tv size={14} />
              <span>Launch Classroom Smartboard Mode</span>
            </Link>
          </div>
        </div>

        {/* Master 2-Column Wide Studio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start w-full">
          
          {/* Left Column: Chapter & Topic Syllabus Navigator (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col max-h-[820px]">
            <div className="p-5 border-b border-slate-200/80 bg-slate-50/80 flex items-center justify-between shrink-0">
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  {classData.name} &bull; {subjectData.name}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">
                  {subjectData.chapters.length} Chapters &bull; {allSubjectLessons.length} Video Lessons
                </p>
              </div>
              <span className="text-[11px] font-mono font-bold text-[#4f47e6] bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-100">
                Syllabus Drawer
              </span>
            </div>

            {/* Chapters & Lessons Drawer */}
            <div className="divide-y divide-slate-100 overflow-y-auto flex-1 p-2 space-y-1">
              {subjectData.chapters.map((chapter) => {
                const isExpanded = expandedChapterId === chapter.id;
                const totalChapterLessons = chapter.topics.reduce(
                  (acc, t) => acc + t.lessons.length,
                  0
                );

                return (
                  <div key={chapter.id} className="rounded-2xl overflow-hidden">
                    {/* Chapter Row Header */}
                    <div
                      onClick={() => setExpandedChapterId(isExpanded ? "" : chapter.id)}
                      className={`flex items-center justify-between p-3.5 cursor-pointer rounded-2xl transition-colors ${
                        isExpanded ? "bg-indigo-50/70 text-[#4f47e6]" : "hover:bg-slate-50 text-slate-900"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0 pr-2">
                        <span className="w-7 h-7 rounded-lg bg-white text-[#4f47e6] border border-slate-200/80 flex items-center justify-center text-xs font-bold font-mono shrink-0 shadow-2xs">
                          {chapter.chapterNumber}
                        </span>
                        <div className="min-w-0">
                          <h4 className="text-xs sm:text-sm font-bold truncate">
                            {chapter.title}
                          </h4>
                          <span className="text-[10px] text-slate-500 font-mono block mt-0.5">
                            {totalChapterLessons} Lessons
                          </span>
                        </div>
                      </div>

                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform shrink-0 ${
                          isExpanded ? "rotate-180 text-[#4f47e6]" : ""
                        }`}
                      />
                    </div>

                    {/* Topic & Lessons List */}
                    {isExpanded && (
                      <div className="px-2 pb-2 bg-slate-50/60 rounded-2xl space-y-2 pt-1.5 mb-1">
                        {chapter.topics.map((topic) => (
                          <div key={topic.id} className="space-y-1">
                            <span className="text-[10px] font-bold text-[#4f47e6] uppercase font-mono px-2 block pt-1">
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
                                    resetQuiz();
                                  }}
                                  className={`flex items-center justify-between p-2.5 rounded-xl cursor-pointer transition-all border ${
                                    isActive
                                      ? "bg-[#4f47e6] text-white border-[#4f47e6] shadow-sm"
                                      : "bg-white border-slate-200/70 hover:border-slate-300 text-slate-700"
                                  }`}
                                >
                                  <div className="flex items-center gap-2 min-w-0 pr-2">
                                    <PlayCircle className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-white" : "text-[#4f47e6]"}`} />
                                    <span className="text-xs font-semibold truncate">
                                      {lesson.title}
                                    </span>
                                  </div>

                                  <div className="flex items-center gap-1.5 shrink-0">
                                    <span className={`text-[10px] font-mono ${isActive ? "text-indigo-100" : "text-slate-400"}`}>
                                      {lesson.duration}
                                    </span>
                                    {lesson.quiz && (
                                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" title="Quiz Attached" />
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
          <div className="lg:col-span-8 space-y-6">
            {activeLesson && activeChapter ? (
              <>
                {/* Large Video Player Frame */}
                <div className="bg-slate-950 rounded-3xl overflow-hidden shadow-xl border border-slate-800 p-6 flex flex-col justify-between aspect-[16/9] relative text-white">
                  <div className="flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-mono font-bold text-white border border-white/10">
                      Ch {activeChapter.chapterNumber} &bull; {activeLesson.title}
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/30">
                      1080p Smartboard Feed
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center my-auto text-center space-y-3 z-10">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-16 h-16 rounded-2xl bg-[#4f47e6] hover:bg-[#4338ca] flex items-center justify-center text-white shadow-[0_0_30px_rgba(79,71,230,0.6)] cursor-pointer transition-transform hover:scale-105"
                    >
                      <PlayCircle size={32} />
                    </button>
                    <p className="text-xs text-slate-300 font-mono">
                      {isPlaying ? "Classroom playback active" : "Click to play syllabus lecture"}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-slate-300 pt-3 border-t border-white/10 z-10">
                    <div className="flex items-center gap-3">
                      <span>04:15 / {activeLesson.duration}</span>
                      <Volume2 size={15} />
                    </div>
                    <div className="flex items-center gap-2">
                      <Link
                        to={`/education/classroom?class=${classData.slug}&subject=${subjectData.slug}`}
                        className="px-2.5 py-1 rounded bg-[#4f47e6] text-white font-bold text-[11px] flex items-center gap-1"
                      >
                        <Tv size={12} />
                        <span>Theater Mode</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Active Lesson Details Card */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
                  {/* Title & Next/Prev Controls */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#4f47e6] bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-100">
                          {classData.name} &bull; {subjectData.name} &bull; Ch {activeChapter.chapterNumber}
                        </span>
                        <span className="text-xs font-mono font-medium text-slate-400">
                          Duration: {activeLesson.duration}
                        </span>
                      </div>
                      <h2 className="text-2xl font-display font-extrabold text-slate-900 tracking-tight">
                        {activeLesson.title}
                      </h2>
                    </div>

                    {/* Next / Prev Controls */}
                    <div className="flex items-center gap-2 shrink-0">
                      {prevItem ? (
                        <button
                          onClick={() => {
                            setActiveLesson(prevItem.lesson);
                            setActiveChapter(prevItem.chapter);
                            setExpandedChapterId(prevItem.chapter.id);
                            resetQuiz();
                          }}
                          className="flex items-center gap-1 px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors cursor-pointer"
                        >
                          <ChevronLeft className="w-4 h-4" /> Prev Lesson
                        </button>
                      ) : (
                        <span className="px-3.5 py-2 text-xs font-bold text-slate-300 border border-slate-200 rounded-xl cursor-not-allowed">
                          Prev
                        </span>
                      )}

                      {nextItem ? (
                        <button
                          onClick={() => {
                            setActiveLesson(nextItem.lesson);
                            setActiveChapter(nextItem.chapter);
                            setExpandedChapterId(nextItem.chapter.id);
                            resetQuiz();
                          }}
                          className="flex items-center gap-1 px-4 py-2 rounded-xl bg-[#4f47e6] hover:bg-[#4338ca] text-white text-xs font-bold transition-colors shadow-2xs cursor-pointer"
                        >
                          Next Lesson <ChevronRight className="w-4 h-4" />
                        </button>
                      ) : (
                        <span className="px-3.5 py-2 text-xs font-bold text-slate-300 border border-slate-200 rounded-xl cursor-not-allowed">
                          Next
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Formative Assessment Quiz in Studio */}
                  <div className="space-y-4 pt-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#4f47e6]">
                        Formative Lesson Assessment
                      </h4>
                      {quizScore !== null && (
                        <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                          {quizScore} / {currentQuiz.length} Correct
                        </span>
                      )}
                    </div>

                    <div className="space-y-4">
                      {currentQuiz.map((q, qIdx) => (
                        <div key={qIdx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                          <p className="text-xs sm:text-sm font-bold text-slate-900">
                            {qIdx + 1}. {q.question}
                          </p>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {q.options.map((opt, optIdx) => {
                              const isSelected = selectedAnswers[qIdx] === optIdx;
                              const isCorrect = q.correctAnswer === optIdx;
                              const showFeedback = quizScore !== null;

                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => handleSelectOption(qIdx, optIdx)}
                                  disabled={quizScore !== null}
                                  className={`p-2.5 rounded-xl text-left text-xs font-medium border transition-all cursor-pointer ${
                                    showFeedback
                                      ? isCorrect
                                        ? "bg-emerald-100/80 border-emerald-500 text-emerald-900 font-bold"
                                        : isSelected
                                        ? "bg-rose-100/80 border-rose-500 text-rose-900 font-bold"
                                        : "bg-white border-slate-200 text-slate-400"
                                      : isSelected
                                      ? "bg-[#4f47e6] text-white border-[#4f47e6] font-bold"
                                      : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                                  }`}
                                >
                                  <span className="font-mono mr-1.5 opacity-60">{String.fromCharCode(65 + optIdx)}.</span>
                                  <span>{opt}</span>
                                </button>
                              );
                            })}
                          </div>
                          {quizScore !== null && q.explanation && (
                            <p className="text-xs text-slate-600 bg-white p-2.5 rounded-xl border border-slate-200">
                              <strong>Explanation: </strong>{q.explanation}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-2">
                      {quizScore === null ? (
                        <Button
                          onClick={handleEvaluateQuiz}
                          disabled={Object.keys(selectedAnswers).length < currentQuiz.length}
                          className="bg-[#4f47e6] hover:bg-[#4338ca] text-white font-bold rounded-xl text-xs h-9"
                        >
                          Submit Assessment
                        </Button>
                      ) : (
                        <Button
                          onClick={resetQuiz}
                          variant="outline"
                          className="rounded-xl text-xs font-bold border-slate-200 flex items-center gap-1.5"
                        >
                          <RotateCcw size={13} />
                          <span>Retake Assessment</span>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Lesson Description */}
                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                      Topic Summary
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {activeLesson.description}
                    </p>
                  </div>

                  {/* Learning Objectives */}
                  {activeLesson.learningObjectives && activeLesson.learningObjectives.length > 0 && (
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                        Key Learning Objectives
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {activeLesson.learningObjectives.map((obj, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-900 font-medium"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#4f47e6] shrink-0 mt-0.5" />
                            <span>{obj}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 text-slate-500">
                <BookOpen className="w-10 h-10 mx-auto text-slate-300 mb-3" />
                <p className="text-sm font-semibold text-slate-800">Select a lesson from the syllabus drawer</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
