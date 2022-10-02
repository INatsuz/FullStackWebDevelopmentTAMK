export default function Counter(props) {
	return (
		<div>
			<h1>Counter</h1>
			<p>Current value: {props.counter}</p>
			<button onClick={() => props.increment()}>Increment</button>
		</div>
	);
};