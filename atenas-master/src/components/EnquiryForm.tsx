"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";


function PopUpForm() {
	const [showForm, setShowForm] = useState(false);
	const [isClosing, setIsClosing] = useState(false);
	const location = usePathname();

	function closeForm() {
		setIsClosing(true)
		setShowForm(false);
		setTimeout(() => {
			setIsClosing(false);
		}, 900)
	}

	function openForm() {
		setShowForm(true);
		setIsClosing(false);
	}


	return (
		<div className={"fixed  items-center -right-[425px] bottom-[10%] flex z-20 rounded-lg"+(showForm?" animate-slideIn":"") +(isClosing?" animate-slideOut":"")}>

			<div className="flex items-center h-[280px] gap-x-4 bg-white text-primary font-medium p-3 cursor-pointer text-sm shadow-2xl border-primary border" style={{ writingMode: "vertical-rl", textOrientation: "upright" }} onClick={showForm?closeForm:openForm}>
				<span>ENQUIRY HERE</span>
				{showForm? <FaAnglesRight size={15} />:<FaAnglesLeft size={15} />}
			</div>


			<div className="bg-primary p-6">
				<form className="text-2xl flex flex-col gap-y-5">
					<h2 className="text-2xl text-white font-medium">
						Enroll Here for the Course
					</h2>
					<div>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Your Name"
							className="p-1 outline-none w-full rounded-md"
							required
						/>
					</div>
					<div>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Your Email"
							className="p-1 outline-none w-full rounded-md"
							required
						/>
					</div>
					<div>
						<input
							type="tel"
							name="phone"
							id="phone"
							placeholder="Your Phone"
							className="p-1 outline-none w-full rounded-md"
							required
						/>
					</div>
					<div>
						<select
							name="course"
							id="course"
							className="p-1 outline-none w-full rounded-md"
							defaultValue={"default"}
						>
							<option value="default" disabled>
								Diploma in
							</option>
							<option value="cabincrew">Cabin Crew</option>
							<option value="groundstaff">Ground Staff</option>
							<option value="hospitalmanagement">
								Hospitality Management
							</option>
							<option value="travelandtourismmanagement">
								Travel and Tourism Management
							</option>
						</select>
					</div>
					<div>
						<select
							name="nearest-branch"
							id="nearest-branch"
							className="p-1 outline-none w-full rounded-md"
							defaultValue={"default"}
						>
							<option value="default" disabled>
								Nearest Branch
							</option>
							<option value="andheri">Andheri</option>
							<option value="hyderabad">Hyderabad</option>
							<option value="saki-naka">Saki Naka</option>
							<option value="vashi">Vashi</option>
						</select>
					</div>
					<div className="flex justify-center">
						<button
							className="mt-3 bg-primary text-white border border-white hover:bg-white hover:text-primary hover:border-primary px-3 py-1 rounded-lg w-[200px] transition-all"
							onClick={(e) => e.preventDefault()}
						>
							Book Now
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default PopUpForm;
