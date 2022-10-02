import AddMovie from "../components/AddMovie";

export default function AddMoviePage(props) {
	return (
		<AddMovie addMovieHandler={props.addMovieHandler}/>
	);
};