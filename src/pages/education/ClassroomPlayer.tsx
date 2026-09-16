import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CURRICULUM_DATA } from "@/lib/curriculum-data";
import {
  Play,
  Pause,
  Tv,
  ArrowLeft,
  CheckCircle2,
  HelpCircle,
  Maximize2,
  Volume2,
  ChevronRight,
  BookOpen,
  Award,
  RotateCcw,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ClassroomPlayer() {
  const [searchParams] = useSearchParams();
  const classParam = searchParams.get("class") || "class-10";
  const subjectParam = searchParams.get("subject") || "science";

  const selectedClass = useMemo(() => {
    return CURRICULUM_DATA.find((c) => c.slug === classParam) || CURRICULUM_DATA[4]; // Default Class 10
  }, [classParam]);

  const selectedSubject = useMemo(() => {
    return selectedClass.subjects.find((s) => s.slug === subjectParam) || selectedClass.subjects[0];
  }, [selectedClass, subjectParam]);

  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<"video" | "quiz" | "notes">("video");
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});

  const currentChapter = selectedSubject.chapters[activeChapterIndex] || selectedSubject.chapters[0];

  const sampleQuiz = [
    {
      q: "What is the primary role of chlorophyll in photosynthesis?",
      options: [
        "Absorbing light energy",
        "Transporting water to leaves",
        "Releasing carbon dioxide",
        "Storing glucose in roots",
      ],
      correct: 0,
      explanation: "Chlorophyll pigments absorb solar photon energy to split water molecules during light-dependent reactions.",
    },
    {
      q: "Which gas is primarily released during the light reaction of photosynthesis?",
      options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
      correct: 1,
      explanation: "Photolysis of water releases oxygen (O2) into the atmosphere.",
    },
    {
      q: "Where does the dark reaction (Calvin cycle) take place in the chloroplast?",
      options: ["Thylakoid membrane", "Stroma", "Outer membrane", "Granum"],
      correct: 1,
      explanation: "The enzymatic reactions of the Calvin cycle take place in the stroma of the chloroplast.",
    },
  ];

  const handleSelectOption = (qIdx: number, optIdx: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleEvaluateQuiz = () => {
    let score = 0;
    sampleQuiz.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correct) score += 1;
    });
    setQuizScore(score);
  };

  const resetQuiz = () => {
    setQuizScore(null);
    setSelectedAnswers({});
  };

  return (
    <div className="min-h-screen bg-[#090e1a] text-slate-100 flex flex-col pt-4">
      
      {/* Top Classroom Bar */}
      <header className="border-b border-slate-800 bg-[#0c1322]/90 backdrop-blur-md px-6 py-3 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-4">
          <Link
            to="/education"
            className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700 transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Exit Classroom</span>
          </Link>

          <div className="h-4 w-px bg-slate-700" />

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-display font-extrabold text-sm text-white">
              {selectedClass.name} &bull; {selectedSubject.name}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700 text-slate-300">
            <Tv size={14} className="text-[#38bdf8]" />
            <span>Smartboard Mode: Active</span>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-800/80 p-1 rounded-xl border border-slate-700">
            <button
              onClick={() => setActiveTab("video")}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                activeTab === "video" ? "bg-[#4f47e6] text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              Lecture
            </button>
            <button
              onClick={() => setActiveTab("quiz")}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                activeTab === "quiz" ? "bg-[#4f47e6] text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              Assessment Quiz
            </button>
          </div>
        </div>
      </header>

      {/* Main Classroom Workspace */}
      <div className="flex-1 grid lg:grid-cols-12 gap-6 p-4 sm:p-6 max-w-[1800px] w-full mx-auto">
        
        {/* Left Column: Video Theater or Quiz Stage (8 cols) */}
        <div className="lg:col-span-8 flex flex-col space-y-4">
          
          {activeTab === "video" ? (
            /* Smartboard Presentation Stage */
            <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-black border border-slate-800 shadow-2xl flex flex-col justify-between p-6">
              
              {/* Top Video Overlay */}
              <div className="flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-mono font-bold text-white border border-white/10">
                  {currentChapter.title}
                </span>
                <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/30">
                  1080p Smartboard Feed
                </span>
              </div>

              {/* Center Play/Pause Trigger */}
              <div className="flex flex-col items-center justify-center my-auto text-center space-y-3 z-10">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-20 h-20 rounded-3xl bg-[#4f47e6] hover:bg-[#4338ca] flex items-center justify-center text-white shadow-[0_0_40px_rgba(79,71,230,0.6)] cursor-pointer transition-transform hover:scale-105"
                >
                  {isPlaying ? <Pause size={30} /> : <Play size={30} className="ml-1 fill-white" />}
                </button>
                <p className="text-xs text-slate-300 font-mono">
                  {isPlaying ? "Classroom playback live" : "Click to start smartboard presentation"}
                </p>
              </div>

              {/* Bottom Custom Video Controls */}
              <div className="space-y-3 z-10">
                {/* Scrub bar */}
                <div className="w-full h-1.5 rounded-full bg-slate-700/80 overflow-hidden cursor-pointer">
                  <div className="w-1/3 h-full bg-[#38bdf8] rounded-full" />
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-3">
                    <span>06:40 / 22:15</span>
                    <button className="hover:text-white"><Volume2 size={15} /></button>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setActiveTab("quiz")}
                      className="text-xs font-bold px-3 py-1 rounded-lg bg-[#4f47e6] hover:bg-[#4338ca] text-white flex items-center gap-1.5"
                    >
                      <Award size={12} />
                      <span>Take Chapter Quiz</span>
                    </button>
                    <button className="hover:text-white"><Maximize2 size={15} /></button>
                  </div>
                </div>
              </div>

              {/* Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none" />
            </div>
          ) : (
            /* Interactive Formative Quiz Module */
            <div className="bg-[#11192e] rounded-3xl border border-slate-800 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <div className="liquid-glass-pill inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold text-[#38bdf8] mb-1">
                    Formative Classroom Assessment
                  </div>
                  <h3 className="font-display font-extrabold text-2xl text-white">
                    {currentChapter.title} — Comprehension Check
                  </h3>
                </div>

                {quizScore !== null && (
                  <div className="px-4 py-2 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-display font-extrabold text-lg flex items-center gap-2">
                    <Award size={20} />
                    <span>{quizScore} / {sampleQuiz.length} Correct</span>
                  </div>
                )}
              </div>

              {/* Questions List */}
              <div className="space-y-6">
                {sampleQuiz.map((q, qIdx) => (
                  <div key={qIdx} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                    <div className="font-display font-bold text-sm sm:text-base text-white flex items-start gap-2.5">
                      <span className="w-6 h-6 rounded-lg bg-[#4f47e6] text-white font-mono text-xs flex items-center justify-center shrink-0">
                        {qIdx + 1}
                      </span>
                      <span>{q.q}</span>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-2.5 pt-2">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = selectedAnswers[qIdx] === optIdx;
                        const isCorrect = q.correct === optIdx;
                        const showFeedback = quizScore !== null;

                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleSelectOption(qIdx, optIdx)}
                            disabled={quizScore !== null}
                            className={`p-3 rounded-xl text-left text-xs font-medium transition-all border cursor-pointer ${
                              showFeedback
                                ? isCorrect
                                  ? "bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold"
                                  : isSelected
                                  ? "bg-rose-500/20 border-rose-500 text-rose-300 font-bold"
                                  : "bg-slate-800/40 border-slate-800 text-slate-400"
                                : isSelected
                                ? "bg-[#4f47e6] text-white border-[#4f47e6] font-bold"
                                : "bg-slate-800/60 text-slate-300 border-slate-700 hover:bg-slate-800 hover:text-white"
                            }`}
                          >
                            <span className="opacity-60 mr-2 font-mono">{String.fromCharCode(65 + optIdx)}.</span>
                            <span>{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {quizScore !== null && (
                      <div className="pt-2 text-xs text-slate-400 bg-slate-800/60 p-3 rounded-xl border border-slate-800">
                        <span className="font-bold text-slate-300">Explanation: </span>
                        <span>{q.explanation}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Quiz Submit Bar */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <button
                  onClick={() => setActiveTab("video")}
                  className="text-xs font-bold text-slate-400 hover:text-white flex items-center gap-1.5"
                >
                  <ArrowLeft size={14} />
                  <span>Return to Video Lecture</span>
                </button>

                {quizScore === null ? (
                  <Button
                    onClick={handleEvaluateQuiz}
                    disabled={Object.keys(selectedAnswers).length < sampleQuiz.length}
                    className="bg-[#4f47e6] hover:bg-[#4338ca] text-white font-bold rounded-xl px-6 h-10 text-xs shadow-md"
                  >
                    Submit Classroom Evaluation
                  </Button>
                ) : (
                  <Button
                    onClick={resetQuiz}
                    variant="outline"
                    className="rounded-xl px-5 h-10 text-xs font-bold border-slate-700 text-slate-200 hover:bg-slate-800 flex items-center gap-2"
                  >
                    <RotateCcw size={14} />
                    <span>Retake Quiz</span>
                  </Button>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Right Column: Chapter & Lesson Directory (4 cols) */}
        <div className="lg:col-span-4 bg-[#11192e] rounded-3xl border border-slate-800 p-5 flex flex-col justify-between h-[650px] overflow-hidden">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Layers size={16} className="text-[#38bdf8]" />
                <span className="font-display font-extrabold text-sm text-white">Curriculum Chapters</span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                {selectedSubject.chapters.length} Units
              </span>
            </div>

            {/* Chapter Stack */}
            <div className="space-y-2 overflow-y-auto max-h-[520px] pr-1">
              {selectedSubject.chapters.map((ch, idx) => {
                const isActive = activeChapterIndex === idx;
                return (
                  <div
                    key={ch.id}
                    onClick={() => {
                      setActiveChapterIndex(idx);
                      resetQuiz();
                    }}
                    className={`p-3.5 rounded-2xl cursor-pointer transition-all border ${
                      isActive
                        ? "bg-[#4f47e6] text-white border-[#4f47e6] shadow-[0_4px_12px_rgba(79,71,230,0.3)]"
                        : "bg-slate-900/60 text-slate-300 border-slate-800 hover:bg-slate-800/80 hover:text-white"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-0.5">
                        <div className="text-[10px] font-mono opacity-80 uppercase tracking-wider">
                          Chapter {String(idx + 1).padStart(2, '0')}
                        </div>
                        <h4 className="font-display font-bold text-xs sm:text-sm leading-snug">
                          {ch.title}
                        </h4>
                      </div>
                      <ChevronRight size={14} className={isActive ? "text-white" : "opacity-40"} />
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] opacity-80 font-mono">
                      <span>{ch.topics.length} Topics</span>
                      <span className="flex items-center gap-1">
                        <CheckCircle2 size={11} /> Ready
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800 text-center">
            <Link
              to="/education/explore"
              className="text-xs font-bold text-[#38bdf8] hover:underline"
            >
              Browse All Classes & Subjects &rarr;
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
