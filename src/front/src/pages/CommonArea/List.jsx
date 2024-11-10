import React, { useEffect, useState } from "react";
import SearchBar from "../../components/Search/SearchBar";
import PolaroidCard from "../../components/PolaroidCard";
import Loading from "../../components/Loading";
import axios from "../../utils/requisition/citRequisition";
import { useNavigate } from "react-router-dom";
import CommonAreaBase from "./Base";

export default function CommonAreaList() {
	const [commonAreas, setCommonAreas] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		axios.get("/common-area").then((res) => {
			setCommonAreas(res.data);
		});
	});

	if (commonAreas === null) return <Loading />;

	return (
		<CommonAreaBase>
			<div className="flex flex-col px-4 w-full lg:px-0 lg:w-8/12 h-full py-4">
				<div className="flex items-center flex-col mb-4">
					<h1 className="text-center text-4xl mb-2">Áreas Comuns</h1>
					<div className="bg-zinc-400 h-px w-1/4"></div>
				</div>
				{
					// TODO modularizar a SearchBar
					// TODO implementar a lógica e a tela de criar área comum
				}
				<SearchBar />

				<div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 place-content-stretch w-full mt-4 gap-4 max-h-full overflow-auto">
					{commonAreas.map((commonArea) => (
						<PolaroidCard
							key={commonArea.id}
							imgSrc={commonArea.img}
							title={commonArea.name}
							className="bg-white hover:cursor-pointer"
							onClick={() => {
								navigate("./details", {
									state: {
										commonAreaId: commonArea.id,
									},
								});
							}}
						/>
					))}
				</div>
			</div>
		</CommonAreaBase>
	);
}
