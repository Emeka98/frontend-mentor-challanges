import React, { useState } from "react";
import 'animate.css'
import HamburgerImage from "./Images/HamburgerImage";
import ArrowImage from "./Images/ArrorImage";
import { constant } from "./constant";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);
  return (
    <>
      <div className="w-full h-[68px] border-b border-[#ffffff40] flex  items-center justify-between px-6 relative">
        {/* Logo */}
        <div>
          <a className="logo">The Planets</a>
        </div>

        <button onClick={() => setIsActive(!isActive)}>
          <HamburgerImage />
        </button>
      </div>

      {/* Navbar mobile */}
      <nav
        className={` left-0  bottom-0 top-[68px] right-0 bg-dark-blue animate__animated animate__fadeInDown  ${
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
              <div className="flex  items-center gap-6">
                <span
                  className="w-5 h-5 block rounded-full"
                  style={{ background: item["bg-color"] }}
                ></span>
                <h3 className="nav-text">{item.title}</h3>
              </div>

              <ArrowImage />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
