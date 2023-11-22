import React from "react";

function Info() {
  return (
    <section className="px-6 flex flex-col gap-10 lg:flex-row lg:items-center lg:container lg:mx-auto  mt-[120px] mb-[96px]">
      <div className="flex flex-col gap-8 order-2 lg:order-1 lg:flex-1 ">
        <h4 className="text-[28px] font-bold lg:leading-10 tracking-[1px] uppercase lg:w-[445px]  ">
          Bringing you the <span className="text-[#d87d4a]">best</span> audio
          gear
        </h4>
        <p className="text-[#00000080] text-[15px] font-medium leading-6  text-center lg:text-start lg:w-[445px]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>

      <div className="h-[300px] lg:h-[588px] w-full bg-info-image-mobile md:bg-info-image-tablet lg:bg-info-image-desktop bg-cover bg-center bg-no-repeat rounded-lg order-1 lg:order-2 lg:flex-1 "></div>
    </section>
  );
}

export default Info;
