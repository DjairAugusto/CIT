import React from "react";
import DropMenu from "../../components/DropMenu";
import { Forms } from "../../components/Forms";

export default function EmployeesForm({ data, updateFieldHandler }) {
	return (
		<Forms.PageStep
			title="Definir Funcionarios"
			subtitle="Nome do Condomínio"
		>
			<DropMenu text="Nome do Condomínio">
				<div className="flex gap-4 flex-col">
					<Forms.InputText
						placeholder="kjasdiajsdn"
						re
					/>
					<Forms.CheckBox placeholder="kjasdiajsdn" />
					<Forms.CheckBox placeholder="kjasdiajsdn" />
					<Forms.CheckBox placeholder="kjasdiajsdn" />
					<Forms.CheckBox placeholder="kjasdiajsdn" />
					<Forms.CheckBox placeholder="kjasdiajsdn" />
					<Forms.CheckBox placeholder="kjasdiajsdn" />
					<Forms.CheckBox placeholder="kjasdiajsdn" />
					<Forms.CheckBox placeholder="kjasdiajsdn" />
					<Forms.CheckBox placeholder="kjasdiajsdn" />
					<Forms.CheckBox placeholder="kjasdiajsdn" />
					<Forms.CheckBox placeholder="kjasdiajsdn" />
				</div>
			</DropMenu>
		</Forms.PageStep>
	);
}
