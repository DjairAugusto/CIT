import React from "react";
import DropMenu from "../../components/DropMenu";
import { Forms } from "../../components/Forms";

export default function CondominiumForm({data, updateFieldHandler, subtitle, fieldsErrors}) {
	//TODO implementar auto completar endereço
	return (
		<Forms.PageStep
			title="Formulário de Cadastro"
			subtitle={subtitle}
		>
			<div className="w-full flex flex-col gap-6">
				<DropMenu text="Nome do Condomínio">
					<div className="flex gap-4 flex-col">
						<Forms.InputText
							placeholder="NOME DO CONDOMÍNIO"
							value={data.name || ""}
							onChange={(e) => updateFieldHandler("condominium", "name", e.target.value)}
							error={fieldsErrors.name}
							required
						/>
						<Forms.InputMask
							placeholder="CNPJ"
							mask="99.999.999/9999-99"
							value={data.cnpj || ""}
							onChange={(e) => updateFieldHandler("condominium", "cnpj", e.target.value)}
							error={fieldsErrors.cnpj}
							required
						/>
					</div>
				</DropMenu>
				<DropMenu text="Endereço do Condomínio">
					<div className="flex gap-4 flex-col">
						<Forms.InputMask
							placeholder="CEP"
							mask="99999-999"
							value={data.address?.zipCode || ""}
							onChange={(e) => updateFieldHandler("condominium", "address.zipCode", e.target.value)}
							error={fieldsErrors.address?.zipCode}
							required
						/>
						<Forms.InputText
							placeholder="LOGRADOURO"
							value={data.address?.street || ""}
							onChange={(e) => updateFieldHandler("condominium", "address.street", e.target.value)}
							error={fieldsErrors.address?.street}
							required
						/>
						<Forms.InputText
							placeholder="NÚMERO"
							type="number"
							value={data.address?.number || ""}
							onChange={(e) => updateFieldHandler("condominium", "address.number", e.target.value)}
							error={fieldsErrors.address?.number}
							required
						/>
						<Forms.InputText
							placeholder="BAIRRO"
							value={data.address?.neighborhood || ""}
							onChange={(e) => updateFieldHandler("condominium", "address.neighborhood", e.target.value)}
							error={fieldsErrors.address?.neighborhood}
							required
						/>
						<Forms.InputText
							placeholder="CIDADE"
							value={data.address?.city || ""}
							onChange={(e) => updateFieldHandler("condominium", "address.city", e.target.value)}
							error={fieldsErrors.address?.city}
							required
						/>
						<Forms.InputMask
							placeholder="ESTADO"
							mask="aa"
							value={data.address?.state || ""}
							onChange={(e) => updateFieldHandler("condominium", "address.state", e.target.value)}
							error={fieldsErrors.address?.state}
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
							error={fieldsErrors.blocks}
							required
						/>
						<Forms.InputText
							placeholder="QUANTIDADE EDIFÍCIOS POR BLOCOS"
							type="number"
							value={data.units || ""}
							onChange={(e) => updateFieldHandler("condominium", "units", e.target.value)}
							error={fieldsErrors.units}
							required
						/>
						<Forms.InputText
							placeholder="QUANTIDADE DE ANDARES POR EDIFÍCIO"
							type="number"
							value={data.floors || ""}
							onChange={(e) => updateFieldHandler("condominium", "floors", e.target.value)}
							error={fieldsErrors.floors}
							required
						/>
						<Forms.InputText
							placeholder="QUANTIDADE APARTAMENTOS POR ANDARES"
							type="number"
							value={data.apartments || ""}
							onChange={(e) => updateFieldHandler("condominium", "apartments", e.target.value)}
							error={fieldsErrors.apartments}
							required
						/>
					</div>
				</DropMenu>
			</div>
		</Forms.PageStep>
	);
}
