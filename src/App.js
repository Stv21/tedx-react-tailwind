import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Info from "./components/Info";
import NavBar from "./components/NavBar";
import Speakers from "./components/Speakers";
import Loader from "./components/Loader";

function App() {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const loading = () => {
			setTimeout(() => {
				setIsLoading(false);
			}, 4000);
		};
		loading();
	}, []);
	return isLoading ? (
		<Loader />
	) : (
		<div>
			<NavBar />
			<Home />
			<Speakers />
			<Info />
			<Footer />
		</div>
	);
}

export default App;
