import React from 'react';
import '../movies.css';

const Movie = ({ data }) => {
  return (

    <div className="movie-card">
      <h3 className="movie-title">{data.title}</h3>
      <img
        className="movie-poster"
        src={"https://image.tmdb.org/t/p/w300/" + data.poster_path}
        alt=""
      />
    </div>
   
  );
}

export default Movie;
