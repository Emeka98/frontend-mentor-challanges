import React from "react";

function Button({ variant, children, ...props }) {
  const baseClasses = "text-[13px] uppercase font-bold ";
  let variantClasses = "";

  if (variant === "button-1") {
    variantClasses =
      "bg-[#D87D4A] text-white  hover:bg-[#FBAF85] inline-flex justify-center items-center w-[160px] h-[48px] ";
  } else if (variant === "button-2") {
    variantClasses =
      "bg-transparent border border-black border text-black hover:text-white  inline-flex justify-center items-center  w-[160px] h-[48px] hover:bg-black";
  } else if (variant === "button-3") {
    variantClasses =
      "inline-flex gap-3 items-center justify-center text-[#979797] lg:hidden  ";
  } else if (variant === "button-nav") {
    variantClasses = "lg:hidden  ";
  }

  const combinedClasses = `${baseClasses} ${variantClasses} ${props.className}`;

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}

export default Button;
