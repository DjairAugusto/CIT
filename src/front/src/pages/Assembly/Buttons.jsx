import React from "react";
export default function Buttons() {
	return (
		<div className="flex px-12 pt-10 gap-2">
			<a
				href="#"
				className="w-full bg-red-500 text-white p-4 rounded text-center"
			>
				PUBLICAR
			</a>
			<a
				href="#"
				className="w-full bg-primary-1000 text-white p-4 rounded text-center"
			>
				APAGAR
			</a>
		</div>
	);
}