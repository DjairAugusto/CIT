import React from "react";
import DropMenu from "../../components/DropMenu";
import { Forms } from "../../components/Forms";
import useObjectArray from "../../hooks/useObjectArray";

export default function InhabitantForm() {
	const {
		array: inhabitants,
		addOne: addInhabitant,
		removeOne: removeInhabitant,
		modifyOne: modifyInhabitant,
	} = useObjectArray({
		entries: [
			"name",
			"cpf",
			"phone",
			"email",
		],
		oneNeeded: true
	});

	return (
		<Forms.PageStep
			title="Cadastro de Moradores"
			subtitle="Apartamento XXX"
		>
			<button
				className="text-primary-1000 block mb-2"
				onClick={addInhabitant}
			>+ Adicionar Morador</button>
			<div className="flex flex-col gap-6 overflow-y-auto max-h-[600px]">
				{
					inhabitants.map(inhabitant => (
						<DropMenu
							key={inhabitant.id}
							text={inhabitant.name ? inhabitant.name : "Nome do Morador"}
							removeCallback={inhabitants.indexOf(inhabitant) === 0 ? null : () => removeInhabitant(inhabitant.id)}
						>
							<div className="flex gap-4 flex-col">
								<Forms.InputText
									placeholder="NOME DO MORADOR"
									onChange={e => modifyInhabitant(inhabitant.id, ["name", e.nativeEvent.srcElement.value])}
									required
								/>
								<Forms.InputText
									placeholder="CPF"
									onChange={e => modifyInhabitant(inhabitant.id, ["cpf", e.nativeEvent.srcElement.value])}
									required
								/>

								<Forms.InputText
									placeholder="TELEFONE"
									onChange={e => modifyInhabitant(inhabitant.id, ["phone", e.nativeEvent.srcElement.value])}
								/>

								<Forms.InputText
									placeholder="E-MAIL"
									onChange={e => modifyInhabitant(inhabitant.id, ["email", e.nativeEvent.srcElement.value])}
								/>
							</div>
						</DropMenu>
					))
				}
			</div>
		</Forms.PageStep>
	);
}
