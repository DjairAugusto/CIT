import React, { createContext, useState, useEffect } from "react";

export const DeliveryContext = createContext();

export const DeliveryProvider = ({ children }) => {
  const [deliveries, setDeliveries] = useState(() => {
    const storedDeliveries = localStorage.getItem("deliveries");
    return storedDeliveries ? JSON.parse(storedDeliveries) : [];
  });

  useEffect(() => {
    // Sempre que 'deliveries' mudar, vamos salvar no localStorage
    localStorage.setItem("deliveries", JSON.stringify(deliveries));
  }, [deliveries]);

  return (
    <DeliveryContext.Provider value={{ deliveries, setDeliveries }}>
      {children}
    </DeliveryContext.Provider>
  );
};
