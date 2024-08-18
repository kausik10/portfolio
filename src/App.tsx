// import { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./utils/scrollToTop";
// import Preloader from './components/Preloader';

export default function App() {
  // // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 4000); // Duration of the preloader animation

  //   return () => clearTimeout(timer); // Clear timeout on component unmount
  // }, []);

  return (
    <>
      {/* <AnimatePresence>
        {loading ? (
          <Preloader key="preloader" />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.2 }}
            transition={{ duration: 0.5 }}
          > */}
      <ScrollToTop />
      <div className="bg-dark_bg">
        <Navbar />

        <Outlet />

        <Footer />
      </div>
      {/* </motion.div> */}
      {/* // )} */}
      {/* // </AnimatePresence> */}
    </>
  );
}
