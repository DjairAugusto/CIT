import React, { useState } from "react";
import DropMenu from "../../components/DropMenu";
import { Forms } from "../../components/Forms";

let nextId = 0;

export default function InhabitantForm() {
	const [inhabitants, setInhabitant] = useState([
		{
			id: nextId++,
			name: "",
			cpf: "",
			phone: "",
			email: "",
		}
	]);

	function addInhabitant() {
		setInhabitant([
			...inhabitants,
			{
				id: nextId++,
				name: "",
				cpf: "",
				phone: "",
				email: "",
			}
		]);
	}

	function removeInhabitant(target) {
		setInhabitant(inhabitants.filter(value => value.id !== target));
	}

	function modifyInhabitant(target, [key, value]) {
		const newInhabitants = [];
		Object.assign(newInhabitants, inhabitants);
		const inhabitant = newInhabitants.find(value => value.id === target);
		inhabitant[key] = value;

		setInhabitant(newInhabitants);
	}

	return (
		<Forms.PageStep
			title="Cadastro de Funcionário"
			subtitle="Funcionário XXX"
		>
			<div className="w-full h-fit">
				<button
					className="text-primary-1000 block mb-2"
					onClick={addInhabitant}
				>+ Adicionar Funcionário</button>
				<div className="flex flex-col gap-6 overflow-y-auto max-h-[600px]">
					{
						inhabitants.map(inhabitant => (
							<DropMenu
								key={inhabitant.id}
								text={inhabitant.name ? inhabitant.name : "Nome do Funcionário"}
								removeCallback={inhabitants.indexOf(inhabitant) === 0 ? null : () => removeInhabitant(inhabitant.id)}
							>
								<div className="flex gap-4 flex-col">
									<Forms.InputText
										placeholder="NOME DO FUNCIONÁRIO"
										onChange={e => modifyInhabitant(inhabitant.id, ["name", e.nativeEvent.srcElement.value])}
										required
									/>
									<Forms.InputText
										placeholder="CARGO"
										onChange={e => modifyInhabitant(inhabitant.id, ["cargo", e.nativeEvent.srcElement.value])}
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
			</div>
		</Forms.PageStep>
	);
}
