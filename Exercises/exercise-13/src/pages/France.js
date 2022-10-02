import {Link} from "react-router-dom";

const FrancePage = () => {
	return (
		<div>
		<h2>Welcome to the land of the Eiffel Tower! (and baguettes)</h2>
			<Link to="/">
				<button>Fly To Finland</button>
			</Link>
		</div>
	);
};

export default FrancePage;
