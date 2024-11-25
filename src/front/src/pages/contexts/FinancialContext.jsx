// FinancialContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const FinancialContext = createContext();

export const FinancialProvider = ({ children }) => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const storedFiles = localStorage.getItem("financialFiles");
        if (storedFiles) {
            setFiles(JSON.parse(storedFiles));
        }
    }, []);

    const addAccount = (newFile) => {
        const updatedFiles = [...files, newFile];
        setFiles(updatedFiles);
        localStorage.setItem("financialFiles", JSON.stringify(updatedFiles));
    };

    const deleteAccount = (id) => {
        const updatedFiles = files.filter((file) => file.id !== id);
        setFiles(updatedFiles);
        localStorage.setItem("financialFiles", JSON.stringify(updatedFiles));
    };

    const editAccount = (id, updatedFile) => {
        const updatedFiles = files.map((file) =>
            file.id === id ? { ...file, ...updatedFile } : file
        );
        setFiles(updatedFiles);
        localStorage.setItem("financialFiles", JSON.stringify(updatedFiles));
    };

    return (
        <FinancialContext.Provider value={{ files, addAccount, deleteAccount, editAccount }}>
            {children}
        </FinancialContext.Provider>
    );
};
