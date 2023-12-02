import React from "react";
import Link from "next/link";
import Logo from "@/assets/icons/logo.svg";
import MobileLogo from "@/assets/icons/mobile-logo.svg";
import { LINKS } from "./constant";

function Navbar() {
  return (
    <header className="flex items-center justify-between container mx-auto py-6 lg:py-12 px-6 lg:px-0 mb-[74px]">
      <div className="hidden md:block">
        <Logo />
      </div>
      <div className="block md:hidden">
        <MobileLogo />
      </div>
      <nav className="flex gap-6 items-center">
        {LINKS.map((link) => (
          <Link
            key={link.id}
            href={link.path}
            className="hover:underline text-[#07043b] text-xs md:text-base leading-normal font-normal"
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
