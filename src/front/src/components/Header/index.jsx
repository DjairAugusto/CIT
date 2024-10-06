import React from "react";
import Link from "./Link";

export default function Header() {
	return (
		<header className="bg-secondary flex justify-between items-center px-10 py-5">
			<img
				className="h-24"
				src="/logo.png"
				alt="Logo da CIT"
			/>
			<nav className="flex gap-4">
				<Link to="/">Home</Link>
				<Link to="/about">Sobre Nos</Link>
				<Link to="/projects">Projetos</Link>
				<Link to="/services">Sevições</Link>
				<Link to="/contacts">Contatos</Link>
			</nav>
		</header>
	);
}
