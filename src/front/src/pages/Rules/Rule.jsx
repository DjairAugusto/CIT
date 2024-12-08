import React from 'react'
import DropMenu from '../../components/DropMenu';

export default function Rule({title, description, createdAt, updatedAt, fine}) {
	
	const formatDate = (dateString) => {
		const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' };
		return new Date(dateString).toLocaleDateString('pt-BR', options);
	};

	createdAt = formatDate(createdAt);
	updatedAt = formatDate(updatedAt);
	return (
		<DropMenu text={title}>
			<div className='p-5'>
				<p className='mb-5'>{description}</p>
				<div className='flex justify-between'>
					<div className='flex gap-5 text-zinc-400'>
						<p>Data de Criação: {createdAt}</p>
						<p>Data de Alteração: {updatedAt}</p>
					</div>
					{fine && <p>Multa: {fine}</p>}
				</div>
			</div>
		</DropMenu>
	)
}
