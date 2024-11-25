import React, { useState } from "react";
import PopUP from "../../components/PopUP";
import { Forms } from "../../components/Forms";
import { Plus } from "lucide-react";

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

export default function OmbudsmanTicket({ closeCallback }) {
	const [data, setData] = useState({
		text: "",
		title: "",
		type: "",
	});

	function setText(text) {
		setData({
			...data,
			text,
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
		// TODO request to backend
	}

	return (
		<PopUP title="Novo Ticket" closeCallback={closeCallback}>
			<div className="flex flex-col gap-2 min-w-[600px]">
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
					value={data.text}
					onChange={(e) => setText(e.target.value)}
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
	);
}
