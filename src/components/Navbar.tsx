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
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  
  const { pathname } = useLocation();
  
  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset;
    if (currentScrollTop > lastScrollTop) {
      // Scrolling down
      setIsNavbarVisible(false);
    } else {
      // Scrolling up
      setIsNavbarVisible(true);
    }
    setLastScrollTop(currentScrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);


    const handleScrollToFooter = () => {
      const footerElement = document.getElementById('footer');
      if (footerElement) {
        footerElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

  const navList = navItems.map((item, index) => {

          const isActiveLink = pathname === `/${item.label.toLowerCase()}`;

          return (
            <li key={index} > 
            {item.label === "Contact" ? (
              <button onClick={handleScrollToFooter} className={`text-xl font-semibold transition cursor-pointer ${ isActiveLink ? 'text-primary_border' : 'text-light_text'} hover:underline hover:text-primary_border`}>{item.label}</button>
            ) : (
            <Link  to={`/${item.label.toLowerCase()}`} className={`text-xl font-semibold transition cursor-pointer ${ isActiveLink ? 'text-primary_border' : 'text-light_text'} hover:underline hover:text-primary_border`}>{item.label}</Link>
            )}
            </li> 
          );
});
 return (
  <>
    <header className={` ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'} fixed top-0 w-full h-24 bg-dark_nav text-light_text flex justify-center shadow-xl items-center z-10`}>

      <nav className="w-[90%] lg:w-[70%]  flex justify-between  items-center text-light_text" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Link to="/">
          <div className="z-50 text-2xl text-light_text flex flex-row hover:text-secondary_border items-center justify-between gap-4 font-bold  hover:cursor-pointer">
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
        className={` ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'} w-screen z-30 lg:hidden bg-dark_nav bg-opacity-80 absolute backdrop-blur-sm right-0 top-24 transition-all ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full' 
           }`} 
          onClick={(e) => e.stopPropagation()}
    >
       

          
          {isMenuOpen && (
            <ul className="flex flex-col gap-4 p-4 ml-12 w-full" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {navList}
            </ul>
          )}
          
    </section>



        <ul className="hidden style-none lg:flex gap-10 ">
          {navList} 
        </ul>
      </nav>
    </header>
   
    </>
  
  );
}
