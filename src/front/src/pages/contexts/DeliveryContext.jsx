import React, { createContext, useState, useEffect } from "react";

export const DeliveryContext = createContext();

export const DeliveryProvider = ({ children }) => {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    const fetchDeliveries = async () => {
      const mockDeliveries = [
        {
          date: "10/11/2024",
          time: "12:30",
          recipient: "João Silva",
        },
        {
          date: "09/11/2024",
          time: "15:45",
          recipient: "Maria Oliveira",
        },
        {
          date: "08/11/2024",
          time: "09:20",
          recipient: "Ana Santos",
        },
        {
          date: "07/11/2024",
          time: "17:10",
          recipient: "Carlos Souza",
        },
        {
          date: "06/11/2024",
          time: "11:05",
          recipient: "Luiza Costa",
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
