"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Cube } from "./Cube";

export const Experience = () => {
  return (
    <Canvas camera={{ position: [20, 15, 10] }}>
      <color args={["black"]} attach="background" />
      <OrbitControls />
      <ambientLight intensity={2} />
      <pointLight position={[0, 8, 0]} intensity={400} />

      <Cube />
    </Canvas>
  );
};
