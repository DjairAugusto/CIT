import {CircleUser} from 'lucide-react';
import React from 'react';
import {Link} from 'react-router-dom';

export default function UserButton({sizeIcon}) {
	return (
		<Link className='inline-block'><CircleUser size={sizeIcon} /></Link>
	);
}
