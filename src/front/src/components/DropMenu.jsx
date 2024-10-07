import React, { useState } from "react";
import { ChevronDown, ChevronUp, CircleMinus } from "lucide-react";

export default function DropMenu({ text, children, removeCallback }) {
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
				<div className="flex gap-4">
					{removeCallback && (<CircleMinus onClick={removeCallback} />)}
					{isChecked ? <ChevronUp /> : <ChevronDown />}
				</div>
			</label>
			<div className={isChecked ? "p-4" : "hidden"}>
				{isChecked ? children : ""}
			</div>
		</div>
	);
}
