"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Navbar/Images/logo-dark.png";
import { useClickAway } from "@uidotdev/usehooks";
import HamburgerIcon from "@/components/Navbar/HamburgerIcon";
import clsx from "clsx";
import { navlinks } from "./constant";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const hamburgerRef = useRef(null);
  const ref = useClickAway((event) => {
    if (!hamburgerRef.current || hamburgerRef.current.contains(event.target)) {
      return;
    }
    setIsActive(false);
  });

  const onClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <header className="w-full h-24 flex justify-between items-center px-6 md:px-0 relative bg-white z-40  ">
        {/* Logo */}
        <Link className="" href={"/"}>
          {/* Image */}
          <Image
            alt="Logo Image"
            src={Logo}
            width={202}
            height={27}
            priority={true}
          />
        </Link>
        {/* For Mobile HamburgerIcon */}
        <HamburgerIcon
          className="md:hidden"
          onClick={onClick}
          isActive={isActive}
          ref={hamburgerRef}
        />
        {/* For Mobile Nav Links */}
        <nav
          ref={ref}
          className={clsx(
            "absolute top-24 w-full  text-white bg-black transition-all delay-300 ",
            {
              "left-0  ": isActive,
              "-left-full opacity-0 pointer-events-none": !isActive,
            }
          )}
        >
          <ul className="px-6 py-12 flex flex-col gap-8">
            {navlinks.map((item) => (
              <li key={item.id} onClick={onClick}>
                <Link
                  className="text-sm leading-6 tracking-[2px] uppercase "
                  href={item.path}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* For Desktop */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-[42px]">
            {navlinks.map((item) => (
              <li key={item.id}>
                <Link
                  className="text-sm text-dark-grey leading-4 tracking-[2px] uppercase  hover:underline"
                  href={item.path}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {/* overlay */}
      <div
        className={clsx(
          "w-full h-screen opacity-50 bg-[#000]  inset-0 z-30  ",
          { "fixed overflow-scroll": isActive },
          { "hidden": !isActive }
        )}
      ></div>
    </>
  );
}

export default Navbar;
