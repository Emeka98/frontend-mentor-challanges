import React from "react";

function Banner({ children }) {
  return (
    <div className="w-full h-[102px] md:h-[246px] lg:h-[239px] bg-black text-white flex items-center justify-center">
      <h3 className="bont-bold tracking-[2px] uppercase text-[28px] md:text-[40px] md:leading-10 lg:tracking-[1.429px] ">
        {children}
      </h3>
    </div>
  );
}

export default Banner;
