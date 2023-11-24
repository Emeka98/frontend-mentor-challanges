import React from "react";
import Logo from "./Logo";
import FontFamilyBox from "./FontFamilyBox";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <div className="flex justify-between items-center">
      <Logo />

      <div className="flex items-center gap-4  md:gap-6">
        <FontFamilyBox />
        <div className="text-gray-500">|</div>
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Header;
