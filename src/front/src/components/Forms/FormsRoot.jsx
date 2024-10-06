import React from "react";

export default function FormsRoot({ children, formMethod, ...rest }) {
	return (
		<form
			className="flex flex-col gap-6"
			{...rest}
		>
			{children}
		</form>
	);
}
