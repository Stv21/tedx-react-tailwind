import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Info from "./components/Info";
import NavBar from "./components/NavBar";
import Speakers from "./components/Speakers";
import Tickets from "./components/Tickets";
import Loader from "./components/Loader";

function App() {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const loading = () => {
			setTimeout(() => {
				setIsLoading(false);
			}, 1500);
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
			<Tickets />
			<Footer />
			<Analytics />
			<SpeedInsights />
		</div>
	);
}

export default App;
