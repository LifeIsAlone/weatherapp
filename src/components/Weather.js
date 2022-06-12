import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

const Weather = ({ weatherData }) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardHeader>{weatherData.name}</CardHeader>
      </Card>
    </Box>
  );
};

export default Weather;
