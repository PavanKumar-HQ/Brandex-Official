import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Share2, Linkedin, Mail, BookOpen, Clock, ArrowRight } from "lucide-react";
import { getStoryBySlug, getStories } from "@/data/community/repository";
import { Story } from "@/models/community";
import { Button } from "@/components/ui/button";

export default function StoryDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [story, setStory] = useState<Story | null>(null);
  const [recommendations, setRecommendations] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStory() {
      if (!slug) {
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        const data = await getStoryBySlug(slug);
        setStory(data || null);

        const allStories = await getStories();
        const filtered = allStories.filter((s) => s.slug !== slug).slice(0, 2);
        setRecommendations(filtered);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadStory();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f8fafd] flex items-center justify-center p-6">
        <div className="w-8 h-8 rounded-full border-2 border-[#4f47e6] border-t-transparent animate-spin" />
      </div>
    );
  }

  if (!story) {
    return (
      <div className="min-h-screen bg-[#f8fafd] flex items-center justify-center p-6 text-center">
        <div className="space-y-4">
          <h2 className="font-display font-extrabold text-2xl text-slate-900">Story Not Found</h2>
          <Button asChild variant="brand" size="sm" className="rounded-xl">
            <Link to="/community/stories">Browse All Builder Stories</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafd] pt-24 pb-16 lg:pt-28 lg:pb-20 selection:bg-[#4f47e6] selection:text-white">
      <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-8 space-y-8">
        
        {/* Navigation */}
        <div className="flex items-center gap-3">
          <Link
            to="/community/stories"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#4f47e6] transition-colors bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Stories</span>
          </Link>
          <Link
            to="/community"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#4f47e6] transition-colors bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs"
          >
            <span>Community Hub</span>
          </Link>
        </div>

        {/* Story Card Header */}
        <div className="liquid-glass rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <div className="space-y-3">
            <div className="liquid-glass-pill inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold text-[#4f47e6]">
              {story.category || "Builder Journey"}
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              {story.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              {story.summary}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-200 text-xs font-medium text-slate-500">
            <div className="flex items-center gap-2 text-slate-900 font-semibold">
              <User size={15} className="text-[#4f47e6]" />
              <span>{story.author}</span>
              <span className="text-slate-400 font-normal">&bull; {story.authorRole}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-slate-400" />
              <span>{story.publishedAt}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-slate-400" />
              <span>{story.readTime || "5 min read"}</span>
            </div>
          </div>

          {/* Story Body Content */}
          <div className="pt-6 border-t border-slate-200 space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base font-normal">
            <p>{story.content || story.summary}</p>
          </div>
        </div>

        {/* Recommended Stories */}
        {recommendations.length > 0 && (
          <div className="space-y-4 pt-6">
            <h3 className="font-display font-bold text-xl text-slate-900">More Builder Stories</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {recommendations.map((rec) => (
                <Link
                  key={rec.id}
                  to={`/community/stories/${rec.slug}`}
                  className="liquid-glass-card p-5 rounded-2xl border border-slate-200 hover:bg-white transition-all block group"
                >
                  <span className="text-[10px] font-mono font-bold text-[#4f47e6] uppercase">{rec.category}</span>
                  <h4 className="font-display font-bold text-base text-slate-900 group-hover:text-[#4f47e6] transition-colors mt-1">
                    {rec.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">{rec.summary}</p>
                  <span className="text-xs font-bold text-[#4f47e6] flex items-center gap-1 mt-3">
                    Read Story <ArrowRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
