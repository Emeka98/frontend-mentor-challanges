import React from "react";
import { useData } from "../../context/basketContext";

function Summary() {
  const { basket } = useData();

  const shortName = (item) => {
    const result = item.split(" ")[0];
    return result;
  };

  const totalPrice = basket.reduce((acc, currentItem) => {
    return acc + currentItem.price;
  }, 0);

  const summaryData = [
    {
      title: "total",
      price: totalPrice,
    },
    {
      title: "shipping",
      price: 50,
    },
    {
      title: "Vat(included)",
      price: (totalPrice * 20) / 100,
    },
    {
      title: "grand total",
      price: totalPrice + 50 + (totalPrice * 20) / 100,
    },
  ];


  return (
    <div className="bg-white p-6 rounded-lg lg:p-8 lg:w-[350px] ">
      <div className="flex flex-col gap-8 ">
        <h3 className="text-lg font-bold uppercase tracking-[1.286px]">
          Summary
        </h3>
        {/* Items */}
        <ul className="flex flex-col gap-6 ">
          {basket.map((item) => (
            <li key={item.id} className="flex gap-4 items-center">
              <div className="w-16 h-16 rounded-lg overflow-hidden">
                <img
                  className="object-cover"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className="flex flex-col ">
                <h4 className="text-[15px] font-bold leading-7">
                  {shortName(item.name)}
                </h4>
                <p className="text-sm font-bold leading-6 text-[#00000080]">
                  ${item.price.toLocaleString()}
                </p>
              </div>

              <div className="ml-auto">
                <h5 className="text-[#00000080] text-[15px] font-bold leading-6 ">
                  x{item.quantity}
                </h5>
              </div>
            </li>
          ))}
        </ul>

        {/* Totals */}
        <ul className="flex flex-col gap-2 ">
          {summaryData?.map((summary, idx) => (
            <li
              className={`flex justify-between items-center ${
                idx === 3 ? "mt-6" : "mt-0 "
              } `}
              key={idx}
            >
              <h3 className="uppercase text-[#00000080] font-medium text-[15px] leading-6 ">
                {summary?.title}
              </h3>
              <p
                className={`${
                  idx === 3 ? "text-[#d87d4a]" : "text-black"
                } font-bold uppercase text-lg`}
              >
                $ {summary?.price.toLocaleString()}{" "}
              </p>
            </li>
          ))}
        </ul>

        <button type="submit" className="uppercase bg-[#d87d4a] w-full py-[15px] text-[13px] font-bold tracking-[1px] mb-8  text-white ">
          Continue Pay
        </button>
      </div>
    </div>
  );
}

export default Summary;