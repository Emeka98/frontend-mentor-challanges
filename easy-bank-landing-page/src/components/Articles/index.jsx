import React from "react";
import { Features } from "./constant";

function Articles() {
  return (
    <section className="bg-[#FAFAFA] py-20 px-6 flex flex-col gap-8">
      <h3 className="text-center text-[#2d314D] text-[32px] font-light md:text-start md:container md:mx-auto ">
        Latest Articles
      </h3>
      <div className="flex flex-col gap-6 md:container md:mx-auto md:flex-row ">
        {Features.map((feature) => (
          <div
            className="bg-white rounded-md overflow-hidden flex-1 flex flex-col "
            key={feature.id}
          >
            <img
              src={feature.image}
              className="h-[200px]"
              alt="feature image"
            />

            <div className="px-7 py-6 flex flex-col gap-2">
              <p className=" text-[#9597A5] text-[10px] font-normal leading-[18px] tracking-wide ">
                {feature.writer}
              </p>
              <a href="#" className="text-[#2D313D] text-base leading-5 tracking-wide font-light hover:text-[#30C88F]">
                {feature.title}
              </a>
              <p className="text-[#9597A5] tracking-wide font-normal leading-[18px] text-[13px]">
                {feature.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Articles;
