import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Maximize2, Minimize2, ChevronLeft, ChevronRight, HelpCircle, BookOpen, Layers, Tv } from "lucide-react";
import { Lesson, Chapter, Subject, ClassLevel } from "@/education/lib/curriculum-data";
import { BrandexYouTubePlayer } from "../learning/BrandexYouTubePlayer";
import { QuizRunnerModal } from "../quiz/QuizRunnerModal";

interface ClassroomModeModalProps {
  lesson: Lesson;
  chapter: Chapter;
  subject: Subject;
  classLevel: ClassLevel;
  isOpen: boolean;
  onClose: () => void;
  onSelectLesson?: (lesson: Lesson) => void;
  onSelectNextLesson?: () => void;
  onSelectPrevLesson?: () => void;
  hasNextLesson?: boolean;
  hasPrevLesson?: boolean;
}

export function ClassroomModeModal({
  lesson,
  chapter,
  subject,
  classLevel,
  isOpen,
  onClose,
  onSelectLesson,
  onSelectNextLesson,
  onSelectPrevLesson,
  hasNextLesson = false,
  hasPrevLesson = false,
}: ClassroomModeModalProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(true);

  const allChapterLessons = chapter.topics.flatMap((t) => t.lessons);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape" && !isQuizOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isQuizOpen, onClose]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[99999] bg-[#070B14] text-white flex flex-col overflow-hidden select-none">
      
      {/* Top Presentation Header */}
      <div className="h-14 px-3 sm:px-6 bg-[#0B1120] border-b border-slate-800/80 flex items-center justify-between shrink-0 gap-2">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-500/20 text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider border border-indigo-500/30 shrink-0">
            <Tv className="w-3.5 h-3.5" /> <span className="hidden xs:inline">Classroom</span> Mode
          </div>
          <div className="h-4 w-px bg-slate-800 hidden sm:block" />
          <div className="text-xs sm:text-sm text-slate-300 font-medium truncate max-w-[140px] sm:max-w-md lg:max-w-xl">
            <span className="text-slate-400 hidden md:inline">{classLevel.name} / </span>
            <span className="text-indigo-400 font-semibold">{subject.name}</span>
            <span className="text-slate-400 hidden sm:inline"> / Ch {chapter.chapterNumber}</span>
          </div>
        </div>

        {/* Right Controls */}
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

          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-rose-600/90 text-slate-200 hover:text-white text-xs font-semibold transition-colors border border-slate-700 hover:border-rose-500 cursor-pointer"
          >
            <X className="w-4 h-4" /> Exit
          </button>
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
                  Ch {chapter.chapterNumber}: {chapter.title.replace(/^Chapter\s*\d+\s*:\s*/i, "")}
                </p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-2 min-h-0">
              {allChapterLessons.map((item, idx) => {
                const isActive = item.id === lesson.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => onSelectLesson && onSelectLesson(item)}
                    className={`p-3 rounded-xl cursor-pointer transition-all border ${
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
                  </div>
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
          <button
            onClick={onSelectPrevLesson}
            disabled={!hasPrevLesson}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold disabled:opacity-30 disabled:pointer-events-none transition-colors border border-slate-700 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" /> Previous Lesson
          </button>

          <button
            onClick={onSelectNextLesson}
            disabled={!hasNextLesson}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold disabled:opacity-30 disabled:pointer-events-none transition-colors shadow-md shadow-indigo-600/25 cursor-pointer"
          >
            Next Lesson <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Quiz Modal within Classroom Mode */}
      {lesson.quiz && (
        <QuizRunnerModal
          quiz={lesson.quiz}
          isOpen={isQuizOpen}
          onClose={() => setIsQuizOpen(false)}
        />
      )}
    </div>,
    document.body
  );
}
