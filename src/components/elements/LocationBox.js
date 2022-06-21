import React from "react";

const LocationBox = ({ image, titleLocation }) => {
  return (
    <div className="location">
      <div className="location__inner">
        <img src={image} width="100%" alt={titleLocation} />
        <span>{titleLocation}</span>
      </div>
    </div>
  );
};

export default LocationBox;
