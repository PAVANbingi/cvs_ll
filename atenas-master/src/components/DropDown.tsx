"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

function DropDown({
	title,
	options,
}: {
	title: string;
	options: { name: string; url: string }[];
}) {
	const [isHovered, setIsHovered] = useState(false);
	const router = useRouter();

	return (
		<div
			className="w-[145px] cursor-default"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="flex items-center gap-1 px-2.5 py-2 ">
				{title}
				<FaAngleDown />
			</div>
			{isHovered && (
				<div className="absolute text-white bg-primary z-50 w-fit">
					{options.map((option, index) => (
						<div
							key={index}
							className="h-14 w-[200px] hover:text-black hover:bg-white px-2 py-2 cursor-pointer transition-all text-center text-sm flex justify-center items-center"
							onClick={() => router.replace(option.url)}
						>
							{option.name}
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default DropDown;
