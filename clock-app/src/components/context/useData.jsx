import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import moment from "moment";
const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [ip, setIp] = useState(null);
  const [ipInfo, setIpInfo] = useState(null);
  const [timeData, setTimeData] = useState(null);





  const getIp = async () => {
    try {
      const response = await fetch("https://api.ipify.org");
      if (!response.ok) {
        throw new Error("IP address cannot be reached b1");
      }
      const ip = await response.text();
      setIp(ip);

      const ipInfoResponse = await fetch(`http://ip-api.com/json/${ip}`);
      if (!ipInfoResponse.ok) {
        throw new Error("Ip adres cannot be reached.b2");
        xw;
      }

      const data = await ipInfoResponse.json();
      setIpInfo(data);

      const time = await fetch(
        `http://worldtimeapi.org/api/timezone/${data.timezone}`
      );
      if (!time.ok) {
        throw new Error("Time information could not be found. b3");
      }
      const fetchTimeData = await time.json();
      setTimeData(fetchTimeData);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getIp();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getIp();
    }, 30000); // 60 saniye

    return () => {
      clearInterval(interval);
    };
  }, [ip, ipInfo, timeData]);

  const contextData = useMemo(
    () => ({
      ip,
      ipInfo,
      timeData,
    }),
    [ip, ipInfo, timeData]
  );


  return (
    <DataContext.Provider value={contextData}>{children}</DataContext.Provider>
  );
};

function useData() {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("There is no data data provider.");
  }

  return context;
}

export { useData, DataContextProvider };
