import React, { useState } from "react";
import { useFinancialContext } from "../contexts/FinancialContext";

const FinancialManagement = () => {
  const { financialData, setFinancialData } = useFinancialContext();

  const [blockFilter, setBlockFilter] = useState("");
  const [apartmentFilter, setApartmentFilter] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newRecord, setNewRecord] = useState({
    block: "",
    apartment: "",
    description: "",
    amount: "",
    date: "",
    file: null,
  });
  const [editMode, setEditMode] = useState(false);
  const [currentRecordId, setCurrentRecordId] = useState(null);

  const blocks = ["Bloco A", "Bloco B", "Bloco C"];
  const apartments = ["Apartamento 101", "Apartamento 102", "Apartamento 201", "Apartamento 202"];

  const filteredRecords = financialData.filter(
    (record) =>
      (record.block.toLowerCase().includes(blockFilter.toLowerCase()) || blockFilter === "") &&
      (record.apartment.toLowerCase().includes(apartmentFilter.toLowerCase()) || apartmentFilter === "")
  );

  const handleAddRecord = () => {
    if (newRecord.block && newRecord.apartment && newRecord.description && newRecord.amount && newRecord.date) {
      const newRecordWithId = { 
        ...newRecord, 
        id: Date.now(),  // Gerando um ID único para cada novo registro
        status: "PAGAMENTO NÃO REALIZADO" 
      };
      setFinancialData([...financialData, newRecordWithId]);
      resetForm();
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  };

  const handleFileChange = (e) => {
    setNewRecord({ ...newRecord, file: e.target.files[0] });
  };

  const handleDelete = (id) => {
    setFinancialData(financialData.filter((account) => account.id !== id));
  };

  const handleEdit = (account) => {
    setNewRecord({ ...account });
    setEditMode(true);
    setCurrentRecordId(account.id); // Guardando o ID do registro que será editado
    setIsModalOpen(true);
  };

  const handleSaveEdit = () => {
    if (newRecord.block && newRecord.apartment && newRecord.description && newRecord.amount && newRecord.date) {
      const updatedData = financialData.map((account) =>
        account.id === currentRecordId ? { ...newRecord, id: currentRecordId } : account // Atualiza apenas o registro com o ID correto
      );
      setFinancialData(updatedData);
      resetForm();
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  };

  const resetForm = () => {
    setIsModalOpen(false);
    setNewRecord({
      block: "",
      apartment: "",
      description: "",
      amount: "",
      date: "",
      file: null,
    });
    setEditMode(false);
    setCurrentRecordId(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
       {/* Cabeçalho */}
       <header className="text-center mb-8 p-4">
        <h1 className="text-3xl font-semibold" style={{ color: '#42D0B3' }}>VILA PISANI</h1>
        <p className="text-gray-500">PERFIL PRINCIPAL</p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Financeiro</h2>
      </header>

      <div className="mb-6 flex justify-center gap-4">
        <select
          value={blockFilter}
          onChange={(e) => setBlockFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="">Selecione um Bloco</option>
          {blocks.map((block, index) => (
            <option key={index} value={block}>
              {block}
            </option>
          ))}
        </select>
        <select
          value={apartmentFilter}
          onChange={(e) => setApartmentFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="">Selecione um Apartamento</option>
          {apartments.map((apartment, index) => (
            <option key={index} value={apartment}>
              {apartment}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        {filteredRecords.length === 0 ? (
          <div className="text-center">
          <img
            src="./emptybox.png"
            alt="No packages"
            className="w-36 mx-auto mb-4"
          />
          <p className="text-gray-600 text-lg">Oops, sem contas disponíveis.</p>
        </div>
        ) : (
          <table className="w-full text-left border-collapse">
              <thead>
              <tr>
                <th className="py-2 px-4 border-b">Bloco</th>
                <th className="py-2 px-4 border-b">Apartamento</th>
                <th className="py-2 px-4 border-b">Descrição</th>
                <th className="py-2 px-4 border-b">Valor</th>
                <th className="py-2 px-4 border-b">Data</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Arquivo</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.map((record) => (
                <tr key={record.id}>
                  <td className="py-2">{record.block}</td>
                  <td className="py-2">{record.apartment}</td>
                  <td className="py-2">{record.description}</td>
                  <td className="py-2">R$ {record.amount}</td>
                  <td className="py-2">{record.date}</td>
                  <td className="py-2">
                    <span className="text-red-500 font-semibold">{record.status}</span>
                  </td>
                  <td className="py-2">
                    {record.file && record.file instanceof File ? (
                      <a href={URL.createObjectURL(record.file)} className="text-teal-500" download>
                        {record.file.name}
                      </a>
                    ) : (
                      <span className="text-gray-500">Nenhum arquivo</span>
                    )}
                  </td>
                  <td className="py-2 flex gap-4">
                    <button
                      onClick={() => handleEdit(record)}
                      className="text-blue-500"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(record.id)}
                      className="text-red-500"
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-2 bg-teal-500 text-white rounded-lg"
        >
          Adicionar Registro
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">{editMode ? "Editar Registro" : "Novo Registro"}</h2>
            <div className="space-y-4">
              <select
                value={newRecord.block}
                onChange={(e) => setNewRecord({ ...newRecord, block: e.target.value })}
                className="w-full p-3 border rounded"
              >
                <option value="">Bloco</option>
                {blocks.map((block, index) => (
                  <option key={index} value={block}>
                    {block}
                  </option>
                ))}
              </select>
              <select
                value={newRecord.apartment}
                onChange={(e) => setNewRecord({ ...newRecord, apartment: e.target.value })}
                className="w-full p-3 border rounded"
              >
                <option value="">Apartamento</option>
                {apartments.map((apartment, index) => (
                  <option key={index} value={apartment}>
                    {apartment}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Descrição"
                value={newRecord.description}
                onChange={(e) => setNewRecord({ ...newRecord, description: e.target.value })}
                className="w-full p-3 border rounded"
              />
              <input
                type="number"
                placeholder="Valor"
                value={newRecord.amount}
                onChange={(e) => setNewRecord({ ...newRecord, amount: e.target.value })}
                className="w-full p-3 border rounded"
              />
              <input
                type="date"
                value={newRecord.date}
                onChange={(e) => setNewRecord({ ...newRecord, date: e.target.value })}
                className="w-full p-3 border rounded"
              />
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full p-3 border rounded"
              />
            </div>
            <div className="mt-4 flex justify-end gap-4">
              <button
                onClick={resetForm}
                className="px-6 py-2 bg-gray-300 rounded-lg"
              >
                Cancelar
              </button>
              <button
                onClick={editMode ? handleSaveEdit : handleAddRecord}
                className="px-6 py-2 bg-teal-500 text-white rounded-lg"
              >
                {editMode ? "Salvar" : "Adicionar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinancialManagement;
