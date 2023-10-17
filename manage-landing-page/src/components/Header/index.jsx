import React from "react";
import Navbar from "./Navbar";
import HeaderImage from "../../assets/illustration-intro.svg";
import Button from "../Button";
function Header() {
  return (
    <div className="w-full bg-header bg-[right_-5rem_top_-3rem]  bg-no-repeat px-6 pt-11 flex flex-col gap-12">
      <Navbar />

      <div className="">
        <div>
          <div>
            <img src={HeaderImage} alt="" />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="heading-1 text-center">
            Bring everyone together to build better products.
          </h1>
          <p className="text-custom text-center mb-[29px]">
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
