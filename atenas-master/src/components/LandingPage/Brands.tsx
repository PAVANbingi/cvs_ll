import React from "react";

export default function Brands() {
	const brands = [
		"/logos/1.webp",
		"/logos/2.webp",
		"/logos/3.webp",
		"/logos/4.webp",
		"/logos/5.webp",
		"/logos/6.webp",
		"/logos/7.png",
		"/logos/8.png",
		"/logos/9.webp",
		"/logos/10.webp",
		"/logos/11.webp",
		"/logos/12.webp",
		"/logos/13.webp",
		"/logos/14.webp",
		"/logos/15.png",
	];

	return (
		<>
			<div className="w-full bg-white flex flex-col justify-around gap-5 font-sans font-Poppins items-center py-5 px-24">
				<div className="w-full flex flex-col justify-center items-center gap-3 p-5 pt-5 pb-1">
					<p className="text-xl font-semibold uppercase">
						GIVE WINGS TO YOUR CAREER
					</p>
					<h1 className="text-5xl text-primary font-semibold uppercase my-3">
						<span className="text-white bg-primary px-2">WORK WITH</span>{" "}
						LEADING COMPANIES
					</h1>
					<p className="text-lg text-center">
						We ensure to arrange the best possible career opportunity
					</p>
					<hr className="w-[200px] h-1 bg-primary border-none" />
				</div>
				<div className="grid grid-cols-5 gap-8 mb-12">
					{brands.map((brand, index) => (
						<div
							key={index}
							className="border border-gray h-[120px] w-[204px] flex justify-center p-1.5"
						>
							<img
								src={brand}
								alt={`brand-${index + 1}`}
								className="h-full w-full object-contain"
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
