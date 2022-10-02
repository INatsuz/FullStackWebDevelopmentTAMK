import './App.css';
import Counter from "./components/Counter";
import {useState} from "react";

function App() {
	const [counter1, setCounter1] = useState(0);
	const [counter2, setCounter2] = useState(0);

	return (
		<div className="App">
			<Counter counter={counter1} increment={() => setCounter2(counter2 + 1)}/>
			<Counter counter={counter2} increment={() => setCounter1(counter1 + 1)}/>
		</div>
	);
}

export default App;
