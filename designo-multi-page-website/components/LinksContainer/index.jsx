import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
// Images For Mobile
import webMobileImg from "./Images/mobile/image-web-design.jpg";
import appMobileImg from "./Images/mobile/image-app-design.jpg";
import graphicMobileImg from "./Images/mobile/image-graphic-design.jpg";
// Images For Tablet
import webTabletImg from "./Images/tablet/image-web-design.jpg";
import appTabletImg from "./Images/tablet/image-app-design.jpg";
import graphicTabletImg from "./Images/tablet/image-graphic-design.jpg";
// Images For Desktop
import webDesktopImg from "./Images/desktop/image-web-design-large.jpg";
import appDesktopImg from "./Images/desktop/image-app-design.jpg";
import graphicDesktopImg from "./Images/desktop/image-graphic-design.jpg";
const cards = [
  {
    id: 0,
    title: "web design",
    path: "/web-design",
    mobileImage: webMobileImg,
    tabletImage: webTabletImg,
    desktopImage: webDesktopImg,
  },
  {
    id: 1,
    title: "app design",
    path: "/app-design",
    mobileImage: appMobileImg,
    tabletImage: appTabletImg,
    desktopImage: appDesktopImg,
  },
  // {
  //   id: 2,
  //   title: "graphic design",
  //   path: "/graphic-design",
  //   mobileImage: graphicMobileImg,
  //   tabletImage: graphicTabletImg,
  //   desktopImage: graphicDesktopImg,
  // },
];

function LinksContainer() {
  return (
    <section className="mt-[120px] w-full px-6 md:px-0 ">
      <div
        className={clsx(
          "grid grid-cols-1 grid-rows-1 gap-6 ",
          { "lg:grid-cols-2 lg:grid-rows-2 ": cards?.length === 3 },
          { "lg:grid-cols-2 lg:gap-x-4 lg:gap-y-0": cards?.length === 2 }
        )}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className={clsx(
              "w-full h-[250px] relative cursor-pointer    ",
              { "  lg:row-span-2 lg:h-full ": i === 0 },
              { "lg:col-start-2  ": i === 2 }
            )}
          >
            {/* Mobile Img */}
            <Image
              fill
              alt={`${card.title} image`}
              src={card.mobileImage}
              className="rounded-[15px] md:hidden h  "
              placeholder="blur"
            />
            {/* Tablet */}
            <Image
              fill
              alt={`${card.title} image`}
              src={card.tabletImage}
              className="rounded-[15px] hidden md:block lg:hidden "
              placeholder="blur"
            />
            {/* Desktop */}
            <Image
              fill
              alt={`${card.title} image`}
              src={card.desktopImage}
              className="rounded-[15px] hidden lg:block hover:opacity-50   "
              placeholder="blur"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white flex flex-col items-center">
              <h3 className="text-[28px] md:text-[40px] md:tracking-[2px] md:leading-[48px] font-medium leading-9 tracking-[1.4px] text-center uppercase mb-3">
                {card.title}
              </h3>
              <Link
                className="text-[15px] w-[197px] font-medium  leading-normal uppercase tracking-[4px] inline-flex items-center gap-4 text-center "
                href={card.path}
              >
                view projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5"
                  height="10"
                  viewBox="0 0 5 10"
                  fill="none"
                >
                  <path
                    d="M1 1.13477L5 5.13477L1 9.13477"
                    stroke="#E7816B"
                    strokeWidth="2"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LinksContainer;
