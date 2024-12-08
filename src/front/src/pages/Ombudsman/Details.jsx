import React, { useEffect, useState } from "react";
import { Check, X } from "lucide-react";
import { Forms } from "../../components/Forms";
import isAdmin from "../../utils/roles/isAdmin";
import Loading from "../../components/Loading";
import axios from "../../utils/requisition/citRequisition";
import { useLocation, useNavigate } from "react-router-dom";

const statusOptions = [
	{ value: "aberto", text: "Aberto" },
	{ value: "em_analise", text: "Em Análise" },
	{ value: "analisado", text: "Analisado" },
	{ value: "resolvido", text: "Resolvido" },
];

export default function Details() {
	const [ticket, setTicket] = useState(null);
	const navigate = useNavigate();
	const { state } = useLocation();

	useEffect(() => {
		if (!state?.ticketId) navigate("/ombudsman");
		else
			axios
				.get(`/ombudsmen/${state.ticketId}`)
				.then((res) => {
					setTicket(res.data);
				})
				.catch((err) => {
					navigate("../");
				});
	}, [state, navigate]);

	function setStatus(status) {
		setTicket({
			...ticket,
			status,
		});
	}

	function setResponse(response) {
		setTicket({
			...ticket,
			response,
		});
	}

	const handleSelectChange = (e) => {
		if (!statusOptions.find((option) => option.value === e.target.value)) {
			throw new Error("Invalid Status Option");
		}

		setStatus(e.target.value);
	};

	if (!ticket) return <Loading />;

	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
			<div className="w-full max-w-2xl bg-white p-6 rounded-md shadow-lg">
				<h1 className="text-xl font-semibold mb-2 text-center">
					Detalhes
				</h1>
				<hr className="mb-4" />
				<h2 className="flex justify-between items-center mb-2 font-semibold">
					Ticket - {ticket.title}
				</h2>
				<p className="flex justify-between items-center mb-4">
					Tipo: {ticket.type}
				</p>
				<p className="flex justify-between items-center mb-4">
					Situação: {ticket.status}
				</p>
				<p className="flex justify-between items-center mb-4">
					Descrição: {ticket.description}
				</p>
				<strong>*Arquivo*:</strong>{" "}
				<a href="#" className="text-primary-1000 hover:underline">
					Baixar
				</a>
				{isAdmin() ? (
					<div className="mt-4">
						<Forms.Select
							className="w-full mb-4"
							required={true}
							defaultOption="Selecione o status"
							value={ticket.status}
							onChange={handleSelectChange}
							options={statusOptions}
						/>

						<Forms.InputText
							value={ticket.response}
							onChange={(e) => setResponse(e.target.value)}
							placeholder="Digite a resposta"
							required
						/>

						<button className="bg-primary-1000 text-white py-2 px-4 rounded mt-2 w-full hover:bg-primary-1000 transition-colors duration-300">
							Salvar
						</button>
					</div>
				) : (
					ticket.status === "ANALYZED" && (
						<div className="mt-4 text-center">
							<h3 className="font-semibold mb-2">
								O Ticket foi resolvido?
							</h3>
							<button className="bg-red-500 text-white py-1 px-3 rounded mr-3 hover:bg-red-600">
								<X /> Não Resolvido
							</button>
							<button className="bg-primary-1000 text-white py-1 px-7 rounded hover:bg-green-300">
								<Check /> Resolvido
							</button>
						</div>
					)
				)}
			</div>
		</div>
	);
}
