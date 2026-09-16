import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, User, ArrowRight, Sparkles } from "lucide-react";
import { getStories } from "@/data/community/repository";
import { Story } from "@/models/community";

export default function StoriesPage() {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    async function loadData() {
      const data = await getStories();
      setStories(data);
    }
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafd] py-12 sm:py-16 selection:bg-[#4f47e6] selection:text-white pt-10">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-10">
        
        {/* Navigation & Header */}
        <div className="border-b border-slate-200/90 pb-8 space-y-4">
          <Link
            to="/community"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#4f47e6] transition-colors bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Community Hub</span>
          </Link>

          <div className="space-y-1.5 max-w-2xl pt-2">
            <div className="liquid-glass-pill inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold text-[#4f47e6] mb-1">
              Builder Spotlights
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Founder & Builder Stories
            </h1>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Insights, production post-mortems, and journeys from members in the Brandex ecosystem.
            </p>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <div
              key={story.id}
              className="liquid-glass-card hover:bg-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold text-[#4f47e6] liquid-glass-pill px-2.5 py-0.5 rounded-full uppercase">
                    {story.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {story.readTime}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                  {story.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5 line-clamp-3">
                  {story.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#4f47e6] text-white flex items-center justify-center text-xs font-bold">
                    {story.authorName[0]}
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-slate-900">{story.authorName}</div>
                    <div className="text-[11px] text-slate-500">{story.authorRole}</div>
                  </div>
                </div>

                <span className="text-xs font-bold text-[#4f47e6] flex items-center gap-1">
                  <span>Read</span>
                  <ArrowRight size={12} />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
