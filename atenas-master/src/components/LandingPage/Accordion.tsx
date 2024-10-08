"use client";
import React, { useState } from "react";
import { GoArrowDown, GoArrowUp } from "react-icons/go";

const Accordion = ({
	title,
	children,
	initialOpen = false,
}: {
	title: string;
	children: React.ReactNode;
	initialOpen?: boolean;
}) => {
	const [isOpen, setIsOpen] = useState(initialOpen);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={`m-2 overflow-hidden w-full min-h-12`}>
			<div
				className="bg-primary text-white cursor-pointer overflow-hidden flex justify-start items-center transition-[0.3s ease] "
				onClick={toggleAccordion}
			>
				<span className="text-3xl bg-red-500 rotate-[-45deg] p-2 transition-[0.3s ease] mr-5 -ml-3.5 ">
					{isOpen ? (
						<GoArrowDown size={20} className="rotate-[45deg] m-2.5" />
					) : (
						<GoArrowUp size={20} className="rotate-[45deg] m-2.5" />
					)}
				</span>
				<span>{title}</span>
			</div>
			<div
				className={`transition-all duration-300 ease-in-out ${
					isOpen ? "" : "hidden"
				}`}
			>
				<div className="p-4">{children}</div>
			</div>
		</div>
	);
};

export default Accordion;
