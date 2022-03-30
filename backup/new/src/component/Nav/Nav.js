import React from "react";
import SignInBtn from "./Button/SignInBtn";
import LanguageBtn from "./Button/LanguageBtn";
import Logo from "./Logo";

const Nav = () => {
	return (
		<nav className="fixed inset-x-0 top-0 flex flex-row justify-between z-10 text-white bg-transparent pt-5 mx-[5%] md:mx-[45px] lg:mx-[3.5rem]">
			<div className="p-4">
				<div>
					<a href="#">
						<Logo />
					</a>
				</div>
			</div>

			{/* <!-- Nav Items Working on Tablet & Bigger Sceen --> */}
			<div className="p-4 hidden md:flex flex-row justify-between font-bold">
				<LanguageBtn />
				<SignInBtn />
			</div>
		</nav>
	);
};

export default Nav;
