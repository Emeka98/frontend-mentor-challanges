"use client";
import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import { checkEmail } from "@/libs/utils";
function ContactPanel() {
  const [email, setEmail] = useState<string>("");
  const [errMessage, setErrMessage] = useState<string>("");

  const handleClick = () => {
    if (!email) {
      setErrMessage("Email Can't Be Empty!");
    } else if (!checkEmail(email)) {
      setErrMessage("Please check your email");
    } else {
      setErrMessage("");
      setEmail("");
    }
  };
  return (
    <section className="w-full bg-[#575988] ">
      <div className="flex flex-col lg:flex-row lg:px-0 gap-4 px-12 pt-14 pb-16 text-white container mx-auto">
        <div className="flex flex-col gap-4 max-w-[533px] ">
          <h4 className="text-lg leading-6 text-center font-bold lg:text-start lg:text-4xl ">
            Get early access today
          </h4>
          <p className="text-sm lg:text-base leading-5 text-center font-normal lg:text-start">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <div className="px-3 flex flex-col gap-2 lg:flex-1 items-end">
          <Input
            email={email}
            setEmail={setEmail}
            placeholder="Enter your email."
            type="email"
            error={errMessage}
          />
          {errMessage && (
            <p className="mr-auto text-xs tracking-[0.4px] font-normal ">
              {errMessage}
            </p>
          )}
          <Button onClick={handleClick} title="Get Started For Free" />
        </div>
      </div>
    </section>
  );
}

export default ContactPanel;
