"use client";
import React, { useEffect, useState } from "react";

function Carousel() {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % 10);
		}, 4000);
		return () => clearInterval(interval);
	}, []);

	const arr: string[] = [
		"1.webp",
		"2.webp",
		"3.webp",
		"4.webp",
		"5.webp",
		"6.webp",
		"7.png",
		"8.png",
		"9.webp",
		"10.webp",
		"11.webp",
		"12.webp",
		"13.webp",
		"14.webp",
		"15.png",
	];

	return (
		<div className="w-[1140px] overflow-hidden">
			<div
				className="flex transition-all duration-700"
				style={{ right: `${currentIndex * 190}px`, position: "relative" }}
			>
				{arr.map((url, index) => (
					<img
						key={index}
						src={"/logos/" + url}
						className="ml-5 h-[86px] w-[170px] border-[0.5px] border-gray"
						alt={`Image ${index}`}
					/>
				))}
			</div>
		</div>
	);
}

export default Carousel;
