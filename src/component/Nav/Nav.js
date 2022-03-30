import React from "react";
import SignInBtn from "./Button/SignInBtn";
import LanguageBtn from "./Button/LanguageBtn";
import Logo from "./Logo";

const Nav = () => {
	return (
		<nav className="absolute inset-x-0 top-0 z-10 grid grid-cols-6 gap-4 text-white bg-transparent pt-5 mx-[5%] md:mx-[45px] lg:mx-[3.5rem]">
			<div className="p-4 col-start-1">
				<div>
					<a href="#">
						<Logo />
					</a>
				</div>
			</div>

			{/* <!-- Nav Items Working on Tablet & Bigger Sceen --> */}
			<div className="p-4 hidden md:flex flex-row  font-bold col-end-7 col-span-2">
				<LanguageBtn />
				<SignInBtn />
			</div>
		</nav>
	);
};

export default Nav;
