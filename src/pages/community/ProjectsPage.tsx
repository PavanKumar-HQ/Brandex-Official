import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '@/community/hooks/useSEO';
import { Breadcrumb } from '@/community/components/ui/Breadcrumb';
import { getOrCreateIdentity, addContributorPoints } from '@/community/utils/identity';
import {
  GitFork,
  Star,
  ExternalLink,
  CheckCircle2,
  Code2,
  Filter,
  GitPullRequest,
  AlertCircle,
  ShieldCheck,
  Tag,
  Loader2,
  Award,
  Layers,
  ArrowRight,
  Eye,
  Globe,
  X,
  RotateCw,
  GitBranch,
  Clock,
  Sparkles
} from 'lucide-react';

import { SkeletonCard } from '@/community/components/ui/Skeleton';
import {
  fetchMultipleGitHubRepos,
  formatRelativeTime,
  clearGitHubCache,
  GitHubRepoLiveData
} from '@/services/githubService';
import {
  LiveProjectPreviewModal,
  PreviewProject
} from '@/components/common/LiveProjectPreviewModal';

interface Project {
  id: string;
  title: string;
  description: string;
  repoUrl: string;
  previewUrl?: string;
  previewLabel?: string;
  techStack: string[];
  starsCount: number;
  openIssuesCount: number;
  forksCount?: number;
  hasGoodFirstIssues?: boolean;
  category?: 'ai' | 'systems' | 'editorial' | 'all';
}

const VERIFIED_OPEN_SOURCE_PROJECTS: Project[] = [
  {
    id: 'brandex-web',
    title: 'Brandex Web Core & Edge Platform',
    description: 'High-performance web architecture featuring sub-second edge routing, automated sitemaps, JSON-LD schema engines, and Swiss minimalist design tokens.',
    repoUrl: 'https://github.com/brandex-official/brandex-official',
    previewUrl: '/',
    previewLabel: 'Live Preview',
    techStack: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite'],
    starsCount: 0,
    openIssuesCount: 0,
    forksCount: 0,
    hasGoodFirstIssues: true,
    category: 'editorial'
  },
  {
    id: 'convertly',
    title: 'Convertly — Privacy-First Media Utility',
    description: 'High-performance client-side media and file conversion engine utilizing WebAssembly and modern browser APIs with zero cloud data retention.',
    repoUrl: 'https://github.com/Sathvik-Nagesh/convertly',
    previewUrl: 'https://github.com/Sathvik-Nagesh/convertly',
    previewLabel: 'View Tool & Demo',
    techStack: ['TypeScript', 'WebAssembly', 'HTML5 Canvas', 'Tailwind CSS'],
    starsCount: 0,
    openIssuesCount: 0,
    forksCount: 0,
    hasGoodFirstIssues: true,
    category: 'systems'
  },
  {
    id: 'passworks',
    title: 'Passworks — Cryptographic Password Engine',
    description: 'Cryptographically resilient zero-knowledge password generation, entropy analysis, and offline security suite engineered to defend against modern dictionary attacks.',
    repoUrl: 'https://github.com/Sathvik-Nagesh/passworks.git',
    previewUrl: 'https://github.com/Sathvik-Nagesh/passworks.git',
    previewLabel: 'View Cryptography Demo',
    techStack: ['TypeScript', 'Web Crypto API', 'Entropy Analysis', 'Cybersecurity'],
    starsCount: 0,
    openIssuesCount: 0,
    forksCount: 0,
    hasGoodFirstIssues: true,
    category: 'systems'
  },
  {
    id: 'blushbooth',
    title: 'Blushbooth — Interactive WebGL Photo Booth',
    description: 'Browser-based digital photo studio featuring real-time WebGL shader filters, multi-track audio playback, dynamic canvas compositing, and instant multi-format photo strips.',
    repoUrl: 'https://github.com/Sathvik-Nagesh/Blushbooth',
    previewUrl: 'https://github.com/Sathvik-Nagesh/Blushbooth',
    previewLabel: 'View WebGL Demo',
    techStack: ['React', 'WebGL / Canvas', 'Shader Filters', 'Real-Time Audio'],
    starsCount: 0,
    openIssuesCount: 0,
    forksCount: 0,
    hasGoodFirstIssues: true,
    category: 'editorial'
  },
  {
    id: 'geosnap',
    title: 'GeoSnap — Geospatial Verified Field Audit',
    description: 'Location-verified photographic capture and spatial metadata audit platform designed for precision mapping, field inspections, and tamper-evident logs.',
    repoUrl: 'https://github.com/Sathvik-Nagesh/GeoSnap',
    previewUrl: 'https://github.com/Sathvik-Nagesh/GeoSnap',
    previewLabel: 'View Geolocation Engine',
    techStack: ['TypeScript', 'Geolocation API', 'Exif Parser', 'PWA'],
    starsCount: 0,
    openIssuesCount: 0,
    forksCount: 0,
    hasGoodFirstIssues: true,
    category: 'systems'
  },
  {
    id: 'travel-crm',
    title: 'Brandex Travel CRM & Quotation Automation',
    description: 'Production travel software platform turning Word/PDF proposals into interactive itineraries with dynamic payment QR codes and agency pipeline tracking.',
    repoUrl: 'https://github.com/brandex-official/brandex-official',
    previewUrl: '/products/travel-crm',
    previewLabel: 'Live Interactive Preview',
    techStack: ['React', 'TypeScript', 'Document Engine', 'PDF Automation'],
    starsCount: 0,
    openIssuesCount: 0,
    forksCount: 0,
    hasGoodFirstIssues: true,
    category: 'ai'
  },
  {
    id: 'invoice-builder',
    title: 'Brandex Invoice Builder & Inventory Suite',
    description: 'Real-time billing, inventory synchronization, and multi-template vector PDF generation engine with GST calculation and live client preview.',
    repoUrl: 'https://github.com/brandex-official/brandex-official',
    previewUrl: '/products/invoice-builder',
    previewLabel: 'Live Interactive Preview',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vector PDF Engine'],
    starsCount: 0,
    openIssuesCount: 0,
    forksCount: 0,
    hasGoodFirstIssues: true,
    category: 'editorial'
  },
  {
    id: 'curriculum-engine',
    title: 'Karnataka State Syllabus Curriculum Engine',
    description: 'High-performance interactive video curriculum catalog and smartboard presentation mode for Karnataka State Board Classes 6 to 10.',
    repoUrl: 'https://github.com/brandex-official/education-portal',
    previewUrl: '/education/explore',
    previewLabel: 'Live Interactive Preview',
    techStack: ['React', 'TypeScript', 'YouTube Iframe API', 'PWA'],
    starsCount: 0,
    openIssuesCount: 0,
    forksCount: 0,
    hasGoodFirstIssues: true,
    category: 'systems'
  }
];

export const ProjectsPage: React.FC = () => {
  useSEO(
    'Open-Source Registry & Live GitHub Telemetry',
    'Explore Brandex verified open-source systems, inspect real-time GitHub telemetry (stars, issues, commits), and preview production software live.'
  );

  const [projects, setProjects] = useState<Project[]>(VERIFIED_OPEN_SOURCE_PROJECTS);
  const [gitHubData, setGitHubData] = useState<Record<string, GitHubRepoLiveData>>({});
  const [isFetchingGitHub, setIsFetchingGitHub] = useState<boolean>(false);
  const [lastSyncTime, setLastSyncTime] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterGoodFirstIssuesOnly, setFilterGoodFirstIssuesOnly] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Live Project Preview Modal State
  const [previewModalOpen, setPreviewModalOpen] = useState<boolean>(false);
  const [selectedPreviewProject, setSelectedPreviewProject] = useState<PreviewProject | null>(null);

  // PR Claim Modal State
  const [prClaimOpen, setPrClaimOpen] = useState<boolean>(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string>('convertly');
  const [prUrl, setPrUrl] = useState<string>('');
  const [isVerifyingPr, setIsVerifyingPr] = useState<boolean>(false);
  const [prVerificationResult, setPrVerificationResult] = useState<{
    success: boolean;
    message: string;
    pointsAwarded?: number;
    verified?: boolean;
  } | null>(null);

  const identity = getOrCreateIdentity();

  // Load and sync real live GitHub telemetry
  const syncGitHubTelemetry = async (forceRefresh = false) => {
    if (forceRefresh) {
      clearGitHubCache();
    }
    setIsFetchingGitHub(true);
    try {
      const urls = projects.map((p) => p.repoUrl);
      const dataMap = await fetchMultipleGitHubRepos(urls);
      setGitHubData(dataMap);
      setLastSyncTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    } catch (err) {
      console.warn('[ProjectsPage] GitHub telemetry sync notice:', err);
    } finally {
      setIsFetchingGitHub(false);
    }
  };

  useEffect(() => {
    syncGitHubTelemetry();
  }, []);

  const handleOpenPreview = (project: Project) => {
    if (!project.previewUrl) return;
    setSelectedPreviewProject({
      id: project.id,
      title: project.title,
      previewUrl: project.previewUrl,
      repoUrl: project.repoUrl,
      description: project.description,
      tech: project.techStack,
      category: project.category
    });
    setPreviewModalOpen(true);
  };

  const handleVerifyPr = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prUrl.trim() || !prUrl.includes('github.com')) {
      setPrVerificationResult({
        success: false,
        message: 'Please provide a valid GitHub Pull Request URL (e.g., https://github.com/Sathvik-Nagesh/convertly/pull/1)'
      });
      return;
    }

    setIsVerifyingPr(true);
    setPrVerificationResult(null);

    try {
      const res = await fetch('/api/pwa/verify-pr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prUrl: prUrl.trim(),
          userHandle: identity.handle,
          projectId: selectedProjectId
        })
      });

      const data = await res.json();
      if (res.ok && data.verified) {
        addContributorPoints(50);
        setPrVerificationResult({
          success: true,
          verified: true,
          pointsAwarded: 50,
          message: data.message || 'Pull request verified as merged! +50 Contributor Points awarded to your anonymous handle.'
        });
      } else {
        setPrVerificationResult({
          success: false,
          verified: false,
          message: data.message || 'Pull request is either unmerged, closed without merge, or inaccessible via GitHub public API.'
        });
      }
    } catch {
      setPrVerificationResult({
        success: false,
        message: 'Could not connect to GitHub API. Please check your internet connection and try again.'
      });
    } finally {
      setIsVerifyingPr(false);
    }
  };

  const filteredProjects = projects.filter((p) => {
    const matchesCategory = filterCategory === 'all' || p.category === filterCategory;
    const matchesGoodFirst = !filterGoodFirstIssuesOnly || p.hasGoodFirstIssues;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesGoodFirst && matchesSearch;
  });

  return (
    <div className="w-full min-h-screen bg-slate-50/50 dark:bg-brand-canvas transition-colors pt-24 sm:pt-28 md:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Breadcrumb
            items={[
              { label: 'Home', path: '/' },
              { label: 'Open-Source Registry' }
            ]}
          />
        </div>

        {/* Title Header with Live Status & Actions */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Live GitHub API Telemetry</span>
              {lastSyncTime && (
                <span className="text-[10px] font-mono opacity-80">• Synced {lastSyncTime}</span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Open-Source Registry &amp; Verified Telemetry
            </h1>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Explore authentic public repositories engineered by Brandex. Telemetry is pulled directly from the GitHub REST API without inflated vanity counts, complete with interactive device previews.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => syncGitHubTelemetry(true)}
              disabled={isFetchingGitHub}
              className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold shadow-2xs transition-all flex items-center gap-2 disabled:opacity-60"
              title="Query GitHub API for fresh telemetry"
            >
              <RotateCw className={`w-3.5 h-3.5 ${isFetchingGitHub ? 'animate-spin text-violet-600' : ''}`} />
              <span>{isFetchingGitHub ? 'Querying GitHub...' : 'Refresh Live Telemetry'}</span>
            </button>

            <button
              onClick={() => {
                setPrClaimOpen(true);
                setPrVerificationResult(null);
                setPrUrl('');
              }}
              className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold shadow-sm transition-all flex items-center gap-2 active:scale-95"
            >
              <GitPullRequest className="w-4 h-4" />
              <span>Submit Merged PR Claim</span>
            </button>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-8">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter className="w-4 h-4 text-violet-600 shrink-0" />
            <div className="relative w-full sm:w-auto">
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="w-full sm:w-auto px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 shadow-xs focus:outline-none focus:ring-2 focus:ring-violet-500 cursor-pointer"
              >
                <option value="all">All Projects</option>
                <option value="ai">AI &amp; Automation</option>
                <option value="systems">Systems &amp; Cybersecurity</option>
                <option value="editorial">Swiss UI &amp; Interactive</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <label className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-300 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={filterGoodFirstIssuesOnly}
                onChange={(e) => setFilterGoodFirstIssuesOnly(e.target.checked)}
                className="rounded text-violet-600 focus:ring-violet-500"
              />
              <span>Good First Issues Only</span>
            </label>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack, repos..."
              className="px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-violet-500 w-full sm:w-56"
            />
          </div>
        </div>

        {/* Project Cards Grid with Live Telemetry */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const live = gitHubData[project.repoUrl];
            const stars = live ? live.stars : project.starsCount;
            const issues = live ? live.openIssues : project.openIssuesCount;
            const forks = live ? live.forks : (project.forksCount ?? 0);
            const relativePushTime = live ? formatRelativeTime(live.pushedAt) : null;
            const defaultBranch = live?.defaultBranch || 'main';
            const license = live?.license || 'MIT License';

            return (
              <div
                key={project.id}
                className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:border-violet-300 dark:hover:border-violet-800/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Icon + Live Stats */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 border border-violet-200 dark:border-violet-800/60 flex items-center justify-center font-mono font-bold text-sm">
                      {project.title.substring(0, 2).toUpperCase()}
                    </div>

                    <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1" title={`${stars} GitHub stars`}>
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        <span className="font-semibold text-slate-700 dark:text-slate-300">{stars}</span>
                      </span>

                      <span className="flex items-center gap-1" title={`${forks} forks`}>
                        <GitFork className="w-3.5 h-3.5 text-slate-400" />
                        <span>{forks}</span>
                      </span>

                      <span className="flex items-center gap-1" title={`${issues} open issues & PRs`}>
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span>{issues} issues</span>
                      </span>
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* GitHub Meta Line: Branch & Relative Commit Time */}
                  <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400 dark:text-slate-500 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800/80">
                    <span className="flex items-center gap-1">
                      <GitBranch className="w-3 h-3 text-slate-400" />
                      <span>{defaultBranch}</span>
                    </span>
                    <span>•</span>
                    <span className="truncate">{license}</span>
                    {relativePushTime && (
                      <>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                          <Clock className="w-3 h-3" />
                          <span>pushed {relativePushTime}</span>
                        </span>
                      </>
                    )}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-2">
                    {project.hasGoodFirstIssues ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 shrink-0 whitespace-nowrap">
                        <Tag className="w-3 h-3 shrink-0" />
                        <span>Good First Issues</span>
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">Standard Backlog</span>
                    )}

                    <span className="text-[11px] font-mono text-slate-400">
                      {live?.isLive ? '✓ Verified Live API' : 'Cached Baseline'}
                    </span>
                  </div>

                  <div className={`grid gap-2 w-full ${project.previewUrl ? 'grid-cols-2' : 'grid-cols-1'}`}>
                    {project.previewUrl && (
                      <button
                        onClick={() => handleOpenPreview(project)}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold rounded-xl transition-all shadow-xs active:scale-98 text-center cursor-pointer"
                        title="Open interactive preview with device viewport switcher"
                      >
                        <Eye className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{project.previewLabel || 'Live Preview'}</span>
                      </button>
                    )}

                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-bold rounded-xl transition-all shadow-2xs active:scale-98 text-center"
                      title="View GitHub Repository"
                    >
                      <Code2 className="w-3.5 h-3.5 shrink-0" />
                      <span>GitHub</span>
                      <ExternalLink className="w-3 h-3 text-slate-400 shrink-0" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* PR Claim Modal */}
        {prClaimOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                    Submit Merged PR Claim
                  </h3>
                </div>
                <button
                  onClick={() => setPrClaimOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                  aria-label="Close modal"
                >
                  <X size={16} />
                </button>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Enter your merged pull request URL. Brandex backend calls GitHub's public REST API to verify the merge commit without requiring your OAuth token.
              </p>

              <form onSubmit={handleVerifyPr} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Select Target Repository
                  </label>
                  <select
                    value={selectedProjectId}
                    onChange={(e) => setSelectedProjectId(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs"
                  >
                    {projects.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Merged Pull Request URL
                  </label>
                  <input
                    type="url"
                    value={prUrl}
                    onChange={(e) => setPrUrl(e.target.value)}
                    placeholder="https://github.com/Sathvik-Nagesh/convertly/pull/1"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-mono focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Your Contributor Handle
                  </label>
                  <input
                    type="text"
                    disabled
                    value={identity.handle}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-500 text-xs font-mono cursor-not-allowed"
                  />
                </div>

                {prVerificationResult && (
                  <div
                    className={`p-3.5 rounded-xl text-xs flex items-start gap-2.5 ${
                      prVerificationResult.success
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                        : 'bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                    }`}
                  >
                    {prVerificationResult.success ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    )}
                    <span>{prVerificationResult.message}</span>
                  </div>
                )}

                <div className="pt-3 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setPrClaimOpen(false)}
                    className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                  >
                    Close
                  </button>

                  <button
                    type="submit"
                    disabled={isVerifyingPr}
                    className="px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold shadow-sm transition-all flex items-center gap-2 disabled:opacity-50"
                  >
                    {isVerifyingPr ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Querying GitHub API...</span>
                      </>
                    ) : (
                      <>
                        <ShieldCheck className="w-4 h-4" />
                        <span>Verify Merge Status</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Live Project Interactive Preview Modal */}
        <LiveProjectPreviewModal
          isOpen={previewModalOpen}
          onClose={() => setPreviewModalOpen(false)}
          project={selectedPreviewProject}
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
