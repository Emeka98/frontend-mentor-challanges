import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import Button from "../Button";
import HamburgerIcon from "../../assets/icon-hamburger.svg";
import CloseIcon from "../../assets/icon-close.svg";
import { links } from "./constant";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const hancleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <header className="container mx-auto flex justify-between  items-center h-16 md:h-20 px-6 md:px-0 relative z-30">
      <div>
        <a href="#">
          <img src={Logo} alt="Logo image" />
        </a>
      </div>

      {/* Hamburger Icon */}
      <button onClick={hancleClick} className="md:hidden">
        {isActive ? (
          <img src={CloseIcon} alt="Hamburger Icon" />
        ) : (
          <img src={HamburgerIcon} alt="Hamburger Icon" />
        )}
      </button>

      {/* Links for Mobile */}

      <nav
        className={`md:hidden absolute w-[90%] left-0 right-0 mx-auto bg-white rounded-md py-8 transition-transform duration-300 transform ${
          isActive ? "translate-y-44" : "-translate-y-full"
        }    `}
      >
        <ul className="flex flex-col gap-6 text-center">
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Links for Desktop */}
      <nav className="hidden md:flex items-center  h-full  ">
        <ul className="flex  h-full items-center gap-8 ">
          {links.map((link) => (
            <li
              className="h-full flex items-center hover:border-b-4 hover:border-[#33D35E] "
              key={link.key}
            >
              <a
                className="text-[#9597a5] text-sm font-normal hover:text-[#2d314d] "
                href={link.href}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Button for desktop Screen */}
      <div className="hidden md:block">
        <Button>Request Invite</Button>
      </div>
    </header>
  );
}

export default Navbar;
