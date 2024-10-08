import React from "react";
import {
	FaRupeeSign,
	FaCalendarAlt,
	FaAward,
	FaTelegram,
	FaPencilRuler,
	FaHandshake,
} from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdOutlineAccessAlarm, MdFamilyRestroom } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import {
	BsGraphUpArrow,
	BsGlobe2,
	BsCameraReels,
	BsGraphUp,
} from "react-icons/bs";
import { PiTarget } from "react-icons/pi";
import { GoBook } from "react-icons/go";

import UnderLine from "@/components/Courses/UnderLine";
import Carousel from "@/components/Courses/Carousel";
import Accordion from "@/components/LandingPage/Accordion";
import Contact from "@/components/LandingPage/Contact";
import Faqs from "@/components/LandingPage/Faqs";

function page() {
	return (
		<div>
			<section>
				<div className="relative h-[70svh] max-h-[500px] bg-[url('/images/bb1.jpg')] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center gap-5 text-white">
					<div className="absolute inset-0 bg-black opacity-35 z-0"></div>
					<h1 className="text-5xl font-bold z-10">
						Aviation, Hospitality & Travel Management
					</h1>
					<h3 className="text-lg z-10">#letsflytogether</h3>
				</div>
			</section>

			<section>
				<div className="flex justify-center items-center bg-primary">
					<div className="bg-primary h-[200px] w-[300px] text-white flex flex-col justify-center items-center gap-y-4 border-white border-r-2">
						<div className="bg-secondary rounded-full p-2">
							<img src="/icons/people.svg" className="h-16 w-16 p-2" />
						</div>
						<h2 className="font-bold text-2xl">AGE</h2>
						<p>17 to 27 Years</p>
					</div>
					<div className="bg-primary h-[200px] w-[300px] text-white flex flex-col justify-center items-center gap-y-4 border-white border-r-2">
						<div className="bg-secondary rounded-full p-2">
							<FaRupeeSign size={64} className="p-2" />
						</div>
						<h2 className="font-bold text-2xl">FEES</h2>
						<p>1,20,000/-</p>
					</div>
					<div className="bg-primary h-[200px] w-[300px] text-white flex flex-col justify-center items-center gap-y-4 border-white border-r-2">
						<div className="bg-secondary rounded-full p-2">
							<IoSchool size={64} className="p-2" />
						</div>
						<h2 className="font-bold text-2xl">ELIGIBLE</h2>
						<p>10+2</p>
					</div>
					<div className="bg-primary h-[200px] w-[300px] text-white flex flex-col justify-center items-center gap-y-4">
						<div className="bg-secondary rounded-full p-2">
							<FaCalendarAlt size={64} className="p-2" />
						</div>
						<h2 className="font-bold text-2xl">DURATION</h2>
						<p>11 Months</p>
					</div>
				</div>
			</section>

			<section className="my-20">
				<div className="my-5">
					<h2 className="text-4xl text-center font-medium">
						WHY JOIN ATÉNAS FRATERNITY{" "}
						<span className="bg-primary text-white px-1">AIR HOSTESS</span>{" "}
						ACADEMY
					</h2>
					<UnderLine />
				</div>
				<div className="flex justify-center items-center mb-10">
					<p className="text-lg w-[850px] text-center">
						Our unique curriculum, innovative pedagogy, and new projects enable
						us to prepare students to work in the world&apos;s No. 1 industry, the
						service industry. We are the ideal academy for students who wish to
						work in the service industry. Our employment placements in reputable
						companies are guaranteed.
					</p>
				</div>
				<div className="flex justify-center items-center gap-x-8 text-balance">
					<div className="bg-primary h-[350px] w-[350px] rounded-sm flex flex-col justify-center items-center gap-y-3 text-white text-center shadow-2xl shadow-black">
						<FaAward size={60} />
						<h2 className="text-xl font-semibold">100% JOB ASSISTANCE</h2>
						<p className="font-light text-lg px-3">
							We are delighted to say that our job placement has resulted in
							winners. In the last 3 years, we have placed thousands of
							students. Our internship training strategy also assists our
							students in achieving better future placement success.
						</p>
					</div>
					<div className="bg-primary h-[350px] w-[350px] rounded-sm flex flex-col justify-center items-center gap-y-3 text-white text-center shadow-2xl shadow-black">
						<img src="/icons/id-card.svg" className="h-14 w-14" />
						<h2 className="text-xl font-semibold">
							AUTHORIZED TRAINING CENTERS
						</h2>
						<p className="font-light text-lg px-3">
							We are NSDC, and Skill India approved partners. Our institute is a
							Skill India and NSDC-approved training facility. Our
							professionally created courses will assist you in obtaining any
							career you desire.
						</p>
					</div>
					<div className="bg-primary h-[350px] w-[350px] rounded-sm flex flex-col justify-center items-center gap-y-3 text-white text-center shadow-2xl shadow-black">
						<HiOutlineDesktopComputer size={60} />
						<h2 className="text-xl font-semibold">ONLINE COUNSELING SESSION</h2>
						<p className="font-light text-lg px-3">
							Our mission is to give the greatest education possible to anybody,
							wherever, using technology that propels the future. As a result,
							no matter where you are, you can access our courses with the touch
							of a mouse.
						</p>
					</div>
				</div>
			</section>

			<section className="my-20">
				<div className="flex flex-col justify-center ">
					<div className="my-5">
						<h2 className="text-4xl text-center font-medium">
							<span className="bg-primary text-white px-1">COURSE</span> DETAILS
						</h2>
						<UnderLine />
					</div>
					<div className="flex justify-center items-center mb-10">
						<p className="text-lg w-[850px] text-center">
							Learn about the roles and responsibilities of Cabin Crew and
							Ground Staff, as well as Tourism Professionals and Hospitality
							Experts. The classroom training will help you better grasp the
							work position and will provide you with the necessary information
							and abilities to pass an airline interview. The course curriculum
							is specifically tailored to provide each student who takes this
							course with the best skill orientation and basic information
							required to enter the travel, tourist, and hospitality industries.
							The course is designed to provide students the finest experience
							possible, including mastery of the skills needed to become a
							thorough professional and prepare for interviews.
						</p>
					</div>
					<div className="flex justify-center gap-x-7">
						<div>
							<div className="w-[550px]">
								<h2 className="text-2xl font-semibold bg-primary text-white p-2 mb-5">
									CABIN CREW TRAINING
								</h2>
								<ul className="list-disc ml-5">
									<li>Personality development</li>
									<li>Communication skills improvement</li>
									<li>Posture and etiquette training</li>
									<li>Customer Handling training</li>
									<li>Interpersonal skills</li>
									<li>Role and responsibilities</li>
									<li>In flight procedures</li>
									<li>First aid training</li>
									<li>Swimming</li>
									<li>Cabin crew resource management</li>
									<li>Safety and emergency procedures</li>
									<li>Announcements</li>
									<li>Food & Beverage service</li>
									<li>Basic and advanced English</li>
									<li>One on one mock interview sessions</li>
									<li>Group discussions</li>
									<li>Role plays</li>
									<li>Confidence building and hesitation removal</li>
									<li>Skin and hair care routine</li>
									<li>Professional makeup training</li>
									<li>Professional hair styling</li>
									<li>Balance healthy diet and weight management</li>
								</ul>
							</div>
						</div>

						<div>
							<div className="w-[550px]">
								<h2 className="text-2xl font-semibold bg-primary text-white p-2 mb-5">
									CABIN CREW TRAINING
								</h2>
								<ul className="list-disc ml-5">
									<li>Airport terminology</li>
									<li>Airlines codes</li>
									<li>IATA/DGCA</li>
									<li>ICAO</li>
									<li>Definitions of aviation industry</li>
								</ul>
							</div>
							<div className="w-[550px] mt-5">
								<h2 className="text-2xl font-semibold bg-primary text-white p-2 mb-5">
									CABIN CREW TRAINING
								</h2>
								<ul className="list-disc ml-5">
									<li>Introduction to travel and tourism</li>
									<li>Domestic and global tourism</li>
									<li>GMT time zone calculations</li>
									<li>Famous tourist spots worldwide</li>
									<li>Famous capitals</li>
									<li>Currency conversions</li>
									<li>Itinerary planning</li>
								</ul>
							</div>
							<div className="w-[550px] mt-5">
								<h2 className="text-2xl font-semibold bg-primary text-white p-2 mb-5">
									CABIN CREW TRAINING
								</h2>
								<ul className="list-disc ml-5">
									<li>Introduction to hotel industry</li>
									<li>Types and categories of hotels</li>
									<li>Departments in a hotel</li>
									<li>Guest handling</li>
									<li>Telephonic etiquettes</li>
									<li>Table manners</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="my-20">
				<div className="flex justify-center">
					<div className="w-4/5 flex ">
						<div className="w-3/5 bg-white shadow-2xl p-5 mr-2.5">
							<div>
								<h2 className="text-2xl font-semibold text-primary">
									Gain In Depth insight Into
								</h2>
								<hr className="w-[300px] h-0.5 bg-secondary border-none my-5" />
							</div>
							<div className="px-5">
								<ul className="list-disc leading-[30px]">
									<li>
										Roles and responsibilities of Cabin Crew and Ground Staff
									</li>
									<li>Customer Handing as a Cabin Crew and Ground Staff</li>
									<li>
										Handling Special passengers on board or at the airport
									</li>
									<li>
										Situation handling at Airport as Ground Staff and in Flight
										as Cabin Crew
									</li>
									<li>Introduction to travel and Tourism</li>
									<li>Role of travel professional</li>
									<li>Inbound/Outbound/Domestic Tour Planning</li>
									<li>Itinerary Planning</li>
									<li>Kinds of Tourism</li>
									<li>Passport Visa Facilitation</li>
									<li>Online Travel bookings</li>
									<li>Introduction to Hotel Industry</li>
									<li>Types of hotels, Rooms and various Departments</li>
									<li>Responsibilities of various departments</li>
									<li>Front Office – Roles and Responsibilities</li>
									<li>Hotel Terminology – Terms used in Front office</li>
									<li>Preview of Hotel Food and beverage</li>
								</ul>
							</div>
						</div>
						<div className="w-2/5 ml-2.5">
							<img src="/images/pic5.jpg" className="my-2" />
							<img src="/images/pic20.jpg" className="my-2" />
						</div>
					</div>
				</div>
			</section>

			<section className="my-20">
				<div className="flex flex-col items-center">
					<div className="flex flex-col items-center">
						<h2 className="text-2xl font-semibold text-primary">
							Benefits Of Choosing Aviation, Hospitality & Travel Management
						</h2>
						<hr className="w-[300px] h-0.5 bg-secondary border-none my-5" />
					</div>
					<div className="grid grid-rows-3 grid-cols-4 gap-4">
						<div className="w-[260px] h-[170px] shadow-2xl flex flex-col justify-center items-center p-3 text-center">
							<FaTelegram size={40} className="text-blue-500" />
							Opportunity to be employed with leading airlines in India and
							abroad
						</div>
						<div className="w-[260px] h-[170px] shadow-2xl flex flex-col justify-center items-center p-3 text-center">
							<MdOutlineAccessAlarm size={40} className="text-purple-800" />
							Opportunity to travel across the globe
						</div>
						<div className="w-[260px] h-[170px] shadow-2xl flex flex-col justify-center items-center p-3 text-center">
							<FaHandshake size={40} className="text-green-600" />
							Opportunity to enter the hospitality industry
						</div>
						<div className="w-[260px] h-[170px] shadow-2xl flex flex-col justify-center items-center p-3 text-center">
							<FaPencilRuler size={40} className="text-green-800" />A platform
							to learn several world languages
						</div>
						<div className="w-[260px] h-[170px] shadow-2xl flex flex-col justify-center items-center p-3 text-center">
							<GiWallet size={40} className="text-blue-900" />
							Impressive salary packages with great perks
						</div>
						<div className="w-[260px] h-[170px] shadow-2xl flex flex-col justify-center items-center p-3 text-center">
							<BsGraphUp size={40} className="text-red-400" />
							Consistent and unlimited growth in remuneration
						</div>
						<div className="w-[260px] h-[170px] shadow-2xl flex flex-col justify-center items-center p-3 text-center">
							<BsGlobe2 size={40} className="text-blue-800" />
							Complimentary vacations across the worldwide
						</div>
						<div className="w-[260px] h-[170px] shadow-2xl flex flex-col justify-center items-center p-3 text-center">
							<MdFamilyRestroom size={40} className="text-purple-900" />
							Discounted travel packages for family
						</div>
						<div className="w-[260px] h-[170px] shadow-2xl flex flex-col justify-center items-center p-3 text-center">
							<BsCameraReels size={40} className="text-green-500" />
							Opportunity to meet and greet celebrities, industrialists,
							dignitaries and more
						</div>
						<div className="w-[260px] h-[170px] shadow-2xl flex flex-col justify-center items-center p-3 text-center">
							<BsGraphUpArrow size={40} className="text-green-600" />
							Improved personality, intrapersonal, and soft skills
						</div>
						<div className="w-[260px] h-[170px] shadow-2xl flex flex-col justify-center items-center p-3 text-center">
							<PiTarget size={40} className="text-blue-800" />A respectful,
							dignified, and promising career
						</div>
						<div className="w-[260px] h-[170px] shadow-2xl flex flex-col justify-center items-center p-3 text-center">
							<GoBook size={40} className="text-red-500" />
							End-to-end knowledge of attractive global destinations
						</div>
					</div>
				</div>
			</section>

			<section className="my-20">
				<div className="flex flex-col items-center">
					<div>
						<h2 className="text-4xl text-center font-medium">
							<span className="bg-primary text-white px-1">JOB</span>{" "}
							OPPORTUNITIES
						</h2>
						<UnderLine />
					</div>
					<div className="flex justify-center items-center mb-10">
						<p className="text-lg w-[850px] text-center">
							Become a Cabin Crew with Aténas Fraternity Air Hostess Academy
						</p>
					</div>
					<div className="grid grid-cols-5 gap-5">
						<div className="w-[200px] ">
							<div className="h-[160px] w-[200px] aspect-square overflow-hidden">
								<img
									src="/images/pic1.jpg"
									className="h-[100px] w-[160px] scale-[3] hover:scale-[3.5] transition-all duration-500 ease-in-out"
								/>
							</div>
							<h3 className="text-center text-white bg-primary py-1 font-medium">
								Airlines- Cabin Crew
							</h3>
						</div>
						<div className="w-[200px] ">
							<div className="h-[160px] w-[200px] aspect-square overflow-hidden">
								<img
									src="/images/pic2.jpg"
									className="h-[160px] hover:scale-110 transition-all duration-500 ease-in-out"
								/>
							</div>
							<h3 className="text-center text-white bg-primary py-1 font-medium">
								Airport Ground Staff
							</h3>
						</div>
						<div className="w-[200px] ">
							<div className="h-[160px] w-[200px] aspect-square overflow-hidden">
								<img
									src="/images/pic3.jpg"
									className="h-[160px] hover:scale-110 transition-all duration-500 ease-in-out"
								/>
							</div>
							<h3 className="text-center text-white bg-primary py-1 font-medium">
								Airport Check In
							</h3>
						</div>
						<div className="w-[200px] ">
							<div className="h-[160px] w-[200px] aspect-square overflow-hidden">
								<img
									src="/images/pic4.jpg"
									className="h-[160px] hover:scale-110 transition-all duration-500 ease-in-out"
								/>
							</div>
							<h3 className="text-center text-white bg-primary py-1 font-medium">
								Airport Hospitality
							</h3>
						</div>
						<div className="w-[200px] ">
							<div className="h-[160px] w-[200px] aspect-square overflow-hidden">
								<img
									src="/images/pic5.jpg"
									className="h-[160px] hover:scale-110 transition-all duration-500 ease-in-out"
								/>
							</div>
							<h3 className="text-center text-white bg-primary py-1 font-medium">
								Customer Handling
							</h3>
						</div>
						<div className="w-[200px] ">
							<div className="h-[160px] w-[200px] aspect-square overflow-hidden">
								<img
									src="/images/pic6.jpg"
									className="h-[160px] w-[200px] hover:scale-110 transition-all duration-500 ease-in-out"
								/>
							</div>
							<h3 className="text-center text-white bg-primary py-1 font-medium">
								Travel companies
							</h3>
						</div>
						<div className="w-[200px] ">
							<div className="h-[160px] w-[200px] aspect-square overflow-hidden">
								<img
									src="/images/pic7.jpg"
									className="hover:scale-110 transition-all duration-500 ease-in-out"
								/>
							</div>
							<h3 className="text-center text-white bg-primary py-1 font-medium">
								Online Travel Companies
							</h3>
						</div>
						<div className="w-[200px] ">
							<div className="h-[160px] w-[200px] aspect-square overflow-hidden">
								<img
									src="/images/pic8.jpg"
									className="hover:scale-110 transition-all duration-500 ease-in-out"
								/>
							</div>
							<h3 className="text-center text-white bg-primary py-1 font-medium">
								Tour Operators
							</h3>
						</div>
						<div className="w-[200px] ">
							<div className="h-[160px] w-[200px] aspect-square overflow-hidden">
								<img
									src="/images/pic9.jpg"
									className="hover:scale-110 transition-all duration-500 ease-in-out"
								/>
							</div>
							<h3 className="text-center text-white bg-primary py-1 font-medium">
								Event Planner – MICE
							</h3>
						</div>
						<div className="w-[200px] ">
							<div className="h-[160px] w-[200px] aspect-square overflow-hidden">
								<img
									src="/images/pic10.jpg"
									className=" hover:scale-110 transition-all duration-500 ease-in-out"
								/>
							</div>
							<h3 className="text-center text-white bg-primary py-1 font-medium">
								Group Tour Escorting
							</h3>
						</div>
						<div className="w-[200px] ">
							<div className="h-[160px] w-[200px] aspect-square overflow-hidden">
								<img
									src="/images/pic11.jpg"
									className="h-[160px] hover:scale-110 transition-all duration-500 ease-in-out"
								/>
							</div>
							<h3 className="text-center text-white bg-primary py-1 font-medium">
								Ticketing Professional
							</h3>
						</div>
						<div className="w-[200px] ">
							<div className="h-[160px] w-[200px] aspect-square overflow-hidden">
								<img
									src="/images/pic12.jpg"
									className="hover:scale-110 transition-all duration-500 ease-in-out"
								/>
							</div>
							<h3 className="text-center text-white bg-primary py-1 font-medium">
								Front Office Services
							</h3>
						</div>
						<div className="w-[200px] ">
							<div className="h-[160px] w-[200px] aspect-square overflow-hidden">
								<img
									src="/images/pic13.jpg"
									className="h-[160px] hover:scale-110 transition-all duration-500 ease-in-out"
								/>
							</div>
							<h3 className="text-center text-white bg-primary py-1 font-medium">
								F & B Services
							</h3>
						</div>
						<div className="w-[200px] ">
							<div className="h-[160px] w-[200px] aspect-square overflow-hidden">
								<img
									src="/images/pic14.jpg"
									className="hover:scale-110 transition-all duration-500 ease-in-out"
								/>
							</div>
							<h3 className="text-center text-white bg-primary py-1 font-medium">
								Airport Lounges
							</h3>
						</div>
						<div className="w-[200px] ">
							<div className="h-[160px] w-[200px] aspect-square overflow-hidden">
								<img
									src="/images/pic15.jpg"
									className="hover:scale-110 transition-all duration-500 ease-in-out"
								/>
							</div>
							<h3 className="text-center text-white bg-primary py-1 font-medium">
								Banquet Sales
							</h3>
						</div>
					</div>
				</div>
			</section>

			<section className="my-20">
				<div className="flex flex-col items-center">
					<div className="">
						<h2 className="text-2xl font-semibold text-primary">
							Our Placement Collaborations
						</h2>
						<hr className="w-[300px] h-0.5 bg-secondary border-none my-5" />
					</div>

					<div>
						<Carousel />
					</div>
				</div>
			</section>

			<section className="my-20">
				<Faqs />
			</section>

			<section>
				<Contact />
			</section>
		</div>
	);
}

export default page;
