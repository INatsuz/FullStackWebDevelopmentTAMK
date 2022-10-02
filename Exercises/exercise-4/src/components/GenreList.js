import './GenreList.css';
import Movie from "./Movie";

export default function GenreList(props) {
	return (
		<div className="genrelist">
			<h1>{props.title}</h1>
			<Movie info={props.movies[0]}/>
			<Movie info={props.movies[1]}/>
			<Movie info={props.movies[2]}/>
		</div>
	);
};