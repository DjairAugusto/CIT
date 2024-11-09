import React from "react";
import CommonAreaList from "./List";
import CommonAreaDetails from "./Details";
import { useLocation } from "react-router-dom";

export default function CommonAreaPage() {
	const location = useLocation();
	const { state } = location;

	return (
		<main className="flex w-svw h-svh justify-center bg-gray-mid">
			{state?.commonAreaId === undefined ? (
				<CommonAreaList />
			) : (
				<CommonAreaDetails commonAreaId={state.commonAreaId} />
			)}
		</main>
	);
}
