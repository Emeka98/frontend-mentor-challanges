import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";
import Data from "../../data.json";
const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [theme, setTheme] = useState(false);
  const [isMarkdown, setIsMarkdown] = useState(false);
  const [isActiveAside, setIsActiveAside] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [markdown, setMarkdown] = useState(Data);
  const [data, setData] = useState(Array());

  useEffect(() => {
    setData(markdown[activePage]);
  }, [activePage]);

  const contextData = useMemo(
    () => ({
      theme,
      setTheme,
      isActiveAside,
      setIsActiveAside,
      isMarkdown,
      setIsMarkdown,
      activePage,
      setActivePage,
      markdown,
      setMarkdown,
      data,
      setData,
    }),
    [theme, isActiveAside, isMarkdown, activePage, markdown, data]
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
