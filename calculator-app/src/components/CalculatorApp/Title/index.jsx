import React from "react";
import Switcher from "../../Switcher";

function Title() {
  return (
    <header className="mb-2 flex justify-between w-full items-center bg-transparent text-white">
      <h1 className="text-[32px] font-bold leading-normal  tracking-[-0.533px] mt-auto ">
        <a href="#">calc</a>
      </h1>
      <Switcher />
    </header>
  );
}

export default Title;
