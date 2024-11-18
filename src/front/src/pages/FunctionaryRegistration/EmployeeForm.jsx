import React, { useState } from "react";
import DropMenu from "../../components/DropMenu";
import { Forms } from "../../components/Forms";
import useObjectArray from "../../hooks/useObjectArray";

export default function ProfileForm() {
	const [profile, setProfile] = useState({});
	const {
		array: employees,
		addOne: addEmployee,
		removeOne: removeEmployee,
		modifyOne: modifyEmployee,
	} = useObjectArray({
		entries: ["name", "role", "phone"],
		oneNeeded: true,
	});

	const modifyProfile = (id, [key, value]) => {
		setProfile((prevProfile) => ({
			...prevProfile,
			[key]: value,
		}));
	};

	return (
		<Forms.PageStep
			title="Cadastro de Funcionário"
			subtitle="Funcionário XXX"
		>
			<div className="w-full h-fit">
				<button
					className="text-primary-1000 block mb-2"
					onClick={addEmployee}
				>
					+ Adicionar Funcionário
				</button>
				<div className="flex flex-col gap-6 overflow-y-auto max-h-[600px]">
					{employees.map((employee, index) => (
						<DropMenu
							key={employee.id}
							text={`Funcionário ${index + 1}`}
							removeCallback={() => removeEmployee(employee.id)}
						>
							<div className="flex gap-4 flex-col">
								<Forms.InputText
									placeholder="NOME DO FUNCIONÁRIO"
									onChange={(e) =>
										modifyEmployee(employee.id, [
											"name",
											e.target.value,
										])
									}
									required
								/>
								<Forms.InputText
									placeholder="CARGO"
									onChange={(e) =>
										modifyEmployee(employee.id, [
											"role",
											e.target.value,
										])
									}
									required
								/>
								<Forms.InputText
									placeholder="TELEFONE"
									onChange={(e) =>
										modifyEmployee(employee.id, [
											"phone",
											e.target.value,
										])
									}
								/>
								<h4 className="text-base font-normal">
									Perfil Principal
								</h4>
								<Forms.InputText
									placeholder="EMAIL"
									onChange={(e) =>
										modifyProfile(profile.id, [
											"email",
											e.target.value,
										])
									}
									required
								/>
								<Forms.InputText
									placeholder="SENHA"
									type="password"
									onChange={(e) =>
										modifyProfile(profile.id, [
											"password",
											e.target.value,
										])
									}
									required
								/>
							</div>
						</DropMenu>
					))}
				</div>
			</div>
		</Forms.PageStep>
	);
}
