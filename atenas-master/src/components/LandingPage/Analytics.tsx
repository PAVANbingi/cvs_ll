import React from "react";

export default function Analytics() {
	return (
		<div className="my-20">
			<div className="text-white text-2xl font-bold flex justify-center items-center bg-secondary py-5 gap-x-5">
				<div className="w-[260px] h-[160px] bg-red-600 flex flex-col justify-center items-center gap-y-2">
					<img
						src="/icons/students.svg"
						alt="students"
						className="w-10 h-10 "
					/>
					<p>5000 +</p>
					<p className="text-xl">Student Trained</p>
				</div>
				<div className="w-[260px] h-[160px] bg-red-600 flex flex-col justify-center items-center gap-y-2">
					<img src="/icons/team.svg" alt="team" className="w-10 h-10 " />
					<p>15 +</p>
					<p className="text-xl">Team Members</p>
				</div>
				<div className="w-[260px] h-[160px] bg-red-600 flex flex-col justify-center items-center gap-y-2">
					<img
						src="/icons/money-bag.svg"
						alt="experience"
						className="w-10 h-10 "
					/>
					<p>3 +</p>
					<p className="text-xl">Years</p>
				</div>
				<div className="w-[260px] h-[160px] bg-red-600 flex flex-col justify-center items-center gap-y-2">
					<img src="/icons/award.svg" alt="award" className="w-10 h-10 " />
					<p>20 +</p>
					<p className="text-xl">Awards</p>
				</div>
			</div>
		</div>
	);
}
