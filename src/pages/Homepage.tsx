import { useState, useEffect } from 'react';
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { GrGraphQl } from "react-icons/gr";
import { FaGolang } from "react-icons/fa6";
import { FaRust } from "react-icons/fa";
import "../App.css";

const texts = [
  "web developer.",
  "mobile app developer.",
  "linux enthusiast.",
  "full stack developer.",
  "writer.",
  "rugby player.",
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
    }, isDeleting ? 50 : 120);

    return () => clearInterval(interval);
  }, [displayedText, isDeleting, currentText, index]);

  return (
    

    <div className="w-[90%] md:w-[70%] absolute flex flex-col justify-start gap-16 lg:justify-between lg:flex-row items-center h-screen text-light_text">
      <div className="transform transition-transform duration-300 lg:hover:scale-110 flex justify-center items-center mt-6  hover:cursor-pointer">
        <img src="kausik_paudel.png" alt="Kausik Paudel" className="xl:w-96 xl:h-96 lg:w-80 lg:h-80 border border-4 shadow-2xl border-primary_border rounded-full object-cover" />
      </div>
      <div className="flex flex-col items-start justify-between text-center md:text-left">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold">Bonjour, J'mapelle</p>
        <p className="text-5xl md:text-6xl lg:text-8xl font-bold mt-2 text-light_text">Kausik Paudel</p>
        <p className="text-xl lg:text-3xl font-medium mt-4 ">I am a  <span className="text-primary_border relative inline-block">
            {displayedText}
            <span className="absolute ml-2 bottom-0 h-8 w-1 bg-primary_border animate-blink"></span>
          </span>
          
          </p>
        <span className='flex flex-row gap-4 md:gap-8 text-4xl md:text-5xl lg:text-6xl mt-8'>
          <FaReact />
          <SiExpress />
          <FaNodeJs />
          <GrGraphQl />
          <FaGolang />
          <FaRust />
        </span>
        
      </div>
      
    </div>
    
);
  
}
export default HomePage;
