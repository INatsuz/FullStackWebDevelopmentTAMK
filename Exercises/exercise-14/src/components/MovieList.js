export default function MovieList(props) {
	return (
		<div>
			{props.movies.length > 0
				? <div>
					{props.movies.map((movie) => (
						<div key={movie.id}>
							<h2>{movie.movieTitle}</h2>
							<h3>{movie.releaseYear}</h3>
							<br></br>
						</div>
					))}
				</div>
				: <p>You have no movies added!</p>
			}
		</div>
	);
};