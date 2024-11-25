import React, { createContext, useContext } from "react";
import { FinancialContext } from "../contexts/FinancialContext";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const { files, editAccount } = useContext(FinancialContext);

    const togglePaymentStatus = (id) => {
        const updatedFile = files.find((file) => file.id === id);
        if (updatedFile) {
            editAccount(id, {
                status: updatedFile.status === "PAGAMENTO NÃO REALIZADO" ? "PAGAMENTO REALIZADO" : "PAGAMENTO NÃO REALIZADO",
            });
        }
    };

    return (
        <UserContext.Provider value={{ files, togglePaymentStatus }}>
            {children}
        </UserContext.Provider>
    );
};
