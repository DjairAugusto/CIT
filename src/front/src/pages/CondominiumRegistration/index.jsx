import React from "react";
import CondominiumForm from "./CondominiumForm";
import EmployeesForm from "./EmployeesForm";
import { Forms } from "../../components/Forms";

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

	const updateFieldHandler = (field, value) => {
		setData((prevData) => ({ ...prevData, [field]: value }));
	}
	
	const steps = [<CondominiumForm data={data} updateFieldHandler={updateFieldHandler} />, <EmployeesForm data={data} updateFieldHandler={updateFieldHandler}/>];

	return (
		<Forms.Page
			steps={steps}
			imageSource="/condominium-registration.png"
			data={data}
		/>
	);
}
