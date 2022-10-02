import AddItem from "./components/AddItem";
import {useState} from "react";
import MenuList from "./components/MenuList";

const menu = [
	{
		id: 1,
		name: "hamburger",
		price: 9,
	},
	{
		id: 2,
		name: "pizza",
		price: 12,
	},
	{
		id: 3,
		name: "meatballs",
		price: 10,
	},
];

const App = () => {
	const [menuItems, setMenuItems] = useState(menu);

	const removeHandler = (id) => {
		console.log("Clicked " + id);
		setMenuItems((prevMenuItems) =>
			prevMenuItems.filter((item) => {
				return item.id !== id;
			})
		);
	};

	return (
		<div>
			<div className="menu">
				<h1>My Restaurant</h1>
				<MenuList menuItems={menuItems} setMenuItems={setMenuItems} removeHandler={removeHandler}/>
				<AddItem setMenuItems={setMenuItems}/>
			</div>
			<div className="menu">

			</div>
		</div>
	);
};

export default App;
