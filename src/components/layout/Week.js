import React from "react";
import { convertC, convertF } from "../../usefulFunction";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import StyledWeek from "../../styles/StyledWeek";

const Week = ({ data, tempUnit }) => {
  return (
    <StyledWeek>
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 4,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 5,
          },
          // when window width is >= 991px
          991: {
            width: 991,
            slidesPerView: 6,
          },
          // when window width is >= 1024px
          1024: {
            width: 1024,
            slidesPerView: 6,
          },
        }}
      >
        {data &&
          data.map((day, i) => (
            <SwiperSlide key={i.toString()}>
              <div className="box_info">
                <div>
                  {new Date(day.dt * 1000).toLocaleString("ko-KR", {
                    weekday: "short",
                  })}
                </div>
                <img
                  src={require("../../images/v2/" +
                    day.weather[0].icon +
                    ".png")}
                  alt={day.weather[0].description}
                />
                <div className="temp_info">
                  <span>
                    {tempUnit
                      ? convertF(day.temp.max).toFixed(0)
                      : convertC(day.temp.max).toFixed(0)}
                    °{" "}
                  </span>
                  <span> - </span>
                  <span className="light-text">
                    {tempUnit
                      ? convertF(day.temp.min).toFixed(0)
                      : convertC(day.temp.min).toFixed(0)}
                    ° {tempUnit ? "F" : "C"}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </StyledWeek>
  );
};

export default Week;
