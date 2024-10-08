// "use client";
// import { usePathname, useRouter } from "next/navigation";
// import React from "react";
// import {
// 	FaFacebook,
// 	FaInstagram,
// 	FaLinkedin,
// 	FaYoutube,
// } from "react-icons/fa6";
// import DropDown from "./DropDown";

// function Navbar() {
// 	const router = useRouter();

// 	const pathName = usePathname();

// 	return (
// 		<>
// 			<section className="bg-primary w-full flex justify-between font-sans font-Poppins items-center py-1 px-24">
// 				<div className="p-1 flex font-base">
// 					<ul className="flex text-white uppercase">
// 						<li
// 							className={
// 								"hover:text-black hover:bg-white px-2 py-2 cursor-pointer" +
// 								(pathName === "/" ? " text-black bg-white" : "")
// 							}
// 							onClick={() => router.replace("/")}
// 						>
// 							Home
// 						</li>
// 						<li
// 							className={
// 								"hover:text-black hover:bg-white px-2.5 py-2 cursor-pointer" +
// 								(pathName === "/about-us" ? " text-black bg-white" : "")
// 							}
// 							onClick={() => router.replace("/about-us")}
// 						>
// 							About us
// 						</li>
// 						<li className="hover:text-black hover:bg-white">
// 							<DropDown
// 								title="OUR COURSES"
// 								options={[
// 									{
// 										name: "IATA Certified Aviation Diplomas",
// 										url: "/courses/iata-certified-aviation-diplomas",
// 									},
// 									{
// 										name: "India’s Top Air Hostess Training Institute",
// 										url: "/courses/air-hostess-training-institute",
// 									},
// 									{
// 										name: "Aviation, Hospitality & Travel Management",
// 										url: "/courses/aviation-hospitality-travel-management",
// 									},
// 									{
// 										name: "Ground Staff",
// 										url: "/courses/ground-staff",
// 									},
// 								]}
// 							/>
// 						</li>
// 						<li className="hover:text-black hover:bg-white">
// 							<DropDown
// 								title="OUR CENTERS"
// 								options={[
// 									{
// 										name: "Hyderabad – Headquarters",
// 										url: "/centers/hyderabad",
// 									},
// 									{ name: "Andheri - Branch", url: "/centers/andheri" },
// 									{ name: "Vashi – Branch", url: "/centers/vashi" },
// 									{ name: "Saki Naka – Branch", url: "/centers/saki-naka" },
// 								]}
// 							/>
// 						</li>
// 						<li className="hover:text-black hover:bg-white px-2.5 py-2">
// 							Gallery
// 						</li>
// 						<li
// 							className={
// 								"hover:text-black hover:bg-white px-2.5 py-2 cursor-pointer" +
// 								(pathName === "/contact-us" ? " text-black bg-white" : "")
// 							}
// 							onClick={() => router.replace("/contact-us")}
// 						>
// 							Contact us
// 						</li>
// 					</ul>
// 				</div>
// 				<div className="p-1 px-2.5">
// 					<div className="flex items-center justify-end space-x-1.5">
// 					<a
// 								href="https://www.facebook.com/atenasfraternity?utm_source=website&utm_medium=contact&utm_campaign=footer&utm_content=icon&utm_term=facebook"
// 								target="_blank"
// 							>
// 								<div className="p-3 rounded-full bg-white text-primary">
// 									<FaFacebook size={20} className="" />
// 								</div>
// 							</a>
// 							<a
// 								href="https://www.linkedin.com/company/atenasfraternity/"
// 								target="_blank"
// 							>
// 								<div className="p-3 rounded-full bg-white text-primary">
// 									<FaLinkedin size={20} className="" />
// 								</div>
// 							</a>
// 							<a
// 								href="https://www.instagram.com/atenasfraternity/"
// 								target="_blank"
// 							>
// 								<div className="p-3 rounded-full bg-white text-primary">
// 									<FaInstagram size={20} className="" />
// 								</div>
// 							</a>
// 							<a
// 								href="https://www.youtube.com/@atenasfraternity"
// 								target="_blank"
// 							>
// 								<div className="p-3 rounded-full bg-white text-primary">
// 									<FaYoutube size={20} className="" />
// 								</div>
// 							</a>
// 					</div>
// 				</div>
// 			</section>
// 		</>
// 	);
// }

// export default Navbar;

"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";
import DropDown from "./DropDown";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathName = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <section className="bg-primary w-full flex justify-between font-sans font-Poppins items-center py-2 px-6 md:px-24">
        {/* Logo and Hamburger for Mobile */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <div className="text-white font-bold">YourLogo</div>
          <div className="md:hidden">
            {menuOpen ? (
              <AiOutlineClose
                size={24}
                className="text-white cursor-pointer"
                onClick={toggleMenu}
              />
            ) : (
              <AiOutlineMenu
                size={24}
                className="text-white cursor-pointer"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>

        {/* Navbar Menu */}
        <div
          className={`flex-col md:flex md:flex-row items-center absolute md:relative top-full left-0 w-full md:w-auto bg-primary md:bg-transparent z-50 transition-transform ${
            menuOpen ? "block" : "hidden md:block"
          }`}
        >
          <ul className="flex flex-col md:flex-row text-white uppercase">
            <li
              className={`hover:text-black hover:bg-white px-4 py-2 md:px-2 md:py-1 cursor-pointer ${
                pathName === "/" ? " text-black bg-white" : ""
              }`}
              onClick={() => router.replace("/")}
            >
              Home
            </li>
            <li
              className={`hover:text-black hover:bg-white px-4 py-2 md:px-2 md:py-1 cursor-pointer ${
                pathName === "/about-us" ? " text-black bg-white" : ""
              }`}
              onClick={() => router.replace("/about-us")}
            >
              About us
            </li>
            <li className="hover:text-black hover:bg-white px-4 py-2 md:px-2 md:py-1">
              <DropDown
                title="OUR COURSES"
                options={[
                  {
                    name: "IATA Certified Aviation Diplomas",
                    url: "/courses/iata-certified-aviation-diplomas",
                  },
                  {
                    name: "India’s Top Air Hostess Training Institute",
                    url: "/courses/air-hostess-training-institute",
                  },
                  {
                    name: "Aviation, Hospitality & Travel Management",
                    url: "/courses/aviation-hospitality-travel-management",
                  },
                  {
                    name: "Ground Staff",
                    url: "/courses/ground-staff",
                  },
                ]}
              />
            </li>
            <li className="hover:text-black hover:bg-white px-4 py-2 md:px-2 md:py-1">
              <DropDown
                title="OUR CENTERS"
                options={[
                  {
                    name: "Hyderabad – Headquarters",
                    url: "/centers/hyderabad",
                  },
                  { name: "Andheri - Branch", url: "/centers/andheri" },
                  { name: "Vashi – Branch", url: "/centers/vashi" },
                  { name: "Saki Naka – Branch", url: "/centers/saki-naka" },
                ]}
              />
            </li>
            <li className="hover:text-black hover:bg-white px-4 py-2 md:px-2 md:py-1">
              Gallery
            </li>
            <li
              className={`hover:text-black hover:bg-white px-4 py-2 md:px-2 md:py-1 cursor-pointer ${
                pathName === "/contact-us" ? " text-black bg-white" : ""
              }`}
              onClick={() => router.replace("/contact-us")}
            >
              Contact us
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="hidden md:flex p-1 px-2.5 items-center justify-end space-x-1.5">
          <a
            href="https://www.facebook.com/atenasfraternity?utm_source=website&utm_medium=contact&utm_campaign=footer&utm_content=icon&utm_term=facebook"
            target="_blank"
          >
            <div className="p-3 rounded-full bg-white text-primary">
              <FaFacebook size={20} className="" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/company/atenasfraternity/"
            target="_blank"
          >
            <div className="p-3 rounded-full bg-white text-primary">
              <FaLinkedin size={20} className="" />
            </div>
          </a>
          <a
            href="https://www.instagram.com/atenasfraternity/"
            target="_blank"
          >
            <div className="p-3 rounded-full bg-white text-primary">
              <FaInstagram size={20} className="" />
            </div>
          </a>
          <a
            href="https://www.youtube.com/@atenasfraternity"
            target="_blank"
          >
            <div className="p-3 rounded-full bg-white text-primary">
              <FaYoutube size={20} className="" />
            </div>
          </a>
        </div>
      </section>
    </>
  );
}

export default Navbar;
