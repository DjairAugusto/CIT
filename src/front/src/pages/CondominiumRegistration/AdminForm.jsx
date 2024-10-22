import React from 'react'
import DropMenu from '../../components/DropMenu';
import {Forms} from "../../components/Forms";

export default function AdminForm({ data, updateFieldHandler }) {
	return (
		<Forms.PageStep
		title="Formulário de Cadastro"
		subtitle="Nome do Condomínio"
		>	  
			<div className="w-full flex flex-col gap-6">
				<DropMenu text="Dados do administrator">
					<div className="flex gap-4 flex-col">
						<Forms.InputText
							placeholder="NOME"
							value={data.name || ""}
							onChange={(e) => updateFieldHandler("admin", "name", e.target.value)}
							required
						/>
						<Forms.InputMask
							placeholder="CPF"
							mask="999.999.999-99"
							value={data.cpf || ""}
							onChange={(e) => updateFieldHandler("admin", "cpf", e.target.value)}
							required
						/>
					</div>
				</DropMenu>
			</div>
		</Forms.PageStep>
	);
}
