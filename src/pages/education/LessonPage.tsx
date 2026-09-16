import { useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { CURRICULUM_DATA, Lesson, Chapter, getLessonBySlug } from "@/lib/curriculum-data";
import {
  ChevronLeft,
  ChevronRight,
  Tv,
  HelpCircle,
  Layers,
  ArrowLeft,
  PlayCircle,
  Volume2,
  CheckCircle2,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LessonPage() {
  const { slug = "" } = useParams();
  const data = useMemo(() => getLessonBySlug(slug), [slug]);

  const [activeTab, setActiveTab] = useState<"video" | "quiz">("video");
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [quizScore, setQuizScore] = useState<number | null>(null);

  if (!data) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center pt-28">
        <h2 className="text-2xl font-bold text-slate-900">Lesson Not Found</h2>
        <p className="text-sm text-slate-600 mt-2">The requested curriculum lesson could not be located.</p>
        <Link
          to="/education/explore"
          className="mt-6 px-6 py-3 rounded-xl bg-[#4f47e6] text-white text-xs font-bold hover:bg-[#4338ca] transition-colors shadow-md"
        >
          Return to Curriculum Explorer
        </Link>
      </div>
    );
  }

  const { lesson, chapter, subject, classLevel } = data;
  const allChapterLessons = chapter.topics.flatMap((t) => t.lessons);
  const currentIndex = allChapterLessons.findIndex((l) => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? allChapterLessons[currentIndex - 1] : null;
  const nextLesson =
    currentIndex < allChapterLessons.length - 1 ? allChapterLessons[currentIndex + 1] : null;

  const currentQuiz = lesson.quiz?.questions || [
    {
      question: `What is the primary objective of studying ${lesson.title}?`,
      options: [
        "Master the foundational principles according to Karnataka board syllabus",
        "Memorize terms without conceptual derivation",
        "Skip laboratory experiments",
        "Use unauthorized reference guides"
      ],
      correctAnswer: 0,
      explanation: "Karnataka State Board emphasizes conceptual understanding and practical application."
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
        
        {/* Navigation Breadcrumb Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
          <div className="flex items-center gap-3">
            <Link
              to={`/education/explore/${classLevel.slug}`}
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#4f47e6] transition-colors bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-2xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to {classLevel.name} Syllabus</span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={`/education/classroom?class=${classLevel.slug}&subject=${subject.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#4f47e6] hover:bg-[#4338ca] text-white font-bold text-xs shadow-md transition-all"
            >
              <Tv size={14} />
              <span>Launch Classroom Smartboard Mode</span>
            </Link>
          </div>
        </div>

        {/* Video Player & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start w-full">
          
          {/* Main Stage (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-slate-950 rounded-3xl overflow-hidden shadow-xl border border-slate-800 p-6 flex flex-col justify-between aspect-[16/9] relative text-white">
              <div className="flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-mono font-bold text-white border border-white/10">
                  {classLevel.name} &bull; {subject.name} &bull; Ch {chapter.chapterNumber}
                </span>
                <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/30">
                  1080p Stream
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
                  <span>04:15 / {lesson.duration}</span>
                  <Volume2 size={15} />
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    to={`/education/classroom?class=${classLevel.slug}&subject=${subject.slug}`}
                    className="px-2.5 py-1 rounded bg-[#4f47e6] text-white font-bold text-[11px] flex items-center gap-1"
                  >
                    <Tv size={12} />
                    <span>Smartboard Mode</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Lesson Card Details */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#4f47e6] bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-100">
                      {classLevel.name} &bull; {subject.name} &bull; Ch {chapter.chapterNumber}
                    </span>
                    <span className="text-xs font-mono font-medium text-slate-400">
                      {lesson.duration}
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                    {lesson.title}
                  </h1>
                </div>

                {/* Next / Prev */}
                <div className="flex items-center gap-2 shrink-0">
                  {prevLesson ? (
                    <Link
                      to={`/education/lesson/${prevLesson.slug}`}
                      className="flex items-center gap-1 px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" /> Prev Lesson
                    </Link>
                  ) : (
                    <span className="px-3.5 py-2 text-xs font-bold text-slate-300 border border-slate-200 rounded-xl cursor-not-allowed">
                      Prev
                    </span>
                  )}

                  {nextLesson ? (
                    <Link
                      to={`/education/lesson/${nextLesson.slug}`}
                      className="flex items-center gap-1 px-4 py-2 rounded-xl bg-[#4f47e6] hover:bg-[#4338ca] text-white text-xs font-bold transition-colors shadow-2xs"
                    >
                      Next Lesson <ChevronRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <span className="px-3.5 py-2 text-xs font-bold text-slate-300 border border-slate-200 rounded-xl cursor-not-allowed">
                      Next
                    </span>
                  )}
                </div>
              </div>

              {/* Formative Assessment Quiz */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#4f47e6]">
                    Formative Quiz Check
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

              {/* Topic Summary */}
              <div className="space-y-2 pt-4 border-t border-slate-100">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Topic Summary
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {lesson.description}
                </p>
              </div>

              {/* Learning Objectives */}
              {lesson.learningObjectives && lesson.learningObjectives.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Key Learning Objectives
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {lesson.learningObjectives.map((obj, i) => (
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
          </div>

          {/* Right Column: Chapter Lessons Playlist (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200/90 shadow-sm p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  Chapter Playlist
                </span>
                <h3 className="text-sm font-bold text-slate-900 mt-0.5">
                  Ch {chapter.chapterNumber}: {chapter.title}
                </h3>
              </div>
              <span className="text-xs font-mono font-bold text-[#4f47e6] bg-indigo-50 px-2 py-0.5 rounded-md">
                {allChapterLessons.length} Lessons
              </span>
            </div>

            <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
              {allChapterLessons.map((item, idx) => {
                const isActive = item.id === lesson.id;
                return (
                  <Link
                    key={item.id}
                    to={`/education/lesson/${item.slug}`}
                    className={`p-3 rounded-2xl block transition-all border ${
                      isActive
                        ? "bg-[#4f47e6] text-white border-[#4f47e6] shadow-sm"
                        : "bg-slate-50/70 border-slate-200/70 hover:bg-slate-100 hover:border-slate-300 text-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-[10px] font-mono ${isActive ? "text-indigo-200" : "text-slate-400"}`}>
                        Lesson {(idx + 1).toString().padStart(2, "0")}
                      </span>
                      <span className={`text-[10px] font-mono ${isActive ? "text-indigo-100 font-bold" : "text-slate-500"}`}>
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-xs font-bold truncate mt-1">
                      {item.title}
                    </p>
                    {item.quiz && (
                      <span className={`inline-flex items-center gap-1 text-[10px] font-bold mt-1 ${isActive ? "text-emerald-200" : "text-emerald-600"}`}>
                        <HelpCircle className="w-3 h-3" /> Predefined Quiz
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
