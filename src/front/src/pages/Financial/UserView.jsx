import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import UserMenu from "./UserMenu";

export default function UserView() {
    const { files, togglePaymentStatus } = useContext(UserContext);

    return (
        <div className="flex h-full">
            <div className="flex-1 p-4">
                <header className="text-center mb-8 p-4">
                    <h1 className="text-3xl font-semibold" style={{ color: "#42D0B3" }}>VILA PISANI</h1>
                    <p className="text-gray-500">PERFIL USUÁRIO</p>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Minhas Contas</h2>
                </header>
                <div className="flex flex-col gap-4 bg-[#F3F3F3] rounded-[30px] p-6 mt-6">
                    {files.length > 0 ? (
                        files.map((file) => (
                            <UserMenu key={file.id} text={file.fileName}>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-4 bg-[#FAFAFA] p-4 rounded-lg">
                                        <img src="/iconPDF.png" alt="PDF Icon" className="w-8 h-8" />
                                        <div className="flex flex-col">
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
                                            <p
                                                className={`text-sm ${
                                                    file.status === "PAGAMENTO REALIZADO"
                                                        ? "text-green-500"
                                                        : "text-red-500"
                                                }`}
                                            >
                                                {file.status}
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                                        onClick={() => togglePaymentStatus(file.id)}
                                    >
                                        {file.status === "PAGAMENTO NÃO REALIZADO"
                                            ? "Marcar como Pago"
                                            : "Cancelar Pagamento"}
                                    </button>
                                </div>
                            </UserMenu>
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full mt-4">
                            <img
                                src="./emptybox.png"
                                alt="No packages"
                                className="mx-auto mb-5"
                            />
                            <p className="text-gray-600 text-center">Nenhuma conta encontrada.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
