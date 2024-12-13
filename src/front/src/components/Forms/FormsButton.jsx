import React from "react";
import { twMerge } from 'tailwind-merge'

export default function FormsButon({ children, className, ...rest }) {
	return (
		<button
			className={twMerge(
				"bg-primary-1000 text-white h-10 mt-10 disabled:opacity-75 transition-opacity duration-300",className)}
			type="submit"
			{...rest}
		>
			{children}
		</button>
	);
}
