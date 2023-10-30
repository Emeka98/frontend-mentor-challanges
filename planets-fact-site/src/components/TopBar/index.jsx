import React from "react";
import { constant } from "./constant";

function TopBar() {
  return (
    <div className="border-b border-[#ffffff40] w-full px-6 pt-5 pb-[17px] flex justify-between ">
      {constant.map((item, i) => (
        <button
          key={item.id}
          className="text-white opacity-50 hover:opacity-100 text-[9px] font-bold leading-normal tracking-[1.929px] uppercase"
          type={item.type}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
}

export default TopBar;
