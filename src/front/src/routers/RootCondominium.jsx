import React, {useEffect} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import AuthProvider from '../providers/AuthProvider';
import validateLogin from '../utils/validateLogin';
import HeaderCondominium from '../components/HeaderCondominium';

export default function RootCondominium() {
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
	// Set user

	return (
		<AuthProvider>
			<HeaderCondominium />
			<Outlet />
		</AuthProvider>
	);
}