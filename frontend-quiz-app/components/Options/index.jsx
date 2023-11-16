function Option({ optionType, option, isCorrect, isSelected, onOptionChange }) {
  const optionsTypes = ["A", "B", "C", "D"];

  const handleRadioChange = () => {
    onOptionChange(optionType);
  };

  return (
    <label className="flex items-center gap-4  ">
      <input
        type="radio"
        className=" rounded border-gray-300 focus:ring-blue-500 focus:border-blue-500   "
        checked={isSelected}
        onChange={handleRadioChange}
      />
      <div
        className={`w-10 h-10 rounded-md font-medium  bg-light-grey  dark:text-grey-navy flex items-center justify-center border-none shrink-0`}
      >
        {optionsTypes[optionType]}
      </div>
      <p className="text-dark-navy dark:text-white text-start text-lg font-medium leading-5">
        {option} {isCorrect && 'True'}
      </p>
    </label>
  );
}

export default Option;
