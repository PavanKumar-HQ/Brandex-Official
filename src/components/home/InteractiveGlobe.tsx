import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Float } from "@react-three/drei";
import * as THREE from "three";
import { Zap, Globe2, Radio, Server } from "lucide-react";

// Convert latitude and longitude to 3D Cartesian coordinates
function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

// Global Edge Points
const CITIES = [
  { name: "Bangalore", lat: 12.9716, lng: 77.5946, ttfb: "4ms", isHQ: true },
  { name: "San Francisco", lat: 37.7749, lng: -122.4194, ttfb: "14ms" },
  { name: "London", lat: 51.5074, lng: -0.1278, ttfb: "11ms" },
  { name: "Tokyo", lat: 35.6762, lng: 139.6503, ttfb: "16ms" },
  { name: "Frankfurt", lat: 50.1109, lng: 8.6821, ttfb: "9ms" },
  { name: "Singapore", lat: 1.3521, lng: 103.8198, ttfb: "8ms" },
];

// 3D Connection Arcs
function ConnectionArc({ start, end, radius }: { start: THREE.Vector3; end: THREE.Vector3; radius: number }) {
  const points = useMemo(() => {
    const pList: THREE.Vector3[] = [];
    const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
    const distance = start.distanceTo(end);
    mid.normalize().multiplyScalar(radius + distance * 0.35);

    const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
    return curve.getPoints(40);
  }, [start, end, radius]);

  const lineGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    return geo;
  }, [points]);

  return (
    <primitive object={new THREE.Line(
      lineGeo,
      new THREE.LineBasicMaterial({
        color: new THREE.Color("#4f47e6"),
        transparent: true,
        opacity: 0.45,
        linewidth: 1.5,
      })
    )} />
  );
}

// 3D City Node Marker
function CityMarker({
  city,
  radius,
  onSelect,
  isSelected,
}: {
  city: (typeof CITIES)[0];
  radius: number;
  onSelect: () => void;
  isSelected: boolean;
}) {
  const pos = useMemo(() => latLngToVector3(city.lat, city.lng, radius), [city, radius]);
  const pulseRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (pulseRef.current) {
      const scale = 1 + (Math.sin(clock.getElapsedTime() * 3 + city.lat) + 1) * 0.4;
      pulseRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group position={pos}>
      {/* Outer Pulse Ring */}
      <mesh ref={pulseRef}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshBasicMaterial color="#4f47e6" transparent opacity={0.3} />
      </mesh>

      {/* Solid Core Dot */}
      <mesh onClick={(e) => { e.stopPropagation(); onSelect(); }}>
        <sphereGeometry args={[0.045, 16, 16]} />
        <meshBasicMaterial color={city.isHQ ? "#4f47e6" : "#0f172a"} />
      </mesh>

      {/* Floating 3D Tooltip Label */}
      <Html distanceFactor={8} position={[0, 0.12, 0]} center>
        <div
          onClick={(e) => { e.stopPropagation(); onSelect(); }}
          className={`px-2.5 py-1 rounded-xl text-[10px] font-mono whitespace-nowrap cursor-pointer transition-all duration-200 flex items-center gap-1.5 shadow-sm ${
            isSelected
              ? "bg-[#4f47e6] text-white border border-[#4f47e6] scale-110 font-bold shadow-[0_4px_12px_rgba(79,71,230,0.3)]"
              : "liquid-glass text-slate-800 hover:bg-white hover:text-[#4f47e6]"
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-white" : "bg-[#4f47e6]"} animate-pulse`} />
          <span className="font-semibold">{city.name}</span>
          <span className="opacity-70 font-mono">({city.ttfb})</span>
        </div>
      </Html>
    </group>
  );
}

// Point Cloud Matrix of the Globe
function GlobePoints({ radius }: { radius: number }) {
  const points = useMemo(() => {
    const coords: number[] = [];
    const count = 1400;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      coords.push(x, y, z);
    }
    return new Float32Array(coords);
  }, [radius]);

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(points, 3));
    return g;
  }, [points]);

  return (
    <points geometry={geo}>
      <pointsMaterial
        size={0.032}
        color="#4f47e6"
        transparent
        opacity={0.35}
        sizeAttenuation
      />
    </points>
  );
}

// Main 3D Globe Mesh Group
function GlobeScene({
  selectedCity,
  setSelectedCity,
}: {
  selectedCity: string;
  setSelectedCity: (name: string) => void;
}) {
  const globeGroupRef = useRef<THREE.Group>(null);
  const radius = 2.0;

  useFrame((_, delta) => {
    if (globeGroupRef.current) {
      globeGroupRef.current.rotation.y += delta * 0.12;
    }
  });

  const cityVectors = useMemo(() => {
    return CITIES.map((c) => ({
      ...c,
      vec: latLngToVector3(c.lat, c.lng, radius),
    }));
  }, [radius]);

  const bangaloreVec = useMemo(() => latLngToVector3(12.9716, 77.5946, radius), [radius]);

  return (
    <group ref={globeGroupRef}>
      {/* Inner Frosted Glass Atmosphere Sphere */}
      <mesh>
        <sphereGeometry args={[radius * 0.985, 48, 48]} />
        <meshStandardMaterial
          color="#ffffff"
          roughness={0.1}
          metalness={0.1}
          transparent
          opacity={0.65}
        />
      </mesh>

      {/* Translucent Edge Glow Ring */}
      <mesh>
        <sphereGeometry args={[radius * 1.01, 32, 32]} />
        <meshBasicMaterial
          color="#4f47e6"
          wireframe
          transparent
          opacity={0.06}
        />
      </mesh>

      {/* Point Cloud of Earth */}
      <GlobePoints radius={radius} />

      {/* Arcs between Bangalore HQ and global edge POPs */}
      {cityVectors
        .filter((c) => !c.isHQ)
        .map((c) => (
          <ConnectionArc key={c.name} start={bangaloreVec} end={c.vec} radius={radius} />
        ))}

      {/* Interactive City Nodes */}
      {CITIES.map((city) => (
        <CityMarker
          key={city.name}
          city={city}
          radius={radius}
          isSelected={selectedCity === city.name}
          onSelect={() => setSelectedCity(city.name)}
        />
      ))}
    </group>
  );
}

export default function InteractiveGlobe() {
  const [selectedCity, setSelectedCity] = useState("Bangalore");
  const activeCityData = CITIES.find((c) => c.name === selectedCity) || CITIES[0];

  return (
    <div className="relative w-full h-full flex flex-col justify-between">
      {/* Top Glass Control Bar */}
      <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-200/60 relative z-20">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#4f47e6] flex items-center justify-center text-white shadow-[0_4px_12px_rgba(79,71,230,0.3)]">
            <Radio size={16} className="animate-pulse" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <span>Brandex Global Edge Mesh</span>
              <span className="w-2 h-2 rounded-full bg-[#4f47e6] animate-ping" />
            </div>
            <div className="text-[10px] text-slate-500 font-mono">320+ Edge POPs &bull; Live Telemetry</div>
          </div>
        </div>

        {/* Selected City Pill */}
        <div className="liquid-glass-pill px-3 py-1 rounded-full flex items-center gap-1.5 text-xs font-mono font-bold text-[#4f47e6]">
          <Zap size={12} className="text-[#4f47e6]" />
          <span>{activeCityData.name}: {activeCityData.ttfb}</span>
        </div>
      </div>

      {/* 3D Canvas Viewport */}
      <div className="relative w-full h-[320px] sm:h-[360px] rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing">
        <Canvas
          camera={{ position: [0, 0, 4.8], fov: 48 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={1.2} />
          <directionalLight position={[10, 10, 8]} intensity={1.5} color="#ffffff" />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#4f47e6" />
          
          <GlobeScene selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
          
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            rotateSpeed={0.6}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI - Math.PI / 4}
          />
        </Canvas>

        {/* Interactive Drag Hint Overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <div className="liquid-glass-pill px-3 py-1 rounded-full text-[10px] font-mono font-semibold text-slate-600 flex items-center gap-1.5 shadow-xs">
            <Globe2 size={12} className="text-[#4f47e6]" />
            <span>Drag to rotate 3D mesh</span>
          </div>

          <div className="liquid-glass-pill px-3 py-1 rounded-full text-[10px] font-mono font-bold text-[#4f47e6]">
            <span>SLA 99.99%</span>
          </div>
        </div>
      </div>

      {/* Bottom City Quick-Switch Strip */}
      <div className="pt-3 mt-2 border-t border-slate-200/60 flex items-center justify-between gap-1.5 overflow-x-auto no-scrollbar relative z-20">
        {CITIES.map((c) => (
          <button
            key={c.name}
            onClick={() => setSelectedCity(c.name)}
            className={`px-2.5 py-1 rounded-xl text-[11px] font-mono transition-all duration-200 cursor-pointer flex items-center gap-1 whitespace-nowrap ${
              selectedCity === c.name
                ? "bg-[#4f47e6] text-white font-bold shadow-[0_4px_12px_rgba(79,71,230,0.3)]"
                : "liquid-glass text-slate-600 hover:text-slate-900 hover:bg-white"
            }`}
          >
            <span>{c.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
