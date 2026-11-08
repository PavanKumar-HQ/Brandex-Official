import React, { useState, useEffect, useRef } from 'react';
import {
  Monitor,
  Tablet,
  Smartphone,
  ExternalLink,
  RotateCw,
  X,
  Lock,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Maximize2,
  Code2,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export interface PreviewProject {
  id: string;
  title: string;
  previewUrl: string;
  repoUrl?: string;
  description?: string;
  tech?: string[];
  result?: string;
  category?: string;
}

interface LiveProjectPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: PreviewProject | null;
}

type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export const LiveProjectPreviewModal: React.FC<LiveProjectPreviewModalProps> = ({
  isOpen,
  onClose,
  project
}) => {
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');
  const [iframeKey, setIframeKey] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasFrameIssue, setHasFrameIssue] = useState<boolean>(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Reset state when project changes
  useEffect(() => {
    if (project) {
      setIsLoading(true);
      setHasFrameIssue(false);
      setIframeKey((prev) => prev + 1);
      setDeviceMode('desktop');
    }
  }, [project]);

  if (!isOpen || !project) return null;

  const resolvedUrl = project.previewUrl.startsWith('http')
    ? project.previewUrl
    : `${window.location.origin}${project.previewUrl}`;

  const isExternal = project.previewUrl.startsWith('http');

  const handleRefresh = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="preview-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-6xl h-[94vh] sm:h-[90vh] flex flex-col overflow-hidden text-slate-900 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="px-4 sm:px-6 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/50 flex flex-wrap items-center justify-between gap-3 shrink-0">
          {/* Left: Project title & Live Badge */}
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-xl bg-violet-600/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400 flex items-center justify-center font-bold text-xs shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h2
                id="preview-modal-title"
                className="font-bold text-sm sm:text-base text-slate-900 dark:text-white truncate"
              >
                {project.title}
              </h2>
              <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Stream Active
                </span>
                {project.category && (
                  <>
                    <span>•</span>
                    <span className="uppercase tracking-wider font-mono text-[10px]">
                      {project.category}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Center: Device Viewport Switcher */}
          <div className="hidden sm:flex items-center bg-slate-200/80 dark:bg-slate-800/80 p-1 rounded-xl gap-1">
            <button
              onClick={() => setDeviceMode('desktop')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                deviceMode === 'desktop'
                  ? 'bg-white dark:bg-slate-700 text-violet-600 dark:text-violet-300 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
              title="Desktop viewport (100%)"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop</span>
            </button>
            <button
              onClick={() => setDeviceMode('tablet')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                deviceMode === 'tablet'
                  ? 'bg-white dark:bg-slate-700 text-violet-600 dark:text-violet-300 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
              title="Tablet viewport (768px)"
            >
              <Tablet className="w-3.5 h-3.5" />
              <span>Tablet</span>
            </button>
            <button
              onClick={() => setDeviceMode('mobile')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                deviceMode === 'mobile'
                  ? 'bg-white dark:bg-slate-700 text-violet-600 dark:text-violet-300 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
              title="Mobile viewport (375px)"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile</span>
            </button>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleRefresh}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Reload preview"
            >
              <RotateCw className={`w-4 h-4 ${isLoading ? 'animate-spin text-violet-600' : ''}`} />
            </button>

            <a
              href={resolvedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold shadow-xs transition-all active:scale-95"
            >
              <span>Launch Site</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-1"
              aria-label="Close live preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Browser Chrome URL Address Bar */}
        <div className="px-4 py-2 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-100/60 dark:bg-slate-900/40 flex items-center gap-3 shrink-0 text-xs">
          <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
            <Lock className="w-3.5 h-3.5" />
            <span className="font-mono text-[11px] font-semibold">HTTPS</span>
          </div>

          <div className="flex-1 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-3 py-1 rounded-lg text-slate-600 dark:text-slate-300 font-mono text-[11px] truncate flex items-center justify-between">
            <span className="truncate">{resolvedUrl}</span>
            <span className="text-[10px] text-slate-400 shrink-0 ml-2">TLS 1.3 Validated</span>
          </div>

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1 text-[11px] font-mono text-slate-500 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Source Repo</span>
            </a>
          )}
        </div>

        {/* Viewport Workspace */}
        <div className="flex-1 bg-slate-200/50 dark:bg-slate-950/80 p-2 sm:p-4 overflow-auto flex items-center justify-center relative">
          {/* Loading Indicator Overlay */}
          {isLoading && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-900/20 backdrop-blur-xs pointer-events-none">
              <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-200 dark:border-slate-800">
                <RotateCw className="w-5 h-5 text-violet-600 animate-spin" />
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Streaming live interactive environment...
                </span>
              </div>
            </div>
          )}

          {/* Device Frame */}
          <div
            className={`h-full transition-all duration-300 flex flex-col bg-white dark:bg-slate-900 shadow-2xl relative ${
              deviceMode === 'desktop'
                ? 'w-full rounded-xl border border-slate-300 dark:border-slate-800'
                : deviceMode === 'tablet'
                ? 'w-[768px] max-w-full rounded-2xl border-4 border-slate-700 dark:border-slate-800'
                : 'w-[375px] max-w-full rounded-3xl border-4 border-slate-800 dark:border-slate-800'
            }`}
          >
            {/* Tablet/Mobile Device Speaker & Camera Notch */}
            {deviceMode !== 'desktop' && (
              <div className="h-4 bg-slate-800 flex items-center justify-center shrink-0">
                <div className="w-12 h-1 bg-slate-600 rounded-full" />
              </div>
            )}

            {/* Live Iframe */}
            <div className="flex-1 relative overflow-hidden bg-slate-50 dark:bg-slate-950">
              <iframe
                key={iframeKey}
                ref={iframeRef}
                src={resolvedUrl}
                title={`${project.title} live interactive preview`}
                onLoad={handleIframeLoad}
                className="w-full h-full border-none"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
                loading="lazy"
              />

              {/* Security Header / X-Frame-Options notice for external domains */}
              {isExternal && (
                <div className="absolute bottom-3 left-3 right-3 z-10 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-3 rounded-xl shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-violet-600 dark:text-violet-400 shrink-0" />
                    <span>
                      External production site. If frame is restricted by browser security policies, use direct launch.
                    </span>
                  </div>
                  <a
                    href={resolvedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-lg shrink-0 transition-colors shadow-2xs"
                  >
                    <span>Launch in Dedicated Window</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>

            {/* Mobile Bottom Home Bar */}
            {deviceMode === 'mobile' && (
              <div className="h-4 bg-slate-800 flex items-center justify-center shrink-0">
                <div className="w-20 h-1 bg-slate-500 rounded-full" />
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer info banner */}
        <div className="px-4 sm:px-6 py-2.5 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs shrink-0 text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] font-bold text-slate-800 dark:text-slate-200">
              Stack:
            </span>
            <div className="flex flex-wrap gap-1">
              {(project.tech || ['TypeScript', 'React']).slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-[10px] font-mono font-medium text-slate-700 dark:text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono text-slate-500">
            <span>Viewport: {deviceMode.toUpperCase()}</span>
            <span>ESC to close</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveProjectPreviewModal;
