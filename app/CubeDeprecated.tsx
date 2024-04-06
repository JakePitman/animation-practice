import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useAnimationContext } from "./AnimationContext";
import { AnimationAction } from "three";

// This component isn't used, but demonstrates how to use the useAnimations hook with an imported Scene. This method requires using ref objects, and creating a component with gltfjsx is much easier, as seen in Cube.tsx
export const Cube = () => {
  const { animationName } = useAnimationContext();
  // @ts-ignore
  const { nodes, animations } = useGLTF("/scene.glb");
  const { ref, mixer, names, actions, clips } = useAnimations(animations);
  const currentAnimation = useRef<AnimationAction | null>(null);

  useEffect(() => {
    const animation = actions[animationName];
    if (actions && animation) {
      if (currentAnimation.current) {
        currentAnimation.current.stop();
      }
      animation.play();
      currentAnimation.current = animation;
    }
  }, [animationName, actions]);

  return <primitive object={nodes.Scene} ref={ref} />;
};
