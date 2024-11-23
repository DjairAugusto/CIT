import React from "react";
import { X } from "lucide-react";

export default function PopUP({ title, message, closeCallback }) {
	return (
		<div className="z-10 absolute top-0 left-0 w-dvw h-dvh flex items-center justify-center px-4 md:px-0">
			<div className="absolute top-0 left-0 bg-black opacity-20 w-full h-full"></div>
			<div className="relative flex flex-col bg-white w-full md:w-auto md:min-w-96 p-4 rounded-lg">
				<div className="flex">
					<span className="text-xl font-bold w-full">{title}</span>
					{closeCallback && (
						<button
							className="text-red-600 self-end"
							onClick={closeCallback}
						>
							<X />
						</button>
					)}
				</div>
				<div className="pt-4 pb-2">{message}</div>
			</div>
		</div>
	);
}
