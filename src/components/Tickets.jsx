import React from "react";

const Tickets = () => {
	return (
		<section class="bg-gray-900 ticketsSection">
			<div class="p-8 md:p-12 lg:px-16 lg:py-24">
				<div class="mx-auto max-w-lg text-center">
					<h2 class="text-2xl font-bold text-white md:text-3xl font-tek">
						Save your spots!
					</h2>

					<p class="hidden text-white sm:mt-4 sm:block">
						Watch out this section in the future to reserve your tickets for the
						event.
					</p>
				</div>

				<div class="mx-auto mt-8 max-w-xl">
					<button class="group mt-4 mx-auto flex w-full items-center justify-center gap-2 rounded-md bg-red-500 px-5 py-3 text-white transition sm:mt-0 sm:w-auto hover:bg-gray-800 hover:text-red-500 hover:duration-300 ticketButton">
						<span class="font-medium"> Beginning reservations soon! </span>

						<svg
							class="size-5 rtl:rotate-180"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Tickets;
