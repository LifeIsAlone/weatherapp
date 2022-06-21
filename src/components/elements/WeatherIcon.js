import React from "react";

const WeatherIcon = ({ icon }) => {
  return (
    <div className="icon__weather">
      <img
        src={require("../../images/v2/" + icon + ".png")}
        width="150"
        alt="weather"
      />
    </div>
  );
};

export default WeatherIcon;
