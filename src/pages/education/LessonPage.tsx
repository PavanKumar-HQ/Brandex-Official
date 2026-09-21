import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  Tv,
  HelpCircle,
  Maximize2,
  Minimize2,
  Layers,
  ArrowLeft,
  X,
  List,
} from "lucide-react";
import { getLessonBySlug, Lesson } from "@/education/lib/curriculum-data";
import { BrandexYouTubePlayer } from "@/education/learning/BrandexYouTubePlayer";
import { QuizRunnerModal } from "@/education/quiz/QuizRunnerModal";

export default function LessonPage() {
  const navigate = useNavigate();
  const params = useParams<{ slug: string }>();
  const slug = params.slug || "";
  const data = getLessonBySlug(slug);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(true);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  if (!data) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold text-[#0F172A]">Lesson Not Found</h2>
        <Link to="/education/explore"
          className="mt-4 px-6 py-3 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition-colors shadow-xs"
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

  return (
    <div className="min-h-[calc(100vh-64px)] lg:h-[calc(100vh-64px)] flex flex-col bg-[#070B14] text-white overflow-y-auto lg:overflow-hidden select-none">
      
      {/* Top Presentation Header */}
      <div className="py-2.5 sm:py-0 sm:h-14 px-3 sm:px-6 bg-[#0B1120] border-b border-slate-800/80 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-md bg-indigo-500/20 text-indigo-400 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-indigo-500/30 shrink-0">
            <Tv className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Classroom Mode
          </div>
          <div className="h-4 w-px bg-slate-800 hidden sm:block" />
          <div className="text-xs sm:text-sm text-slate-300 font-medium truncate max-w-[200px] sm:max-w-xl">
            <span className="text-slate-400">{classLevel.name}</span>
            <span className="mx-1 sm:mx-1.5 text-slate-600">/</span>
            <span className="text-indigo-400 font-semibold">{subject.name}</span>
            <span className="mx-1 sm:mx-1.5 text-slate-600">/</span>
            <span className="text-slate-200">Ch {chapter.chapterNumber}: {chapter.title.replace(/^Chapter\s*\d+\s*:\s*/i, "")}</span>
          </div>
        </div>

        {/* Right Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {lesson.quiz && (
            <button
              onClick={() => setIsQuizOpen(true)}
              className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] sm:text-xs font-bold transition-colors shadow-xs cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5" /> <span className="hidden xs:inline">Start</span> Quiz
            </button>
          )}

          {/* Toggle Playlist Button */}
          <button
            onClick={() => setShowPlaylist(!showPlaylist)}
            className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold transition-colors border cursor-pointer ${
              showPlaylist
                ? "bg-indigo-600 text-white border-indigo-500"
                : "bg-slate-800 text-slate-300 hover:text-white border-slate-700"
            }`}
          >
            <List className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Playlist</span>
          </button>

          {/* Fullscreen Button at Top */}
          <button
            onClick={toggleFullscreen}
            className="p-1.5 sm:p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer border border-slate-700/80"
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
          </button>

          <Link to={`/education/explore/${classLevel.slug}/${subject.slug}`}
            className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-rose-600/90 text-slate-200 hover:text-white text-[11px] sm:text-xs font-semibold transition-colors border border-slate-700 hover:border-rose-500 cursor-pointer"
          >
            <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> <span className="hidden sm:inline">Exit</span>
          </Link>
        </div>
      </div>

      {/* Main Workspace (Stage + Lessons Sidebar) */}
      <div className="flex-1 flex flex-col lg:flex-row min-h-0 overflow-visible lg:overflow-hidden">
        
        {/* Main Video Frame */}
        <div className="flex-1 flex flex-col min-h-0 p-2 sm:p-4 lg:p-6 bg-black items-center justify-center">
          <div className="w-full h-full max-w-6xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-slate-800/80 bg-black flex items-center justify-center">
            <BrandexYouTubePlayer
              videoId={lesson.youtubeId}
              title={lesson.title}
              isClassroomMode={true}
            />
          </div>
        </div>

        {/* Right Lessons Sidebar */}
        {showPlaylist && (
          <div className="w-full lg:w-88 border-t lg:border-t-0 lg:border-l border-slate-800/80 bg-[#0B1120]/95 flex flex-col shrink-0 min-h-0 max-h-[300px] lg:max-h-none overflow-hidden">
            <div className="p-3 sm:p-4 border-b border-slate-800/80 shrink-0 flex items-center justify-between">
              <div>
                <h3 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  Chapter Lessons ({allChapterLessons.length})
                </h3>
                <p className="text-xs font-bold text-white mt-0.5 truncate max-w-xs">
                  Ch {chapter.chapterNumber}: {chapter.title.replace(/^Chapter\s*\d+\s*:\s*/i, "")}
                </p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-2 min-h-0">
              {allChapterLessons.map((item, idx) => {
                const isActive = item.id === lesson.id;
                return (
                  <Link
                    key={item.id}
                    to={`/education/lesson/${item.slug}`}
                    className={`p-3 rounded-xl block transition-all border ${
                      isActive
                        ? "bg-indigo-950/80 border-indigo-500 text-white shadow-xs"
                        : "bg-slate-900/50 border-slate-800/70 hover:bg-slate-800/70 text-slate-300"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono text-slate-400">
                        Lesson {(idx + 1).toString().padStart(2, "0")}
                      </span>
                      <span className="text-[10px] font-mono text-indigo-400">
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-xs font-bold truncate mt-1">
                      {item.title}
                    </p>
                    {item.quiz && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 mt-1">
                        <HelpCircle className="w-3 h-3" /> Predefined Quiz
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        )}

      </div>

      {/* Bottom Action Bar */}
      <div className="py-3 sm:py-0 sm:h-16 px-4 sm:px-6 bg-[#0B1120] border-t border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
              ACTIVE LESSON
            </span>
            <span className="text-[10px] font-mono font-bold text-indigo-400 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-800/50">
              {lesson.duration}
            </span>
          </div>
          <h2 className="text-xs sm:text-sm md:text-base font-bold text-white tracking-tight mt-0.5 truncate max-w-md">
            {lesson.title}
          </h2>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3">
          {prevLesson ? (
            <Link to={`/education/lesson/${prevLesson.slug}`}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors border border-slate-700 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" /> <span>Previous</span>
            </Link>
          ) : (
            <span className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-slate-900 text-slate-600 text-xs font-bold border border-slate-800 cursor-not-allowed">
              <ChevronLeft className="w-4 h-4" /> <span>Previous</span>
            </span>
          )}

          {nextLesson ? (
            <Link to={`/education/lesson/${nextLesson.slug}`}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-colors shadow-md shadow-indigo-600/25 cursor-pointer"
            >
              <span>Next</span> <ChevronRight className="w-4 h-4" />
            </Link>
          ) : (
            <span className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-slate-900 text-slate-600 text-xs font-bold border border-slate-800 cursor-not-allowed">
              <span>Next</span> <ChevronRight className="w-4 h-4" />
            </span>
          )}
        </div>
      </div>

      {/* Quiz Modal within Classroom Mode */}
      {lesson.quiz && isQuizOpen && (
        <QuizRunnerModal
          quiz={lesson.quiz}
          isOpen={isQuizOpen}
          onClose={() => setIsQuizOpen(false)}
        />
      )}
    </div>
  );
}
