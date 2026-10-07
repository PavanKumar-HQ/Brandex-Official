import { ArrowLeft, Clock, Tag, Share2, User, Check, Rocket, ArrowRight, BookOpen } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { blogPosts as localBlogPosts } from "@/data/blogPosts";
import SEOTags from "@/components/SEOTags";
import Breadcrumb from "@/components/Breadcrumb";
import { useToast } from "@/hooks/use-toast";

interface BlogPostData {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  created_at: string;
  read_time: string;
  slug: string;
  content: string;
  author: string;
  image?: string;
}

const gradients = [
  "from-accent/30 via-[hsl(var(--gradient-end)/0.2)] to-accent/10",
  "from-[hsl(var(--gradient-end)/0.25)] to-accent/10",
  "from-accent/20 to-[hsl(var(--gradient-end)/0.15)]",
];

const authorRoles: Record<string, string> = {
  "Sathvik Nagesh": "Founder & CTO, Brandex",
  "Pavan Kumar S": "Co-founder & CEO, Brandex",
  "Brandex Team": "Engineering & Product Team",
  "Brandex Engineering": "Core Architecture Group"
};

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [related, setRelated] = useState<BlogPostData[]>([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const slug = id;
      const foundPost = localBlogPosts.find(
        (p) => p.id === slug || p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
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
          content: foundPost.content.join('\n\n'),
          author: foundPost.author || "Brandex Team",
          image: foundPost.image || "/og/blog.png"
        });

        // Get 2 related posts, prioritizing same category
        const sameCategory = localBlogPosts.filter(p => p.id !== foundPost.id && p.category === foundPost.category);
        const differentCategory = localBlogPosts.filter(p => p.id !== foundPost.id && p.category !== foundPost.category);
        const combined = [...sameCategory, ...differentCategory].slice(0, 2);

        setRelated(combined.map(p => ({
          id: p.id,
          title: p.title,
          excerpt: p.excerpt,
          category: p.category,
          created_at: p.date,
          read_time: p.readTime,
          slug: p.id,
          content: p.content.join('\n\n'),
          author: p.author || "Brandex Team"
        })));
      } else {
        setPost(null);
      }
      setLoading(false);
    };
    fetchPost();
  }, [id]);

  const formatDate = (d: string) => {
    try {
      return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    } catch {
      return d;
    }
  };

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: post?.title, url });
        return;
      } catch {
        // Fallback to clipboard
      }
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    toast({
      title: "Link Copied!",
      description: "Article link copied to your clipboard."
    });
    setTimeout(() => setCopied(false), 2500);
  };

  if (loading) {
    return (
      <section className="py-32">
        <div className="container mx-auto px-6 max-w-3xl space-y-4">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-6 w-2/3" />
          <Skeleton className="h-96 w-full mt-8" />
        </div>
      </section>
    );
  }

  if (!post) {
    return (
      <>
        <SEOTags 
          title="Post Not Found | Brandex Blog"
          description="The requested blog post could not be found."
          noindex={true}
        />
        <section className="py-32">
          <div className="container mx-auto px-6 text-center">
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">Post not found</h1>
            <Link to="/blog" className="text-accent hover:underline inline-flex items-center gap-1.5">
              <ArrowLeft size={16} /> Back to blog
            </Link>
          </div>
        </section>
      </>
    );
  }

  const authorRole = authorRoles[post.author] || "Brandex Engineering & Strategy";

  return (
    <>
      <SEOTags 
        title={`${post.title} | Brandex Blog`}
        description={post.excerpt}
        keywords={`${post.category.toLowerCase()}, brandex blog, software development, technology, digital transformation, business automation, ${post.author.toLowerCase()}`}
        canonicalUrl={`https://www.brandex.co.in/blog/${post.slug}`}
        type="article"
        category={post.category}
        author={post.author}
        image={post.image || "https://www.brandex.co.in/og/blog.png"}
        schema={{
          "@type": "BlogPosting",
          "@id": `https://www.brandex.co.in/blog/${post.slug}#article`,
          "headline": post.title,
          "description": post.excerpt,
          "image": post.image ? (post.image.startsWith("http") ? post.image : `https://www.brandex.co.in${post.image}`) : "https://www.brandex.co.in/og/blog.png",
          "datePublished": post.created_at,
          "dateModified": post.created_at,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.brandex.co.in/blog/${post.slug}`
          },
          "author": {
            "@type": "Person",
            "name": post.author,
            "url": post.author.includes("Sathvik") 
              ? "https://www.brandex.co.in/team/sathvik-nagesh" 
              : post.author.includes("Pavan") 
              ? "https://www.brandex.co.in/team/pavan-kumar-s" 
              : "https://www.brandex.co.in/about"
          },
          "publisher": {
            "@type": "Organization",
            "@id": "https://www.brandex.co.in/#organization",
            "name": "Brandex",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.brandex.co.in/main_logo.webp"
            }
          },
          "isPartOf": { "@id": "https://www.brandex.co.in/blog#blog" }
        }}
      />

      {/* Reading Progress Indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-[hsl(var(--gradient-end))] to-accent origin-left z-50 pointer-events-none"
      />

      {/* Hero Header */}
      <section className="pt-4 sm:pt-6 pb-10 relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-grid opacity-8" />
        <div className={`absolute inset-0 bg-gradient-to-br ${gradients[0]} opacity-30`} />
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center justify-between gap-4 mb-6">
              <Breadcrumb
                items={[{ label: "Blog", href: "/blog" }, { label: post.category, href: `/blog` }, { label: post.title.length > 38 ? post.title.substring(0, 38) + "…" : post.title }]}
              />
              <Link to="/blog" className="hidden sm:inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors font-medium">
                <ArrowLeft size={14} /> Back to all articles
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <Badge variant="secondary" className="bg-accent/15 text-accent border-0 font-medium px-3 py-1 text-xs">
                <Tag size={12} className="mr-1.5" />{post.category}
              </Badge>
              <span className="text-xs text-muted-foreground flex items-center gap-1.5 bg-muted/50 px-2.5 py-1 rounded-full">
                <Clock size={13} /> {post.read_time}
              </span>
              <span className="text-xs text-muted-foreground">{formatDate(post.created_at)}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-[1.15] tracking-tight">
              {post.title}
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
              {post.excerpt}
            </p>

            {/* Author Byline */}
            <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-border/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-semibold text-sm">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{post.author}</div>
                  <div className="text-xs text-muted-foreground">{authorRole}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-border/60 hover:border-accent/30 hover:bg-accent/5 text-xs h-9"
                  onClick={handleShare}
                >
                  {copied ? (
                    <>
                      <Check size={14} className="mr-1.5 text-green-500" /> Copied!
                    </>
                  ) : (
                    <>
                      <Share2 size={14} className="mr-1.5" /> Share Article
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Featured Article Cover Image */}
            {post.image && (
              <div className="mt-8 rounded-2xl overflow-hidden border border-border/80 shadow-2xl bg-secondary aspect-[16/9] max-h-[440px]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Main Content Article */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.article 
            className="max-w-3xl mx-auto" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: ({ node, ...props }) => {
                    const headingText = String(props.children);
                    const id = headingText
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, '-')
                      .replace(/(^-|-$)/g, '');
                    return (
                      <h2
                        id={id}
                        className="font-display text-2xl lg:text-3xl font-bold text-foreground mt-12 mb-5 pt-6 border-t border-border/50 scroll-mt-24 flex items-center gap-2.5"
                        {...props}
                      />
                    );
                  },
                  h3: ({ node, ...props }) => (
                    <h3
                      className="font-display text-xl lg:text-2xl font-semibold text-foreground mt-8 mb-3 scroll-mt-24"
                      {...props}
                    />
                  ),
                  p: ({ node, ...props }) => (
                    <p className="text-muted-foreground/90 text-base sm:text-lg leading-relaxed mb-6" {...props} />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul className="space-y-2.5 mb-6 ml-4 list-disc marker:text-accent text-muted-foreground/90 text-base sm:text-lg" {...props} />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol className="space-y-2.5 mb-6 ml-4 list-decimal marker:text-accent font-normal text-muted-foreground/90 text-base sm:text-lg" {...props} />
                  ),
                  li: ({ node, ...props }) => (
                    <li className="pl-1 leading-relaxed" {...props} />
                  ),
                  blockquote: ({ node, ...props }) => (
                    <blockquote
                      className="my-8 pl-6 pr-5 py-4 rounded-r-xl border-l-4 border-accent bg-accent/[0.04] text-foreground italic text-base sm:text-lg leading-relaxed shadow-sm"
                      {...props}
                    />
                  ),
                  table: ({ node, ...props }) => (
                    <div className="overflow-x-auto my-8 rounded-xl border border-border/80 bg-card/60 shadow-sm">
                      <table className="w-full text-left text-sm" {...props} />
                    </div>
                  ),
                  thead: ({ node, ...props }) => (
                    <thead className="bg-muted/70 text-foreground uppercase tracking-wider font-semibold border-b border-border/70 text-xs" {...props} />
                  ),
                  th: ({ node, ...props }) => (
                    <th className="px-5 py-3.5 font-semibold text-foreground" {...props} />
                  ),
                  td: ({ node, ...props }) => (
                    <td className="px-5 py-3.5 border-b border-border/40 text-muted-foreground text-sm" {...props} />
                  ),
                  code: ({ node, inline, className, children, ...props }: any) => {
                    if (inline) {
                      return (
                        <code className="px-1.5 py-0.5 rounded bg-muted/80 text-accent font-mono text-xs sm:text-sm font-medium border border-border/40" {...props}>
                          {children}
                        </code>
                      );
                    }
                    return (
                      <div className="my-6 rounded-xl overflow-hidden border border-border/80 bg-card">
                        <pre className="p-4 overflow-x-auto text-xs sm:text-sm font-mono text-foreground leading-relaxed">
                          <code {...props}>{children}</code>
                        </pre>
                      </div>
                    );
                  },
                  a: ({ node, href, ...props }) => {
                    const isInternal = href?.startsWith('/') || href?.includes('brandex.co.in');
                    return (
                      <a
                        href={href}
                        target={isInternal ? undefined : "_blank"}
                        rel={isInternal ? undefined : "noopener noreferrer"}
                        className="text-accent underline underline-offset-4 decoration-accent/40 hover:decoration-accent transition-colors font-medium"
                        {...props}
                      />
                    );
                  }
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* In-Article CTA Banner */}
            <div className="mt-14 p-8 rounded-2xl bg-gradient-to-br from-card via-card to-accent/5 border border-accent/20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold uppercase tracking-wider mb-2">
                    <Rocket size={14} /> Partner With Brandex
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2">
                    Ready to build high-performance software or automate operations?
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-xl">
                    Whether you need custom web applications, an enterprise ERP, or autonomous AI agents, our engineering team in Bangalore is ready to help.
                  </p>
                </div>
                <Button asChild className="shrink-0 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  <Link to="/contact">
                    Talk to an Architect <ArrowRight size={14} className="ml-1.5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Social Share & Feedback */}
            <div className="mt-12 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-0.5">Found this insight helpful?</p>
                <p className="text-foreground font-medium text-sm">Share it across your engineering or executive network.</p>
              </div>
              <Button 
                variant="outline" 
                className="border-border/60 hover:border-accent/30 hover:bg-accent/5"
                onClick={handleShare}
              >
                {copied ? (
                  <>
                    <Check size={14} className="mr-2 text-green-500" /> Link Copied
                  </>
                ) : (
                  <>
                    <Share2 size={14} className="mr-2" /> Share Article
                  </>
                )}
              </Button>
            </div>

            {/* Related Articles */}
            {related.length > 0 && (
              <div className="mt-16 pt-10 border-t border-border/60">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-2xl font-bold text-foreground flex items-center gap-2">
                    <BookOpen size={20} className="text-accent" /> Recommended Reading
                  </h3>
                  <Link to="/blog" className="text-xs text-accent hover:underline font-medium">
                    View all articles →
                  </Link>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  {related.map((r) => (
                    <Link 
                      key={r.id} 
                      to={`/blog/${r.slug}`}
                      className="group bg-card border border-border/60 rounded-xl p-5 hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <Badge variant="secondary" className="bg-accent/10 text-accent border-0 text-xs">{r.category}</Badge>
                          <span className="text-[11px] text-muted-foreground flex items-center gap-1"><Clock size={11} /> {r.read_time}</span>
                        </div>
                        <h4 className="font-display font-semibold text-foreground group-hover:text-accent transition-colors leading-snug mb-2 text-base">
                          {r.title}
                        </h4>
                        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                          {r.excerpt}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-xs text-accent font-medium">
                        <span>Read article</span>
                        <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
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

