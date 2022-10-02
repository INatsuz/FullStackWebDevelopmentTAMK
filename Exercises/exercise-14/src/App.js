import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AddMoviePage from "./pages/AddMoviePage";
import ViewMoviesPage from "./pages/ViewMoviesPage";
import MainNavigation from "./components/MainNavigation";
import {useEffect, useState} from "react";

function App() {
	const [movies, setMovies] = useState([]);

	const addMovieHandler = async (movie) => {
		const response = await fetch(
			"https://tamk-fullstack-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
			{
				method: "POST",
				body: JSON.stringify(movie),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		const data = await response.json();
		console.log(data);
	};

	const fetchMovies = async () => {
		const response = await fetch(
			"https://tamk-fullstack-default-rtdb.europe-west1.firebasedatabase.app/movies.json"
		);
		const data = await response.json();

		const fetchedMovies = [];

		for (const key in data) {
			fetchedMovies.push({
				id: key,
				movieTitle: data[key].movieTitle,
				releaseYear: data[key].releaseYear,
			});
		}

		setMovies(fetchedMovies);
	};

	useEffect(() => {
		fetchMovies();
	}, [fetchMovies])

	return (
		<div>
			<BrowserRouter>
				<MainNavigation/>
				<Routes>
					<Route path="/" element={<ViewMoviesPage movies={movies}/>} />
					<Route path="/addMovie" element={<AddMoviePage addMovieHandler={addMovieHandler}/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
