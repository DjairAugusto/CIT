import React, { useContext, useState } from "react";
import { DeliveryContext } from "../contexts/DeliveryContext";

const AdminDeliveries = () => {
  const { deliveries, setDeliveries } = useContext(DeliveryContext);
  const [blockSearchTerm, setBlockSearchTerm] = useState("");
  const [apartmentSearchTerm, setApartmentSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newDelivery, setNewDelivery] = useState({
    block: "",
    apartment: "",
    recipient: "",
    date: "",
    time: "",
  });

  const blocks = ["Bloco A", "Bloco B", "Bloco C"];
  const apartments = ["Apartamento 101", "Apartamento 102", "Apartamento 201", "Apartamento 202"];

  const filteredDeliveries = deliveries.filter(
    (delivery) =>
      (delivery.block.toLowerCase().includes(blockSearchTerm.toLowerCase()) || blockSearchTerm === "") &&
      (delivery.apartment.toLowerCase().includes(apartmentSearchTerm.toLowerCase()) || apartmentSearchTerm === "")
  );

  const handleAddDelivery = () => {
    if (
      newDelivery.block &&
      newDelivery.apartment &&
      newDelivery.date &&
      newDelivery.time &&
      newDelivery.recipient
    ) {
      setDeliveries([...deliveries, newDelivery]);  // Atualiza as entregas e salva no localStorage
      setIsModalOpen(false);
      setNewDelivery({
        block: "",
        apartment: "",
        recipient: "",
        date: "",
        time: "",
      });
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  };

  const handleDeleteDelivery = (index) => {
    const updatedDeliveries = deliveries.filter((_, i) => i !== index);
    setDeliveries(updatedDeliveries);  // Atualiza as entregas
  };

  const handleEditDelivery = (index) => {
    const deliveryToEdit = deliveries[index];
    setNewDelivery(deliveryToEdit);
    setIsModalOpen(true);
  };

  return (
    <div className="text-center mt-8" style={{ backgroundColor: "#F6F8F7" }}>
      <header className="text-center mb-8 p-4">
        <h1 className="text-3xl font-semibold" style={{ color: "#42D0B3" }}>
          NOME DO CONDOMÍNIO
        </h1>
        <p className="text-gray-600 text-lg">Entregas e Encomendas</p>
      </header>

      <div className="mb-6 px-4">
        <div className="relative w-3/5 mx-auto mb-4">
          <label className="block text-gray-600 mb-1 text-left">Pesquisar por Bloco</label>
          <select
            value={blockSearchTerm}
            onChange={(e) => setBlockSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border rounded-full text-gray-600 shadow-md focus:outline-none focus:ring-[#42D0B3]"
          >
            <option value="">Selecione um Bloco</option>
            {blocks.length > 0 ? (
              blocks.map((block, index) => (
                <option key={index} value={block}>
                  {block}
                </option>
              ))
            ) : (
              <option disabled>Sem blocos registrados</option>
            )}
          </select>
        </div>
      </div>

      <div className="mb-6 px-4">
        <div className="relative w-3/5 mx-auto">
          <label className="block text-gray-600 mb-1 text-left">Pesquisar por Apartamento</label>
          <select
            value={apartmentSearchTerm}
            onChange={(e) => setApartmentSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border rounded-full text-gray-600 shadow-md focus:outline-none focus:ring-[#42D0B3]"
          >
            <option value="">Selecione um Apartamento</option>
            {apartments.length > 0 ? (
              apartments.map((apartment, index) => (
                <option key={index} value={apartment}>
                  {apartment}
                </option>
              ))
            ) : (
              <option disabled>Sem apartamentos registrados</option>
            )}
          </select>
        </div>
      </div>

      <div className="mt-4 bg-white p-6 rounded-lg shadow-lg relative">
        {filteredDeliveries.length === 0 ? (
          <div className="text-center">
            <img
              src="./emptybox.png"
              alt="No packages"
              className="w-36 mx-auto mb-4"
            />
            <p className="text-gray-600 text-lg">Oops, sem entregas para você.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredDeliveries.map((delivery, index) => (
              <div
                key={index}
                className="bg-white rounded-md shadow-md text-left p-4 w-full sm:w-[250px] md:w-[300px] lg:w-[350px]"
              >
                <div className="w-full p-4 rounded-t-md" style={{ backgroundColor: "#42D0B3" }}>
                  <img
                    src="/encomendspic.png"
                    alt="Package"
                    className="mx-auto"
                  />
                </div>
                <div className="bg-white w-full rounded-b-md p-4">
                  <p className="font-bold">Entrega recebida em: {delivery.date}</p>
                  <p className="text-gray-600">Hora: {delivery.time}</p>
                  <p className="text-gray-600">Destinatário: {delivery.recipient}</p>
                  <p className="font-bold mt-2" style={{ color: "#42D0B3", textAlign: "center" }}>
                    Aguardando Retirada
                  </p>
                  <div className="flex justify-center gap-4 mt-4">
                    <button
                      onClick={() => handleEditDelivery(index)}
                      className="bg-transparent text-[#42D0B3] text-sm font-semibold py-2 px-4 border border-[#42D0B3] rounded-lg hover:bg-[#42D0B3] hover:text-white transition"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDeleteDelivery(index)}
                      className="bg-transparent text-red-500 text-sm font-semibold py-2 px-4 border border-red-500 rounded-lg hover:bg-red-500 hover:text-white transition"
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-center mt-6">
          <button
            className="text-lg font-semibold text-gray-600 hover:text-green-500"
            onClick={() => setIsModalOpen(true)}
          >
            Adicionar
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[480px] h-[550px] relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
              onClick={() => setIsModalOpen(false)}
            >
              X
            </button>

            <div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-1 text-left">Bloco</label>
                <select
                  value={newDelivery.block}
                  onChange={(e) =>
                    setNewDelivery({ ...newDelivery, block: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#42D0B3]"
                >
                  <option value="">Selecione o Bloco</option>
                  {blocks.length > 0 ? (
                    blocks.map((block, index) => (
                      <option key={index} value={block}>
                        {block}
                      </option>
                    ))
                  ) : (
                    <option disabled>Sem blocos registrados</option>
                  )}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 mb-1 text-left">Apartamento</label>
                <select
                  value={newDelivery.apartment}
                  onChange={(e) =>
                    setNewDelivery({ ...newDelivery, apartment: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#42D0B3]"
                >
                  <option value="">Selecione o Apartamento</option>
                  {apartments.length > 0 ? (
                    apartments.map((apartment, index) => (
                      <option key={index} value={apartment}>
                        {apartment}
                      </option>
                    ))
                  ) : (
                    <option disabled>Sem apartamentos registrados</option>
                  )}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 mb-1 text-left">Destinatário</label>
                <input
                  type="text"
                  value={newDelivery.recipient}
                  onChange={(e) =>
                    setNewDelivery({ ...newDelivery, recipient: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#42D0B3]"
                  placeholder="Nome do destinatário"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 mb-1 text-left">Data</label>
                <input
                  type="date"
                  value={newDelivery.date}
                  onChange={(e) =>
                    setNewDelivery({ ...newDelivery, date: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#42D0B3]"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 mb-1 text-left">Hora</label>
                <input
                  type="time"
                  value={newDelivery.time}
                  onChange={(e) =>
                    setNewDelivery({ ...newDelivery, time: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#42D0B3]"
                />
              </div>

              <button
                onClick={handleAddDelivery}
                className="w-full py-2 bg-[#42D0B3] text-white rounded-md mt-4"
              >
                Adicionar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDeliveries;
