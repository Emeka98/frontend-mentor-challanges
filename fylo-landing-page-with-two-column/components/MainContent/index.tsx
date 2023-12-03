import React from "react";
import section1Img from "@/assets/icons/illustration-1.svg?url";
import section2Img from "@/assets/icons/illustration-2.svg?url";

import Image from "next/image";
import Input from "../Input";
import Button from "../Button";

function MainContent() {
  return (
    <main className="">
      <section className="flex flex-col lg:flex-row gap-10 px-6 container mx-auto ">
        <div className=" relative w-full h-[225px] lg:max-w-[640px] lg:h-[474px]  lg:order-2 ">
          <Image src={section1Img} alt="Section one image" fill />
        </div>

        <div className="flex flex-col gap-6 justify-center">
          <h3 className="text-[#07043B] text-center lg:text-start text-2xl lg:text-[40px] font-bold leading-9">
            All your files in one secure location, accessible anywhere.
          </h3>
          <p className="text-[#07043B] lg:text-[17px] text-center lg:text-start text-sm leading-5 font-normal">
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </p>
          <div className="flex  flex-col gap-4 lg:flex-row">
            <Input placeholder="Enter your email." type="email" />
            <Button title={"Get Started"} />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-10 mt-[100px] md:mt-[180px] bg-[#F8F8FE] relative pt-[90px]">
        <div className="absolute -top-12 left-0 right-0 bottom-0 bg-curve-mobile md:bg-curve-desktop bg-no-repeat bg-contain z-10"></div>
        <div className=" relative w-full h-[225px] ">
          <Image src={section2Img} alt="Section two image" fill />
        </div>
      </section>
    </main>
  );
}

export default MainContent;
