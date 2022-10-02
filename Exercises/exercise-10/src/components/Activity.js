import "./Activity.css";

export default function Activity(props) {
	return (
		<div className="activity">
			<h1>Do this:</h1>
			<p>{props.activity.activity}</p>
		</div>
	);
};