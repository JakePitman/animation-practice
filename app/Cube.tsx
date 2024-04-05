import { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useAnimationContext } from "./AnimationContext";

export const Cube = () => {
  const { animationName } = useAnimationContext();
  // @ts-ignore
  const { nodes, animations } = useGLTF("/scene.glb");
  const { ref, mixer, names, actions, clips } = useAnimations(animations);

  const animation = actions[animationName];
  if (actions && animation) {
    animation.play();
  }

  return <primitive object={nodes.Scene} ref={ref} />;
};
