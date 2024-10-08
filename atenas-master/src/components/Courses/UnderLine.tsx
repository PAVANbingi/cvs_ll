import React from "react";

function UnderLine() {
	return (
		<div className="flex justify-center items-center gap-2 my-5">
			<hr className="w-14 h-0.5 bg-primary border-none" />
			<div className=" h-4 aspect-square bg-primary rounded-full"></div>
			<hr className="w-14 h-0.5 bg-primary border-none" />
		</div>
	);
}

export default UnderLine;
