import Image from "next/image";
import React from "react";

function page() {
	return (
		<div>
			<section>
				<div className="relative h-[500px] bg-[url('/images/pic4.jpg')] bg-no-repeat bg-cover bg-left-top flex flex-col justify-center items-center gap-8 text-white">
					<div className="absolute inset-0 bg-black opacity-35 z-0"></div>
					<h1 className="text-5xl font-bold z-10">
						Aténas Fraternity Hostess Academy
					</h1>
					<h3 className="text-lg z-10">
						No. 1 Air Hostess Academy, Let Your Dream Take a Flight!
					</h3>
				</div>
			</section>
			<section className="my-20 flex justify-center items-center">
				<div className="flex justify-center max-w-[1200px] px-10 gap-x-5">
					<div className="w-1/2">
						<h2 className="text-3xl mb-5 text-balance">
							ATÉNAS FRATERNITY AIR HOSTESS COURSES
						</h2>
						<hr className=" w-[200px] h-1 bg-primary border-none mb-5" />
						<p className="text-lg">
							The Aténas Fraternity Air Hostess Academy provides professional
							aviation training to students in order to help them advance their
							careers in airports, hospitality sectors, and airline
							corporations. ATÉNAS FRATERNITY Air Hostess Academy is a
							one-of-a-kind comprehensive one-stop educational college with
							professional expertise in offering professional aviation
							qualifications to fulfil the growing demand for skilled labour in
							the aviation industry. The ATÉNAS FRATERNITY Air Hostess Academy
							features a pool of competent teaching members with substantial
							Aviation & Hospitality experience as well as good academic
							qualifications, which enhances the degree of students&apos; chances of
							being placed in many known airlines and aviation firms. We offer
							the best air hostess courses that are based on industry standards
							and taught by the greatest aviation professionals and faculty in
							the industry. In addition, we provide the best training for air
							hostesses in areas such as behavior, dressing style, speaking,
							language command, interacting with guests or clients, and many
							more. All will be guided in a systematic manner by our institute&apos;s
							aviation professionals. Furthermore, the training sessions will
							provide students with the opportunity to perform their own and
							execute the best practices in order to improve over time.{" "}
						</p>
					</div>
					<div>
						<Image
							src="/images/course3.jpg"
							alt="pic4"
							width={450}
							height={450}
						/>
					</div>
				</div>
			</section>
			<section className="my-20">
				<div className="text-white text-2xl font-bold flex justify-center items-center bg-secondary py-5 gap-x-5">
					<div className="w-[260px] h-[160px] bg-primary flex flex-col justify-center items-center gap-y-2">
						<img src="/icons/students.svg" alt="students" className="w-16 " />
						<p>5000 +</p>
						<p className="text-xl">Student Trained</p>
					</div>
					<div className="w-[260px] h-[160px] bg-primary flex flex-col justify-center items-center gap-y-2">
						<img src="/icons/team.svg" alt="team" className="w-16 " />
						<p>15 +</p>
						<p className="text-xl">Team Members</p>
					</div>
					<div className="w-[260px] h-[160px] bg-primary flex flex-col justify-center items-center gap-y-2">
						<img src="/icons/money-bag.svg" alt="experience" className="w-16" />
						<p>3 +</p>
						<p className="text-xl">Years</p>
					</div>
					<div className="w-[260px] h-[160px] bg-primary flex flex-col justify-center items-center gap-y-2">
						<img src="/icons/award.svg" alt="award" className="w-16" />
						<p>20 +</p>
						<p className="text-xl">Awards</p>
					</div>
				</div>
			</section>
			<section className="my-20 flex justify-center items-center">
				<div className="flex justify-center max-w-[1200px] px-10 gap-x-5">
					<div>
						<Image
							src="/images/pic16.jpg"
							alt="pic4"
							width={450}
							height={450}
						/>
					</div>
					<div className="w-1/2">
						<h2 className="text-3xl mb-5 text-balance">
							ATÉNAS FRATERNITY AIR HOSTESS COURSES
						</h2>
						<hr className=" w-[200px] h-1 bg-primary border-none mb-5" />
						<p className="text-lg">
							We at Aténas Fraternity Air Hostess Academy strongly believe that
							if you have enough courage, you can do anything in life. Work hard
							if you want to be successful. Those who not only dream but also
							work for it achieve success. We help you reach your true potential
							and improve your abilities so that you are future-ready. The most
							beautiful thing you can wear is confidence, and we can help you
							find it in yourself. Our Diploma / Certificate courses are very
							well recognized in our Industry. A wide range of courses to help
							you achieve your professional goal. Individual attention to each
							student to improve your employability skills. Interactive training
							sessions for better conceptualization. Learning by doing, focus on
							developing Job skills. One to three months industrial training at
							Airport. Mock interview practices to overcome your hesitation and
							fears. We equip you with hospitality, sales and travel trade
							skills. We offer 100% Job Guarantee after successful completion of
							our course. Professional Trainings in Swimming, customer service,
							safety procedures, and emergency medical protocol.
						</p>
					</div>
				</div>
			</section>
			<section>
				<div className="relative h-[500px] bg-[url('/images/pic13.jpg')] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center gap-8 text-white">
					<div className="absolute inset-0 bg-black opacity-35 z-0"></div>
					<h1 className="text-5xl font-bold z-10">
						Aténas Fraternity Hostess Academy
					</h1>
					<h3 className="text-lg z-10">
						No. 1 Air Hostess Academy, Let Your Dream Take a Flight!
					</h3>
				</div>
			</section>
		</div>
	);
}

export default page;
