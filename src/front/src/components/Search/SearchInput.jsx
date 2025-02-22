import React from "react";

export default function SearchInput({ value, onChange, placeholder }) {
	return (
		<input
			className="bg-gray-300 rounded-2xl px-3 text-lg flex-1 min-w-0"
			type="text"
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
}
