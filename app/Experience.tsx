"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Cube } from "./Cube";
import { Robot } from "./Robot";

export const Experience = () => {
  return (
    <Canvas camera={{ position: [5, 15, 10] }}>
      <color args={["black"]} attach="background" />
      <OrbitControls />
      <ambientLight />

      <group scale={0.5}>
        <Robot />
      </group>
      {/* <Cube /> */}
    </Canvas>
  );
};
