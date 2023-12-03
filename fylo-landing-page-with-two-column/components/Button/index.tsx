import React from "react";
import { ButtonProps } from "@/libs/type";
function Button(props: ButtonProps) {
  return (
    <button className="w-full h-10 lg:h-[52px] bg-[#2f65f8] text-white text-sm font-bold leading-normal rounded ">
      {props.title}
    </button>
  );
}

export default Button;
