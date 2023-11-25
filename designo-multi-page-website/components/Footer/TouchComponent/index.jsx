import React from "react";
import Button from "@/components/Button";
function TouchCompenent() {
  return (
    <div className="bg-peach   absolute -top-1/4 right-6 left-6   -translate-y-1/4  max-w-[1536px] mx-auto lg:text-start    h-[379px] text-white rounded-[15px] text-center bg-mobile-circle bg-center lg:bg-desktop-circle   ">
      <div className="w-full h-full flex flex-col lg:flex-row lg:justify-start-start  items-center justify-center lg:px-[95px] ">
        <div>
          <h3 className="text-[32px] md:text-[40px] md:w-[11ch]    font-medium leading-9 mb-1.5">
            Let’s talk about your project
          </h3>
          <p className="mb-8 text-base leading-6 font-normal md:w-[40ch] md:mt-2 ">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>

        <Button className="lg:ml-auto" theme="light" path="/contact">
          Get in touch
        </Button>
      </div>
    </div>
  );
}

export default TouchCompenent;
