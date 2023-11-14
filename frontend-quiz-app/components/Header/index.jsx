import React from "react";
import Toggle from "../Toggle";
import HtmlImg from "@/public/icon-html.svg";
import CssImg from "@/public/icon-css.svg";
import JsImg from "@/public/icon-js.svg";
import AssImg from "@/public/icon-accessibility.svg";
import Image from "next/image";

const images = [
  { html: HtmlImg, bgColor: "#FFF1e9" },
  { css: CssImg, bgColor: "#E0FDEF" },
  { javascript: JsImg, bgColor: "#EBF0FF" },
  { accessibility: AssImg, bgColor: "#F6E7FF" },
];
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
          {logo}
        </div>
      )}
      <div className="ml-auto">
        <Toggle />
      </div>
    </header>
  );
}

export default Header;
