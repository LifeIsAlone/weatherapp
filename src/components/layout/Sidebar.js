import React from "react";
import SearchBar from "../elements/SearchBar";
import LocationBox from "../elements/LocationBox";
import WeatherIcon from "../elements/WeatherIcon";
import WeatherInfo from "../elements/WeatherInfo";
import { countries } from "country-data";

const Sidebar = ({
  findCoordinates,
  data,
  searchCallback,
  image,
  error,
  titleLocation,
  unitTemp,
}) => {
  return (
    <div>
      <SearchBar
        findCoordinates={findCoordinates}
        searchCallback={searchCallback}
        error={error}
      />
      {data.weather[0] && <WeatherIcon icon={data.weather[0].icon} />}
      <WeatherInfo data={data} unit={unitTemp} />
      {titleLocation.country && (
        <LocationBox
          image={image}
          titleLocation={
            titleLocation.city + "," + countries[titleLocation.country].name
          }
        />
      )}
    </div>
  );
};

export default Sidebar;
