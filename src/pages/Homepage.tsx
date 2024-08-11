import { useState, useEffect } from 'react';
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { GrGraphQl } from "react-icons/gr";
import { FaGolang } from "react-icons/fa6";
import { FaRust } from "react-icons/fa";

const texts = [
  "web developer",
  "mobile app developer",
  "linux enthusiast.",
  "full stack developer"
];

const HomePage = () => {
  const [currentText, setCurrentText] = useState(texts[0]);
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isDeleting) {
        setDisplayedText(prev => prev.slice(0, -1));
        if (displayedText === '') {
          setIsDeleting(false);
          setIndex(prevIndex => (prevIndex + 1) % texts.length);
          setCurrentText(texts[(index + 1) % texts.length]);
        }
      } else {
        setDisplayedText(prev => currentText.slice(0, prev.length + 1));
        if (displayedText === currentText) {
          setIsDeleting(true);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearInterval(interval);
  }, [displayedText, isDeleting, currentText, index]);

  return (
    

    <div className="w-[90%] md:w-[70%] absolute flex flex-col justify-center gap-16 md:justify-between md:flex-row items-center h-screen text-light_text">
      <div className="flex flex-col items-start justify-between text-center md:text-left">
        <p className="text-3xl md:text-5xl font-semibold">Bonjour, J'mapelle</p>
        <p className="text-5xl md:text-8xl font-bold mt-2 text-light_text">Kausik Paudel</p>
        <p className="text-xl md:text-2xl font-medium mt-4 ">I am a <span className='text-primary_border'>{displayedText}</span></p>
        <span className='flex flex-row gap-4 md:gap-8 text-4xl md:text-6xl mt-8'>
          <FaReact />
          <SiExpress />
          <FaNodeJs />
          <GrGraphQl />
          <FaGolang />
          <FaRust />
        </span>
        
      </div>
      <div className="transform transition-transform duration-300 hover:scale-110 flex justify-center items-center mt-6 md:mt-0 hover:cursor-pointer">
        <img src="kausik_paudel.png" alt="Kausik Paudel" className="w-96 h-96 border border-4 shadow-2xl border-primary_border rounded-full object-cover" />
      </div>
    </div>
    
);
  
}
export default HomePage;
