import React from "react";

export default function CommonAreaBase({ children }) {
	return (
		<main className="flex flex-col items-center w-svw h-svh justify-center bg-gray-low">
			{children}
		</main>
	);
}
