const url = 'https://api.themoviedb.org/3/discover/movie?&language=es-es&sort_by=popularity.desc&api_key=a4df3c8dc7664a98461a578e5c40c97d';

// GET: Devuelve todos los products de api/tasks
const getMovies= async () => {
	try {
		const response = await fetch(url);
		if (!response.ok)
    throw new Error(response.status + ' ' + response.statusText);
    
		const data = await response.json();
		
		return data.results;
	} catch (error) {
		console.log(error);
	}
};




export default getMovies;