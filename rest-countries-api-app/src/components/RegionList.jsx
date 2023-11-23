import React, { useEffect, useState } from "react";
import data from "../data/data.json";
//Components
import RegionCard from "./RegionCard";

function RegionList({ region, search }) {
  const [apiData, setApiData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setApiData(data);
  }, [filteredData]);

 

  useEffect(() => {
    const filtered = apiData?.filter(
      (item) =>
        item.region.toLocaleLowerCase().includes(region?.toLowerCase()) &&
        item.name.toLocaleLowerCase().includes(search?.toLowerCase())
    );
    setFilteredData(filtered);
  }, [region, search, apiData]);

  return (
    <div className="container cards">
      {filteredData.map((country, index) => (
        <RegionCard key={index} country={country} />
      ))}
    </div>
  );
}

export default RegionList;
