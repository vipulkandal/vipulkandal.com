import React from "react";

const Header = () => {
  return (
    <header className='w-full fixed top-0 left-0 z-50 bg-white bg-opacity-10 backdrop-blur-lg shadow-lg'>
      <nav className='max-w-7xl mx-auto px-5 sm:px-10 py-4 flex justify-between items-center'>
        <a className='text-2xl font-bold text-white cursor-pointer' href='#Hero'>MERN Stack Developer</a>
        <ul className='flex space-x-6 text-white font-medium'>
          <li>
            <a href='#skills' className='hover:text-gray-300 transition'>
              Skills
            </a>
          </li>
          <li>
            <a href='#workExperience' className='hover:text-gray-300 transition'>
              Work Experience
            </a>
          </li>
          <li>
            <a href='#portfolio' className='hover:text-gray-300 transition'>
              Proof of Work
            </a>
          </li>
          <li>
            <a href='#contact' className='hover:text-gray-300 transition'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
