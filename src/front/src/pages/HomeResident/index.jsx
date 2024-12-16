import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'; // Para navegação
import getMenuItems from '../../utils/getMenuItems';
import useAuthContext from '../../hooks/useAuthContext';

export default function HomePage() {
    const navigate = useNavigate();
    const { role, user } = useAuthContext()
    const icones = getMenuItems(role);
    
    const iconColorZinc = 'bg-zinc-100 text-gray-700'; 
    const iconColorPrimary = 'bg-primary-1000 text-white'; 

    let iconColor= iconColorZinc;



    function handleGetColor() {
        const color = iconColor;
        if (color === iconColorZinc)
            iconColor = iconColorPrimary;
        else
            iconColor = iconColorZinc;
        return color;
    }

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
                    {user.condominium}
                </div>

                {/* Textos alinhados na parte inferior direita */}
                <div className="absolute bottom-5 right-5 text-[#777777] text-sm">
                    {
                        (role === 'resident') ?
                        `Bloco {user.block}, Predio {user.unit}, Apartamento {user.apartament}`:
                        "Administrador"
                    }
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
            <div className="grid grid-cols-3 gap-20 p-6 w-fit mx-auto items-center justify-center">
                {
                    icones.map((icone) => (
                        <Link to={icone.to} key={icone.name} className={`flex flex-col items-center ${handleGetColor()} w-56 p-10 aspect-square`}>
                            {React.cloneElement(icone.icon, {className: "w-24 h-24", strokeWidth: 1})}
                            <span className="text-sm mt-2 text-center">{icone.name}</span>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};