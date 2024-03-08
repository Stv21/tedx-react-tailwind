import React from "react";
import heroImage from "../assets/heroImage.webp";
import "./Home.css";

const Home = () => {
	return (
		<div
			className="heroImage h-screen w-screen bg-cover bg-center bg-no-repeat font-tek venueSection"
			style={{ backgroundImage: `url(${heroImage})` }}>
			<div className="heroText absolute inset-x-0 py-40 text-center text-5xl">
				<p className="text-red-500 px-4">
					Theme: <span className="text-white">1.618 - The Golden Ratio</span>
				</p>
			</div>

			<section class="text-white bg-gray-900 bg-opacity-60 font-tek">
				<div class="mx-auto max-w-screen-xl px-4 py-32 flex h-screen items-center font-tek">
					<div class="mx-auto max-w-xl text-center font-tek">
						<h1 class="text-3xl font-extrabold sm:text-5xl font-tek">
							Explore the Golden Ratio.
						</h1>
						<h1 class="text-3xl font-extrabold sm:text-5xl font-tek">
							<div>
								<strong class="font-extrabold text-red-500 sm:inline-block font-tek">
									TED
								</strong>
								<sup>x</sup>XIE, 2024.
							</div>
						</h1>

						<p class="mt-4 sm:text-xl/relaxed font-tek">
							Click the button below to explore the location for the event.
						</p>

						<div class="mt-8 flex flex-wrap justify-center gap-4">
							<a
								class="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:text-red-500 hover:bg-gray-800 focus:outline-none focus:ring active:bg-red-500 sm:w-auto font-tek hover:duration-300"
								href="https://maps.app.goo.gl/EPy2iMiBzath14hS7"
								target="_blank"
								rel="noreferrer">
								Learn More
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
