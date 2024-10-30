import React, { useState } from "react";
import CommonAreaList from "./List";
import CommonAreaDetails from "./Details";

export default function CommonAreaPage() {
	const [commonAreas, _] = useState(
		new Array(30).fill({
			name: "Nome da Área Comum",
			img: "/common-area-placeholder.jpg",
		})
	);

	const [role, setRole] = useState("ADMIN");

	const [focusedOn, setFocusedOn] = useState(null);

	function clearFocused() {
		setFocusedOn(null);
	}

	function setFocused(commonArea) {
		setFocusedOn(commonAreas.indexOf(commonArea));
	}

	return (
		<div className="flex w-svw h-svh bg-[#d9d9d9]">
			{focusedOn !== null ? (
				<CommonAreaDetails
					commonArea={commonAreas[focusedOn]}
					clearFocused={clearFocused}
					role={role}
				/>
			) : (
				<CommonAreaList
					commonAreas={commonAreas}
					setFocused={setFocused}
					role={role}
				/>
			)}
		</div>
	);
}
