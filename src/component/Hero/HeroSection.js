import React from "react";
import Nav from "../Nav/Nav";
import Jumbotron from "./HeroContent/Jumbotron";

const HeroSection = () => {
	return (
		<>
			<header
				id="up"
				className="bg-center  bg-no-repeat bg-cover h-screen relative bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/ed0b5df9-ba9d-4534-bd09-57993daeda56/1c62fa7f-27da-453c-bcfc-4ffb726de69c/IN-en-20220214-popsignuptwoweeks-perspective_alpha_website_large.jpg')] "
			>
				<Nav />
				{/* <!-- Overlay Background + Center Control --> */}
				<Jumbotron />
			</header>
		</>
	);
};

export default HeroSection;
