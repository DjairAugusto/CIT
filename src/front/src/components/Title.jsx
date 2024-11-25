import React from 'react'

export default function Title({ title, subtitle, subsubtitle }) {
	return (
			(title) && (
			<div className="w-full">
				<h1 className="text-center text-4xl mb-4">
					{title}
				</h1>
				{(subtitle) && (
					<div className="w-full flex items-center justify-center">
						<div className="bg-zinc-400 h-[1px] w-full"></div>
						<div>
							<h4 className="px-4 whitespace-nowrap m-auto text-center">{subtitle}</h4>
							{(subtitle) && (
								<h6 className="px-4 whitespace-nowrap m-auto text-zinc-400 text-center">{subsubtitle}</h6>
							)}
						</div>
						<div className="bg-zinc-400 h-[1px] w-full"></div>
					</div>
				)}
			</div>
		)
	)
}
