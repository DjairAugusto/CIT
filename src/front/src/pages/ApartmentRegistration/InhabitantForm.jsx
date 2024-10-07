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
		<div className="flex flex-col gap-6 justify-between items-center w-full h-fit">
			<div className="w-full">
				<h1 className="text-center text-4xl mb-4">
					Cadastro de Moradores
				</h1>
				<div className="w-full flex items-center justify-center">
					<div className="bg-zinc-400 h-[1px] w-full"></div>
					<h6 className="px-4 whitespace-nowrap m-auto">
						Apartamento XXX
					</h6>
					<div className="bg-zinc-400 h-[1px] w-full"></div>
				</div>
			</div>

			<div className="w-full h-fit">
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
			</div>
		</div>
	);
}
