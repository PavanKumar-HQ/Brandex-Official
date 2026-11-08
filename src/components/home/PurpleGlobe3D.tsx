import React, { useEffect, useRef, useState } from "react";
import worldEdgeDots from "@/data/worldEdgeDots.json";
import worldCoastlines from "@/data/worldCoastlines.json";

// Major Global Tech Hub Nodes
const TECH_HUBS = [
  { name: "Bangalore HQ", lat: 12.9716, lng: 77.5946, isHQ: true },
  { name: "Tokyo", lat: 35.6762, lng: 139.6503, isHQ: false },
  { name: "Singapore", lat: 1.3521, lng: 103.8198, isHQ: false },
  { name: "Sydney", lat: -33.8688, lng: 151.2093, isHQ: false },
  { name: "Dubai", lat: 25.2048, lng: 55.2708, isHQ: false },
  { name: "London", lat: 51.5074, lng: -0.1278, isHQ: false },
  { name: "San Francisco", lat: 37.7749, lng: -122.4194, isHQ: false },
];

// Inter-continental Data Arcs connecting Bangalore HQ to edge nodes
const NETWORK_ARCS = [
  { from: 0, to: 1 }, // Bangalore -> Tokyo
  { from: 0, to: 2 }, // Bangalore -> Singapore
  { from: 2, to: 3 }, // Singapore -> Sydney
  { from: 1, to: 3 }, // Tokyo -> Sydney
  { from: 0, to: 4 }, // Bangalore -> Dubai
  { from: 4, to: 5 }, // Dubai -> London
  { from: 5, to: 6 }, // London -> San Francisco
];

export default function VioletGlobe3D() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [rotation, setRotation] = useState(1.85); // Initial view angled toward India & Asia
  const isDraggingRef = useRef(false);
  const lastMouseXRef = useRef(0);
  const animFrameIdRef = useRef<number>(0);
  const pulsePhaseRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 540);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 540);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      const size = Math.min(canvas.parentElement.clientWidth, 580);
      width = canvas.width = size;
      height = canvas.height = size;
    };

    window.addEventListener("resize", handleResize);

    // Slightly increased radius for a grander, more commanding presence
    const radius = Math.min(width, height) * 0.45;
    const centerX = width / 2;
    const centerY = height / 2;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      pulsePhaseRef.current += 0.015;

      // 1. Subtle, Soft Atmospheric Halo (No harsh neon grading)
      const haloGrad = ctx.createRadialGradient(
        centerX, centerY, radius * 0.9,
        centerX, centerY, radius * 1.15
      );
      haloGrad.addColorStop(0, "rgba(139, 92, 246, 0.16)");
      haloGrad.addColorStop(0.6, "rgba(99, 102, 241, 0.06)");
      haloGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.15, 0, Math.PI * 2);
      ctx.fillStyle = haloGrad;
      ctx.fill();

      // 2. Base Sphere (Deep, elegant midnight cosmic navy/violet)
      const sphereGrad = ctx.createRadialGradient(
        centerX - radius * 0.35,
        centerY - radius * 0.3,
        radius * 0.15,
        centerX,
        centerY,
        radius
      );
      sphereGrad.addColorStop(0, "#191138");
      sphereGrad.addColorStop(0.5, "#0e0824");
      sphereGrad.addColorStop(0.9, "#060312");
      sphereGrad.addColorStop(1, "#03010a");

      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = sphereGrad;
      ctx.fill();

      // Clip inside sphere
      ctx.clip();

      // Helper function to project lat/lng onto 3D sphere surface
      const project = (lat: number, lng: number): { x: number; y: number; z: number; visible: boolean } => {
        const phi = (lat * Math.PI) / 180;
        const theta = (lng * Math.PI) / 180 + rotation;

        const x = radius * Math.cos(phi) * Math.sin(theta);
        const y = -radius * Math.sin(phi);
        const z = radius * Math.cos(phi) * Math.cos(theta);

        return {
          x: centerX + x,
          y: centerY + y,
          z,
          visible: z > -radius * 0.05,
        };
      };

      // 3. Delicate Latitude & Longitude Coordinate Grids
      ctx.lineWidth = 0.6;
      ctx.strokeStyle = "rgba(167, 139, 250, 0.12)";

      // Parallels
      [-60, -40, -20, 0, 20, 40, 60].forEach((latDeg) => {
        const latRad = (latDeg * Math.PI) / 180;
        const rLat = radius * Math.cos(latRad);
        const yLat = centerY - radius * Math.sin(latRad);
        ctx.beginPath();
        ctx.ellipse(centerX, yLat, rLat, rLat * 0.25, 0, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Meridians
      for (let i = 0; i < 8; i++) {
        const lonAngle = (i * Math.PI) / 4 + rotation;
        const xOffset = Math.sin(lonAngle) * radius;
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, Math.abs(xOffset), radius, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // 4. Fine Country Boundary Vector Outlines (From Natural Earth GIS data)
      ctx.lineWidth = 0.8;
      ctx.strokeStyle = "rgba(167, 139, 250, 0.28)";

      (worldCoastlines as Array<Array<[number, number]>>).forEach((ring) => {
        let isDrawing = false;
        ctx.beginPath();
        for (let i = 0; i < ring.length; i++) {
          const [lat, lng] = ring[i];
          const p = project(lat, lng);
          if (p.visible && p.z > 0) {
            if (!isDrawing) {
              ctx.moveTo(p.x, p.y);
              isDrawing = true;
            } else {
              ctx.lineTo(p.x, p.y);
            }
          } else {
            isDrawing = false;
          }
        }
        ctx.stroke();
      });

      // 5. Exact Country Edge Dots Outline (Traces every country perimeter edge)
      const edgeDots = worldEdgeDots as Array<[number, number]>;
      for (let i = 0; i < edgeDots.length; i++) {
        const [lat, lng] = edgeDots[i];
        const p = project(lat, lng);
        if (p.visible && p.z > 0) {
          // Natural cosine depth shading
          const depthRatio = Math.max(0.15, p.z / radius);
          const alpha = depthRatio * 0.9;
          const dotSize = 1.1 + depthRatio * 0.5;

          ctx.beginPath();
          ctx.arc(p.x, p.y, dotSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(224, 214, 252, ${alpha})`;
          ctx.fill();
        }
      }

      // 6. Network Arcs with Smooth Traveling Photons
      NETWORK_ARCS.forEach((arc, arcIdx) => {
        const hubA = TECH_HUBS[arc.from];
        const hubB = TECH_HUBS[arc.to];
        const pA = project(hubA.lat, hubA.lng);
        const pB = project(hubB.lat, hubB.lng);

        if (pA.z > -15 || pB.z > -15) {
          const midX = (pA.x + pB.x) / 2;
          const midY = (pA.y + pB.y) / 2;

          // 3D Altitude arc calculation
          const dx = midX - centerX;
          const dy = midY - centerY;
          const len = Math.sqrt(dx * dx + dy * dy) || 1;
          const arcHeight = 30;
          const ctrlX = midX + (dx / len) * arcHeight;
          const ctrlY = midY + (dy / len) * arcHeight;

          // Arc Curve
          ctx.beginPath();
          ctx.moveTo(pA.x, pA.y);
          ctx.quadraticCurveTo(ctrlX, ctrlY, pB.x, pB.y);
          ctx.strokeStyle = "rgba(192, 168, 252, 0.35)";
          ctx.lineWidth = 1.1;
          ctx.stroke();

          // Traveling light packet
          const t = ((pulsePhaseRef.current * 0.45 + arcIdx * 0.22) % 1);
          const omt = 1 - t;
          const pulseX = omt * omt * pA.x + 2 * omt * t * ctrlX + t * t * pB.x;
          const pulseY = omt * omt * pA.y + 2 * omt * t * ctrlY + t * t * pB.y;

          ctx.beginPath();
          ctx.arc(pulseX, pulseY, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.shadowColor = "#e0d4fc";
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // 7. Global Tech Hub Beacons with Gentle Radar Waves
      TECH_HUBS.forEach((hub) => {
        const p = project(hub.lat, hub.lng);
        if (p.visible && p.z > 0) {
          const depthRatio = Math.max(0.2, p.z / radius);

          // Subtle Radar Ripple
          const pingR = 4 + ((pulsePhaseRef.current * 14) % 14);
          const pingAlpha = Math.max(0, 1 - pingR / 18) * depthRatio;

          ctx.beginPath();
          ctx.arc(p.x, p.y, pingR, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(192, 168, 252, ${pingAlpha * 0.6})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Outer halo
          ctx.beginPath();
          ctx.arc(p.x, p.y, hub.isHQ ? 4.5 : 3.5, 0, Math.PI * 2);
          ctx.fillStyle = hub.isHQ ? "rgba(224, 214, 252, 0.7)" : "rgba(167, 139, 250, 0.5)";
          ctx.fill();

          // Solid Center Star Point
          ctx.beginPath();
          ctx.arc(p.x, p.y, hub.isHQ ? 3 : 2, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.fill();
        }
      });

      // 8. Soft Natural 3D Rim Gradient
      const rimGrad = ctx.createRadialGradient(
        centerX, centerY, radius * 0.82,
        centerX, centerY, radius
      );
      rimGrad.addColorStop(0, "rgba(0, 0, 0, 0)");
      rimGrad.addColorStop(0.85, "rgba(6, 3, 18, 0.4)");
      rimGrad.addColorStop(1, "rgba(4, 2, 12, 0.85)");

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = rimGrad;
      ctx.fill();

      ctx.restore();

      // 9. Clean, Fine Outer Border Ring (Subtle, non-neon)
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(167, 139, 250, 0.35)";
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Significantly reduced rotation speed: slow, serene, majestic glide
      if (!isDraggingRef.current) {
        setRotation((prev) => prev + 0.00085);
      }

      animFrameIdRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [rotation]);

  // Smooth Drag & Rotate Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    lastMouseXRef.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - lastMouseXRef.current;
    lastMouseXRef.current = e.clientX;
    setRotation((prev) => prev + deltaX * 0.005);
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      isDraggingRef.current = true;
      lastMouseXRef.current = e.touches[0].clientX;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current || e.touches.length === 0) return;
    const deltaX = e.touches[0].clientX - lastMouseXRef.current;
    lastMouseXRef.current = e.touches[0].clientX;
    setRotation((prev) => prev + deltaX * 0.005);
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  return (
    <div
      className="relative w-full max-w-[560px] lg:max-w-[600px] aspect-square flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Delicate concentric background orbital guide rings */}
      <div className="absolute inset-0 rounded-full border border-violet-500/10 scale-105 pointer-events-none" />
      <div className="absolute inset-0 rounded-full border border-violet-500/[0.06] scale-120 pointer-events-none" />

      {/* Main 3D Globe Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full drop-shadow-[0_8px_30px_rgba(10,5,25,0.4)]"
      />

      {/* Elegant Status Badge */}
      <div className="absolute -bottom-2 sm:bottom-1 left-1/2 -translate-x-1/2 bg-card/90 dark:bg-card/85 backdrop-blur-md border border-border/80 rounded-full px-4 py-1.5 flex items-center gap-2 shadow-lg pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-accent" />
        <span className="text-[11px] font-bold text-foreground tracking-wider uppercase">
          Global Engineering Infrastructure
        </span>
      </div>
    </div>
  );
}
