import React from "react";
import DropMenu from "../../components/DropMenu";
import { Forms } from "../../components/Forms";
import useObjectArray from "../../hooks/useObjectArray";

export default function InhabitantForm() {
	const {
		array: employees,
		addOne: addEmployee,
		removeOne: removeEmployee,
		modifyOne: modifyEmployee,
	} = useObjectArray({
		entries: [
			"name",
			"role",
			"phone",
		],
		oneNeeded: true
	});

	return (
		<Forms.PageStep
			title="Cadastro de Funcionário"
			subtitle="Funcionário XXX"
		>
			<div className="w-full h-fit">
				<button
					className="text-primary-1000 block mb-2"
					onClick={addEmployee}
				>+ Adicionar Funcionário</button>
				<div className="flex flex-col gap-6 overflow-y-auto max-h-[600px]">
					{
						employees.map(employee => (
							<DropMenu
								key={employee.id}
								text={employee.name ? employee.name : "Nome do Funcionário"}
								removeCallback={employees.indexOf(employee) === 0 ? null : () => removeEmployee(employee.id)}
							>
								<div className="flex gap-4 flex-col">
									<Forms.InputText
										placeholder="NOME DO FUNCIONÁRIO"
										onChange={e => modifyEmployee(employee.id, ["name", e.nativeEvent.srcElement.value])}
										required
									/>
									<Forms.InputText
										placeholder="CARGO"
										onChange={e => modifyEmployee(employee.id, ["role", e.nativeEvent.srcElement.value])}
										required
									/>

									<Forms.InputText
										placeholder="TELEFONE"
										onChange={e => modifyEmployee(employee.id, ["phone", e.nativeEvent.srcElement.value])}
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
