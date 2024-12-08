import React from "react";
import { useFinancialContext } from "../contexts/FinancialContext";

const UserViewFinancial = () => {
  const { financialData, editAccount } = useFinancialContext();
  
  // Substitua essas variáveis pelos dados reais do usuário
  const userBlock = "A"; // Exemplo: "A"
  const userApartment = "101"; // Exemplo: "101"

  // Filtra os registros financeiros de acordo com o bloco e apartamento do usuário
  const userFinancials = financialData.filter(
    (entry) =>
      entry.block === `Bloco ${userBlock}` && entry.apartment === `Apartamento ${userApartment}`
  );

  // Função para alterar o status de pagamento
  const handleStatusChange = (id, currentStatus) => {
    const updatedStatus = currentStatus === "PAGAMENTO NÃO REALIZADO" ? "PAGAMENTO REALIZADO" : currentStatus;
    const updatedAccount = { ...financialData.find((account) => account.id === id), status: updatedStatus };
    editAccount(id, updatedAccount);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="text-center mb-8 p-4">
        <h1 className="text-3xl font-semibold text-teal-500">VILA PISANI</h1>
        <p className="text-gray-500">PERFIL DO USUÁRIO</p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Minhas Contas</h2>
      </header>

      <div className="bg-white rounded-lg shadow-lg p-6">
        {userFinancials.length === 0 ? (
          <div className="text-center">
            <img
              src="./emptybox.png"
              alt="No packages"
              className="w-36 mx-auto mb-4"
            />
            <p className="text-gray-600 text-lg">
              Não há contas disponíveis para o Bloco{" "}
              <strong>{userBlock}</strong> e Apartamento{" "}
              <strong>{userApartment}</strong>.
            </p>
          </div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Bloco</th>
                <th className="py-2 px-4 border-b">Apartamento</th>
                <th className="py-2 px-4 border-b">Descrição</th>
                <th className="py-2 px-4 border-b">Valor</th>
                <th className="py-2 px-4 border-b">Data</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Arquivo</th>
              </tr>
            </thead>
            <tbody>
              {userFinancials.map((record) => (
                <tr key={record.id}>
                  <td className="py-2 px-4 border-b">{record.block}</td>
                  <td className="py-2 px-4 border-b">{record.apartment}</td>
                  <td className="py-2 px-4 border-b">{record.description}</td>
                  <td className="py-2 px-4 border-b">R$ {record.amount}</td>
                  <td className="py-2 px-4 border-b">{record.date}</td>
                  <td className="py-2 px-4 border-b">
                    <span
                      className={`font-semibold ${
                        record.status === "PAGAMENTO REALIZADO"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {record.status}
                    </span>
                  </td>
                  <td className="py-2 px-4 border-b">
                    {record.file && record.file instanceof File ? (
                      <a
                        href={URL.createObjectURL(record.file)}
                        className="text-teal-500"
                        download
                      >
                        {record.file.name}
                      </a>
                    ) : (
                      <span className="text-gray-500">Nenhum arquivo</span>
                    )}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {record.status === "PAGAMENTO NÃO REALIZADO" && (
                      <button
                        onClick={() => handleStatusChange(record.id, record.status)}
                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                      >
                        Marcar como Pago
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default UserViewFinancial;
