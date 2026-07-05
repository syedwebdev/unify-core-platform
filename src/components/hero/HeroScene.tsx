"use client";
import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, Icosahedron, Sphere, Torus } from "@react-three/drei";
import { EffectComposer, Bloom, ChromaticAberration, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";

function CoreSphere() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.y += dt * 0.15;
      ref.current.rotation.x += dt * 0.05;
    }
  });
  return (
    <group ref={ref}>
      {/* Solid glassy core */}
      <Sphere args={[1.05, 64, 64]}>
        <meshPhysicalMaterial
          color="#4F46E5"
          roughness={0.15}
          metalness={0.35}
          transmission={0.55}
          thickness={1.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          ior={1.4}
          emissive="#0EA5E9"
          emissiveIntensity={0.15}
        />
      </Sphere>
      {/* Wireframe shell */}
      <Icosahedron args={[1.35, 2]}>
        <meshBasicMaterial color="#67E8F9" wireframe transparent opacity={0.35} />
      </Icosahedron>
      {/* Rings */}
      <Torus args={[1.75, 0.008, 16, 128]} rotation={[Math.PI / 2.2, 0, 0]}>
        <meshBasicMaterial color="#A5B4FC" transparent opacity={0.7} />
      </Torus>
      <Torus args={[2.05, 0.005, 16, 128]} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <meshBasicMaterial color="#67E8F9" transparent opacity={0.5} />
      </Torus>
    </group>
  );
}

function OrbitNodes() {
  const group = useRef<THREE.Group>(null);
  const positions = useMemo(() => {
    const arr: [number, number, number][] = [];
    const count = 14;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const r = 2.4 + (i % 3) * 0.35;
      const y = Math.sin(i * 1.7) * 0.6;
      arr.push([Math.cos(angle) * r, y, Math.sin(angle) * r]);
    }
    return arr;
  }, []);

  useFrame((_, dt) => {
    if (group.current) group.current.rotation.y -= dt * 0.08;
  });

  return (
    <group ref={group}>
      {positions.map((p, i) => (
        <Float key={i} speed={1.5} rotationIntensity={0.6} floatIntensity={0.8}>
          <mesh position={p}>
            <sphereGeometry args={[0.07, 16, 16]} />
            <meshStandardMaterial
              color="#67E8F9"
              emissive="#67E8F9"
              emissiveIntensity={2}
              toneMapped={false}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function CameraParallax() {
  const { camera, size } = useThree();
  const target = useRef({ x: 0, y: 0 });
  useFrame(() => {
    const onMove = (e: MouseEvent) => {
      target.current.x = (e.clientX / size.width - 0.5) * 0.6;
      target.current.y = -(e.clientY / size.height - 0.5) * 0.4;
    };
    window.onmousemove = onMove;
    camera.position.x += (target.current.x - camera.position.x) * 0.05;
    camera.position.y += (target.current.y - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      className="!absolute inset-0"
    >
      <color attach="background" args={["#00000000"]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#A5B4FC" />
      <pointLight position={[-4, -2, -3]} intensity={2} color="#0EA5E9" />
      <pointLight position={[3, 3, -2]} intensity={1.5} color="#4F46E5" />

      <Suspense fallback={null}>
        <CoreSphere />
        <OrbitNodes />
        <Environment preset="city" />
      </Suspense>

      <CameraParallax />

      <EffectComposer>
        <Bloom intensity={0.9} luminanceThreshold={0.2} luminanceSmoothing={0.9} mipmapBlur />
        <ChromaticAberration offset={[0.0006, 0.0009] as any} radialModulation={false} modulationOffset={0} />
        <Vignette eskil={false} offset={0.2} darkness={0.7} />
      </EffectComposer>
    </Canvas>
  );
}