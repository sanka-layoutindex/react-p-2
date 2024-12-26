import React from "react";
import gmd from "../../assets/images/gameOfDeath.png";
import muchi from "../../assets/images/munich.png";
import mr from "../../assets/images/matrixRevolutions.png";
import tb from "../../assets/images/theBowery.png";
import fdm from "../../assets/images/fewDollarsMore.png";
import gmd2 from "../../assets/images/gameOfDeathII.png";
import jr from "../../assets/images/jinRoh.png";
import bd from "../../assets/images/blackDynamite1.png";


const movies = [
  { id: 1, title: "Game of Death", poster: gmd },
  { id: 2, title: "Munich", poster: muchi },
  { id: 3, title: "Matrix Revolutions", poster: mr },
  { id: 4, title: "The Bowery", poster: tb },
  { id: 5, title: "For a Few Dollars More", poster: fdm },
  { id: 6, title: "Game of Death II", poster: gmd2 },
  { id: 7, title: "Jin-Roh: The Wolf Brigade", poster: jr },
  { id: 8, title: "Black Dynamite", poster: bd },
];

const MovieSection = () => {
  return (
    <div className="movie-section sectionLarge">
      <div className="titleWrapper">
        <h2 className="fontAlexussHeavy fcPrimary">Also Showing</h2>
        <a href="/movies" className="show-all-link fcPrimary textMedium fw700">
          Show all movies →
        </a>
      </div>

      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={movie.poster}
              alt={movie.title}
              className="movie-poster Ratio_poster"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSection;
