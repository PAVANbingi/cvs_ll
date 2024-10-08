import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { MdFlight } from "react-icons/md";

export default function Courses() {
	return (
		<>
			<div className="w-full bg-white flex justify-around gap-5 font-sans font-Poppins items-center py-5 px-24">
				<div className="w-full flex flex-col justify-center items-center gap-3 p-5 pt-5 pb-10">
					<h1 className="text-xl font-semibold uppercase">
						CHOOSE FROM THE BEST
					</h1>
					<h1 className="text-5xl text-primary font-semibold uppercase my-3">
						Aténas Fraternity{" "}
						<span className="bg-primary text-white px-2">COURSES </span>
					</h1>
					<p className="text-lg text-center">
						Our training programmes in aviation, tourism, and hospitality are of
						the utmost quality. We train students to be skilled professionals.
					</p>
					<hr className="w-[200px] h-1 bg-primary border-none" />
					<div className="my-5 flex flex-row gap-10">
						{/* card1 */}
						<div className="shadow-xl w-[350px] flex flex-col justify-center items-center">
							<div
								className="w-full h-[260px] aspect-[16/9] overflow-hidden bg-cover bg-center"
								style={{ backgroundImage: "url('/images/course1.jpg')" }}
							></div>
							<div>
								<h1 className="text-xl text-center font-semibold p-3">
									Cabin Crew (Aviation), Hospitality & Travel Management
								</h1>
								<div className="px-4 py-1 leading-tight flex justify-center items-center gap-2">
									<FaCalendarAlt size={24} className="text-primary" />
									<p>11 months</p>
								</div>
								<div className="px-4 py-1 leading-tight flex justify-center items-center gap-2">
									<MdFlight size={24} className="text-primary rotate-90" />
									<p>100% placement assistance</p>
								</div>
							</div>
							<div className="bg-primary rounded-lg flex justify-center items-center m-5">
								<p className="text-white uppercase font-semibold px-4 py-2">
									Apply Now
								</p>
							</div>
						</div>
						{/* card2 */}
						<div className="shadow-xl w-[350px] flex flex-col justify-center items-center">
							<div
								className="w-full h-[260px] aspect-[16/9] overflow-hidden bg-cover bg-center"
								style={{ backgroundImage: "url('/images/course2.jpg')" }}
							></div>
							<div>
								<h1 className="text-xl text-center font-semibold p-3">
									Ground Staff
								</h1>
								<div className="px-4 py-1 leading-tight flex justify-center items-center gap-2">
									<FaCalendarAlt size={24} className="text-primary" />
									<p>4 months</p>
								</div>
								<div className="px-4 py-1 leading-tight flex justify-center items-center gap-2">
									<MdFlight size={24} className="text-primary rotate-90" />
									<p>100% placement assistance</p>
								</div>
							</div>
							<div className="bg-primary rounded-lg flex justify-center items-center m-5">
								<p className="text-white uppercase font-semibold px-4 py-2">
									Apply Now
								</p>
							</div>
						</div>
						{/* card3 */}
						<div className="shadow-xl w-[350px] flex flex-col justify-center items-center">
							<div
								className="w-full h-[260px] aspect-[16/9] overflow-hidden bg-cover bg-center"
								style={{ backgroundImage: "url('/images/course3.jpg')" }}
							></div>
							<div>
								<h1 className="text-xl text-center font-semibold p-3">
									Specialized Course for Cabin Crew (Short Term)
								</h1>
								<div className="px-4 py-1 leading-tight flex justify-center items-center gap-2">
									<FaCalendarAlt size={24} className="text-primary" />
									<p>4 months</p>
								</div>
								<div className="px-4 py-1 leading-tight flex justify-center items-center gap-2">
									<MdFlight size={24} className="text-primary rotate-90" />
									<p>100% placement assistance</p>
								</div>
							</div>
							<div className="bg-primary rounded-lg flex justify-center items-center m-5">
								<p className="text-white uppercase font-semibold px-4 py-2">
									Apply Now
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
