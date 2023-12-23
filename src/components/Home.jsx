import React from "react";
import "./Home.css";

const Home = () => {
	return (
		<div className="heroImage h-screen w-screen bg-cover bg-center bg-no-repeat">
			<div className="heroText absolute inset-x-0 z-0 py-40 text-center font-tek text-5xl">
				<p className="text-red-500 px-4">
					Theme: <span className="text-white">1.618 - The Golden Ratio</span>
				</p>
			</div>
		</div>
	);
};

export default Home;
