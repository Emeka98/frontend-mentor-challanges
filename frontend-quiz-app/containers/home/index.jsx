import React from "react";
import Buttons from "@/components/Buttons";
import { buttons } from "./constant";
import Header from "@/components/Header";

function HomeContainer() {
  return (
    <>
      <Header />
      <div className="w-full h-full flex flex-col gap-10 lg:flex-row lg:justify-center  lg:container lg:mx-auto ">
        <div className="lg:flex-1">
          <h1 className="text-dark-navy dark:text-white text-[40px] lg:leading-[64px] lg:text-[64px] font-light leading-10 max-w-[15ch] ">
            Welcome to the <span className="font-medium">Frontend Quiz</span>
          </h1>
          <p className="mt-4 lg:mt-12 text-grey-navy dark:text-light-bluish text-sm lg:text-xl font-normal leading-6 italic">
            Pick a subject to get started.
          </p>
        </div>
        <div className="lg:flex-1">
          <Buttons buttons={buttons} />
        </div>
      </div>
    </>
  );
}

export default HomeContainer;
