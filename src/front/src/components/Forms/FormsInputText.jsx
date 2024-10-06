import { EyeOff } from "lucide-react";
import React, { forwardRef, useState } from "react";

const Input = forwardRef(
	({ LeftIcon, RightIcon, type, required, placeholder, ...rest }, ref) => {
		const [useType, setUseType] = useState(type);

		function seePassword() {
			if (useType === "password") setUseType("text");
			else setUseType("password");
		}

		if (type === "password")
			RightIcon = (
				<EyeOff
					onClick={seePassword}
					className="text-medium cursor-pointer text-zinc-700"
				/>
			);

		if (required) placeholder += " *";

		return (
			<div
				className="flex items-center gap-4 px-4 border-sm  border-medium bg-gray-100 
    dark:border-light dark:bg-dark "
			>
				{LeftIcon ? LeftIcon : ""}
				<input
					className="bg-transparent h-12 w-full outline-none text-dark placeholder:text-dark text-zinc-700 placeholder:text-zinc-700"
					placeholder={placeholder}
					type={useType}
					{...rest}
					ref={ref}
				/>
				{RightIcon ? RightIcon : ""}
			</div>
		);
	}
);
Input.displayName = "Input";

export default Input;
