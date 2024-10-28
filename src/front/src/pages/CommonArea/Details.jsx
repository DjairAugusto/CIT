import React from "react";
import { ArrowLeft } from "lucide-react";

export default function CommonAreaDetails({ commonArea, clearFocused }) {
	return (
		<div className="w-full m-6 rounded-3xl overflow-hidden">
			<div className="relative w-full h-full max-h-96 overflow-hidden">
				<div className="absolute w-full h-full bg-gradient-to-b from-black to-transparent to-20% opacity-60"></div>
				<div className="absolute w-full h-full bg-gradient-to-b from-transparent from-70% to-black to-87% opacity-80"></div>
				<button onClick={() => clearFocused()} className="top-3 left-3 text-white flex text-2xl items-center absolute bg-transparent border-none">
					<ArrowLeft className="mr-2" />
					Voltar
				</button>
				<img
					className="w-full object-cover object-bottom"
					src={commonArea.img}
					alt=""
				/>
				<h2 className="absolute bottom-3 left-3 text-white text-3xl">
					{commonArea.name}
				</h2>
			</div>
		</div>
	);
}
