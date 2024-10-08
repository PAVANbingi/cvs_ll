"use client";
import React from "react";
import Accordion from "./Accordion";
import UnderLine from "../Courses/UnderLine";

export default function Faqs() {
	return (
		<div>
			<div className="text-center ">
				<h3 className="my-2 text-lg font-medium">FLY WITH US</h3>
				<h2 className="text-4xl text-center font-medium">
					NO.1 <span className="bg-primary text-white px-1">AIR HOSTESS</span>{" "}
					INSTITUTE
				</h2>
				<h4 className="my-2">Become a Cabin Crew with Us!</h4>
				<UnderLine />
			</div>
			<div>
				<div className="w-full px-32">
					<Accordion
						title={`Why is Aténas Fraternity better than other institutes?`}
						initialOpen={true}
					>
						<p className="p-4">
							Aténas Fraternity is better than other institutes because of the
							following reasons:
							<br />
							<br />
							<span className="font-semibold">
								Comprehensive Curriculum:
							</span>{" "}
							Aténas Fraternity provides comprehensive training programmes that
							encompass all elements of cabin crew and ground staff training.
							The curriculum is intended to match the most recent industry
							requirements, and it is revised on a regular basis to reflect
							developments in the aviation sector.
							<br />
							<br />
							<span className="font-semibold">
								Experienced faculty and industry connections:
							</span>{" "}
							The academy boasts a team of experienced faculty members who have
							spent many years working in the aviation sector. Faculty members
							are industry specialists who are dedicated to equipping students
							with the information and skills they need to succeed. Furthermore,
							Aténas Fraternity has agreements with airlines and other aviation
							industry participants, which can give students with actual
							experience and, in certain cases, career prospects.
							<br />
							<br />
							<span className="font-semibold">Modern facilities:</span> The
							Aténas Fraternity features modern facilities, such as imitation
							aircraft cabins, grooming rooms, and other amenities meant to
							imitate real-world aviation situations. This enables students to
							obtain hands-on experience while also developing the skills and
							confidence required to thrive in the profession.
						</p>
					</Accordion>
					<Accordion title={"Will I get placement after the course?"}>
						<div className="w-full p-4">
							<p>
								We provide 100% placement assistance. We also conduct mock
								interviews to give the students real world exposure.
							</p>
						</div>
					</Accordion>
					<Accordion title={"Do I need to know English to join the institute?"}>
						<div className="w-full p-4">
							<p>
								If you are lacking in this area, we will assist you with
								strengthening your communication abilities. Good communication
								skills will help you in your career.
							</p>
						</div>
					</Accordion>
					<Accordion title={"Can I become Air Hostess after 12th?"}>
						<div className="w-full p-4">
							<p>
								Yes, the minimum eligibility to become an air hostess is 10+2
								qualification.
							</p>
						</div>
					</Accordion>
					<Accordion
						title={"Do you conduct offline or online training classes?"}
					>
						<div className="w-full p-4">
							<p>
								We conduct offline training classes with mock flight setups to
								give the students a better understanding of the industry. We
								also provide online classes.
							</p>
						</div>
					</Accordion>
					<Accordion title={"Can anyone from India join the course?"}>
						<div className="w-full p-4">
							<p>Yes! Students from anywhere in India can join our course.</p>
						</div>
					</Accordion>
				</div>
			</div>
		</div>
	);
}
