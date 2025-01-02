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
      <section className="main-section">
        <HeaderSection />
        <Slider />
        <div className="paddingGlobal">
          <div className="containerMedium">
            <div className="mainContent">
              <div className="left">
                <SliderDate></SliderDate>
                <MovieCards></MovieCards>
                <MovieSection></MovieSection>
              </div>
              <div className="right">
                <VerticalSection></VerticalSection>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
}

export default Home;
