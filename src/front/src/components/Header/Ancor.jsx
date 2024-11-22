import React from "react";

export default function Ancor(props) {
	return (
		<a
			className="hover:text-primary-1000 hover:border-primary-1000 font-normal border-transparent border-2 text-black px-5 py-2 transition-all duration-300"
			{...props}
		>
			{props.children}
		</a>
	);
}
