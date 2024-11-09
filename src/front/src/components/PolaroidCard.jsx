import React from "react";

export default function PolaroidCard({ imgSrc, title, className, children }) {
	return (
		<div className={className + " px-6 py-4 shadow-md hover:shadow-xl transition-shadow duration-400"}>
			<img src={imgSrc} alt="" />
			<div className="py-2">
				<h2 className="text-lg">{title}</h2>
				{children}
			</div>
		</div>
	);
}
