import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navItem = <>
  <NavLink className={({ isActive }) => (isActive ? "text-blue-800 font-bold " : "text-white font-bold hover:text-blue-700 outline-none")} to='/'>HOME</NavLink> 
  <NavLink className={({ isActive }) => (isActive ? "text-blue-800 font-bold" : "text-white font-bold hover:text-blue-700 outline-none")} to='about'>ABOUT</NavLink> 
  <NavLink className={({ isActive }) => (isActive ? "text-blue-800 font-bold" : "text-white font-bold hover:text-blue-700 outline-none")} to='skills'>SKILLS</NavLink> 
  <NavLink className={({ isActive }) => (isActive ? "text-blue-800 font-bold" : "text-white font-bold hover:text-blue-700 outline-none")} to='education'>EDUCATION</NavLink> 
  <NavLink className={({ isActive }) => (isActive ? "text-blue-800 font-bold" : "text-white font-bold hover:text-blue-700 outline-none")} to='project'>PROJECT</NavLink> 
  <NavLink className={({ isActive }) => (isActive ? "text-blue-800 font-bold" : "text-white font-bold hover:text-blue-700 outline-none")} to='contact'>CONTACT</NavLink> 
  </>

  return (
    <nav className="bg-blue-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">My Portfolio</div>
        <div className="hidden md:flex items-center space-x-4">
          {navItem}
          <a
            href="https://github.com/debabrata101"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-700 ml-4 outline-none"
          >
            <FaGithub size={24} />
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:bg-blue-800"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-2">
            <Link
              to="/"
              exact
              className={({ isActive }) => (isActive ? "text-blue-800 font-bold" : "text-white font-bold hover:text-blue-700 outline-none")}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to=" about"
              className={({ isActive }) => (isActive ? "text-blue-800 font-bold" : "text-white font-bold hover:text-blue-700 outline-none")}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="skills"
              className={({ isActive }) => (isActive ? "text-blue-800 font-bold" : "text-white font-bold hover:text-blue-700 outline-none")}
              onClick={toggleMenu}
            >
              Skills
            </Link>
            <Link
              to="projects"
              className={({ isActive }) => (isActive ? "text-blue-800 font-bold" : "text-white font-bold hover:text-blue-700 outline-none")}
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              to="contact"
              className={({ isActive }) => (isActive ? "text-blue-800 font-bold" : "text-white font-bold hover:text-blue-700 outline-none")}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
