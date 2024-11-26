import React, { createContext, useState, useEffect, useContext } from "react";

// Criação do contexto
export const FinancialContext = createContext();

// Hook personalizado para acessar o contexto
export const useFinancialContext = () => {
  const context = useContext(FinancialContext);

  if (!context) {
    throw new Error("useFinancialContext deve ser usado dentro do FinancialProvider");
  }

  return context;
};

// Provider do contexto
export const FinancialProvider = ({ children }) => {
  const [financialData, setFinancialData] = useState(() => {
    // Carregar do localStorage
    const storedData = localStorage.getItem("financialData");
    return storedData ? JSON.parse(storedData) : [];
  });

  // Sincronizar com o localStorage sempre que financialData mudar
  useEffect(() => {
    localStorage.setItem("financialData", JSON.stringify(financialData));
  }, [financialData]);

  // Adiciona uma nova conta com o status 'PAGAMENTO NÃO REALIZADO'
  const addAccount = (newAccount) => {
    const accountWithStatus = { 
      ...newAccount, 
      status: "PAGAMENTO NÃO REALIZADO",
      block: `Bloco ${newAccount.block}`, // Formato consistente
      apartment: `Apartamento ${newAccount.apartment}` // Formato consistente
    };
    setFinancialData((prevData) => {
      const updatedData = [...prevData, accountWithStatus];
      console.log("Dados financeiros atualizados:", updatedData); // Debug
      return updatedData;
    });
  };

  // Edita uma conta existente
  const editAccount = (id, updatedAccount) => {
    setFinancialData((prevData) =>
      prevData.map((account) => (account.id === id ? updatedAccount : account))
    );
  };

  // Deleta uma conta
  const deleteAccount = (id) => {
    setFinancialData((prevData) =>
      prevData.filter((account) => account.id !== id)
    );
  };

  return (
    <FinancialContext.Provider
      value={{
        financialData,
        setFinancialData,
        addAccount,
        editAccount,
        deleteAccount,
      }}
    >
      {children}
    </FinancialContext.Provider>
  );
};
