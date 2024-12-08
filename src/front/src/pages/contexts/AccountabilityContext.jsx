import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

// Crie o AccountabilityContext
export const AccountabilityContext = createContext();

// TODO fazer a integração do AccountabilityContext com o back
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
        const newFileWithId = { ...newFile, id: uuidv4() }; // Gera um id único
        const updatedFiles = [...files, newFileWithId];
        setFiles(updatedFiles);
        localStorage.setItem("files", JSON.stringify(updatedFiles));
    };
    // Função para deletar uma conta existente
    const deleteAccount = (id) => {
        const updatedFiles = files.filter((file) => file.id !== id);
        setFiles(updatedFiles);

        // Atualizar o localStorage
        localStorage.setItem("files", JSON.stringify(updatedFiles));
    };

    // Função para editar uma conta existente
    const editAccount = (id, updatedFile) => {
        const updatedFiles = files.map((file) => 
            file.id === id ? { ...file, ...updatedFile } : file
        );
        setFiles(updatedFiles);

        // Atualizar o localStorage
        localStorage.setItem("files", JSON.stringify(updatedFiles));
    };

    return (
        <AccountabilityContext.Provider value={{ files, addAccount, deleteAccount, editAccount }}>
            {children}
        </AccountabilityContext.Provider>
    );
};
