import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getAuth } from "firebase/auth";
import "../movieExclusive.css"
import getMovieById from "./helpers/getMovieById";

const MovieExclusive = () => {
  const [movie, setMovie] = useState({});
  const [user, setUser] = useState(null);

  const { id } = useParams();

  const getAverage = (number) => {
    const star = "⭐";
    const log = star.repeat(number);

    return log;
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    getData();
  }, [id]);

  const getData = () => {
    getMovieById(id)
      .then((movie) => {
        setMovie(movie);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container">
      {user ? (
        <>
          <h2>Titulo: {movie.title}</h2>
          <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="" />
          <p>Descripcion: {movie.overview}</p>
          <p>Fecha: {movie.release_date}</p>
          <p>Valoracion: {getAverage(movie.vote_average)}</p>
          <Link to={"/main"} className="link">Volver</Link>
        </>
      ) : (
        <p>Debe iniciar sesión para ver esta página.</p>
      )}
    </div>
  );
  
};

export default MovieExclusive;
