import {useState} from "react";
import Modal from "../components/Modal";
import Backdrop from "../components/Backdrop";
import {useNavigate} from "react-router-dom";

const FinlandPage = () => {
	const [showModal, setShowModal] = useState(false);
	const navigate = useNavigate();

	const showModalHandler = () => {
		setShowModal(true);
	};

	const cancelModalHandler = () => {
		setShowModal(false);
	};

	const randomHandler = () => {
		switch (Math.floor(Math.random() * 2)) {
			case 0:
				navigate("/italy");
				break;
			case 1:
				navigate("/brazil");
				break;
			default:
				navigate("/");
		}
		setShowModal(false);
	};

	return (
		<div>
			<h2>You are at Helsinki airport. Where do you want to travel?</h2>
			<button onClick={showModalHandler}>Go to random destination</button>
			{showModal && <Modal onCancel={cancelModalHandler} onConfirm={randomHandler} />}
			{showModal ? <Backdrop onClick={cancelModalHandler}/> : null}
		</div>
	);
};

export default FinlandPage;
