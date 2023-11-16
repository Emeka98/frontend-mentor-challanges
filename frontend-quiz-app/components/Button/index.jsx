import React from "react";
import Image from "next/image";
import Link from "next/link";
function Button({ item }) {
  return (
    <Link
      href={item.redirect}
      className="w-full p-3  bg-white dark:bg-navy border-white border-2 shadow-xl rounded-xl inline-flex items-center gap-4 lg:hover:scale-105 lg:transition-all   border-none"
    >
      <div className="p-1 rounded-md" style={{ backgroundColor: item.bgColor }}>
        <Image
          width={40}
          height={40}
          src={item.image}
          alt={item.alt}
          className="z-10"
        />
      </div>
      <p className="text-lg font-medium leading-[18px] text-dark-navy dark:text-white">
        {item.title}
      </p>
    </Link>
  );
}

export default Button;
