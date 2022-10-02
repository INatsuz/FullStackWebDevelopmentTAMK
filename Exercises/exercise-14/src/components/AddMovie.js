import {useRef} from "react";
import {useNavigate} from "react-router-dom";

export default function AddMovie(props) {
	const movieTitle = useRef("");
	const releaseYear = useRef(0);

	const navigate = useNavigate();

	const submitHandler = (event) => {
		event.preventDefault();

		const movie = {
			movieTitle: movieTitle.current.value,
			releaseYear: releaseYear.current.value,
		};

		props.addMovieHandler(movie);

		movieTitle.current.value = "";
		releaseYear.current.value = 0;

		navigate("/");
	};

	return (
		<div>
			<form onSubmit={submitHandler}>
				<div>
					<label htmlFor="movieTitle">Movie Title</label>
					<input id="movieTitle" type="text" ref={movieTitle}/>
				</div>
				<div>
					<label htmlFor="releaseYear">Release Year</label>
					<input id="releaseYear" type="number" step={1} min={1900} max={2022} ref={releaseYear}/>
				</div>
				<button type="submit">Add Movie</button>
			</form>
		</div>
	);
};