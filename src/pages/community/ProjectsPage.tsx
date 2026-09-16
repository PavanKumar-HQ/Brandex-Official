import { useState } from "react";
import { Link } from "react-router-dom";
import {
  GitFork,
  Star,
  ExternalLink,
  CheckCircle2,
  Code2,
  Filter,
  ArrowRight,
  ArrowLeft,
  Tag,
  ShieldCheck,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  description: string;
  repoUrl: string;
  techStack: string[];
  starsCount: number;
  openIssuesCount: number;
  category: "ai" | "systems" | "editorial" | "all";
}

const PROJECTS: Project[] = [
  {
    id: "geniusphere",
    title: "Geniusphere Agent Engine",
    description: "Autonomous multi-agent orchestration runtime with deterministic tool-calling, hybrid RAG, and offline token management.",
    repoUrl: "https://github.com/brandex-community/geniusphere",
    techStack: ["TypeScript", "Node.js", "Vector Search", "LangGraph"],
    starsCount: 342,
    openIssuesCount: 14,
    category: "ai",
  },
  {
    id: "liquid-glass-ui",
    title: "Liquid Glass Design System",
    description: "High-contrast minimalist translucent UI library adhering to Apple specular refraction, micro-interactions, and accessible tokens.",
    repoUrl: "https://github.com/brandex-community/liquid-glass-ui",
    techStack: ["React 19", "Tailwind CSS", "Framer Motion", "TypeScript"],
    starsCount: 512,
    openIssuesCount: 8,
    category: "editorial",
  },
  {
    id: "edge-presets",
    title: "Brandex Edge Routing Presets",
    description: "Production scaffolding for sub-second micro-frontends with Cloudflare Workers and stale-while-revalidate caching.",
    repoUrl: "https://github.com/brandex-community/edge-presets",
    techStack: ["Vite", "Cloudflare Workers", "TypeScript", "Redis"],
    starsCount: 284,
    openIssuesCount: 5,
    category: "systems",
  },
  {
    id: "kseeb-offline-sync",
    title: "Karnataka Education Sync Engine",
    description: "Lightweight IndexedDB offline curriculum synchronizer and formative quiz state evaluator for smartboards.",
    repoUrl: "https://github.com/brandex-community/kseeb-offline-sync",
    techStack: ["PWA", "IndexedDB", "React", "TypeScript"],
    starsCount: 198,
    openIssuesCount: 3,
    category: "systems",
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered = activeCategory === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#f8fafd] pt-24 pb-16 lg:pt-28 lg:pb-20 selection:bg-[#4f47e6] selection:text-white">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-10">
        
        {/* Navigation & Header */}
        <div className="border-b border-slate-200/90 pb-8 space-y-4">
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

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-2">
            <div className="space-y-1.5 max-w-2xl">
              <div className="liquid-glass-pill inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold text-[#4f47e6] mb-1">
                Open Source Repositories & Blueprints
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Community Projects & Tooling
              </h1>
              <p className="text-sm sm:text-base text-slate-600 font-normal">
                Production-ready scaffolding, React design tokens, AI orchestration engines, and edge performance blueprints.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: "all", label: "All Repositories" },
            { id: "ai", label: "AI & Agents" },
            { id: "systems", label: "Systems & Cloud" },
            { id: "editorial", label: "UI & Design Systems" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? "bg-[#4f47e6] text-white shadow-2xs"
                  : "bg-white border border-slate-200 text-slate-700 hover:text-slate-950"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              className="liquid-glass-card hover:bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#4f47e6] bg-indigo-50 px-2.5 py-1 rounded-md">
                    {proj.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
                    <span className="flex items-center gap-1">
                      <Star size={13} className="text-amber-500 fill-amber-500" />
                      {proj.starsCount}
                    </span>
                    <span>{proj.openIssuesCount} issues</span>
                  </div>
                </div>

                <h3 className="font-display font-extrabold text-xl text-slate-900">{proj.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{proj.description}</p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-mono font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">MIT License &bull; Free Open Source</span>
                <a
                  href={proj.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4f47e6] hover:text-[#4338ca] transition-colors"
                >
                  <span>View Repository</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
