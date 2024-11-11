import React, { createContext, useState, useEffect } from "react";

export const DeliveryContext = createContext();

export const DeliveryProvider = ({ children }) => {
  const [deliveries, setDeliveries] = useState([]);

  // Simulando a busca de dados do backend
  useEffect(() => {
    const fetchDeliveries = async () => {
      // Aqui você pode integrar com o backend para buscar as entregas
      const mockDeliveries = [
        {
          date: "XX/XX/XXXX",
          time: "XX:XX",
          recipient: "*******",
        },
      ];
      setDeliveries(mockDeliveries);
    };

    fetchDeliveries();
  }, []);

  return (
    <DeliveryContext.Provider value={{ deliveries }}>
      {children}
    </DeliveryContext.Provider>
  );
};
