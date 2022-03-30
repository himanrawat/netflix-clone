import React from "react";
import HeroForm from "./HeroForm";

const HeroContent = () => {
	return (
		<div className="mx-2 text-center md:max-w-[960px] py-[30px] md:py-[75px]">
			<div className="xl:max-w-[800px] max-w-[640px] p-auto">
				<h1 className="text-white font-bold text-[1.75rem] md:text-[3.125rem] lg:text-[4rem]  leading-[1.1]">
					Unlimited movies, TV shows and more.
				</h1>
				<h2 className="text-white font-semibold text-[1.125rem] md:text-[1.625rem] my-4">
					Watch anywhere. Cancel anytime.
				</h2>
			</div>
			<HeroForm />
		</div>
	);
};

export default HeroContent;
