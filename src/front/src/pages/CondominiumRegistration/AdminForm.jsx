import React from "react"
import DropMenu from "../../components/DropMenu";
import {Forms} from "../../components/Forms";

export default function AdminForm({ data, updateFieldHandler, subtitle}) {
	return (
		<Forms.PageStep
			title="Formulário de Cadastro"
			subtitle={subtitle}
		>
			<div className="w-full flex flex-col gap-6">
				<DropMenu text="Dados do sindico">
					<div className="flex gap-4 flex-col">
						<Forms.InputText
							placeholder="Nome"
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
				<DropMenu text="Login do sindico">
					<div className="flex gap-4 flex-col">
						<Forms.InputText
							placeholder="EMAIL"
							value={data.email || ""}
							onChange={(e) => updateFieldHandler("admin", "email", e.target.value)}
							required
						/>
						<Forms.InputText
							placeholder="SENHA"
							type="password"
							value={data.password || ""}
							onChange={(e) => updateFieldHandler("admin", "password", e.target.value)}
							required
						/>
						<Forms.InputText
							placeholder="CONFIRME A SENHA"
							type="password"
							value={data.confirm || ""}
							onChange={(e) => updateFieldHandler("admin", "confirm", e.target.value)}
							required
						/>
					</div>
				</DropMenu>
			</div>
		</Forms.PageStep>
	)
}
