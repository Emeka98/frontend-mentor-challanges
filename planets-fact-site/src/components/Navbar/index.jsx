import React, { useState } from "react";
import "animate.css";
import HamburgerImage from "./Images/HamburgerImage";
import ArrowImage from "./Images/ArrorImage";
import { constant } from "./constant";
import { useData } from "../../context/DataContext";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const { setPlanet } = useData();

  const handleClick = (e, id) => {
    setIsActive(false);
    setPlanet(id);
  };
  return (
    <>
      <div className="w-full h-[68px] md:h-[159px] lg:h-[85px] border-b border-[#ffffff40] flex  items-center justify-between px-6 relative md:flex-col lg:flex-row ">
        {/* Logo */}
        <div className="md:pt-8 lg:pt-0">
          <a className="logo">The Planets</a>
        </div>

        {/* Tablet and Desktop Navbar */}
        <nav className=" hidden md:block  ">
          <ul className="flex gap-8 justify-center lg:justify-end pb-7 lg:pb-0  ">
            {constant.map((item, i) => (
              <li key={item.id}>
                <button
                  onClick={() => setPlanet(item.id)}
                  className="nav-text-tablet "
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger Btn */}
        <button className="md:hidden" onClick={() => setIsActive(!isActive)}>
          <HamburgerImage />
        </button>
      </div>

      {/* Navbar mobile */}
      <nav
        className={` left-0  bottom-0 top-[68px] z-50 right-0 bg-dark-blue animate__animated animate__fadeInDown  ${
          isActive ? "absolute" : "hidden"
        }`}
      >
        <ul className="flex flex-col  px-6">
          {constant.map((item, i) => (
            <li
              className={`flex items-center justify-between w-full py-5 ${
                i === constant.length - 1
                  ? "border-none"
                  : "border-b border-[#ffffff40]"
              }`}
              key={item.id}
            >
              <button
                onClick={(e) => handleClick(e, item.id)}
                className="inline-flex  items-center gap-6"
              >
                <span
                  className="w-5 h-5 block rounded-full"
                  style={{ background: item["bg-color"] }}
                ></span>
                <h3 className="nav-text">{item.title}</h3>
              </button>

              <ArrowImage />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
