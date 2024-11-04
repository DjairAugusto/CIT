import React from "react"
import DropMenu from "../../components/DropMenu";
import {Forms} from "../../components/Forms";

export default function AdminForm({ data, updateFieldHandler, subtitle, fieldsErrors}) {
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
							error={fieldsErrors.name}
							required
						/>
						<Forms.InputMask
							placeholder="CPF"
							mask="999.999.999-99"
							value={data.cpf || ""}
							onChange={(e) => updateFieldHandler("admin", "cpf", e.target.value)}
							error={fieldsErrors.cpf}
							required
						/>
					</div>
				</DropMenu>
				<DropMenu text="Login do sindico">
					<div className="flex gap-4 flex-col">
						<Forms.InputText
							placeholder="EMAIL"
							value={data.profile?.email || ""}
							onChange={(e) => updateFieldHandler("admin", "profile.email", e.target.value)}
							error={fieldsErrors.profile?.email}
							required
						/>
						<Forms.InputText
							placeholder="SENHA"
							type="password"
							value={data.profile?.password || ""}
							onChange={(e) => updateFieldHandler("admin", "profile.password", e.target.value)}
							error={fieldsErrors.profile?.password}
							required
						/>
						<Forms.InputText
							placeholder="CONFIRME A SENHA"
							type="password"
							value={data.profile?.confirm || ""}
							onChange={(e) => updateFieldHandler("admin", "profile.confirm", e.target.value)}
							error={fieldsErrors.profile?.confirm}
							required
						/>
					</div>
				</DropMenu>
			</div>
		</Forms.PageStep>
	)
}
