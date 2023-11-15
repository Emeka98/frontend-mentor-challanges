import React from "react";
import Toggle from "../Toggle";
import Image from "next/image";
import { images, capitalizeFirstLetter } from "./constant";

function Header({ logo }) {
  const selectedImg = images.find((item) => item.hasOwnProperty(logo));

  return (
    <header className="w-full h-[72px]  py-4 flex items-center justify-between mb-4 lg:mb-[100px] lg:container lg:mx-auto ">
      {logo && (
        <div className="flex gap-4 items-center">
          <div
            className="w-10 h-10 rounded-md bg-red flex items-center justify-center"
            style={{ backgroundColor: selectedImg.bgColor }}
          >
            <Image
              src={Object.values(selectedImg)[0]}
              width={28}
              height={28}
              alt="Picture of logo"
            />
          </div>
          <p className="text-dark-navy dark:text-white text-lg md:text-[28px] md:leading-7  font-medium leading-4">
            {capitalizeFirstLetter(logo)}
          </p>
        </div>
      )}
      <div className="ml-auto">
        <Toggle />
      </div>
    </header>
  );
}

export default Header;
