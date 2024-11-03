import React, {useEffect} from "react";
import CondominiumForm from "./CondominiumForm";
import { Forms } from "../../components/Forms";
import AdminForm from "./AdminForm";
import usePageTitle from '../../utils/usePageTitle';

const formsTemplete = {
	condominium: {
		name: "",
		cnpj: "",
		blocks: "",
		floors: "",
	},
	admin: {
		name: "",
		cpf: "",
		email: "",
		password: "",
		confirm: "",
	},
}

// TODO Adicionar validação de CPF e CNPJ
// TODO Adicionar validação de email
// TODO Adicionar validação de senha
// TODO Adicionar a connexão com a API para enviar os dados

const formsTemplete = {
	condominium: {
		name: "",
		cnpj: "",
		blocks: "",
		floors: "",
	},
	employees: [],
}

export default function CondominiumRegistration() {
	const [data, setData] = React.useState(formsTemplete);
	const emptyFieldsCondominium = []
	const emptyFieldsAdmin = []
	// const [emptyFieldsCondominium, setEmptyFieldsCondominium] = React.useState({});
	// const [emptyFieldsAdmin, setEmptyFieldsAdmin] = React.useState({});

	usePageTitle("Cadastro de Condomínio");

	useEffect(() => {
		console.log(formsTemplete);
	},[data])
	
	function fieldsEmpty(fieldsData) {
		const fields = Object.keys(fieldsData)
		.filter(key => !fieldsData[key])
		.map(key => ({ [key]: 'Campo obrigatório' }));
		return fields;

	}
	function validateCondominiumForm()  {
		let fieldsErro;
		
		fieldsErro += fieldsEmpty(data.condominium);
		return fieldsErro.length === 0;
	}

	function validateAdminForm() {
		let fieldsErro;
		fieldsErro = fieldsEmpty(data.admin);
		return fieldsErro.length === 0;
	}

    const updateFieldHandler = (section, field, value) => {
        setData((prevData) => ({
            ...prevData,
            [section]: {
                ...prevData[section],
                [field]: value,
            },
        }));
    }
	
	const steps = [
		<CondominiumForm data={data.condominium} updateFieldHandler={updateFieldHandler} subtitle={data.condominium.name || "Nome do condominio"} />,
		<AdminForm data={data.admin} updateFieldHandler={updateFieldHandler} subtitle={data.condominium.name || "Nome do condominio"}/>
	];

	return (
		<Forms.Page
			steps={steps}
			imageSource="/condominium-registration.png"
			validations={[validateCondominiumForm(), validateAdminForm()]}
			callbak={() => console.log(data)}
		/>
	);
}
