"use client";
import React, { useState } from "react";
import Option from "../Options";
function Form({
  filteredData,
  currentQuestion,
  setCurrentQuestion,
  score,
  setScore,
  id,
}) {
  const options = filteredData.questions[currentQuestion]?.options;
  const answer = filteredData.questions[currentQuestion]?.answer;
  // States
  const [selectedOption, setSelectedOption] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const handleOptionChange = (optionType) => {
    setSelectedOption(optionType);
  };

  const handleNextQuestion = () => {
    const isCorrectAnswer = answer === options[selectedOption];

    if (selectedOption === null) {
      setErrorMessage("Please select an answer");
      return;
    }

    if (isCorrectAnswer) {
      setIsCorrect(true);
      setScore((prev) => prev + 1);
      setTimeout(() => {
        setIsCorrect(false);
      }, 400);

      if (currentQuestion === 9) {
        window.location.href = `/quiz/${id}/result?score=${score + 1}`;
        return;
      }
    }

    if (!isCorrectAnswer) {
      setIsWrong(true);
      setTimeout(() => {
        setIsCorrect(false);
      }, 400);
    }

    if (currentQuestion === 9) {
      window.location.href = `/quiz/${id}/result?score=${score}`;
      return;
    }

    setTimeout(() => {
      setSelectedOption(null);
      setErrorMessage(null);
      setIsWrong(false);
      setCurrentQuestion((prev) => prev + 1);
    }, 400);
  };

  return (
    <form className="flex flex-col gap-3 lg:flex-1 ">
      {options?.map((e, i) => (
        <Option
          key={i}
          optionType={i}
          option={e}
          isCorrect={isCorrect}
          isWrong={isWrong}
          isSelected={selectedOption === i}
          onOptionChange={(i) => handleOptionChange(i)}
        />
      ))}
      <button
        onClick={handleNextQuestion}
        type="button"
        className="w-full h-[56px] bg-purple shadow-lg rounded-xl inline-flex items-center justify-center text-white text-[18px] font-medium leading-7 "
      >
        {currentQuestion === 9 ? "Submit Answer" : "Next Question"}
      </button>

      {/* Error Message */}
      {errorMessage && (
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M20 5C21.9698 5 23.9204 5.38799 25.7403 6.14181C27.5601 6.89563 29.2137 8.00052 30.6066 9.3934C31.9995 10.7863 33.1044 12.4399 33.8582 14.2597C34.612 16.0796 35 18.0302 35 20C35 21.9698 34.612 23.9204 33.8582 25.7403C33.1044 27.5601 31.9995 29.2137 30.6066 30.6066C29.2137 31.9995 27.5601 33.1044 25.7403 33.8582C23.9204 34.612 21.9698 35 20 35C16.0218 35 12.2064 33.4196 9.3934 30.6066C6.58035 27.7936 5 23.9782 5 20C5 16.0218 6.58035 12.2064 9.3934 9.3934C12.2064 6.58035 16.0218 5 20 5ZM20 7.5C16.6848 7.5 13.5054 8.81696 11.1612 11.1612C8.81696 13.5054 7.5 16.6848 7.5 20C7.5 23.3152 8.81696 26.4946 11.1612 28.8388C13.5054 31.183 16.6848 32.5 20 32.5C23.3152 32.5 26.4946 31.183 28.8388 28.8388C31.183 26.4946 32.5 23.3152 32.5 20C32.5 16.6848 31.183 13.5054 28.8388 11.1612C26.4946 8.81696 23.3152 7.5 20 7.5ZM14.5975 14.915L14.74 14.74C14.9471 14.5333 15.2202 14.4058 15.5117 14.3798C15.8031 14.3538 16.0945 14.4308 16.335 14.5975L16.51 14.74L20 18.2325L23.49 14.74C23.6971 14.5333 23.9702 14.4058 24.2617 14.3798C24.5531 14.3538 24.8445 14.4308 25.085 14.5975L25.26 14.74C25.4667 14.9471 25.5942 15.2202 25.6202 15.5117C25.6462 15.8031 25.5692 16.0945 25.4025 16.335L25.26 16.51L21.7675 20L25.26 23.49C25.4667 23.6971 25.5942 23.9702 25.6202 24.2617C25.6462 24.5531 25.5692 24.8445 25.4025 25.085L25.26 25.26C25.0529 25.4667 24.7798 25.5942 24.4883 25.6202C24.1969 25.6462 23.9055 25.5692 23.665 25.4025L23.49 25.26L20 21.7675L16.51 25.26C16.3029 25.4667 16.0298 25.5942 15.7383 25.6202C15.4469 25.6462 15.1555 25.5692 14.915 25.4025L14.74 25.26C14.5333 25.0529 14.4058 24.7798 14.3798 24.4883C14.3538 24.1969 14.4308 23.9055 14.5975 23.665L14.74 23.49L18.2325 20L14.74 16.51C14.5333 16.3029 14.4058 16.0298 14.3798 15.7383C14.3538 15.4469 14.4308 15.1555 14.5975 14.915Z"
              fill="#EE5454"
            />
          </svg>
          <p className="text-red dark:text-white font-normal leading-9 text-lg md:text-2xl">
            {errorMessage}
          </p>
        </div>
      )}
    </form>
  );
}

export default Form;
