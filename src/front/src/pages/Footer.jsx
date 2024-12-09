import React from 'react';

export default function Footer() {
	return (
		<section id="footer" className="footer-section" style={{backgroundColor: '#333', padding: '30px 0', color: '#fff'}}>
			<div className="w-full" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px'}}>
				<div style={{display: 'flex', alignItems: 'center'}}>
					<img src="/componentehorizontalbranco.png" alt="Footer Icon" style={{width: '260px', height: 'auto'}} />
				</div>
				<div style={{textAlign: 'right'}}>
					<p style={{margin: 0, fontSize: '0.9rem', fontFamily: 'Work Sans, sans-serif'}}>Contato: SAC - 31 3222-0874</p>
					<p style={{margin: 0, fontSize: '0.9rem', fontFamily: 'Work Sans, sans-serif'}}>E-mail: condominiointeligente@cit.com.br</p>
				</div>
			</div>
		</section>
	);
}
