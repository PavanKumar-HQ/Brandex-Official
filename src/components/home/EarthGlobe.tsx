import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
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

  // High Precision Continents Data
  // 1. North America
  drawLand([
    [71, -165], [71, -145], [69, -135], [60, -125], [58, -130], [54, -132],
    [48, -124], [40, -124], [34, -120], [30, -115], [23, -110], [20, -105],
    [16, -93], [14, -87], [8, -78], [10, -75], [16, -83], [19, -91],
    [22, -97], [29, -95], [30, -88], [25, -81], [28, -80], [35, -75],
    [42, -70], [45, -66], [47, -53], [52, -56], [58, -62], [62, -78],
    [55, -82], [52, -92], [62, -94], [68, -108], [71, -120], [71, -165]
  ], "#3c2182", "#5530b8");

  // 2. South America
  drawLand([
    [12, -72], [10, -62], [6, -52], [0, -48], [-3, -40], [-6, -35],
    [-12, -37], [-18, -39], [-23, -43], [-28, -48], [-34, -53], [-39, -58],
    [-46, -66], [-53, -69], [-55, -68], [-54, -72], [-48, -74], [-40, -73],
    [-30, -71], [-20, -70], [-10, -78], [0, -80], [6, -77], [10, -75], [12, -72]
  ], "#341c73", "#4d29a6");

  // 3. Africa
  drawLand([
    [36, -6], [36, 10], [34, 11], [31, 32], [30, 33], [24, 37],
    [12, 43], [12, 51], [8, 48], [4, 42], [-2, 40], [-10, 40],
    [-15, 40], [-25, 33], [-33, 27], [-34, 18], [-28, 15], [-20, 12],
    [-10, 14], [0, 9], [4, 7], [5, -1], [5, -7], [8, -13],
    [15, -17], [22, -17], [28, -13], [34, -7], [36, -6]
  ], "#432491", "#5d35c4");

  // 4. Europe
  drawLand([
    [36, -9], [43, -9], [44, -1], [49, -1], [51, 2], [54, 8],
    [57, 10], [62, 5], [71, 28], [68, 44], [60, 50], [54, 40],
    [45, 30], [44, 15], [38, 15], [37, 22], [41, 28], [36, 28], [36, -9]
  ], "#3c2182", "#5530b8");

  // 5. Eurasia & Siberia (Russia / Northern Asia)
  drawLand([
    [72, 30], [70, 60], [73, 80], [76, 105], [74, 140], [70, 160],
    [66, 170], [60, 163], [54, 142], [43, 132], [38, 128], [37, 126],
    [32, 120], [22, 114], [21, 108], [12, 108], [8, 103], [12, 100],
    [22, 92], [28, 70], [38, 55], [45, 50], [55, 60], [60, 50], [72, 30]
  ], "#3c2182", "#5530b8");

  // 6. Indian Subcontinent (High-Precision Peninsula)
  drawLand([
    [35, 74], [31, 70], [25, 68], [23, 69], [21, 70], [19, 72],
    [15, 74], [11, 76], [8, 77.5], [10, 79], [13, 80], [16, 81],
    [18, 83], [21, 87], [24, 90], [27, 88], [28, 85], [30, 80], [35, 74]
  ], "#4f47e6", "#6366f1");

  // 7. Middle East & Arabian Peninsula
  drawLand([
    [30, 35], [30, 48], [25, 55], [23, 58], [15, 54], [12, 45],
    [13, 43], [22, 38], [28, 35], [30, 35]
  ], "#3c2182", "#5530b8");

  // 8. Australia
  drawLand([
    [-11, 142], [-15, 145], [-20, 148], [-28, 153], [-37, 150], [-39, 145],
    [-35, 137], [-32, 130], [-34, 123], [-35, 117], [-30, 114], [-22, 114],
    [-15, 123], [-12, 132], [-11, 136], [-11, 142]
  ], "#4c269e", "#6839d4");

  // 9. British Isles
  drawLand([[58, -3], [55, -1], [50, 1], [50, -5], [55, -5], [58, -3]], "#5530b8");
  drawLand([[55, -6], [52, -6], [52, -10], [55, -9]], "#5530b8");

  // 10. Japan Archipelago
  drawLand([[45, 142], [43, 145], [40, 141], [35, 139], [33, 130], [35, 134], [40, 140], [45, 142]], "#5530b8");

  // 11. Sri Lanka
  drawLand([[9, 80], [8, 81.5], [6, 81], [7, 80], [9, 80]], "#4f47e6");

  // 12. Indonesia & Maritime Southeast Asia
  drawLand([[5, 96], [0, 100], [-5, 105], [-6, 103], [0, 98], [5, 96]], "#432491");
  drawLand([[-6, 106], [-7, 112], [-8, 114], [-8, 106], [-6, 106]], "#432491");
  drawLand([[4, 115], [0, 117], [-4, 115], [-3, 110], [2, 109], [7, 116], [4, 115]], "#432491");

  // 13. Philippines
  drawLand([[18, 121], [14, 121], [10, 124], [6, 125], [12, 122], [18, 121]], "#432491");

  // 14. New Zealand
  drawLand([[-35, 173], [-38, 177], [-41, 175], [-40, 173], [-35, 173]], "#4c269e");
  drawLand([[-41, 172], [-46, 168], [-47, 167], [-43, 171], [-41, 172]], "#4c269e");

  // 15. Greenland & Polar Caps
  drawLand([[83, -30], [77, -18], [70, -22], [60, -43], [65, -52], [76, -60], [82, -60], [83, -30]], "#9385cf", "#b4a6ed");
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
      <mesh>
        <sphereGeometry args={[hub.isHQ ? 0.048 : 0.032, 16, 16]} />
        <meshBasicMaterial color={hub.isHQ ? "#ffffff" : "#c084fc"} />
      </mesh>

      {/* Pulsing Outer Ring */}
      <mesh ref={ringRef}>
        <sphereGeometry args={[hub.isHQ ? 0.08 : 0.055, 16, 16]} />
        <meshBasicMaterial
          color={hub.isHQ ? "#c084fc" : "#818cf8"}
          transparent
          opacity={hub.isHQ ? 0.6 : 0.35}
          wireframe
        />
      </mesh>
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
