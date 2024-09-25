"use client";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the mobile menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className='w-full fixed top-0 left-0 z-50 bg-white bg-opacity-10 backdrop-blur-lg shadow-lg'>
      <nav className='max-w-7xl mx-auto px-5 sm:px-10 py-4 flex justify-between items-center'>
        <a
          className='text-xl lg:text-2xl font-bold text-white cursor-pointer'
          href='#Hero'
        >
          MERN Stack Developer
        </a>

        {/* Hamburger Icon for Mobile */}
        <div className='lg:hidden'>
          <button
            id='mobile-menu-btn'
            className='text-white focus:outline-none'
            onClick={toggleMenu}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              ></path>
            </svg>
          </button>
        </div>

        {/* Navbar Links for Desktop */}
        <ul className='hidden lg:flex space-x-6 text-white font-medium'>
          <li>
            <a href='#skills' className='hover:text-gray-300 transition'>
              Skills
            </a>
          </li>
          <li>
            <a
              href='#workExperience'
              className='hover:text-gray-300 transition'
            >
              Work Experience
            </a>
          </li>
          <li>
            <a href='#proofOfWork' className='hover:text-gray-300 transition'>
              Proof of Work
            </a>
          </li>
          <li>
            <a href='#contact' className='hover:text-gray-300 transition'>
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        <ul
          id='mobile-menu'
          className={`lg:hidden flex-col space-y-4 absolute top-16 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-lg shadow-lg py-4 px-6 text-center ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          <li>
            <a
              href='#skills'
              className='text-black hover:text-gray-600 transition'
              onClick={closeMenu}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href='#workExperience'
              className='text-black hover:text-gray-600 transition'
              onClick={closeMenu}
            >
              Work Experience
            </a>
          </li>
          <li>
            <a
              href='#proofOfWork'
              className='text-black hover:text-gray-600 transition'
              onClick={closeMenu}
            >
              Proof of Work
            </a>
          </li>
          <li>
            <a
              href='#contact'
              className='text-black hover:text-gray-600 transition'
              onClick={closeMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
