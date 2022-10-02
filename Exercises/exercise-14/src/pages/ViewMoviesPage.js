import MovieList from "../components/MovieList";

export default function ViewMoviesPage(props) {
	return (
		<MovieList movies={props.movies}/>
	);
};