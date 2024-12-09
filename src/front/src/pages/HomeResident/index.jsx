import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'; // Para navegação
import Header from '../../components/Header'; // Mantendo o Header

export default function HomePage() {
    const navigate = useNavigate();

    // Estado dos avisos (true = não lido, false = lido)
    const [avisos, setAvisos] = useState([
        {id: 1, text: 'Elevador lado 02 danificado até 20/07', isUnread: true},
        {id: 2, text: 'Data da assembleia obrigatória marcada', isUnread: true},
        {id: 3, text: 'Confira a proposta do síndico para a área da piscina reformada', isUnread: true},
    ]);

    // Função para clicar no aviso
    const handleAvisoClick = (id) => {
        // Atualiza o estado do aviso para lido
        setAvisos((prevAvisos) =>
            prevAvisos.map((aviso) =>
                aviso.id === id ? {...aviso, isUnread: false} : aviso
            )
        );
        // Redireciona para outra página
        navigate(`/aviso/${id}`);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}

            {/* Faixa superior */}
            <div className="bg-[#F6F8F7] px-8 py-6 relative h-32">
                {/* Textos alinhados na parte superior esquerda */}
                <div className="absolute top-5 left-5 text-[#777777] text-sm">
                    Você está acessando
                </div>

                <div className="absolute top-10 left-1/4 text-[#42d0b3] text-3xl font-light font-solway">
                    VILA PISANI
                </div>

                {/* Textos alinhados na parte inferior direita */}
                <div className="absolute bottom-5 right-5 text-[#777777] text-sm">
                    Bloco B, Apartamento 302
                </div>
            </div>


            {/* Mural de Avisos */}
            <div className="p-6">
                <h2 className="text-lg font-bold text-gray-700 mb-4">Mural de Avisos</h2>
                <div className="bg-white shadow-md rounded-md p-4 overflow-y-auto max-h-48 border border-gray-200">
                    {avisos.map((aviso) => (
                        <div
                            key={aviso.id}
                            className={`flex items-center mb-3 cursor-pointer rounded-md p-2 ${aviso.isUnread ? 'bg-[#F0FFF4] hover:bg-[#D9F6E3]' : 'hover:bg-gray-100'
                                }`}
                            onClick={() => handleAvisoClick(aviso.id)}
                        >
                            {aviso.isUnread && (
                                <div className="w-3 h-3 bg-[#42d0b3] rounded-full mr-2"></div>
                            )}
                            <span className="text-sm text-gray-600">{aviso.text}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Ícones principais */}
            <div className="grid grid-cols-3 gap-y-8 gap-x-6 p-6">
                <a href="/financeiro" className="flex flex-col items-center">
                    <img src="/iconefinanceiro.png" alt="Financeiro" className="w-60 h-60" />
                </a>
                <a href="/contatos" className="flex flex-col items-center">
                    <img src="/iconecontatos.png" alt="Contatos" className="w-60 h-60" />
                </a>
                <a href="/assembleias" className="flex flex-col items-center">
                    <img src="/iconeassembleias.png" alt="Assembleias" className="w-60 h-60" />
                </a>
                <a href="/prestacao-de-contas" className="flex flex-col items-center">
                    <img
                        src="/iconeprestacaodecontas.png"
                        alt="Prestação de Contas"
                        className="w-60 h-60"
                    />
                </a>
                <a href="/visitantes" className="flex flex-col items-center">
                    <img src="/iconevisitantes.png" alt="Visitantes" className="w-60 h-60" />
                </a>
                <a href="/achados-e-perdidos" className="flex flex-col items-center">
                    <img
                        src="/iconeachadoseperdidos.png"
                        alt="Achados e Perdidos"
                        className="w-60 h-60"
                    />
                </a>
                <a href="/entregas-e-encomendas" className="flex flex-col items-center">
                    <img
                        src="/iconeentregaseencomendas.png"
                        alt="Entregas e Encomendas"
                        className="w-60 h-60"
                    />
                </a>
                <a href="/area-comum" className="flex flex-col items-center">
                    <img src="/iconeareacomum.png" alt="Área Comum" className="w-60 h-60" />
                </a>
                <a href="/ouvidoria" className="flex flex-col items-center">
                    <img src="/iconeouvidoria.png" alt="Ouvidoria" className="w-60 h-60" />
                </a>
                <a href="/regras-e-normas" className="flex flex-col items-center">
                    <img
                        src="/iconeregrasenormas.png"
                        alt="Regras e Normas"
                        className="w-60 h-60"
                    />
                </a>
            </div>
        </div>
    );
};