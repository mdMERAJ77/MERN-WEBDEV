import { useState } from "react";
import photo from "../assets/photo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";

const Navbar = () => {
  const [hamburger, sethamburger] = useState(false);
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Contact" },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed z-50 bg-white">
      <div className="flex items-center justify-between h-16">
        <div className="flex space-x-2">
          <img src={photo} alt="" className="w-12 h-12 rounded-full" />
          <h1 className="font-semibold text-xl cursor-pointer">
            MER<span className="text-red-500 text-2xl">AJ</span>
            <p className="text-sm">Web Developer</p>
          </h1>
        </div>

        {/* DESKTOP Navbar */}
        <div>
          <ul className="hidden md:flex space-x-8">
            {navItems.map(({ id, text }) => (
              <li
                key={id}
                className="hover:scale-105 duration-200 cursor-pointer"
              >
                <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  className=""
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
          <div className="md:hidden" onClick={() => sethamburger(!hamburger)}>
            {hamburger ? <RxCross2 size={24} /> : <RxHamburgerMenu size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      {hamburger && (
        <div className="animated-gradient bg-gradient-to-br from-black via-emerald-800 to-lime-900 text-lime-400">
          <ul className="md:hidden w-[-20] h-50 flex flex-col items-center justify-center text-center space-y-5 text-xl">
            {navItems.map(({ id, text }) => (
              <li
                key={id}
                className="hover:scale-105 duration-200 cursor-pointer font-semibold"
              >
                <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  className=""
                  onClick={() => sethamburger(false)} // closes menu after click
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
