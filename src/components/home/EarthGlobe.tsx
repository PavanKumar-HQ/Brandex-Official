import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import { Globe2, Zap, ShieldCheck } from "lucide-react";

// Convert latitude and longitude to 3D Cartesian coordinates
function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

// Major Global Tech Hub Nodes
const TECH_HUBS = [
  { name: "Bangalore HQ", lat: 12.9716, lng: 77.5946, status: "Primary Engineering Hub", isHQ: true },
  { name: "San Francisco", lat: 37.7749, lng: -122.4194, status: "Cloud & AI Edge", isHQ: false },
  { name: "London", lat: 51.5074, lng: -0.1278, status: "European Gateway", isHQ: false },
  { name: "Tokyo", lat: 35.6762, lng: 139.6503, status: "Asia-Pacific Edge", isHQ: false },
  { name: "Frankfurt", lat: 50.1109, lng: 8.6821, status: "Data Reliability Node", isHQ: false },
  { name: "Singapore", lat: 1.3521, lng: 103.8198, status: "High-Throughput Node", isHQ: false },
  { name: "Dubai", lat: 25.2048, lng: 55.2708, status: "MENA Hub", isHQ: false },
  { name: "Sydney", lat: -33.8688, lng: 151.2093, status: "Oceania Node", isHQ: false },
];

// High-definition Procedural Earth Texture Generator
function createEarthCanvasTexture(): { earthMap: THREE.CanvasTexture; bumpMap: THREE.CanvasTexture } {
  const width = 2048;
  const height = 1024;

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d")!;

  const bumpCanvas = document.createElement("canvas");
  bumpCanvas.width = width;
  bumpCanvas.height = height;
  const bCtx = bumpCanvas.getContext("2d")!;

  // 1. Fill Deep Oceanic Base with Subtle Gradient
  const oceanGrad = ctx.createLinearGradient(0, 0, 0, height);
  oceanGrad.addColorStop(0, "#0e2246");
  oceanGrad.addColorStop(0.2, "#0b2046");
  oceanGrad.addColorStop(0.5, "#081a38");
  oceanGrad.addColorStop(0.8, "#0b2046");
  oceanGrad.addColorStop(1, "#0e2246");
  ctx.fillStyle = oceanGrad;
  ctx.fillRect(0, 0, width, height);

  bCtx.fillStyle = "#000000";
  bCtx.fillRect(0, 0, width, height);

  // Helper to map lat/lng to canvas pixels
  const toCanvas = (lat: number, lng: number) => {
    const x = ((lng + 180) / 360) * width;
    const y = ((90 - lat) / 180) * height;
    return [x, y];
  };

  // Helper to draw continent polygons with organic coastline details
  const drawLand = (polygon: number[][], landColor = "#22543d", highlandColor = "#2f855a") => {
    if (polygon.length < 3) return;

    ctx.save();
    ctx.beginPath();
    const [startX, startY] = toCanvas(polygon[0][0], polygon[0][1]);
    ctx.moveTo(startX, startY);

    for (let i = 1; i < polygon.length; i++) {
      const [px, py] = toCanvas(polygon[i][0], polygon[i][1]);
      ctx.lineTo(px, py);
    }
    ctx.closePath();

    // Subtle coastal shallow water glow
    ctx.shadowColor = "#38bdf8";
    ctx.shadowBlur = 8;
    ctx.fillStyle = landColor;
    ctx.fill();

    // Inner terrain shading
    ctx.shadowBlur = 0;
    ctx.fillStyle = highlandColor;
    ctx.fill();
    ctx.restore();

    // Bump map for land height
    bCtx.save();
    bCtx.beginPath();
    bCtx.moveTo(startX, startY);
    for (let i = 1; i < polygon.length; i++) {
      const [px, py] = toCanvas(polygon[i][0], polygon[i][1]);
      bCtx.lineTo(px, py);
    }
    bCtx.closePath();
    bCtx.fillStyle = "#ffffff";
    bCtx.fill();
    bCtx.restore();
  };

  // Continents Data (Approximated Polygon Coordinates)
  // Africa
  drawLand([
    [37, 10], [30, 32], [15, 39], [12, 43], [12, 51], [2, 45], [-5, 39],
    [-25, 33], [-34, 18], [-34, 26], [-28, 33], [-15, 12], [4, 9], [5, -1],
    [5, -5], [12, -16], [21, -17], [28, -13], [35, -5], [37, 10]
  ], "#2d6a4f", "#1b4332");

  // Eurasia (Europe + Asia)
  drawLand([
    [71, 28], [70, 42], [70, 70], [77, 105], [74, 140], [67, 170], [60, 165],
    [55, 155], [45, 142], [35, 130], [22, 120], [15, 108], [10, 105], [1, 104],
    [10, 98], [22, 90], [25, 80], [8, 77], [20, 70], [25, 60], [25, 55],
    [30, 48], [30, 35], [36, 36], [42, 28], [36, 22], [40, 15], [36, -5],
    [43, -9], [50, -5], [58, 5], [62, 10], [68, 15], [71, 28]
  ], "#2d6a4f", "#40916c");

  // North America
  drawLand([
    [72, -168], [71, -156], [70, -130], [60, -90], [62, -75], [55, -60],
    [46, -53], [44, -64], [30, -80], [25, -80], [22, -90], [20, -97],
    [15, -92], [9, -79], [9, -83], [16, -95], [23, -110], [32, -117],
    [38, -123], [48, -124], [58, -135], [60, -145], [65, -168], [72, -168]
  ], "#2d6a4f", "#1b4332");

  // South America
  drawLand([
    [12, -72], [10, -62], [7, -55], [-5, -35], [-12, -37], [-23, -43],
    [-34, -53], [-45, -65], [-55, -68], [-54, -72], [-45, -75], [-35, -72],
    [-20, -70], [-5, -80], [2, -78], [8, -77], [12, -72]
  ], "#1b4332", "#40916c");

  // Australia
  drawLand([
    [-11, 142], [-15, 145], [-25, 153], [-38, 145], [-35, 137], [-35, 118],
    [-22, 114], [-15, 125], [-15, 135], [-11, 142]
  ], "#b08968", "#936639");

  // India Peninsula (High Definition)
  drawLand([
    [32, 75], [28, 70], [22, 69], [15, 74], [8, 77], [13, 80],
    [17, 83], [22, 88], [27, 88], [30, 80], [32, 75]
  ], "#2d6a4f", "#52b788");

  // United Kingdom & Ireland
  drawLand([[58, -3], [55, -1], [50, 1], [50, -5], [55, -6], [58, -3]], "#40916c");
  drawLand([[55, -7], [52, -6], [52, -10], [55, -10]], "#40916c");

  // Japan
  drawLand([[45, 142], [43, 145], [35, 140], [33, 132], [36, 136], [45, 142]], "#40916c");

  // Madagascar
  drawLand([[-12, 49], [-16, 50], [-25, 47], [-25, 44], [-16, 44], [-12, 49]], "#2d6a4f");

  // Greenland & Arctic Ice
  drawLand([[83, -30], [80, -20], [70, -25], [60, -45], [70, -55], [80, -60], [83, -30]], "#e2e8f0", "#f8fafc");

  // Antarctica
  drawLand([
    [-65, -180], [-65, 180], [-90, 180], [-90, -180]
  ], "#e2e8f0", "#f8fafc");

  // Add subtle lat/long grid overlay on ocean
  ctx.strokeStyle = "rgba(79, 71, 230, 0.12)";
  ctx.lineWidth = 1;
  for (let lat = -80; lat <= 80; lat += 20) {
    const y = ((90 - lat) / 180) * height;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  for (let lng = -180; lng <= 180; lng += 30) {
    const x = ((lng + 180) / 360) * width;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }

  // Create Three.js Canvas Textures
  const earthMap = new THREE.CanvasTexture(canvas);
  earthMap.wrapS = THREE.RepeatWrapping;
  earthMap.wrapT = THREE.ClampToEdgeWrapping;

  const bumpMap = new THREE.CanvasTexture(bumpCanvas);
  bumpMap.wrapS = THREE.RepeatWrapping;
  bumpMap.wrapT = THREE.ClampToEdgeWrapping;

  return { earthMap, bumpMap };
}

// Procedural Clouds Texture Generator
function createCloudTexture(): THREE.CanvasTexture {
  const width = 1024;
  const height = 512;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = "rgba(0, 0, 0, 0)";
  ctx.fillRect(0, 0, width, height);

  // Draw smooth organic cloud puffs
  ctx.fillStyle = "rgba(255, 255, 255, 0.42)";
  for (let i = 0; i < 90; i++) {
    const x = Math.random() * width;
    const y = 80 + Math.random() * (height - 160);
    const radius = 25 + Math.random() * 55;

    const grad = ctx.createRadialGradient(x, y, 0, x, y, radius);
    grad.addColorStop(0, "rgba(255, 255, 255, 0.55)");
    grad.addColorStop(0.6, "rgba(255, 255, 255, 0.2)");
    grad.addColorStop(1, "rgba(255, 255, 255, 0)");

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

// Glowing Pulse Arcs between Bangalore HQ and global edge cities
function NetworkArc({ start, end, radius }: { start: THREE.Vector3; end: THREE.Vector3; radius: number }) {
  const curvePoints = useMemo(() => {
    const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
    const dist = start.distanceTo(end);
    mid.normalize().multiplyScalar(radius + dist * 0.28);

    const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
    return curve.getPoints(35);
  }, [start, end, radius]);

  const geo = useMemo(() => new THREE.BufferGeometry().setFromPoints(curvePoints), [curvePoints]);

  return (
    <primitive
      object={
        new THREE.Line(
          geo,
          new THREE.LineBasicMaterial({
            color: new THREE.Color("#60a5fa"),
            transparent: true,
            opacity: 0.55,
            linewidth: 1.5,
          })
        )
      }
    />
  );
}

// Interactive 3D Node Marker on Earth
function EarthHubMarker({
  hub,
  radius,
  selectedHub,
  onSelect,
}: {
  hub: (typeof TECH_HUBS)[0];
  radius: number;
  selectedHub: string;
  onSelect: () => void;
}) {
  const pos = useMemo(() => latLngToVector3(hub.lat, hub.lng, radius * 1.002), [hub, radius]);
  const isSelected = selectedHub === hub.name;
  const pulseRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (pulseRef.current) {
      const scale = 1 + (Math.sin(clock.getElapsedTime() * 3 + hub.lat) + 1) * 0.35;
      pulseRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group position={pos}>
      {/* Outer Pulse */}
      <mesh ref={pulseRef}>
        <sphereGeometry args={[0.045, 12, 12]} />
        <meshBasicMaterial
          color={hub.isHQ ? "#38bdf8" : "#818cf8"}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Solid Marker Core */}
      <mesh onClick={(e) => { e.stopPropagation(); onSelect(); }}>
        <sphereGeometry args={[0.03, 12, 12]} />
        <meshBasicMaterial color={hub.isHQ ? "#38bdf8" : "#ffffff"} />
      </mesh>

      {/* Tooltip Overlay */}
      {hub.isHQ && (
        <Html distanceFactor={7} position={[0, 0.08, 0]} center>
          <div
            onClick={(e) => { e.stopPropagation(); onSelect(); }}
            className="px-2 py-0.5 rounded-full text-[9px] font-mono whitespace-nowrap cursor-pointer flex items-center gap-1 shadow-sm bg-[#4f47e6] text-white border border-indigo-300 font-bold select-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-ping" />
            <span>Bangalore HQ</span>
          </div>
        </Html>
      )}
    </group>
  );
}

// Main 3D Earth Globe Scene with OrbitControls
function RealisticEarthScene({
  selectedHub,
  setSelectedHub,
}: {
  selectedHub: string;
  setSelectedHub: (name: string) => void;
}) {
  const earthRef = useRef<THREE.Group>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  const radius = 2.05;

  const { earthMap, bumpMap } = useMemo(() => createEarthCanvasTexture(), []);
  const cloudMap = useMemo(() => createCloudTexture(), []);

  // Smooth Auto-rotation
  useFrame((_, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.08;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.11;
    }
  });

  const bangalorePos = useMemo(() => latLngToVector3(12.9716, 77.5946, radius), [radius]);
  const hubPositions = useMemo(() => {
    return TECH_HUBS.map((h) => ({
      ...h,
      pos: latLngToVector3(h.lat, h.lng, radius),
    }));
  }, [radius]);

  return (
    <group>
      {/* Atmospheric Glow Outer Halo */}
      <mesh>
        <sphereGeometry args={[radius * 1.14, 48, 48]} />
        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.12}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Rotating Earth Group */}
      <group ref={earthRef}>
        {/* 1. Earth Solid Surface with Landmasses & Oceans */}
        <mesh receiveShadow castShadow>
          <sphereGeometry args={[radius, 64, 64]} />
          <meshStandardMaterial
            map={earthMap}
            bumpMap={bumpMap}
            bumpScale={0.03}
            roughness={0.65}
            metalness={0.15}
          />
        </mesh>

        {/* 2. Atmospheric Clouds Layer */}
        <mesh ref={cloudsRef}>
          <sphereGeometry args={[radius * 1.018, 48, 48]} />
          <meshStandardMaterial
            map={cloudMap}
            transparent
            opacity={0.45}
            blending={THREE.NormalBlending}
            depthWrite={false}
          />
        </mesh>

        {/* 3. Global Network Connection Arcs from Bangalore HQ */}
        {hubPositions
          .filter((h) => !h.isHQ)
          .map((h) => (
            <NetworkArc key={h.name} start={bangalorePos} end={h.pos} radius={radius} />
          ))}

        {/* 4. Interactive City Hub Markers */}
        {TECH_HUBS.map((hub) => (
          <EarthHubMarker
            key={hub.name}
            hub={hub}
            radius={radius}
            selectedHub={selectedHub}
            onSelect={() => setSelectedHub(hub.name)}
          />
        ))}
      </group>
    </group>
  );
}

export default function EarthGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(true);
  const [selectedHub, setSelectedHub] = useState("Bangalore HQ");

  const currentHubData = TECH_HUBS.find((h) => h.name === selectedHub) || TECH_HUBS[0];

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] xl:h-[520px] flex items-center justify-center select-none"
    >
      {/* Ambient Blue Halo Backlight */}
      <div className="absolute w-72 h-72 rounded-full bg-[#38bdf8]/15 blur-3xl pointer-events-none" />
      <div className="absolute w-96 h-96 rounded-full bg-[#4f47e6]/10 blur-3xl pointer-events-none" />

      {isInView && (
        <Canvas
          camera={{ position: [0, 0.4, 5.2], fov: 46 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          className="cursor-grab active:cursor-grabbing"
        >
          <ambientLight intensity={1.4} />
          <directionalLight position={[10, 8, 5]} intensity={2.2} color="#ffffff" />
          <directionalLight position={[-10, -5, -5]} intensity={0.6} color="#38bdf8" />

          <RealisticEarthScene selectedHub={selectedHub} setSelectedHub={setSelectedHub} />

          {/* Full Interactive 3D OrbitControls (Draggable, Inertia Rotate) */}
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            rotateSpeed={0.65}
            dampingFactor={0.08}
            autoRotate={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI - Math.PI / 4}
          />
        </Canvas>
      )}

      {/* Floating 3D Interaction Control Overlay */}
      <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
        <div className="liquid-glass-pill px-3 py-1 rounded-full text-[11px] font-mono font-semibold text-slate-700 flex items-center gap-2 shadow-xs">
          <Globe2 size={13} className="text-[#38bdf8] animate-spin" style={{ animationDuration: "12s" }} />
          <span>Interactive 3D Earth &bull; Drag to spin</span>
        </div>

        <div className="liquid-glass-pill px-3 py-1 rounded-full text-[11px] font-mono font-bold text-[#4f47e6] flex items-center gap-1.5 shadow-xs">
          <Zap size={12} className="text-[#4f47e6]" />
          <span>Global Infrastructure</span>
        </div>
      </div>
    </div>
  );
}
