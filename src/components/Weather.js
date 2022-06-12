import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";

const Weather = ({ weatherData }) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {weatherData.name}
          </Typography>
          <Typography>평균 온도: {weatherData.main.temp}°C</Typography>
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
          <Typography>{weatherData.weather[0].description}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Weather;
