import React from "react";
import { GrUserWorker } from "react-icons/gr";
import { GoStopwatch } from "react-icons/go";
import { PiBuildingOffice } from "react-icons/pi";
import { TfiMoney } from "react-icons/tfi";
import Testimonials from "@/components/LandingPage/Testimonials";
import Gallery from "@/components/LandingPage/Gallery";
import Brands from "@/components/LandingPage/Brands";
import Faqs from "@/components/LandingPage/Faqs";
import Contact from "@/components/LandingPage/Contact";

function page() {
	return (
		<div>
			<section>
				<div className="relative h-[70svh] max-h-[500px] bg-[url('/images/pic13.jpg')] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-start p-20 gap-8 text-white">
					<div className="absolute inset-0 bg-black opacity-35 z-0"></div>
					<h3 className="text-lg z-10">
						No.1 Air Hostess Institute in Hyderabad
					</h3>
					<h1 className="text-5xl font-bold z-10">Cabin Crew Academy</h1>
					<h3 className="text-lg z-10">
						Aténas Fraternity Air Hostess Academy is the best cabin crew
						training institute in Hyderabad.
					</h3>
					<button className="bg-primary text-white p-3 z-10 font-medium">
						Join AFHA
					</button>
				</div>
			</section>

			<section className="my-20">
				<div className="flex justify-center gap-x-16">
					<div>
						<img src="/images//pic5.jpg" className="w-[500px] h-[375px]" />
					</div>
					<div className="w-2/5 flex flex-col justify-between">
						<h2 className="text-5xl font-bold">
							Air Hostess Academy in Hyderabad
						</h2>
						<p>
							Aténas Fraternity Air Hostess Academy (DAHA) is the best air
							hostess academy in Hyderabad. We specialize in grooming aspiring
							professionals for roles as air hostesses, cabin crew, and ground
							staff. Our academy prides itself on offering top-notch education
							and practical experience, ensuring our students are fully prepared
							for the dynamic and demanding aviation sector.
						</p>
						<div className="flex justify-between">
							<div>
								<h2 className="text-5xl font-bold">1,500+</h2>
								<p>Students</p>
							</div>
							<div>
								<h2 className="text-5xl font-bold">50+</h2>
								<p>Placement Partners</p>
							</div>
							<div>
								<h2 className="text-5xl font-bold">2</h2>
								<p>Training Centres</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="flex justify-end bg-primary gap-x-10">
					<div className="w-[700px] bg-primary text-white mt-16">
						<div className="flex gap-x-4 items-center ">
							<hr className="w-[50px] h-1 bg-white border-none" />
							<h2 className="text-4xl font-light">
								Why <span className="font-bold">Choose Us</span>
							</h2>
						</div>
						<div className="grid grid-cols-2 my-10 gap-x-5 gap-y-10">
							<div className="flex gap-x-5">
								<div>
									<GrUserWorker size={40} />
								</div>
								<div className="w-[300px]">
									<h3 className="text-2xl font-medium mb-5">
										PRACTICAL TRAINING
									</h3>
									<p className="text-lg font-medium">
										Our students are motivated to apply their knowledge to
										different service industry sectors by our practical
										trainings and hands-on experience.
									</p>
								</div>
							</div>
							<div className="flex gap-x-5">
								<div>
									<TfiMoney size={40} />
								</div>
								<div className="w-[300px]">
									<h3 className="text-2xl font-medium mb-5">
										PLACEMENT ASSISTANCE
									</h3>
									<p className="text-lg font-medium">
										Aténas Fraternity Air Hostess Academy provides hand holding
										support to students with placement assistance. Our students
										are placed in top companies.
									</p>
								</div>
							</div>
							<div className="flex gap-x-5">
								<div>
									<PiBuildingOffice size={40} />
								</div>
								<div className="w-[300px]">
									<h3 className="text-2xl font-medium mb-5">
										MODERN INFRASTRUCTURE
									</h3>
									<p className="text-lg font-medium">
										Our classrooms are equipped with all the latest technology
										to educate today&apos;s professionals. You can get the best state
										of the art facilities at out institute.
									</p>
								</div>
							</div>
							<div className="flex gap-x-5">
								<div>
									<GoStopwatch size={40} />
								</div>
								<div className="w-[300px]">
									<h3 className="text-2xl font-medium mb-5">
										WELL-CRAFTED COURSES
									</h3>
									<p className="text-lg font-medium">
										We believe in delivering individualized education in a
										public setting, our ongoing, custom courses are a great fit
										for every student and their unique needs.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div>
						<img src="/images/pic7.jpg" className="h-[700px] w-[500px]" />
					</div>
				</div>
			</section>

			<section className="my-20">
				<div className="flex flex-col items-center">
					<div className="flex gap-x-4 items-center">
						<hr className="w-[50px] h-1 bg-primary border-none" />
						<h2 className="text-4xl font-light">
							Our <span className="font-bold">Courses</span>
						</h2>
					</div>
					<div className="flex justify-center gap-x-5 my-10">
						<div className="group w-[350px]">
							<img
								src="/images/course2.jpg"
								className="h-[230px] w-[350px] object-contain  transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:object-top"
								alt="Banquet Sales"
							/>
							<div className="bg-white px-5">
								<h2 className="font-medium text-balance text-xl my-10">
									Cabin Crew (Aviation), Hospitality & Travel Management
								</h2>
								<button className="bg-primary px-3 py-2 text-white">
									Register Now
								</button>
							</div>
						</div>
						<div className="group w-[350px]">
							<img
								src="/images/course1.jpg"
								className="h-[230px] w-[350px] object-contain  transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:object-top"
								alt="Banquet Sales"
							/>
							<div className="bg-white px-5">
								<h2 className="font-medium text-balance text-xl my-10">
									Ground Staff
								</h2>
								<button className="bg-primary px-3 py-2 text-white mt-7">
									Register Now
								</button>
							</div>
						</div>
						<div className="group w-[350px]">
							<img
								src="/images/pic4.jpg"
								className="h-[230px] w-[350px] object-contain  transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:object-top"
								alt="Banquet Sales"
							/>
							<div className="bg-white px-5">
								<h2 className="font-medium text-balance text-xl my-10">
									Specialized Course for Cabin Crew (Short Term)
								</h2>
								<button className="bg-primary px-3 py-2 text-white">
									Register Now
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="relative h-svh bg-[url('/images/toy-plane.jpeg')] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center gap-10 text-black">
					<h1 className="text-7xl font-bold z-10 w-[1000px] text-center">
						Ready To Make Your Dream Come True?
					</h1>
					<h3 className="z-10 text-xl w-[900px] text-center">
						Our well-structured courses, combined with real-world training
						scenarios, will challenge and inspire you to become the best version
						of yourself.
					</h3>
					<button className="bg-primary text-white p-3 z-10 font-medium">
						Contact Now
					</button>
				</div>
			</section>

			<section className="my-20">
				<Testimonials />
			</section>

			<section className="my-20">
				<Gallery />
			</section>

			<section className="my-20">
				<Brands />
			</section>

			<section className="my-20">
				<Faqs />
			</section>

			<section className="my-20">
				<Contact />
			</section>
		</div>
	);
}

export default page;
