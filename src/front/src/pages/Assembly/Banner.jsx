import React, { useState } from "react";

export default function AssemblyAdmBanner() {
	return (
		<div className="flex flex-col text-center justify-center items-center">
			<div className="relative w-full h-96 overflow-hidden">
					<img
						src="./assembly-banner.jpg"
						className="object-cover w-full h-full flex text-center"
						alt="Uploaded"
					/>
			</div>
		</div>
	);
}