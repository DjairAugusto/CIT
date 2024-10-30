import React from "react";
import SearchBar from "../../components/Search/SearchBar";
import ImageCard from "../../components/ImageCard";

export default function CommonAreaList({ commonAreas, setFocused, role }) {
	return (
		<>
			<main className="w-full h-full p-4 flex flex-col bg-white">
				<div className="flex items-center flex-col mb-4">
					<h1 className="text-center text-4xl mb-2">Áreas Comuns</h1>
					<div className="bg-zinc-400 h-[1px] w-1/4"></div>
				</div>
				<SearchBar role={role} />

				<div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 place-content-stretch w-full mt-4 gap-4 max-h-full overflow-auto">
					{commonAreas.map((commonArea) => (
						<ImageCard
							imgSrc={commonArea.img}
							title={commonArea.name}
							className="w-full h-full min-h-60"
							buttonText="Ver Detalhes"
							buttonAction={() => setFocused(commonArea)}
						/>
					))}
				</div>
			</main>
		</>
	);
}
