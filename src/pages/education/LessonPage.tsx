import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { notFound, useRouter } from "next/navigation";
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
} from "lucide-react";
import { getLessonBySlug, Lesson } from "@/education/lib/curriculum-data";
import { BrandexYouTubePlayer } from "@/education/learning/BrandexYouTubePlayer";
import { QuizRunnerModal } from "@/education/quiz/QuizRunnerModal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function LessonPage() {
  const navigate = useNavigate();
  const { slug } = use(params);
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
        <Link to="/explore"
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
    <div className="h-[calc(100vh-64px)] flex flex-col bg-[#070B14] text-white overflow-hidden select-none">
      
      {/* Top Presentation Header */}
      <div className="h-14 px-4 sm:px-6 bg-[#0B1120] border-b border-slate-800/80 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-500/20 text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider border border-indigo-500/30">
            <Tv className="w-3.5 h-3.5" /> Classroom Mode
          </div>
          <div className="h-4 w-px bg-slate-800 hidden sm:block" />
          <div className="text-xs sm:text-sm text-slate-300 font-medium truncate max-w-xl">
            <span className="text-slate-400">{classLevel.name}</span>
            <span className="mx-1.5 text-slate-600">/</span>
            <span className="text-indigo-400 font-semibold">{subject.name}</span>
            <span className="mx-1.5 text-slate-600">/</span>
            <span className="text-slate-200">Ch {chapter.chapterNumber}: {chapter.title}</span>
          </div>
        </div>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2.5">
          {lesson.quiz && (
            <button
              onClick={() => setIsQuizOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow-xs cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5" /> Take Quiz
            </button>
          )}

          <button
            onClick={() => setShowPlaylist(!showPlaylist)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
              showPlaylist
                ? "bg-indigo-950 border-indigo-500/60 text-indigo-300"
                : "bg-slate-800/80 border-slate-700 text-slate-300 hover:text-white"
            }`}
            title="Toggle Lessons Sidebar"
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Lessons List</span>
          </button>

          {/* Fullscreen Button at Top */}
          <button
            onClick={toggleFullscreen}
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer border border-slate-700/80"
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          <Link to={`/explore/${classLevel.slug}/${subject.slug}`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-rose-600/90 text-slate-200 hover:text-white text-xs font-semibold transition-colors border border-slate-700 hover:border-rose-500 cursor-pointer"
          >
            <X className="w-4 h-4" /> Exit
          </Link>
        </div>
      </div>

      {/* Main Workspace (Stage + Lessons Sidebar) */}
      <div className="flex-1 flex flex-col lg:flex-row min-h-0 overflow-hidden">
        
        {/* Main Video Frame */}
        <div className="flex-1 flex flex-col min-h-0 p-3 sm:p-6 bg-black items-center justify-center overflow-hidden">
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
          <div className="w-full lg:w-88 border-t lg:border-t-0 lg:border-l border-slate-800/80 bg-[#0B1120]/95 flex flex-col shrink-0 min-h-0 overflow-hidden">
            <div className="p-4 border-b border-slate-800/80 shrink-0 flex items-center justify-between">
              <div>
                <h3 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  Chapter Lessons ({allChapterLessons.length})
                </h3>
                <p className="text-xs font-bold text-white mt-0.5 truncate max-w-xs">
                  Ch {chapter.chapterNumber}: {chapter.title}
                </p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-2 min-h-0">
              {allChapterLessons.map((item, idx) => {
                const isActive = item.id === lesson.id;
                return (
                  <Link
                    key={item.id}
                    href={`/lesson/${item.slug}`}
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
      <div className="h-16 px-6 bg-[#0B1120] border-t border-slate-800/80 flex items-center justify-between shrink-0">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
              ACTIVE LESSON
            </span>
            <span className="text-[10px] font-mono font-bold text-indigo-400 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-800/50">
              {lesson.duration}
            </span>
          </div>
          <h2 className="text-sm sm:text-base font-bold text-white tracking-tight mt-0.5 truncate max-w-md">
            {lesson.title}
          </h2>
        </div>

        <div className="flex items-center gap-3">
          {prevLesson ? (
            <Link to={`/lesson/${prevLesson.slug}`}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors border border-slate-700 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" /> Previous Lesson
            </Link>
          ) : (
            <span className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 text-slate-600 text-xs font-bold border border-slate-800 cursor-not-allowed">
              <ChevronLeft className="w-4 h-4" /> Previous Lesson
            </span>
          )}

          {nextLesson ? (
            <Link to={`/lesson/${nextLesson.slug}`}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-colors shadow-md shadow-indigo-600/25 cursor-pointer"
            >
              Next Lesson <ChevronRight className="w-4 h-4" />
            </Link>
          ) : (
            <span className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 text-slate-600 text-xs font-bold border border-slate-800 cursor-not-allowed">
              Next Lesson <ChevronRight className="w-4 h-4" />
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
