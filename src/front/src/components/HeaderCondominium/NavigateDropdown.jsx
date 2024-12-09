import {Grip, HandCoins, MessagesSquare, Phone, PiggyBank, Scale, TriangleAlert, Truck, Users, Wine} from 'lucide-react';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export default function NavigateDropdown({size}) {
	const [isChecked, setIsChecked] = useState(false);
	const handleDropMenuClick = (event) => {
		setIsChecked(!isChecked);
	};

	const menusItems = [
		{to: "/condominium", icon: <PiggyBank />, name: "Financeiro"},
		{to: "/condominium", icon: <Phone />, name: "Contatos"},
		{to: "/condominium", icon: <Scale />, name: "Assembleias"},
		{to: "/condominium", icon: <HandCoins />, name: "Prestação de Contas"},
		{to: "/condominium", icon: <Users />, name: "Visitantes"},
		{to: "/condominium", icon: <PiggyBank />, name: "Achados e Perdidos"},
		{to: "/condominium", icon: <Truck />, name: "Entregas e Encomendas"},
		{to: "/condominium", icon: <Wine />, name: "Área Comum"},
		{to: "/condominium", icon: <MessagesSquare />, name: "Ouvidoria"},
		{to: "/condominium", icon: <TriangleAlert />, name: "Regras e Normas"},
	];

	return (
		<div className='relative inline-block'>
			<Grip size={size} onClick={handleDropMenuClick} />
			<nav className={"absolute bg-white border-2 border-zinc-600 rounded-sm top-10 right-0 grid grid-cols-3 gap-2 w-96 justify-items-center " +
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