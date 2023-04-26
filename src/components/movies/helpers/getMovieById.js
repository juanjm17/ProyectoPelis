const getMovieById = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=a4df3c8dc7664a98461a578e5c40c97d`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(response.status + " " + response.statusText);
  
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  export default getMovieById;
  