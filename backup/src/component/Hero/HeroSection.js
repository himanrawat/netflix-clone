import React from "react";
import Nav from "../Nav/Nav";
import HeroContent from "./HeroContent/HeroContent";

const HeroSection = () => {
	return (
		<>
			<Nav />
			<header className="h-screen brightness-50 bg-black font-white pt-5 bg-contain bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/ed0b5df9-ba9d-4534-bd09-57993daeda56/1c62fa7f-27da-453c-bcfc-4ffb726de69c/IN-en-20220214-popsignuptwoweeks-perspective_alpha_website_large.jpg')]"></header>
			<HeroContent />
		</>
	);
};

export default HeroSection;
