import { Eye, EyeOff } from "lucide-react";
import React, { forwardRef, useState } from "react";

const Input = forwardRef(
	({ LeftIcon, RightIcon, type, required, placeholder, ...rest }, ref) => {
		const [seePassword, setSeePassoword] = useState(false);

		function togglePassword() {
			setSeePassoword(!seePassword);
		}

		if (type === "password")
			RightIcon = (
				<div
					onClick={togglePassword}
					className="text-medium cursor-pointer text-zinc-700"
				>
					{seePassword ? <Eye /> : <EyeOff />}
				</div>
			);

		return (
			<label className="flex items-center gap-4 px-4 py-2 border-sm border-medium bg-zinc-50 border-b-2 border-transparent rounded-md has-[:focus]:border-primary-1000 has-[:focus]:rounded-none transition-all duration-300 w-full">
				{LeftIcon ? LeftIcon : ""}
				<div className="relative w-full">
					<input
						className="bg-transparent h-12 w-full outline-none text-dark placeholder:text-dark text-zinc-700 placeholder:text-zinc-700 peer transition-colors pl-4"
						type={
							type === "password" && seePassword ? "text" : type
						}
						{...rest}
						ref={ref}
					/>
					<label
						className="text-zinc-600 absolute cursor-text left-0 top-1/4 peer-hover:top-0 hover:top-0 
					peer-hover:text-xs  peer-focus:top-0 peer-focus:text-xs transition-all duration-300 truncate w-full overflow-hidden 
					$:not(peer-empty:top-0) $:not(peer-empty:text-xs)"
					>
						{required ? (
							<span className="text-red-500">* </span>
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
