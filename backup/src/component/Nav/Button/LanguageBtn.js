import React, { useState } from "react";

const LanguageBtn = () => {
	const [language, setLanguage] = useState(false);

	const toggle = () => {
		setLanguage(!language);
	};

	return (
		<div className="inline-block mr-8 mx-3 ">
			<button
				onClick={toggle}
				className="text-white px-3 py-1 rounded-sm border-white border relative"
			>
				English
			</button>
			<div className={language ? "w- absolute block" : "hidden"}>
				<ul className="text-center text-white bg-gray-800 w-full px-3">
					<li className="hover:bg-blue-500 cursor-pointer">
						<a href="#">English</a>
					</li>
					<li className="hover:bg-blue-500 cursor-pointer">
						<a href="#">Hindi</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default LanguageBtn;
