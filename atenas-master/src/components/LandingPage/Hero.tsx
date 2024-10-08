import React from "react";

export default function Hero() {
	return (
		<>
			<section className="w-full h-[70vh] bg-cover relative bg-center  flex justify-center items-center gap-5">
				<div
					className="absolute inset-0 bg-cover bg-center brightness-50"
					style={{
						backgroundImage: "url('/images/hero.jpg')",
					}}
				></div>
				<div className="w-full px-28 py-16 space-y-4 bg-black/20 text-white absolute inset-0 bg-cover bg-center ">
					<p className="text-base font-bold">#LetsFlyTogether</p>
					<h1 className="text-6xl font-bold">Aténas Fraternity</h1>
					<h1 className="text-4xl font-semibold">Evolve beyond perfection</h1>
					<p className="text-lg py-8">
						No. 1 Air Hostess Academy in Andheri for Air Hostess Course <br />
						Training. Let Your Dream Take a Flight!
					</p>
					<div className="bg-primary rounded-full flex justify-center items-center uppercase tracking-widest w-40 h-16">
						<p className="text-lg">join us</p>
					</div>
				</div>
			</section>
		</>
	);
}
