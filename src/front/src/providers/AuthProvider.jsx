import {authContext} from './authContext';
import {useState} from 'react';

export default function AuthProvider({children}) {
	const [role, setRole] = useState(null);
	const [user, setUser] = useState(null);

	return (
		<authContext.Provider value={{role, setRole, user, setUser}}>
			{children}
		</authContext.Provider>
	);
}
