"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Sphere } from "@react-three/drei";
import * as THREE from "three";

/**
 * Simple 3D Noise function (simplified Simplex-ish)
 * Used to procedurally generate landmasses.
 */
function noise3D(x, y, z) {
  // Simple deterministic hash-based noise
  const X = Math.floor(x) & 255;
  const Y = Math.floor(y) & 255;
  const Z = Math.floor(z) & 255;

  // Use a simple sine-based hash for procedural continents
  const val = Math.sin(x * 0.12 + y * 0.08 + z * 0.15) * 10000;
  const val2 = Math.cos(x * 0.05 + y * 0.12 + z * 0.08) * 10000;
  return (val - Math.floor(val) + (val2 - Math.floor(val2))) / 2;
}

/**
 * Procedural Dotted Globe with Continents
 */
function ProceduralGlobe({ count = 25000, radius = 90 }) {
  const pointsRef = useRef();
  const globeRef = useRef();

  const positions = useMemo(() => {
    const p = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const rAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const px = Math.cos(theta) * rAtY * radius;
      const py = y * radius;
      const pz = Math.sin(theta) * rAtY * radius;

      // Use procedural noise to decide if this point is "land"
      // Scaling px, py, pz to get organic shapes
      const n = noise3D(px * 0.05, py * 0.05, pz * 0.05);

      // Only add points if they meet the noise threshold (creating "continents")
      if (n > 0.45) {
        p.push(px, py, pz);
      }
    }
    return new Float32Array(p);
  }, [count, radius]);

  useFrame(() => {
    if (pointsRef.current) pointsRef.current.rotation.y += 0.0012;
    if (globeRef.current) globeRef.current.rotation.y += 0.0012;
  });

  return (
    <group>
      {/* Base Solid Globe for depth (the "Earth" color) */}
      <Sphere ref={globeRef} args={[radius * 0.985, 64, 64]}>
        <meshStandardMaterial
          color="#060b1d" // Slightly blueish navy
          roughness={0.9}
          metalness={0.1}
          emissive="#000e30"
          emissiveIntensity={0.5}
        />
      </Sphere>

      {/* The Dotted Landmasses */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.9} // Smaller dots for high-res look
          color="#38bdf8"
          transparent
          opacity={0.8}
          sizeAttenuation={true}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
}

export function World() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Canvas
        camera={{ position: [0, 0, 240], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#050b18"]} />
        <ambientLight intensity={1.2} />
        <pointLight position={[100, 100, 100]} intensity={2.5} color="#06b6d4" />
        <pointLight position={[-100, -100, -100]} intensity={1.5} color="#1e3a8a" />

        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
          <ProceduralGlobe />
        </Float>

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
