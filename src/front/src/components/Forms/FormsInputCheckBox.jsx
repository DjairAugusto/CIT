import React, { forwardRef, useState } from "react";

const Input = forwardRef(
	({ LeftIcon, RightIcon, required, placeholder, ...rest }, ref) => {
		const [ischecked, setChecked] = useState(false);
		return (
			<div className="">
				<input
					className="hidden h-1 w-1 peer"
					type="checkbox"
					checked={ischecked}
					{...rest}
					ref={ref}
				/>
				<label
					className="
					px-4 py-4 h-fit bg-zinc-50 flex items-center gap-4 truncate w-full overflow-hidden
				before:content-[''] before:w-4 before:h-4 before:border-2 before:border-zinc-500 before:inline-block
				peer-checked:before:bg-primary-1000"
					onClick={() => setChecked(!ischecked)}
				>
					{required ? <span className="text-red-500">* </span> : ""}
					{placeholder}
				</label>
			</div>
		);
	}
);
Input.displayName = "Input";

export default Input;
