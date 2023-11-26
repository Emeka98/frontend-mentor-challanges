import React from "react";
import { constant } from "./constant";
import { useData } from "../../context/DataContext";

function TopBar() {
  const { setPlanetImage, setPlanetInfo } = useData();

  const handleClick = (e, idx) => {
    if (idx === 0) {
      setPlanetImage("planet");
      setPlanetInfo("overview");
    } else if (idx === 1) {
      setPlanetImage("internal");
      setPlanetInfo("structure");
    } else {
      setPlanetImage("geology");
      setPlanetInfo("geology");
    }
  };

  return (
    <div className="border-b border-[#ffffff40] w-full px-6 pt-5 pb-[17px]  flex md:hidden justify-between ">
      {constant.map((item, i) => (
        <button
          key={item.id}
          className="text-white opacity-50 hover:opacity-100 text-[9px] font-bold leading-normal tracking-[1.929px] uppercase"
          type={item.type}
          onClick={(e) => handleClick(e, i)}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
}

export default TopBar;
