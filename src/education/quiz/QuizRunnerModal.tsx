import { useState } from "react";
import { X, CheckCircle2, XCircle, Award, RotateCcw, ArrowRight, ArrowLeft, HelpCircle } from "lucide-react";
import { Quiz } from "@/education/lib/curriculum-data";

interface QuizRunnerModalProps {
  quiz: Quiz;
  isOpen: boolean;
  onClose: () => void;
  onLessonComplete?: () => void;
}

export function QuizRunnerModal({ quiz, isOpen, onClose, onLessonComplete }: QuizRunnerModalProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showReview, setShowReview] = useState(false);

  if (!isOpen) return null;

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const totalQuestions = quiz.questions.length;

  const handleSelectOption = (questionId: string, optionId: string) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const calculateScore = () => {
    let score = 0;
    quiz.questions.forEach((q) => {
      const selectedOptionId = selectedAnswers[q.id];
      const correctOption = q.options.find((opt) => opt.isCorrect);
      if (selectedOptionId && correctOption && selectedOptionId === correctOption.id) {
        score += q.points;
      }
    });
    return score;
  };

  const totalPoints = quiz.questions.reduce((sum, q) => sum + q.points, 0);
  const score = calculateScore();
  const percentage = Math.round((score / totalPoints) * 100);
  const isPassed = percentage >= quiz.passingPercentage;

  const handleSubmit = () => {
    setIsSubmitted(true);
    if (onLessonComplete) {
      onLessonComplete();
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setShowReview(false);
    setCurrentQuestionIndex(0);
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Main Modal Card */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E2E8F0] overflow-hidden z-10 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4.5 border-b border-[#E2E8F0] bg-[#F8FAFC]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#EEF2FF] text-[#4F46E5]">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#4338CA] bg-[#EEF2FF] px-2.5 py-0.5 rounded-md font-mono border border-[#E0E7FF]">
                  PREDEFINED ASSESSMENT
                </span>
                <span className="text-xs text-slate-400 font-medium font-mono">
                  {totalQuestions} Questions
                </span>
              </div>
              <h2 className="text-base font-bold text-[#0F172A] truncate max-w-md mt-0.5">
                {quiz.title}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {!isSubmitted ? (
            /* Active Question Screen */
            <div className="space-y-6">
              {/* Progress Bar & Counter */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2 font-mono">
                  <span>
                    Question {currentQuestionIndex + 1} of {totalQuestions}
                  </span>
                  <span>{Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100)}% Complete</span>
                </div>
                <div className="w-full h-2.5 bg-[#F1F5F9] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#4F46E5] rounded-full transition-all duration-300"
                    style={{
                      width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* Question Text */}
              <div className="py-2">
                <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] leading-snug">
                  {currentQuestion.question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = selectedAnswers[currentQuestion.id] === option.id;
                  const optionLabel = String.fromCharCode(65 + idx);

                  return (
                    <button
                      key={option.id}
                      onClick={() => handleSelectOption(currentQuestion.id, option.id)}
                      className={`w-full flex items-center gap-3.5 p-4 rounded-2xl border text-left transition-all ${
                        isSelected
                          ? "border-[#4F46E5] bg-[#EEF2FF] text-[#0F172A] shadow-xs ring-1 ring-[#4F46E5]"
                          : "border-[#E2E8F0] hover:border-slate-300 hover:bg-slate-50 text-slate-800"
                      }`}
                    >
                      <span
                        className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                          isSelected
                            ? "bg-[#4F46E5] text-white"
                            : "bg-[#F1F5F9] text-slate-600"
                        }`}
                      >
                        {optionLabel}
                      </span>
                      <span className="text-sm font-semibold leading-relaxed">{option.text}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : !showReview ? (
            /* Score Summary Screen */
            <div className="text-center py-8 space-y-6">
              <div
                className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${
                  isPassed ? "bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/60" : "bg-amber-50 text-amber-600 ring-8 ring-amber-50/60"
                }`}
              >
                <Award className="w-10 h-10" />
              </div>

              <div>
                <span
                  className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                    isPassed ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {isPassed ? "Assessment Passed" : "Needs Review"}
                </span>
                <h3 className="text-3xl font-extrabold text-[#0F172A] mt-3">
                  Score: {score} / {totalPoints}
                </h3>
                <p className="text-sm font-medium text-slate-500 mt-1">
                  You achieved {percentage}% accuracy (Passing mark: {quiz.passingPercentage}%)
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto p-4 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0]">
                <div className="text-center">
                  <span className="text-xs text-slate-400 font-medium">Total Questions</span>
                  <p className="text-xl font-bold text-[#0F172A] mt-0.5">{totalQuestions}</p>
                </div>
                <div className="text-center">
                  <span className="text-xs text-slate-400 font-medium">Answered Correct</span>
                  <p className="text-xl font-bold text-emerald-600 mt-0.5">{score}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => setShowReview(true)}
                  className="w-full sm:w-auto px-7 py-3 rounded-2xl bg-[#4F46E5] text-white hover:bg-[#4338CA] font-bold text-sm transition-colors shadow-sm"
                >
                  Review Detailed Answers
                </button>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-7 py-3 rounded-2xl border border-[#E2E8F0] text-[#0F172A] hover:bg-slate-50 font-bold text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" /> Retake Quiz
                </button>
              </div>
            </div>
          ) : (
            /* Detailed Answers Review Matrix */
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                <h3 className="text-base font-bold text-[#0F172A]">Answer Breakdown &amp; Explanations</h3>
                <button
                  onClick={() => setShowReview(false)}
                  className="text-xs font-bold text-[#4F46E5] hover:underline"
                >
                  Back to Summary
                </button>
              </div>

              <div className="space-y-6">
                {quiz.questions.map((q, qIndex) => {
                  const selectedOptionId = selectedAnswers[q.id];
                  const correctOption = q.options.find((opt) => opt.isCorrect);
                  const isCorrect = selectedOptionId === correctOption?.id;

                  return (
                    <div
                      key={q.id}
                      className={`p-5 rounded-2xl border ${
                        isCorrect
                          ? "bg-emerald-50/30 border-emerald-200"
                          : "bg-rose-50/30 border-rose-200"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                        )}
                        <div className="space-y-3 w-full">
                          <p className="text-sm font-bold text-[#0F172A]">
                            {qIndex + 1}. {q.question}
                          </p>

                          <div className="space-y-2 text-xs">
                            {q.options.map((opt) => {
                              const isUserPick = opt.id === selectedOptionId;
                              const isThisCorrect = opt.isCorrect;

                              return (
                                <div
                                  key={opt.id}
                                  className={`p-3 rounded-xl flex items-center justify-between font-semibold ${
                                    isThisCorrect
                                      ? "bg-emerald-100/90 text-emerald-950 border border-emerald-300"
                                      : isUserPick
                                      ? "bg-rose-100/90 text-rose-950 line-through border border-rose-300"
                                      : "bg-white text-slate-600 border border-[#E2E8F0]"
                                  }`}
                                >
                                  <span>{opt.text}</span>
                                  {isThisCorrect && (
                                    <span className="text-[10px] uppercase font-bold text-emerald-800 bg-emerald-200 px-1.5 py-0.5 rounded">
                                      Correct
                                    </span>
                                  )}
                                  {isUserPick && !isThisCorrect && (
                                    <span className="text-[10px] uppercase font-bold text-rose-800 bg-rose-200 px-1.5 py-0.5 rounded">
                                      Your Choice
                                    </span>
                                  )}
                                </div>
                              );
                            })}
                          </div>

                          {q.explanation && (
                            <div className="p-3.5 bg-white rounded-xl border border-[#E2E8F0] text-xs text-slate-700">
                              <span className="font-bold text-[#0F172A] block mb-0.5">Explanation:</span>
                              {q.explanation}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer Controls */}
        {!isSubmitted && (
          <div className="flex items-center justify-between px-6 py-4.5 border-t border-[#E2E8F0] bg-[#F8FAFC]">
            <button
              onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentQuestionIndex === 0}
              className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-[#0F172A] disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" /> Previous
            </button>

            {currentQuestionIndex < totalQuestions - 1 ? (
              <button
                onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                className="px-6 py-2.5 text-sm font-bold rounded-2xl bg-[#4F46E5] text-white hover:bg-[#4338CA] flex items-center gap-1.5 shadow-sm transition-colors"
              >
                Next <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={Object.keys(selectedAnswers).length === 0}
                className="px-7 py-2.5 text-sm font-bold rounded-2xl bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-50 transition-colors shadow-sm"
              >
                Submit Quiz
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
