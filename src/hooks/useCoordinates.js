import { useState } from "react";

export const useCoordinations = () => {
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [loadingLocation, setLoadingLocation] = useState(false);

  const findCoordinates = () => {
    if (navigator.geolocation) {
      setLoadingLocation(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        },
        (positionError) => {
          setLat("37.5666805");
          setLong("126.9784147");
          console.log(positionError);
        }
      );
      setLoadingLocation(false);
    } else {
      console.log("It's not supported by this browser.");
    }
  };

  const updateLocation = (lat, long) => {
    setLat(lat);
    setLong(long);
  };

  return [{ lat, long }, loadingLocation, findCoordinates, updateLocation];
};
