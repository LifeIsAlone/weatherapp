import React from "react";
import { convertF, convertC } from "../../usefulFunction";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import StyledToday from "../../styles/StyledToday";

const Today = ({ tempUnit, data }) => {
  return (
    <StyledToday>
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 4,
          },
          768: {
            width: 769,
            slidesPerView: 4,
          },
          991: {
            width: 991,
            slidesPerView: 6,
          },
          1024: {
            width: 1024,
            slidesPerView: 6,
          },
        }}
      >
        {data &&
          data.map((item, i) => (
            <SwiperSlide key={i.toString()}>
              <div className="box_info">
                <div>
                  {new Date(item.dt * 1000).toLocaleString("ko-KR", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                </div>
                <img
                  src={require("../../images/v2/" +
                    item.weather[0].icon +
                    ".png")}
                  alt={item.weather[0].description}
                />
                <div className="temp_info">
                  <span>
                    {tempUnit
                      ? convertF(item.temp).toFixed(0)
                      : convertC(item.temp).toFixed(0)}
                    ° {tempUnit ? "F" : "C"}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </StyledToday>
  );
};

export default Today;
