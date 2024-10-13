import React from "react";
import DropMenu from "../../components/DropMenu";
import { Forms } from "../../components/Forms";

export default function FunctionaryForm() {
	return (
		<Forms.PageStep
			title="Formulário de Cadastro"
			subtitle="Funcionários"
		>
			<div className="w-full flex flex-col gap-6">
				<DropMenu text="Funcionário">
					<div className="flex gap-4 flex-col">
						<Forms.InputText
							placeholder="Nome"
							required
						/>
						<Forms.InputText
							placeholder="Cargo"
							required
						/>
						<Forms.InputText
							placeholder="Telefone"
						/>
						<Forms.InputText
							placeholder="Telefone"
						/>
					</div>
				</DropMenu>
			</div>
		</Forms.PageStep>
	);
};