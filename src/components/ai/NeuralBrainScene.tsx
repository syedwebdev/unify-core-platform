"use client";
import { useMemo, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Line, Sphere, Trail } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";

/** Digital brain: two mirrored hemispheres made of glowing nodes + synapse lines. */
function BrainHemisphere({ side = 1 }: { side?: 1 | -1 }) {
  const group = useRef<THREE.Group>(null);
  const nodes = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const count = 90;
    for (let i = 0; i < count; i++) {
      // fibonacci half-sphere
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const phi = i * Math.PI * (3 - Math.sqrt(5));
      let x = Math.cos(phi) * r;
      let z = Math.sin(phi) * r;
      if (x * side < 0) x = -x; // keep on one side
      const rad = 1.35 + (Math.sin(i * 4.1) * 0.05);
      pts.push(new THREE.Vector3(x * rad, y * rad, z * rad));
    }
    return pts;
  }, [side]);

  const edges = useMemo(() => {
    const list: [THREE.Vector3, THREE.Vector3][] = [];
    for (let i = 0; i < nodes.length; i++) {
      // connect to 2 nearest neighbours
      const dists = nodes
        .map((n, j) => ({ j, d: n.distanceTo(nodes[i]) }))
        .filter((x) => x.j !== i)
        .sort((a, b) => a.d - b.d)
        .slice(0, 2);
      for (const { j } of dists) list.push([nodes[i], nodes[j]]);
    }
    return list;
  }, [nodes]);

  useFrame((_, dt) => {
    if (group.current) group.current.rotation.y += dt * 0.12 * side;
  });

  return (
    <group ref={group}>
      {nodes.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.025, 10, 10]} />
          <meshBasicMaterial
            color={side > 0 ? "#67E8F9" : "#A5B4FC"}
            toneMapped={false}
          />
        </mesh>
      ))}
      {edges.map(([a, b], i) => (
        <Line
          key={i}
          points={[a, b]}
          color={side > 0 ? "#0EA5E9" : "#4F46E5"}
          transparent
          opacity={0.35}
          lineWidth={0.6}
        />
      ))}
    </group>
  );
}

/** A light bead traveling along a curved synapse — the "thought" signal. */
function Synapse({ seed = 0 }: { seed?: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const curve = useMemo(() => {
    const rnd = (n: number) => Math.sin(seed * 9.13 + n) * 0.5 + 0.5;
    const a = new THREE.Vector3((rnd(1) - 0.5) * 2.6, (rnd(2) - 0.5) * 2.2, (rnd(3) - 0.5) * 2.6);
    const b = new THREE.Vector3((rnd(4) - 0.5) * 2.6, (rnd(5) - 0.5) * 2.2, (rnd(6) - 0.5) * 2.6);
    const mid = new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5);
    mid.y += rnd(7) * 0.8;
    return new THREE.CatmullRomCurve3([a, mid, b]);
  }, [seed]);
  const speed = 0.15 + ((seed * 0.13) % 0.25);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = (clock.getElapsedTime() * speed + seed * 0.31) % 1;
    const p = curve.getPoint(t);
    ref.current.position.copy(p);
  });
  return (
    <Trail width={1.6} length={4} color={"#67E8F9"} attenuation={(w) => w}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshBasicMaterial color="#67E8F9" toneMapped={false} />
      </mesh>
    </Trail>
  );
}

function Core() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.2;
  });
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
      <Icosahedron ref={ref as any} args={[0.55, 2]}>
        <meshPhysicalMaterial
          color="#4F46E5"
          emissive="#0EA5E9"
          emissiveIntensity={0.6}
          roughness={0.15}
          metalness={0.5}
          transmission={0.5}
          thickness={1}
          clearcoat={1}
        />
      </Icosahedron>
      <Sphere args={[0.7, 32, 32]}>
        <meshBasicMaterial color="#67E8F9" wireframe transparent opacity={0.25} />
      </Sphere>
    </Float>
  );
}

export default function NeuralBrainScene() {
  const synapses = useMemo(() => Array.from({ length: 12 }, (_, i) => i + 1), []);
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5.2], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 3, 3]} intensity={1.6} color="#67E8F9" />
      <pointLight position={[-3, -2, -3]} intensity={1.4} color="#4F46E5" />
      <Suspense fallback={null}>
        <Core />
        <BrainHemisphere side={1} />
        <BrainHemisphere side={-1} />
        {synapses.map((s) => (
          <Synapse key={s} seed={s} />
        ))}
      </Suspense>
      <EffectComposer>
        <Bloom intensity={1.1} luminanceThreshold={0.15} luminanceSmoothing={0.9} mipmapBlur />
        <Vignette eskil={false} offset={0.2} darkness={0.75} />
      </EffectComposer>
    </Canvas>
  );
}