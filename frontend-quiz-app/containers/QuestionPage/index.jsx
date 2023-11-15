"use client";
import React, { useEffect, useState } from "react";
import ProgressBar from "@/components/ProgressBar";
import Option from "@/components/Options";
function QuestionPage({ filteredData }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const question = filteredData.questions[currentQuestion].question;
  const options = filteredData.questions[currentQuestion].options;
  const answer = filteredData.questions[currentQuestion].answer;

  const updateScore = () => {
    setScore((prev) => prev + 1);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentQuestion < filteredData.questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [currentQuestion, filteredData.questions.length]);

  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
        <div className="flex flex-col lg:flex-1">
          <h3 className="mb-3 text-grey-navy dark:text-light-bluish text-sm leading-5 italic">
            {`Question ${currentQuestion + 1} of 10`}
          </h3>
          <h1 className="text-dark-navy dark:text-white text-xl font-medium leading-6">
            {question}
          </h1>
          <div className="lg:mt-auto">
            <ProgressBar />
          </div>
        </div>
        {/* Options */}
        <div className="flex flex-col gap-3 lg:flex-1 ">
          {options.map((e, i) => (
            <Option key={i} optionType={i} option={e} />
          ))}
          <button
            onClick={handleNextQuestion}
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
