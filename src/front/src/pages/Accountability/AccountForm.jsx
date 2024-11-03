import React from "react";
import MenuAccount from "./MenuAccount";

export default function AccountForm() {
    const files = [
        { id: 1, fileName: "Conta Manutenção Elevador", fileType: "PDF", fileUrl: "/path/to/your/pdf1.pdf", date: "20/07/2024" },
        { id: 2, fileName: "Conta Exemplo Exemplo", fileType: "PDF", fileUrl: "/path/to/your/pdf2.pdf", date: "19/07/2024" },
        { id: 3, fileName: "Conta Exemplo Exemplo", fileType: "PDF", fileUrl: "/path/to/your/pdf3.pdf", date: "10/02/2024" },
        { id: 4, fileName: "Conta Exemplo Exemplo", fileType: "PDF", fileUrl: "/path/to/your/pdf4.pdf", date: "12/01/2024" }
    ];

    return (
        <div className="flex h-full">
            <div className="flex-1 p-4">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold">Prestação de Contas</h1>
                    <p className="text-gray-500">Relatórios</p>
                </div>
                <div className="flex flex-col gap-4 bg-[#F3F3F3] rounded-[30px] p-6 mt-6">
                    {files.map((file) => (
                        <MenuAccount key={file.id} text={`${file.fileName} - Dia ${file.date}`}>
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
                                </div>
                            </div>
                        </MenuAccount>
                    ))}
                </div>
            </div>
        </div>
    );
}
