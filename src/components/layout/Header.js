import React from "react";
import { IoIosSunny } from "react-icons/io";
import { RiMoonClearFill } from "react-icons/ri";

const Header = ({
  unitMode,
  unitTempCallback,
  nightModeCallback,
  nightMode,
  showDaysCallback,
  showActive,
}) => {
  const enableToday = (enabled) => {
    showDaysCallback(enabled);
  };
  const changedTemp = (enabled) => {
    unitTempCallback(enabled);
  };
  return (
    <div>
      <div className="today-week">
        <span
          className={`today ${showActive ? "active" : ""}`}
          onClick={() => {
            enableToday(true);
          }}
        >
          오늘 날씨
        </span>
        <span
          className={`week ${showActive ? "" : "active"}`}
          onClick={() => {
            enableToday(false);
          }}
        >
          주간 날씨
        </span>
      </div>
      <div className="temperature">
        <div>
          <span className="degree"></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
