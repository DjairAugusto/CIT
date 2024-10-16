import { Forms } from "../../components/Forms";
import React from "react";
import DropMenu from "../../components/DropMenu";
import useObjectArray from "../../hooks/useObjectArray";


const VisitorForm = () => {
    const {
		array: visitors,
		addOne: addVisitor,
		removeOne: removeVisitor,
		modifyOne: modifyVisitor,
	} = useObjectArray({
		entries: [
			"name",
			"CPF",
		],
		oneNeeded: true
	});

	return (
		<Forms.PageStep
			title="Cadastro de Visitantes"
			subtitle="Visitante XXX"
		>
			<div className="w-full h-fit">
				<button
					className="text-primary-1000 block mb-2"
					onClick={addVisitor}
				>+ Adicionar Visitante</button>
				<div className="flex flex-col gap-6 overflow-y-auto max-h-[600px]">
					{
						visitors.map(visitor => (
							<DropMenu
								key={visitor.id}
								text={visitor.name ? visitor.name : "Nome do Visitante"}
								removeCallback={visitors.indexOf(visitor) === 0 ? null : () => removeVisitor(visitor.id)}
							>
								<div className="flex gap-4 flex-col">
									<Forms.InputText
										placeholder="NOME DO VISITANTE"
										onChange={e => modifyVisitor(visitor.id, ["name", e.nativeEvent.srcElement.value])}
										required={true}
									/>
									<Forms.InputText
										placeholder="CPF"
										onChange={e => modifyVisitor(visitor.id, ["CPF", e.nativeEvent.srcElement.value])}
										required={true}
									/>
								</div>
							</DropMenu>
						))
					}
				</div>
			</div>
		</Forms.PageStep>
	)
}
export default VisitorForm;