import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import moment from "moment";

const Weather = ({ weatherData }) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {weatherData.name}
          </Typography>
          <Typography variant="h3">
            {Math.round(weatherData.main.temp)}°C
          </Typography>
          <Typography>
            일출:{" "}
            {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
              "ko-KR"
            )}
          </Typography>
          <Typography>
            일몰:{" "}
            {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
              "ko-KR"
            )}
          </Typography>
          <Typography>{weatherData.weather[0].main}</Typography>
          <p>습도: {weatherData.main.humidity} %</p>
          <p>요일: {moment().format("dddd")}</p>
          <p>날짜: {moment().format("LL")}</p>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Weather;
