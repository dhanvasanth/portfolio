import React from "react";
import { FlipWords } from "./ui/flip-words";
import { Spotlight } from "./ui/Spotlight";

export function FlipWordsDemo() {
  const words = [" Student", "Competitive coder", "Web developer", "Team-player"];

  return (
    <div className="overflow-hidden h-[20rem] w-[51rem] flex justify-center items-center border-transparent border-2 rounded-xl relative bottom-20 left-5 bg-black p-20">
       <Spotlight
             className="h-[48vh] w-[60vw] top-28 left-64"
            fill="gray"
            />
     
      <div className="text-5xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 p-5 py-5">
        I am  a
        <FlipWords words={words} /> <br />
        Seeking Oppurtunities to 
        <p>Innovate</p>
      
      </div>
    </div>
  );
}
