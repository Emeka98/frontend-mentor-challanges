import React from "react";
import { useData } from "../../../context/ThemeContext";

function ErrorPage() {
  const { apiData } = useData();
  console.log(apiData);
  return (
    <div className="flex flex-col text-center mt-14 ">
      <h3 className="mb-6 md:mb-11 text-6xl">😕</h3>
      <h4 className="p-6 font-bold text-[20px]">{apiData?.title}</h4>
      <p className="text-lg text-[#757575]">
        {apiData?.message}
        {apiData?.resolution}
      </p>
    </div>
  );
}

export default ErrorPage;
