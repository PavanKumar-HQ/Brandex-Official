import { useState, useEffect, useRef } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  RotateCcw,
  RotateCw,
  Maximize2,
  Minimize2,
  Tv,
  WifiOff,
  ExternalLink,
  Sparkles,
} from "lucide-react";

interface BrandexYouTubePlayerProps {
  videoId: string;
  title: string;
  onEnterClassroomMode?: () => void;
  isClassroomMode?: boolean;
}

export function BrandexYouTubePlayer({
  videoId,
  title,
  onEnterClassroomMode,
  isClassroomMode = false,
}: BrandexYouTubePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [originUrl, setOriginUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOriginUrl(window.location.origin);
    }
  }, []);

  // Online check
  useEffect(() => {
    setIsOnline(navigator.onLine);
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Track Fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const sendCommand = (command: string, args: any[] = []) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({
          event: "command",
          func: command,
          args: args,
        }),
        "*"
      );
    }
  };

  const handleStartPlay = () => {
    setHasStarted(true);
    setIsPlaying(true);
    sendCommand("playVideo");
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  // Safe valid embed source
  const embedSrc = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=${hasStarted ? 1 : 0}&playsinline=1&rel=0&modestbranding=1${originUrl ? `&origin=${encodeURIComponent(originUrl)}` : ""}`;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-black rounded-2xl shadow-2xl border border-slate-800/80 group select-none ${
        isClassroomMode ? "w-full h-full" : "w-full aspect-video"
      }`}
    >
      {!isOnline ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-slate-900 text-white z-30">
          <div className="p-4 rounded-full bg-slate-800 text-amber-400 mb-4">
            <WifiOff className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold text-slate-100">You are currently offline</h3>
          <p className="text-sm text-slate-400 max-w-md mt-2">
            Brandex educational streams require an active internet connection.
          </p>
        </div>
      ) : (
        <>
          {/* Loading Spinner */}
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950 text-slate-400 z-10">
              <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mb-3" />
              <span className="text-xs font-mono tracking-wider uppercase">
                Loading Classroom Stream...
              </span>
            </div>
          )}

          {/* YouTube Video Embed */}
          <iframe
            ref={iframeRef}
            src={embedSrc}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            onLoad={() => setIsLoading(false)}
            className="w-full h-full border-0"
          />

          {/* Custom Play Cover Overlay before first user click */}
          {!hasStarted && !isLoading && (
            <div
              onClick={handleStartPlay}
              className="absolute inset-0 z-20 bg-slate-950/80 backdrop-blur-xs flex flex-col items-center justify-center cursor-pointer group/overlay transition-all"
            >
              <div className="w-20 h-20 rounded-full bg-indigo-600 group-hover/overlay:bg-indigo-500 text-white flex items-center justify-center shadow-2xl shadow-indigo-600/50 group-hover/overlay:scale-110 transition-all mb-4">
                <Play className="w-8 h-8 fill-white ml-1" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Click to Start Video Lesson
              </h3>
              <p className="text-xs text-indigo-300 font-medium mt-1">
                Karnataka State Syllabus • HD Classroom Stream
              </p>
            </div>
          )}

          {/* Top Info Header Overlay */}
          <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-10 flex items-center justify-between pointer-events-auto">
            <div className="flex items-center gap-2.5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950/80 px-2.5 py-1 rounded-md border border-indigo-500/40">
                BRANDEX HD STREAM
              </span>
              <span className="text-xs sm:text-sm font-bold text-white truncate max-w-md drop-shadow">
                {title}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {onEnterClassroomMode && (
                <button
                  onClick={onEnterClassroomMode}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600/90 hover:bg-indigo-600 text-white text-xs font-bold transition-all shadow-md backdrop-blur-md cursor-pointer"
                >
                  <Tv className="w-3.5 h-3.5" /> Classroom Theater
                </button>
              )}

              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-lg bg-black/60 hover:bg-black/80 text-white text-xs font-semibold transition-colors cursor-pointer"
                title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
