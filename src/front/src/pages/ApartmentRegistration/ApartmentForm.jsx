import React from "react";
import DropMenu from "../../components/DropMenu";
import { Forms } from "../../components/Forms";

export default function CondominiumForm() {
	return (
		<div className="flex flex-col gap-6 justify-between items-center w-full">
			<div className="w-full">
				<h1 className="text-center text-4xl mb-4">
					Cadastro de Apartamento
				</h1>
				<div className="w-full flex items-center justify-center">
					<div className="bg-zinc-400 h-[1px] w-full"></div>
					<h6 className="px-4 whitespace-nowrap m-auto">
						Apartamento XXX
					</h6>
					<div className="bg-zinc-400 h-[1px] w-full"></div>
				</div>
			</div>

			<div className="w-full flex flex-col gap-6">
				<DropMenu text="Nome do morador 1">
					<div className="flex gap-4 flex-col">
						<Forms.InputText
							placeholder="Nome do Morador"
							required
						/>
						<Forms.InputText
							placeholder="CPF"
							required
						/>

						<Forms.InputText
							placeholder="Telefone"
						/>

						<Forms.InputText
							placeholder="E-mail"
						/>
					</div>
				</DropMenu>
				<DropMenu text="Nome do Morador 2">
				<div className="flex gap-4 flex-col">
						<Forms.InputText
							placeholder="Nome do Morador"
							required
						/>
						<Forms.InputText
							placeholder="CPF"
							required
						/>

						<Forms.InputText
							placeholder="Telefone"
						/>

						<Forms.InputText
							placeholder="E-mail"
						/>
					</div>
				</DropMenu>
			</div>
		</div>
	);
}
