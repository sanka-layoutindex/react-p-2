import React from "react";
import MovieList from "../common/MovieCard";

function MovieCards() {
  return (
    <>
      <div className="movieCards">
        <div className="linkWrapper">
          <a
            href="/movies"
            className="show-all-link textMedium fw700"
          >
            Show all movies
            <div className="iconWrapper">
              <svg
                width="13"
                height="11"
                viewBox="0 0 13 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.5 5.49997C0.5 5.30106 0.579018 5.11029 0.71967 4.96964C0.860322 4.82899 1.05109 4.74997 1.25 4.74997H9.9395L6.719 1.53097C6.57817 1.39014 6.49905 1.19913 6.49905 0.999971C6.49905 0.800807 6.57817 0.609801 6.719 0.468971C6.85983 0.328141 7.05084 0.249023 7.25 0.249023C7.44916 0.249023 7.64017 0.328141 7.781 0.468971L12.281 4.96897C12.3508 5.03864 12.4063 5.1214 12.4441 5.21252C12.4819 5.30364 12.5013 5.40132 12.5013 5.49997C12.5013 5.59862 12.4819 5.6963 12.4441 5.78742C12.4063 5.87854 12.3508 5.9613 12.281 6.03097L7.781 10.531C7.64017 10.6718 7.44916 10.7509 7.25 10.7509C7.05084 10.7509 6.85983 10.6718 6.719 10.531C6.57817 10.3901 6.49905 10.1991 6.49905 9.99997C6.49905 9.80081 6.57817 9.6098 6.719 9.46897L9.9395 6.24997H1.25C1.05109 6.24997 0.860322 6.17095 0.71967 6.0303C0.579018 5.88965 0.5 5.69888 0.5 5.49997Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </a>
        </div>
        <MovieList></MovieList>
      </div>
    </>
  );
}

export default MovieCards;
