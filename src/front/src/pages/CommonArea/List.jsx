import React from "react";
import SearchBar from "../../components/Search/SearchBar";
import SideBar from "../../components/Sidebar";
import ImageCard from "../../components/ImageCard";

export default function CommonAreaList({ commonAreas, setFocused }) {
	return (
		<>
			<SideBar />
			<main className="w-full h-full p-4 flex flex-col">
				<div className="flex items-center flex-col mb-4">
					<h1 className="text-center text-4xl mb-2">Áreas Comuns</h1>
					<div className="bg-zinc-400 h-[1px] w-1/4"></div>
				</div>
				<SearchBar />

				<div className="grid grid-cols-3 auto-rows-min mt-4 gap-4 max-h-full overflow-auto">
					{commonAreas.map((commonArea) => (
						<ImageCard
							imgSrc={commonArea.img}
							title={commonArea.name}
							className="flex-initial"
							buttonText="Ver Detalhes"
							buttonAction={() => setFocused(commonArea)}
						/>
					))}
				</div>
			</main>
		</>
	);
}
