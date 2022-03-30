import React from "react";
import HeroContent from "./HeroContent";

const Jumbotron = () => {
	return (
		<div
			className="h-screen bg-opacity-50 bg-black flex items-center justify-center"
			style={{ background: "rgba(0,0,0,0.5)" }}
		>
			<HeroContent />
		</div>
	);
};

export default Jumbotron;
