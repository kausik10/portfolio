import React from 'react';
import {motion} from 'framer-motion';

const PreloaderAnim = () => {
  return (
    <div className="h-[100vh] overflow-hidden width-[100%] bg-[#000] text-white fixed bottom-0 top-0 left-0 right-0 z-55 flex justify-center items-center">
      <motion.div className="flex items-center justify-between h-[4rem] w-[30rem] text-4xl font-bold "
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1.5}}
      >
        <motion.span
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1.5}}
        >Coffee</motion.span>
        <motion.span
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1.5}}
        >Coding</motion.span>
        <motion.span
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1.5}}
        >& Valorant</motion.span>
      </motion.div>
    </div>
  );
}
export default PreloaderAnim;

