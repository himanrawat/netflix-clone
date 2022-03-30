import React from "react";
import LanguageBtn from "./component/Nav/Button/LanguageBtn";
import SignInBtn from "./component/Nav/Button/SignInBtn";
import Logo from "./component/Nav/Logo";
const HeroTest = () => {
	return (
		<>
			<nav className="fixed inset-x-0 top-0 flex flex-row justify-between z-10 text-white bg-transparent">
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

			<header
				id="up"
				className="bg-center bg-fixed bg-no-repeat bg-cover h-screen relative bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/ed0b5df9-ba9d-4534-bd09-57993daeda56/1c62fa7f-27da-453c-bcfc-4ffb726de69c/IN-en-20220214-popsignuptwoweeks-perspective_alpha_website_large.jpg')]"
			>
				{/* <!-- Overlay Background + Center Control --> */}
				<div
					className="h-screen bg-opacity-50 bg-black flex items-center justify-center"
					style={{ background: "rgba(0,0,0,0.5)" }}
				>
					<div className="mx-2 text-center md:max-w-[960px] py-[30px] md:py-[75px]">
						<div className="xl:max-w-[800px] max-w-[640px] p-auto">
							<h1 className="text-gray-100 font-bold text-[1.75rem] md:text-[3.125rem] lg:text-[4rem]  leading-[1.1]">
								Unlimited movies, TV shows and more.
							</h1>
							<h2 className="text-gray-200 text-[1.125rem] md:text-[1.625rem] my-4">
								Watch anywhere. Cancel anytime.
							</h2>
							<div className=" w-full">
								<form action="#" method="post">
									<h3 className="text-gray-200 text-[18px] md:text-[23px] lg:text-[1.2rem] px-[5%] pb-5">
										Ready to watch? Enter your email to create or restart your
										membership.
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
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default HeroTest;
