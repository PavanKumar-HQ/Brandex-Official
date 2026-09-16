import { useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { Tv, PlayCircle, HelpCircle, Layers, ArrowLeft, Maximize2, Sparkles, BookOpen } from "lucide-react";
import { CURRICULUM_DATA, Lesson, Chapter, Subject, ClassLevel } from "@/education/lib/curriculum-data";
import { BrandexYouTubePlayer } from "@/education/learning/BrandexYouTubePlayer";
import { QuizRunnerModal } from "@/education/quiz/QuizRunnerModal";

export default function ClassroomHubPage() {
  const [selectedClassId, setSelectedClassId] = useState<string>("class-8");
  const [selectedSubjectSlug, setSelectedSubjectSlug] = useState<string>("science");
  
  const currentClass = CURRICULUM_DATA.find((c) => c.id === selectedClassId) || CURRICULUM_DATA[0];
  const currentSubject = currentClass.subjects.find((s) => s.slug === selectedSubjectSlug) || currentClass.subjects[0];
  
  const defaultChapter = currentSubject.chapters[0];
  const defaultTopic = defaultChapter.topics[0];
  const defaultLesson = defaultTopic.lessons[0];

  const [activeLesson, setActiveLesson] = useState<Lesson>(defaultLesson);
  const [activeChapter, setActiveChapter] = useState<Chapter>(defaultChapter);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const allSubjectLessons = currentSubject.chapters.flatMap((ch) =>
    ch.topics.flatMap((top) => top.lessons.map((l) => ({ lesson: l, chapter: ch })))
  );

  return (
    <div className="h-[calc(100vh-64px)] flex flex-col bg-[#070B14] text-white overflow-hidden select-none">
      
      {/* Top Classroom Bar */}
      <div className="h-14 px-4 sm:px-6 bg-[#0B1120] border-b border-slate-800/80 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <Link to="/education"
            className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition-colors bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700/60"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Exit
          </Link>
          
          <div className="h-4 w-px bg-slate-800 hidden sm:block" />
          
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-500/20 text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider border border-indigo-500/30">
              <Tv className="w-3.5 h-3.5" /> Classroom Theater
            </span>
            <span className="text-xs text-slate-400 hidden md:inline font-medium">
              Karnataka State Syllabus • Smartboard Mode
            </span>
          </div>
        </div>

        {/* Grade & Subject Selectors */}
        <div className="flex items-center gap-2">
          <select
            value={selectedClassId}
            onChange={(e) => {
              setSelectedClassId(e.target.value);
              const cls = CURRICULUM_DATA.find((c) => c.id === e.target.value);
              if (cls && cls.subjects[0]) {
                setSelectedSubjectSlug(cls.subjects[0].slug);
                const ch = cls.subjects[0].chapters[0];
                setActiveChapter(ch);
                setActiveLesson(ch.topics[0].lessons[0]);
              }
            }}
            className="bg-slate-800/90 border border-slate-700 text-xs font-bold text-slate-200 rounded-lg px-3 py-1.5 focus:outline-hidden focus:ring-1 focus:ring-indigo-500 cursor-pointer"
          >
            {CURRICULUM_DATA.map((cls) => (
              <option key={cls.id} value={cls.id}>
                {cls.name}
              </option>
            ))}
          </select>

          <select
            value={selectedSubjectSlug}
            onChange={(e) => {
              setSelectedSubjectSlug(e.target.value);
              const sub = currentClass.subjects.find((s) => s.slug === e.target.value);
              if (sub && sub.chapters[0]) {
                const ch = sub.chapters[0];
                setActiveChapter(ch);
                setActiveLesson(ch.topics[0].lessons[0]);
              }
            }}
            className="bg-slate-800/90 border border-slate-700 text-xs font-bold text-slate-200 rounded-lg px-3 py-1.5 focus:outline-hidden focus:ring-1 focus:ring-indigo-500 cursor-pointer"
          >
            {currentClass.subjects.map((sub) => (
              <option key={sub.slug} value={sub.slug}>
                {sub.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main 2-Pane Workspace */}
      <div className="flex-1 flex flex-col lg:flex-row min-h-0 overflow-hidden">
        
        {/* Left Stage (Video + Details) */}
        <div className="flex-1 flex flex-col min-h-0 p-4 sm:p-6 overflow-hidden">
          
          {/* Main Video Frame */}
          <div className="flex-1 min-h-0 w-full flex items-center justify-center">
            <div className="w-full h-full max-w-6xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-slate-800/90 bg-black flex items-center justify-center">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeLesson.youtubeId}?rel=0&modestbranding=1&enablejsapi=1&autoplay=1`}
                title={activeLesson.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>

          {/* Info & Quiz Strip */}
          <div className="shrink-0 mt-3 max-w-6xl w-full mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 bg-[#0B1120] rounded-xl border border-slate-800/80">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                  {currentClass.name} • {currentSubject.name} • Ch {activeChapter.chapterNumber}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {activeLesson.duration}
                </span>
              </div>
              <h1 className="text-base sm:text-lg font-bold text-white mt-0.5 truncate">
                {activeLesson.title}
              </h1>
            </div>

            {activeLesson.quiz && (
              <button
                onClick={() => setIsQuizOpen(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md shrink-0 cursor-pointer"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Start Classroom Quiz</span>
              </button>
            )}
          </div>

        </div>

        {/* Right Playlist Sidebar */}
        <div className="w-full lg:w-88 border-t lg:border-t-0 lg:border-l border-slate-800/80 bg-[#0B1120]/95 flex flex-col shrink-0 min-h-0 overflow-hidden">
          
          <div className="p-4 border-b border-slate-800/80 shrink-0">
            <h3 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
              Syllabus Playlist
            </h3>
            <p className="text-sm font-bold text-white mt-0.5">
              {currentSubject.name} • {allSubjectLessons.length} Modules
            </p>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2 min-h-0">
            {allSubjectLessons.map(({ lesson, chapter }, idx) => {
              const isActive = lesson.id === activeLesson.id;
              return (
                <div
                  key={lesson.id}
                  onClick={() => {
                    setActiveLesson(lesson);
                    setActiveChapter(chapter);
                  }}
                  className={`p-3 rounded-xl cursor-pointer transition-all border ${
                    isActive
                      ? "bg-indigo-950/80 border-indigo-500 text-white shadow-xs"
                      : "bg-slate-900/50 border-slate-800/70 hover:bg-slate-800/70 text-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono text-slate-400">
                      Ch {chapter.chapterNumber} • Lesson {(idx + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="text-[10px] font-mono text-indigo-400">
                      {lesson.duration}
                    </span>
                  </div>
                  <p className="text-xs font-bold truncate mt-1">
                    {lesson.title}
                  </p>
                  {lesson.quiz && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 mt-1">
                      <HelpCircle className="w-3 h-3" /> Quiz Attached
                    </span>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Quiz Runner Modal */}
      {activeLesson.quiz && (
        <QuizRunnerModal
          quiz={activeLesson.quiz}
          isOpen={isQuizOpen}
          onClose={() => setIsQuizOpen(false)}
        />
      )}

    </div>
  );
}
