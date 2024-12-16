import Roles from '../utils/roles';
import {authContext} from './authContext';
import {useEffect, useState} from 'react';
import fetch from '../utils/requisition/citRequisition';

export default function AuthProvider({children}) {
	const [role, setRole] = useState(Roles.get());
	const [user, setUser] = useState({});

	useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('/user');
                const data = await response.data;
                setUser(data);
            } catch (error) {
                console.error('Erro ao buscar dados do usuário:', error);
            }
        };

        fetchUserData();
    }, []);

	return (
		<authContext.Provider value={{role, setRole, user, setUser}}>
			{children}
		</authContext.Provider>
	);
}
