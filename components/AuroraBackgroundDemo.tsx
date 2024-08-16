"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { SparklesCore } from "./ui/sparkles";
import But from "./But";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { FloatingDockDemo } from "./floatingDock";

export function AuroraBackgroundDemo() {
  const words = [
    {
      text: "A",
    },
    {
      text: "PROACTIVE",
    },
    {
      text: "CODER",
    },
    
  ];
  return (
    <div id="home">
     
    <AuroraBackground>
    
       <TextGenerateEffect
          words="HI.. I AM DHAN VASANTH"
        className="textg"
        />   
        
        <div className="relative top-[130px] right-[20px]">
         <TypewriterEffect words={words}/>
        </div>
      <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={20}
          className="absolute h-full w-full z-1000 right-[7rem]"
          particleColor="#FFFFFF"
        />
      
      <motion.div
        initial={{ opacity: 0.0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.1,
          duration: 1.3,
          ease: "easeInOut",
        }}
        className="relative flex flex-row gap-4 items-center justify-center right-[90px] "
      >
        <div className="relative right-[24rem] bottom-[5rem]">
          <div className="cardz">
            <div className="cont">
              <img className="my" src="/prof.jpeg" alt="" />
            </div>
            <div className="child">
            </div>
            <button className="btn"> Hire me</button>
          </div>
        </div>


        <div  className="md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center relative left-[-280px] top-[40px]">
        {/* <a href="" download="/college.jpg"><But /></a> */}
        </div>
      </motion.div>
      
    </AuroraBackground>
    
    </div>
  );
}
