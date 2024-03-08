import React from "react";
import backgroundImage from "../assets/BGGR.webp";
import currSpeakers from "../assets/Ted24_speakers_wo_bg.webp";
import "./Speakers.css";

const Speakers = () => {
	const speakersData = [
		{
			id: 1,
			name: "Tanmay Vekaria",
			description: "Comedian, Actor",
		},
		{
			id: 2,
			name: "Prateek Sethi",
			description: "Entrepreneur, Designer, Producer",
		},
		{
			id: 3,
			name: "Chetan Tambe",
			description: "Athlete",
		},
		{
			id: 4,
			name: "Rohan Gujral",
			description: "Comedian, Actor",
		},
		{
			id: 5,
			name: "Roop Varma",
			description: "Lawyer, CS",
		},
	];
	return (
		<div
			className="speakersSection relative h-fit w-screen bg-cover bg-center bg-no-repeat"
			style={{ backgroundImage: `url(${backgroundImage})` }}>
			<div className="flex flex-col items-center">
				<div className="heroText py-40 mx-4 text-center font-tek text-white text-5xl">
					Meet Our Keynote Speakers for{" "}
					<span className="font-tek text-red-500">
						TED<sup>x</sup>
					</span>
					XIE 2024!
				</div>
				<div className="flex justify-center items-center h-full">
					<img src={currSpeakers} alt="Speakers" className="lg:w-[600px]" />
				</div>
				<div className="speakers justify-around mt-4 mb-8">
					{speakersData.map(({ id, name, description }) => (
						<div
							key={id}
							className="speaker bg-gray-800 bg-opacity-60 p-4 rounded-lg text-center mx-2 mb-8">
							<p className="text-white text-xl font-extrabold mb-2">{name}</p>
							<p className="text-white text-md font-semibold">{description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Speakers;
