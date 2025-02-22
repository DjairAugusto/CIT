import React from 'react'
import {Forms} from "../../components/Forms";
import {PhoneCall} from "lucide-react";
import ConteinerOptions from "./ConteinerOptions";
import Axios from "../../utils/requisition/citRequisition"

// TODO integração dos contatos com o back
export default function ContactResident() {
	const [options, setOptions] = React.useState([])
	const [contacts, setContacts] = React.useState([])

	const getContacts = async () => {
		try {
			let response;
			response = await Axios.get('/condominium/contacts')
			setContacts(response.data);
		}
		catch(error) {
			console.error(error);
		}
	}

	React.useEffect(() => {
		const options = [
			{
				value: 'condominium',
				text: 'Condomínio'
			},
			{
				value: 'functionary',
				text: 'Funcionários'
			},
		]
		setOptions(options)
		getContacts()

	},[])
	
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
					(contacts.length > 0) &&
					contacts.map(contact => (<ConteinerOptions title={contact.location} options={contact.contacts}/>))
				}
			</div>
		</main>
	)
}
