import React, { createContext, useContext, useState, useMemo } from "react";
import Data from "../../data.json";
const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [theme, setTheme] = useState(false);
  const [isActiveAside, setIsActiveAside] = useState(false);
  const example = Data[1].content;
  const [markdown, setMarkdown] = useState(example);

  console.log(markdown);
  const contextData = useMemo(
    () => ({
      theme,
      setTheme,
      isActiveAside,
      setIsActiveAside,
      markdown,
      setMarkdown,
    }),
    [theme, isActiveAside, markdown]
  );

  return (
    <DataContext.Provider value={contextData}>{children}</DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("There is no context!");
  }
  return context;
}
