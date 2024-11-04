import { Eye, EyeOff } from "lucide-react";
import React, {forwardRef, useState} from "react";
import InputMask from 'react-input-mask';

const Input = forwardRef(
	({ LeftIcon, RightIcon, type, required, placeholder, mask, onChange, ...rest }, ref) => {
		const [seePassword, setSeePassoword] = useState(false);
		const [isActive, setActive] = useState(false);

		function togglePassword() {
			setSeePassoword(!seePassword);
		}

		const handleChange = (e) => {
            setActive(e.target.value.length > 0);
            if (onChange) {
                onChange(e);
            }
        };

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
				<div className="relative w-full group">
					<InputMask
						mask={mask}
						onChange={handleChange}
						{...rest}
						ref={ref}
						type={type === "password" && seePassword ? "text" : type}
					>
						{(inputProps) => (
                            <input
                                className="bg-transparent h-12 w-full outline-none text-dark placeholder:text-dark text-zinc-700 placeholder:text-zinc-700 peer transition-colors pl-4"
                                type={
                                    type === "password" && seePassword ? "text" : type
                                }
                                {...inputProps}
                                {...rest}
                                ref={ref}

                            />
                        )}
					</InputMask>
					<label
						className={`
							text-zinc-600 absolute cursor-text left-0
							${(isActive || rest.value.length > 0) ? "text-xs top-0" : "top-1/4"}
							group-hover:top-0 group-hover:text-xs
							peer-focus:top-0 peer-focus:text-xs
							transition-all duration-300 truncate w-full overflow-hidden
						`}
					>
						{required && (<span className="text-red-500">* </span>)}
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
