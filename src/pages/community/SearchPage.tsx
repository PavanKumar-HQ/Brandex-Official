import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  GraduationCap,
  Users,
  Code2,
  Tv,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import { CURRICULUM_DATA } from "@/lib/curriculum-data";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const trimmed = query.trim().toLowerCase();

  const matchingArticles = trimmed
    ? blogPosts.filter(
        (p) =>
          p.title.toLowerCase().includes(trimmed) ||
          p.excerpt.toLowerCase().includes(trimmed) ||
          p.category.toLowerCase().includes(trimmed)
      ).slice(0, 6)
    : [];

  const matchingClasses = trimmed
    ? CURRICULUM_DATA.filter(
        (c) =>
          c.name.toLowerCase().includes(trimmed) ||
          c.subjects.some((s) => s.name.toLowerCase().includes(trimmed))
      )
    : [];

  return (
    <div className="min-h-screen bg-[#f8fafd] pt-24 pb-16 lg:pt-28 lg:pb-20 selection:bg-[#4f47e6] selection:text-white">
      <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-8 space-y-8">
        
        {/* Navigation */}
        <div className="flex items-center gap-3">
          <Link
            to="/community"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#4f47e6] transition-colors bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Community Hub</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#4f47e6] transition-colors bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs"
          >
            <span>Main Website</span>
          </Link>
        </div>

        {/* Header */}
        <div className="space-y-3">
          <div className="liquid-glass-pill inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold text-[#4f47e6]">
            Global Ecosystem Search
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Search Across Brandex
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Search 50+ technical articles, Karnataka State Board curriculum modules, bootcamps, and developer projects.
          </p>
        </div>

        {/* Search Bar */}
        <div className="liquid-glass rounded-3xl p-6 border border-slate-200 shadow-sm">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by topic, keyword, or standard (e.g. 'PostgreSQL', 'Class 10 Science', 'Webhooks')..."
              className="pl-11 h-12 bg-white rounded-xl border-slate-200 text-sm"
              autoFocus
            />
          </div>

          <div className="flex flex-wrap gap-2 pt-4 text-xs text-slate-500 items-center">
            <span>Popular:</span>
            {["Web Performance", "Class 10", "Webhooks", "PostgreSQL", "Design Tokens", "Smartboard"].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setQuery(tag)}
                className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:text-[#4f47e6] hover:border-[#4f47e6] transition-colors font-medium"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        {trimmed && (
          <div className="space-y-8">
            {/* Matching Articles */}
            {matchingArticles.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-display font-bold text-xl text-slate-900 flex items-center gap-2">
                  <BookOpen size={18} className="text-[#4f47e6]" />
                  <span>Engineering Articles ({matchingArticles.length})</span>
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {matchingArticles.map((art) => (
                    <Link
                      key={art.id}
                      to={`/blog/${art.id}`}
                      className="liquid-glass-card p-5 rounded-2xl border border-slate-200 hover:bg-white transition-all block group"
                    >
                      <span className="text-[10px] font-mono font-bold text-[#4f47e6] uppercase">{art.category}</span>
                      <h4 className="font-display font-bold text-base text-slate-900 group-hover:text-[#4f47e6] transition-colors mt-1">
                        {art.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">{art.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Matching Curriculum */}
            {matchingClasses.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-display font-bold text-xl text-slate-900 flex items-center gap-2">
                  <GraduationCap size={18} className="text-[#4f47e6]" />
                  <span>KSEEB Digital Curriculum ({matchingClasses.length})</span>
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {matchingClasses.map((cls) => (
                    <Link
                      key={cls.id}
                      to={`/education/explore/${cls.slug}`}
                      className="liquid-glass-card p-5 rounded-2xl border border-slate-200 hover:bg-white transition-all block group"
                    >
                      <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase">Class {cls.grade}</span>
                      <h4 className="font-display font-bold text-base text-slate-900 group-hover:text-[#4f47e6] transition-colors mt-1">
                        {cls.name}
                      </h4>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {cls.subjects.map((s) => (
                          <span key={s.id} className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                            {s.name}
                          </span>
                        ))}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
