import React from "react";
import { MdFlight } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaSmile } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { HiOutlineHandThumbUp } from "react-icons/hi2";

export default function WhyAirHostness() {
	return (
		<>
			<div className="w-full bg-[#f5f5f5] flex flex-col justify-around gap-5 font-sans font-Poppins items-center py-5 px-24">
				<div className="w-full flex flex-col justify-center items-center gap-3 p-5 pt-5 pb-1">
					<p className="text-xl font-semibold uppercase">
						Air Hostess Course in Andheri
					</p>
					<h1 className="text-5xl text-primary font-semibold uppercase my-3">
						WHY SHOULD YOU BECOME AN{" "}
						<span className="text-white bg-primary px-2">AIR HOSTESS</span>?
					</h1>
					<p className="text-lg text-center">
						Reasons to become an air hostess in India
					</p>
					<hr className="w-[200px] h-1 bg-primary border-none" />
				</div>
				<div className="w-full grid grid-cols-3 gap-2 mb-10">
					<div className="h-[320px] w-[352px] p-5 m-5 text-center flex flex-col justify-center items-center rounded-lg shadow-custom-shadow">
						<MdFlight
							size={50}
							className="text-white bg-primary h-[60px]  w-[60px] p-2 rounded-full rotate-90"
						/>
						<h1 className="text-2xl my-2">Travel Opportunities</h1>
						<p className="text-base">
							As an air hostess, you will get unlimited opportunities to travel
							the world, see new places and explore different cultures. This is
							a great career for all the travel enthusiasts.
						</p>
					</div>
					<div className="h-[320px] w-[352px] p-5 m-5 text-center flex flex-col justify-center items-center rounded-lg shadow-custom-shadow">
						<VscGraph
							size={50}
							className="text-white bg-primary h-[60px]  w-[60px] p-2 rounded-full"
						/>
						<h1 className="text-2xl my-2">Career Advancement</h1>
						<p className="text-base">
							Air Hostess or Cabin Crew is a very rewarding career where you can
							become a air hostess just after your 12th class and become senior
							flight attendant as well.
						</p>
					</div>
					<div className="h-[320px] w-[352px] p-5 m-5 text-center flex flex-col justify-center items-center rounded-lg shadow-custom-shadow">
						<FaIndianRupeeSign
							size={50}
							className="text-white bg-primary h-[60px]  w-[60px] p-2 rounded-full"
						/>
						<h1 className="text-2xl my-2">Good Pay and Benefits</h1>
						<p className="text-base">
							The air hostess career comes with excellent salaries along with
							many other benefits such as travel perks, health insurance,
							retirement plans, and many other perks.
						</p>
					</div>
					<div className="h-[320px] w-[352px] p-5 m-5 text-center flex flex-col justify-center items-center rounded-lg shadow-custom-shadow">
						<IoMdCheckmarkCircleOutline
							size={50}
							className="text-white bg-primary h-[60px]  w-[60px] p-2 rounded-full"
						/>
						<h1 className="text-2xl my-2">Flexibility</h1>
						<p className="text-base">
							Some airlines provide part-time and flexible scheduling options,
							which can be ideal for those who have additional duties or
							commitments. Join the air hostess course at Aténas Fraternity!
						</p>
					</div>
					<div className="h-[320px] w-[352px] p-5 m-5 text-center flex flex-col justify-center items-center rounded-lg shadow-custom-shadow">
						<FaSmile
							size={50}
							className="text-white bg-primary h-[60px]  w-[60px] p-2 rounded-full"
						/>
						<h1 className="text-2xl my-2">Exciting Work</h1>
						<p className="text-base">
							As an air hostess you will come across new challenges and
							opportunities that will be fun and exciting. Cabin crew career is
							one of the most exciting and lively careers in the world.
						</p>
					</div>
					<div className="h-[320px] w-[352px] p-5 m-5 text-center flex flex-col justify-center items-center rounded-lg shadow-custom-shadow">
						<HiOutlineHandThumbUp
							size={50}
							className="text-white bg-primary h-[60px]  w-[60px] p-2 rounded-full"
						/>
						<h1 className="text-2xl my-2">Develop New Skills</h1>
						<p className="text-base">
							Air hostesses are taught a variety of skills, such as customer
							service, safety protocols, and emergency management. This could be
							an excellent opportunity to learn new skills and acquire valuable
							experience.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
