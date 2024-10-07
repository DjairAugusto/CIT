import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function PageError() {
	const error = useRouteError();
	console.error(error);
	return (
		<>
			<h1>Oops!</h1>
			<p>desculpe, ocorreu um erro inesperado</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
			<Link to="/">Voltar para a página inicial</Link>
		</>
	);
}
