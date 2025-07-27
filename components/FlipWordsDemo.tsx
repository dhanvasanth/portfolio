import React from "react";
import { FlipWords } from "./ui/flip-words";
import { Spotlight } from "./ui/Spotlight";
import { motion } from "framer-motion";
export function FlipWordsDemo() {
  const words = [" Student", "Competitive coder", "Web developer", "Team-player"];

  return (
    <div>
      <motion.div  initial={{ backgroundImage:" -webkit-linear-gradient(rgb(174, 0, 0),rgb(122, 0, 122),rgb(0, 0, 173))",width:100,height:0,borderRadius:50,position:"absolute",top:500,left:10,filter:"blur(100px)"}} 
       whileInView={{ backgroundImage:" -webkit-linear-gradient(rgb(174, 0, 0, 0.76),rgb(122, 0, 122),rgb(0, 0, 173))",width:300,height:300,borderRadius:50,position:"absolute",top:500,left:10}} 
       transition={{duration:2}}></motion.div>
      <div className="overflow-hidden h-[20rem] w-[49.5rem] flex justify-center items-center border-transparent border-2 rounded-xl relative bottom-20 left-5 bg-black p-20">
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
    </div>
  );
}
