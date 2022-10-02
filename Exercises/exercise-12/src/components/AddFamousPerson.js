import {useRef} from "react";

const AddFamousPerson = (props) => {
	const firstName = useRef("");
	const lastName = useRef("");
	const birthday = useRef("");

	const submitHandler = (event) => {
		console.log("Submitted");
		event.preventDefault();

		const famousPerson = {
			firstName: firstName.current.value,
			lastName: lastName.current.value,
			birthday: birthday.current.value,
		};

		props.addFamousPersonHandler(famousPerson);

		firstName.current.value = "";
		lastName.current.value = "";
		birthday.current.value = "";

		props.setShowForm(false);
	};

	return (
		<form onSubmit={submitHandler}>
			<div>
				<label htmlFor="text">First Name</label>
				<input type="text" id="first-name" ref={firstName}/>
			</div>
			<div>
				<label htmlFor="text">Last Name</label>
				<input type="text" id="last-name" ref={lastName}/>
			</div>
			<div>
				<label htmlFor="date">Birthday</label>
				<input type="date" id="birthday" ref={birthday}/>
			</div>

			<button type="submit">Add Famous Person</button>
			<button type="button" onClick={() => props.setShowForm(false)}>Cancel</button>
		</form>
	);
};

export default AddFamousPerson;
