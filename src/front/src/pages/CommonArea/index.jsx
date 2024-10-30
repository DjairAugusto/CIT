import React, { useState } from "react";
import CommonAreaList from "./List";
import CommonAreaDetails from "./Details";

export default function CommonAreaPage() {
	const [commonAreas, setCommonAreas] = useState(
		Array.from({ length: 30 }, () => {
			return {
				name: "Nome da Área Comum",
				img: "/common-area-placeholder.jpg",
			};
		})
	);

	const [role, setRole] = useState("ADMIN");

	const [focusedOn, setFocusedOn] = useState(null);

	function clearFocused() {
		setFocusedOn(null);
	}

	function removeCommonArea(commonArea) {
		if (commonArea === focusedOn) clearFocused();
		setCommonAreas(commonAreas.filter((each) => each !== commonArea));
	}

	return (
		<div className="flex w-svw h-svh bg-[#d9d9d9]">
			{focusedOn !== null ? (
				<CommonAreaDetails
					commonArea={focusedOn}
					deleteFocused={() => removeCommonArea(focusedOn)}
					clearFocused={clearFocused}
					role={role}
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
