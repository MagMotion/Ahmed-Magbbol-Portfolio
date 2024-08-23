import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/ahmedMagbool.jpeg";
import { motion } from "framer-motion";

const container = (delay)=>({
  hidden:{x:-100, opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5,delay: delay}
  },
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-6 text-5xl font-thin tracking-tight lg:mt-16 lg:text-6xl">Ahmed Ali Magbool</motion.h1>
            <motion.span
             variants={container(0.2)}
             initial="hidden"
             animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">Motion | Graphic Designer</motion.span>
            <motion.p
             variants={container(0.4)}
             initial="hidden"
             animate="visible"
            className="my-2 max-w-l py-6 font-light tracking-tighter md:py-2">{HERO_CONTENT}</motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-end">
                <motion.img 
                initial={{x:100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:1,delay:0.2}}
                className="rounded-md lg:max-w-md" src={profilePic} alt="Ahmed Magbool" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
