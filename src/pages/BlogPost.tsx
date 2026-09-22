import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, Clock, Tag, Share2, ArrowRight, User, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { blogPosts as localBlogPosts } from "@/data/blogPosts";
import SEOHead from "@/components/SEOHead";
import { SITE_CONFIG, getCanonicalUrl } from "@/config/site";

interface BlogPostData {
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

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [related, setRelated] = useState<BlogPostData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const slug = id;
    const foundPost = localBlogPosts.find(
      (p) =>
        p.id === slug ||
        p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") === slug
    );

    if (foundPost) {
      setPost({
        id: foundPost.id,
        title: foundPost.title,
        excerpt: foundPost.excerpt,
        category: foundPost.category,
        created_at: foundPost.date,
        read_time: foundPost.readTime,
        slug: foundPost.id,
        content: foundPost.content.join("\n\n"),
        author: foundPost.author,
      });

      const relatedPosts = localBlogPosts
        .filter((p) => p.id !== foundPost.id && p.category === foundPost.category)
        .slice(0, 2)
        .map((p) => ({
          id: p.id,
          title: p.title,
          excerpt: p.excerpt,
          category: p.category,
          created_at: p.date,
          read_time: p.readTime,
          slug: p.id,
          content: p.content.join("\n\n"),
          author: p.author,
        }));
      setRelated(relatedPosts);
    } else {
      setPost(null);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <section className="py-28 bg-[#f8fafd]">
        <div className="container mx-auto px-6 max-w-3xl space-y-4">
          <Skeleton className="h-8 w-48 rounded-xl" />
          <Skeleton className="h-12 w-full rounded-2xl" />
          <Skeleton className="h-5 w-2/3 rounded-xl" />
          <Skeleton className="h-80 w-full mt-6 rounded-3xl" />
        </div>
      </section>
    );
  }

  if (!post) {
    return (
      <section className="py-28 bg-[#f8fafd]">
        <SEOHead title="Article Not Found | Brandex Engineering" noindex={true} />
        <div className="container mx-auto px-6 text-center max-w-lg">
          <div className="liquid-glass rounded-3xl p-8 border border-slate-200">
            <h1 className="font-display text-2xl font-bold text-slate-900 mb-2">
              Article Not Found
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm mb-5">
              The article you're looking for might have been moved or updated.
            </p>
            <Button asChild variant="brand" size="default" className="rounded-xl">
              <Link to="/blog">Back to Engineering Blog</Link>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  const authorSlug = post.author.includes("Pavan") ? "/pavan-kumar" : "/sathvik";

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${getCanonicalUrl(`/blog/${post.id}`)}#article`,
        "isPartOf": {
          "@type": "Blog",
          "@id": `${SITE_CONFIG.url}/blog#blog`,
          "name": `${SITE_CONFIG.name} Engineering Blog`,
          "publisher": {
            "@type": "Organization",
            "@id": `${SITE_CONFIG.url}/#organization`,
            "name": SITE_CONFIG.name,
            "url": SITE_CONFIG.url
          }
        },
        "headline": post.title,
        "description": post.excerpt,
        "mainEntityOfPage": getCanonicalUrl(`/blog/${post.id}`),
        "datePublished": post.created_at,
        "dateModified": post.created_at,
        "articleSection": post.category,
        "inLanguage": "en-US",
        "image": `${SITE_CONFIG.url}/main_logo.png`,
        "author": {
          "@type": "Person",
          "name": post.author,
          "url": `${SITE_CONFIG.url}${authorSlug}`,
          "jobTitle": post.author.includes("Pavan") ? "Chief Systems Architect" : "Head of Product Design"
        },
        "publisher": {
          "@type": "Organization",
          "name": SITE_CONFIG.name,
          "url": SITE_CONFIG.url,
          "logo": {
            "@type": "ImageObject",
            "url": `${SITE_CONFIG.url}/main_logo.png`
          }
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${getCanonicalUrl(`/blog/${post.id}`)}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${SITE_CONFIG.url}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Engineering Blog",
            "item": `${SITE_CONFIG.url}/blog`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": getCanonicalUrl(`/blog/${post.id}`)
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEOHead
        title={`${post.title} | Brandex Engineering`}
        description={post.excerpt}
        canonicalUrl={`/blog/${post.id}`}
        type="article"
        schema={articleSchema}
      />

      {/* Hero Header - Left-aligned, Tight Spacing */}
      <section className="pt-24 pb-8 lg:pt-28 lg:pb-10 bg-[#f8fafd] relative overflow-hidden border-b border-slate-200/80">
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 max-w-4xl text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/blog"
              className="liquid-glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-[#4f47e6] transition-colors mb-4"
            >
              <ArrowLeft size={13} /> Back to all articles
            </Link>

            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <Badge variant="secondary" className="liquid-glass-pill text-[#4f47e6] font-bold border-0 text-[11px] px-2.5 py-0.5">
                <Tag size={10} className="mr-1" />
                {post.category}
              </Badge>
              <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                <Clock size={11} /> {post.read_time}
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                {post.created_at}
              </span>
              <Link
                to={authorSlug}
                className="liquid-glass-pill px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-[#4f47e6] hover:bg-white flex items-center gap-1 transition-colors"
              >
                <User size={11} />
                <span>By {post.author}</span>
              </Link>
            </div>

            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3 leading-[1.15] tracking-tight">
              {post.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content Section - Tight Spacing */}
      <section className="py-8 lg:py-12 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.article
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: ({ node, ...props }) => (
                    <div className="mt-12 mb-5 pt-7 border-t border-slate-200/90 first:mt-6 first:pt-0 first:border-t-0">
                      <h2
                        className="font-display text-xl sm:text-2xl font-black text-slate-950 tracking-tight flex items-baseline gap-2.5 leading-snug"
                        {...props}
                      />
                    </div>
                  ),
                  h3: ({ node, ...props }) => (
                    <h3
                      className="font-display text-lg sm:text-xl font-extrabold text-slate-900 mt-8 mb-3.5 tracking-tight"
                      {...props}
                    />
                  ),
                  p: ({ node, ...props }) => (
                    <p
                      className="text-base sm:text-lg text-slate-700 leading-relaxed sm:leading-loose mb-7 font-normal"
                      {...props}
                    />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul className="space-y-3 mb-7 pl-6 list-disc text-slate-700 text-base sm:text-lg marker:text-[#4f47e6]" {...props} />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol className="space-y-3 mb-7 pl-6 list-decimal text-slate-700 text-base sm:text-lg marker:font-bold marker:text-[#4f47e6]" {...props} />
                  ),
                  li: ({ node, ...props }) => (
                    <li className="leading-relaxed pl-1" {...props} />
                  ),
                  blockquote: ({ node, ...props }) => (
                    <blockquote
                      className="my-9 pl-6 pr-5 py-5 border-l-4 border-[#4f47e6] bg-slate-50/90 rounded-r-2xl text-slate-800 font-medium italic text-base sm:text-lg shadow-xs"
                      {...props}
                    />
                  ),
                  code: ({ node, className, children, ...props }) => (
                    <code
                      className="bg-slate-100 text-[#4f47e6] font-mono text-xs sm:text-sm px-2 py-0.5 rounded-md font-semibold border border-slate-200/60"
                      {...props}
                    >
                      {children}
                    </code>
                  ),
                  strong: ({ node, ...props }) => (
                    <strong className="font-bold text-slate-950" {...props} />
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Service Lead-Magnet Conversion Banner - Tight & High Density */}
            <div className="mt-10 p-6 sm:p-7 rounded-3xl liquid-glass border border-slate-200/90 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-5 bg-white">
              <div>
                <span className="liquid-glass-pill px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold text-[#4f47e6] uppercase shadow-2xs">
                  Production Engineering
                </span>
                <h3 className="font-display font-extrabold text-lg text-slate-900 mt-2">
                  Need This Architecture Engineered For Your Business?
                </h3>
                <p className="text-slate-600 text-xs mt-1 max-w-lg font-normal leading-relaxed">
                  Brandex engineers high-throughput web applications, sub-second platforms, and automated workflow pipelines in dedicated 2–4 week sprints with 100% code ownership.
                </p>
              </div>
              <Button asChild variant="brand" size="default" className="shrink-0 rounded-xl shadow-[0_4px_12px_rgba(79,71,230,0.3)] h-10 px-5 text-xs font-bold">
                <Link to="/contact" className="gap-1.5">
                  <span>Book Architecture Call</span>
                  <ArrowRight size={13} />
                </Link>
              </Button>
            </div>

            {/* Author Profile Banner */}
            <div className="mt-6 p-5 rounded-2xl liquid-glass-card flex items-center justify-between gap-3 border border-slate-200/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#4f47e6] text-white flex items-center justify-center font-bold font-mono text-xs shadow-xs shrink-0">
                  {post.author.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Author</div>
                  <div className="font-display font-bold text-sm text-slate-900">{post.author}</div>
                </div>
              </div>
              <Button asChild variant="liquidGlass" size="sm" className="rounded-xl text-xs h-8 px-3">
                <Link to={authorSlug}>View Profile</Link>
              </Button>
            </div>

            {/* Share Card */}
            <div className="mt-6 pt-5 border-t border-slate-200/80">
              <div className="liquid-glass-card rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border border-slate-200/80">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[#4f47e6] font-bold">
                    Brandex Editorial
                  </p>
                  <p className="text-slate-900 font-bold text-xs mt-0.5">
                    Found this technical analysis insightful?
                  </p>
                </div>
                <Button
                  variant="liquidGlass"
                  size="sm"
                  className="rounded-xl px-4 text-xs h-8"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: post.title,
                        url: window.location.href,
                      });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                    }
                  }}
                >
                  <Share2 size={12} className="mr-1.5" /> Share Article
                </Button>
              </div>
            </div>

            {/* Related Articles with Proper Buttons */}
            {related.length > 0 && (
              <div className="mt-10">
                <h3 className="font-display text-lg font-bold text-slate-900 mb-4">
                  Recommended Reading in {post.category}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {related.map((r) => (
                    <div
                      key={r.id}
                      className="liquid-glass-card hover:bg-white rounded-2xl p-5 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between border border-slate-200/80 shadow-2xs"
                    >
                      <div>
                        <Badge variant="secondary" className="liquid-glass-pill text-[#4f47e6] font-bold border-0 text-[10px] px-2 py-0.5 mb-2.5">
                          {r.category}
                        </Badge>
                        <Link to={`/blog/${r.slug}`}>
                          <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 hover:text-[#4f47e6] transition-colors leading-snug mb-2">
                            {r.title}
                          </h4>
                        </Link>
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal mb-4">
                          {r.excerpt}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between">
                        <span className="text-[11px] font-mono text-slate-400">{r.read_time}</span>
                        <Button
                          asChild
                          size="sm"
                          className="h-7 px-3 rounded-xl bg-[#4f47e6] hover:bg-[#4338ca] text-white text-xs font-bold shadow-2xs"
                        >
                          <Link to={`/blog/${r.slug}`} className="flex items-center gap-1">
                            <span>Read Article</span>
                            <ArrowRight size={11} />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.article>
        </div>
      </section>
    </>
  );
}
