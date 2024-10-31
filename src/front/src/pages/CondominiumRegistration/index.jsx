import React from "react";
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

// TODO Não permitir avançar se os campos não estiverem preenchidos
// TODO Adicionar validação de CPF e CNPJ
// TODO Adicionar validação de email
// TODO Adicionar validação de senha
// TODO Adicionar a connexão com a API para enviar os dados

export default function CondominiumRegistration() {
	const [data, setData] = React.useState(formsTemplete);

    usePageTitle("Cadastro de Condomínio");

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
		<CondominiumForm data={data.condominium} updateFieldHandler={updateFieldHandler}  subtitle={data.condominium.name || "Nome do condominio"}/>,
		<AdminForm data={data.admin} updateFieldHandler={updateFieldHandler} subtitle={data.condominium.name || "Nome do condominio"} />];

	return (
		<Forms.Page
			steps={steps}
			imageSource="/condominium-registration.png"
			data={data}
		/>
	);
}
