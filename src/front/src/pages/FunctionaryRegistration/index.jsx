import React, { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import VehicleForm from "./VehicleForm";
import { Forms } from "../../components/Forms";

// TODO integração do registro de funcionário com o backs
// TODO fazer as validações do Forms.Page
export default function FunctionaryRegistration() {
	const steps = [<EmployeeForm />, <VehicleForm />];
	const validations = useState([]);

	return (
		<Forms.Page
			steps={steps}
			validations={validations}
			imageSource="/funcionario-cadastro.jpg"
		/>
	);
}