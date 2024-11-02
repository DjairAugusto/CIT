import React from "react";

export default function Buttons() {
	return (
		<div className="flex  justify-between mx-12 mt-10 gap-x-2">
			<a
				href="#"
				className="w-2/4 inline-block text-center bg-red-500 text-white p-4 rounded"
			>
				CANCELAR
			</a>
			<a
				href="#"
				className="w-2/4 inline-block text-center bg-green-500 text-white p-4 rounded"
			>
				SALVAR
			</a>
		</div>
	);
}
