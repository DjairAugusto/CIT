import React from 'react'
import { Forms } from "../components/Forms";

export default function Login() {
	return (
		
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F0F0F0' }}>
            {/* Seção da esquerda - Formulário de Login */}
            <div style={{ 
                maxWidth: '400px', 
                width: '100%', 
                padding: '20px', 
                margin: 'auto', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center' 
            }}>
                {/* Logo - Ajuste de posição */}
                <div style={{ 
                    alignSelf: 'flex-start', 
                    marginBottom: '20px',
                    marginTop: '10px', // Aqui você pode aumentar a margem para ajustar a altura
                    marginLeft: '10px'  // Aqui você pode aumentar a margem para ajustar a posição horizontal
                }}>
                    <img src="componentehorizontal.png" alt="Logo Condomínio Inteligente" style={{ width: '200px', height: 'auto' }} />
                </div>
                
                <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '2rem', marginBottom: '20px', textAlign: 'center' }}>Login</h2>
                
                {/* Campo de Email */}
                <div style={{ marginBottom: '15px', width: '100%' }}>
                    <Forms.InputText 
                        placeholder="E-mail"
                        required
                        style={{ width: '100%', padding: '10px', borderRadius: '4px' }}
                    />
                </div>
                
                {/* Campo de Senha */}
                <div style={{ marginBottom: '15px', width: '100%' }}>
                    <Forms.InputText 
                        type="password"
                        placeholder="Senha"
                        required
                        style={{ width: '100%', padding: '10px', borderRadius: '4px'}}
                    />
                </div>

                {/* Botão de Login */}
                <div style={{ marginTop: '20px', width: '100%' }}>
                    <Forms.Button
                        style={{
                            width: '100%',
                            padding: '10px',
                            backgroundColor: '#42d0b3',
                            color: '#fff',
                            fontFamily: 'Montserrat, sans-serif',
                            fontSize: '1rem',
                            borderRadius: '4px',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        ENTRAR
                    </Forms.Button>
                </div>
            </div>

            {/* Seção da direita - Imagem preenchendo metade da tela */}
            <div style={{ width: '50%', height: '100vh', overflow: 'hidden' }}>
                <img src="predio3mosaico.png" alt="Imagem do Prédio" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
        </div>
	);
}
