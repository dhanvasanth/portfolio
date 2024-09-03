
import Experience from "../components/Experience";
import { InfiniteMovingCardsDemo } from "../components/InfiniteImageScroll";
import { AuroraBackgroundDemo } from "../components/AuroraBackgroundDemo";
import { LampDemo } from "../components/ui/Lamp";
import { TracingBeam } from "../components/ui/tracingbeam";
import { HeroHighlightDemo } from "../components/HeroHighlightDemo";
import { FloatingDockDemo } from "../components/floatingDock";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-1">
      <TracingBeam className="px-0 " key={10}>
      <div className="max-w-7xl w-full">
        
        <FloatingDockDemo key={1}/> 
        <AuroraBackgroundDemo key={2}/>
        <LampDemo key={3}/>
        <Experience key={4}/>
        <InfiniteMovingCardsDemo key={5}/>
        <HeroHighlightDemo key={6}/>
      </div >
      </TracingBeam>  
    </main>
  );
}
