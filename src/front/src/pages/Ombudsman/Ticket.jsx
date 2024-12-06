import React, { useState } from "react";
import PopUP from "../../components/PopUP";
import { Forms } from "../../components/Forms";
import { Plus } from "lucide-react";
import axios from "../../utils/requisition/citRequisition";

const typeOptions = [
	{
		value: "SUGGESTION",
		text: "Sugestão",
	},
	{
		value: "COMPLAINT",
		text: "Reclamação",
	},
	{
		value: "OTHER",
		text: "Outro",
	},
];

export default function OmbudsmanCreate({ closeCallback }) {
	const [data, setData] = useState({
		description: "",
		title: "",
		type: "",
	});
	const [requestResult, setRequestResult] = useState("");

	function setDescription(description) {
		setData({
			...data,
			description,
		});
	}

	function setTitle(title) {
		setData({
			...data,
			title,
		});
	}

	function setType(type) {
		if (!typeOptions.find((option) => option.value === type)) {
			throw new Error("Invalid option");
		}

		setData({
			...data,
			type,
		});
	}

	function createTicket(data) {
		// TODO melhorar o feedback para o usuário
		// 		 - tratemnto de erros
		//		 - messagem indicando o resultado
		axios
			.post(`/ombudsmen`, data)
			.then((res) => {
				setRequestResult(res.message);
			})
			.catch((err) => {});
	}

	return (
		<>
			<PopUP title="Novo Ticket" closeCallback={closeCallback}>
				<div className="flex flex-col gap-2 min-w-[600px]">
					{
						// TODO validar os inputs
					}
					<Forms.Select
						value={data.type}
						onChange={(e) => setType(e.target.value)}
						defaultOption="Escolha um Tipo"
						options={typeOptions}
						required
					/>
					<Forms.InputText
						value={data.title}
						onChange={(e) => setTitle(e.target.value)}
						type="text"
						placeholder="TÍTULO"
						required
					/>
					<Forms.TextArea
						onChange={(e) => setDescription(e.target.textContent)}
						placeholder="DESCRIÇÃO"
						required
					/>
					<Forms.File />
					<Forms.Button
						onClick={() => createTicket(data)}
						className="flex items-center justify-center rounded-lg"
					>
						<Plus />
						Novo Ticket
					</Forms.Button>
				</div>
			</PopUP>
			{requestResult && (
				<PopUP
					title="Resultado"
					closeCallback={() => setRequestResult("")}
				>
					{requestResult}
				</PopUP>
			)}
		</>
	);
}
