import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Preloader = () => {
  const controls = useAnimation();

  useEffect(() => {

    const words = ['Coffee', 'Coding', 'Valorant']
    const animate = async () => {
      for (let i = 0; i < words.length; i++) {
        const word = words[i];

        for (let j = 0; j < word.length; j++) {
          await controls.start({ opacity: 1, x: 0 });
          await controls.start({ opacity: 0, x: 20 });
        }

      }
    };

    animate();
  }, [controls]);
  return (
    <>
      <div className="h-[100vh] overflow-hidden width-[100%] bg-[#000] text-white fixed bottom-0 top-0 left-0 right-0 z-55 flex justify-center items-center">

        <motion.div initial={{ opacity: 0, y: -20 }} animate={controls} transition={{ duration: 2.5 }} className="flex items-center justify-between h-[4rem] w-[30rem] text-4xl font-bold ">
          {['Coffee', 'Coding', 'Valorant'].map((word, index) => (
            <motion.span key={index} className="inline-block mx-2">
              {word}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </>

  );
}
export default Preloader;
