import React from "react";
import Logo from "./Images/Logo";
import SocialLinks from "./Images/SocialLinks";
import Button from "../Button";
function Footer() {
  return (
    <footer className="bg-[#2d314d]">
      {/* Social links and logo */}
      <div className="py-10 md:py-12 flex flex-col items-center gap-8 md:flex-row md:container md:mx-auto  md:gap-52  ">
        <div className="flex flex-col items-center gap-8">
          <a href="#">
            <Logo />
          </a>

          <a href="#">
            <SocialLinks />
          </a>
        </div>

        {/* Other Pages Links */}
        <div className="flex flex-col items-center text-center text-white md:flex-row md:items-start md:text-start md:gap-40 ">
          <ul className="flex flex-col gap-2 ">
            <li>
              <a href="#" className="text-sm hover:text-[#30C88F]">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-[#30C88F]">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-[#30C88F]">
                Blog
              </a>
            </li>
          </ul>

          <ul className="flex flex-col gap-2 mt-2 md:mt-0">
            <li>
              <a href="#" className="text-sm hover:text-[#30C88F]">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-[#30C88F]">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-[#30C88F]">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Button and Copyright */}
        <div className="flex flex-col gap-6 items-center text-white md:ml-auto">
          <Button>Request Invite</Button>
          <p className="opacity-50 leading-6 font-normal text-[15px] ">
            © Easybank. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
