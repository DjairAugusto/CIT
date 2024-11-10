import React from "react";
import EmployeeForm from "./EmployeeForm";
import VehicleForm from "./VehicleForm";
import { Forms } from "../../components/Forms";

// TODO integração do registro de funcionário com o backs
export default function FunctionaryRegistration() {
	const steps = [<EmployeeForm />, <VehicleForm />];

	return (
		<Forms.Page
			steps={steps}
			imageSource="/funcionario-cadastro.jpg"
		/>
	);
}