"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { CardBody, CardContainer, CardItem } from "./ui/threeDcard";
import { Spotlight } from "./ui/Spotlight";
export function HeroHighlightDemo() {
  return (
    <div id = "tech" className="h-[1300px] relative top-[20rem] z-0">
      {/* <div className="h-[50rem] w-full overflow-hidden  dark:bg-grid-white/[0.2] bg-grid-black/[0.8] relative flex flex-wrap items-center justify-center"> */}
      {/* Radial gradient for the container to give a faded look */}
       {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>  */}
        {/* <div className="hover:tracking-[10px] transition-all 0.5s">MY SKILLS</div> */}
        {/* <Spotlight
              className="h-[40rem] w-[100em] bottom-7 left-[20em] "
              fill="white"
              />
        <Spotlight
        className="h-[30rem] w-[100em] top-[18rem] left-[15em]"
        fill="white"
        /> */}
    <div className=" h-[40rem] w-full rounded-md flex flex-wrap md:items-center md:justify-center antialiased bg-grid-white/[0.9] relative ">
    <div className="gradient-mask-t-0 absolute pointer-events-none inset-0 flex items-center bg-black-100 justify-center h-[40rem] w-full"></div>
    <div className="gradient-mask-b-0 absolute pointer-events-none inset-0 flex items-center bg-black-100 justify-center h-[40rem] w-full"></div>
    <div className="gradient-mask-l-0 absolute pointer-events-none inset-0 flex items-center bg-black-100 justify-center h-[40rem] w-full"></div>
    <div className="gradient-mask-r-0 absolute pointer-events-none inset-0 flex items-center bg-black-100 justify-center h-[40rem] w-full"></div>

      <Spotlight
        className="top-[2em] left-[500px] h-[1000px] w-[70em] "
        fill="white"
      />
      
        <p className="class text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent  py-8">
        TECH STACK
      </p>
        
        <div className="vcont z-[3000] flex items-center justify-center">
        <motion.div initial={{transform:"translateY(50px)",opacity:0,filter:"blur(20px)"}} whileInView={{transform:"translateY(0)",opacity:1,filter:"blur(0px)"}} transition={{duration:0.9, delay:0}}
        className="code" >          
           <CardContainer className="w-3px">
              <CardItem translateZ="0"
                className="text">
              <div className="vimg"><img src="/c.png"  className="v" alt="" /></div>
              </CardItem>
           </CardContainer>
           <div className="per">
              <h4 className="text-[16px]">SKILL LEVEL : Intermediate</h4>
              <div className="border border-white-100 rounded-[50px] overflow-hidden h-[20px]"><div className="h-[18px] rounded-[50px]  perco"></div></div>
           </div>
         </motion.div>
 
         <motion.div initial={{transform:"translateY(50px)",opacity:0,filter:"blur(20px)"}} whileInView={{transform:"translateY(0)",opacity:1,filter:"blur(0px)"}} transition={{duration:0.9 , delay:0.3}} 
         className="code">            
          <CardContainer className="w-10px">
            <CardItem translateZ="0"
              className="text">
            <div className="vimg"><img src="/cpp.png"  className="v" alt="" /></div>
            </CardItem>
        </CardContainer>
            <div className="per">
                  <h4 className="text-[16px]">SKILL LEVEL : Intermediate</h4>
                  <div className="border border-white-100 rounded-[50px] overflow-hidden h-[20px]"><div className="h-[18px] rounded-[50px]  perco"></div></div>
            </div>
        </motion.div>

        <motion.div initial={{transform:"translateY(50px)",opacity:0,filter:"blur(20px)"}} whileInView={{transform:"translateY(0)",opacity:1,filter:"blur(0px)"}} transition={{duration:0.9, delay:0.5}}
        className="code">
        <CardContainer className="w-10px">
          <CardItem translateZ="0"
            className="text">
          <div className="vimg"><img src="/py.png"  className="v" alt="" /></div>
          </CardItem>
        </CardContainer>
        <div className="per">
              <h4 className="text-[16px]">SKILL LEVEL : Intermediate</h4>
               <div className="border border-white-100 rounded-[50px] overflow-hidden h-[20px]"><div className="h-[18px] rounded-[50px]   perco"></div></div>
            </div>
        </motion.div>

        <motion.div initial={{transform:"translateY(50px)",opacity:0,filter:"blur(20px)"}} whileInView={{transform:"translateY(0)",opacity:1,filter:"blur(0px)"}} transition={{duration:0.9, delay:0.7}} 
        className="code">            
          <CardContainer className="w-10px">
          <CardItem translateZ="0"
            className="text">
          <div className="vimg"><img src="/html.png"  className="v" alt="" /></div>
          </CardItem>
        </CardContainer>
        <div className="per">
              <h4 className="text-[16px]">SKILL LEVEL : Intermediate</h4>
               <div className="border rounded-[50px] overflow-hidden border-white-100 h-[20px]"><div className="h-[18px] rounded-[50px]  perco"></div></div>
            </div>
        </motion.div>

       <motion.div initial={{transform:"translateY(50px)",opacity:0,filter:"blur(20px)"}} whileInView={{transform:"translateY(0)",opacity:1,filter:"blur(0px)"}} transition={{duration:0.9, delay:0.9}} 
       className="code">    
        <CardContainer className="w-10px ">
          <CardItem translateZ="0"
            className="text">
          <div className="vimg"><img src="/css.png"  className="v" alt="" /></div>
          </CardItem>
        </CardContainer>
        <div className="per">
              <h4 className="text-[16px]">SKILL LEVEL : Intermediate</h4>
               <div className="border rounded-[50px] overflow-hidden border-white-100 h-[20px]"><div className="h-[18px] rounded-[50px] perco"></div></div>
            </div>
        </motion.div>
        
        </div>



        <div className="vcont flex items-center justify-center bottom-10">
        <motion.div initial={{transform:"translateY(50px)",opacity:0,filter:"blur(20px)"}} whileInView={{transform:"translateY(0)",opacity:1,filter:"blur(0px)"}} transition={{duration:0.9, delay:1.1}}
        className="code" >    
              <CardContainer className="w-10px ">
              
              <CardItem translateZ="0"
                className="text">
              <div className="vimg"><img src="/js.png"  className="v" alt="" /></div>
              </CardItem>
          
            </CardContainer>
            <div className="per">
              <h4 className="text-[16px]">SKILL LEVEL : Intermediate</h4>
               <div className="border border-white-100 rounded-[50px] overflow-hidden h-[20px]"><div className="h-[18px] rounded-[50px]  perco"></div></div>
            </div>
            </motion.div>
            <motion.div initial={{transform:"translateY(50px)",opacity:0,filter:"blur(20px)"}} whileInView={{transform:"translateY(0)",opacity:1,filter:"blur(0px)"}} transition={{duration:0.9, delay:1.3}}
            className="code" >                
              <CardContainer className="w-10px ">
              
                <CardItem translateZ="0"
                  className="text">
                <div className="vimg"><img src="/node.png"  className="v" alt="" /></div>
                </CardItem>
            
              </CardContainer>
              <div className="per">
              <h4 className="text-[16px]">SKILL LEVEL : Intermediate</h4>
               <div className="border border-white-100 rounded-[50px] overflow-hidden h-[20px]"><div className="h-[18px] rounded-[50px]  perco"></div></div>
            </div>
              </motion.div>
          <motion.div initial={{transform:"translateY(50px)",opacity:0,filter:"blur(20px)"}} whileInView={{transform:"translateY(0)",opacity:1,filter:"blur(0px)"}} transition={{duration:0.9, delay:1.5}}
          className="code" >            
            <CardContainer className="w-10px ">
        
          <CardItem translateZ="0"
            className="text">
          <div className="vimg"><img src="/react.png"  className="v" alt="" /></div>
          </CardItem>
       
        </CardContainer>
        <div className="per">
              <h4 className="text-[16px]">SKILL LEVEL : Intermediate</h4>
               <div className="border border-white-100 rounded-[50px] overflow-hidden h-[20px]"><div className="h-[18px] rounded-[50px]  perco"></div></div>
            </div>
        </motion.div>
        </div>
    </div>
    {/* <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 1,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="items-center text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto relative bottom-[50px] "
      >
        
      </motion.h1>
    </HeroHighlight> */}
    {/* <motion.div  style={{ backgroundImage:" -webkit-linear-gradient(rgb(174, 0, 0),rgb(122, 0, 122),rgb(0, 0, 173))",width:700,height:700,borderRadius:900,position:"relative",right:500,bottom:700,filter:"blur(200px)"}} 
       animate={{ rotate: 360 }}
       transition={{ ease: "linear", duration: 2, repeat: Infinity }}></motion.div>
    <motion.div  style={{ backgroundImage:" -webkit-linear-gradient(rgb(0, 0, 173),rgb(122, 0, 122),rgb(174, 0, 0))",width:700,height:700,borderRadius:900,position:"relative",right:-1100,bottom:1300,filter:"blur(240px)"}} 
       animate={{ rotate: 360 }}
       transition={{ ease: "linear", duration: 2, repeat: Infinity }}></motion.div> */}
    </div>
  );
}
