import React from "react";
import Link from "next/link";
import clsx from "clsx";

function Button({ children, className , path , theme }) {
  return (
    <button className={clsx(
      'w-[152px] h-14 rounded-lg ' , theme === 'dark' ? 'bg-red-700' : "bg-green-400", className
    )}>
      <Link href={path}>{children}</Link>
    </button>
  );
}

export default Button;
