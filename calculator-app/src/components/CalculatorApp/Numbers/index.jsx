import React from "react";
import classNames from "classnames";
import { buttons } from "./constant";
import { useData } from "../../../context/ContextData";

function Numbers() {
  const { calculator } = useData();
  return (
    <div className="w-full p-6 lg:pl-[30px] lg:mt-8 lg:mb-8 lg:mr-8 bg-[#242d44] rounded-[10px]  ">
      <div className="w-full flex flex-wrap gap-[13px] lg:gap-6 ">
        {buttons.map((button) => (
          <div
            key={button.id}
            className={classNames(
              " h-[60px] lg:h-[64px] flex justify-center items-center  rounded-[5px]  ",
              button.className
            )}
          >
            <button
              className="w-full h-full text-[24px] font-bold tracking-[-0.533px] leading-normal  "
              onClick={() => calculator(button)}
            >
              {button.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Numbers;
