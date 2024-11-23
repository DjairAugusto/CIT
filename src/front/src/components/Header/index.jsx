import React from "react";
import Link from "./Link";
import Ancor from "./Ancor";

export default function Header() {
	return (
		<header className="bg-primary-1 flex justify-between items-center px-10 py-5">
			<img
				className="h-24"
				src="/logo.png"
				alt="Logo da CIT"
			/>
			<nav className="flex gap-4">
				<Link to="/">Home</Link>
				<Link to="/signin">Login</Link>
				<Link to="/register/condominium">Cadastre-se</Link>
				<Ancor href="/#about">Sobre Nós</Ancor>
				<Link to="/howwework">Como Funciona</Link>
			
			</nav>
		</header>
	);
}
