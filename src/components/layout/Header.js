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
        <div
          className={`celsius ${unitMode ? "" : "active"}`}
          onClick={() => changedTemp(false)}
        >
          <span className="degree">°</span> C
        </div>
        <div
          className={`fahrenheit ${unitMode ? "active" : ""}`}
          onClick={() => changedTemp(true)}
        >
          <span className="degree">°</span> F
        </div>
      </div>
      <div className="toggle-theme">
        <input
          type="checkbox"
          className="checkbox"
          id="chk"
          checked={nightMode}
          onChange={nightModeCallback}
        />
        <label htmlFor="chk" className="label">
          <div className="sun">
            <IoIosSunny size={15} />
          </div>
          <div className="moon">
            <RiMoonClearFill size={12} />
          </div>
          <div className="ball"></div>
        </label>
      </div>
    </div>
  );
};

export default Header;
