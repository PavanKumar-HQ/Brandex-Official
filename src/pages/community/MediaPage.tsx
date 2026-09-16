import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Play,
  Video,
  Filter,
  ArrowRight,
  ArrowLeft,
  Calendar,
  ExternalLink,
  Layers,
  Image as ImageIcon,
} from "lucide-react";
import { getMediaItems, getVideos } from "@/data/community/repository";
import { MediaItem, YouTubeVideo } from "@/models/community";

export default function MediaPage() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);

  useEffect(() => {
    async function loadData() {
      const items = await getMediaItems(activeFilter);
      setMediaItems(items);
      const vList = await getVideos();
      setVideos(vList);
    }
    loadData();
  }, [activeFilter]);

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

          <div className="space-y-1.5 max-w-2xl pt-2">
            <div className="liquid-glass-pill inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold text-[#4f47e6] mb-1">
              Recordings, Talks & Media Vault
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Community Media & Lecture Archives
            </h1>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Technical talks, live build sessions, smartboard demonstrations, and Bangalore builder summit archives.
            </p>
          </div>
        </div>

        {/* Video & Media Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.slice(0, 9).map((vid) => (
            <div
              key={vid.id}
              className="liquid-glass-card hover:bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="aspect-[16/9] bg-slate-900 relative overflow-hidden group">
                <img
                  src={vid.thumbnail}
                  alt={vid.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-[#4f47e6] text-white flex items-center justify-center shadow-lg">
                    <Play size={18} className="ml-1" fill="white" />
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#4f47e6]">
                    {vid.category || "Technical Session"}
                  </span>
                  <h3 className="font-display font-bold text-base text-slate-900 mt-1 line-clamp-2">
                    {vid.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">{vid.description}</p>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>{vid.duration || "24:00"}</span>
                  <a
                    href={`https://youtube.com/watch?v=${vid.youtubeId || vid.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#4f47e6] hover:underline flex items-center gap-1"
                  >
                    <span>Watch Recording</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
