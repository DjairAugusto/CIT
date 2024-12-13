import Roles from '../utils/roles';
import {authContext} from './authContext';
import {useState} from 'react';

export default function AuthProvider({children}) {
	const [role, setRole] = useState(Roles.get());
	const [user, setUser] = useState({});

	return (
		<authContext.Provider value={{role, setRole, user, setUser}}>
			{children}
		</authContext.Provider>
	);
}
