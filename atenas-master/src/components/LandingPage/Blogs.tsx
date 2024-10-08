import React from "react";

export default function Blogs() {
	return (
		<>
			<div className="w-full bg-white flex flex-col justify-around gap-5 font-sans font-Poppins items-center py-5 px-24">
				<h1 className="text-5xl text-primary font-semibold uppercase my-5">
					Blogs
				</h1>
				<div className="w-full flex gap-10 justify-center items-center">
					<div className="bg-primary w-[350px] h-[420px] rounded-lg p-5 text-white">
						<img
							src="/images/course1.jpg"
							alt="blog"
							className="w-[350px] h-[250px]"
						/>
						<h1 className="my-5">
							{" "}
							How to apply to be cabin crew-A simple step by step guide?
						</h1>
						<div className="bg-white text-black rounded-lg w-[136px] my-4 px-6 py-3 flex justify-center items-center">
							<p className="">Read More</p>
						</div>
					</div>
					<div className="bg-primary w-[350px] h-[420px] rounded-lg p-5 text-white">
						<img
							src="/images/course1.jpg"
							alt="blog"
							className="w-[350px] h-[250px]"
						/>
						<h1 className="my-5">Why Air Hostess is a Booming Career ?</h1>
						<div className="bg-white text-black rounded-lg w-[136px] my-4 px-6 py-3 flex justify-center items-center">
							<p className="">Read More</p>
						</div>
					</div>
					<div className="bg-primary w-[350px] h-[420px] rounded-lg p-5 text-white">
						<img
							src="/images/course1.jpg"
							alt="blog"
							className="w-[350px] h-[250px]"
						/>
						<h1 className="my-5">
							Which is the Best Aviation Academy in India?
						</h1>
						<div className="bg-white text-black rounded-lg w-[136px] my-4 px-6 py-3 flex justify-center items-center">
							<p className="">Read More</p>
						</div>
					</div>
				</div>
				<div className="bg-primary text-white rounded-lg w-[230px] my-4 px-6 py-4 flex justify-center items-center">
					<p className="uppercase font-medium">Read More all blogs</p>
				</div>
			</div>
			<div className="w-full bg-primary h-[220px] font-sans font-poppins flex items-center justify-between py-5 px-60">
				<h1 className="text-5xl text-white font-semibold uppercase my-5 leading-snug">
					Ready to fly?
					<br />
					Contact us Today!
				</h1>
				<div className="bg-white text-black rounded-lg w-[136px] my-4 px-6 py-3 flex justify-center items-center">
					<p className="">Read More</p>
				</div>
			</div>
		</>
	);
}
