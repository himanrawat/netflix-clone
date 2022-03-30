import React from "react";
import SignInBtn from "./Button/SignInBtn";
import LanguageBtn from "./Button/LanguageBtn";
import Logo from "./Logo";

const Nav = () => {
	return (
		<nav className="px-[5%] sm:px-11 md:px-14 pt-2 flex absolute z-10 w-full items-center justify-center">
			<Logo />
			<div className="ml-auto ">
				<LanguageBtn />
			</div>
			<div>
				<SignInBtn />
			</div>
		</nav>
	);
};

export default Nav;
