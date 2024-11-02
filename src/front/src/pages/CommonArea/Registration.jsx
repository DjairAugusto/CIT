import React from "react";
import CommonAreaBanner from "./Banner";
import Description from "./Description";
import Buttons from "./Buttons";

export default function CommonAreaRegistration() {
	return (
		<main>
			<CommonAreaBanner />
			<Description text="Texto de descrição de área comum." />
			<Buttons />
		</main>
	);
}
