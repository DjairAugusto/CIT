import React, {useState} from "react";
import {Check, X} from "lucide-react";
import {Forms} from "../../components/Forms";
import isAdmin from "../../utils/roles/isAdmin";

const statusOptions = [
	{value: "aberto", text: "Aberto"},
	{value: "em_analise", text: "Em Análise"},
	{value: "analisado", text: "Analisado"},
	{value: "resolvido", text: "Resolvido"},
];

export default function Details() {
	const [status, setStatus] = useState("");
	const [resposta, setResposta] = useState("");

	const handleSelectChange = (e) => {
		if(!statusOptions.find((option) => option.value === e.target.value)) {
			throw new Error("Invalid Status Option");
		}

		setStatus(e.target.value);
	};

	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
			<div className="w-full max-w-2xl bg-white p-6 rounded-md shadow-lg">
				<h1 className="text-xl font-semibold mb-2 text-center">
					Detalhes
				</h1>
				<hr className="mb-4" />
				<h2 className= "flex justify-between items-center mb-2 font-bold">
					Ticket - TÍTULO
				</h2>
				<p className="flex justify-between items-center mb-4">
					Tipo: TYPE
				</p>
				<p className="flex justify-between items-center mb-4">
					Situação: STATUS
				</p>
				<p className="flex justify-between items-center mb-4">
					Descrição: Lorem ipsum
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
							value={status}
							onChange={handleSelectChange}
							options={statusOptions}
						/>

						<Forms.InputText
							value={resposta}
							onChange={(e) => setResposta(e.target.value)}
							placeholder="Digite a resposta"
							required
						/>

						<button className="bg-primary-1000 text-white py-2 px-4 rounded mt-2 w-full hover:bg-primary-1000 transition-colors duration-300">
							Salvar
						</button>
					</div>
				) : (
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
				)}
			</div>
		</div>
	);
}
