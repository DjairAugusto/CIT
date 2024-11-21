import React, { useState } from "react";

const DeliveryModal = ({ delivery = null, onClose, onSave }) => {
  const [block, setBlock] = useState(delivery?.block || "");
  const [apartment, setApartment] = useState(delivery?.apartment || "");
  const [date, setDate] = useState(delivery?.date || "");
  const [time, setTime] = useState(delivery?.time || "");
  const [recipient, setRecipient] = useState(delivery?.recipient || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!block || !apartment || !date || !time || !recipient) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    onSave({ id: delivery?.id, block, apartment, date, time, recipient });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">{delivery ? "Editar Entrega" : "Nova Entrega"}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Bloco"
            value={block}
            onChange={(e) => setBlock(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Apartamento"
            value={apartment}
            onChange={(e) => setApartment(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Destinatário"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
          />
          <div className="flex justify-between">
            <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
              Cancelar
            </button>
            <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeliveryModal;
