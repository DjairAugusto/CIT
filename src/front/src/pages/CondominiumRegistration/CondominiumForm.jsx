import React from "react";
import DropMenu from "../../components/DropMenu";
import { Forms } from "../../components/Forms";

export default function CondominiumForm({ data, updateFieldHandler }) {
	return (
		<Forms.PageStep
			title="Formulário de Cadastro"
			subtitle="Nome do Condomínio"
		>
			<div className="w-full flex flex-col gap-6">
				<DropMenu text="Nome do Condomínio">
					<div className="flex gap-4 flex-col">
						<Forms.InputText
							placeholder="NOME DO CONDOMÍNIO"
							value={data.name || ""}
							onChange={(e) => updateFieldHandler("condominium", "name", e.target.value)}
							required
						/>
						<Forms.InputMask
							placeholder="CNPJ"
							mask="99.999.999/9999-99"
							value={data.cnpj || ""}
							onChange={(e) => updateFieldHandler("condominium", "cnpj", e.target.value)}
							required
						/>
					</div>
				</DropMenu>
				<DropMenu text="Definição de Tamanho">
					<div className="flex gap-4 flex-col">
						<Forms.InputText
							placeholder="QUANTIDADE DE BLOCOS"
							type="number"
							value={data.blocks || ""}
							onChange={(e) => updateFieldHandler("condominium", "blocks", e.target.value)}
							required
						/>
						<Forms.InputText
							placeholder="QUANTIDADE EDIFÍCIOS POR BLOCOS"
							type="number"
							value={data.units || ""}
							onChange={(e) => updateFieldHandler("condominium", "units", e.target.value)}
							required
						/>
						<Forms.InputText
							placeholder="QUANTIDADE DE ANDARES POR EDIFÍCIO"
							type="number"
							value={data.floors || ""}
							onChange={(e) => updateFieldHandler("condominium", "floors", e.target.value)}
							required
						/>
						<Forms.InputText
							placeholder="QUANTIDADE APARTAMENTOS POR ANDARES"
							type="number"
							value={data.apartments || ""}
							onChange={(e) => updateFieldHandler("condominium", "apartments", e.target.value)}
							required
						/>
					</div>
				</DropMenu>
			</div>
		</Forms.PageStep>
	);
}
