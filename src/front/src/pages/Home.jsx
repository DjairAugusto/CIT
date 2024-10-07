import React from "react";

export default function Home() {
	return (
		<>

	  {/* Primeira Parte: Condomínio Inteligente */}
	  <section className="hero-section" style={{ backgroundColor: '#F0F0F0', padding: '50px 0', position: 'relative', overflow: 'hidden' }}>
                <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto' }}>
                    <div className="text-content" style={{ zIndex: 1, maxWidth: '50%' }}>
                        <h1 style={{ fontFamily: 'Solway, sans-serif', fontSize: '3rem', color: '#42d0b3', margin: 0 }}>CONDOMÍNIO</h1>
                        <h2 style={{
                            fontFamily: 'Montserrat, sans-serif',
                            fontSize: '2.5rem',
                            color: '#000',
                            margin: '5px 0 0 0',
                            letterSpacing: '0.1rem',
                            textAlign: 'left'
                        }}>INTELIGENTE</h2>
                    </div>
                    <div className="image-container" style={{ position: 'absolute', right: '-100px', top: '-30px', width: '55%', zIndex: 0 }}>
                        <img src="/prediohome.png" alt="Building" style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>
            </section>

            {/* Espaçamento entre as seções */}
            <div style={{ height: '50px', backgroundColor: 'transparent' }}></div>

            {/* Segunda Parte: About Us */}
            <section className="about-section" style={{ padding: '50px 0', backgroundColor: '#F0F0F0', position: 'relative' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'flex-start' }}>
                    {/* Mosaico à esquerda */}
                    <div style={{ width: '50%', paddingRight: '20px', position: 'relative' }}>
                        {/* Imagem principal achatada */}
                        <div style={{ marginBottom: '20px', zIndex: 1 }}>
                            <img src="/predio1mosaico.png" alt="Mosaic 1" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <img src="/predio2mosaico.png" alt="Mosaic 2" style={{ width: '70%', height: '300px', objectFit: 'cover', borderRadius: '8px', marginRight: '10px' }} />
                            <img src="/predio3mosaico.png" alt="Mosaic 3" style={{ width: '45%', height: '300px', objectFit: 'cover', borderRadius: '8px' }} />
                        </div>
                    </div>

                    {/* Texto à direita */}
                    <div style={{ width: '50%', paddingLeft: '20px' }}>
                        <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '2.5rem', marginBottom: '20px', textAlign: 'left' }}>Sobre Nós</h3>
                        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.2rem', lineHeight: '1.5', marginTop: '20px', textAlign: 'left' }}>
                            Somos uma plataforma dedicada a transformar a experiência de viver em condomínio. Nossa missão é
                            proporcionar soluções inovadoras que promovam a convivência harmoniosa entre os moradores, facilitando
                            a comunicação e a gestão dos serviços. Com uma interface amigável e funcionalidades práticas,
                            buscamos garantir que cada residente se sinta parte de uma comunidade unida e eficiente.
                            <br/><br/>
                            Nossos serviços incluem gestão financeira, agendamento de reuniões, e uma série de outras
                            facilidades que tornam o dia a dia dos condomínios mais organizado e sustentável. Estamos
                            comprometidos em trazer o melhor para o seu lar, investindo continuamente em tecnologia e
                            inovação para atender as necessidades dos nossos clientes.
                        </p>
                    </div>
                </div>
            </section>

             {/* Espaçamento entre as seções */}
            <div style={{ height: '50px', backgroundColor: 'transparent' }}></div>

{/* Terceira Parte: Mosaico de Quadrados */}
<section className="flex" style={{ padding: '50px 0', backgroundColor: '#F0F0F0' }}>
    <div className="w-full" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '2rem', marginBottom: '30px' }}>Serviços</h3>
        <div className="items-center justify-items-center" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            {/* 6 Quadrados com as imagens */}
            <img src="/iconefinanceiro.png" alt="Serviço 1" style={{ width: '60%', height: 'auto', borderRadius: '8px' }} />
            <img src="/iconeassembleia.png" alt="Serviço 2" style={{ width: '60%', height: 'auto', borderRadius: '8px' }} />
            <img src="/iconeentregaseencomendas.png" alt="Serviço 3" style={{ width: '60%', height: 'auto', borderRadius: '8px' }} />
            <img src="/iconeachadoseperdidos.png" alt="Serviço 4" style={{ width: '60%', height: 'auto', borderRadius: '8px' }} />
            <img src="/iconeouvidoria.png" alt="Serviço 5" style={{ width: '60%', height: 'auto', borderRadius: '8px' }} />
            <img src="/iconecontatos.png" alt="Serviço 6" style={{ width: '60%', height: 'auto', borderRadius: '8px' }} />
        </div>
    </div>
</section>


             {/* Espaçamento entre as seções */}
			 <div style={{ height: '50px', backgroundColor: 'transparent' }}></div>


			{/* Última Parte: Rodapé */}
			<footer className="footer-section" style={{ backgroundColor: '#333', padding: '30px 0', textAlign: 'center', color: '#fff' }}>
    			<div className="w-full" style={{ widget: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        			<img src="/simbolofooter.png" alt="Footer Icon" style={{ width: '100px', height: 'auto' }} />
    			</div>
			</footer>

	

	</>
	);

}
