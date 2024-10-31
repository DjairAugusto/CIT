import React from "react";
import CondominiumForm from "./CondominiumForm";
import { Forms } from "../../components/Forms";
import AdminForm from "./AdminForm";

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

export default function CondominiumRegistration() {
	const [data, setData] = React.useState(formsTemplete);

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
