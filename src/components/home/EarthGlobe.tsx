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

// Cache textures so we only generate them once
let cachedTextures: { earthMap: THREE.CanvasTexture; bumpMap: THREE.CanvasTexture } | null = null;

// High-definition Procedural Purple Earth Texture Generator using True GIS Natural Earth GeoJSON
function createPurpleEarthCanvasTexture(geojson?: any): { earthMap: THREE.CanvasTexture; bumpMap: THREE.CanvasTexture } {
  const width = 1024;
  const height = 512;

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
  oceanGrad.addColorStop(0, "#070314");
  oceanGrad.addColorStop(0.25, "#0d0628");
  oceanGrad.addColorStop(0.5, "#14083a");
  oceanGrad.addColorStop(0.75, "#0d0628");
  oceanGrad.addColorStop(1, "#070314");
  ctx.fillStyle = oceanGrad;
  ctx.fillRect(0, 0, width, height);

  bCtx.fillStyle = "#000000";
  bCtx.fillRect(0, 0, width, height);

  // Helper to map lat/lng to canvas pixels (Equirectangular Projection)
  const toCanvas = (lng: number, lat: number) => {
    const x = ((lng + 180) / 360) * width;
    const y = ((90 - lat) / 180) * height;
    return [x, y];
  };

  if (geojson && geojson.features) {
    const drawGeoPolygon = (coords: number[][][], isBump = false) => {
      const targetCtx = isBump ? bCtx : ctx;
      targetCtx.save();
      targetCtx.beginPath();
      for (let r = 0; r < coords.length; r++) {
        const ring = coords[r];
        if (!ring || ring.length === 0) continue;
        const [startX, startY] = toCanvas(ring[0][0], ring[0][1]);
        targetCtx.moveTo(startX, startY);
        for (let i = 1; i < ring.length; i++) {
          const [x, y] = toCanvas(ring[i][0], ring[i][1]);
          targetCtx.lineTo(x, y);
        }
      }
      targetCtx.closePath();

      if (!isBump) {
        // Luminous Coastal Glow
        targetCtx.shadowColor = "#818cf8";
        targetCtx.shadowBlur = 10;
        targetCtx.fillStyle = "#3c2182";
        targetCtx.fill();

        // Sharp Boundary Outline
        targetCtx.shadowBlur = 0;
        targetCtx.strokeStyle = "#6366f1";
        targetCtx.lineWidth = 1.2;
        targetCtx.stroke();
      } else {
        targetCtx.fillStyle = "#ffffff";
        targetCtx.fill();
      }
      targetCtx.restore();
    };

    // Draw all true GIS geographical features (Asia, Australia, Europe, Americas, Africa, Antarctica, Oceania)
    geojson.features.forEach((feature: any) => {
      const geom = feature.geometry;
      if (!geom) return;
      if (geom.type === "Polygon") {
        drawGeoPolygon(geom.coordinates, false);
        drawGeoPolygon(geom.coordinates, true);
      } else if (geom.type === "MultiPolygon") {
        geom.coordinates.forEach((poly: any) => {
          drawGeoPolygon(poly, false);
          drawGeoPolygon(poly, true);
        });
      }
    });
  }

  // High-Tech Dotted Matrix Rasterization over True Landmasses
  ctx.fillStyle = "rgba(192, 132, 252, 0.55)";
  const dotSpacing = 8;
  const imgData = bCtx.getImageData(0, 0, width, height);
  for (let dy = 0; dy < height; dy += dotSpacing) {
    for (let dx = 0; dx < width; dx += dotSpacing) {
      const idx = (dy * width + dx) * 4;
      if (imgData.data[idx] > 50) {
        ctx.beginPath();
        ctx.arc(dx, dy, 1.25, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  // Subtle Global Coordinate Matrix Lines (Latitude & Longitude)
  ctx.strokeStyle = "rgba(129, 140, 248, 0.12)";
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
  earthMap.needsUpdate = true;

  const bumpMap = new THREE.CanvasTexture(bumpCanvas);
  bumpMap.wrapS = THREE.RepeatWrapping;
  bumpMap.wrapT = THREE.ClampToEdgeWrapping;
  bumpMap.needsUpdate = true;

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

function RealisticEarthScene({
  selectedHub,
  setSelectedHub,
}: {
  selectedHub: string | null;
  setSelectedHub: (name: string | null) => void;
}) {
  const globeRef = useRef<THREE.Group>(null);
  const RADIUS = 1.95;

  const [textures, setTextures] = useState<{ earthMap: THREE.CanvasTexture; bumpMap: THREE.CanvasTexture }>(() => {
    if (cachedTextures) return cachedTextures;
    const initial = createPurpleEarthCanvasTexture();
    return initial;
  });

  useEffect(() => {
    if (cachedTextures) return;

    // Load Natural Earth 110m true geographic landmasses for instant rendering
    fetch("/world-land.json")
      .then((res) => res.json())
      .then((geojson) => {
        const trueGIS = createPurpleEarthCanvasTexture(geojson);
        cachedTextures = trueGIS;
        setTextures(trueGIS);
      })
      .catch((err) => console.error("Error loading world map data:", err));
  }, []);

  const { earthMap, bumpMap } = textures;

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
      className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px] xl:h-[520px] flex items-center justify-center select-none"
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
