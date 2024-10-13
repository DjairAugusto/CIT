import React from "react";
import CondominiumForm from "./CondominiumForm";
import EmployeesForm from "./EmployeesForm";
import { Forms } from "../../components/Forms";

export default function CondominiumRegistration() {
	const steps = [<CondominiumForm />, <EmployeesForm />];

	return (
		<Forms.Page
			steps={steps}
			imageSource="/condominium-registration.png"
		/>
	);
}
