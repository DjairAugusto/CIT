import React from "react";

export default function SearchButton({ icon }) {
	return (
		<button
			className="
			w-12 h-12 flex justify-center items-center bg-gray-300 rounded-2xl
			hover:bg-primary-1000 hover:text-white"
		>
			{icon}
		</button>
	);
}
