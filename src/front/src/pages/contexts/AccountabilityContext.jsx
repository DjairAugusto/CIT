import React, { createContext, useState, useEffect } from "react";

// Crie o AccountabilityContext
export const AccountabilityContext = createContext();

export const AccountabilityProvider = ({ children }) => {
    const [files, setFiles] = useState([]);

    // Carregar dados do localStorage quando o componente é montado
    useEffect(() => {
        const storedFiles = localStorage.getItem("files");
        if (storedFiles) {
            setFiles(JSON.parse(storedFiles));
        }
    }, []);

    // Função para adicionar uma nova conta
    const addAccount = (newFile) => {
        const updatedFiles = [...files, newFile];
        setFiles(updatedFiles);

        // Salvar os dados no localStorage
        localStorage.setItem("files", JSON.stringify(updatedFiles));
    };

    return (
        <AccountabilityContext.Provider value={{ files, addAccount }}>
            {children}
        </AccountabilityContext.Provider>
    );
};
