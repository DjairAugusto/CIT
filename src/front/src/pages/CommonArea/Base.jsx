import React from "react";
import "./fix.css";

export default function CommonAreaBase({ children }) {
	return (
		<main id="common-area-base" className="flex flex-col items-center w-svw h-full justify-center bg-gray-low">
			{children}
		</main>
	);
}
