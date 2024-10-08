import React from "react";

function page() {
	return (
		<div className="w-full flex justify-center my-10">
			<div className="w-4/5 flex flex-col gap-y-5">
				At Aténas Fraternity Air Hostess Academy, we are committed to providing
				the best training and education to our students. Due to the nature of
				our courses and the resources allocated for training, we have a strict
				no refund and no cancellation policy.
				<h2 className="text-2xl font-medium">Key Points:</h2>
				<ul className="list-decimal px-6">
					<li className="font-medium my-3">
						Non-Refundable Fees:
						<p className="font-normal">
							Once the course fee is paid, it is non-refundable under any
							circumstances. This policy applies to all payment methods,
							including online, offline, and installment payments registration
							amount,s or any other kind of payment.
						</p>
					</li>
					<li className="font-medium my-3">
						Non-Cancellable Enrollment:
						<p className="font-normal">
							Enrollment in any of our courses cannot be canceled. This includes
							any changes in personal circumstances, changes in schedules, or
							any other reasons.
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default page;
