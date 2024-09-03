"use client";
import React from 'react'
import { motion } from 'framer-motion';

import { GlareCard } from './ui/glare-card';
const di  = () =>{
  for(let i=0;i<=50;i++){
    return(

    <motion.div className={"di left-["+i+"px]"}>
    </motion.div>
    );
  }
}
const experience = () => {
  return (
    <div id="edu">
       <motion.div  initial={{ backgroundImage:" -webkit-linear-gradient(rgb(174, 0, 0),rgb(122, 0, 122),rgb(0, 0, 173))",width:100,height:0,borderRadius:50,position:"absolute",top:2100,left:10,filter:"blur(100px)"}} 
       whileInView={{ backgroundImage:" -webkit-linear-gradient(rgb(174, 0, 0, 0.76),rgb(122, 0, 122),rgb(0, 0, 173))",width:300,height:300,borderRadius:50,position:"absolute",top:2300,left:110}} 
       transition={{duration:2}}></motion.div>

       <motion.div  initial={{ backgroundImage:" -webkit-linear-gradient(rgb(174, 0, 0),rgb(122, 0, 122),rgb(0, 0, 173))",width:100,height:0,borderRadius:50,position:"absolute",top:2400,left:500,filter:"blur(100px)"}} 
       whileInView={{ backgroundImage:" -webkit-linear-gradient(rgb(174, 0, 0, 0.76),rgb(122, 0, 122),rgb(0, 0, 173))",width:300,height:300,borderRadius:50,position:"absolute",top:2600,left:900}} 
       transition={{duration:2}}></motion.div>
  
  <motion.div  initial={{ backgroundImage:" -webkit-linear-gradient(rgb(174, 0, 0),rgb(122, 0, 122),rgb(0, 0, 173))",width:100,height:0,borderRadius:50,position:"absolute",top:2700,left:10,filter:"blur(100px)"}} 
       whileInView={{ backgroundImage:" -webkit-linear-gradient(rgb(174, 0, 0, 0.76),rgb(122, 0, 122),rgb(0, 0, 173))",width:300,height:300,borderRadius:50,position:"absolute",top:2900,left:110}} 
       transition={{duration:2}}></motion.div>
       
  <motion.div  initial={{ backgroundImage:" -webkit-linear-gradient(rgb(174, 0, 0),rgb(122, 0, 122),rgb(0, 0, 173))",width:100,height:0,borderRadius:50,position:"absolute",top:2950,left:1000,filter:"blur(100px)"}} 
       whileInView={{ backgroundImage:" -webkit-linear-gradient(rgb(174, 0, 0, 0.76),rgb(122, 0, 122),rgb(0, 0, 173))",width:300,height:300,borderRadius:50,position:"absolute",top:3150,left:900}} 
       transition={{duration:2}}></motion.div>
       

      <div className='relative top-[350px] text-center text-4xl'><p className='texth text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent  py-8'>MY EDU PATH</p></div>
    <motion.div initial={{height:13}} whileInView={{height:1200}} transition={{duration:4}} viewport={{once:true}}
    className="conti">
        
        <motion.div initial = {{opacity:0,filter:"blur(10px)",transform:"translateX(-90%)"}} whileInView = {{opacity:1,filter:"blur(0px)",transform:"translateX(0)"}} transition={{duration:0.5}} 
        className="box">
             <div className='flex flex-row'>
              <h1 className="year">2020 - 2021 </h1>
              <div class="tri"></div>
             </div>
            <GlareCard className="flex flex-col items-center justify-center ">
              <h1 className="text-white font-bold text-xl relative">GRADE -X</h1><br />
              <div className='relative top-2 left-2 text-center'>
              <p className=''> Completed grade x at Sacred Heart school (CBSE)</p>
              </div><br />
              <p> Grade  :  92.5%</p>
            </GlareCard>
        </motion.div>
        <motion.div initial = {{opacity:0,filter:"blur(10px)",transform:"translateX(90%)"}} whileInView = {{opacity:1,filter:"blur(0px)",transform:"translateX(0)"}} transition={{duration:0.5}}
        className="box1">
            <div className='flex flex-row'>
              
              <h1 className="yearl">2021 - 2022 </h1>
              <div class="trir"></div>
             </div>
            
            <GlareCard className="flex flex-col items-center justify-center ">
            <h1 className="text-white font-bold text-xl mt-4">GRADE -XI</h1><br />
            <div className='relative top-2 left-2 text-center'>
              <p> Completed grade XI at Chellammal Vidyalaya  (CBSE)</p>
              </div><br />
              <p> Grade  :  95.5%</p>
            </GlareCard>
        </motion.div>
        <motion.div initial = {{opacity:0,filter:"blur(10px)",transform:"translateX(-90%)"}} whileInView = {{opacity:1,filter:"blur(0px)",transform:"translateX(0)"}} transition={{duration:0.5}}
        className="box">
            <div className='flex flex-row relative'>
              <h1 className="year">2022 - 2023 </h1>
              <div class="tri"></div>
             </div>

            <GlareCard className="flex flex-col items-center justify-center ">
            <h1 className="text-white font-bold text-xl mt-4">GRADE -XII</h1> <br />
            <div className='relative top-2 left-2 text-center'>
              <p> Completed grade x at Chellammal Vidyalaya  (CBSE)</p>
              </div><br />
              <p> Grade  :  93.25%</p>
            </GlareCard>
        </motion.div>
        <motion.div initial = {{opacity:0,filter:"blur(10px)",transform:"translateX(90%)"}} whileInView = {{opacity:1,filter:"blur(0px)",transform:"translateX(0)"}} transition={{duration:0.5}}
        className="box1">
            <div className='flex flex-row'>
              
              <h1 className="yearl">2023 - 2027 </h1>
              <div class="trir"></div>
             </div>
        
            <GlareCard className="flex flex-col items-center justify-center ">
            <h1 className="text-white font-bold text-xl mt-4">B.TECH</h1><br />
            <div className='relative top-2 left-2 text-center'>
              <p> Pursuing ELECTRONICS AND COMPUTER ENGINEERING at VIT University (chennai) <br /> <br /> Batch year : 2nd year</p>
              </div>
              <p> CGPA  :  9.01</p>
            </GlareCard>
        </motion.div>

    </motion.div>
    </div>
  );
}

export default experience