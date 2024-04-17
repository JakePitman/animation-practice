"use client";
import { useAnimationContext } from "./AnimationContext";

type ButtonProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};
const Button = ({ label, isActive, onClick }: ButtonProps) => {
  const activeStyles = "border-b-white";
  return (
    <button
      onClick={() => onClick()}
      className={
        "px-6 text-3xl h-min border-transparent border-2" +
        " " +
        (isActive ? activeStyles : "")
      }
    >
      {label}
    </button>
  );
};

export const Buttons = () => {
  const { animationName, setAnimationName } = useAnimationContext();
  const activeStyles = "border-b-white";

  return (
    <div className="z-10 absolute  h-full w-full text-white flex justify-center items-end pb-64">
      <Button
        label="Sleeping"
        isActive={animationName === "Sleeping"}
        onClick={() => setAnimationName("Sleeping")}
      />
      <Button
        label="Idle"
        isActive={animationName === "Idle"}
        onClick={() => setAnimationName("Idle")}
      />
      <Button
        label="Explaining"
        isActive={animationName === "Explaining"}
        onClick={() => setAnimationName("Explaining")}
      />
      <Button
        label="Laughing"
        isActive={animationName === "Laughing"}
        onClick={() => setAnimationName("Laughing")}
      />
      <Button
        label="Shocked"
        isActive={animationName === "ShockedOutside"}
        onClick={() => setAnimationName("ShockedOutside")}
      />
      <Button
        label="Idle-Outside"
        isActive={animationName === "IdleOutside"}
        onClick={() => setAnimationName("IdleOutside")}
      />
      <Button
        label="Peering"
        isActive={animationName === "LookingOutside"}
        onClick={() => setAnimationName("LookingOutside")}
      />
      <Button
        label="Typing"
        isActive={animationName === "Typing"}
        onClick={() => setAnimationName("Typing")}
      />
      <Button
        label="Reading"
        isActive={animationName === "ReadingScreen"}
        onClick={() => setAnimationName("ReadingScreen")}
      />
      <Button
        label="Pondering"
        isActive={animationName === "PonderingScreen"}
        onClick={() => setAnimationName("PonderingScreen")}
      />
      <Button
        label="Shocked-Screen"
        isActive={animationName === "ShockedScreen"}
        onClick={() => setAnimationName("ShockedScreen")}
      />
    </div>
  );
};
