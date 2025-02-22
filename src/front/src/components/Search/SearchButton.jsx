import React from "react";

export default function SearchButton({ icon, onClick }) {
	function handleOnClick(e) {
		if (onClick) onClick(e);
	}
	
	return (
		<button
			className="
			w-12 h-12 flex justify-center items-center bg-gray-300 rounded-2xl
			hover:bg-primary-1000 hover:text-white transition-all duration-200"
			onClick={handleOnClick}
		>
			{icon}
		</button>
	);
}
