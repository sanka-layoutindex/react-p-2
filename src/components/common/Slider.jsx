import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import sliderimg1 from "../../assets/images/slider1.png";

function Slider() {
  return (
    <div className="paddingGlobal sectionMd slider1">
      <div className="containerMedium">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="ratioImageWrapper ratio_21_8"> <img className="w-100" src={sliderimg1} alt="slider img" /></SwiperSlide>
        <SwiperSlide className="ratioImageWrapper ratio_21_8"> <img className="w-100" src={sliderimg1} alt="slider img" /></SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
}

export default Slider;
