// import React from "react";
// import { IoCallOutline } from "react-icons/io5";
// import { SlLocationPin } from "react-icons/sl";
// import { MdFlight } from "react-icons/md";

// function Header() {
// 	return (
// 		<>
// 			<section className="w-full bg-white flex justify-around gap-5 font-sans font-Poppins items-center py-2 px-24">
// 				<div className="">
// 					<img src="/images/logo.png" alt="logo" className="h-16" />
// 				</div>
// 				<div className="flex flex-row gap-3 justify-center items-center p-3">
// 					<div className="bg-primary h-[36px] w-[36px] flex justify-center items-center">
// 						<IoCallOutline size={20} className="text-white text-xl" />
// 					</div>
// 					<div className="leading-tight">
// 						<h4 className="font-extrabold text-base">Call us now</h4>
// 						<p className="leading-tight text-sm">+91-8826994401</p>
// 					</div>
// 				</div>
// 				<div className="flex flex-row gap-3 justify-center items-center p-3">
// 					<div className="bg-primary h-[36px] w-[36px] flex justify-center items-center">
// 						<SlLocationPin size={20} className="text-white text-xl" />
// 					</div>
// 					<div className="leading-tight">
// 						<h4 className="font-extrabold text-base">Address 1</h4>
// 						<p className="text-sm w-[250px]">
// 							201-A, 2nd Floor, Sunteck Grandeur, Opp Andheri Subway, Swami
// 							Vivekananda Road, Andheri West, Maharashtra 400058.
// 						</p>
// 					</div>
// 				</div>
// 				<div className="flex flex-row gap-3 justify-center items-center p-3">
// 					<div className="bg-primary h-[36px] w-[36px] flex justify-center items-center">
// 						<SlLocationPin size={20} className="text-white text-xl" />
// 					</div>
// 					<div className="leading-tight">
// 						<h4 className="font-extrabold text-base">Address 2</h4>
// 						<p className="text-sm w-[250px]">
// 							2nd Floor, Prime Plaza, Himayat Nagar , AP State Housing Board,
// 							Himayatnagar, Hyderabad, Telangana 500029
// 						</p>
// 					</div>
// 				</div>

// 				<div>
// 					<div className="bg-primary rounded-xl text-white px-4 py-2 leading-tight flex justify-center items-center gap-2">
// 						<MdFlight size={24} className="text-white rotate-90 z-0" />
// 						<p>
// 							Register <br /> now
// 						</p>
// 					</div>
// 				</div>
// 			</section>
// 		</>
// 	);
// }

// export default Header;

import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { MdFlight } from "react-icons/md";

function Header() {
	return (
		<>
			<section className="w-full bg-white flex flex-wrap justify-around gap-5 font-sans font-Poppins items-center py-2 px-5 lg:px-24">
				{/* Logo */}
				<div className="flex justify-center items-center">
					<img src="/images/logo.png" alt="logo" className="h-12 lg:h-16" />
				</div>

				{/* Mobile view: Icons only; Large view: Full details */}
				<div className="hidden lg:flex flex-row gap-3 justify-center items-center p-3">
					{/* Contact Info */}
					<div className="flex flex-row gap-3 justify-center items-center">
						<div className="bg-primary h-[36px] w-[36px] flex justify-center items-center">
							<IoCallOutline size={20} className="text-white text-xl" />
						</div>
						<div className="leading-tight">
							<h4 className="font-extrabold text-base">Call us now</h4>
							<p className="leading-tight text-sm">+91-8826994401</p>
						</div>
					</div>

					<div className="flex flex-row gap-3 justify-center items-center">
						<div className="bg-primary h-[36px] w-[36px] flex justify-center items-center">
							<SlLocationPin size={20} className="text-white text-xl" />
						</div>
						<div className="leading-tight">
							<h4 className="font-extrabold text-base">Address 1</h4>
							<p className="text-sm w-[250px]">
								201-A, 2nd Floor, Sunteck Grandeur, Opp Andheri Subway, Swami
								Vivekananda Road, Andheri West, Maharashtra 400058.
							</p>
						</div>
					</div>

					<div className="flex flex-row gap-3 justify-center items-center">
						<div className="bg-primary h-[36px] w-[36px] flex justify-center items-center">
							<SlLocationPin size={20} className="text-white text-xl" />
						</div>
						<div className="leading-tight">
							<h4 className="font-extrabold text-base">Address 2</h4>
							<p className="text-sm w-[250px]">
								2nd Floor, Prime Plaza, Himayat Nagar, AP State Housing Board,
								Himayatnagar, Hyderabad, Telangana 500029.
							</p>
						</div>
					</div>
				</div>

				{/* Mobile view: Icons only */}
				<div className="lg:hidden flex justify-around w-full p-3">
					<div className="flex flex-col items-center">
						<IoCallOutline size={24} className="text-primary" />
					</div>
					<div className="flex flex-col items-center">
						<SlLocationPin size={24} className="text-primary" />
					</div>
					<div className="flex flex-col items-center">
						<SlLocationPin size={24} className="text-primary" />
					</div>
					{/* Register button - always visible */}
				<div className="flex justify-center items-center">
					<div className="bg-primary rounded-xl text-white px-4 py-2 leading-tight flex justify-center items-center gap-2">
						<MdFlight size={24} className="text-white rotate-90 z-0" />
						<p className="hidden lg:block">
							Register <br /> now
						</p>
					</div>
				</div>
				</div>

				
			</section>
		</>
	);
}

export default Header;
