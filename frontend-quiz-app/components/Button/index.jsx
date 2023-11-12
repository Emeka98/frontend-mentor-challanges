import React from "react";
import Image from "next/image";
function Button({ item }) {
  console.log(item);
  return (
    <button className="w-full p-3  bg-white border-white border-2 shadow-xl rounded-xl inline-flex items-center gap-4">
      <div className="p-1 rounded-md" style={{backgroundColor : item.bgColor }}  >
        <Image width={40} height={40} src={item.image} alt={item.alt}  className="z-10"/>
      </div>
     <p className="text-lg font-medium leading-[18px] text-dark-navy">{item.title}</p>
    </button>
  );
}

export default Button;
