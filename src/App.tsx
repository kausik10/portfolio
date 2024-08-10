import { useState, useEffect } from 'react';
// import {BrowserRouter as Router} from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
export default function App() {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsAnimating(false);
    }, 3000);
  }, [setIsAnimating]);
  return (
    <>
      {isAnimating ? (<Preloader />) : (

        <div className=" h-screen flex flex-col w-full ">
          <Navbar />
          <section className="w-full flex flex-1 justify-center items-center text-center font-xl">
            <p className="w-[80%] ">
              Hello Everyone, This is Kausik's portfolio.
              Is this working fine?
            </p>
          </section>
          <Footer />
        </div>
      )}
    </>
  )
}
