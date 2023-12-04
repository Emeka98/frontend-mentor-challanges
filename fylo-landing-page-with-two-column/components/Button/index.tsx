import React from "react";
import { ButtonProps } from "@/libs/type";
const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full max-w-[200px] h-10 lg:h-[52px] bg-[#2f65f8] text-white text-sm font-bold leading-normal rounded hover:bg-[#6c9bff] "
    >
      {title}
    </button>
  );
};

export default Button;
