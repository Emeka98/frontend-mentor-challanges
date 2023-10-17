import React from "react";
import Navbar from "./Navbar";
import HeaderImage from "../../assets/illustration-intro.svg";
import Button from "../Button";
function Header() {
  return (
    <div className="w-full bg-header bg-[right_-5rem_top_-3rem]  bg-no-repeat px-6 pt-11 flex flex-col gap-12 overflow-hidden ">
      <Navbar />

      <div className="flex flex-col w-full md:flex-row md:items-center md:justify-between md:container md:mx-auto">
        <div className="md:order-2">
          <div>
            <img src={HeaderImage} alt="" />
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start md:order-1 md:w-[445px]">
          <h1 className="heading-1 text-center md:text-start">
            Bring everyone together to build better products.
          </h1>
          <p className="text-custom text-center mb-[29px] md:mt-4 md:text-start">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>

          <Button className="w-[137px] bg-[#F3603C] text-[#FCF6F5]">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
