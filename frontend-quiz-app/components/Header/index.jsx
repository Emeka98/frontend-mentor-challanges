import React from "react";
import Toggle from "../Toggle";

function Header() {
  return (
    <header className="w-full  py-4 flex items-center justify-between ">
      <div className="ml-auto">
        <Toggle />
      </div>
    </header>
  );
}

export default Header;
