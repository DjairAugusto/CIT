import React, { createContext, useState, useEffect } from "react";

export const DeliveryContext = createContext();

export const DeliveryProvider = ({ children }) => {
  const [deliveries, setDeliveries] = useState(() => {
    // Carregar as entregas do localStorage ou um array vazio se não houver dados
    const storedDeliveries = localStorage.getItem("deliveries");
    return storedDeliveries ? JSON.parse(storedDeliveries) : [];
  });

  useEffect(() => {
    // Sempre que 'deliveries' mudar, atualizar o localStorage
    localStorage.setItem("deliveries", JSON.stringify(deliveries));
  }, [deliveries]); // Depende de 'deliveries', ou seja, sempre que mudar, salva no localStorage

  return (
    <DeliveryContext.Provider value={{ deliveries, setDeliveries }}>
      {children}
    </DeliveryContext.Provider>
  );
};
