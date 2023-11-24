import React from "react";
import { inputValue } from "./constant";
import { useData } from "../../context/ContextData";

<console className="log"></console>;
function Switcher() {
  const { theme, setTheme } = useData();

  return (
    <div className="flex gap-6 ">
      <div className="mt-auto">
        <h3 className="text-xs font-bold tracking-[1px] leading-normal uppercase">
          Theme
        </h3>
      </div>
      <div className="flex flex-col gap-[5px]">
        <div className="flex gap-3 justify-center">
          <label className="primary-label" htmlFor="toggle-1">
            1
          </label>
          <label className="primary-label" htmlFor="toggle-1">
            2
          </label>
          <label className="primary-label" htmlFor="toggle-1">
            3
          </label>
        </div>
        <div className=" w-[71px] h-[26px] p-[5px] rounded-[13px] bg-[#242D44] flex justify-center">
          {inputValue.map((input, idx) => (
            <input
              className={`w-4 h-4 appearance-none bg-[#D03F2F] rounded-full opacity-0 hover:cursor-pointer ${
                theme === input.value ? "opacity-100" : "opacity-0"
              }   `}
              key={input.id}
              name={input.name}
              type={input.type}
              value={input.value}
              onClick={() => setTheme(input.value)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Switcher;
