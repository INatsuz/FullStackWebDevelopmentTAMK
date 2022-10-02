import MoviesList from "./components/MoviesList";
import "./App.css";
import {useEffect, useState} from "react";

const App = () => {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(function () {
		fetchMoviesHandler();
	}, []);

	const fetchMoviesHandler = async () => {
		setError(null);
		setIsLoading(true);

		try {
			const response = await fetch("https://swapi.dev/api/films");
			const data = await response.json();

			const transformedMovies = data.results.map(movie => {
				return {
					id: movie.episode_id,
					title: movie.title,
					openingText: movie.opening_crawl,
					releaseDate: movie.release_date
				};
			});

			setMovies(transformedMovies);
		} catch (err) {
			setError(err.message);
		}

		setIsLoading(false);
	}

	return (
		<>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>
				{error && <p>{error}</p>}
				{isLoading
					? <p>Loading...</p>
					: <MoviesList movies={movies}/>
				}
			</section>
		</>
	);
};

export default App;
