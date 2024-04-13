import React, { useState } from "react";
import { FaCaretDown, FaDiscord } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <header className="relative z-[99] bg-navbar text-Purple2 border-b-[1px] border-Gray2">
        <nav className="container flex items-center justify-between h-[70px] py-4">
          {/* Logo section */}
          <div className="text-2xl md:text-3xl text-Purple2">
            <a href="#">
              {" "}
              Warped{" "}
              <span className="inline-block font-bold text-Cyan2">Studios</span>
            </a>
          </div>
          {/* Desktop menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-10">
              <li className="group relative cursor-pointer">
                <a href="#" className="flex items-center gap-[2px] h-[72px]">
                  Home{""}
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180 text-Cyan2" />
                  </span>
                </a>
                {/* Dropdown Section */}
                <div className="absolute -left-9 z-[99999] hidden w-[150px} bg-Gray2 shadow-md p-2 text-Cyan2 rounded-md group-hover:block">
                  <ul className="space-y-3">
                    <li className="p-2 hover:bg-Gray1">About us</li>
                    <li className="p-2 hover:bg-Gray1">Contact</li>
                    <li className="p-2 hover:bg-Gray1">Releases</li>
                  </ul>
                </div>
              </li>
              <li>About us</li>
              <li>Contact</li>
              <li>Releases</li>
              <li>
                <div>
                  <a href="https://discord.gg/zyrNW9nfYv">
                    <FaDiscord className="text-2xl h-[40px] w-[40px] rounded-md p-2 text-Gray1 bg-Cyan1 hover:bg-Purple1 hover:cursor-pointer" />
                  </a>
                </div>
              </li>
              <li>
                <img
                  src="https://discordapp.com/api/guilds/1215142016682434640/widget.png?style=shield"
                  alt="Discord Logo"
                  width="100"
                  height="100"
                  className=""
                />
              </li>
            </ul>
          </div>
          {/* Mobile menu Header*/}
          <div className="flex items-center gap-4 md:hidden">
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </nav>
      </header>
      {/* Mobile Menu Section*/}
      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar;
