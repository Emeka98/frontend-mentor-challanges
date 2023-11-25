import React from "react";

function DesignHero({ title, content }) {
  return (
    <div className="w-full h-[320px] md:h-[252px] bg-peach bg-circle md:bg-desktop-circle md:bg-center md:rounded-[15px] ">
      <div className="w-full h-full flex flex-col justify-center items-center gap-6 text-white px-6">
        <h3 className="text-[32px] font-medium leading-9 ">{title}</h3>
        <p className="text-[16px] max-w-[40ch] leading-6 text-center">
          {content}
        </p>
      </div>
    </div>
  );
}

export default DesignHero;
