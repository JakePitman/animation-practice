import { Experience } from "./Experience";
import { Buttons } from "./Buttons";

export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh] relative">
      <Buttons />
      <Experience />
    </main>
  );
}
