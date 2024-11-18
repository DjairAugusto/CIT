import React from "react";
import DropMenu from "../../components/DropMenu";
import { Forms } from "../../components/Forms";

export default function InhabitantForm({ apartmentNumber, objectArray }) {
	const {
		array: inhabitants,
		addOne: addInhabitant,
		removeOne: removeInhabitant,
		modifyOne: modifyInhabitant,
	} = objectArray;

	return (
		<Forms.PageStep
			title="Cadastro de Moradores"
			subtitle={`Apartamento ${apartmentNumber}`}
		>
			<button
				className="text-primary-1000 block mb-2"
				onClick={addInhabitant}
			>
				+ Adicionar Morador
			</button>
			<div className="flex flex-col gap-6 overflow-y-auto max-h-[600px]">
				{inhabitants.map((inhabitant) => (
					<DropMenu
						key={inhabitant.id}
						text={
							inhabitant.name
								? inhabitant.name
								: "Nome do Morador"
						}
						removeCallback={
							inhabitants.indexOf(inhabitant) === 0
								? null
								: () => removeInhabitant(inhabitant.id)
						}
					>
						<div className="flex gap-4 flex-col">
							<Forms.InputText
								placeholder="NOME DO MORADOR"
								onChange={(e) =>
									modifyInhabitant(inhabitant.id, [
										"name",
										e.target.value,
									])
								}
								value={inhabitant.name}
								required
							/>
							<Forms.InputMask
								mask="999.999.999-99"
								placeholder="CPF"
								onChange={(e) =>
									modifyInhabitant(inhabitant.id, [
										"cpf",
										e.target.value,
									])
								}
								value={inhabitant.cpf}
								required
							/>
							<Forms.InputText
								placeholder="TELEFONE"
								onChange={(e) =>
									modifyInhabitant(inhabitant.id, [
										"phone",
										e.target.value,
									])
								}
								value={inhabitant.phone}
							/>
							<Forms.InputText
								placeholder="E-MAIL"
								onChange={(e) =>
									modifyInhabitant(inhabitant.id, [
										"email",
										e.target.value,
									])
								}
								value={inhabitant.email}
							/>
						</div>
					</DropMenu>
				))}
			</div>
		</Forms.PageStep>
	);
}
