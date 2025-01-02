import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import asteroid from "../../assets/images/asteroidCity.png";
import blackDynamite from "../../assets/images/blackDynamite.png";
import gloria from "../../assets/images/gloria.png";
import rideLone from "../../assets/images/rideLone.png";

const MovieCard = ({ movie }) => {
  return (
    <Card className="movie-card">
      <div className="cardWrapper">
        <div className="pc-movie-image-handler">
          <a className="imageWrapper ratioImageWrapper Ratio_poster">
            <img
              src={movie.poster}
              alt={movie.title}
              className="movie-poster"
            />
          </a>
        </div>
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <div className="movie-duration">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM11 10H15V12H9V5H11V10Z"
                fill="currentColor"
              />
            </svg>
            <div className="duration textSmall">{movie.duration}</div>|
            <div className="rating fw700 textSmall">{movie.rating}</div>
          </div>
          <Card.Text className="movie-content textNormal">
            Directed by {movie.director}
            <br />
            Starring {movie.cast.join(", ")}
            <br />
            {movie.country} ({movie.year})
          </Card.Text>

          <div className="buttons">
            <a className="playBtn cardButton" href="/play">
              <div className="iconWrapper">
                <svg
                  width="12"
                  height="14"
                  viewBox="0 0 12 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.3042 7.00003L0.347677 13.3258L0.347677 0.674275L11.3042 7.00003Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              Play Trailer
            </a>
            <a className="cardButton moreBtn fw700" href="/more">
              More Performances
            </a>
          </div>
        </Card.Body>
      </div>

      <div className="performance-times">
        <div>
          {movie.performances.map((performance, index) => (
            <Button
              key={index}
              size="sm"
              className="cardButton intro fw700 textSmall"
            >
              {performance.label}
            </Button>
          ))}
        </div>
        <div>
          {movie.qualities?.map((qualitie, index) => (
            <Button
              key={index}
              size="sm"
              className="cardButton intro fw700 textSmall"
            >
              {qualitie.label}
            </Button>
          ))}
        </div>
        <div>
          {movie.lenses?.map((lense, index) => (
            <Button
              key={index}
              variant={lense.isSoldOut ? "out" : "intro"}
              size="sm"
              className="cardButton intro fw700 textSmall"
            >
              {lense.label}
            </Button>
          ))}
        </div>
        <div>
          {movie.times?.map((time, index) => (
            <Button
              key={index}
              size="sm"
              className="cardButton color fw700 textSmall"
            >
              {time.label}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
};

const MovieList = () => {
  const movies = [
    {
      title: "Asteroid City",
      duration: "1H 25M",
      rating: "12A",
      director: "Wes Anderson",
      cast: ["Jason Schwartzman", "Scarlett Johansson", "Tom Hanks"],
      country: "USA",
      year: "2023",
      poster: asteroid,
      performances: [{ label: "4K | Intro", isSoldOut: false }],
      qualities: [{ label: "4K", isSoldOut: false }],
      lenses: [
        { label: "35mm", isSoldOut: false },
        { label: "35mm", isSoldOut: false },
      ],
      times: [{ label: "3:30 PM", isSoldOut: false }],
    },
    {
      title: "Gloria",
      duration: "1H 28M",
      rating: "12A",
      director: "John Cassavetes",
      cast: ["Gena Rowlands", "Buck Henry", "Julie Carmen"],
      country: "USA",
      year: "1980",
      poster: gloria,
      performances: [],
      qualities: [{ label: "4K", isSoldOut: false }],
      lenses: [
        { label: "sold out", isSoldOut: true },
        { label: "35mm", isSoldOut: false },
        { label: "35mm", isSoldOut: false },
      ],
      times: [
        { label: "3:30 PM", isSoldOut: false },
        { label: "3:30 PM", isSoldOut: false },
        { label: "3:30 PM", isSoldOut: false },
      ],
    },
    {
      title: "Black Dynamite",
      duration: "1H 25M",
      rating: "12A",
      director: "Scott Sanders",
      cast: ["Michael Jai White", "Tommy Davidson", "Byron Minns"],
      country: "USA",
      year: "2009",
      poster: blackDynamite,
      performances: [
        { label: "4K | Intro", isSoldOut: false },
        { label: "3:30 PM", isSoldOut: false },
      ],
    },
    {
      title: "Ride Lonesome",
      duration: "1h 25m",
      rating: "12A",
      director: "Budd Boetticher",
      cast: ["Randolph Scott", "Karen Steele", "Pernell Roberts"],
      country: "USA",
      year: "1959",
      poster: rideLone,
      performances: [
        { label: "4K | Intro", isSoldOut: false },
        { label: "3:30 PM", isSoldOut: false },
      ],
    },
  ];

  return (
    <div className="movieCards sectionMd">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
