import React from "react";
import SearchBar from "../elements/SearchBar";
import WeatherIcon from "../elements/WeatherIcon";
import WeatherInfo from "../elements/WeatherInfo";

const Sidebar = () => {
  return (
    <>
      <SearchBar />
      <WeatherInfo />
    </>
  );
};

export default Sidebar;
