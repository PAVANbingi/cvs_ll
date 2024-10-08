import React from "react";

export default function Gallery() {
	const images = [
		"/images/pic1.jpg",
		"/images/pic2.jpg",
		"/images/pic3.jpg",
		"/images/pic4.jpg",
		"/images/pic5.jpg",
		"/images/pic6.jpg",
		"/images/pic9.jpg",
		"/images/pic10.jpg",
		"/images/pic11.jpg",
		"/images/pic12.jpg",
		"/images/pic13.jpg",
		"/images/pic15.jpg",
		"/images/pic16.jpg",
		"/images/pic17.jpg",
		"/images/pic18.jpg",
		"/images/pic19.jpg",
	];
	return (
		<>
			<div className="w-full bg-[#f5f5f5] flex flex-col justify-around gap-5 font-sans font-Poppins items-center py-5 px-24">
				<div className="w-full flex flex-col justify-center items-center gap-3 p-5 pt-5 pb-1">
					<p className="text-xl font-semibold uppercase">FLY WITH US</p>
					<h1 className="text-5xl text-primary font-semibold uppercase my-3">
						NO.1 <span className="text-white bg-primary px-2">AIR HOSTESS</span>{" "}
						COURSE INSTITUTE
					</h1>
					<p className="text-lg text-center">
						Become a Cabin Crew with Aténas Fraternity
					</p>
					<hr className="w-[200px] h-1 bg-primary border-none" />
				</div>
				<div className="grid grid-cols-4 gap-2 mb-12">
					{images.map((image, index) => (
						<div
							key={index}
							className="h-[200px] w-[270px] flex justify-center"
						>
							<img
								src={image}
								alt={`brand-${index + 1}`}
								className="h-full w-full object-cover object-center"
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
