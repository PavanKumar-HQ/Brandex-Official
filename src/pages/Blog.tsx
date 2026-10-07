import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Search, Clock, ArrowRight, Tag, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import CTABanner from "@/components/home/CTABanner";
import SEOTags from "@/components/SEOTags";
import Breadcrumb from "@/components/Breadcrumb";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { blogPosts as localBlogPosts } from "@/data/blogPosts";

const categories = ["All", "Technology", "Engineering", "Design", "Business", "Case Study", "Tutorial"];

const gradients = [
  "from-accent/30 via-[hsl(var(--gradient-end)/0.2)] to-accent/10",
  "from-[hsl(var(--gradient-end)/0.25)] to-accent/10",
  "from-accent/20 to-[hsl(var(--gradient-end)/0.15)]",
  "from-accent/15 to-accent/5",
  "from-[hsl(var(--gradient-end)/0.2)] to-accent/15",
  "from-accent/25 to-accent/5",
];

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  created_at: string;
  read_time: string;
  slug: string;
  content: string;
  author?: string;
  image?: string;
}

export default function Blog() {
  useScrollReveal();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fallbackPosts: BlogPost[] = localBlogPosts.map(p => ({
      id: p.id,
      title: p.title,
      excerpt: p.excerpt,
      category: p.category,
      created_at: p.date,
      read_time: p.readTime,
      slug: p.id,
      content: p.content.join('\n\n'),
      author: p.author || "Brandex Team",
      image: p.image || "/og/blog.png"
    }));
    setPosts(fallbackPosts);
    setLoading(false);
  }, []);

  const filtered = posts.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featured = filtered[0];
  const rest = filtered.slice(1);

  const formatDate = (d: string) => {
    try {
      return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    } catch {
      return d;
    }
  };

  return (
    <>
      <SEOTags 
        title="Brandex Engineering Blog | Software Architecture, AI & Tech Strategy"
        description="Deep technical essays, engineering playbooks, and strategic growth blueprints for modern digital brands and ambitious founders."
        keywords="brandex blog, software engineering, tech insights, software architecture, enterprise automation, web performance, AI agents"
        canonicalUrl="https://www.brandex.co.in/blog"
        type="website"
        image="https://www.brandex.co.in/og/blog.png"
        schema={{
          "@type": "Blog",
          "@id": "https://www.brandex.co.in/blog#blog",
          "name": "Brandex Blog",
          "description": "Insights on technology, digital transformation, business automation, and branding from the Brandex team.",
          "url": "https://www.brandex.co.in/blog",
          "publisher": { "@id": "https://www.brandex.co.in/#organization" },
          "blogPost": localBlogPosts.slice(0, 10).map((p) => ({
            "@type": "BlogPosting",
            "headline": p.title,
            "description": p.excerpt,
            "url": `https://www.brandex.co.in/blog/${p.id}`,
            "datePublished": p.date,
            "author": { "@id": "https://www.brandex.co.in/#organization" }
          }))
        }}
      />
      {/* Hero */}
      <section className="pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-20 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-[100px]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Breadcrumb items={[{ label: "Blog" }]} className="mb-6" />
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Insights & <span className="text-gradient">Engineering Playbooks</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-8">
              Explore deep dives on full-stack architecture, high-ticket UX design, enterprise AI orchestration, and strategic digital transformation.
            </p>
          </motion.div>

          {/* Search & Category Filter */}
          <motion.div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const count = cat === "All" ? posts.length : posts.filter(p => p.category === cat).length;
                if (cat !== "All" && count === 0) return null;
                return (
                  <button 
                    key={cat} 
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                      activeCategory === cat 
                        ? "bg-accent text-accent-foreground shadow-md shadow-accent/20" 
                        : "bg-secondary/70 text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                      activeCategory === cat ? "bg-white/20 text-white" : "bg-background/80 text-muted-foreground"
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="relative w-full sm:w-64">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search articles..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
            </div>
          </motion.div>
        </div>
      </section>

      {loading ? (
        <section className="pb-20 lg:pb-28">
          <div className="container mx-auto px-6">
            <Skeleton className="h-64 rounded-2xl mb-8" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[0, 1, 2].map((i) => <Skeleton key={i} className="h-80 rounded-xl" />)}
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Featured Post */}
          {featured && (
            <section className="pb-12">
              <div className="container mx-auto px-6">
                <Link to={`/blog/${featured.slug}`}>
                  <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300 ease-out group cursor-pointer">
                    <div className="grid lg:grid-cols-2">
                      <div className="aspect-[16/10] lg:aspect-auto bg-secondary relative overflow-hidden">
                        <img
                          src={featured.image || "/og/blog.png"}
                          alt={featured.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          loading="eager"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent lg:hidden pointer-events-none" />
                        <div className="absolute top-4 left-4 z-10">
                          <span className="bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                            Featured Analysis
                          </span>
                        </div>
                      </div>
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge variant="secondary" className="bg-accent/10 text-accent border-0"><Tag size={12} className="mr-1" />{featured.category}</Badge>
                          <span className="text-sm text-muted-foreground flex items-center gap-1"><Clock size={14} /> {featured.read_time}</span>
                          {featured.author && (
                            <span className="text-sm text-muted-foreground flex items-center gap-1 before:content-['•'] before:mx-1">
                              By {featured.author}
                            </span>
                          )}
                        </div>
                        <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">{featured.title}</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">{featured.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{formatDate(featured.created_at)}</span>
                          <span className="text-accent font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Read article <ArrowRight size={14} /></span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </div>
            </section>
          )}

          {/* Posts Grid */}
          <section className="pb-20 lg:pb-28">
            <div className="container mx-auto px-6">
              {rest.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map((post, i) => (
                    <Link key={post.id} to={`/blog/${post.slug}`}>
                      <motion.article initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 * i }}
                        className="bg-card border border-border rounded-xl overflow-hidden hover:border-accent/30 hover:-translate-y-2 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 ease-out group cursor-pointer h-full flex flex-col">
                        <div className="aspect-[16/9] bg-secondary relative overflow-hidden border-b border-border/50">
                          <img
                            src={post.image || "/og/blog.png"}
                            alt={post.title}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-primary/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5">
                              Read Article <ArrowRight size={12} />
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <Badge variant="secondary" className="bg-accent/10 text-accent border-0 text-xs">{post.category}</Badge>
                            <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock size={12} /> {post.read_time}</span>
                            {post.author && (
                              <span className="text-xs text-muted-foreground flex items-center gap-1 before:content-['•'] before:mx-1 truncate">
                                By {post.author}
                              </span>
                            )}
                          </div>
                          <h3 className="font-display font-semibold text-lg text-foreground mb-3 group-hover:text-accent transition-colors leading-snug">{post.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">{formatDate(post.created_at)}</span>
                            <span className="text-accent text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Read <ArrowRight size={12} /></span>
                          </div>
                        </div>
                      </motion.article>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-muted-foreground text-lg">No articles found matching your search.</p>
                </div>
              )}
            </div>
          </section>
        </>
      )}
    </>
  );
}
