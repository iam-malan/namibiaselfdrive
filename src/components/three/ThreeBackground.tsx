"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Mesh, Vector3 } from "three";
import { Environment, Float } from "@react-three/drei";

interface FloatingShapeProps {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
}

function FloatingShape({ position, rotation, scale }: FloatingShapeProps) {
  const mesh = useRef<Mesh>(null!);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.getElapsedTime() * 0.3;
    mesh.current.rotation.y = state.clock.getElapsedTime() * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh
        ref={mesh}
        position={position}
        rotation={rotation}
        scale={scale}
      >
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#ffffff"
          metalness={0.2}
          roughness={0.1}
          envMapIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

export default function ThreeBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 45 }}
      style={{ background: "linear-gradient(to bottom, #1a1a1a, #2a2a2a)" }}
    >
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      <FloatingShape
        position={[-4, 2, -5]}
        rotation={[0, 0, Math.PI / 4]}
        scale={[1, 1, 1]}
      />
      <FloatingShape
        position={[4, -2, -10]}
        rotation={[0, 0, Math.PI / 4]}
        scale={[1.5, 1.5, 1.5]}
      />
      <FloatingShape
        position={[0, 3, -15]}
        rotation={[0, 0, Math.PI / 4]}
        scale={[2, 2, 2]}
      />
    </Canvas>
  );
}
