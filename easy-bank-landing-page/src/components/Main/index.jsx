import React from "react";
import Button from "../Button";
import Image from "../../assets/image-mockups.png";
import { Contents } from "./constant";

function Main() {
  return (
    <div className=" relative overflow-hidden">
      <main className="flex flex-col bg-hero-pattern-mobile bg-cover md:bg-auto   md:bg-hero-pattern-dekstop md:bg-custom-right bg-no-repeat   ">
        <section className="flex h-[671px] ">
          <div className="flex flex-col gap-4 px-6 mt-auto md:mt-0  md:container md:mx-auto md:px-0 items-center md:items-start  md:justify-center text-center md:text-start">
            <h1 className="text-[#2d314d] font-light text-3xl md:w-[15ch] md:text-6xl   ">
              Next generation digital banking
            </h1>
            <p className="text-base md:text-lg font-normal leading-6  text-[#9597A5] mb-4 md:w-[45ch]">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <Button>Request Invite</Button>
          </div>
        </section>
      </main>
      <section className="w-full flex flex-col mt-10 px-6 bg-[#F4F5F7]  ">
        <div className="flex flex-col gap-3 mt-16 ">
          <h3 className="text-[#2d314d] text-center font-light text-[32px]">
            Why chose EasyBank?
          </h3>
          <p className="text-[#9597A5] font-normal text-center  text-[15px]">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="flex flex-col mt-8 md:flex-row md:container md:mx-auto md:flex-wrap mb-14  ">
          {Contents.map((content) => (
            <div key={content.id} className="md:flex-1 md:gap-8 flex flex-col items-center md:items-start gap-4 mt-8 ">
              <div className="w-[72px h-[72px] ">
              <img src={content.image} alt="" />
              </div>
              <h3 className="text-[#2D314D] font-light text-xl ">{content.title}</h3>
              <p className="text-[#9597A5] text-sm leading-6 text-center md:text-start md:w-[45ch] " >{content.content}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="absolute -top-16 right-0 md:-top-32  ">
        <img className="" src={Image} alt="" />
      </div>
    </div>
  );
}

export default Main;
