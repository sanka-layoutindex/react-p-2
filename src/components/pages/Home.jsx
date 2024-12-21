import React from "react";
import HeaderSection from "../modules/HeaderSection";
import Slider from "../common/Slider";
import SliderDate from "../common/SliderDate";
import MovieList from "../common/MovieCard";

function Home() {
  return (
    <>
      <HeaderSection />
      <Slider />
      <div className="mainContent paddingGlobal">
        <div className="left">
          <SliderDate></SliderDate>
          <MovieList></MovieList>
        </div>
        <div className="right">
        </div>
      </div>
    </>
  );
}

export default Home;
