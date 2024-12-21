import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import sliderimg1 from "../../assets/images/slider1.png";

function Slider() {
  return (
    <div className="paddingGlobal sectionMd slider1">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide> <img className="img-fluid" src={sliderimg1} alt="slider img" /></SwiperSlide>
        <SwiperSlide> <img className="img-fluid" src={sliderimg1} alt="slider img" /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
