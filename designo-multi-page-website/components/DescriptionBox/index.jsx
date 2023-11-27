import React from "react";
import Image from "next/image";
import clsx from "clsx";
function DescriptionBox({ item, onLeft, className, theme }) {
  return (
    <div className={clsx("w-full   flex flex-col lg:flex-row ", className)}>
      {/* Image */}
      <div
        className={clsx(
          "w-full h-[320px] lg:h-[480px] bg-red-300  relative md:rounded-t-[15px] lg:rounded-t-none lg:rounded-l-[15px] ",
          { "lg:order-2 lg:rounded-r-[15px]": onLeft }
        )}
      >
        <Image
          fill
          src={item.mobileImg}
          alt="background image"
          className="md:rounded-t-[15px] lg:rounded-t-none lg:rounded-r-[15px] md:hidden"
          placeholder="blur"
        />
        <Image
          fill
          src={item.tabletImg}
          alt="background image"
          className="rounded-t-[15px] hidden md:block lg:hidden"
          placeholder="blur"
        />
        <Image
          fill
          src={item.desktopImg}
          alt="background image"
          className={clsx("lg:rounded-l-[15px] hidden lg:block", {
            "lg:rounded-l-none lg:rounded-r-[15px]": onLeft,
          })}
          placeholder="blur"
        />
      </div>
      {/* Content */}
      <div className="w-full min-h-[320px] lg:h-[480px]  ">
        <div
          className={clsx(
            "w-full h-full flex flex-col justify-center items-center gap-6 px-6  md:rounded-b-[15px] lg:rounded-b-none lg:rounded-r-[15px] py-20  bg-mobile-circle bg-right",
            { "lg:rounded-l-[15px] lg:rounded-r-none ": onLeft },
            { "bg-peach text-white": theme === "primary" },
            { "bg-[#fdf3f0] ": theme === "secondary" }
          )}
        >
          <h4
            className={clsx(
              "text-center text-[32px] md:text-[48px] font-medium leading-9",
              { "text-peach": theme === "secondary" }
            )}
          >
            {item.title}
          </h4>
          <p className="text-center text-[15px] md:text-[16px] font-normal leading-6 lg:text-start  ">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DescriptionBox;
