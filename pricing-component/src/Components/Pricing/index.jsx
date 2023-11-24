import React from "react";

function Pricing({ setPricing, pricing }) {
  const handleChange = () => {
    setPricing(!pricing);
  };

  return (
    <div className="flex flex-col gap-10 items-center z-30 ">
      <h1 className="text-[#6e728e] text-[32px] font-bold  leading-normal">
        Our Pricing
      </h1>

      <div className="flex items-center gap-6">
        <label
          className="opacity-50 text-[15px] leading-7 font-bold text-[#6E728E]"
          htmlFor="toggleA"
        >
          Annually
        </label>
        <label htmlFor="toggleA" className="flex items-center  cursor-pointer ">
          <div className="relative">
            <input
              type="checkbox"
              id="toggleA"
              className="sr-only "
              checked={pricing}
              value={pricing}
              onChange={handleChange}
            />
            <div className="w-[56px] h-8 bg-gradient-to-r from-[#A2A7F0] to-[#696EDD]   rounded-full shadow-inner"></div>
            <div
              className={` absolute w-6 h-6 bg-white rounded-full shadow left-1 top-1 transition-transform duration-300 ${
                pricing ? "translate-x-full " : ""
              }`}
            ></div>
          </div>
        </label>
        <label
          className="opacity-50 text-[15px] leading-7 font-bold text-[#6E728E]"
          htmlFor="toggleA"
        >
          Monthly
        </label>
      </div>
    </div>
  );
}

export default Pricing;
