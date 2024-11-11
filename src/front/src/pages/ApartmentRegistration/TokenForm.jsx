import React from "react";
import { Forms } from "../../components/Forms";

export default function TokenForm({ data, updateFieldHandler }) {
	return (
		<Forms.PageStep
			title="Cadastro de Apartamento"
			subtitle="Insira o Token"
		>
			<Forms.InputText
				placeholder="TOKEN"
				onChange={(e) => updateFieldHandler("token", e.target.value)}
				value={data}
				required
			/>
		</Forms.PageStep>
	);
}
