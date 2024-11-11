import React, { useState } from "react";
import InhabitantForm from "./InhabitantForm";
import VehicleForm from "./VehicleForm";
import ProfileForm from "./ProfileForm";
import { Forms } from "../../components/Forms";
import TokenForm from "./TokenForm";

// TODO solicitar o token no registro de apartamento
// TODO utilizar o token para carregar os dados do Apartamento durante o registro
// TODO fazer integraçao do registro de Apartamento com o back
// TODO fazer as validações do Forms.Page
export default function ApartmentRegistration() {
	const steps = [
		<TokenForm />,
		<InhabitantForm />,
		<VehicleForm />,
		<ProfileForm />,
	];
	const validations = useState([]);

	return (
		<Forms.Page
			steps={steps}
			validations={validations}
			imageSource={"/condominium-registration.png"}
		/>
	);
}
