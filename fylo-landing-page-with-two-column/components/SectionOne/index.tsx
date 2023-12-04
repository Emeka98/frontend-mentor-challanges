"use client";
import React, { useState } from "react";
import section1Img from "@/assets/icons/illustration-1.svg?url";
import Input from "../Input";
import Button from "../Button";
import Image from "next/image";
function SectionOne() {
  const [email, setEmail] = useState<string>("");
  const [errMessage, setErrMessage] = useState<string>("");
  const checkEmail = (email: string) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleClick = () => {
    if (!email) {
      setErrMessage("Email Can't Be Empty!");
    } else if (!checkEmail(email)) {
      setErrMessage("Invalid Email");
    } else {
      setErrMessage("");
      setEmail("");
    }
  };

  return (
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
        <div className="flex  flex-col gap-4 lg:flex-row relative">
          <Input
            email={email}
            setEmail={setEmail}
            placeholder="Enter your email."
            type="email"
          />
          <Button onClick={handleClick} title={"Get Started"} />
          {errMessage && (
            <p className="absolute -bottom-6 left-0 text-[#ef4877] text-xs tracking-[0.4px] leading-normal">
              {errMessage}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
