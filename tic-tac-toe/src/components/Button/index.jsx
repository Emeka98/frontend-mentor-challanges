import React from "react";

function Button({ children, variant, ...props }) {
  let className;

  if (variant === "primary") {
    className =
      "w-full h-full rounded-[10px] bg-light-yellow hover:bg-light-yellow-hover inline-flex justify-center items-center text-dark-navy text-[20px] shadow-custom-primary-button font-bold tracking-[1.25px] leading-normal  ";
  } else if (variant === 'secondary'){
    className =
      "w-full h-full rounded-[10px] bg-light-blue hover:bg-light-blue-hover inline-flex justify-center items-center text-dark-navy text-[20px] shadow-custom-secondary-button font-bold tracking-[1.25px] leading-normal  ";
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}

export default Button;
