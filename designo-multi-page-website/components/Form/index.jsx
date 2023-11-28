"use client";
import clsx from "clsx";
import React from "react";
import { useFormik } from "formik";

const formElements = [
  {
    id: 0,
    placeholder: "Name",
    type: "text",
    name: "name",
  },
  {
    id: 1,
    placeholder: "Email Address",
    type: "email",
    name: "email",
  },
  {
    id: 2,
    placeholder: "Phone",
    type: "phone",
    name: "phone",
  },
  {
    id: 3,
    placeholder: "Your Message",
    type: "textarea",
    name: "message",
  },
];

function Form() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="w-full bg-peach px-6 flex flex-col lg:flex-row lg:items-center gap-12 md:rounded-[15px] text-white bg-mobile-circle md:bg-desktop-circle ">
      <div className="w-full h-full flex flex-col gap-6 justify-center lg:items-start items-center pt-16 lg:pt-0 lg:flex-1 ">
        <h3 className="text-3xl lg:text-5xl leading-9 font-medium">
          Contact Us
        </h3>
        <p className="text-center lg:text-start text-[15px] lg:text-[16px] leading-6 ">
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>
      <form
        autoComplete="off"
        onSubmit={formik.handleSubmit}
        className="pb-16 lg:pt-[55px] flex flex-col items-center lg:flex-1"
      >
        {formElements.map((item, i) => (
          <div
            key={item.id}
            className={clsx("h-16 border-b border-solid border-white w-full", {
              "h-[127px] md:h-[102px]": item.type === "textarea",
            })}
          >
            {item.type === "textarea" ? (
              <textarea
                className="w-full outline-none bg-transparent placeholder:text-[#ffffff80] ring-[#E7816B] focus:ring-[#E7816B] px-3 pt-[25px]   "
                placeholder={item.placeholder}
                value={formik.values.type}
                onChange={formik.handleChange}
                name={item.name}
              />
            ) : (
              <input
                className="w-full h-full outline-none bg-transparent ring-[#E7816B] focus:ring-[#E7816B] placeholder:text-[#ffffff80] px-3 "
                type={item.type}
                placeholder={item.placeholder}
                value={formik.values.type}
                onChange={formik.handleChange}
                name={item.name}
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          className="inline-flex justify-center items-center w-[152px] h-[56px] bg-white text-[#333136] text-[15px] tracking-[1px] uppercase font-medium rounded-[8px] mt-10 md:ml-auto  "
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
