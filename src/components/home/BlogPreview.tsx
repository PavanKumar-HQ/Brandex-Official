import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Tag, BookOpen } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function BlogPreview() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-16 lg:py-20 relative overflow-hidden bg-[#f4f7fc] border-b border-slate-200/80 w-full" id="blog">
      {/* Ambient Depth Elements */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-2xl">
            <div className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-widest text-[#4f47e6] uppercase mb-2.5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4f47e6] animate-pulse" />
              Articles & Guides
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Helpful Articles & <span className="text-[#4f47e6]">Tech Guides</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal mt-1.5">
              Practical tips on web design, automation, and growing your business online.
            </p>
          </div>

          <Button
            asChild
            variant="liquidGlass"
            size="default"
            className="rounded-xl self-start md:self-auto shrink-0 font-bold text-xs h-10 px-5 shadow-2xs"
          >
            <Link to="/blog" className="flex items-center gap-2">
              <span>View All Articles</span>
              <ArrowRight size={13} />
            </Link>
          </Button>
        </motion.div>

        {/* 3-Column Liquid Glass Article Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {recentPosts.map((post, i) => {
            const slug = post.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="liquid-glass-card hover:bg-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between group transition-all duration-200 border border-slate-200/90 shadow-xs hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge variant="secondary" className="liquid-glass-pill text-[#4f47e6] font-bold border-0 text-[11px] px-2.5 py-0.5">
                      <Tag size={10} className="mr-1" />
                      {post.category}
                    </Badge>
                    <span className="text-[11px] text-slate-600 font-semibold flex items-center gap-1">
                      <Clock size={11} /> {post.readTime}
                    </span>
                  </div>

                  <Link to={`/blog/${slug}`}>
                    <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 mb-2 group-hover:text-[#4f47e6] transition-colors leading-snug">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between">
                  <span className="text-slate-600 font-mono font-semibold text-[11px]">{post.date}</span>
                  
                  <Button
                    asChild
                    size="sm"
                    className="h-8 px-3.5 rounded-xl bg-[#4f47e6] hover:bg-[#4338ca] text-white text-xs font-bold shadow-[0_2px_8px_rgba(79,71,230,0.25)] transition-all hover:scale-102"
                  >
                    <Link
                      to={`/blog/${slug}`}
                      className="flex items-center gap-1.5"
                      aria-label={`Read article: ${post.title}`}
                    >
                      <span>Read Article</span>
                      <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
