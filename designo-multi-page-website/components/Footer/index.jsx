import React from "react";
import Logo from "./Images/logo-light.png";
import Image from "next/image";
import Link from "next/link";
import TouchCompenent from "./TouchComponent";
import SocialLinks from "./SocialLinks";
function Footer() {
  return (
    <footer className="bg-black w-full mt-[300px] flex flex-col  px-6 relative">
      <TouchCompenent />
      <div className="pt-[253px] container mx-auto flex flex-col gap-10 items-center text-center  ">
        <div className="w-full flex flex-col md:flex-row md:justify-between items-center gap-8 md:border-b-[1px] md:pb-[42px] md:border-[#ffffff1a]">
          <Link href={"/"}>
            <Image width={202} height={27} src={Logo} alt="Logo Image" />
          </Link>
          <span className="w-full h-[1px] opacity-10 bg-white md:hidden"></span>
          <nav className="flex flex-col gap-8 items-center text-white md:flex-row md:gap-10 ">
            <Link
              className="uppercase text-sm font-normal tracking-[2px] leading-[14px] hover:underline "
              href={"/about"}
            >
              Our Company
            </Link>
            <Link
              className="uppercase text-sm font-normal tracking-[2px] leading-[14px] hover:underline "
              href={"/locations"}
            >
              Locations
            </Link>
            <Link
              className="uppercase text-sm font-normal tracking-[2px] leading-[14px] hover:underline "
              href={"/contact"}
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="w-full h-full flex flex-col gap-10 md:flex-row md:text-start  ">
          <address className="text-white opacity-50 text-base leading-6 ">
            <span className="font-bold"> Designo Central Office</span>
            <br />
            3886 Wellington Street <br />
            Toronto, Ontario M9C 3J5
          </address>

          <address className="text-white opacity-50 text-base leading-6 ">
            <span className="font-bold">Contact Us (Central Office)</span>
            <br />
            P : +1 253-863-8967 <br />M :{" "}
            <a href="mailto:contact@designo.co">contact@designo.co</a>.
          </address>
          {/* Social Links */}
          <div className="mb-[72px] h-full  md:ml-auto flex  ">
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
