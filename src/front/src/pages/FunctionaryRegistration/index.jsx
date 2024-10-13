import React from "react";
import InhabitantForm from "./InhabitantForm";
import VehicleForm from "./VehicleForm";
import ProfileForm from "./ProfileForm";
import { Forms } from "../../components/Forms";

export default function ApartmentRegistration() {
	const steps = [<InhabitantForm />, <VehicleForm />, <ProfileForm />];

	return (
		<Forms.Page
			steps={steps}
			imageSource="/funcionario-cadastro.jpg"
		/>
	);
}