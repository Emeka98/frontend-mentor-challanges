import React from "react";
import Title from "./Title";
import Screen from "./Screen";
import Numbers from "./Numbers";
import { useData } from "../../context/ContextData";


function CalculatorApp() {

const {theme} = useData()


  return (
    <div className={`min-h-screen   pt-[30px] font-spartan flex justify-center lg:items-center  ${theme} `}>
      <div className="flex flex-col gap-6 w-[327px] lg:w-[540px] shrink-0  mx-6 my-8">
        <Title />
        <Screen />
        <Numbers />
      </div>
    </div>
  );
}

export default CalculatorApp;
