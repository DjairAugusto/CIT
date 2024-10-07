import React from "react";
import DropMenu from "../../components/DropMenu";
import { Forms } from "../../components/Forms";

export default function CondominiumForm() {
	return (
		<div className="flex flex-col gap-6 justify-between items-center w-full">
			<div className="w-full">
				<h1 className="text-center text-4xl mb-4">
					Formulário de Cadastro
				</h1>
				<div className="w-full flex items-center justify-center">
					<div className="bg-zinc-400 h-[1px] w-full"></div>
					<h6 className="px-4 whitespace-nowrap m-auto">
						Nome do Condomínio
					</h6>
					<div className="bg-zinc-400 h-[1px] w-full"></div>
				</div>
			</div>

			<div className="w-full flex flex-col gap-6">
				<DropMenu text="Nome do Condomínio">
					<div className="flex gap-4 flex-col">
						<Forms.InputText
							placeholder="NOME DO CONDOMÍNIO"
							required
						/>
						<Forms.InputText
							placeholder="CNPJ"
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
		</div>
	);
}
