"use client";
import React from "react";
import { useState } from "react";
import ProgressBar from "@/components/ProgressBar";
import Option from "@/components/Options";
function QuestionPage({ filteredData }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const question = filteredData.questions[currentQuestion].question;
  const options = filteredData.questions[currentQuestion].options;

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h3 className="mb-3 text-grey-navy text-sm leading-5 italic">
          {`Question ${currentQuestion + 1} of 10`}
          </h3>
          <h1 className="text-dark-navy text-xl font-medium leading-6">
            {question}
          </h1>
          <ProgressBar />
        </div>
        {/* Options */}
        <div className="flex flex-col gap-3">
          {options.map((e, i) => (
            <Option key={i} optionType={i} option={e} />
          ))}
          <button
            onClick={() => setCurrentQuestion((prev) => prev + 1)}
            className="w-full h-[56px] bg-purple shadow-lg rounded-xl inline-flex items-center justify-center text-white text-[18px] font-medium leading-7 "
          >
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionPage;
