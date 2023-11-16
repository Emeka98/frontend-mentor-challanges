import classNames from "classnames";
function Option({
  optionType,
  option,
  isCorrect,
  isSelected,
  onOptionChange,
  isWrong,
}) {
  const optionsTypes = ["A", "B", "C", "D"];

  const handleRadioChange = () => {
    onOptionChange(optionType);
  };

  return (
    <label
      className={classNames(
        "flex items-center dark:bg-navy  cursor-pointer bg-white shadow-md px-5 py-[18px] rounded-2xl ",
        {
          "border-[3px] border-purple border-solid": isSelected && !isCorrect,
          "border-[3px] border-green border-solid": isCorrect && isSelected,
          "border-[3px] border-red border-solid": isWrong && isSelected,
        }
      )}
    >
      <input
        type="radio"
        className=" rounded border-gray-300 focus:ring-blue-500 focus:border-blue-500 appearance-none"
        checked={isSelected}
        onChange={handleRadioChange}
      />
      <div
        className={classNames(
          "w-10 h-10 rounded-md font-medium  bg-light-grey  dark:text-grey-navy flex items-center justify-center border-none shrink-0",
          { "bg-purple text-white dark:text-white": isSelected }
        )}
      >
        {optionsTypes[optionType]}
      </div>
      <p className="text-dark-navy ml-8  dark:text-white text-start text-lg font-medium leading-5">
        {option}
      </p>
      {/* TRUE OR FALSE IMAGE */}
      {isWrong && isSelected && (
        <div className="ml-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 0C13.5759 -2.34822e-08 15.1363 0.310389 16.5922 0.913445C18.0481 1.5165 19.371 2.40042 20.4853 3.51472C21.5996 4.62902 22.4835 5.95189 23.0866 7.4078C23.6896 8.86371 24 10.4241 24 12C24 13.5759 23.6896 15.1363 23.0866 16.5922C22.4835 18.0481 21.5996 19.371 20.4853 20.4853C19.371 21.5996 18.0481 22.4835 16.5922 23.0866C15.1363 23.6896 13.5759 24 12 24C8.8174 24 5.76515 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76515 3.51472 3.51472C5.76515 1.26428 8.8174 4.74244e-08 12 0ZM12 2C9.34784 2 6.8043 3.05357 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C6.8043 20.9464 9.34784 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2ZM7.678 7.932L7.792 7.792C7.95771 7.62665 8.17618 7.52468 8.40935 7.50384C8.64252 7.48301 8.8756 7.54464 9.068 7.678L9.208 7.792L12 10.586L14.792 7.792C14.9577 7.62665 15.1762 7.52468 15.4093 7.50384C15.6425 7.48301 15.8756 7.54464 16.068 7.678L16.208 7.792C16.3734 7.95771 16.4753 8.17618 16.4962 8.40935C16.517 8.64252 16.4554 8.8756 16.322 9.068L16.208 9.208L13.414 12L16.208 14.792C16.3734 14.9577 16.4753 15.1762 16.4962 15.4093C16.517 15.6425 16.4554 15.8756 16.322 16.068L16.208 16.208C16.0423 16.3734 15.8238 16.4753 15.5907 16.4962C15.3575 16.517 15.1244 16.4554 14.932 16.322L14.792 16.208L12 13.414L9.208 16.208C9.04229 16.3734 8.82382 16.4753 8.59065 16.4962C8.35748 16.517 8.1244 16.4554 7.932 16.322L7.792 16.208C7.62665 16.0423 7.52468 15.8238 7.50384 15.5907C7.48301 15.3575 7.54464 15.1244 7.678 14.932L7.792 14.792L10.586 12L7.792 9.208C7.62665 9.04229 7.52468 8.82382 7.50384 8.59065C7.48301 8.35748 7.54464 8.1244 7.678 7.932Z"
              fill="#EE5454"
            />
          </svg>
        </div>
      )}
    </label>
  );
}

export default Option;
