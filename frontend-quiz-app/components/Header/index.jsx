import React from "react";
import Toggle from "../Toggle";

function Header() {
  return (
    <header className="w-full h-[72px]  py-4 flex items-center justify-between mb-4 lg:mb-[100px] lg:container lg:mx-auto ">
      <div className="ml-auto">
        <Toggle />
      </div>
    </header>
  );
}

export default Header;
