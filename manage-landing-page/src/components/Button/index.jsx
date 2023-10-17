import React from "react";
import classNames from "classnames";

function index({ children, className, ...props }) {
  const buttonClasses = classNames(
    "inline-flex",
    "justify-center",
    "items-center",
    "h-[39px]",
    "rounded-[39px]",
    "text-[13px]",
    'font-bold',
    
    className
  );

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}

export default index;
