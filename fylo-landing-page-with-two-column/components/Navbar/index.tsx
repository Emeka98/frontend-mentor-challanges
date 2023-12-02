import React from "react";
import { NavTypes } from "@/libs/type";
import Link from "next/link";
import Logo from "@/assets/icons/logo.svg";
import MobileLogo from "@/assets/icons/mobile-logo.svg";
import Image from "next/image";
const LINKS: NavTypes[] = [
  {
    id: 1,
    title: "Features",
    path: "/",
  },
  {
    id: 2,
    title: "Team",
    path: "/",
  },
  {
    id: 3,
    title: "Sign In",
    path: "/",
  },
];

function Navbar() {
  return (
    <header className="flex items-center justify-between container mx-auto py-6 lg:py-16 px-6 lg:px-0 mb-[74px]">
      <div className="hidden md:block">
        <Logo />
      </div>
      <div className="block md:hidden">
        <MobileLogo />
      </div>
      <nav className="flex gap-6 items-center">
        {LINKS.map((link) => (
          <Link key={link.id} href={link.path}>
            {link.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
