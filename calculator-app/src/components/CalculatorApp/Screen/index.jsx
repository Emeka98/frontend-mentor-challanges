import React from "react";
import { useData } from "../../../context/ContextData";

function Screen() {
  const { currentNumber , secondNumber , wNumber , result  } = useData();

  return (
    <div className="w-full bg-[#181f33] h-[88px] rounded-[10px] text-white flex items-center justify-end lg:h-[128px]">
      <input
        type="number"
        disabled
        value={result ? result : (wNumber === "first" ? currentNumber : secondNumber) }
        className="w-full text-right px-6 text-[40px] tracking-[-0.667px] leading-normal font-bold bg-transparent lg:text-[56px]  "
      />
    </div>
  );
}

export default Screen;
