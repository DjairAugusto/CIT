import React, { useState } from "react";
import CommonAreaList from "./List";
import CommonAreaDetails from "./Details";

export default function CommonAreaPage() {
	const [commonAreas, setCommonAreas] = useState(
		Array.from({ length: 30 }, () => {
			return {
				name: "Nome da Área Comum",
				img: "/common-area-placeholder.jpg",
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus ad perferendis. Totam vero a, illum accusantium reiciendis reprehenderit architecto?",
				disponibility: [
					{
						days: ["Seg", "Sex"],
						hours: ["00:00", "24:00"],
						price: 100,
					},
				],
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
		<div className="flex w-svw h-svh bg-gray-mid">
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
