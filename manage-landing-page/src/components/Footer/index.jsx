import React,{useState} from "react";
import Button from "../Button";
import Facebook from "./Images/Facebook";
import Youtube from "./Images/Youtube";
import Twitter from "./Images/Twitter";
import Pinterest from "./Images/Pinterest";
import Instagram from "./Images/Instagram";
import Logo from "./Images/Logo";

function Footer() {
  const [errorMessage, setErrorMessage] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return setErrorMessage("Please insert a valid email");
    }

    setErrorMessage("");
  };

  return (
    <footer className="bg-[#1d1e25]">
      <div className="flex p-6 flex-col items-center md:pt-16  text-white md:flex-row md:items-start md:container md:mx-auto">
        <div className="mt-7 md:mt-0 md:order-3 relative ">
          <form onSubmit={handleFormSubmit}>
            <div className="flex gap-2  ">
              <div className="w-[239px] h-11 rounded-[22px] overflow-hidden ">
                <input
                  type="email"
                  name="email"
                  className="w-full h-full px-6 text-[#8d8d8d] text-[13px] font-normal "
                  placeholder="Updates in your inbox"
                />
    
              </div>
              <Button
                type="submit"
                className="w-20 h-11 bg-[#f3603c] text-white "
              >
                Go
              </Button>
            </div>
          </form>

          <h6 className="text-white opacity-50 font-normal text-[13px] mt-16 hidden md:block ">
            Copyright 2020. All Rights Reserved
          </h6>
          {errorMessage && (
            <p className="text-[#F33C3C] text-[10px] italic text-sm mt-1 absolute top-12 ">{errorMessage}</p>
          )}
        </div>

        <nav className="w-full flex justify-around mt-12 md:mt-0 md:order-2">
          <ul className="flex flex-col gap-[13px] ">
            <li>
              <a className="hover:text-[#F3603C]" href="#">Home</a>
            </li>
            <li>
              <a className="hover:text-[#F3603C]" href="#">Pricing</a>
            </li>
            <li>
              <a className="hover:text-[#F3603C]" href="#">Products</a>
            </li>
            <li>
              <a  className="hover:text-[#F3603C]" href="#">About Us</a>
            </li>
          </ul>

          <ul className="flex flex-col gap-[13px]">
            <li>
              <a className="hover:text-[#F3603C]" href="#">Careers</a>
            </li>
            <li>
              <a className="hover:text-[#F3603C]" href="#">Community</a>
            </li>
            <li>
              <a className="hover:text-[#F3603C]" href="#">Privacy Policy</a>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col gap-14 items-center md:items-start md:order-1   ">
          {/* Social Links */}
          <div className="flex gap-8 md:gap-4 justify-center mt-12 md:order-2  ">
            <Facebook />
            <Youtube />
            <Twitter />
            <Pinterest />
            <Instagram />
          </div>

          <div className="md:order-1">
            <a href="#">
              <Logo />
            </a>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-14 mb-8 md:hidden">
          <h6 className="text-white opacity-50 font-normal text-[13px] ">
            Copyright 2020. All Rights Reserved
          </h6>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
