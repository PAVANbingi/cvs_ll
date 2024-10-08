"use client";
import React, { useEffect, useState } from "react";
import { IoMdArrowUp } from "react-icons/io";

function CallActionButton() {
	return (
		<div>
			<a href="tel:+918422849985">
				<img src="/icons/phone.svg" className="w-10" aria-label="WhatsApp" />
			</a>
		</div>
	);
}

function WhatsAppActionButton() {
	return (
		<div>
			<a
				href="https://api.whatsapp.com/send?phone=918422849985&text=Hello,%20I%20would%20like%20to%20know%20more%20about%20Support%20%26%20Guidance%20-%20At%C3%A9nas%20Fraternity"
				target="_blank"
			>
				<img src="/icons/whatsapp.svg" className="w-10" aria-label="WhatsApp" />
			</a>
		</div>
	);
}

function ScrollToTopActionButton() {
	const [show, setShow] = useState(false);

	function handleScroll() {
		if (window.scrollY >= 500) setShow(true);
		else setShow(false);
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});

	return (
		<div>
			{show && (
				<IoMdArrowUp
					size={40}
					className="text-white bg-primary rounded-full p-1 cursor-pointer ml-1"
					onClick={scrollToTop}
				/>
			)}
		</div>
	);
}

function FloatingActionButtons() {
	return (
		<div className="fixed right-5 bottom-5 flex flex-col gap-y-1 w-[84px]">
			<div className="flex justify-center">

				<CallActionButton />
			</div>
			<div className="flex justify-center">
				<WhatsAppActionButton />
				<ScrollToTopActionButton />
			</div>
		</div>
	);
}

export default FloatingActionButtons;
