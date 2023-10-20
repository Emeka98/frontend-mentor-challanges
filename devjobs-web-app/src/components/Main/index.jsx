import React, { useState } from "react";
import data from "../../../data.json";
import Button from "../Button";

function Main() {
  const [pagination, setPagination] = useState(12);

  const paginationData = data.filter((item, idx) => {
    return idx < pagination;
  });



  return (
    <main className="bg-light-grey dark:bg-midnight min-h-screen">
      <div className=" pb-[56px] md:pb-[104px]">
        {/* Cards */}
        <div className="flex flex-col gap-[49px] pt-[97px] px-6 md:flex-wrap md:flex-row md:justify-center md:container md:mx-auto  ">
          {/* Card */}
          {paginationData.map((card) => (
            <div
              className="bg-white dark:bg-dark-blue  flex flex-col gap-4 px-8 pb-9  flex-1 max-w-[350px] min-w-[327px] "
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
        </div>

        {pagination < 15 && (
          <div className="w-full flex justify-center mt-14">
            <Button
              variant="primary"
              onClick={() => setPagination(pagination + 5)}
            >
              Load More
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}

export default Main;
