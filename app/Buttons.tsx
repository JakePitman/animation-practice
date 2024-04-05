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
        label="Float"
        isActive={animationName === "Float"}
        onClick={() => setAnimationName("Float")}
      />
      <Button
        label="Flip"
        isActive={animationName === "Flip"}
        onClick={() => setAnimationName("Flip")}
      />
    </div>
  );
};
