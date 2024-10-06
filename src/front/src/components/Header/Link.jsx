import React from "react";
import { Link as LinkRouter } from "react-router-dom";

export default function Link(props) {
	return (
		<LinkRouter
			className="hover:text-primary hover:border-black border-transparent border-2 text-black px-5 py-2 transition-all duration-300"
			{...props}
		>
			{props.children}
		</LinkRouter>
	);
}
