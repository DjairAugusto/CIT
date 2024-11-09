import React, { useContext } from "react";
import MenuAccount from "./MenuAccount";
import { AccountabilityContext } from "../contexts/AccountabilityContext"; // Usa o AccountabilityContext

export default function AccountForm() {
    const { files } = useContext(AccountabilityContext); // Obtenha as contas do contexto

    return (
        <div className="flex h-full">
            <div className="flex-1 p-4">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold">Prestação de Contas</h1>
                    <p className="text-gray-500">Relatórios</p>
                </div>
                <div className="flex flex-col gap-4 bg-[#F3F3F3] rounded-[30px] p-6 mt-6">
                    {files.length > 0 ? (
                        files.map((file) => (
                            <MenuAccount key={file.id} text={file.fileName}>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-4 bg-[#FAFAFA] p-4 rounded-lg">
                                        <img src="/iconPDF.png" alt="PDF Icon" className="w-8 h-8" />
                                        <div className="flex flex-col">
                                            <p className="text-sm text-gray-700">Tipo: {file.fileType}</p>
                                            <a
                                                href={file.fileUrl} // URL do arquivo PDF
                                                download={file.fileName} // Garante o download do arquivo com o nome correto
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 hover:underline"
                                            >
                                                Visualizar/Download
                                            </a>
                                            <p className="text-sm text-gray-700">Data: {file.date}</p>
                                        </div>
                                    </div>
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
