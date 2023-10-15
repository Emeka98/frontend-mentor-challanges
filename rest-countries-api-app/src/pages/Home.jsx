import React, {useState} from "react";
//Layout
import Navbar from "../components/layout/Navbar";
import SearchBar from "../components/SearchBar";
import RegionList from "../components/RegionList";


function Home() {

    const [region, setFilterRegion] = useState('');
    const [search, setSearch] = useState('')
  return (
    <>
      <Navbar />
      <SearchBar
        region={region}
        setFilterRegion={setFilterRegion}
        search={search}
        setSearch={setSearch}
      />
      <RegionList region={region} search={search} />
    </>
  );
}

export default Home;
