import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X, BookOpen, Layers, PlayCircle, HelpCircle, ArrowRight, CornerDownLeft } from "lucide-react";
import { searchCurriculum } from "@/lib/search-curriculum";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const results = searchCurriculum(query);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
      } else if (e.key === "Enter" && results[selectedIndex]) {
        e.preventDefault();
        navigateTo(results[selectedIndex].path);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, results, selectedIndex]);

  const navigateTo = (path: string) => {
    onClose();
    router.push(path);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 sm:p-6 md:p-20">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Dialog Box */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-150">
        {/* Search Bar Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-100 bg-slate-50/50">
          <Search className="w-5 h-5 text-slate-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search lessons, chapters, topics, concepts (e.g. Microorganisms, Photosynthesis)..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-1 text-[11px] font-mono text-slate-500 bg-slate-200/80 rounded border border-slate-300 ml-2">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 divide-y divide-slate-100">
          {query.trim().length === 0 ? (
            <div className="py-10 text-center text-slate-500">
              <BookOpen className="w-8 h-8 mx-auto text-slate-300 mb-2" />
              <p className="text-sm font-medium text-slate-700">Explore the Brandex Curriculum</p>
              <p className="text-xs text-slate-400 mt-0.5">
                Type keywords like &quot;photosynthesis&quot;, &quot;crop production&quot;, &quot;force&quot;, or &quot;class 8&quot;
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className="py-10 text-center text-slate-500">
              <HelpCircle className="w-8 h-8 mx-auto text-slate-300 mb-2" />
              <p className="text-sm font-medium text-slate-700">No matching educational content found</p>
              <p className="text-xs text-slate-400 mt-0.5">
                Try searching for a subject or chapter name instead.
              </p>
            </div>
          ) : (
            results.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={idx}
                  onClick={() => navigateTo(item.path)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-colors ${
                    isSelected ? "bg-blue-50/80 text-blue-950" : "hover:bg-slate-50 text-slate-800"
                  }`}
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div
                      className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                        item.type === "lesson"
                          ? "bg-blue-100 text-blue-700"
                          : item.type === "chapter"
                          ? "bg-indigo-100 text-indigo-700"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {item.type === "lesson" ? (
                        <PlayCircle className="w-4 h-4" />
                      ) : item.type === "chapter" ? (
                        <Layers className="w-4 h-4" />
                      ) : (
                        <BookOpen className="w-4 h-4" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                          {item.classTitle} • {item.subjectTitle}
                        </span>
                        {item.duration && (
                          <span className="text-[11px] font-medium text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                            {item.duration}
                          </span>
                        )}
                        {item.hasQuiz && (
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                            Quiz Included
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-semibold text-slate-900 truncate mt-0.5">
                        {item.title}
                      </p>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 pl-4 shrink-0">
                    {isSelected && (
                      <span className="text-xs font-medium text-blue-700 hidden sm:inline-flex items-center gap-1">
                        Open <CornerDownLeft className="w-3 h-3" />
                      </span>
                    )}
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 text-xs text-slate-400 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1 py-0.5 bg-slate-200 text-slate-600 rounded">↑</kbd>{" "}
              <kbd className="px-1 py-0.5 bg-slate-200 text-slate-600 rounded">↓</kbd> Navigate
            </span>
            <span>
              <kbd className="px-1 py-0.5 bg-slate-200 text-slate-600 rounded">↵</kbd> Select
            </span>
          </div>
          <span className="font-mono text-[11px]">Brandex Search Engine</span>
        </div>
      </div>
    </div>
  );
}
