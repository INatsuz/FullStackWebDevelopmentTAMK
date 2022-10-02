import "./Country.css";

export default function Country(props) {
	return (
		<div className="country">
			<h1>{props.country.name}</h1>
			<p>Capital: {props.country.capital}</p>
		</div>
	);
};