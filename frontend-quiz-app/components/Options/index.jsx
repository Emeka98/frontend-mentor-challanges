import React from "react";

function Option({ optionType, option }) {
  const optionsTypes = ["A", "B", "C", "D"];
  return (
    <button className="w-full h-16 inline-flex items-center justify-start bg-white dark:bg-navy  gap-4 shadow-lg rounded-xl p-3">
      <div className="w-10 h-full rounded-xl bg-light-grey dark:text-grey-navy inline-flex items-center justify-center ">
        {optionsTypes[optionType]}
      </div>
      <p className="text-dark-navy dark:text-white text-start text-lg font-medium leading-5">{option}</p>
    </button>
  );
}

export default Option;
