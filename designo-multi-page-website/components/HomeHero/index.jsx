import React from "react";
import Button from "@/components/Button";
import Image from "next/image";
import frameImg from "./Images/image-hero-phone.png";
function HomeHero() {
  return (
    <section className="bg-peach w-full md:rounded-[15px] h-[843px]  lg:h-[640px] overflow-hidden bg-circle bg-no-repeat bg-center  lg:bg-right ">
      <div className="flex flex-col gap-20 md:gap-0 w-full h-full px-6 lg:px-[95px] items-center lg:flex-row lg:items-start-start">
        <div className="mt-20 flex flex-col items-center w-full h-full lg:justify-center lg:items-start lg:mt-0   ">
          <h2 className="text-center text-[32px] md:text-[48px] font-medium leading-9  text-white mb-[14px] lg:text-start lg:w-[540px] md:leading-[48px] lg:leading-[48px]">
            Award-winning custom designs and digital branding solutions
          </h2>
          <p className="text-[15px] md:text-[16px] text-white leading-6  text-center mb-6 lg:mb-10 lg:text-start lg:w-[445px] ">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Button theme="light" path="/web-design">
            Learn More
          </Button>
        </div>

        <div className="flex">
          <Image
            className="-mb-40 md:mb-0"
            src={frameImg}
            alt="Hero Image"
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
