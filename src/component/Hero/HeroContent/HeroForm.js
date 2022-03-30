import React from "react";

const HeroForm = () => {
	return (
		<div className=" w-full">
			<form action="#" method="post">
				<h3 className="text-white font-semibold text-[18px] md:text-[23px] lg:text-[1.2rem] px-[5%] pb-5">
					Ready to watch? Enter your email to create or restart your membership.
				</h3>

				<div class="w-full flex ">
					<input
						class="w-full focus:outline-none text-gray-400 px-4 py-3 h-[70px] bg-white"
						placeholder="Email address"
						type="text"
					/>
					<div class="bg-netflix-red flex-shrink-0 flex text-white text-base lg:text-[1.625rem] px-5">
						<button class="px-4 flex  items-center">
							Get Started
							<svg
								class="w-6"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default HeroForm;
