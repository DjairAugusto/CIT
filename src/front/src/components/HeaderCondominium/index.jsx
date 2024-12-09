import React from 'react';
import NavigateDropdown from './NavigateDropdown';
import UserButton from './UserButton';

export default function index() {
	return (
		<header className='className="bg-white border-b-[0px] shadow-zinc-300 shadow-md border-zinc-300 flex justify-between items-center px-10 py-3 sticky z-10 top-0 w-full"'>
			<img
				className="h-20 py-2"
				src="/logo.png"
				alt="Logo da CIT"
			/>
			<div className='flex gap-5'>
				<NavigateDropdown size={32} />
				<UserButton size={32} />
			</div>
		</header>
	);
}
