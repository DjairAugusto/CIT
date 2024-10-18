import React from "react";
import DropMenu from "../../components/DropMenu";
import { Forms } from "../../components/Forms";

export default function CondominiumForm() {
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
							required
						/>
						<Forms.InputMask
							placeholder="CNPJ"
							mask="99.999.999/9999-99"
							required
						/>
					</div>
				</DropMenu>
				<DropMenu text="Definição de Tamanho">
					<div className="flex gap-4 flex-col">
						<Forms.InputText
							placeholder="QUANTIDADE DE BLOCOS/EDIFÍCIOS"
							required
						/>
						<Forms.InputText
							placeholder="QUANTIDADE DE ANDARES"
							required
						/>
					</div>
				</DropMenu>
			</div>
		</Forms.PageStep>
	);
}
