import AddFamousPerson from "./components/AddFamousPerson";
import FamousPeopleList from "./components/FamousPeopleList";
import {useEffect, useState} from "react";

function App() {
	const [famousPeople, setFamousPeople] = useState([]);
	const [showForm, setShowForm] = useState(false);

	const addFamousPersonHandler = async (person) => {
		const response = await fetch(
			"https://tamk-fullstack-default-rtdb.europe-west1.firebasedatabase.app/famousPeople.json",
			{
				method: "POST",
				body: JSON.stringify(person),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		const data = await response.json();
		console.log(data);
	};

	const fetchFamousPeople = async () => {
		const response = await fetch(
			"https://tamk-fullstack-default-rtdb.europe-west1.firebasedatabase.app/famousPeople.json"
		);
		const data = await response.json();

		const fetchedPeople = [];

		for (const key in data) {
			fetchedPeople.push({
				id: key,
				firstName: data[key].firstName,
				lastName: data[key].lastName,
				birthday: data[key].birthday
			});
		}

		setFamousPeople(fetchedPeople);
	};

	useEffect(() => {
		fetchFamousPeople();
	}, [fetchFamousPeople])

	return (
		<div>
			<section>
				{showForm
					? <AddFamousPerson addFamousPersonHandler={addFamousPersonHandler} setShowForm={setShowForm}/>
					: <button onClick={() => setShowForm(true)}>Add Famous Person</button>
				}
			</section>
			<section>
				<FamousPeopleList famousPeople={famousPeople}/>
			</section>
		</div>
	);
}

export default App;
