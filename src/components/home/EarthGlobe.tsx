import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import { Globe2, ShieldCheck, Zap } from "lucide-react";

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
  { name: "Bangalore HQ", lat: 12.9716, lng: 77.5946, status: "Primary Architecture & Engineering Hub", isHQ: true },
  { name: "San Francisco", lat: 37.7749, lng: -122.4194, status: "Cloud Edge & AI Cluster", isHQ: false },
  { name: "London", lat: 51.5074, lng: -0.1278, status: "European Gateway Node", isHQ: false },
  { name: "Tokyo", lat: 35.6762, lng: 139.6503, status: "Asia-Pacific Low-Latency Edge", isHQ: false },
  { name: "Frankfurt", lat: 50.1109, lng: 8.6821, status: "High-Security Data Node", isHQ: false },
  { name: "Singapore", lat: 1.3521, lng: 103.8198, status: "High-Throughput Routing Edge", isHQ: false },
  { name: "Dubai", lat: 25.2048, lng: 55.2708, status: "MENA Enterprise Node", isHQ: false },
  { name: "Sydney", lat: -33.8688, lng: 151.2093, status: "Oceania Edge Pipeline", isHQ: false },
];

// High-definition Procedural Purple Earth Texture Generator
function createPurpleEarthCanvasTexture(): { earthMap: THREE.CanvasTexture; bumpMap: THREE.CanvasTexture } {
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

  // 1. Fill Deep Cosmic Purple-Indigo Oceanic Base
  const oceanGrad = ctx.createLinearGradient(0, 0, 0, height);
  oceanGrad.addColorStop(0, "#080417");
  oceanGrad.addColorStop(0.25, "#0e0729");
  oceanGrad.addColorStop(0.5, "#150b3d");
  oceanGrad.addColorStop(0.75, "#0e0729");
  oceanGrad.addColorStop(1, "#080417");
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

  // Helper to draw continent polygons with luminous purple gradient & dotted pattern
  const drawLand = (polygon: number[][], landColor = "#3c2182", highlandColor = "#5a32b8") => {
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

    // Luminous coastal glow
    ctx.shadowColor = "#818cf8";
    ctx.shadowBlur = 10;
    ctx.fillStyle = landColor;
    ctx.fill();

    // Inner terrain highlight
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

  // Continents Data
  // Africa
  drawLand([
    [37, 10], [30, 32], [15, 39], [12, 43], [12, 51], [2, 45], [-5, 39],
    [-25, 33], [-34, 18], [-34, 26], [-28, 33], [-15, 12], [4, 9], [5, -1],
    [5, -5], [12, -16], [21, -17], [28, -13], [35, -5], [37, 10]
  ], "#432491", "#5d35c4");

  // Eurasia (Europe + Asia)
  drawLand([
    [71, 28], [70, 42], [70, 70], [77, 105], [74, 140], [67, 170], [60, 165],
    [55, 155], [45, 142], [35, 130], [22, 120], [15, 108], [10, 105], [1, 104],
    [10, 98], [22, 90], [25, 80], [8, 77], [20, 70], [25, 60], [25, 55],
    [30, 48], [30, 35], [36, 36], [42, 28], [36, 22], [40, 15], [36, -5],
    [43, -9], [50, -5], [58, 5], [62, 10], [68, 15], [71, 28]
  ], "#3c2182", "#5530b8");

  // North America
  drawLand([
    [72, -168], [71, -156], [70, -130], [60, -90], [62, -75], [55, -60],
    [46, -53], [44, -64], [30, -80], [25, -80], [22, -90], [20, -97],
    [15, -92], [9, -79], [9, -83], [16, -95], [23, -110], [32, -117],
    [38, -123], [48, -124], [58, -135], [60, -145], [65, -168], [72, -168]
  ], "#3c2182", "#5530b8");

  // South America
  drawLand([
    [12, -72], [10, -62], [7, -55], [-5, -35], [-12, -37], [-23, -43],
    [-34, -53], [-45, -65], [-55, -68], [-54, -72], [-45, -75], [-35, -72],
    [-20, -70], [-5, -80], [2, -78], [8, -77], [12, -72]
  ], "#341c73", "#4d29a6");

  // Australia
  drawLand([
    [-11, 142], [-15, 145], [-25, 153], [-38, 145], [-35, 137], [-35, 118],
    [-22, 114], [-15, 125], [-15, 135], [-11, 142]
  ], "#4c269e", "#6839d4");

  // India Peninsula (High Definition)
  drawLand([
    [32, 75], [28, 70], [22, 69], [15, 74], [8, 77], [13, 80],
    [17, 83], [22, 88], [27, 88], [30, 80], [32, 75]
  ], "#4f47e6", "#6366f1");

  // United Kingdom & Ireland
  drawLand([[58, -3], [55, -1], [50, 1], [50, -5], [55, -6], [58, -3]], "#5530b8");
  drawLand([[55, -7], [52, -6], [52, -10], [55, -10]], "#5530b8");

  // Japan
  drawLand([[45, 142], [43, 145], [35, 140], [33, 132], [36, 136], [45, 142]], "#5530b8");

  // Madagascar
  drawLand([[-12, 49], [-16, 50], [-25, 47], [-25, 44], [-16, 44], [-12, 49]], "#432491");

  // Polar Caps (Violet/Silver Frost)
  drawLand([[83, -30], [80, -20], [70, -25], [60, -45], [70, -55], [80, -60], [83, -30]], "#9385cf", "#b4a6ed");
  drawLand([[-65, -180], [-65, 180], [-90, 180], [-90, -180]], "#9385cf", "#b4a6ed");

  // High-Tech Dotted Matrix Rasterization
  ctx.fillStyle = "rgba(192, 132, 252, 0.45)";
  const dotSpacing = 8;
  for (let dy = 0; dy < height; dy += dotSpacing) {
    for (let dx = 0; dx < width; dx += dotSpacing) {
      // Sample pixel color to add glowing dots over landmasses
      const p = ctx.getImageData(dx, dy, 1, 1).data;
      if (p[0] > 35 || p[1] > 20 || p[2] > 70) {
        ctx.beginPath();
        ctx.arc(dx, dy, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  // Subtle Global Coordinate Matrix Lines
  ctx.strokeStyle = "rgba(129, 140, 248, 0.14)";
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

  const earthMap = new THREE.CanvasTexture(canvas);
  earthMap.wrapS = THREE.RepeatWrapping;
  earthMap.wrapT = THREE.ClampToEdgeWrapping;

  const bumpMap = new THREE.CanvasTexture(bumpCanvas);
  bumpMap.wrapS = THREE.RepeatWrapping;
  bumpMap.wrapT = THREE.ClampToEdgeWrapping;

  return { earthMap, bumpMap };
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
            color: new THREE.Color("#c084fc"),
            transparent: true,
            opacity: 0.65,
            linewidth: 1.5,
          })
        )
      }
    />
  );
}

// Moving Energy Particle along Network Arc
function ArcParticle({ start, end, radius, speed = 1, delay = 0 }: { start: THREE.Vector3; end: THREE.Vector3; radius: number; speed?: number; delay?: number }) {
  const particleRef = useRef<THREE.Mesh>(null);
  const curve = useMemo(() => {
    const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
    const dist = start.distanceTo(end);
    mid.normalize().multiplyScalar(radius + dist * 0.28);
    return new THREE.QuadraticBezierCurve3(start, mid, end);
  }, [start, end, radius]);

  useFrame(({ clock }) => {
    if (!particleRef.current) return;
    const t = ((clock.getElapsedTime() * speed * 0.4 + delay) % 1);
    const point = curve.getPoint(t);
    particleRef.current.position.copy(point);
  });

  return (
    <mesh ref={particleRef}>
      <sphereGeometry args={[0.024, 12, 12]} />
      <meshBasicMaterial color="#ffffff" />
    </mesh>
  );
}

// Dotted Outer Matrix Sphere (Holographic Sci-Fi Dotted Halo)
function DottedGlobeMatrix({ radius }: { radius: number }) {
  const points = useMemo(() => {
    const pts: number[] = [];
    const count = 1400;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const r = radius + 0.04;
      pts.push(
        r * Math.cos(theta) * Math.sin(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(phi)
      );
    }
    return new Float32Array(pts);
  }, [radius]);

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(points, 3));
    return g;
  }, [points]);

  return (
    <points geometry={geo}>
      <pointsMaterial size={0.028} color="#a855f7" transparent opacity={0.45} sizeAttenuation />
    </points>
  );
}

// Tech Hub Interactive Marker Component
function HubMarker({
  hub,
  radius,
  isSelected,
  onSelect,
}: {
  hub: (typeof TECH_HUBS)[0];
  radius: number;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const position = useMemo(() => latLngToVector3(hub.lat, hub.lng, radius), [hub, radius]);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ringRef.current) {
      const scale = 1 + Math.sin(clock.getElapsedTime() * 3.5 + hub.lat) * 0.25;
      ringRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group position={position}>
      {/* Center Beacon Dot */}
      <mesh onClick={(e) => { e.stopPropagation(); onSelect(); }} className="cursor-pointer">
        <sphereGeometry args={[hub.isHQ ? 0.045 : 0.03, 16, 16]} />
        <meshBasicMaterial color={hub.isHQ ? "#ffffff" : "#c084fc"} />
      </mesh>

      {/* Pulsing Outer Ring */}
      <mesh ref={ringRef}>
        <sphereGeometry args={[hub.isHQ ? 0.075 : 0.05, 16, 16]} />
        <meshBasicMaterial
          color={hub.isHQ ? "#c084fc" : "#818cf8"}
          transparent
          opacity={hub.isHQ ? 0.5 : 0.3}
          wireframe
        />
      </mesh>

      {/* Interactive Tooltip Card */}
      {isSelected && (
        <Html position={[0, hub.isHQ ? 0.14 : 0.1, 0]} center distanceFactor={8} zIndexRange={[100, 0]}>
          <div className="liquid-glass-card rounded-2xl p-3 shadow-xl border border-purple-400/40 text-left w-48 pointer-events-auto bg-slate-950/90 backdrop-blur-md">
            <div className="flex items-center gap-1.5 mb-1">
              <span className={`w-2 h-2 rounded-full ${hub.isHQ ? "bg-[#c084fc] animate-pulse" : "bg-[#818cf8]"}`} />
              <span className="text-[10px] font-mono uppercase font-bold text-[#c084fc]">
                {hub.isHQ ? "Brandex Primary Hub" : "Global Edge Node"}
              </span>
            </div>
            <h4 className="text-xs font-bold text-white leading-tight font-display">{hub.name}</h4>
            <p className="text-[10px] text-slate-300 mt-0.5 leading-snug">{hub.status}</p>
            <div className="mt-1.5 pt-1.5 border-t border-purple-500/20 text-[9px] font-mono text-emerald-400 flex items-center gap-1">
              <ShieldCheck size={10} /> Sub-18ms Edge Latency
            </div>
          </div>
        </Html>
      )}
    </group>
  );
}

// Atmosphere Glow Shader Layer
function AtmosphereGlow({ radius }: { radius: number }) {
  return (
    <mesh>
      <sphereGeometry args={[radius * 1.08, 48, 48]} />
      <meshBasicMaterial
        color="#818cf8"
        transparent
        opacity={0.12}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

// Inner Core 3D Globe Component
function RealisticEarthScene({
  selectedHub,
  setSelectedHub,
}: {
  selectedHub: string | null;
  setSelectedHub: (name: string | null) => void;
}) {
  const globeRef = useRef<THREE.Group>(null);
  const RADIUS = 1.95;

  const { earthMap, bumpMap } = useMemo(() => createPurpleEarthCanvasTexture(), []);

  // Ambient Slow Earth Auto-Rotation
  useFrame((_, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.07;
    }
  });

  const hqPos = useMemo(() => latLngToVector3(TECH_HUBS[0].lat, TECH_HUBS[0].lng, RADIUS), [RADIUS]);

  return (
    <group ref={globeRef} rotation={[0.2, 2.3, 0]}>
      {/* 1. Main Purple Procedural Earth Sphere */}
      <mesh receiveShadow castShadow>
        <sphereGeometry args={[RADIUS, 64, 64]} />
        <meshStandardMaterial
          map={earthMap}
          bumpMap={bumpMap}
          bumpScale={0.06}
          roughness={0.45}
          metalness={0.25}
          color="#ffffff"
        />
      </mesh>

      {/* 2. Dotted Matrix Sci-Fi Sphere */}
      <DottedGlobeMatrix radius={RADIUS} />

      {/* 3. Outer Atmosphere Glow */}
      <AtmosphereGlow radius={RADIUS} />

      {/* 4. Global Hub Markers */}
      {TECH_HUBS.map((hub) => (
        <HubMarker
          key={hub.name}
          hub={hub}
          radius={RADIUS}
          isSelected={selectedHub === hub.name}
          onSelect={() => setSelectedHub(selectedHub === hub.name ? null : hub.name)}
        />
      ))}

      {/* 5. Inter-Continental High-Speed Fiber Arcs */}
      {TECH_HUBS.slice(1).map((hub, i) => {
        const destPos = latLngToVector3(hub.lat, hub.lng, RADIUS);
        return (
          <group key={`arc-${hub.name}`}>
            <NetworkArc start={hqPos} end={destPos} radius={RADIUS} />
            <ArcParticle start={hqPos} end={destPos} radius={RADIUS} speed={1.1} delay={i * 0.18} />
          </group>
        );
      })}
    </group>
  );
}

export default function EarthGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedHub, setSelectedHub] = useState<string | null>("Bangalore HQ");
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "100px" }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] xl:h-[520px] flex items-center justify-center select-none"
    >
      {/* Ambient Purple / Indigo Halo Backlight */}
      <div className="absolute w-80 h-80 rounded-full bg-[#4f47e6]/25 blur-3xl pointer-events-none" />
      <div className="absolute w-96 h-96 rounded-full bg-[#818cf8]/15 blur-3xl pointer-events-none" />

      {isInView && (
        <Canvas
          camera={{ position: [0, 0.3, 5.2], fov: 46 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          className="cursor-grab active:cursor-grabbing"
        >
          <ambientLight intensity={1.6} />
          <directionalLight position={[10, 8, 5]} intensity={2.5} color="#ffffff" />
          <directionalLight position={[-10, -5, -5]} intensity={0.9} color="#818cf8" />

          <RealisticEarthScene selectedHub={selectedHub} setSelectedHub={setSelectedHub} />

          {/* Full Interactive 3D OrbitControls */}
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
    </div>
  );
}
