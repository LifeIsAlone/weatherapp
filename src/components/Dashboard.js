import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Container from "./layout/Container";
import Highlights from "./layout/Highlights";
import Sidebar from "./layout/Sidebar";
import Today from "./layout/Today";
import Week from "./layout/Week";
import Header from "./layout/Header";
import Spinner from "./elements/Spinner";
import SpinnerContainer from "./elements/SpinnerContainer";
import { StyledGlobal } from "../styles";
import { themeLight, themeDark } from "../constants";
import { useImageFetch } from "../hooks/useImageFetch";
import { useNightMode } from "../hooks/useNightMode";
import { useTempUnit } from "../hooks/useTempUnit";
import { SEARCH_BY_WORD } from "../api";
import { useWeatherFetch } from "../hooks/useWeatherFetch";
import { useCoordinations } from "../hooks/useCoordinates";

const Dashboard = () => {
  const [nightMode, nightModeChanged] = useNightMode();
  const [unitMode, unitModeChanged] = useTempUnit();
  const [image, fetchImage] = useImageFetch();
  const [{ lat, long }, loadingLocation, findCoordinates] = useCoordinations();
  const [
    weather,
    loading,
    error,
    fetchWeather,
    searchByLocation,
    getWeatherLocation,
  ] = useWeatherFetch();
  const [showDays, setShowDays] = useState(false);

  const fetchCoordinates = () => {
    findCoordinates();
    getWeatherLocation(lat, long);
  };

  const nightModeCallback = () => {
    nightModeChanged();
  };

  const showDaysCallback = (enabled) => {
    setShowDays(enabled);
  };

  const doSearchLocation = (searchTerm) => {
    searchByLocation(searchTerm);
    fetchImage(`${SEARCH_BY_WORD}${weather.city}`);
  };

  const unitTempCallback = (enabled) => {
    unitModeChanged(enabled);
  };

  console.log("location", lat, long);
  console.log("weather", weather);

  useEffect(() => {
    getWeatherLocation(lat, long);
    fetchImage(`${SEARCH_BY_WORD}${weather.city}`);
  }, [lat, long]);

  if (!weather) {
    return (
      <ThemeProvider theme={nightMode ? themeDark : themeLight}>
        <Spinner />
        <StyledGlobal />
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider theme={nightMode ? themeDark : themeLight}>
      <StyledGlobal />
      <div>
        <Sidebar
          findCoordinates={fetchCoordinates}
          data={weather}
          searchCallback={doSearchLocation}
          image={image}
          error={error}
          titleLocation={weather}
          unitTemp={unitMode}
        />
        <Container>
          <Header
            unitMode={unitMode}
            unitTempCallback={unitTempCallback}
            nightModeCallback={nightModeCallback}
            nightMode={nightMode}
            showDaysCallback={showDaysCallback}
            showActive={showDays}
          />
          {loading || loadingLocation ? (
            <SpinnerContainer />
          ) : (
            <>
              {!showDays ? (
                <Week data={weather.daily} tempUnit={unitMode} />
              ) : (
                <Today tempUnit={unitMode} data={weather.hourly} />
              )}
              <Highlights data={weather.current} />
            </>
          )}
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Dashboard;
