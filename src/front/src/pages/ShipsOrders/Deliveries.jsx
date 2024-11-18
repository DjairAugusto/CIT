import React, { useContext } from "react";
import { DeliveryContext } from "../contexts/DeliveryContext";

const Deliveries = () => {
  const { deliveries } = useContext(DeliveryContext);

  return (
    <div className="text-center mt-8" style={{ backgroundColor: '#F6F8F7' }}>
      {/* Cabeçalho */}
      <header className="text-center mb-8 p-4">
        <h1 className="text-3xl font-semibold" style={{ color: '#42D0B3' }}>VILA PISANI</h1>
        <p className="text-gray-500">PERFIL PRINCIPAL</p>
        <p className="text-gray-500">Bloco B, Apartamento 302</p>
      </header>

      {/* Área de Entregas e Encomendas */}
      <div className="mt-10 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Entregas e Encomendas</h2>

        {deliveries.length === 0 ? (
          <div>
            <img
              src="/public/emptybox.png"
              alt="No packages"
              className="mx-auto mb-5"
            />
            <p className="text-gray-600">Oops, sem entregas para você.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {deliveries.map((delivery, index) => (
              <div
                key={index}
                className="bg-white rounded-md shadow-md text-center flex flex-col items-center"
              >
                <div className="w-full p-4 rounded-t-md" style={{ backgroundColor: '#42D0B3' }}>
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
                  <p className="font-bold mt-2" style={{ color: '#42D0B3' }}>Aguardando Retirada</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Deliveries;
