import { React, useState, useEffect } from "react";
import getMovies from "./helpers/getMovies";
import Movie from "./Movie";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState(null);

  // Efectos
  useEffect(() => {
    getData();
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // Lógica funcional
  const getData = () => {
    getMovies()
      .then((movies) => {
        setMovies(movies);
      })
      .catch((error) => console.error(error));
  };

  const searchMovie = () => {
    const input = document.querySelector("#inputSearch");
    setSearchTerm(input.value);
  };

  return (
    <div>
      <h1>Busque su pelicula</h1>
      <input type="text" onKeyUp={searchMovie} id="inputSearch" />

      {user != null ? (
        movies
          .filter((movie) =>
            movie.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((movie) => (
            <>
              <Link to={`/movie/${movie.id}`}>
                <Movie key={movie.id} data={movie} />
              </Link>
            </>
          ))
      ) : (
        <p>Debe iniciar sesión</p>
      )}
      {movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      ).length == 0 && <p>No se encontraron películas con ese título</p>}
    </div>
  );
};

export default Movies;
