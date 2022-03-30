import React from "react";
import LanguageBtn from "./component/Nav/Button/LanguageBtn";
import SignInBtn from "./component/Nav/Button/SignInBtn";
import Logo from "./component/Nav/Logo";
// import Logo from "./Logo";
const HeroTest = () => {
	return (
		<>
			<nav
				id="nav"
				className="fixed inset-x-0 top-0 flex flex-row justify-between z-10 text-white bg-transparent"
			>
				<div className="p-4">
					<div className="font-extrabold tracking-widest text-xl">
						<a
							href="#"
							className="transition duration-500 hover:text-indigo-500"
						>
							<Logo />
						</a>
					</div>
				</div>

				{/* <!-- Nav Items Working on Tablet & Bigger Sceen --> */}
				<div className="p-4 hidden md:flex flex-row justify-between font-bold">
					<LanguageBtn />
					<SignInBtn />
					{/* <a
						id="hide-after-click"
						href="#about"
						className="mx-4 text-lg  border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500"
					>
						About
					</a>
					<a
						href="#whyus"
						className="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500"
					>
						Why Us ?
					</a>
					<a
						href="#showcase"
						className="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500"
					>
						Our Products
					</a> */}
				</div>

				{/* <!-- Burger Nav Button on Mobile --> */}
				<div id="nav-open" className="p-4 md:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="feather feather-menu"
					>
						<line x1="3" y1="12" x2="21" y2="12"></line>
						<line x1="3" y1="6" x2="21" y2="6"></line>
						<line x1="3" y1="18" x2="21" y2="18"></line>
					</svg>
				</div>
			</nav>

			{/* <!-- Opened Nav in Mobile, you can use javascript/jQuery --> */}
			<div
				id="nav-opened"
				className="fixed left-0 right-0 hidden bg-white mx-2 mt-16 rounded-br rounded-bl shadow z-10"
			>
				<div className="p-2 divide-y divide-gray-600 flex flex-col">
					<a href="#about" className="p-2 font-semibold hover:text-indigo-700">
						About
					</a>
					<a href="#whyus" className="p-2 font-semibold hover:text-indigo-700">
						Why Us ?
					</a>
					<a
						href="#showcase"
						className="p-2 font-semibold hover:text-indigo-700"
					>
						Our Products
					</a>
				</div>
			</div>

			<header
				id="up"
				className="bg-center bg-fixed bg-no-repeat bg-center bg-cover h-screen relative bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/ed0b5df9-ba9d-4534-bd09-57993daeda56/1c62fa7f-27da-453c-bcfc-4ffb726de69c/IN-en-20220214-popsignuptwoweeks-perspective_alpha_website_large.jpg')]"
				// style={{
				// 	background: `url(
				// 		"https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
				// 	)`,
				// }}
			>
				{/* <!-- Overlay Background + Center Control --> */}
				<div
					className="h-screen bg-opacity-50 bg-black flex items-center justify-center"
					style={{ background: "rgba(0,0,0,0.5)" }}
				>
					<div className="mx-2 text-center">
						<h1 className="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">
							<span className="text-white">Right</span> Place To
						</h1>
						<h2 className="text-gray-200 font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight">
							Get a <span className="text-white">Better</span> and{" "}
							<span className="text-white">Professionals</span> Design
						</h2>
						<div className="inline-flex">
							<button className="p-2 my-5 mx-2 bg-indigo-700 hover:bg-indigo-800 font-bold text-white rounded border-2 border-transparent hover:border-indigo-800 shadow-md transition duration-500 md:text-xl">
								Hire US!
							</button>
							<a href="#about">
								<button className="p-2 my-5 mx-2 bg-transparent border-2 bg-indigo-200 bg-opacity-75 hover:bg-opacity-100 border-indigo-700 rounded hover:border-indigo-800 font-bold text-indigo-800 shadow-md transition duration-500 md:text-lg">
									Learn More
								</button>
							</a>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default HeroTest;
