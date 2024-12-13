import {Grip} from 'lucide-react';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export default function NavigateDropdown({ sizeIcon, menusItems }) {
	const [isChecked, setIsChecked] = useState(false);
	const handleDropMenuClick = (event) => {
		setIsChecked(!isChecked);
	};

	return (
		<div onClick={handleDropMenuClick} className='relative inline-block'>
			<Grip size={sizeIcon} />
			<nav className={"absolute bg-white border-2 border-zinc-600 rounded-sm top-10 right-0 grid grid-cols-3 gap-2 w-96 justify-items-center z-50 " +
				(isChecked ? "p-4" : "hidden")}>
				{menusItems.map((item, index) => (
					<Link key={index} to={item.to} className='w-full aspect-square flex flex-col items-center gap-2 text-center'>
						{React.cloneElement(item.icon, {className: "w-16 h-16", strokeWidth: 0.5})}
						{item.name}
					</Link>
				))}
			</nav>
		</div>
	);
}