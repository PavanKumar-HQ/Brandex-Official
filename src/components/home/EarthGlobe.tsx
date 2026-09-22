import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

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

// Pre-load textures once globally
let globalTextures: { earthMap: THREE.Texture; bumpMap: THREE.Texture } | null = null;

function getTextures(): { earthMap: THREE.Texture; bumpMap: THREE.Texture } {
  if (globalTextures) return globalTextures;
  const loader = new THREE.TextureLoader();
  const earthMap = loader.load("/textures/purple-earth.webp");
  earthMap.wrapS = THREE.RepeatWrapping;
  earthMap.wrapT = THREE.ClampToEdgeWrapping;

  const bumpMap = loader.load("/textures/purple-bump.webp");
  bumpMap.wrapS = THREE.RepeatWrapping;
  bumpMap.wrapT = THREE.ClampToEdgeWrapping;

  globalTextures = { earthMap, bumpMap };
  return globalTextures;
}

// Glowing Pulse Arcs between Bangalore HQ and global edge cities
function NetworkArc({ points }: { points: THREE.Vector3[] }) {
  const geo = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);

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

// Dotted Outer Matrix Sphere (Holographic Sci-Fi Dotted Halo)
function DottedGlobeMatrix({ radius, isMobile }: { radius: number; isMobile: boolean }) {
  const points = useMemo(() => {
    const pts: number[] = [];
    const count = isMobile ? 650 : 1200;
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
  }, [radius, isMobile]);

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

// Atmosphere Glow Shader Layer
function AtmosphereGlow({ radius }: { radius: number }) {
  return (
    <mesh>
      <sphereGeometry args={[radius * 1.08, 32, 32]} />
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
  isMobile,
}: {
  selectedHub: string | null;
  setSelectedHub: (name: string | null) => void;
  isMobile: boolean;
}) {
  const globeRef = useRef<THREE.Group>(null);
  const RADIUS = 1.95;

  const { earthMap, bumpMap } = useMemo(() => getTextures(), []);

  // Hub coordinates
  const hubPositions = useMemo(() => {
    return TECH_HUBS.map((hub) => ({
      ...hub,
      pos: latLngToVector3(hub.lat, hub.lng, RADIUS),
    }));
  }, [RADIUS]);

  const hqPos = hubPositions[0].pos;

  // Pre-sample 40 points per arc curve so runtime particle movement requires ZERO vector allocations
  const arcsData = useMemo(() => {
    return TECH_HUBS.slice(1).map((hub) => {
      const destPos = latLngToVector3(hub.lat, hub.lng, RADIUS);
      const mid = new THREE.Vector3().addVectors(hqPos, destPos).multiplyScalar(0.5);
      const dist = hqPos.distanceTo(destPos);
      mid.normalize().multiplyScalar(RADIUS + dist * 0.28);
      const curve = new THREE.QuadraticBezierCurve3(hqPos, mid, destPos);
      const points = curve.getPoints(isMobile ? 25 : 35);
      return { hub, points };
    });
  }, [hqPos, RADIUS, isMobile]);

  // Particle Mesh References for single-loop updates
  const particleRefs = useRef<(THREE.Mesh | null)[]>([]);
  const hqRingRef = useRef<THREE.Mesh>(null);
  const lastTimeRef = useRef<number>(0);

  // Consolidated Master Frame Loop: Updates rotation, particles, and pulsing in 1 single callback
  useFrame((state, delta) => {
    const now = state.clock.getElapsedTime();

    // On mobile, throttle rendering to ~30 FPS to avoid monopolizing throttled CPU cores
    if (isMobile && now - lastTimeRef.current < 0.033) {
      return;
    }
    lastTimeRef.current = now;

    // 1. Slow Earth Auto-Rotation
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.07;
    }

    // 2. Pulse HQ beacon ring
    if (hqRingRef.current) {
      const scale = 1 + Math.sin(now * 3.5) * 0.25;
      hqRingRef.current.scale.set(scale, scale, scale);
    }

    // 3. Move Arc Particles along pre-calculated points
    arcsData.forEach((arc, i) => {
      const mesh = particleRefs.current[i];
      if (!mesh) return;
      const pts = arc.points;
      const t = (now * 0.44 + i * 0.18) % 1;
      const idx = Math.floor(t * (pts.length - 1));
      mesh.position.copy(pts[idx]);
    });
  });

  return (
    <group ref={globeRef} rotation={[0.2, 2.3, 0]}>
      {/* 1. Main Purple Procedural Earth Sphere */}
      <mesh receiveShadow castShadow>
        <sphereGeometry args={[RADIUS, isMobile ? 36 : 64, isMobile ? 36 : 64]} />
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
      <DottedGlobeMatrix radius={RADIUS} isMobile={isMobile} />

      {/* 3. Outer Atmosphere Glow */}
      <AtmosphereGlow radius={RADIUS} />

      {/* 4. Global Hub Markers */}
      {hubPositions.map((hub) => (
        <group key={hub.name} position={hub.pos}>
          <mesh>
            <sphereGeometry args={[hub.isHQ ? 0.048 : 0.032, 12, 12]} />
            <meshBasicMaterial color={hub.isHQ ? "#ffffff" : "#c084fc"} />
          </mesh>
          {hub.isHQ && (
            <mesh ref={hqRingRef}>
              <sphereGeometry args={[0.08, 12, 12]} />
              <meshBasicMaterial color="#c084fc" transparent opacity={0.6} wireframe />
            </mesh>
          )}
        </group>
      ))}

      {/* 5. Inter-Continental Arcs & Moving Particles */}
      {arcsData.map((arc, i) => (
        <group key={`arc-${arc.hub.name}`}>
          <NetworkArc points={arc.points} />
          <mesh
            ref={(el) => {
              particleRefs.current[i] = el;
            }}
          >
            <sphereGeometry args={[0.024, 8, 8]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export default function EarthGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedHub, setSelectedHub] = useState<string | null>("Bangalore HQ");
  const [isInView, setIsInView] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
    }
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
          dpr={isMobile ? 1 : [1, 1.5]}
          frameloop={isInView ? "always" : "never"}
          gl={{
            antialias: !isMobile,
            alpha: true,
            powerPreference: isMobile ? "low-power" : "high-performance",
          }}
          className="cursor-grab active:cursor-grabbing"
        >
          <ambientLight intensity={1.6} />
          <directionalLight position={[10, 8, 5]} intensity={2.5} color="#ffffff" />
          <directionalLight position={[-10, -5, -5]} intensity={0.9} color="#818cf8" />

          <RealisticEarthScene
            selectedHub={selectedHub}
            setSelectedHub={setSelectedHub}
            isMobile={isMobile}
          />

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

