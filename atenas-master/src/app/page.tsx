import Aviation from "@/components/LandingPage/Aviation";
import About from "@/components/LandingPage/About";
import Analytics from "@/components/LandingPage/Analytics";
import Banner from "@/components/LandingPage/Banner";
import Blogs from "@/components/LandingPage/Blogs";
import Brands from "@/components/LandingPage/Brands";
import Contact from "@/components/LandingPage/Contact";
import Courses from "@/components/LandingPage/Courses";
import Faqs from "@/components/LandingPage/Faqs";
import Gallery from "@/components/LandingPage/Gallery";
import Hero from "@/components/LandingPage/Hero";
import Join from "@/components/LandingPage/Join";
import Reasons from "@/components/LandingPage/Reasons";
import Testimonials from "@/components/LandingPage/Testimonials";
import WhyAirHostess from "@/components/LandingPage/WhyAirHostess";

export default function Home() {
	return (
		<>
			<Hero />
			<Banner />
			<About />
			{/* <Analytics />
			 */}
			<section className="my-20">
				<div className="text-white text-2xl font-bold flex justify-center items-center py-5 gap-x-5">
					<div className="w-[260px] h-[160px] bg-primary flex justify-center items-center gap-x-2">
						<img src="/icons/students.svg" alt="students" className="w-16" />
						<div>
							<p>5000 +</p>
							<p className="text-xl">Student Trained</p>
						</div>
					</div>
					<div className="w-[260px] h-[160px] bg-primary flex justify-center items-center gap-x-2">
						<img src="/icons/team.svg" alt="team" className="w-16" />
						<div>
							<p>15 +</p>
							<p className="text-xl">Team Members</p>
						</div>
					</div>
					<div className="w-[260px] h-[160px] bg-primary flex justify-center items-center gap-x-2">
						<img src="/icons/money-bag.svg" alt="experience" className="w-16" />
						<div>
							<p>3 +</p>
							<p className="text-xl">Years</p>
						</div>
					</div>
					<div className="w-[260px] h-[160px] bg-primary flex justify-center items-center gap-x-2">
						<img src="/icons/award.svg" alt="award" className="w-16" />
						<div>
							<p>20 +</p>
							<p className="text-xl">Awards</p>
						</div>
					</div>
				</div>
			</section>
			<Courses />
			<Reasons />
			<Join />
			<Brands />
			<Gallery />
			<Testimonials />
			<Faqs />
			<Aviation />
			<WhyAirHostess />
			<Blogs />
			<Contact />
		</>
	);
}
