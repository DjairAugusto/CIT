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

	const [focusedOn, setFocusedOn] = useState(null);

	function clearFocused() {
		setFocusedOn(null);
	}

	return (
		<div className="flex w-svw h-svh">
			{focusedOn !== null ? (
				<CommonAreaDetails
					commonArea={focusedOn}
					clearFocused={clearFocused}
				/>
			) : (
				<CommonAreaList
					commonAreas={commonAreas}
					setFocused={setFocusedOn}
				/>
			)}
		</div>
	);
}
