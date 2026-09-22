import React from "react";
import { ShieldCheck, Globe2, Zap } from "lucide-react";

interface GlobeVisualProps {
  onActivate?: () => void;
  interactiveReady?: boolean;
}

export default function GlobeVisual({ onActivate, interactiveReady }: GlobeVisualProps) {
  return (
    <div
      onClick={onActivate}
      onTouchStart={onActivate}
      className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px] xl:h-[520px] flex items-center justify-center select-none cursor-pointer group"
      role="region"
      aria-label="Brandex Global Architecture & Engineering Infrastructure"
    >
      {/* Ambient Purple / Indigo Halo Backlight */}
      <div className="absolute w-72 h-72 sm:w-88 sm:h-88 rounded-full bg-[#4f47e6]/25 blur-3xl pointer-events-none transition-all duration-700 group-hover:bg-[#4f47e6]/35" />
      <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-[#818cf8]/15 blur-3xl pointer-events-none" />

      {/* Main Globe Sphere Container */}
      <div className="relative w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[390px] lg:h-[390px] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(79,70,229,0.35),inset_0_0_40px_rgba(13,6,40,0.8)] border border-indigo-500/20 overflow-hidden bg-gradient-to-br from-[#120733] via-[#09031c] to-[#04010a]">
        
        {/* Atmosphere rim light */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(168,85,247,0.35),transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 rounded-full shadow-[inset_-20px_-20px_50px_rgba(0,0,0,0.9),inset_10px_10px_30px_rgba(129,140,248,0.3)] pointer-events-none" />

        {/* Global Vector Landmasses & Coordinate Grid (True Equirectangular / Orthographic projection) */}
        <svg
          viewBox="0 0 400 400"
          className="absolute inset-0 w-full h-full animate-[spin_60s_linear_infinite]"
          style={{ transformOrigin: "center" }}
        >
          <defs>
            <radialGradient id="globeAtmosphere" cx="40%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#4f47e6" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#050210" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#4f47e6" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Latitude Lines */}
          <ellipse cx="200" cy="200" rx="195" ry="60" fill="none" stroke="#6366f1" strokeWidth="0.75" strokeOpacity="0.25" />
          <ellipse cx="200" cy="200" rx="195" ry="120" fill="none" stroke="#6366f1" strokeWidth="0.75" strokeOpacity="0.25" />
          <ellipse cx="200" cy="200" rx="195" ry="175" fill="none" stroke="#6366f1" strokeWidth="0.75" strokeOpacity="0.25" />
          
          {/* Longitude Lines */}
          <ellipse cx="200" cy="200" rx="60" ry="195" fill="none" stroke="#6366f1" strokeWidth="0.75" strokeOpacity="0.25" />
          <ellipse cx="200" cy="200" rx="120" ry="195" fill="none" stroke="#6366f1" strokeWidth="0.75" strokeOpacity="0.25" />
          <ellipse cx="200" cy="200" rx="175" ry="195" fill="none" stroke="#6366f1" strokeWidth="0.75" strokeOpacity="0.25" />

          {/* Stylized Vector Landmasses (Asia, Europe, Africa, Americas outlines) */}
          <g fill="#371b80" fillOpacity="0.85" stroke="#818cf8" strokeWidth="1.2" strokeOpacity="0.6">
            {/* Indian Subcontinent & Asia */}
            <path d="M 210 160 Q 230 170 240 195 Q 235 225 220 250 Q 210 240 205 215 Q 200 185 210 160 Z" />
            <path d="M 235 150 Q 280 140 310 170 Q 290 200 260 190 Q 240 180 235 150 Z" />
            {/* Europe */}
            <path d="M 170 130 Q 200 120 215 145 Q 195 160 175 155 Q 165 145 170 130 Z" />
            {/* Africa */}
            <path d="M 165 170 Q 200 175 205 215 Q 195 270 165 290 Q 145 250 150 200 Z" />
            {/* Americas Silhouette */}
            <path d="M 70 120 Q 110 110 120 150 Q 95 190 75 160 Z" />
            <path d="M 90 200 Q 125 210 115 270 Q 95 300 80 250 Z" />
            {/* Australia */}
            <path d="M 285 260 Q 325 255 330 285 Q 300 310 280 290 Z" />
          </g>

          {/* Glowing Inter-Continental Network Arcs from Bangalore */}
          <g stroke="url(#arcGrad)" strokeWidth="1.8" fill="none" opacity="0.85" filter="url(#glow)">
            {/* Bangalore -> SF */}
            <path d="M 220 205 Q 140 120 100 140" strokeDasharray="4 3" />
            {/* Bangalore -> London */}
            <path d="M 220 205 Q 200 150 180 135" strokeDasharray="5 3" />
            {/* Bangalore -> Tokyo */}
            <path d="M 220 205 Q 265 165 305 160" strokeDasharray="5 3" />
            {/* Bangalore -> Singapore */}
            <path d="M 220 205 Q 245 225 260 235" strokeDasharray="4 2" />
            {/* Bangalore -> Sydney */}
            <path d="M 220 205 Q 260 255 305 280" strokeDasharray="5 3" />
          </g>

          {/* Global Node Beacons */}
          <circle cx="100" cy="140" r="3" fill="#a855f7" />
          <circle cx="180" cy="135" r="3" fill="#818cf8" />
          <circle cx="305" cy="160" r="3" fill="#c084fc" />
          <circle cx="260" cy="235" r="3" fill="#818cf8" />
          <circle cx="305" cy="280" r="3" fill="#a855f7" />

          {/* Bangalore HQ Core Beacon with Pulse Radar Rings */}
          <circle cx="220" cy="205" r="5" fill="#ffffff" filter="url(#glow)" />
          <circle cx="220" cy="205" r="9" fill="none" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.7" className="animate-ping" style={{ transformOrigin: "220px 205px" }} />
          <circle cx="220" cy="205" r="14" fill="none" stroke="#818cf8" strokeWidth="1" strokeOpacity="0.4" />
        </svg>

        {/* Diagonal Orbit Ring (Outer Holographic Halo) */}
        <div className="absolute inset-[-15%] border border-indigo-400/20 rounded-full pointer-events-none transform -rotate-12 scale-y-50 animate-pulse" />
      </div>
    </div>
  );
}

