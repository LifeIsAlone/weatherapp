import { useState, useEffect } from "react";
import { SEARCH_DEFAULT } from "../api";

export const useImageFetch = () => {
  const [image, setImage] = useState("");
  const fetchImage = async (endpoint) => {
    try {
      const response = await fetch(endpoint);
      const result = await response.json();
      //사진 사이즈
      setImage(result.results[0].urls.regular);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImage(`${SEARCH_DEFAULT}`);
  }, []);

  return [image, fetchImage];
};
