// FinancialForm.jsx
import React, { useState, useContext } from "react";
import MenuAccount from "./FinancialMenu";
import { Forms } from "../../components/Forms";
import { FinancialContext } from "../contexts/FinancialContext";

export default function AdminForm() {
    const { files, addAccount, deleteAccount, editAccount } = useContext(FinancialContext);

    const [isAddingNew, setIsAddingNew] = useState(false);
    const [newAccountData, setNewAccountData] = useState({
        file: null,
        fileName: "",
        date: "",
    });
    const [editId, setEditId] = useState(null);
    const [editFileName, setEditFileName] = useState("");
    const [editDate, setEditDate] = useState("");
    const [editFile, setEditFile] = useState(null);

    const handleAddNewAccount = () => {
        setIsAddingNew(true);
    };

    const handleSaveNewAccount = () => {
        if (!newAccountData.file) {
            alert("Por favor, adicione um arquivo PDF!");
            return;
        }

        const newFileWithUrl = {
            ...newAccountData,
            id: Date.now(),
            status: "PAGAMENTO NÃO REALIZADO",
            fileUrl: URL.createObjectURL(newAccountData.file), // URL temporária do arquivo
        };

        addAccount(newFileWithUrl);
        setIsAddingNew(false);
        setNewAccountData({ file: null, fileName: "", date: "" });
    };

    const handleEditClick = (id, fileName, date, file) => {
        setEditId(id);
        setEditFileName(fileName);
        setEditDate(date);
        setEditFile(file);
    };

    const saveEdit = (id) => {
        const updatedFile = {
            fileName: editFileName,
            date: editDate,
            file: editFile,
            fileUrl: editFile ? URL.createObjectURL(editFile) : undefined, // Se houver um novo arquivo, atualiza a URL
        };
        editAccount(id, updatedFile);
        setEditId(null);
        setEditFileName("");
        setEditDate("");
        setEditFile(null);
    };

    return (
        <div className="flex h-full">
            <div className="flex-1 p-4">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold">Financeiro (Admin)</h1>
                    <p className="text-gray-500">Contas Financeiras</p>
                </div>
                <div className="flex flex-col gap-4 bg-[#F3F3F3] rounded-[30px] p-6 mt-6">
                    <Forms.Button className="mt-4" onClick={handleAddNewAccount}>
                        Adicionar Nova Conta
                    </Forms.Button>

                    {isAddingNew && (
                        <div className="flex flex-col gap-2 mt-4 bg-white p-4 rounded-lg shadow">
                            <Forms.File
                                label="Arquivo PDF"
                                onChange={(file) => setNewAccountData({ ...newAccountData, file })}
                            />
                            <Forms.InputText
                                value={newAccountData.fileName}
                                onChange={(e) =>
                                    setNewAccountData({ ...newAccountData, fileName: e.target.value })
                                }
                                placeholder="Nome da Conta"
                            />
                            <Forms.InputText
                                type="date"
                                value={newAccountData.date}
                                onChange={(e) =>
                                    setNewAccountData({ ...newAccountData, date: e.target.value })
                                }
                                placeholder="Data"
                            />
                            <Forms.Button
                                className="mt-2 py-2 px-4 bg-green-500"
                                onClick={handleSaveNewAccount}
                            >
                                Salvar
                            </Forms.Button>
                        </div>
                    )}

                    {files.length > 0 ? (
                        files.map((file) => (
                            <MenuAccount key={file.id} text={file.fileName}>
                                <div className="flex flex-col gap-2">
                                    {file.id === editId ? (
                                        <>
                                            <Forms.InputText
                                                value={editFileName}
                                                onChange={(e) => setEditFileName(e.target.value)}
                                                placeholder="Nome da Conta"
                                            />
                                            <Forms.InputText
                                                type="date"
                                                value={editDate}
                                                onChange={(e) => setEditDate(e.target.value)}
                                                placeholder="Data"
                                            />
                                            <Forms.File
                                                label="Novo Arquivo PDF"
                                                onChange={(file) => setEditFile(file)}
                                            />
                                            <div className="flex gap-2 mt-2">
                                                <Forms.Button
                                                    className="bg-green-500 py-2 px-4"
                                                    onClick={() => saveEdit(file.id)}
                                                >
                                                    Salvar
                                                </Forms.Button>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="flex items-center gap-4 bg-[#FAFAFA] p-4 rounded-lg">
                                                <img src="/iconPDF.png" alt="PDF Icon" className="w-8 h-8" />
                                                <div className="flex flex-col">
                                                    <p className="text-sm text-gray-700">{file.fileType}</p>
                                                    <a
                                                        href={file.fileUrl}
                                                        download
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-500 hover:underline"
                                                    >
                                                        Visualizar/Download
                                                    </a>
                                                    <p className="text-sm text-gray-700">Data: {file.date}</p>
                                                    <p className="text-sm text-red-500">{file.status}</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2 mt-2">
                                                <Forms.Button
                                                    className="bg-green-500 py-2 px-4"
                                                    onClick={() => handleEditClick(file.id, file.fileName, file.date, file.file)}
                                                >
                                                    Editar
                                                </Forms.Button>
                                                <Forms.Button
                                                    className="bg-green-500 py-2 px-4"
                                                    onClick={() => deleteAccount(file.id)}
                                                >
                                                    Apagar
                                                </Forms.Button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </MenuAccount>
                        ))
                    ) : (
                        <div>
                        <img
                          src="./emptybox.png"
                          alt="No packages"
                          className="mx-auto mb-5"
                        />
                        <p className="text-gray-600">Oops, sem contas em seu nome.</p>
                      </div>
                    )}
                </div>
            </div>
        </div>
    );
}