import React from 'react';
import NavigateDropdown from './NavigateDropdown';
import UserButton from './UserButton';
import getMenuItems from '../../utils/getMenuItems';
import useAuthContext from '../../hooks/useAuthContext';
import {Link} from 'react-router-dom';


export default function Index() {
	const { role } = useAuthContext()
	return (
		<header className='bg-white border-b-[0px] shadow-zinc-300 shadow-md border-zinc-300 flex justify-between items-center px-10 py-3 sticky z-50 top-0 w-full"'>
			<Link to='/condominium'>
				<img
					className="h-20 py-2"
					src="/logo.png"
					alt="Logo da CIT"
				/>
			</Link>
			<div className='flex gap-5'>
				<NavigateDropdown sizeIcon={32} menusItems={getMenuItems(role)}/>
				<UserButton sizeIcon={32} />
			</div>
		</header>
	);
}
