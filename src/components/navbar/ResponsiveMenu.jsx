import React from 'react';

const ResponsiveMenu = ({ showMenu, toggleMenu }) => {
  return (
    <div className={`${showMenu ? "left-0" : "-left-[100%]"} h-screen w-[75%] bg-Gray2 fixed top-0 z-50 transition-all duration-500 pt-24 pb-6 px-8 flex flex-col justify-between text-Purple1`}>
      <nav className="mt-12">
        <ul className='space-y-4 text-xl'>
          <li>
            <a href='#' onClick={toggleMenu}>Home</a>
          </li>
          <li>
            <a href='#' onClick={toggleMenu}>About us</a>
          </li>
          <li>
            <a href='#' onClick={toggleMenu}>Contact</a>
          </li>
          <li>
            <a href='#releases' onClick={toggleMenu}>Releases</a>
          </li>
        </ul>
      </nav>
      <div className='footer'>
        <h1>©️ 2024 All Rights Reserved</h1>
      </div>
    </div>
  );
}

export default ResponsiveMenu;