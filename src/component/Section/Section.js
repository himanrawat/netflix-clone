import React from "react";
import TvCard from "./TvCard";

const Section = () => {
	return (
		<section className="bg-black border-t-8 border-[#222222] px-[45px] py-[75px]">
			<div className="flex max-w-[1100px] mx-auto">
				<div className="w-6/12 text-white py-[165px]">
					<h1 className="text-[3.125rem]">Enjoy on your TV.</h1>
					<h2>
						Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
						players and more.
					</h2>
				</div>
				<div className="w-6/12 h-screen">
					<TvCard />
				</div>
			</div>
		</section>
	);
};

export default Section;
