import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


function SliderDate() {
  const dateData = [
    { id: 1, label: "Today", day: "14", month: "Jul" },
    { id: 2, label: "Mon", day: "15", month: "Jul" },
    { id: 3, label: "Tue", day: "16", month: "Jul" },
    { id: 4, label: "Wed", day: "17", month: "Jul" },
    { id: 5, label: "Thu", day: "18", month: "Jul" },
    { id: 6, label: "Fri", day: "19", month: "Jul" },
    { id: 7, label: "Sat", day: "20", month: "Jul" },
    { id: 8, label: "Sun", day: "21", month: "Jul" },
    { id: 9, label: "Mon", day: "22", month: "Jul" },
    { id: 10, label: "Tue", day: "23", month: "Jul" },
    { id: 11, label: "Wed", day: "24", month: "Jul" },
  ];

  return (
    <div className="slider2">
      <div className="day">
        <Swiper
          modules={[Navigation]}
          spaceBetween={3}
          slidesPerView={12}
          navigation
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 12,
              spaceBetween: 3,
            },
          }}
        >
          {dateData.map((date) => (
            <SwiperSlide key={date.id}>
              <div className="card">
                <div className="label">{date.label}</div>
                <div className="day">{date.day}</div>
                <div className="month">{date.month}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="calender">

      </div>
    </div>
  );
}

export default SliderDate;
