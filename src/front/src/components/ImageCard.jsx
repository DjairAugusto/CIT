import React from "react";

export default function ImageCard({ imgSrc, title, className, buttonText, buttonAction }) {
	return (
		<div
			className={
				"relative min-w-xs max-w-lg w-full max-h-72 rounded-lg overflow-hidden " + className
			}
		>
			<div className="relative">
				<div className="absolute bg-gradient-to-b from-black from-10% to-transparent to-30% w-full h-full opacity-80"></div>
				<h2 className="absolute text-white left-2 top-1 text-2xl">
					{title}
				</h2>
				<img src={imgSrc} alt="" />
			</div>
			<button
				className="
					bg-primary-1000 w-full text-white text-3xl py-2 absolute bottom-0
					hover:text-primary-1000 hover:bg-gray-100 transition-all duration-300
				"
				onClick={event => buttonAction(event)}
			>
				{buttonText}
			</button>
		</div>
	);
}
