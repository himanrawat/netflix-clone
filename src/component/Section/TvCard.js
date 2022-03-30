import React from "react";
import TV from "../../Assets/Image/tv.png";
import Screen from "../../Assets/Image/screenPlay.m4v";

function TvCard() {
	return (
		<>
			<div className="relative z-[1]">
				<img src={TV} alt="tv" />
				<video
					autoPlay=""
					loop=""
					className="absolute left-[75px] top-[95px] -z-[1] "
				>
					<source src={Screen} type="video/mp4" />
				</video>
			</div>
		</>
	);
}

export default TvCard;
