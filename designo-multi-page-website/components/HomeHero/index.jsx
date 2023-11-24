import React from "react";
import Button from "@/components/Button";
import Image from "next/image";

import frameImg from "./Images/image-hero-phone.png";
function HomeHero() {
  return (
    <section className="bg-peach w-full">
      <div className="flex flex-col">
        <div className="mt-20 flex flex-col items-center ">
          <h2 className="text-center">
            Award-winning custom designs and digital branding solutions
          </h2>
          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Button theme="light" path="/web-design">
            Learn More
          </Button>
        </div>

        {/* Image For Mobile */}
        <div className="">
          <Image src={frameImg} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
