import React from "react";
import EmployeeForm from "./EmployeeForm";
import VehicleForm from "./VehicleForm";
import { Forms } from "../../components/Forms";

export default function ApartmentRegistration() {
	const steps = [<EmployeeForm />, <VehicleForm />];

	return (
		<Forms.Page
			steps={steps}
			imageSource="/funcionario-cadastro.jpg"
		/>
	);
}