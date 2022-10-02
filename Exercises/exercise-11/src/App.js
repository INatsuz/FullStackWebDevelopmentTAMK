import AddTodo from "./components/AddTodo";
import {useState, useEffect} from "react";
import TodoList from "./components/TodoList";

const App = () => {
	const [todos, setTodos] = useState([]);

	// const todos = [
	//   {
	//     id: 1,
	//     text: "Learn React",
	//     date: "2022-08-17",
	//   },
	//   {
	//     id: 2,
	//     text: "Choose project work topic",
	//     date: "2022-10-15",
	//   },
	// ];

	const addTodoHandler = async (todo) => {
		console.log(todo);
		const response = await fetch(
			"https://tamk-fullstack-default-rtdb.europe-west1.firebasedatabase.app/todos.json",
			{
				method: "POST",
				body: JSON.stringify(todo),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		const data = await response.json();
		console.log(data);
	};

	const fetchTodos = async () => {
		const response = await fetch(
			"https://tamk-fullstack-default-rtdb.europe-west1.firebasedatabase.app/todos.json"
		);
		const data = await response.json();

		const fetchedTodos = [];

		for (const key in data) {
			fetchedTodos.push({
				id: key,
				text: data[key].text,
				date: data[key].date,
			});
		}

		setTodos(fetchedTodos);
	};

	useEffect(() => {
		fetchTodos();
	}, [fetchTodos]);

	return (
		<>
			<section>
				<AddTodo onAddTodo={addTodoHandler}/>
			</section>
			<section>
				<TodoList todos={todos}/>
			</section>
		</>
	);
};

export default App;
