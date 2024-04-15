"use client";
import { useState } from "react";
import { createContext, useContext } from "react";

type AnimationName = "Idle" | "Typing" | "Explaining";
type AnimationContext = {
  animationName: AnimationName;
  setAnimationName: React.Dispatch<React.SetStateAction<AnimationName>>;
} | null;

const AnimationContext = createContext<AnimationContext>(null);

type Props = {
  children: React.ReactNode;
};

export const AnimationProvider = ({ children }: Props) => {
  const [animationName, setAnimationName] = useState<AnimationName>("Idle");

  return (
    <AnimationContext.Provider value={{ animationName, setAnimationName }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationContext = () => {
  const context = useContext(AnimationContext);

  if (!context) {
    throw new Error("usePageContext must be used within a PageProvider");
  }

  return context;
};
