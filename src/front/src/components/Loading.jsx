import { LoaderCircle } from "lucide-react";
import React from "react";

export default function Loading({ fullscreen = true }) {
	return (
		<div
			className={
				(fullscreen ? "h-dvh w-dvw" : "h-full w-full") +
				" flex justify-center items-center"
			}
		>
			<LoaderCircle className="animate-loading h-20 w-20 text-primary-1000" />
		</div>
	);
}
