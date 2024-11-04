import React, { useState, useContext } from "react";
import MenuAccount from "./MenuAccount";
import FileInput from "../../components/Forms/FileInput";
import FormsButton from "../../components/Forms/FormsButton";
import FormsInputText from "../../components/Forms/FormsInputText";
import { AccountabilityContext } from "../contexts/AccountabilityContext"; // Usa o AccountabilityContext

export default function AdminForm() {
    const { files, addAccount, deleteAccount, updateAccount } = useContext(AccountabilityContext);

    const [editId, setEditId] = useState(null);
    const [editFileName, setEditFileName] = useState("");
    const [isAddingNew, setIsAddingNew] = useState(false);
    const [newAccountData, setNewAccountData] = useState({
        file: null,
        fileName: "",
        date: "",
    });

    const handleEditClick = (id, fileName) => {
        setEditId(id);
        setEditFileName(fileName);
    };

    const saveEdit = (id) => {
        updateAccount(id, editFileName);
        setEditId(null);
        setEditFileName("");
    };

    const handleAddNewAccount = () => {
        setIsAddingNew(true);
    };

    const handleSaveNewAccount = () => {
        addAccount(newAccountData); // Adiciona nova conta no contexto
        setIsAddingNew(false);
        setNewAccountData({ file: null, fileName: "", date: "" });
    };

    return (
        <div className="flex h-full">
            <div className="flex-1 p-4">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold">Prestação de Contas (Admin)</h1>
                    <p className="text-gray-500">Relatórios</p>
                </div>
                <div className="flex flex-col gap-4 bg-[#F3F3F3] rounded-[30px] p-6 mt-6">
                    <FormsButton className="mt-4" onClick={handleAddNewAccount}>Adicionar Nova Conta</FormsButton>

                    {isAddingNew && (
                        <div className="flex flex-col gap-2 mt-4 bg-white p-4 rounded-lg shadow">
                            <FileInput
                                label="Arquivo PDF"
                                onChange={(file) => setNewAccountData({ ...newAccountData, file })}
                            />
                            <FormsInputText
                                value={newAccountData.fileName}
                                onChange={(e) => setNewAccountData({ ...newAccountData, fileName: e.target.value })}
                                placeholder="Nome da Conta"
                            />
                            <FormsInputText
                                type="date"
                                value={newAccountData.date}
                                onChange={(e) => setNewAccountData({ ...newAccountData, date: e.target.value })}
                                placeholder="Data"
                            />
                            <FormsButton className="mt-2 py-2 px-4 bg-green-500" onClick={handleSaveNewAccount}>Salvar</FormsButton>
                        </div>
                    )}

                    {files.length > 0 ? (
                        files.map((file) => (
                            <MenuAccount key={file.id} text={file.fileName}>
                                <div className="flex flex-col gap-2">
                                    {file.id === editId ? (
                                        <>
                                            <FormsInputText
                                                value={editFileName}
                                                onChange={(e) => setEditFileName(e.target.value)}
                                                placeholder="Nome da Conta"
                                            />
                                            <FormsInputText
                                                type="date"
                                                value={file.date}
                                                onChange={(e) => updateAccount(file.id, e.target.value)}
                                            />
                                            <div className="flex gap-2 mt-2">
                                                <FormsButton
                                                    className="bg-green-500 py-2 px-4"
                                                    onClick={() => saveEdit(file.id)}
                                                >
                                                    Salvar
                                                </FormsButton>
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
                                                </div>
                                            </div>
                                            <div className="flex gap-2 mt-2">
                                                <FormsButton
                                                    className="bg-green-500 py-2 px-4"
                                                    onClick={() => handleEditClick(file.id, file.fileName)}
                                                >
                                                    Editar
                                                </FormsButton>
                                                <FormsButton
                                                    className="bg-green-500 py-2 px-4"
                                                    onClick={() => deleteAccount(file.id)}
                                                >
                                                    Apagar
                                                </FormsButton>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </MenuAccount>
                        ))
                    ) : (
                        <p>Nenhuma conta disponível.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
