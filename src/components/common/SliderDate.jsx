import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function SliderDate() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

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
    { id: 12, label: "Thu", day: "25", month: "Jul" },
    { id: 13, label: "Fri", day: "26", month: "Jul" },
  ];

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <div className="slider2">
      <div className="day">
        <button ref={prevRef} className="custom-nav-button prev">
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 11L1 6L6 1"
              stroke="black"
              stroke-width="1.67"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={7}
          slidesPerView={11}
          breakpoints={{
            320: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 11,
              spaceBetween: 7,
            },
          }}
        >
          {dateData.map((date) => (
            <SwiperSlide key={date.id}>
              <div className="card">
                <div className="label">{date.label}</div>
                <div className="day fw700">{date.day}</div>
                <div className="month">{date.month}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button ref={nextRef} className="custom-nav-button next">
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 11L6 6L1 1"
              stroke="black"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="calender">
        {/* <div className="iconWrapper">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8267 23.3233C11.4884 23.3233 12.123 23.0605 12.5909 22.5926C13.0588 22.1247 13.3217 21.49 13.3217 20.8283C13.3217 20.1666 13.0588 19.532 12.5909 19.0641C12.123 18.5962 11.4884 18.3333 10.8267 18.3333C10.165 18.3333 9.53034 18.5962 9.06243 19.0641C8.59453 19.532 8.33167 20.1666 8.33167 20.8283C8.33167 21.49 8.59453 22.1247 9.06243 22.5926C9.53034 23.0605 10.165 23.3233 10.8267 23.3233ZM13.3233 29.1633C13.3233 29.825 13.0605 30.4597 12.5926 30.9276C12.1247 31.3955 11.49 31.6583 10.8283 31.6583C10.1666 31.6583 9.53201 31.3955 9.0641 30.9276C8.5962 30.4597 8.33333 29.825 8.33333 29.1633C8.33333 28.5016 8.5962 27.867 9.0641 27.3991C9.53201 26.9312 10.1666 26.6683 10.8283 26.6683C11.49 26.6683 12.1247 26.9312 12.5926 27.3991C13.0605 27.867 13.3233 28.5016 13.3233 29.1633ZM20 23.32C20.6613 23.32 21.2955 23.0573 21.7631 22.5897C22.2306 22.1221 22.4933 21.4879 22.4933 20.8267C22.4933 20.1654 22.2306 19.5312 21.7631 19.0636C21.2955 18.596 20.6613 18.3333 20 18.3333C19.3383 18.3333 18.7037 18.5962 18.2358 19.0641C17.7679 19.532 17.505 20.1666 17.505 20.8283C17.505 21.49 17.7679 22.1247 18.2358 22.5926C18.7037 23.0605 19.3383 23.32 20 23.32ZM22.4967 29.16C22.4967 29.8217 22.2338 30.4563 21.7659 30.9242C21.298 31.3921 20.6634 31.655 20.0017 31.655C19.34 31.655 18.7053 31.3921 18.2374 30.9242C17.7695 30.4563 17.5067 29.8217 17.5067 29.16C17.5067 28.4983 17.7695 27.8637 18.2374 27.3958C18.7053 26.9279 19.34 26.665 20.0017 26.665C20.6634 26.665 21.298 26.9279 21.7659 27.3958C22.2338 27.8637 22.4967 28.4983 22.4967 29.16ZM29.1633 23.32C29.825 23.32 30.4597 23.0571 30.9276 22.5892C31.3955 22.1213 31.6583 21.4867 31.6583 20.825C31.6583 20.1633 31.3955 19.5287 30.9276 19.0608C30.4597 18.5929 29.825 18.33 29.1633 18.33C28.5016 18.33 27.867 18.5929 27.3991 19.0608C26.9312 19.5287 26.6683 20.1633 26.6683 20.825C26.6683 21.4867 26.9312 22.1213 27.3991 22.5892C27.867 23.0571 28.5016 23.32 29.1633 23.32ZM40 8.33333C40 6.1232 39.122 4.00358 37.5592 2.44078C35.9964 0.877974 33.8768 0 31.6667 0H8.33333C6.1232 0 4.00358 0.877974 2.44078 2.44078C0.877974 4.00358 0 6.1232 0 8.33333V31.6667C0 33.8768 0.877974 35.9964 2.44078 37.5592C4.00358 39.122 6.1232 40 8.33333 40H31.6667C33.8768 40 35.9964 39.122 37.5592 37.5592C39.122 35.9964 40 33.8768 40 31.6667V8.33333ZM3.33333 13.3333H36.6667V31.6667C36.6667 32.9927 36.1399 34.2645 35.2022 35.2022C34.2645 36.1399 32.9927 36.6667 31.6667 36.6667H8.33333C7.00725 36.6667 5.73548 36.1399 4.7978 35.2022C3.86012 34.2645 3.33333 32.9927 3.33333 31.6667V13.3333ZM8.33333 3.33333H31.6667C32.9927 3.33333 34.2645 3.86012 35.2022 4.7978C36.1399 5.73548 36.6667 7.00725 36.6667 8.33333V10H3.33333V8.33333C3.33333 7.00725 3.86012 5.73548 4.7978 4.7978C5.73548 3.86012 7.00725 3.33333 8.33333 3.33333Z"
              fill="#E2E2E2"
            />
          </svg>
        </div> */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker label="Basic date picker" />
          </DemoContainer>
        </LocalizationProvider>
      </div>
    </div>
  );
}

export default SliderDate;
