import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("default");
  const [currentNumber, setCurrentNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [wNumber, setWNumber] = useState("first");
  const [result, setResult] = useState("");
  const [operator, setOperator] = useState("");
  const [decimalFlag, setDecimalFlag] = useState(false);

  const calculator = (button) => {
    if (button.type === "number") {
      if (result !== "") {
        setCurrentNumber(button.value);
        setSecondNumber("");
        setResult("");
        setDecimalFlag(false); // Reset decimal flag
      } else {
        if (wNumber === "first") {
          setCurrentNumber((prevNum) => prevNum + button.value);
        } else {
          setSecondNumber((prevNum) => prevNum + button.value);
        }
      }
    }

    if (button.type === "operator") {
      if (["+", "-", "x", "/"].includes(button.name)) {
        setWNumber("second");
        setOperator(button.value);
      } else if (button.name === "DEL") {
        if (wNumber === "first") {
          setCurrentNumber("");
        } else {
          setSecondNumber("");
        }
      } else if (button.name === "RESET") {
        setWNumber("first");
        setCurrentNumber("");
        setSecondNumber("");
        setResult("");
        setDecimalFlag(false); // Reset decimal flag
      } else if (button.name === "=") {
        const num1 = parseFloat(currentNumber);
        const num2 = parseFloat(secondNumber);

        if (operator === "+") {
          setResult(num1 + num2);
        } else if (operator === "-") {
          setResult(num1 - num2);
        } else if (operator === "*") {
          setResult(num1 * num2);
        } else if (operator === "/") {
          setResult(num1 / num2);
        }

        setWNumber("first");
        setOperator("");
      } else if (button.name === ".") {
        if (!decimalFlag) {
          setDecimalFlag(true);
          ƒ;
          if (wNumber === "first") {
            setCurrentNumber((prevNum) => prevNum + ".");
          } else {
            setSecondNumber((prevNum) => prevNum + ".");
          }
        }
      }
    }
  };

  const contextData = useMemo(
    () => ({
      theme,
      setTheme,
      currentNumber,
      setCurrentNumber,
      calculator,
      wNumber,
      result,
      secondNumber,
    }),
    [theme, currentNumber, wNumber, secondNumber, result]
  );
  return (
    <DataContext.Provider value={contextData}>{children}</DataContext.Provider>
  );
};

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("There is no context provider");
  }

  return context;
}
