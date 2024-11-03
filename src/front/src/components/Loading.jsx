import { LoaderCircle } from "lucide-react";
import React from "react";

export default function Loading() {
	return (
		<div className="flex justify-center items-center w-full h-full">
			<LoaderCircle className="animate-loading h-20 w-20 text-primary-1000" />
		</div>
	);
}