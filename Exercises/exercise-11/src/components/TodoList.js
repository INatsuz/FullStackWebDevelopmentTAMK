export default function TodoList(props) {
	return (
		<div>
			{props.todos.length > 0
				? <div>
					{props.todos.map((todo) => (
						<div key={todo.id}>
							<h2>{todo.text}</h2>
							<h3>{todo.date}</h3>
							<br></br>
						</div>
					))}
				</div>
				: <p>You have no todos yet!</p>
			}
		</div>
	);
};