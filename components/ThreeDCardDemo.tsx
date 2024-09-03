// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import React from "react";
// import { CardBody, CardContainer, CardItem } from "./ui/3dcard";
// import Link from "next/link";
// import { gridItems } from './data'
// import { Spotlight } from "./ui/Spotlight"
// import { FlipWordsDemo } from "./FlipWordsDemo";
// import { BackgroundGradientAnimation } from "./ui/background-gradient";

// export function ThreeDCardDemo() {
//   return (
//     <section  className='relative top-[400px]'>
           
//     <div className=" flex flex-row flex-wrap relative ">
//     {gridItems.map((item,i) => (
//       <CardContainer className={item.className}>
       
//         <CardBody className={(i!=3)?"black relative w-auto sm:w-[30rem] h-auto rounded-xl p-6 border":"relative group/card border-transparent w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"}>
          
//           {((i!=2)&&(i!=1)&&(i!=3))?<Spotlight
//               className="h-[40vh] w-[80vw] bottom-7 left-56"
//               fill="white"
//               />:null}
          
//           {(i!=3)?
//           <CardItem
//             translateZ="50"
//             className="text"
//           >
//           {item.title}
//           </CardItem>:
//           <CardItem className="w-full ">
                  
//                  <BackgroundGradientAnimation>
//                   <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none ">
//                     <CardItem
//                       translateZ="50"
//                       className="text"
//                     >
          
//                         <div className="bg-clip-text  drop-shadow-2xl p-5 ">
//                           <h1 className="text-5xl"> Web developer</h1> <h1 className="text-3xl">&</h1> <h1 className="text-5xl">Web <br />designer </h1>
//                         </div>
//                   </CardItem>
//                   </div>
//                 </BackgroundGradientAnimation>
//                 </CardItem>}
//           <CardItem
//             as="p"
//             translateZ="60"
//             className={(i==5)?"text-neutral-500 max-w-sm mt-2 dark:text-neutral-300 text-xl h-7"
//             :"text-neutral-500 max-w-sm mt-2 dark:text-neutral-300 text-xl"}
//           >
//             {item.description}
//           </CardItem>
//           {((i!=1)&&(i!=2)&&(i!=3))?<CardItem translateZ="100" className="w-full mt-4">
//             <Image
//               src={item.img}
//               height="1000"
//               width="1000"
//               className={item.imgclass}
//               alt="thumbnail"
//             />
//           </CardItem>:null}
//           {/*{(i==3)?<CardItem className="w-full ">
//                  <BackgroundGradientAnimation>
//                   <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl">
//                     <div className="bg-clip-text  drop-shadow-2xl ">
//                      <h1> Web developer</h1> <h1 className="text-center">&</h1> <h1>Web designer </h1>
//                     </div>
//                   </div>
//                 </BackgroundGradientAnimation>
//                 </CardItem>:null}*/}
//         </CardBody>
        
//       </CardContainer>
      
//         ))
//         } 
//         <FlipWordsDemo/>
//         </div>
      
//     </section>
    
//   );
// }
// {/*
//    <h1 className="relative left-[587px] text-3xl p-2 bold z-30">
//         ABOUT
//       </h1>
// {gridItems.map((item,i)=>(
            
//             <CardContainer className="inter-var">
//         <CardBody className="bg-blue-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
//         <CardItem
//           translateZ="50"
//           className="text-2xl font-bold text-neutral-600 dark:text-white"
//         >
//           {item.title}
//         </CardItem>
//         <CardItem
//           as="p"
//           translateZ="60"
//           className="text-neutral-500 max-w-sm mt-2 dark:text-neutral-300 text-xl"
//         >
//           {item.description}
//         </CardItem>
//         <CardItem translateZ="100" className="w-full mt-4">
//           <Image
//             src={item.img}
//             height="1000"
//             width="1000"
//             className="h-50 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//             alt="thumbnail"
//           />
//         </CardItem>
        
//       </CardBody>
//       </CardContainer>
//         ))} */}
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3dcard";
import Link from "next/link";
import { gridItems } from './data'
import { Spotlight } from "./ui/Spotlight"
import { FlipWordsDemo } from "./FlipWordsDemo";
import { BackgroundGradientAnimation } from "./ui/background-gradient";

export function ThreeDCardDemo() {
  return (
    <section className='relative top-[400px]'>
      <div className="flex flex-row flex-wrap relative">
        {gridItems.map((item, i) => (
          <CardContainer key={i} className={item.className}>
            <CardBody className={(i !== 3) ? "black relative w-auto sm:w-[30rem] h-auto rounded-xl p-6 border" : "relative group/card border-transparent w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"}>
              {((i !== 2) && (i !== 1) && (i !== 3)) ? (
                <Spotlight
                  className="h-[40vh] w-[80vw] bottom-7 left-56"
                  fill="white"
                />
              ) : null}

              {(i !== 3) ? (
                <CardItem translateZ="50" className="text">
                  {item.title}
                </CardItem>
              ) : (
                <CardItem className="w-full">
                  <BackgroundGradientAnimation>
                    <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none">
                      <CardItem translateZ="50" className="text">
                        <div className="bg-clip-text drop-shadow-2xl p-5">
                          <h1 className="text-5xl">Web developer</h1>
                          <h1 className="text-3xl">&</h1>
                          <h1 className="text-5xl">Web <br />designer</h1>
                        </div>
                      </CardItem>
                    </div>
                  </BackgroundGradientAnimation>
                </CardItem>
              )}

              <CardItem
                as="p"
                translateZ="60"
                className={(i === 5) ? "text-neutral-500 max-w-sm mt-2 dark:text-neutral-300 text-xl h-7" : "text-neutral-500 max-w-sm mt-2 dark:text-neutral-300 text-xl"}
              >
                {item.description}
              </CardItem>

              {((i !== 1) && (i !== 2) && (i !== 3)) ? (
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={item.img}
                    height="1000"
                    width="1000"
                    className={item.imgclass}
                    alt="thumbnail"
                  />
                </CardItem>
              ) : null}
            </CardBody>
          </CardContainer>
        ))}
        <FlipWordsDemo />
      </div>
    </section>);
}