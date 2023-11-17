"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { headers } from "./constant";
import Image from "next/image";
import Link from "next/link";
function ResultContainer({ id }) {
  const searchParams = useSearchParams();
  const score = searchParams.get("score");
  const header = headers.find((item) => item.title.toLowerCase() === id);

  return (
    <main className="lg:flex lg:justify-between">
      <h1 className="text-dark-navy dark:text-white text-[40px] md:text-[64px] lg:leading-[64px] lg:text-[64px] font-light leading-10 max-w-[15ch]  ">
        Quiz completed <br /> <span className="font-medium">You scored...</span>
      </h1>

      <div className="lg:w-[564px]">
        <div className="bg-white w-full mt-10 lg:mt-0">
          <div className="w-full py-8 flex flex-col items-center gap-4 shadow-lg rounded-xl">
            <div className="flex items-center gap-4">
              <div
                className="flex justify-center items-center w-10 h-10 rounded-md "
                style={{ backgroundColor: header.bgColor }}
              >
                <Image
                  src={header.image}
                  alt={header.alt}
                  width={28}
                  height={28}
                />
              </div>
              <h5 className="text-lg font-medium text-dark-navy">
                {header.title}
              </h5>
            </div>
            <h2 className="text-[88px] font-medium text-dark-navy">{score}</h2>
            <p className="text-lg text-grey-navy font-normal ">out of 10</p>
          </div>
        </div>

        <Link
          className="flex items-center justify-center w-full h-[56px] text-white bg-purple text-2xl font-medium shadow-md rounded-xl mt-3   "
          href="/"
        >
          Play Again
        </Link>
      </div>
    </main>
  );
}

export default ResultContainer;
