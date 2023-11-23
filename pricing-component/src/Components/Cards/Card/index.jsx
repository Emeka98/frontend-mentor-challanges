import React from "react";

function Card({ item, idx }) {
  console.log(item);
  return (
    <div
      className={`w-full md:w-[350px]  rounded-[10px] rounder-[10px] py-[31px] px-[29px] z-10 flex flex-col items-center shadow-custom z-20 ${
        idx === 1
          ? "bg-gradient-to-br from-[#A2A7F0] to-[#696EDD] md:py-[54px] "
          : "bg-white "
      } `}
    >
      <h3
        className={`text-lg leading-7 font-bold  mb-6 ${
          idx === 1 ? "text-white " : "text-[#6E7283]"
        } `}
      >
        {item.title}
      </h3>

      <h5
        className={`text-[72px]  font-bold leading-[71px] tracking-[-2.16px] mb-8 ${
          idx === 1 ? "text-white " : "text-[#6E7283]"
        }`}
      >
    
        {item.price}
      </h5>

      <ul
        className={`w-full flex flex-col ${
          idx === 1 ? "text-white" : "text-[#6E728E]"
        }  `}
      >
        {item.features.map((feature, idx) => (
          <li
            key={idx}
            className={`border-[1px] border-y border-x-0 w-full border-[rgba(110, 114, 142, 0.25)] text-inherit text-center py-3 ${
              idx === 1 ? "border-none" : ""
            } `}
          >
            <p className="text-[15px] text-inherit font-bold leading-7 ">
              {feature}
            </p>
          </li>
        ))}
      </ul>
      <button
        className={`uppercase mt-8 w-full h-11  rounded-md inline-flex justify-center items-center  text-[13px] font-bold leading-normal tracking-[1.393px] ${
          idx === 1
            ? "bg-white text-[#6D72DE]  "
            : "bg-gradient-to-br from-[#A2A7F0] to-[#696EDD] text-white "
        } `}
      >
        Learn More
      </button>
    </div>
  );
}

export default Card;
