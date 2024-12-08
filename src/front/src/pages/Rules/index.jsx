import React from 'react'
import Title from '../../components/Title';
import Rule from './Rule';

const rules = [
	{
		title: "Uso da Piscina",
		description: "A piscina deve ser usada apenas pelos moradores e seus convidados.",
		createdAt: "2023-01-01 00:00:00",
		updatedAt: "2023-01-10 17:10:00",
		fine: "R$ 50,00"
	},
	{
		title: "Estacionamento",
		description: "Cada apartamento tem direito a uma vaga de estacionamento.",
		createdAt: "2023-02-01 00:00:00",
		updatedAt: "2023-02-15 17:10:00",
		fine: "R$ 100,00"
	},
	{
		title: "Silêncio",
		description: "O horário de silêncio é das 22h às 7h.",
		createdAt: "2023-03-01 00:00:00",
		updatedAt: "2023-03-05 17:10:00",
		fine: "R$ 200,00"
	},
	{
		title: "Animais de Estimação",
		description: "Animais de estimação devem estar sempre na coleira nas áreas comuns.",
		createdAt: "2023-04-01 00:00:00",
		updatedAt: "2023-04-10 17:10:00",
		fine: "R$ 150,00"
	},
	{
		title: "Lixo",
		description: "O lixo deve ser descartado nos locais apropriados.",
		createdAt: "2023-05-01 00:00:00",
		updatedAt: "2023-05-10 17:10:00",
		fine: "R$ 50,00"
	},
	{
		title: "Uso do Salão de Festas",
		description: "O salão de festas deve ser reservado com antecedência.",
		createdAt: "2023-06-01 00:00:00",
		updatedAt: "2023-06-15 17:10:00",
		fine: "R$ 300,00"
	},
	{
		title: "Reformas",
		description: "Reformas devem ser comunicadas ao síndico com 30 dias de antecedência.",
		createdAt: "2023-07-01 00:00:00",
		updatedAt: "2023-07-20 17:10:00",
		fine: "R$ 500,00"
	},
	{
		title: "Uso da Academia",
		description: "A academia deve ser usada apenas pelos moradores.",
		createdAt: "2023-08-01 00:00:00",
		updatedAt: "2023-08-10 17:10:00",
		fine: "R$ 100,00"
	},
	{
		title: "Portaria",
		description: "A portaria deve ser informada sobre a entrada de visitantes.",
		createdAt: "2023-09-01 00:00:00",
		updatedAt: "2023-09-05 17:10:00",
		fine: "R$ 50,00"
	},
	{
		title: "Uso das Áreas Comuns",
		description: "As áreas comuns devem ser mantidas limpas e organizadas.",
		createdAt: "2023-10-01 00:00:00",
		updatedAt: "2023-10-10 17:10:00",
		fine: null
	}
];

export default function index() {
	return (
		<main className='p-12 min-h-screen bg-primary-50'>
			<div className='mx-auto w-2/3 min-w-96 flex flex-col gap-10'>
				<Title title="Regras e Normas" subtitle="Nome do Comdominio" subsubtitle={"asd"}/>
				<div className='flex flex-col gap-5'>
					{rules.map((rule, index) => (
						<Rule key={index} title={`${index+1} - ${rule.title}`} description={rule.description} createdAt={rule.createdAt} updatedAt={rule.updatedAt} fine={rule.fine}/>
					))}
				</div>
			</div>
		</main>
	)
}
