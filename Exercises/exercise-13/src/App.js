import ItalyPage from "./pages/Italy";
import BrazilPage from "./pages/Brazil";
import FinlandPage from "./pages/Finland";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import MainNavigation from "./components/MainNavigation";
import PortugalPage from "./pages/Portugal";
import FrancePage from "./pages/France";

const App = () => {
	return (
		<div>
			<BrowserRouter>
			<MainNavigation/>
				<Routes>
					<Route path="/" element={<FinlandPage/>}/>
					<Route path="/italy" element={<ItalyPage/>}/>
					<Route path="/brazil" element={<BrazilPage/>}/>
					<Route path="/portugal" element={<PortugalPage/>}/>
					<Route path="/france" element={<FrancePage/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
