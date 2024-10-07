import React from "react";

export default function FormsButon({ children, className, ...rest }) {
	return (
		<button
			className={"bg-primary-1000 text-white h-10 mt-10 " + className}
			type="submit"
			{...rest}
		>
			{children}
		</button>
	);
}
