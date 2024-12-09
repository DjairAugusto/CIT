import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../pages/Footer";

function App() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default App;
