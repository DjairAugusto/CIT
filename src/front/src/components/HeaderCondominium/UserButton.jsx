import {CircleUser} from 'lucide-react';
import React from 'react';
import {Link} from 'react-router-dom';

export default function UserButton({size}) {
	return (
		<Link className='inline-block'><CircleUser size={size} /></Link>
	);
}
