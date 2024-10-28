import React from 'react'
import {Forms} from "../../components/Forms";
import {PhoneCall} from "lucide-react";
import ConteinerOptions from "./ConteinerOptions";

export default function ContactResident() {
	const options = [
		{
			value: '1',
			text: 'Áreas Comuns',
		}
	]
	const optionConteiner = [
		{
			title: 'Áreas Comuns',
			contect: [
				{
					type: 'phone',
					value: '(21) 99999-9999',
				}
			]
		},
				{
			title: 'Áreas Comuns',
			contect: [
				{
					type: 'phone',
					value: '(21) 99999-9999',
				}
			]
		},
						{
			title: 'Áreas Comuns',
			contect: [
				{
					type: 'phone',
					value: '(21) 99999-9999',
				}
			]
		},
								{
			title: 'Áreas Comuns',
			contect: [
				{
					type: 'phone',
					value: '(21) 99999-9999',
				}
			]
		},
		{
			title: 'Áreas Comuns',
			contect: [
				{
					type: 'phone',
					value: '(21) 99999-9999',
				}
			]
		},
		{
			title: 'Áreas Comuns',
			contect: [
				{
					type: 'phone',
					value: '(21) 99999-9999',
				}
			]
		},
		{
			title: 'Áreas Comuns',
			contect: [
				{
					type: 'phone',
					value: '(21) 99999-9999',
				}
			]
		},
		{
			title: 'Áreas Comuns',
			contect: [
				{
					type: 'phone',
					value: '(21) 99999-9999',
				}
			]
		},
		{
			title: 'Áreas Comuns',
			contect: [
				{
					type: 'phone',
					value: '(21) 99999-9999',
				}
			]
		},
	]
	return (
		<main className='p-10 flex flex-col gap-8'>
			<h1 className='flex text-2xl items-center'>
				<PhoneCall className="mr-10" color="#42D0B3" fill="#42D0B3"/>
				Contatos
			</h1>
			<div className='w-1/2'>
				<Forms.Select options={options} />
			</div>
			<div className='flex flex-row flex-wrap justify-around'>
				{
					optionConteiner.map(option => (
						<ConteinerOptions title={option.title} options={option.contect}/>
					))
				}
			</div>
		</main>
	)
}
