import React from "react";

export default function FormsButon({ children }) {
	return (
		<button
			className="bg-zinc-800 text-white h-10 mt-10"
			type="submit"
		>
			{children}
		</button>
	);
}
