import { EyeOff } from "lucide-react";
import React, { forwardRef, useState } from "react";

const Input = forwardRef(
	(
		{ LeftIcon, RightIcon, type, required, placeholder, id, ...rest },
		ref
	) => {
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

		return (
			<label className="flex items-center gap-4 px-4 py-2 border-sm border-medium bg-zinc-50 border-b-2 border-transparent has-[:focus]:border-primary-1000 transition-colors duration-300">
				{LeftIcon ? LeftIcon : ""}
				<div className="relative w-full">
					<input
						className="bg-transparent h-12 w-full outline-none text-dark placeholder:text-dark text-zinc-700 placeholder:text-zinc-700 peer transition-colors pl-4"
						type={useType}
						{...rest}
						ref={ref}
					/>
					<label className="text-zinc-600 absolute cursor-text left-0 top-1/4 peer-focus:top-0 peer-focus:text-xs [&:not(peer-empty:bg-black)] transition-colors duration-300">
						{required ? (
							<span className="text-red-500">*</span>
						) : (
							""
						)}
						{placeholder}
					</label>
				</div>
				{RightIcon ? RightIcon : ""}
			</label>
		);
	}
);
Input.displayName = "Input";

export default Input;
