import React from "react";

export default function Join() {
	return (
		<>
			<section className="w-full h-[70vh] bg-cover relative bg-center font-sans font-Poppins flex justify-center items-center gap-5">
				<div
					className="absolute inset-0 bg-cover bg-center brightness-[40%]"
					style={{
						backgroundImage: "url('/images/hero.jpg')",
					}}
				></div>
				<div className="w-full px-28 py-16 space-y-4 bg-black/20 text-white absolute top-2 text-center">
					<p className="text-lg  font-bold">Lets Fly Together</p>
					<h1 className="text-5xl leading-snug font-bold">
						Join Air Hostess Course
						<br /> by <br />
						Aténas Fraternity
					</h1>
					<div className=" flex justify-center items-center py-10 ">
						<p className="bg-primary rounded-full text-lg uppercase align-middle tracking-widest flex justify-center items-center w-40 h-16">
							<span>join us</span>
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
