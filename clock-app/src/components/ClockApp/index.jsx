import React, { useState, useEffect } from "react";
import { useData } from "../context/useData";
import moment from "moment";
function index() {
  const { timeData, ipInfo } = useData();
  const [isActive, setIsActive] = useState(false);
  const [isNightTime, setIsNightTime] = useState(false);
  const hour = moment(timeData?.datetime).format("HH");

  let greeting;

  if (hour >= 4 && hour < 16) {
    greeting = "Good Morning";
  } else {
    greeting = "Good evening";
  }

  useEffect(() => {
    if (hour >= 4 && hour < 16) {
      setIsNightTime(false);
    } else {
      setIsNightTime(true);
    }
  }, [hour]);

  return (
    <div
      className={`w-screen h-screen font-inter bg-no-repeat bg-cover flex flex-col  text-white overflow-hidden ${
        isNightTime ? "bg-mobile-nightime" : "bg-mobile-daytime"
      }`}
    >
      <div className="flex flex-col w-full h-full px-6 py-8 md:p-16 ">
        <div className={` ${isActive ? "hidden" : "flex"}`}>
          <div className={`flex-col gap-2`}>
            <p className="text-white text-xs font-normal leading-[22px] md:text-lg md:leading-[28px] ">
              "The science of operations, as derived from mathematics more
              especially, is a science of itself, and has its own abstract truth
              and value.”
            </p>
            <h4 className="text-xs font-bold leading-[22px] text-white md:text-lg md:leading-[28px] ">
              Ada Lovelace
            </h4>
          </div>

          <div className="w-4 h-4 ml-auto">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  opacity="0.5"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.0001 4.76451L10.6884 6.97743C10.6287 7.03696 10.6108 7.1266 10.643 7.20451C10.6752 7.28242 10.7512 7.33324 10.8355 7.33326H17.3334V1.10409C17.3329 1.02002 17.2819 0.944497 17.2041 0.912613C17.1263 0.880729 17.037 0.898733 16.9776 0.958261L14.8047 3.03701C12.7334 1.01244 9.75837 0.21065 6.95026 0.920223C4.14215 1.6298 1.90511 3.74861 1.04425 6.51409L3.43091 7.25993C4.02905 5.33914 5.57597 3.86294 7.52263 3.3553C9.4693 2.84765 11.5401 3.38042 13.0001 4.76451ZM7.38037 10.7951C7.3481 10.7173 7.27219 10.6666 7.188 10.6666H0.666748V16.8153C0.666766 16.8996 0.717588 16.9756 0.795498 17.0078C0.873407 17.04 0.963046 17.0221 1.02258 16.9624L3.17091 14.9408C5.2389 16.977 8.21826 17.7888 11.0334 17.0833C13.8485 16.3777 16.0927 14.2566 16.9559 11.4858L14.5692 10.7399C13.9703 12.6626 12.4209 14.1396 10.4718 14.6459C8.52265 15.1522 6.45028 14.6159 4.99133 13.2278L7.3355 11.022C7.39494 10.9624 7.41265 10.8728 7.38037 10.7951Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-12 ">
          <div className="flex flex-col gap-4 ">
            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_2_52)">
                  <path
                    d="M11.7809 19.4165C12.374 19.4165 12.863 19.8656 12.9256 20.4425L12.9323 20.568V22.4097C12.9323 23.0463 12.4169 23.5617 11.7809 23.5617C11.1873 23.5617 10.6987 23.1127 10.6361 22.5353L10.6294 22.4097V20.568C10.6294 19.932 11.1449 19.4165 11.7809 19.4165ZM6.38139 17.1809C6.79901 17.5975 6.82884 18.2562 6.47088 18.7078L6.38139 18.8082L5.07861 20.1115C4.62939 20.5607 3.9 20.5607 3.45026 20.1115C3.03265 19.6943 3.00327 19.0352 3.36087 18.5835L3.45026 18.4831L4.75304 17.1809C5.20278 16.7306 5.93165 16.7306 6.38139 17.1809ZM18.8082 17.1809L20.111 18.4837C20.5607 18.9323 20.5607 19.6623 20.111 20.1115C19.6612 20.5607 18.9323 20.5607 18.4826 20.1115L17.1798 18.8087C16.7301 18.359 16.7301 17.6301 17.1798 17.1809C17.6296 16.7317 18.359 16.7317 18.8082 17.1809ZM11.7809 5.87948C15.0344 5.87948 17.6823 8.52678 17.6823 11.7814C17.6823 15.036 15.0344 17.6833 11.7809 17.6833C8.52678 17.6833 5.87948 15.0355 5.87948 11.7814C5.87948 8.5273 8.52678 5.87948 11.7809 5.87948ZM22.4103 10.6294C23.0463 10.6294 23.5617 11.1449 23.5617 11.7809C23.5617 12.4169 23.0463 12.9318 22.4103 12.9318H20.568C19.932 12.9318 19.4165 12.4169 19.4165 11.7809C19.4165 11.1449 19.932 10.6294 20.568 10.6294H22.4103ZM2.99322 10.6294C3.62922 10.6294 4.1447 11.1449 4.1447 11.7809C4.1447 12.3745 3.69566 12.8626 3.11912 12.9251L2.99374 12.9318H1.15148C0.515478 12.9318 0 12.4169 0 11.7809C0 11.1873 0.449039 10.6987 1.026 10.6361L1.15148 10.6294H2.99322ZM4.97817 3.36129L5.07861 3.45078L6.38139 4.75304C6.83113 5.20278 6.83113 5.93165 6.38139 6.38139C5.96378 6.79949 5.30548 6.82936 4.85349 6.47098L4.75304 6.38139L3.45026 5.07861C3.00052 4.62939 3.00052 3.9 3.45026 3.45078C3.86788 3.03317 4.52617 3.00334 4.97817 3.36129ZM20.111 3.45026C20.5607 3.9 20.5607 4.62939 20.111 5.07861L18.8082 6.38139C18.359 6.83113 17.6301 6.83113 17.1798 6.38139C16.7306 5.93165 16.7306 5.20278 17.1798 4.75304L18.4826 3.45026C18.9318 3.00104 19.6612 3.00104 20.111 3.45026ZM11.7809 0C12.4169 0 12.9323 0.515478 12.9323 1.15148V2.99374C12.9323 3.62922 12.4163 4.1447 11.7809 4.1447C11.1449 4.1447 10.6294 3.62922 10.6294 2.99374V1.15148C10.6294 0.515478 11.1449 0 11.7809 0Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_52">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h3 className="uppercase text-[15px] font-normal leading-[25px] tracking-[3px] md:text-[18px] md:leading-[28px] md:tracking-[3.6px]  ">
                {greeting}
              </h3>
            </div>
            <div className="flex gap-4 items-end">
              <h1 className="text-[100px] tracking-[-2.5px] font-bold md:text-[175px] md:leading-[175px] md:tracking-[-4.375px] ">
                {moment(timeData?.datetime).format("HH:mm")}
              </h1>
              <p className="uppercase pb-8 text-[15px] leading-7 font-light ">
                bst
              </p>
            </div>
            <div>
              <h3 className="uppercase text-[15px] leading-7 tracking-[3px] font-bold md:text-[18px] ">
                {`in ${ipInfo?.regionName}, ${ipInfo?.countryCode}`}
              </h3>
            </div>
          </div>
          <div className="w-[115px] h-[39px] rounded-[28px] bg-white p-1 md:w-[146px] md:h-[56px] md:pl-3 md:mr-2 ">
            <button
              onClick={() => setIsActive(!isActive)}
              className="inline-flex items-center w-full h-full"
            >
              <p className="text-black opacity-50 tracking-[3.75px] uppercase font-bold text-[12px] ml-[13px] md:text-[16px]">
                More
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                className="ml-auto md:w-[40px] md:h-[40px]"
              >
                <circle cx="16" cy="16" r="16" fill="#303030" />
                <path
                  d="M11.2 13.6001L16 18.4001L20.8 13.6001"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={` ${isActive ? "" : "hidden"} custom-bg w-full ${
          isNightTime ? "custom-light " : "custom-dark text-black"
        }    `}
      >
        <div className=" px-3 py-6 gap-2 sm:px-6 sm:py-12 sm:gap-4md:py-[120px] md:px-[64px]   ">
          <div className="flex  justify-between  ">
            <h4 className="text-[10px] uppercase leading-7 tracking-[2px] font-normal ">
              Current Timezone
            </h4>
            <p className="text-[20px] font-bold text-right ">
              {ipInfo?.timezone}
            </p>
          </div>
          <div className="flex  justify-between ">
            <h4 className="text-[10px] uppercase leading-7 tracking-[2px] font-normal ">
              Day of the year
            </h4>
            <p className="text-[20px] font-bold text-right ">
              {timeData?.day_of_year}
            </p>
          </div>
          <div className="flex  justify-between">
            <h4 className="text-[10px] uppercase leading-7 tracking-[2px] font-normal ">
              Day of the week
            </h4>
            <p className="text-[20px] font-bold text-right ">
              {timeData?.day_of_week}
            </p>
          </div>
          <div className="flex  justify-between ">
            <h4 className="text-[10px] uppercase leading-7 tracking-[2px] font-normal ">
              week number
            </h4>
            <p className="text-[20px] font-bold text-right ">
              {timeData?.week_number}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
