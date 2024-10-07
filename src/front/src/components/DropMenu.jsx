import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function DropMenu({ text, children }) {
	if (!text) text = "Selecione uma opção";
	const [isChecked, setIsChecked] = useState(false);
	const handleCheckboxChange = (event) => {
		setIsChecked(event.target.checked);
	};
	return (
		<div className="w-full bg-white rounded-xl ">
			<label className="p-4 w-full flex justify-between items-center cursor-pointer">
				<input
					className="peer hidden"
					type="checkbox"
					checked={isChecked}
					onChange={handleCheckboxChange}
				/>
				{text}
				<ChevronDown />
			</label>
			<div className={isChecked ? "p-4" : ""}>
				{isChecked ? children : ""}
			</div>
		</div>
	);
}
