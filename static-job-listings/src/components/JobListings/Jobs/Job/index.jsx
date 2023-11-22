import React from "react";

function Job({ data, handleClick }) {

  return (
    <>
      <div
        className={`relative flex flex-col custom-shadow p-6 md:flex-row md:justify-between md:items-center max-w-[1110px] first:mt-10 bg-white w-full rounded-s-md ${
          data.new && data.featured ? "border-l-[5px] border-[#5CA5A5]  " : ""
        }  `}
      >
        <div className="flex items-center gap-4">
          {/* Mobile Logo */}
          <div className="w-12 h-12 rounded-full absolute  top-0 transform -translate-y-1/2 md:hidden   ">
            <img src={data.logo} alt={`${data.company} Logo`} />
          </div>
          {/* Desktop Logo */}
          <div className="w-[88px] h-[88px] rounded-full hidden md:block    ">
            <img src={data.logo} alt={`${data.company} Logo`} />
          </div>

          <div>
            <div className="mt-2 flex gap-8 items-center ">
              <h4 className="text-[#5CA5A5] text-[13px] font-bold">
                {data.company}
              </h4>

              <div className="flex gap-2 flex-wrap">
                {data.new && (
                  <span className="bg-[#5CA5A5] rounded-xl px-2 h-6 inline-flex items-center justify-center ">
                    <p className="font-bold text-sm text-white leading-[14px] -tracking-[0.108px] uppercase">
                      new!
                    </p>
                  </span>
                )}
                {data.featured && (
                  <span className="bg-[#2B3939] rounded-xl px-2 h-6 inline-flex items-center justify-center ">
                    <p className="font-bold text-sm text-white leading-[14px] -tracking-[0.108px] uppercase ">
                      featured
                    </p>
                  </span>
                )}
              </div>
            </div>

            <h4 className="mt-[14px] text-[#2b3939] font-bold leading-6 text-[15px]">
              {data.position}
            </h4>

            <div className="flex gap-4 mt-2">
              <p className="mr-2 text-[#7c8f8f] text-base leading-6 font-medium ">
                {data.postedAt}
              </p>
              <ul className="flex gap-2 list-disc text-[#7c8f8f] ">
                <li className="text-base font-medium leading-6 -tracking-[0.123px]">
                  {data.contract}
                </li>
                <li className="ml-4">{data.location}</li>
              </ul>
            </div>
          </div>
        </div>
        <span className="w-full h-[1px] bg-[#b7c4c4] my-4  md:hidden"></span>
        <div className="flex gap-4 flex-wrap">
          <button
            onClick={() => handleClick(data.role)}
            className="bg-[#5ca5a51a] px-2  inline-flex items-center justify-center h-8 rounded font-bold text-sm leading-6 text-[#5CA5A5]"
          >
            {data.role}
          </button>
          <button
            onClick={() => handleClick(data.level)}
            className="bg-[#5ca5a51a] px-2  inline-flex items-center justify-center h-8 rounded font-bold text-sm leading-6 text-[#5CA5A5]"
          >
            {data.level}
          </button>
          {data.tools.map((tool, idx) => (
            <button
              className="bg-[#5ca5a51a] px-2  inline-flex items-center justify-center h-8 rounded font-bold text-sm leading-6 text-[#5CA5A5]"
              key={idx}
              onClick={() => handleClick(tool)}
            >
              {tool}
            </button>
          ))}
          {data.languages.map((language, idx) => (
            <button
              className="bg-[#5ca5a51a] px-2  inline-flex items-center justify-center h-8 rounded font-bold text-sm leading-6 text-[#5CA5A5]"
              key={idx}
              onClick={() => handleClick(language)}
            >
              {language}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Job;
