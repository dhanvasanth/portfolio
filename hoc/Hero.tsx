import { Spotlight } from "../components/ui/Spotlight"
import { TextGenerateEffect } from "../components/ui/TextGenerateEffect"
import MagicButton from "../components/MagicButton"
import { FaLocationArrow } from "react-icons/fa6";
const Hero = () => {
  return (
    <div className="pb-20 pt-36">
        <div>
           
            
            <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="white" />
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.02] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        </div>
        <div className="flex justify-center relative my-20 z-10">
            
                 <TextGenerateEffect
                     words="HI.. I AM DHAN VASANTH"
                    className="textg"
                 />   
                  <TextGenerateEffect
                    words="A PRO-ACTIVE CODER"
                    className="texth"
                 />   
                  <a href="#about">
                    <MagicButton
                      title="Get Resume"
                      icon={<FaLocationArrow />}
                      position="right"
                    />
                  </a>
                  
        </div>
    </div>
  )
}

export default Hero
