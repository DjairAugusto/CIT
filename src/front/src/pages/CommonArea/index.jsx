import React, { useState } from "react";
import CommonAreaList from "./List";

export default function CommonAreaPage() {
	const [commonAreas, _] = useState(
		new Array(30).fill({
			name: "Nome da Área Comum",
			img: "/common-area-placeholder.jpg",
		})
	);

	const [focusedOn, setFocusedOn] = useState(null);

	return (
		<div className="flex w-svw h-svh">
			{focusedOn !== null ? (
				<></>
			) : (
				<CommonAreaList
					commonAreas={commonAreas}
					setFocused={setFocusedOn}
				/>
			)}
		</div>
	);
}
