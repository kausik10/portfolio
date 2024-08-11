import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import "../App.css";

const Preloader = () => {
  const [text, setText] = useState('');
  const fullName = 'KAAUSIK PAUDEL'; // Replace with your desired text

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullName.length -1 ) {
        setText((prev) => prev + fullName[index]);
        index++;
      } else {
        clearInterval(interval); // Stop the interval when the text is fully displayed
      }
    }, 200); // Adjust the speed of the text animation here

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [fullName]);

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-black relative"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} // Fade out
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-text_light text-3xl md:text-5xl font-bold relative z-10"
        initial={{ x: '100%' }} // Start off the screen to the right
        animate={{ x: 0 }} // Move into view
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {text}
        <span className="absolute ml-2 bottom-0 h-12 w-1 bg-dark_bg animate-blink"></span>
      </motion.h1>
    </motion.div>
  );
};

export default Preloader;
