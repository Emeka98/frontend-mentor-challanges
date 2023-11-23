import React from "react";
import Link from "next/link";
import clsx from "clsx";

function Button({ children, className, path, theme, ...rest }) {
  return (
    <button
      {...rest}
      className={clsx(
        "w-[152px] h-14 rounded-lg hover:transition-colors hover:duration-300 ",
        theme === "light"
          ? "bg-white text-dark-grey hover:bg-light-peach hover:text-white "
          : "bg-peach text-white hover:bg-light-peach hover:text-white",
        className
      )}
    >
      <Link
        className="font-medium text-[15px] uppercase leading-normal tracking-[1px]"
        href={path}
      >
        {children}
      </Link>
    </button>
  );
}

export default Button;
