import { useState, useEffect } from 'react';
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { GrGraphQl } from "react-icons/gr";
import { FaGolang } from "react-icons/fa6";
import { FaRust } from "react-icons/fa";
import "../App.css";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const texts = [
  "Web Developer.",
  "Mobile App Developer.",
  "Linux Enthusiast.",
  "Full Stack Developer.",
  "Writer ✍.",
  "Rugby Player 🏉.",
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
    <>
    <Helmet>
      <title>Portfolio | Kausik</title>
    </Helmet>
    <div className='h-full w-full bg-dark_bg'>
    <section className="w-11/12 md:w-9/12 max-w-[1280px] mx-auto xl:h-screen  flex flex-col justify-start gap-8 lg:gap-16 lg:justify-between lg:flex-row items-center text-light_text pb-8">
      <div className="transform transition-transform duration-300 lg:hover:scale-110 flex justify-center items-center mt-6 lg:p-0 pt-24 hover:cursor-pointer">
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
        <span className='flex flex-row gap-4 md:gap-8 text-3xl md:text-5xl lg:text-6xl mt-8'>
          <FaReact />
          <SiExpress />
          <FaNodeJs />
          <GrGraphQl />
          <FaGolang />
          <FaRust />
        </span>
        
      </div>
    </section>
   

      {/* About Me section */}
    <div className='w-full bg-dark_bg_secondary'> 


    <section className="w-11/12 md:w-9/12 max-w-[1280px] mx-auto xl:h-screen flex flex-col justify-start md:justify-center gap-8 items-center text-center md:text-left md:pt-8 pb-4">
    <h2 className="md:hidden text-5xl  font-bold mb-4 lg:pt-24 pt-8"><span className='text-light_text'>About </span> Me</h2>
    <div className='flex flex-col md:flex-row justify-start items-center md:justify-between w-full'>
      <span className='flex flex-col lg:w-1/2 items-start justify-between text-justify lg:text-xl tracking-wide text-lg'>
        <p className="text-start mb-4">
          Hello beautiful people! I am <strong>Kausik Paudel</strong> 
        </p>
        <p className="text-start mb-4">
          I am a tech enthusiast    
        </p>
        <p className="text-start mb-4">
          I am a full-stack developer with a passion for building web and mobile applications.    
        </p>
        <p className="text-start mb-4">
         Linux is my second home! Of course, my chair and desk are my first home. 
        </p>
        <p className="text-start mb-4">
         I am a huge fan of open-source software and I love to contribute to the community.
        </p>
        <p className="text-start mb-4">
         I am currently learning AI, ML, ReactNative and Golang.
        </p>
        <p className="text-start mb-4">
          I am a writer and I love to write about tech, life, and everything in between.
        </p>
        <p className="text-start mb-4">
          I am a rugby player and I love to play rugby. I am a huge fan of Beauden Barrett.
        </p>
      </span>
      <div className="hidden lg:w-1/2 md:flex justify-center items-center mt-6 lg:p-0 pt-24 hover:cursor-pointer">
        <img src="about_me.png" alt="About Me" className="w-full h-auto max-w-[400px] max-h-[400px]  object-cover" />
      </div>
    </div>
    
      <Link to='/about' className="bg-primary_btn text-light_text hover:text-dark_text py-2 px-4 rounded hover:bg-secondary_btn">Read More</Link>
    
  </section>
  </div>

    
</div>
    </>

    
);
  
}
export default HomePage;
