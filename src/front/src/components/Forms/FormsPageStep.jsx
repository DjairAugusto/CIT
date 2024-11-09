import React from 'react';

export default function FormsPageStep({children, title, subtitle, center=false}) {
	return (
		<div className={`flex flex-col gap-6 justify-start items-center w-full h-full px-4 overflow-auto ${center ? 'justify-center' : ''}`}>
			{
				(title) && (
					<div className="w-full">
						<h1 className="text-center text-4xl mb-4">
							{title}
						</h1>
						{(subtitle) && (
							<div className="w-full flex items-center justify-center">
								<div className="bg-zinc-400 h-[1px] w-full"></div>
								<h6 className="px-4 whitespace-nowrap m-auto">
									{subtitle}
								</h6>
								<div className="bg-zinc-400 h-[1px] w-full"></div>
							</div>
						)}
					</div>
				)
			}
			<div className={`w-full h-fit`}>
				{children}
			</div>
		</div>
	)
}