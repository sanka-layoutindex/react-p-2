import React from "react";
import HeaderSection from "../modules/HeaderSection";
import Slider from "../common/Slider";
import SliderDate from "../common/SliderDate";
import MovieCards from "../modules/MovieCards";
import MovieSection from "../modules/MovieSection";
import VerticalSection from "../modules/VerticalCards";
import FooterSection from "../modules/FooterSection";


function Home() {
  return (
    <>
      <HeaderSection />
      <Slider />
      <div className="mainContent paddingGlobal">
        <div className="left paddingGlobal">
          <SliderDate></SliderDate>
          <MovieCards></MovieCards>
          <MovieSection></MovieSection>
        </div>
        <div className="right paddingGlobal">
          <VerticalSection></VerticalSection>
        </div>
      </div>
      <FooterSection/>
    </>
  );
}

export default Home;
