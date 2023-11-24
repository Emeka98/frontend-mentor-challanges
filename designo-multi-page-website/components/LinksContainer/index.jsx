import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
// Images
import WebImg from "./Images/image-web-design-small.jpg";
import AppImg from "./Images/image-app-design.jpg";
import GrapImg from "./Images/image-graphic-design.jpg";
const cards = [
  {
    id: 0,
    title: "web design",
    path: "/web-design",
    image: WebImg,
  },
  {
    id: 1,
    title: "app design",
    path: "/web-design",
    image: AppImg,
  },
  {
    id: 2,
    title: "graphic design",
    path: "/web-design",
    image: GrapImg,
  },
];

function LinksContainer() {
  return (
    <section className="mt-[120px] w-full px-6 md:px-0 ">
      <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2 gap-6  ">
        {cards.map((card, i) => (
          <div key={i} className={clsx("w-full h-[250px] relative cursor-pointer " , { "  lg:row-span-2 lg:h-full " : i === 0  } , {"lg:col-start-2 " : i === 2} )}>
            <Image
              fill
              alt={`${card.title} image`}
              src={card.image}
              className="rounded-[15px] object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
              <h3 className="text-[28px] font-medium leading-9 tracking-[1.4px] text-center uppercase mb-3">{card.title}</h3>
              <Link className="text-[15px] w-[197px] font-medium  leading-normal uppercase tracking-[4px] inline-flex items-center gap-4 text-center " href={card.path}>
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
