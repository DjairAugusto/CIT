import React from 'react'
import {PhoneCall, Contact} from "lucide-react";

export default function ConteinerOptions({title, options}) {
	const atibutsIcons = {
		color: "#4C4C4C",
		fill: "#4C4C4C" 
	}

	function getIcons(type) {
		switch(type.toLowerCase()) {
			case 'phone':
				return (
				<>
					<PhoneCall {...atibutsIcons} />
					<span>Telefone:</span>
				</>
				);
			case 'intercom':
				return (
				<>
					<PhoneCall {...atibutsIcons} />
					<span>Interfone:</span>
				</>
				);
			case 'email':
				return (
				<>
					<Contact {...atibutsIcons} />
					<span>Email:</span>
				</>
				)
			default:
				return (
				<>
					<Contact {...atibutsIcons} />
					<span>Contato:</span>
				</>
				);
		}
	}

	return (
		<div className='w-5/12 flex-none'>
			<div className="w-full flex items-center justify-center">
				<div className="bg-zinc-400 h-[1px] w-full"></div>
				<h3 className="px-4 whitespace-nowrap m-auto">
					{title}
				</h3>
				<div className="bg-zinc-400 h-[1px] w-full"></div>
			</div>
			<div className="py-10 mt-10 flex flex-col gap-4">
				{
					options.map(option => (
						<div key={option.text} className='flex text-zinc-700'>
							<div className="mr-1 inline-flex gap-1">
								{getIcons(option.type)} 
							</div>
							<h2>{option.value}</h2>
						</div>
					))
				}
			</div>
		</div>
	)
}
