import React, { useState } from "react";
import { ChevronDown, ChevronUp, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

function translateType(type) {
	return {
		SUGGESTION: "Sugestão",
		COMPLAINT: "Reclamação",
		OTHER: "Outro",
	}[type];
}

export default function OmbudsmanListTicket({ ticket }) {
	const [collapse, setCollapse] = useState(false);
	const navigate = useNavigate();

	function toggleCollapse() {
		setCollapse(!collapse);
	}

	return (
		<div className="bg-white p-6 rounded-lg">
			<div
				className="flex gap-4 cursor-pointer"
				onClick={() => toggleCollapse()}
			>
				<MessageSquare size={32} />
				<span className="w-full text-xl">{ticket.title}</span>
				{collapse ? <ChevronUp /> : <ChevronDown />}
			</div>
			<div className={`overflow-hidden ${collapse ? "max-h-none mt-4" : "max-h-0"}`}>
				<div>
					<strong>Tipo: </strong>
					{translateType(ticket.type)}
				</div>
				<div>
					<strong>Situação: </strong>
					{ticket.status}
				</div>
				<button
					className="text-left p-0 text-primary-1000 bg-transparent border-none w-auto inline"
					onClick={() => navigate(`./${ticket.id}`)}
				>
					Ver Detalhes
				</button>
			</div>
		</div>
	);
}
