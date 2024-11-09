import React from "react";
import SearchBar from "../../components/Search/SearchBar";
import PolaroidCard from "../../components/PolaroidCard";

export default function CommonAreaList({ commonAreas, setFocused, role }) {
	return (
		<main className="w-full h-full flex flex-col items-center bg-gray-low">
			<div className="flex flex-col px-4 xl:px-0 xl:w-8/12 h-full py-4">
				<div className="flex items-center flex-col mb-4">
					<h1 className="text-center text-4xl mb-2">Áreas Comuns</h1>
					<div className="bg-zinc-400 h-px w-1/4"></div>
				</div>
				<SearchBar role={role} />

				<div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 place-content-stretch w-full mt-4 gap-4 max-h-full overflow-auto">
					{commonAreas.map((commonArea) => (
						<PolaroidCard
							key={commonArea.id}
							imgSrc={commonArea.img}
							title={commonArea.name}
							className="bg-white"
						>
							<button
								className="text-primary-1000 bg-none"
								onClick={() => setFocused(commonArea)}
							>
								Ver Detalhes
							</button>
						</PolaroidCard>
					))}
				</div>
			</div>
		</main>
	);
}
