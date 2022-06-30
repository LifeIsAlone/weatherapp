import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { WiHumidity, WiBarometer } from "react-icons/wi";
import { MdVisibility } from "react-icons/md";
import { GiSunRadiations } from "react-icons/gi";
import StyledHighlights from "../../styles/StyledHighlights";

const Highlights = ({ data }) => {
  return (
    <StyledHighlights>
      {data && (
        <div className="highlights_info">
          <h1>하이라이트</h1>
          <div className="highlights_inner">
            <div className="box_info">
              <span className="type-info">자외선 세기</span>
              <div className="flex-box">
                <span className="result-uv">
                  <GiSunRadiations />
                </span>
                <span className="info-text">
                  <span>{Math.round(data.uvi)}</span>
                </span>
              </div>
            </div>
            <div className="box_info">
              <span className="type-info">풍속</span>
              <div className="flex-box">
                <div className="icon-ssw">
                  <span>
                    <FaMapMarkerAlt />
                  </span>
                </div>
                <div className="info-text">
                  <span>{data.wind_speed} </span> <span>km/s</span>
                </div>
              </div>
            </div>
            <div className="box_info">
              <span className="type-info">일출 & 일몰</span>
              <div className="sunrise icon">
                <span>
                  <FiArrowUp />
                </span>
                {new Date(data.sunrise * 1000).toLocaleString("ko-KR", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </div>
              <div className="sunset icon">
                <span>
                  <FiArrowDown />
                </span>
                {new Date(data.sunset * 1000).toLocaleString("ko-KR", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </div>
            </div>
            <div className="box_info">
              <span className="type-info">습도</span>
              <div className="flex-box">
                <span className="icon-h">
                  <WiHumidity />
                </span>
                <span className="info-text">
                  <span>{data.humidity}</span>
                  <span>%</span>
                </span>
              </div>
            </div>
            <div className="box_info">
              <span className="type-info">기압</span>
              <div className="flex-box">
                <span className="icon-p">
                  <WiBarometer />
                </span>
                <span className="info-text">
                  <span>{data.pressure}</span>
                  <span>hPa</span>
                </span>
              </div>
            </div>
            <div className="box_info">
              <span className="type-info">가시거리</span>
              <div className="flex-box">
                <span className="icon-v">
                  <MdVisibility />
                </span>
                <span className="info-text">
                  <span>{(data.visibility / 1000).toFixed(1)}</span>
                  <span>km</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </StyledHighlights>
  );
};

export default Highlights;
