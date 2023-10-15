import React from "react";

function Example({ data }) {
  const nouns = data?.meanings[0]?.definitions;
  const verbs = data?.meanings[1]?.definitions;

  return (
    <>
      <div className="mt-10">
        <div>
          <div className="flex items-center gap-4">
            <h4 className=" italic font-bold text-2xl lowercase">Noun</h4>
            <span className={`w-full h-[1px] bg-[#3a3a3a] `}></span>
          </div>
          <h5 className="text-[#757575] text-base mt-8 mb-4">Meaning</h5>
          {/* Nouns */}
          <ul className="flex flex-col ga">
            {nouns?.map((noun, index) => (
              <li className="flex items-baseline gap-4" key={index}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5"
                    height="5"
                    viewBox="0 0 5 5"
                    fill="none"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#8F19E8" />
                  </svg>
                </span>
                <p>{noun.definition}</p>
              </li>
            ))}
          </ul>
        </div>
        {/* Examples */}
        <div>
          <div className="flex items-center gap-4 my-8">
            <h4 className=" italic font-bold text-2xl lowercase">Verb</h4>
            <span className={`w-full h-[1px] bg-[#3a3a3a] `}></span>
          </div>
          <h5>Meaning</h5>
          <ul className="">
            {verbs?.map((verb, index) => (
               <React.Fragment key={index}>
                <li className="flex items-baseline gap-4" >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="5"
                      height="5"
                      viewBox="0 0 5 5"
                      fill="none"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#8F19E8" />
                    </svg>
                  </span>
                  <p>{verb.definition}</p>
                </li>
                {verb.example && (
                  <p className="ml-6 text-[#757575] my-2 ">"{verb.example}"</p>
                )}
             </React.Fragment>
            ))}
          </ul>
          <span className={`block h-[1px] bg-[#3a3a3a] mt-8 mb-6 `}></span>
          <div className="flex flex-col gap-1 md:flex-row md:gap-4">
            <h4 className="underline text-sm text-[#757575]">Source</h4>

           
              <a  className="flex items-center gap-2" href={data?.sourceUrls[0]}>
                {data?.sourceUrls[0]}{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                >
                  <path
                    d="M6.09091 4.29545C6.50512 4.29545 6.84091 3.95967 6.84091 3.54545C6.84091 3.13124 6.50512 2.79545 6.09091 2.79545V4.29545ZM1.42603 3.97148L1.95635 4.50182L1.95637 4.50181L1.42603 3.97148ZM1.42603 12.574L1.95638 12.0437L1.95637 12.0436L1.42603 12.574ZM11.2045 7.90909C11.2045 7.49488 10.8688 7.15909 10.4545 7.15909C10.0403 7.15909 9.70455 7.49488 9.70455 7.90909H11.2045ZM4.83331 8.10603C4.54041 8.39893 4.54041 8.8738 4.83331 9.16669C5.1262 9.45959 5.60107 9.45959 5.89397 9.16669L4.83331 8.10603ZM13.1667 1.89397C13.4596 1.60107 13.4596 1.1262 13.1667 0.833306C12.8738 0.540413 12.3989 0.540413 12.106 0.833306L13.1667 1.89397ZM12.6364 2.11364C13.0506 2.11364 13.3864 1.77785 13.3864 1.36364C13.3864 0.949423 13.0506 0.613636 12.6364 0.613636V2.11364ZM9 0.613636C8.58579 0.613636 8.25 0.949423 8.25 1.36364C8.25 1.77785 8.58579 2.11364 9 2.11364V0.613636ZM13.3864 1.36364C13.3864 0.949423 13.0506 0.613636 12.6364 0.613636C12.2221 0.613636 11.8864 0.949423 11.8864 1.36364H13.3864ZM11.8864 5C11.8864 5.41421 12.2221 5.75 12.6364 5.75C13.0506 5.75 13.3864 5.41421 13.3864 5H11.8864ZM6.09091 2.79545H2.45455V4.29545H6.09091V2.79545ZM2.45455 2.79545C1.86987 2.79545 1.30913 3.02771 0.895692 3.44116L1.95637 4.50181C2.08849 4.36968 2.26769 4.29545 2.45455 4.29545V2.79545ZM0.895706 3.44115C0.482259 3.85458 0.25 4.41532 0.25 5H1.75C1.75 4.81314 1.82423 4.63394 1.95635 4.50182L0.895706 3.44115ZM0.25 5V11.5455H1.75V5H0.25ZM0.25 11.5455C0.25 12.1301 0.482269 12.6908 0.895685 13.1043L1.95637 12.0436C1.82422 11.9115 1.75 11.7323 1.75 11.5455H0.25ZM0.895678 13.1043C1.30913 13.5178 1.86988 13.75 2.45455 13.75V12.25C2.26768 12.25 2.08849 12.1758 1.95638 12.0437L0.895678 13.1043ZM2.45455 13.75H9V12.25H2.45455V13.75ZM9 13.75C9.58466 13.75 10.1454 13.5177 10.5588 13.1043L9.49818 12.0436C9.36603 12.1758 9.18683 12.25 9 12.25V13.75ZM10.5588 13.1043C10.9723 12.6908 11.2045 12.1301 11.2045 11.5455H9.70455C9.70455 11.7323 9.63033 11.9115 9.49818 12.0436L10.5588 13.1043ZM11.2045 11.5455V7.90909H9.70455V11.5455H11.2045ZM5.89397 9.16669L13.1667 1.89397L12.106 0.833306L4.83331 8.10603L5.89397 9.16669ZM12.6364 0.613636H9V2.11364H12.6364V0.613636ZM11.8864 1.36364V5H13.3864V1.36364H11.8864Z"
                    fill="#757575"
                  />
                </svg>{" "}
              </a>

          </div>
        </div>
      </div>
    </>
  );
}

export default Example;
