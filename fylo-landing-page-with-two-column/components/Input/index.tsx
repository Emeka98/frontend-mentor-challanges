"use client";
import React from "react";
import { InputProps } from "@/libs/type";
import clsx from "clsx";
const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  email,
  setEmail,
  error,
}) => {
  console.log(error);
  return (
    <input
      className={clsx(
        "w-full max-w-[480px] text-[#07043B] rounded border pt-[14px] pb-[12px] px-5 placeholder:text-[#C2C2C2]",
        { "border-[#EF4877]": error },
        !error && "border-[#07043b]"
      )}
      type={type}
      placeholder={placeholder}
      value={email}
      onChange={(e) => setEmail?.(e.target.value || "")}
    />
  );
};

export default Input;
