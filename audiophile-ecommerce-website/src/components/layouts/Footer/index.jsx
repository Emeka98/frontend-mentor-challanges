import React from "react";
import Logo from "./Images/Logo";
import { Link } from "react-router-dom";
import SocialLinks from "./Images/SocialLinks";

function Footer() {
  return (
    <footer className="bg-[#101010] ">
      <div className="lg:container lg:mx-auto flex flex-col gap-12 md:gap-[32px] px-6">
        <div className="flex flex-col items-center md:items-start gap-12 md:gap-[32px] lg:flex-row lg:justify-between lg:w-full mt-12 lg:mt-[75px]">
          <Logo />
          <nav>
            <ul className="text-white flex flex-col gap-4 w-full text-center md:text-start md:flex-row md:gap-[34px] lg:justify-end ">
              <li>
                <Link
                  to={"/"}
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                  className="uppercase text-[13px] font-bold tracking-[2px] leading-6 hover:text-[#D87D4A]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/headphones"}
                  className="uppercase text-[13px] font-bold tracking-[2px] leading-6 hover:text-[#D87D4A]"
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  Headphones
                </Link>
              </li>
              <li>
                <Link
                  to={"/speakers"}
                  className="uppercase text-[13px] font-bold tracking-[2px] leading-6 hover:text-[#D87D4A]"
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  Speakers
                </Link>
              </li>
              <li>
                <Link
                  to={"/earphones"}
                  className="uppercase text-[13px] font-bold tracking-[2px] leading-6 hover:text-[#D87D4A]"
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  Earphones
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="text-center md:text-start lg:flex lg:justify-between lg:items-end">
          <p className="text-white opacity-50 font-medium leading-6 lg:w-[540px] ">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <div className="hidden lg:block">
            <SocialLinks />
          </div>
        </div>

        <div className="flex flex-col items-center gap-12 mb-[38px] md:flex-row md:justify-between md:mt-[48px]">
          <p className="text-white opacity-50 font-bold leading-6">
            Copyright 2021. All Rights Reserved
          </p>
          <div className="lg:hidden">
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
