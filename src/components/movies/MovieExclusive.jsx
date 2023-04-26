import { React, useState, useEffect } from "react";
import getMovieById from "./helpers/getMovieById";
import { Link, useParams } from "react-router-dom";

const MovieExclusive = () => {
  const [movie, setMovie] = useState({});

  const { id } = useParams();
console.log("hola")
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getMovieById(id)
      .then((movie) => {
        setMovie(movie);
      })
      .catch((error) => console.error(error));
  };

  console.log(movie);

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} alt="" />
      <Link to={"/main"} >Volver</Link>
    </div>
  );
};

export default MovieExclusive;
