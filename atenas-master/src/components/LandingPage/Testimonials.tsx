import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa";

export default function Testimonials() {
	const test = [
		{
			name: "Vidhi Goel",
			message:
				"The teachers are very helpful, and they train the students well so that they can get their dream jobs. Sanjana ma’am, is especially good at helping the students get their dream jobs. Thanks a lot Aténas Fraternity for everything you've done for us. Best air hostess course!",
		},
		{
			name: "Neha Kashyap",
			message:
				"I got selected as a cabin crew in Indigo after completing my air hostess course from Aténas Fraternity. They helped me in a lot of way to achieve my dream. I personally thank them for moulding me in way by improving my soft skills, grooming and interpersonal skills.",
		},
		{
			name: "Mehak Singhal",
			message:
				"I had an amazing experience studying at Aténas Fraternity. My teacher Sanjana ma’am was very knowledgeable, and the air hostess course content was very comprehensive. I feel confident in my abilities as an air hostess now.",
		},
		{
			name: "Pinky Goel",
			message:
				"Very good air hostess course in Andheri! Thank you Aténas Fraternity….",
		},
		{
			name: "Meenakshi Singhal",
			message:
				"This is the best institute if you want to join air hostess course in Andheri. I loved the institute, the infrastructure, the teachers, the staff and everything else about this institute.",
		},
		{
			name: "Vanshi Saini",
			message:
				"I am so grateful to have studied at Aténas Fraternity. The institute provided me with all the skills that are needed to succeed in the aviation industry. This was an amazing air hostess course",
		},
		{
			name: "Ayushi Singh",
			message:
				"I did my air hostess course from this institute in Andheri. I must say this institute is the best place to do air hostess course in Andheri. I am extremely satisfied with my experience and with the one-to-one guidance they offer.",
		},
		{
			name: "Anushka Pandey",
			message:
				"I had a wonderful experience studying at Aténas Fraternity. I would definitely recommend this academy to anyone who is interested in pursuing a career as an air hostess.",
		},
		{
			name: "Aditi Agarwal",
			message:
				"After searching for multiple institutes for air hostess course in Andheri. I found Aténas Fraternity to be the best institute for cabin crew training!!!",
		},
	];

	return (
		<>
			<div
				className="w-full flex flex-col justify-around gap-5 font-sans font-Poppins items-center py-5 px-24 bg-cover bg-center relative"
				style={{
					backgroundImage:
						"url('https://i0.wp.com/delhiairhostessacademy.com/wp-content/uploads/2023/01/mvehfqz6w2ges2dj.jpg?fit=1920%2C1216&ssl=1')",
				}}
			>
				<div className="absolute inset-0 bg-black opacity-50"></div>
				<div className="relative z-10">
					<div className="w-full flex flex-col justify-center items-center gap-5 p-5 pt-5 pb-1">
						<p className="text-xl text-white font-semibold uppercase">
							TESTIMONIALS
						</p>
						<h1 className="text-5xl text-white font-semibold uppercase my-3">
							STUDENT{" "}
							<span className="text-white bg-primary px-2">REVIEWS</span>
						</h1>
						<p className="text-lg text-center text-white">
							Our students love us! Read the student reviews below
						</p>
						<hr className="w-[200px] h-1 bg-primary border-none" />
					</div>
					<div className="grid grid-cols-3 gap-5 mt-8 mb-12">
						{test.map((t, index) => (
							<div
								key={index}
								className="p-7 gap-4 w-[345px] rounded-lg bg-white flex flex-col justify-start"
							>
								<p>{t.message}</p>
								<h1 className="text-2xl font-bold">{t.name}</h1>
								<div className="w-full flex">
									<FaStar size={20} className="text-yellow-500" />
									<FaStar size={20} className="text-yellow-500" />
									<FaStar size={20} className="text-yellow-500" />
									<FaStar size={20} className="text-yellow-500" />
									<FaStar size={20} className="text-yellow-500" />
								</div>
								<div className="w-full flex justify-end">
									<FaQuoteRight size={50} className="text-[#a3a3a3a3]" />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
