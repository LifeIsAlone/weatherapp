import React from "react";
import StyledSpinnerContainer from "../../styles/StyledSpinnerContainer";

const SpinnerContainer = () => {
  return (
    <StyledSpinnerContainer>
      <div className="loader"></div>
      <span>Loading...</span>
    </StyledSpinnerContainer>
  );
};

export default SpinnerContainer;
