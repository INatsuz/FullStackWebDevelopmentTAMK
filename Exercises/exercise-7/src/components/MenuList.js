import MenuItem from "./MenuItem";

export default function MenuList(props) {
	return (
		<ul>
			{props.menuItems.map((item) => (
				<MenuItem
					remove={props.removeHandler}
					key={item.id}
					id={item.id}
					name={item.name}
					price={item.price}
				/>
			))}
		</ul>
	);
};