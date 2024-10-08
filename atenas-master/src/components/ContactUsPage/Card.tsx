import React from "react";

function Card({
	Icon,
	title,
	description,
}: {
	Icon: React.ElementType;
	title: string;
	description: string;
}) {
	return (
		<div className="h-[250px] w-[300px] bg-white border border-primary rounded-xl shadow-2xl">
			<div className="flex flex-col items-center justify-center h-full p-1">
				<Icon className="text-5xl text-primary" />
				<h1 className="text-2xl font-bold">{title}</h1>
				<p className="text-primary text-center">{description}</p>
			</div>
		</div>
	);
}

export default Card;
