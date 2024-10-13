import React from "react";
import EmployeeForm from "./EmployeeForm";
import VehicleForm from "./VehicleForm";
import ProfileForm from "./ProfileForm";
import { Forms } from "../../components/Forms";

export default function ApartmentRegistration() {
	const steps = [<EmployeeForm />, <VehicleForm />, <ProfileForm />];

	return (
		<Forms.Page
			steps={steps}
			imageSource="/funcionario-cadastro.jpg"
		/>
	);
}