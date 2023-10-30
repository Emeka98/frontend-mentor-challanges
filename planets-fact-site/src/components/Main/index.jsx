import React from "react";
import data from "../../../data.json";

console.log(data[0]);

function Main() {
  return (
    <main>
      {/* For Mobile Top Bar */}
      <div className="border-b border-[#ffffff40] w-full px-6 pt-5 pb-[17px] flex justify-between ">
        <button className="text-white opacity-50 hover:opacity-100 text-[9px] font-bold leading-normal tracking-[1.929px] uppercase">
          Overview
        </button>
        <button className="text-white opacity-50 hover:opacity-100 text-[9px] font-bold leading-normal tracking-[1.929px] uppercase">
          Sturcture
        </button>
        <button className="text-white opacity-50 hover:opacity-100 text-[9px] font-bold leading-normal tracking-[1.929px] uppercase">
          Surface
        </button>
      </div>
    </main>
  );
}

export default Main;
