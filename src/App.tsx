import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
// import HomePage from './pages/Homepage';
// import Projects from './pages/Projects';
// import Services from './pages/Services';
// import Contact from './pages/Contact';
export default function App() {
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    
      // Show the preloader for 2 seconds
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);
 
  
  return (
    <>
       {
          loading ? (
            <Preloader />
          ) : (

            
    <>
          <Navbar />
          <section className="bg-dark_bg w-full h-screen flex justify-center items-center">
           <Outlet />
          </section>
          <Footer />
        
      </>
        )
     }
    </>
  )
}
