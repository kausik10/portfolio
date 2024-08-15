import { useEffect } from "react"
import { Helmet } from "react-helmet-async"


function Blogs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }
  , []);
  
  return (
    <>
    <Helmet>
      <title>Blogs | Kausik</title>
    </Helmet>
    <div className='h-screen w-full bg-dark_bg'>
    <section className="w-[90%] mx-auto h-full md:w-[70%] flex flex-col justify-start gap-16 lg:justify-between lg:flex-row items-center  text-light_text">
      
      {/* About Me section */}<p>Blogs</p>
      
    </section>
    </div>
    </>
  )
}

export default Blogs