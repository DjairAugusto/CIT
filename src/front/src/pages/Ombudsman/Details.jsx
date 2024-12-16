import React, { useCallback, useEffect, useState } from "react";
import { ArrowLeft, Check, X } from "lucide-react";
import { Forms } from "../../components/Forms";
import isAdmin from "../../utils/roles/isAdmin";
import Loading from "../../components/Loading";
import axios, {
	blobInstance as axiosFile,
} from "../../utils/requisition/citRequisition";
import { useLocation, useNavigate } from "react-router-dom";
import "./fix.css";

const statusOptions = [
	{ value: "OPEN", text: "Aberto" },
	{ value: "IN_ANALYSIS", text: "Em Análise" },
	{ value: "ANALYZED", text: "Analisado" },
	{ value: "IN_PROGRESS", text: "Em Progresso" },
];

export default function Details() {
	const [ticket, setTicket] = useState(null);
	const [files, setFiles] = useState(null);
	const [querySave, setQuerySave] = useState(false);
	const navigate = useNavigate();
	const { state } = useLocation();

	useEffect(() => {
		if (!state?.ticketId) navigate("/ombudsman");
		else if (ticket === null) {
			axios
				.get(`/ombudsmen/${state.ticketId}`)
				.then((res) => {
					if (!res.data.response) res.data.response = "";
					setTicket(res.data);
				})
				.catch((err) => {
					navigate("../");
				});
			axios
				.get(`/ombudsmen/files/info/${state.ticketId}`)
				.then((res) => {
					setFiles(res.data);
				})
				.catch((err) => {});
		}
	}, [state, ticket, navigate]);

	useEffect(() => {
		if (querySave)
			axios
				.put("/ombudsmen", ticket)
				.then(() => {
					alert("Ticket salvo com sucesso");
					setTicket(null);
				})
				.catch(() => {
					alert("Erro ao salvar ticket");
				})
				.finally(() => setQuerySave(false));
	}, [querySave, setQuerySave, ticket]);

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

	function downloadFile(file) {
		axiosFile
			.get(`/ombudsmen/file/download/${file}`)
			.then((res) => {
				const href = URL.createObjectURL(res.data);
				const link = document.createElement("a");

				link.style.display = "none";
				link.href = href;
				link.setAttribute("download", file);
				document.body.append(link);

				link.click();

				document.body.removeChild(link);
				URL.revokeObjectURL(href);
			})
			.catch(() => {});
	}

	function saveTicket() {
		setQuerySave(true);
	}

	if (!ticket || !files) return <Loading />;

	return (
		<main
			id="ombudsman"
			className="flex justify-center items-center h-full bg-gray-100 p-6"
		>
			<div className="w-full max-w-2xl bg-white p-6 rounded-md shadow-lg">
				<h1 className="text-xl font-semibold mb-2 text-center relative">
					<button
						className="absolute left-0"
						onClick={() => navigate("../")}
					>
						<ArrowLeft />
					</button>
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
				{files && files.length > 0 && (
					<>
						<strong>Arquivos: </strong>
						{files.map((file, index) => (
							<>
								<button
									key={file}
									className="text-primary-1000 hover:underline"
									onClick={() => downloadFile(file)}
								>
									{file}
								</button>
								{index < files.length - 1 && <>, </>}
							</>
						))}
					</>
				)}
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
						/>

						<button
							onClick={() => saveTicket()}
							className="bg-primary-1000 text-white py-2 px-4 rounded mt-2 w-full hover:bg-primary-1000 transition-colors duration-300"
						>
							Salvar
						</button>
					</div>
				) : (
					<>
						{ticket.response && (
							<div className="mt-4">
								<strong>Resposta:</strong>
								<p>{ticket.response}</p>
							</div>
						)}
						{ticket.status === "ANALYZED" && (
							<div className="mt-4 text-center">
								<h3 className="font-semibold mb-2">
									O Ticket foi resolvido?
								</h3>
								<button
									onClick={() => {
										setStatus("NOT_RESOLVED");
										saveTicket();
									}}
									className="bg-red-500 text-white py-1 px-3 rounded mr-3 hover:bg-red-600"
								>
									<X className="inline" /> Não Resolvido
								</button>
								<button
									onClick={() => {
										setStatus("RESOLVED");
										saveTicket();
									}}
									className="bg-primary-1000 text-white py-1 px-7 rounded hover:bg-green-300"
								>
									<Check className="inline" /> Resolvido
								</button>
							</div>
						)}
					</>
				)}
			</div>
		</main>
	);
}
