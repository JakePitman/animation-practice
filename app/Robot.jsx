/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/robot.glb -o app/Robot.jsx 
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import HolographicMaterial from "./HolographicMaterial";
import { useAnimationContext } from "./AnimationContext";

const holographicMaterial = new HolographicMaterial({});

export const Robot = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/robot.glb");
  const { actions, names } = useAnimations(animations, group);
  const { animationName } = useAnimationContext();

  useEffect(() => {
    actions[animationName]?.reset().fadeIn(0.3).play();

    return () => {
      actions[animationName]?.fadeOut(0.3);
    };
  }, [actions, animationName]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.DEF_Torso001} />
          <primitive object={nodes.DEF_topLeftScreen001} />
          <primitive object={nodes.DEF_bottomLeftScreen001} />
          <primitive object={nodes.DEF_rightScreen001} />
          <skinnedMesh
            name="Eye-Right"
            geometry={nodes["Eye-Right"].geometry}
            material={holographicMaterial}
            skeleton={nodes["Eye-Right"].skeleton}
          />
          <skinnedMesh
            name="Screen-1"
            geometry={nodes["Screen-1"].geometry}
            material={holographicMaterial}
            skeleton={nodes["Screen-1"].skeleton}
          />
          <skinnedMesh
            name="Torso"
            geometry={nodes.Torso.geometry}
            material={holographicMaterial}
            skeleton={nodes.Torso.skeleton}
          />
        </group>
        <mesh
          name="Keyboard"
          geometry={nodes.Keyboard.geometry}
          material={holographicMaterial}
          position={[-0.353, 1.868, 0.247]}
          rotation={[0, -0.96, 0]}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/robot.glb");
