import React, {useContext, useEffect} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import {authContext} from '../providers/authContext';
import AuthProvider from '../providers/AuthProvider';
import validateLogin from '../utils/validateLogin';
import HeaderCondominium from '../components/HeaderCondominium';
import Roles from '../utils/roles';

export default function RootCondominium() {
	const {setRole} = useContext(authContext);
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

	setRole(Roles.get())
	// Set user

	return (
		<AuthProvider>
			<HeaderCondominium />
			<Outlet />
		</AuthProvider>
	);
}