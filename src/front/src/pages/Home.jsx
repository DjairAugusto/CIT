import React from "react";
import {Link} from "react-router-dom";

// TODO migrar o css da Home pro css do tailwind
export default function Home() {
    return (
        <>

            {/* Primeira Parte: Condomínio Inteligente */}
            <section className="hero-section flex justify-around items-center h-80 mt-16 relative" style={{backgroundColor: '#F6F8F7'}}>
                <img src="/condominiointeligentesolo.png" alt="Building" className=" w-3/12" />
                <img src="/prediohome.png" alt="Building" className="h-96 self-end relative bottom-0" />
            </section>

            {/* Espaçamento entre as seções */}
            <div style={{height: '50px', backgroundColor: 'transparent'}}></div>

            {/* Segunda Parte: About Us */}
            <section id="about" className="about-section" style={{padding: '50px 0', backgroundColor: '#F6F8F7', position: 'relative'}}>
                <div className="container" style={{maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'flex-start'}}>
                    {/* Mosaico à esquerda */}
                    <div style={{width: '50%', paddingRight: '20px', position: 'relative'}}>
                        {/* Imagem principal achatada */}
                        <div style={{marginBottom: '20px', zIndex: 1}}>
                            <img src="/predio1mosaico.png" alt="Mosaic 1" style={{width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px'}} />
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <img src="/predio2mosaico.png" alt="Mosaic 2" style={{width: '70%', height: '300px', objectFit: 'cover', borderRadius: '8px', marginRight: '10px'}} />
                            <img src="/predio3mosaico.png" alt="Mosaic 3" style={{width: '45%', height: '300px', objectFit: 'cover', borderRadius: '8px'}} />
                        </div>
                    </div>

                    {/* Texto à direita */}
                    <div style={{width: '50%', paddingLeft: '20px'}}>
                        <h3 className="font-light" style={{fontFamily: ' Work Sans, sans-serif', fontSize: '2.3rem', marginTop: '30px', marginBottom: '30px', textAlign: 'left'}}>Sobre Nós</h3>
                        <p className="font-light" style={{fontFamily: ' Work Sans, sans-serif', fontSize: '1.1rem', lineHeight: '1.5', marginTop: '20px', textAlign: 'justify'}}>
                            O CIT - Condomínio Inteligente é uma plataforma projetada para transformar a gestão de condomínios,
                            facilitando a comunicação e promovendo uma convivência harmoniosa entre moradores e administração.
                            Nosso objetivo é oferecer soluções inovadoras e práticas que simplifiquem os processos do dia a dia condominial,
                            garantindo maior eficiência e transparência.
                            <br /><br />
                            Com uma interface amigável, disponibilizamos funcionalidades como gestão financeira,
                            reserva de áreas comuns, gestão de entregas e encomendas, ouvidoria, comunicação centralizada, e entre outras que podem ser
                            conferidas na nossa seção&nbsp;
                            <Link
                                to="/HowWeWork"
                                style={{

                                    color: '#42d0b3',
                                    fontWeight: 'bold',
                                    cursor: 'pointer'
                                }}
                                onMouseOver={(e) => e.target.style.color = '#333'}
                                onMouseOut={(e) => e.target.style.color = '#42d0b3'}>
                                Como funciona.
                            </Link>
                            &nbsp;Queremos que cada morador se sinta parte de uma comunidade unida e bem administrada.
                        </p>
                    </div>
                </div>
            </section>

            {/* Espaçamento entre as seções */}
            <div style={{height: '50px', backgroundColor: 'transparent'}}></div>

            {/* Terceira Parte: Mosaico de Quadrados */}
            <section id="services" className="flex" style={{padding: '50px 0', backgroundColor: '#F6F8F7'}}>
                <div className="w-full" style={{maxWidth: '1200px', margin: '0 auto', textAlign: 'center'}}>
                    <h3 className="font-light" style={{fontSize: '2.3rem', marginBottom: '30px'}}>Serviços</h3>
                    <div className="items-center justify-items-center" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px'}}>
                        {/* 6 Quadrados com as imagens */}
                        <img src="/iconefinanceiro.png" alt="Serviço 1" style={{width: '60%', height: 'auto', borderRadius: '8px'}} />
                        <img src="/iconeareacomum.png" alt="Serviço 2" style={{width: '60%', height: 'auto', borderRadius: '8px'}} />
                        <img src="/iconeentregaseencomendas.png" alt="Serviço 3" style={{width: '60%', height: 'auto', borderRadius: '8px'}} />
                        <img src="/iconeachadoseperdidos.png" alt="Serviço 4" style={{width: '60%', height: 'auto', borderRadius: '8px'}} />
                        <img src="/iconeouvidoria.png" alt="Serviço 5" style={{width: '60%', height: 'auto', borderRadius: '8px'}} />
                        <img src="/iconecontatos.png" alt="Serviço 6" style={{width: '60%', height: 'auto', borderRadius: '8px'}} />
                    </div>
                </div>
            </section>

            {/* Espaçamento entre as seções */}
            <div style={{height: '50px', backgroundColor: 'transparent'}}></div>
        </>
    );

}
