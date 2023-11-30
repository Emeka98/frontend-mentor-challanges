"use client";
import React, { useState } from "react";
import clsx from "clsx";
import PlusIcon from "@/assets/icons/icon-plus.svg";
import MinusIcon from "@/assets/icons/icon-minus.svg";

function Accordion({ title, content }) {
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);
  return (
    <div className="pb-5 border-b border-solid border-[#f8eeff]">
      <button
        onClick={() => setIsActive(!isActive)}
        className="w-full  inline-flex items-center justify-between mb-6"
      >
        <h3 className="text-[#301534] text-base font-semibold leading-normal text-start max-w-[20ch]">
          {title}
        </h3>
        {isActive ? <PlusIcon /> : <MinusIcon />}
      </button>
      <div
        className={clsx("grid grid-rows-[0fr]", {
          "grid-rows-[1fr]": isActive,
        })}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-5 text-[#8b6990]">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
