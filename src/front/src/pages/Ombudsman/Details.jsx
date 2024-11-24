import React, { useState } from "react";
import isAdmin from "../../utils/roles/isAdmin";
import FormsInputText from "../../components/Forms/FormsInputText";
import FormsSelect from "../../components/Forms/FormsSelect";

export default function Details() {
  const admin = true; // Simulando que é admin
  const [status, setStatus] = useState("");
  const [resposta, setResposta] = useState("");

  const handleSelectChange = (e) => {
    setStatus(e.target.value); // Atualiza o estado com o valor selecionado
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-2xl bg-white p-6 rounded-md shadow-lg">
        <h1 className="text-xl font-semibold mb-2 text-center">Detalhes</h1>
        <hr className="mb-4" />
        
        <h2 className="flex justify-between items-center mb-2 font-semibold">Ticket - TÍTULO</h2>
        <p className="flex justify-between items-center mb-4">Tipo: TYPE</p>
        <p className="flex justify-between items-center mb-4">Situação: STATUS</p>
        <p className="flex justify-between items-center mb-4">Descrição: Lorem ipsum</p>
        
        <strong>*Arquivo*:</strong> <a href="#" className="text-[#42D0B3] hover:underline">Baixar</a>

        {admin && (
          <div className="mt-4">
            {/* Campo de Status com Select */}
            <FormsSelect
              className="w-full mb-4"
              required={true}
              defaultOption="Selecione o status"
              value={status}
              onChange={handleSelectChange}
              options={[
                { value: "aberto", text: "Aberto" },
                { value: "em_analise", text: "Em Análise" },
                { value: "analisado", text: "Analisado" },
                { value: "resolvido", text: "Resolvido" },
              ]}
            />

            {/* Campo de Resposta */}
            <FormsInputText
              value={resposta}
              onChange={(e) => setResposta(e.target.value)}
              placeholder="Digite a resposta"
              required
            />

            {/* Botão de Salvar */}
            <button
              className="bg-[#42D0B3] text-white py-2 px-4 rounded mt-4 w-full hover:bg-[#42D0B3] transition-colors duration-300"
            >
              Salvar
            </button>
          </div>
        )}

        {!admin && (
          <div className="mt-4 text-center">
            <h3 className="font-semibold mb-2">O Ticket foi resolvido?</h3>
            <button className="bg-red-500 text-white py-2 px-4 rounded mr-2 hover:bg-red-600">
              X Não Resolvido
            </button>
            <button className="bg-[#42D0B3] text-white py-2 px-4 rounded hover:bg-green-300">
              ✔ Resolvido
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
