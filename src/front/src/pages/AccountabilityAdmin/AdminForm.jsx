import React, { useState } from "react";
import MenuAccount from "./MenuAccount"; // Importe o componente MenuAccount
import FileInput from "../../components/Forms/FileInput"; // Importe o componente FileInput
import FormsButton from "../../components/Forms/FormsButton"; // Importe o componente FormsButton
import FormsInputText from "../../components/Forms/FormsInputText"; // Importe o componente FormsInputText

export default function AdminForm() {
    const [files, setFiles] = useState([
        { id: 1, fileName: "Conta Exemplo", fileType: "PDF", fileUrl: "/path/to/your/pdf1.pdf" },
    ]);

    const addAccount = () => {
        const newId = files.length ? files[files.length - 1].id + 1 : 1;
        setFiles([...files, { id: newId, fileName: "Nova Conta", fileType: "PDF", fileUrl: "" }]);
    };

    const deleteAccount = (id) => {
        setFiles(files.filter(file => file.id !== id));
    };

    const [editId, setEditId] = useState(null);
    const [editFileName, setEditFileName] = useState("");

    const handleEditClick = (id, fileName) => {
        setEditId(id);
        setEditFileName(fileName);
    };

    const saveEdit = (id) => {
        setFiles(files.map(file => file.id === id ? { ...file, fileName: editFileName } : file));
        setEditId(null);
        setEditFileName("");
    };

    return (
        <div className="flex h-full">
            <div className="flex-1 p-4">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold">Prestação de Contas</h1>
                    <p className="text-gray-500">Relatórios</p>
                </div>
                <div className="flex flex-col gap-4 bg-[#F3F3F3] rounded-[30px] p-6 mt-6">
                    <FormsButton className="mt-4" onClick={addAccount}>Adicionar Nova Conta</FormsButton>
                    {files.map((file) => (
                        <MenuAccount key={file.id} text={file.id === editId ? (
                            <FormsInputText
                                value={editFileName}
                                onChange={(e) => setEditFileName(e.target.value)}
                                placeholder="Nome da Conta"
                            />
                        ) : (
                            `${file.fileName}`
                        )}>
                            <FileInput />
                            <div className="flex gap-2 mt-2">
                                {file.id === editId ? (
                                    <FormsButton className="bg-green-500" onClick={() => saveEdit(file.id)}>Salvar</FormsButton>
                                ) : (
                                    <>
                                        <FormsButton className="500" onClick={() => deleteAccount(file.id)}>Apagar</FormsButton>
                                        <FormsButton className="500" onClick={() => handleEditClick(file.id, file.fileName)}>Editar</FormsButton>
                                    </>
                                )}
                            </div>
                        </MenuAccount>
                    ))}
                </div>
            </div>
        </div>
    );
}
