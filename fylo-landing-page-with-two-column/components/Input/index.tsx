import React from "react";
import { InputProps } from "@/libs/type";
function Input(props: InputProps) {
  return (
    <input
      className="w-full max-w-[480px]  rounded border border-[#07043b] pt-[14px] pb-[12px] px-5"
      type={props.type}
      placeholder={props.placeholder}
    />
  );
}

export default Input;
