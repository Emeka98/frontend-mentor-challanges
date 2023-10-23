import React from "react";
import Button from "../Button";
import { useData } from "../../context/dataContext";
function Intro() {
  const { isPlayer } = useData();
  console.log(isPlayer);
  return (
    <main className="bg-dark-navy w-screen h-screen flex justify-center items-center px-6">
      <div className="flex flex-col gap-8 md:gap-10 justify-center items-center w-full max-w-[460px] h-full ">
        {/* Logo */}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="32"
            viewBox="0 0 72 32"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27.681 1.63437C26.5094 0.462798 24.6099 0.4628 23.4383 1.63437L16 9.07271L8.56166 1.63437C7.39009 0.462798 5.49059 0.4628 4.31902 1.63437L1.63437 4.31902C0.462799 5.49059 0.462801 7.39009 1.63437 8.56166L9.07271 16L1.63437 23.4383C0.462798 24.6099 0.4628 26.5094 1.63437 27.681L4.31902 30.3656C5.49059 31.5372 7.39009 31.5372 8.56166 30.3656L16 22.9273L23.4383 30.3656C24.6099 31.5372 26.5094 31.5372 27.681 30.3656L30.3656 27.681C31.5372 26.5094 31.5372 24.6099 30.3656 23.4383L22.9273 16L30.3656 8.56166C31.5372 7.39009 31.5372 5.49059 30.3656 4.31902L27.681 1.63437Z"
              fill="#31C3BD"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M71.9704 15.8706C71.9704 7.10551 64.8649 0 56.0998 0C47.3348 0 40.2292 7.10551 40.2292 15.8706C40.2292 24.6357 47.3348 31.7412 56.0998 31.7412C64.8649 31.7412 71.9704 24.6357 71.9704 15.8706ZM49.634 15.8706C49.634 12.2996 52.5289 9.4048 56.0998 9.4048C59.6708 9.4048 62.5656 12.2996 62.5656 15.8706C62.5656 19.4416 59.6708 22.3364 56.0998 22.3364C52.5289 22.3364 49.634 19.4416 49.634 15.8706Z"
              fill="#F2B137"
            />
          </svg>
        </div>

        {/* Pıck Player Container */}
        <div className="w-full  rounded-[15px] bg-semi-dark-navy p-6 shadow-custom-player-pick ">
          <div className="flex flex-col">
            <h2 className="heading-xs text-center mb-6">
              pick player 1's mark
            </h2>
            <div className="flex bg-dark-navy p-[9px] rounded-[10px]">
              <button className="flex-1 bg-transparent inline-flex justify-center items-center py-[11px] rounded-[10px] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M31.5569 5.28973L26.7103 0.443061C26.1195 -0.147687 25.1617 -0.147687 24.571 0.443061L16 9.01404L7.42902 0.443061C6.83827 -0.147687 5.88048 -0.147687 5.28973 0.443061L0.443061 5.28973C-0.147687 5.88048 -0.147687 6.83827 0.443061 7.42902L9.01404 16L0.443061 24.571C-0.147687 25.1617 -0.147687 26.1195 0.443061 26.7103L5.28973 31.5569C5.88048 32.1477 6.83827 32.1477 7.42902 31.5569L16 22.986L24.571 31.5569C25.1617 32.1477 26.1195 32.1477 26.7103 31.5569L31.5569 26.7103C32.1477 26.1195 32.1477 25.1617 31.5569 24.571L22.986 16L31.5569 7.42902C32.1477 6.83827 32.1477 5.88048 31.5569 5.28973Z"
                    fill="#A8BFC9"
                  />
                </svg>
              </button>
              <button className="flex-1 bg-silver inline-flex justify-center items-center py-[11px] rounded-[10px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M31.7412 15.8706C31.7412 7.10551 24.6357 0 15.8706 0C7.10551 0 0 7.10551 0 15.8706C0 24.6357 7.10551 31.7412 15.8706 31.7412C24.6357 31.7412 31.7412 24.6357 31.7412 15.8706ZM9.4048 15.8706C9.4048 12.2996 12.2996 9.4048 15.8706 9.4048C19.4416 9.4048 22.3364 12.2996 22.3364 15.8706C22.3364 19.4416 19.4416 22.3364 15.8706 22.3364C12.2996 22.3364 9.4048 19.4416 9.4048 15.8706Z"
                    fill="#1A2A33"
                  />
                </svg>
              </button>
            </div>
            <p className="custom-text text-center uppercase opacity-50 mt-[17px]">
              Remember : x goes first
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-5 w-full">
          <div className="h-[67px]">
            <Button variant="primary">New Game(VS CPU)</Button>
          </div>
          <div className="h-[67px]">
            <Button variant="secondary">New Game(VS PLAYER)</Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Intro;
