import { MenuIcon, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';


type NavItems = {id :number, label:string}
const navItems:NavItems[] = [
  {id:1, label:"Home"},
  {id:2, label:"About"},
  {id:3, label:"Projects"},
  {id:4, label:"Contact"},
  {id:5, label:"Blogs"},
]
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const {pathname} = useLocation();
  
  const [scrolled, setScroll] = useState(false);

  useEffect(() => {
      const onScroll = () => {
            if(window.scrollY > 50){
              setScroll(true);
            } else {
             setScroll(false);
            }
        }

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [] );

  

  const navList = navItems.map((item, index) => {

          const isActiveLink = pathname === `/${item.label.toLowerCase()}`;

          return (
            <li key={index} > 
            <Link  to={`/${item.label.toLowerCase()}`} className={`text-xl font-semibold transition cursor-pointer ${ isActiveLink ? 'text-primary_border' : 'text-light_text'} hover:underline hover:text-primary_border`}>{item.label}</Link></li>
  )
});
 return (
  
    <header className={`${scrolled ? "scrolled" : ""} w-full h-24 bg-dark_nav text-light_text flex justify-center shadow-xl items-center z-10`}>

      <nav className="w-[90%] lg:w-[70%]  flex justify-between  items-center text-light_text">
        <Link to="/">
          <div className="z-50 text-2xl text-light_text flex flex-row hover:text-green-400 items-center justify-between gap-4 font-bold  hover:cursor-pointer">
            <img src="Kausik.png" alt="Kausik" width={48} height={36} />
            <p className="">Kausik Paudel</p>
          </div>
         </Link>

        <div 
            className="lg:hidden h-24 z-50 flex items-center justify-center"
            
          >
            {isMenuOpen ? (
              <X 
                className='hover:cursor-pointer text-2xl font-bold' 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            ) : (
              <MenuIcon 
                className='hover:cursor-pointer text-2xl font-bold' 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            )}
          </div>

        {/* for mobile responsivenss */}
        <section 
        className={`w-screen z-30 lg:hidden bg-dark_nav bg-opacity-80 backdrop-blur-sm fixed top-24 right-0 transition-all ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-0'
           }`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
         <div  onClick={(e) => e.stopPropagation()}>

          
          {isMenuOpen && (
            <ul className="flex flex-col gap-4 p-4 ml-12 w-full">
              {navList}
            </ul>
          )}
          </div>
    </section>



        <ul className="hidden style-none lg:flex gap-10 ">
          {navList} 
        </ul>
      </nav>
    </header>
  
  );
}
