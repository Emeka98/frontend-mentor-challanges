import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-hero-mobile w-full h-[510px] md:h-[640px] md:bg-hero-tablet lg:bg-hero-desktop lg:bg-center lg:h-[632px] lg:flex lg:justify-start bg-cover  bg-no-repeat bg-bottom flex justify-center items-center  ">
      <div className="lg:container lg:mx-auto">
      <div className=" flex flex-col  items-center justify-center w-[328px]  md:w-[379px] h-full text-center lg:text-start lg:items-start     ">
        <h4 className="text-[#ffffff66] text-[14px] font-normal uppercase tracking-[10px] mb-4 md:mb-6 ">New Product</h4>
        <h1 className="text-white text-4xl md:text-[56px] md:leading-[56px] md:tracking-[2px]  leading-10 tracking-[1.286px] uppercase font-bold mb-6 ">xx99 mark ıı Headphones</h1>
        <p className="text-[#ffffffbf] text-[15px] font-medium leading-[25px]  mb-7 md:mb-10  ">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button variant="button-1"><Link to={"/headphones/xx99-mark-two-headphones"} >See Product</Link> </Button>
      </div>
      </div>

    </section>
  );
}

export default Hero;
