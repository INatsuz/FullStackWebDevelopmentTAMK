import './App.css';
import Activity from "./components/Activity";
import {useEffect, useState} from "react";

function App() {
	const [activity, setActivity] = useState(null);

	useEffect(() => {
		fetchActivity();
	}, [])

	const fetchActivity = async () => {
		const response = await fetch("https://www.boredapi.com/api/activity?participants=1");
		const data = await response.json();

		setActivity({activity: data.activity});
	}

	return (
		<div className="section">
			{activity && <Activity activity={activity}/>}
			<button onClick={fetchActivity}>Generate Activity</button>
		</div>
	);
}

export default App;
