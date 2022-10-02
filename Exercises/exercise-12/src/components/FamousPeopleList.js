export default function FamousPeopleList(props) {
	return (
		<div>
			{props.famousPeople.length > 0
				? <div>
					{props.famousPeople.map((person) => (
						<div key={person.id}>
							<h2>{person.firstName}</h2>
							<h3>{person.lastName}</h3>
							<h3>{person.birthday}</h3>
							<br></br>
						</div>
					))}
				</div>
				: <p>You have no famous people added!</p>
			}
		</div>
	);
};