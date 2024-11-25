import React, { forwardRef, useState } from "react";

const TextArea = forwardRef(
	(
		{
			LeftIcon,
			RightIcon,
			type,
			required,
			placeholder,
			onChange,
			onBlur,
			onFocus,
			error,
			value = "",
			...rest
		},
		ref
	) => {
		const [isFocus, setFocus] = useState(false);
		const [isFistFocus, setFistFocus] = useState(false);

		const handleChange = (e) => {
			if (onChange) onChange(e);
		};

		const handleFocus = (e) => {
			setFocus(true);
			setFistFocus(true);
			if (onFocus) onFocus(e);
		};

		const handleBlur = (e) => {
			setFocus(false);
			if (onBlur) onBlur(e);
		};

		return (
			<label className="flex items-center gap-4 px-4 py-2 border-sm border-medium bg-zinc-50 border-b-2 border-transparent rounded-md has-[:focus]:border-primary-1000 has-[:focus]:rounded-none transition-all duration-300 w-full">
				{LeftIcon ? LeftIcon : ""}
				<div className="relative w-full group">
					<label
						className={`
							text-zinc-600
							transition-all duration-300 truncate w-full overflow-hidden
						`}
					>
						{required && <span className="text-red-500">* </span>}
						{placeholder}
						<label
							className={`
								${isFocus && isFistFocus ? "hidden" : ""}
								text-red-500 ml-4	
							`}
						>
							{error && isFistFocus && `*${error}`}
						</label>
					</label>
					<span
						className="cursor-text block bg-transparent max-w-xl max-h-96 overflow-y-auto h-max resize-none w-full outline-none text-dark placeholder:text-dark text-zinc-700 placeholder:text-zinc-700 peer transition-colors pl-4"
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
						value={value}
						{...rest}
						ref={ref}
						type={type ? type : "text"}
						contentEditable
					/>
				</div>
				{RightIcon ? RightIcon : ""}
			</label>
		);
	}
);
TextArea.displayName = "TextArea";

export default TextArea;
