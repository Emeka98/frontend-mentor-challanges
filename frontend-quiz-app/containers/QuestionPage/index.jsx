"use client";
import React, { useEffect, useState } from "react";
import ProgressBar from "@/components/ProgressBar";
import Form from "@/components/Form";

function QuestionPage({ filteredData , id }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const question = filteredData.questions[currentQuestion]?.question;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentQuestion < filteredData.questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      }
    }, 30000);

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
            <ProgressBar key={currentQuestion} />
          </div>
        </div>
        {/* Options for answer*/}
        <Form
          score={score}
          setScore={setScore}
          currentQuestion={currentQuestion}
          filteredData={filteredData}
          setCurrentQuestion={setCurrentQuestion}
          id={id}
        />
      </div>
    </div>
  );
}

export default QuestionPage;
