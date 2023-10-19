import React, { useState } from "react";
import data from "../../../data.json";

function Main() {
  const [pagination, setPagination] = useState(5);
  const paginationData = data.filter((item, idx) => {
    return idx < pagination;
  });



  console.log(paginationData , pagination);

  return (
    <main className="bg-light-grey min-h-screen">
      <div>
        {/* Cards */}
        <div className="flex flex-col gap-[49px] pt-[97px] px-6">
          {/* Card */}
          {data.map((card) => (
            <div
              className="bg-white flex flex-col gap-4 px-8 pb-9 w-full"
              key={card.id}
            >
              <div
                className={`w-[50px] h-[50px] inline-flex justify-center items-center -mt-[25px] rounded-[16px] overflow-hidden `}
                style={{ background: card.logoBackground }}
              >
                <img src={card.logo} alt={`${card.company} logo`} />
              </div>
              <div className="mt-2 flex items-center gap-3">
                <p className="custom-text text-dark-gray">{card.postedAt}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle cx="2" cy="2" r="2" fill="#6E8098" />
                </svg>
                <p className="custom-text text-dark-gray">{card.contract}</p>
              </div>
              <h2 className="heading-3">{card.position}</h2>
              <p className="custom-text text-dark-gray">{card.company}</p>
              <h4 className="mt-7 text-violet text-sm  font-bold">
                {card.location}
              </h4>
            </div>
          ))}

          <button onClick={() =>setPagination(pagination + 5) } className="bg-red-300">Load More</button>
        </div>
      </div>
    </main>
  );
}

export default Main;
