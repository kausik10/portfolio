import { MenuIcon, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

type NavItems = { id: number; label: string };
const navItems: NavItems[] = [
  { id: 1, label: "Home" },
  { id: 2, label: "About" },
  { id: 3, label: "Projects" },
  { id: 4, label: "Contact" },
  { id: 5, label: "Blog" },
];
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const { pathname } = useLocation();

  const handleScroll = () => {
    const currentScrollTop = window.scrollY;
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  const handleScrollToFooter = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navList = navItems.map((item, index) => {
    const isActiveLink = pathname === `/${item.label.toLowerCase()}`;

    return (
      <li key={index}>
        {item.label === "Contact" ? (
          <button
            onClick={handleScrollToFooter}
            className={`cursor-pointer text-xl font-semibold transition ${isActiveLink ? "text-primary_border" : "text-light_text"} hover:text-primary_border hover:underline`}
          >
            {item.label}
          </button>
        ) : (
          <Link
            to={`/${item.label.toLowerCase()}`}
            className={`cursor-pointer text-xl font-semibold transition ${isActiveLink ? "text-primary_border" : "text-light_text"} hover:text-primary_border hover:underline`}
          >
            {item.label}
          </Link>
        )}
      </li>
    );
  });
  return (
    <>
      <header
        className={` ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"} fixed top-0 z-10 flex h-24 w-full items-center justify-center bg-dark_nav text-light_text shadow-xl`}
      >
        <nav className="flex w-11/12 max-w-[1280px] items-center justify-between  text-light_text md:w-9/12">
          <Link to="/">
            <div className="z-50 flex flex-row items-center justify-between gap-4 text-2xl font-bold text-light_text hover:cursor-pointer  hover:text-secondary_border">
              <img src="Kausik.png" alt="Kausik" width={48} height={36} />
              <p className="">Kausik Paudel</p>
            </div>
          </Link>

          <div className="z-50 flex h-24 items-center justify-center lg:hidden">
            {isMenuOpen ? (
              <X
                className="text-2xl font-bold hover:cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            ) : (
              <MenuIcon
                className="text-2xl font-bold hover:cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            )}
          </div>

          {/* for mobile responsivenss */}
          <section
            className={` ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"} absolute right-0 top-24 z-30 w-screen bg-dark_nav bg-opacity-80 backdrop-blur-sm transition-all ease-in-out lg:hidden ${
              isMenuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {isMenuOpen && (
              <ul
                className="ml-12 flex w-full flex-col gap-4 p-4"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {navList}
              </ul>
            )}
          </section>

          <ul className="style-none hidden gap-10 lg:flex ">{navList}</ul>
        </nav>
      </header>
    </>
  );
}
