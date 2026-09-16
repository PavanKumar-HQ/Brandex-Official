import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Search, Clock, ArrowRight, ArrowLeft, Tag, User, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { blogPosts as localBlogPosts } from "@/data/blogPosts";
import SEOHead from "@/components/SEOHead";

const categories = ["All", "Engineering", "Design", "Business"];

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  created_at: string;
  read_time: string;
  slug: string;
  content: string;
  author: "Sathvik Nagesh" | "Pavan Kumar S";
}

export default function Blog() {
  useScrollReveal();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fallbackPosts: BlogPost[] = localBlogPosts.map((p) => ({
      id: p.id,
      title: p.title,
      excerpt: p.excerpt,
      category: p.category,
      created_at: p.date,
      read_time: p.readTime,
      slug: p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      content: p.content.join("\n\n"),
      author: p.author,
    }));
    setPosts(fallbackPosts);
    setLoading(false);
  }, []);

  const filtered = posts.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      p.author.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featured = filtered[0];
  const rest = filtered.slice(1);

  const getAuthorSlug = (author: string) => {
    return author.toLowerCase().includes("pavan") ? "/pavan-kumar" : "/sathvik";
  };

  return (
    <>
      <SEOHead
        title="Technical Engineering & Architecture Blog (50+ Articles) | Brandex"
        description="Comprehensive technical breakdowns on sub-second web architecture, conversion UX design, PostgreSQL scaling, and webhook automation by Sathvik Nagesh and Pavan Kumar S."
        canonicalUrl="/blog"
      />

      {/* Hero Header - Left-Aligned, Tight Spacing */}
      <section className="pt-24 pb-8 lg:pt-28 lg:pb-10 bg-[#f8fafd] border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
          {/* Back Button */}
          <div className="mb-4">
            <Link
              to="/"
              className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-[#4f47e6] transition-colors"
            >
              <ArrowLeft size={13} /> Back to Home
            </Link>
          </div>

          <motion.div
            className="max-w-3xl text-left"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-[#4f47e6] uppercase mb-3 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
              Technical Editorial ({posts.length} Articles)
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight leading-[1.12]">
              Engineering Insights & <span className="text-[#4f47e6]">Architecture Notes</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Written by founding architects <Link to="/pavan-kumar" className="text-[#4f47e6] font-bold hover:underline">Pavan Kumar S</Link> and <Link to="/sathvik" className="text-[#4f47e6] font-bold hover:underline">Sathvik Nagesh</Link> on scaling mission-critical web applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Search - Compact Sticky Header */}
      <section className="py-4 bg-white/95 border-b border-slate-100 sticky top-[4rem] z-30 backdrop-blur-md">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  type="button"
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer border ${
                    activeCategory === cat
                      ? "bg-[#4f47e6] text-white border-[#4338ca] shadow-2xs scale-[1.01]"
                      : "bg-slate-50 text-slate-700 hover:text-slate-900 hover:bg-white border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-72">
              <Search size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search articles, topics, authors..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 h-9 rounded-xl bg-slate-50 border-slate-300 text-xs font-medium text-slate-900 focus:bg-white shadow-2xs"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Listing Section - Tight Spacing, Left Aligned */}
      {loading ? (
        <section className="py-10 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-60 rounded-3xl" />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-8 lg:py-12 bg-white border-b border-slate-100">
          <div className="container mx-auto px-6 max-w-6xl">
            
            {/* Featured Post Card */}
            {featured && (
              <div className="mb-8">
                <Link to={`/blog/${featured.slug}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="liquid-glass-card hover:bg-white rounded-3xl p-6 sm:p-8 transition-all duration-200 group cursor-pointer border border-slate-200/90 shadow-xs hover:shadow-sm"
                  >
                    <div className="flex flex-wrap items-center gap-2.5 mb-3">
                      <Badge variant="secondary" className="liquid-glass-pill text-[#4f47e6] font-bold border-0 text-[11px] px-2.5 py-0.5">
                        <Tag size={10} className="mr-1" />
                        {featured.category}
                      </Badge>
                      <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                        <Clock size={11} /> {featured.read_time}
                      </span>
                      <span className="text-[11px] font-mono text-[#4f47e6] font-bold">
                        By {featured.author}
                      </span>
                    </div>

                    <h2 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 mb-2.5 group-hover:text-[#4f47e6] transition-colors leading-tight">
                      {featured.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl font-normal mb-5">
                      {featured.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-200/80">
                      <span className="text-slate-400 font-mono font-medium text-[11px]">{featured.created_at}</span>
                      <Button
                        size="sm"
                        className="rounded-xl bg-[#4f47e6] text-white font-bold text-xs shadow-[0_3px_10px_rgba(79,71,230,0.3)] hover:bg-[#4338ca] transition-all gap-1.5"
                      >
                        <span>Read Full Breakdown</span>
                        <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                      </Button>
                    </div>
                  </motion.div>
                </Link>
              </div>
            )}

            {/* Grid of Remaining Posts */}
            {rest.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((post, i) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: Math.min(i * 0.03, 0.25) }}
                    className="liquid-glass-card hover:bg-white rounded-2xl p-5 sm:p-6 transition-all duration-200 group flex flex-col justify-between hover:-translate-y-0.5 border border-slate-200/90 shadow-2xs hover:shadow-xs"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <Badge variant="secondary" className="liquid-glass-pill text-[#4f47e6] font-bold border-0 text-[10px] px-2 py-0.5">
                          {post.category}
                        </Badge>
                        <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                          <Clock size={11} /> {post.read_time}
                        </span>
                      </div>

                      <Link to={`/blog/${post.slug}`}>
                        <h3 className="font-display font-bold text-base text-slate-900 mb-2 group-hover:text-[#4f47e6] transition-colors leading-snug">
                          {post.title}
                        </h3>
                      </Link>

                      <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-3.5 border-t border-slate-200/80 flex items-center justify-between">
                      <div className="text-[11px] text-slate-500">
                        <Link
                          to={getAuthorSlug(post.author)}
                          className="font-semibold text-slate-700 hover:text-[#4f47e6] transition-colors"
                        >
                          {post.author}
                        </Link>
                      </div>

                      {/* Prominent Tactile Button */}
                      <Button
                        asChild
                        size="sm"
                        className="h-8 px-3.5 rounded-xl bg-[#4f47e6] hover:bg-[#4338ca] text-white text-xs font-bold shadow-[0_2px_8px_rgba(79,71,230,0.25)] transition-all"
                      >
                        <Link to={`/blog/${post.slug}`} className="flex items-center gap-1.5">
                          <span>Read Article</span>
                          <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-slate-500 text-xs sm:text-sm">No articles found matching "{search}".</p>
              </div>
            )}

          </div>
        </section>
      )}
    </>
  );
}
