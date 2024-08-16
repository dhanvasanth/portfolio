
import Grid from "../components/Grid";
import { navItems } from "../components/data";
import { FloatingNav } from "../components/ui/FloatingNavbar";
import { ThreeDCardDemo } from "../components/ThreeDCardDemo";
import Experience from "../components/Experience";
import { HeroParallaxDemo } from "../components/HeroParallaxDemo";
import { AuroraBackgroundDemo } from "../components/AuroraBackgroundDemo";
import { LampDemo } from "../components/ui/Lamp";
import { SparklesCore } from "../components/ui/sparkles";
import { TracingBeam } from "../components/ui/tracingbeam";
import { HeroHighlightDemo } from "../components/HeroHighlightDemo";
import { FloatingDockDemo } from "../components/floatingDock";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-1">
      <TracingBeam className="px-0">
      <div className="max-w-7xl w-full">
        
        <FloatingDockDemo/> 
        <AuroraBackgroundDemo />
        <LampDemo/>
        <Experience />
        <HeroParallaxDemo/>
        <HeroHighlightDemo/>
        
        
      </div >
      </TracingBeam>
    </main>
  );
}
