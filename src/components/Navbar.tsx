import { MenuIcon, X } from 'lucide-react';
import { useState } from 'react';

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

  const navList = navItems.map((item, index) => 
            <li key={index} ><a className="text-blue-300 text-xl font-semibold transition hover:underline hover:text-blue-500 hover:transition-transform cursor-pointer">{item.label}</a></li>
  )
 return (
    <header className="w-full h-24 bg-gray-800 text-white flex justify-center items-center">

      <nav className="w-[90%]  flex justify-between  items-center text-white shadow-md">
        <div className="z-50 text-2xl text-white flex flex-row items-center justify-between gap-4 font-bold hover:color-green-400 hover:cursor-pointer">
          <img src="Kausik.png" alt="Kausik" width={48} height={36} />
          <p>Kausik Paudel</p>
        </div>

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
        className={`w-screen z-30 lg:hidden bg-gray-800 bg-opacity-50 fixed top-24 right-0 transition-transform ${
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
