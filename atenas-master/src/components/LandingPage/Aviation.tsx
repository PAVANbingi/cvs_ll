import React from "react";

export default function Aaviation() {
	return (
		<>
			<div className="w-full bg-[#f5f5f5] flex flex-col justify-around gap-5 font-sans font-Poppins items-center py-5 px-24">
				<div className="w-full flex flex-col justify-center items-center gap-3 p-5 pt-5 pb-1">
					<p className="text-xl font-semibold uppercase">AVIATION INDUSTRY</p>
					<h1 className="text-5xl text-primary font-semibold uppercase my-3">
						AIR <span className="text-white bg-primary px-2">HOSTESS</span>{" "}
						INDUSTRY IN INDIA
					</h1>
					<p className="text-lg text-center">
						Growing demand of air hostess in India
					</p>
					<hr className="w-[200px] h-1 bg-primary border-none" />
				</div>
				<div>
					<div className="w-full flex justify-between text-lg gap-4">
						<div className="w-1/2 p-2 ">
							<p>
								In recent years, India’s air hostess business has grown
								significantly. The demand for air hostesses has increased
								rapidly as the aviation industry has expanded and the number of
								airlines has increased. Air hostesses are an important part of
								the airline business because they ensure the comfort and
								protection of passengers during their flights. The increase in
								the number of airlines is one of the main reasons for the growth
								of the air hostess business in India. In recent years, India has
								seen a massive increase in the number of domestic airlines,
								which has inturn increased the demand for air hostesses.
							</p>
							<br />
							<p>
								The air hostess industry in India provides excellent career
								opportunities for women, and it gives them a chance to explore
								new places and meet new people. Overall, the expansion of the
								air hostess industry in India is a positive development that is
								anticipated to contribute greatly to the growth of the country’s
								aviation industry.
							</p>
						</div>
						<div className="w-1/2 h-[400px] overflow-hidden">
							<img
								src="/images/pic6.jpg"
								alt=""
								className="w-full h-full object-cover object-center"
							/>
						</div>
					</div>
					<p className="text-lg p-2">
						Another factor driving the expansion of the air hostess industry in
						India is the growing number of passengers. As India’s middle class
						expands, more individuals are using airlines to travel. As a result,
						the number of passengers has increased significantly, and airlines
						require more air hostesses to meet their needs.
					</p>
					<p className="text-lg p-2">
						In India, the air hostess industry offers excellent career
						opportunities for women. Air hostess jobs are generally regarded as
						glamorous, and they provide the opportunity to travel the world.
						Many young women in India are drawn to this career path because it
						allows them to travel to new places and meet new people.
						Furthermore, air hostess jobs offer flexible working hours, making
						them an appealing option for women who want to balance their careers
						and family life.
					</p>
				</div>
			</div>
		</>
	);
}
