import clsx from "clsx";
import React, { forwardRef } from "react";

const HamburgerIcon = forwardRef(({ isActive, onClick, className }, ref) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={clsx("flex flex-col w-7 h-6 gap-1 bg-transparent", className)}
    >
      <div
        className={clsx(
          "w-full h-1 bg-black transition-transform delay-[400]",
          { "custom-rotate-1 ": isActive }
        )}
      ></div>
      <div
        className={clsx(
          "w-full h-1 bg-black transition-transform delay-[400]",
          { "custom-rotate-2 ": isActive }
        )}
      ></div>
      <div
        className={clsx(
          "w-full h-1 bg-black transition-transform delay-[400]",
          { "custom-rotate-3 ": isActive }
        )}
      ></div>
    </button>
  );
});
HamburgerIcon.displayName = "HamburgerIcon";
export default HamburgerIcon;
