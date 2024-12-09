import React, {useContext, useEffect} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import {authContext} from '../providers/authContext';
import AuthProvider from '../providers/AuthProvider';
import validateLogin from '../utils/validateLogin';

export default function RootCondominium() {
	const {role, setRole, user, setUser} = useContext(authContext);
	const navigate = useNavigate();

	useEffect(() => {
		async function checkLoginStatus() {
			const isLoggedIn = await validateLogin();
			if(!isLoggedIn) {
				navigate("/auth/signin");
			}
		}
		checkLoginStatus();
	}, [navigate]);

	// Set role
	// Set user

	return (
		<AuthProvider>
			<Outlet />
		</AuthProvider>
	);
}