import React, { useState } from "react";

const LanguageBtn = () => {
	const [language, setLanguage] = useState(false);

	const toggle = () => {
		setLanguage(!language);
	};

	return (
		<>
			<button
				onClick={toggle}
				className="text-white w-28 py-1 rounded-sm border-white border mr-8 mx-3"
			>
				English
				<div className={language ? "absolute block" : "hidden"}>
					<ul className="text-center text-white bg-gray-800 flex flex-col items-center justify-center ">
						<li className="hover:bg-blue-500 cursor-pointer w-28">
							<a href="#">English</a>
						</li>
						<li className="hover:bg-blue-500 cursor-pointer w-28">
							<a href="#">Hindi</a>
						</li>
					</ul>
				</div>
			</button>
		</>
	);
};

export default LanguageBtn;
