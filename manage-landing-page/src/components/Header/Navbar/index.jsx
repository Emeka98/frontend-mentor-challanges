import React, { useState, useRef, useEffect } from "react";
import Logo from "../../../assets/logo.svg";
import Burger from "../../../assets/icon-hamburger.svg";
import Close from "../../../assets/icon-close.svg";
import Button from "../../Button";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsActive(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarRef]);

  return (
    <div className="flex justify-between items-center md:container md:mx-auto relative  ">
      {/* Logo */}
      <div className="shrink-0">
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
      </div>

      {/* desktop navbar */}
      <nav className="hidden md:flex gap-8 items-center">
        <a
          className="text-[#242d52] text-[13px] font-medium leading-normal hover:opacity-50"
          href="#"
        >
          Pricing
        </a>
        <a
          className="text-[#242d52] text-[13px] font-medium leading-normal hover:opacity-50"
          href="#"
        >
          Product
        </a>
        <a
          className="text-[#242d52] text-[13px] font-medium leading-normal hover:opacity-50"
          href="#"
        >
          About Us
        </a>
        <a
          className="text-[#242d52] text-[13px] font-medium leading-normal hover:opacity-50"
          href="#"
        >
          Careers
        </a>
        <a
          className="text-[#242d52] text-[13px] font-medium leading-normal hover:opacity-50"
          href="#"
        >
          Community
        </a>
      </nav>

      <Button className="w-[137px] bg-[#F98F75] text-[#FCF6F5] hidden md:inline-flex">
        Get Started
      </Button>

      {/* For Mobile basket */}
      <div className="md:hidden">
        <button onClick={() => setIsActive(!isActive)}>
          {isActive === true ? (
            <img src={Close} alt="close icon"></img>
          ) : (
            <img src={Burger} alt="burger icon"></img>
          )}
        </button>
      </div>

      {/* Mobile navbar */}

      <nav
        ref={navbarRef}
        className={`absolute  top-10 transition-all duration-500 z-10 ${
          isActive ? "right-0" : "-right-[900px]"
        }`}
      >
        <ul className="flex flex-col  gap-6 bg-white w-[325px] sm:w-[325px] rounded py-10">
          <li className="w-full text-center">
            <a
              className="text-base tracking-[-0.286px] leading-normal font-bold text-[#242d52]"
              href="#"
            >
              Pricing
            </a>
          </li>
          <li className="w-full text-center">
            <a
              className="text-base tracking-[-0.286px] leading-normal font-bold text-[#242d52]"
              href="#"
            >
              Product
            </a>
          </li>
          <li className="w-full text-center">
            <a
              className="text-base tracking-[-0.286px] leading-normal font-bold text-[#242d52]"
              href="#"
            >
              About Us
            </a>
          </li>
          <li className="w-full text-center">
            <a
              className="text-base tracking-[-0.286px] leading-normal font-bold text-[#242d52]"
              href="#"
            >
              Careers
            </a>
          </li>
          <li className="w-full text-center">
            <a
              className="text-base tracking-[-0.286px] leading-normal font-bold text-[#242d52]"
              href="#"
            >
              Community
            </a>
          </li>
        </ul>
      </nav>

      {/* Overlay */}
      {isActive && (
        <div
          className={`overlay transition-opacity duration-500 ${
            isActive ? "overlay-active" : ""
          }`}
        ></div>
      )}
    </div>
  );
}

export default Navbar;
