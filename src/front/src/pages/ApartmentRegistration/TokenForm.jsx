import React, { useState } from "react";
import { Forms } from "../../components/Forms";

export default function TokenForm() {
	const [token, setToken] = useState("");

	function onChange(e) {
		setToken(e.target.value);
	}

	return (
		<Forms.PageStep
			title="Cadastro de Apartamento"
			subtitle="Insira o Token"
		>
			<Forms.InputText
				placeholder="TOKEN"
				onChange={(e) => onChange(e)}
				value={token}
				required
			/>
		</Forms.PageStep>
	);
}
