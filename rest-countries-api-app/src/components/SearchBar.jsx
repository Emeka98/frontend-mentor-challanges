import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

//ımage
import SearchLogo from "../assets/search.svg";
function SearchBar({ region, setFilterRegion, search, setSearch }) {
  const handleChange = (event) => {
    setFilterRegion(event.target.value);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <form className="container form">
      <div className="form-control">
        <input
          value={search}
          onChange={handleSearch}
          type="text"
          placeholder="Search for a country…"
        />
        <div className="img-wrapper">
          {" "}
          <img src={SearchLogo} alt="search-logo" />
        </div>
      </div>
      <div className="form-control">
        <Box sx={{ width: 200 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Filter by Region
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={region}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={"Africa"}>Africa</MenuItem>
              <MenuItem value={"America"}>America</MenuItem>
              <MenuItem value={"Asia"}>Asia</MenuItem>
              <MenuItem value={"Europe"}>Europe</MenuItem>
              <MenuItem value={"Oceania"}>Ocenia</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    </form>
  );
}

export default SearchBar;
