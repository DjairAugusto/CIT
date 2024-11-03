import React from 'react'
import {PhoneCall} from "lucide-react";

export default function ConteinerOptions({title, options}) {
	return (
		<div className='w-5/12 flex-none'>
			<div className="w-full flex items-center justify-center">
				<div className="bg-zinc-400 h-[1px] w-full"></div>
				<h3 className="px-4 whitespace-nowrap m-auto">
					{title}
				</h3>
				<div className="bg-zinc-400 h-[1px] w-full"></div>
			</div>
			<div className="py-10 mt-10">
				{
					options.map(option => (
						<div key={option.text} className='flex'>
							{(option.type === 'phone') && <PhoneCall className="mr-4" color="#4C4C4C" fill="#4C4C4C"/>} 
							<h2 className='text-zinc-700'>{option.value}</h2>
						</div>
					))
				}
			</div>
		</div>
	)
}
