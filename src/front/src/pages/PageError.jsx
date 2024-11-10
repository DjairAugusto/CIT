import React from 'react';
import { useNavigate } from 'react-router-dom';

// TODO modularizar a página de error para exibir qualquer código
const ErrorPage = ({errorMessage = 'Oops Page Not Found.' }) => {
	const navigate = useNavigate();

	const handleGoHome = () => {
		navigate('/'); // redireciona para a página inicial
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
			<h1 className="text-6xl font-bold">
				<span className="text-black">4</span>
				<span className="text-[#42D0B3]">0</span>
				<span className="text-black">4</span>
			</h1>
			<p className="mt-4 text-lg">{errorMessage}</p>
			<div className="mt-6">
				<button
					onClick={handleGoHome}
					className="px-6 py-2 bg-[#42D0B3] text-white rounded-md transition"
				>
					Home
				</button>
			</div>
		</div>
	);
};

export default ErrorPage;