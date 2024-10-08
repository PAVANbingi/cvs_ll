// import React from "react";
// import {
// 	FaFacebook,
// 	FaInstagram,
// 	FaYoutube,
// 	FaLinkedin,
// } from "react-icons/fa6";
// import { IoCall } from "react-icons/io5";
// import { FaLocationDot } from "react-icons/fa6";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function Footer() {
// 	return (
// 		<>
// 			<div className="w-full bg-black text-white flex flex-col justify-around gap-5 font-sans font-Poppins items-center ">
// 				<div className="w-full flex justify-between gap-10 bg-[#181818] py-4 px-24">
// 					<div className="w-[355px] space-y-4 text-base p-2.5">
// 						<img src="/images/logo.png" alt="logo" className="h-20" />
// 						<p className="pb-6 leading-relaxed">
// 							Aténas Fraternity provides the chance to empower your wings and
// 							fly.
// 						</p>
// 						<div className="flex gap-4 ">
// 							<a
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
// 						</div>
// 					</div>
// 					<div className="w-[355px] space-y-4 p-2.5 ">
// 						<div>
// 							<h1 className="text-xl font-bold text-red-500 uppercase">
// 								COMPANY
// 							</h1>
// 							<ul className="list-none space-y-2">
// 								<li className="hover:text-primary w-fit">
// 									<Link href="/about-us">About us</Link>
// 								</li>
// 								<li className="hover:text-primary w-fit">
// 									<Link href="/privacy-policy">Privacy Policy</Link>
// 								</li>
// 								<li className="hover:text-primary w-fit">
// 									<Link href="/refund-cancellation">Refund & cancellation</Link>
// 								</li>
// 								<li className="hover:text-primary w-fit">
// 									<Link href="/terms-conditions">Terms and conditions</Link>
// 								</li>
// 							</ul>
// 						</div>
// 						<div>
// 							<h1 className="text-xl font-bold text-red-500 uppercase">
// 								Our courses
// 							</h1>
// 							<ul className="list-none space-y-2">
// 								<li className="hover:text-primary w-fit">
// 									<Link href="/courses/air-hostess-training-institute">
// 										Air Hostess Course
// 									</Link>
// 								</li>
// 								<li className="hover:text-primary w-fit">
// 									<Link href="/courses/ground-staff">Ground Staff Course</Link>
// 								</li>
// 								<li className="hover:text-primary w-fit">
// 									<Link href="/courses/aviation-hospitality-travel-management">
// 										Specialized Course for Cabin Crew
// 									</Link>
// 								</li>
// 								<li className="hover:text-primary w-fit">
// 									<Link href="/courses/iata-certified-aviation-diplomas">
// 										IATA Certified Aviation Diplomas
// 									</Link>
// 								</li>
// 							</ul>
// 						</div>
// 					</div>
// 					<div className=" w-full space-y-4 p-2.5 px-16">
// 						<h1 className="text-xl font-bold text-red-500 uppercase">
// 							CONTACT US
// 						</h1>
// 						<ul className="list-none space-y-2 flex justify-between">
// 							<div>
// 								<div className="w-[300px] mb-5">
// 									<li className="font-bold ">Andheri – Headquarters</li>
// 									<li className="flex items-center gap-3">
// 										<FaLocationDot size={28} />
// 										201-A, 2nd Floor, Sunteck Grandeur, Opp Andheri Subway,
// 										Swami Vivekananda Road, Andheri West, Maharashtra 400058.
// 									</li>
// 									<li className="flex items-center gap-3">
// 										<IoCall size={28} /> +91 8422 8499 85
// 									</li>
// 								</div>
// 								<div className="w-[300px]">
// 									<li className="font-bold ">Vashi – Branch</li>
// 									<li className="flex items-center gap-3">
// 										<FaLocationDot size={28} />
// 										2nd Floor, Haware Infotech Park, Sector 30A, Vashi, Navi
// 										Mumbai, Next to Inorbit Mall.
// 									</li>
// 									<li className="flex items-center gap-3">
// 										<IoCall size={28} />
// 										+91 8422 8488 70 / 71
// 									</li>
// 								</div>
// 							</div>
// 							<div>
// 								<div className="w-[300px] mb-5">
// 									<li className="font-bold ">Saki Naka – Branch</li>
// 									<li className="flex items-center gap-3">
// 										<FaLocationDot size={28} />
// 										4015, 4th Floor, 1 Aerocity NIBR Corporate Park, Safed Pool,
// 										Andheri Kurla Road, Saki Naka.
// 									</li>
// 									<li className="flex items-center gap-3">
// 										<IoCall size={28} />
// 										+91 8422 8499 84 / 81
// 									</li>
// 								</div>
// 								<div className="w-[300px]">
// 									<li className="font-bold ">Hyderabad</li>
// 									<li className="flex items-center gap-3">
// 										<FaLocationDot size={28} />
// 										2nd Floor, Prime Plaza, Himayat Nagar , AP State Housing
// 										Board, Himayatnagar, Hyderabad, Telangana 500029
// 									</li>
// 									<li className="flex items-center gap-3">
// 										{/* <IoCall size={28} /> */}
// 									</li>
// 								</div>
// 							</div>
// 						</ul>
// 					</div>
// 				</div>
// 				<div className="w-full text-center">
// 					<p className="font-semibold">
// 						Copyright ©2024 Aténas Fraternity. All Rights Reserved.
// 						<br />
// 						Aténas Fraternity is a soft-skills training institute and does not
// 						give any job guarantee.
// 					</p>
// 				</div>
// 			</div>
// 		</>
// 	);
// }

import React from "react";
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaLinkedin,
} from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="w-full bg-black text-white flex flex-col justify-around gap-5 font-sans font-Poppins items-center">
            <div className="w-full flex flex-col md:flex-row justify-between gap-10 bg-[#181818] py-4 px-4 md:px-24">
                <div className="w-full md:w-[355px] space-y-4 text-base p-2.5">
                    <img src="/images/logo.png" alt="logo" className="h-20" />
                    <p className="pb-6 leading-relaxed">
                        Aténas Fraternity provides the chance to empower your wings and fly.
                    </p>
                    {/* Responsive Flexbox for Icons */}
                    <div className="flex justify-center md:justify-start gap-4">
                        <a
                            href="https://www.facebook.com/atenasfraternity?utm_source=website&utm_medium=contact&utm_campaign=footer&utm_content=icon&utm_term=facebook"
                            target="_blank"
                        >
                            <div className="p-3 rounded-full bg-white text-primary">
                                <FaFacebook size={20} />
                            </div>
                        </a>
                        <a
                            href="https://www.linkedin.com/company/atenasfraternity/"
                            target="_blank"
                        >
                            <div className="p-3 rounded-full bg-white text-primary">
                                <FaLinkedin size={20} />
                            </div>
                        </a>
                        <a
                            href="https://www.instagram.com/atenasfraternity/"
                            target="_blank"
                        >
                            <div className="p-3 rounded-full bg-white text-primary">
                                <FaInstagram size={20} />
                            </div>
                        </a>
                        <a
                            href="https://www.youtube.com/@atenasfraternity"
                            target="_blank"
                        >
                            <div className="p-3 rounded-full bg-white text-primary">
                                <FaYoutube size={20} />
                            </div>
                        </a>
                    </div>
                </div>
                <div className="w-full md:w-[355px] space-y-4 p-2.5">
                    <div>
                        <h1 className="text-xl font-bold text-red-500 uppercase">COMPANY</h1>
                        <ul className="list-none space-y-2">
                            <li className="hover:text-primary w-fit">
                                <Link href="/about-us">About us</Link>
                            </li>
                            <li className="hover:text-primary w-fit">
                                <Link href="/privacy-policy">Privacy Policy</Link>
                            </li>
                            <li className="hover:text-primary w-fit">
                                <Link href="/refund-cancellation">Refund & cancellation</Link>
                            </li>
                            <li className="hover:text-primary w-fit">
                                <Link href="/terms-conditions">Terms and conditions</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-red-500 uppercase">Our courses</h1>
                        <ul className="list-none space-y-2">
                            <li className="hover:text-primary w-fit">
                                <Link href="/courses/air-hostess-training-institute">Air Hostess Course</Link>
                            </li>
                            <li className="hover:text-primary w-fit">
                                <Link href="/courses/ground-staff">Ground Staff Course</Link>
                            </li>
                            <li className="hover:text-primary w-fit">
                                <Link href="/courses/aviation-hospitality-travel-management">Specialized Course for Cabin Crew</Link>
                            </li>
                            <li className="hover:text-primary w-fit">
                                <Link href="/courses/iata-certified-aviation-diplomas">IATA Certified Aviation Diplomas</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full space-y-4 p-2.5 px-4 md:px-16">
                    <h1 className="text-xl font-bold text-red-500 uppercase">CONTACT US</h1>
                    <ul className="list-none space-y-2 flex flex-col md:flex-row justify-between">
                        <div className="flex flex-col space-y-5">
                            <div className="w-full mb-5">
                                <li className="font-bold">Andheri – Headquarters</li>
                                <li className="flex items-center gap-3">
                                    <FaLocationDot size={28} />
                                    201-A, 2nd Floor, Sunteck Grandeur, Opp Andheri Subway,
                                    Swami Vivekananda Road, Andheri West, Maharashtra 400058.
                                </li>
                                <li className="flex items-center gap-3">
                                    <IoCall size={28} /> +91 8422 8499 85
                                </li>
                            </div>
                            <div className="w-full">
                                <li className="font-bold">Vashi – Branch</li>
                                <li className="flex items-center gap-3">
                                    <FaLocationDot size={28} />
                                    2nd Floor, Haware Infotech Park, Sector 30A, Vashi, Navi
                                    Mumbai, Next to Inorbit Mall.
                                </li>
                                <li className="flex items-center gap-3">
                                    <IoCall size={28} />
                                    +91 8422 8488 70 / 71
                                </li>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-5">
                            <div className="w-full mb-5">
                                <li className="font-bold">Saki Naka – Branch</li>
                                <li className="flex items-center gap-3">
                                    <FaLocationDot size={28} />
                                    4015, 4th Floor, 1 Aerocity NIBR Corporate Park, Safed Pool,
                                    Andheri Kurla Road, Saki Naka.
                                </li>
                                <li className="flex items-center gap-3">
                                    <IoCall size={28} />
                                    +91 8422 8499 84 / 81
                                </li>
                            </div>
                            <div className="w-full">
                                <li className="font-bold">Hyderabad</li>
                                <li className="flex items-center gap-3">
                                    <FaLocationDot size={28} />
                                    2nd Floor, Prime Plaza, Himayat Nagar, AP State Housing
                                    Board, Himayatnagar, Hyderabad, Telangana 500029
                                </li>
                                <li className="flex items-center gap-3">
                                    {/* <IoCall size={28} /> */}
                                </li>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="w-full text-center">
                <p className="font-semibold">
                    Copyright ©2024 Aténas Fraternity. All Rights Reserved.
                    <br />
                    Aténas Fraternity is a soft-skills training institute and does not give any job guarantee.
                </p>
            </div>
        </div>
    );
}
