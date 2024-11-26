import React, { useState, useContext } from "react";
import MenuAccount from "./MenuAccount";
import { Forms } from "../../components/Forms";
import { AccountabilityContext } from "../contexts/AccountabilityContext"; // Usa o AccountabilityContext

export default function AdminForm() {
    const { files, addAccount, deleteAccount, editAccount } = useContext(AccountabilityContext); // Renomeie updateAccount para editAccount

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

    const saveEdit = () => {
        // Atualizar apenas o item sendo editado
        editAccount(editId, { fileName: editFileName, date: newAccountData.date });
        setEditId(null);
        setEditFileName("");
        setNewAccountData({ file: null, fileName: "", date: "" }); // Reseta os dados temporários
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
                {/* Cabeçalho */}
      <header className="text-center mb-8 p-4">
        <h1 className="text-3xl font-semibold" style={{ color: '#42D0B3' }}>VILA PISANI</h1>
        <p className="text-gray-500">PERFIL PRINCIPAL</p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Prestação de Contas</h2>
      </header>
                <div className="flex flex-col gap-4 bg-[#F3F3F3] rounded-[30px] p-6 mt-6">
                    <Forms.Button className="mt-4" onClick={handleAddNewAccount}>Adicionar Nova Conta</Forms.Button>

                    {isAddingNew && (
                        <div className="flex flex-col gap-2 mt-4 bg-white p-4 rounded-lg shadow">
                            <Forms.File
                                label="Arquivo PDF"
                                onChange={(file) => setNewAccountData({ ...newAccountData, file })}
                            />
                            <Forms.InputText
                                value={newAccountData.fileName}
                                onChange={(e) => setNewAccountData({ ...newAccountData, fileName: e.target.value })}
                                placeholder="Nome da Conta"
                            />
                            <Forms.InputText
                                type="date"
                                value={newAccountData.date}
                                onChange={(e) => setNewAccountData({ ...newAccountData, date: e.target.value })}
                                placeholder="Data"
                            />
                            <Forms.Button className="mt-2 py-2 px-4 bg-green-500" onClick={handleSaveNewAccount}>Salvar</Forms.Button>
                        </div>
                    )}

<div className="flex flex-col gap-4 bg-[#F3F3F3] rounded-[30px] p-6 mt-6">
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
                                    value={newAccountData.date}
                                    onChange={(e) =>
                                        setNewAccountData({
                                            ...newAccountData,
                                            date: e.target.value,
                                        })
                                    }
                                    placeholder="Data"
                                />
                                <div className="flex gap-2 mt-2">
                                    <Forms.Button
                                        className="bg-green-500 py-2 px-4"
                                        onClick={saveEdit} // Apenas salva as mudanças do item editado
                                    >
                                        Salvar
                                    </Forms.Button>
                                    <Forms.Button
                                        className="bg-gray-300 py-2 px-4"
                                        onClick={() => setEditId(null)} // Cancela a edição
                                    >
                                        Cancelar
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
                                    </div>
                                </div>
                                <div className="flex gap-2 mt-2">
                                    <Forms.Button
                                        className="bg-green-500 py-2 px-4"
                                        onClick={() => handleEditClick(file.id, file.fileName)}
                                    >
                                        Editar
                                    </Forms.Button>
                                    <Forms.Button
                                        className="bg-red-500 py-2 px-4"
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
            <p className="text-gray-600">Oops, sem consta disponíveis.</p>
          </div>
        )}
    </div>
</div>
</div>
</div>
);
}