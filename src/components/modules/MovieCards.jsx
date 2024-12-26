import React from "react";
import MovieList from "../common/MovieCard";

function MovieCards() {
  return (
    <>
      <div className="movieCards">
        <div className="linkWrapper">
          <a
            href="/movies"
            className="show-all-link fcPrimary textMedium fw700"
          >
            Show all movies →
          </a>
        </div>
        <MovieList></MovieList>
      </div>
    </>
  );
}

export default MovieCards;
