import './App.css';
import Country from "./components/Country";

const countries = [
	{
		name: "Finland",
		capital: "Helsinki"
	}, {
		name: "Portugal",
		capital: "Lisbon"
	}, {
		name: "France",
		capital: "Paris"
	}
]

function App() {
	return (
		<div className="App">
			<Country country={countries[0]}/>
			<Country country={countries[1]}/>
			<Country country={countries[2]}/>
		</div>
	);
}

export default App;
