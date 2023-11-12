import React from "react";
import Buttons from "@/components/Buttons";
import HtmlICon from "@/public/icon-html.svg";
import CssIcon from "@/public/icon-css.svg";
import JsIcon from "@/public/icon-js.svg";
import AccessibilityIcon from "@/public/icon-accessibility.svg";

const buttons = [
  {
    id: 0,
    title: "HTML",
    image: HtmlICon,
    redirect: "/quiz/html",
    alt: "HTML Image",
    bgColor: "#FFF1e9",
  },
  {
    id: 1,
    title: "CSS",
    image: CssIcon,
    redirect: "/quiz/css",
    alt: "CSS Image",
    bgColor: "#E0FDEF",
  },
  {
    id: 2,
    title: "Javascript",
    image: JsIcon,
    redirect: "/quiz/javascript",
    alt: "Javascript Image",
    bgColor: "#EBF0FF",
  },
  {
    id: 3,
    title: "Accessibility",
    image: AccessibilityIcon,
    redirect: "/quiz/accessibility",
    alt: "Accessibility Image",
    bgColor: "#F6E7FF",
  },
];

function HomeContainer() {
  return (
    <div className="w-full h-full flex flex-col gap-10 lg:flex-row lg:justify-center  lg:container lg:mx-auto ">
      <div className="lg:flex-1">
        <h1 className="text-dark-navy text-[40px] lg:leading-[64px] lg:text-[64px] font-light leading-10 max-w-[15ch] ">
          Welcome to the <span className="font-medium">Frontend Quiz</span>
        </h1>
        <p className="mt-4 lg:mt-12 text-grey-navy text-sm lg:text-xl font-normal leading-6 italic">
          Pick a subject to get started.
        </p>
      </div>
      <div className="lg:flex-1">

      <Buttons buttons={buttons} />
      </div>
    </div>
  );
}

export default HomeContainer;
