import React, { useEffect, useState } from "react";
import InhabitantForm from "./InhabitantForm";
import VehicleForm from "./VehicleForm";
import ProfileForm from "./ProfileForm";
import { Forms } from "../../components/Forms";
import TokenForm from "./TokenForm";
import useObjectArray from "../../hooks/useObjectArray";
import { nonAuthorizedInstance as axios } from "../../utils/requisition/citRequisition";

const formsTemplate = {
	token: "",
	apartment: null,
	inhabitants: null,
	vehicles: null,
	profiles: null,
};

// TODO tratar os erros corretamente
// TODO mudar o fetchApartment para o TokenForm
// TODO utilizar o token para carregar os dados do Apartamento durante o registro
// TODO fazer integraçao do registro de Apartamento com o back
// TODO fazer as validações do Forms.Page
export default function ApartmentRegistration() {
	const [data, setData] = useState(formsTemplate);

	const inhabitants = useObjectArray({
		entries: ["name", "cpf", "phone", "email"],
		oneNeeded: true,
	});

	const vehicles = useObjectArray({
		entries: ["type", "model", "color", "plate"],
	});

	const profiles = useObjectArray({
		entries: ["email", "password"],
	});

	useEffect(() => {
		profiles.setMaxLength(inhabitants.array.length);
	}, [profiles, inhabitants]);

	useEffect(() => {
		setData((prevData) =>
			Object.assign({}, prevData, {
				inhabitants: inhabitants.array,
				vehicles: vehicles.array,
				profiles: profiles.array,
			})
		);
	}, [setData, inhabitants.array, vehicles.array, profiles.array]);

	function updateFieldHandler(path, value) {
		setData((prevData) => {
			const dataCopy = { ...prevData };
			const pathParts = path.split(".");
			let i = 0,
				current = dataCopy;

			while (current[pathParts[i]] instanceof Object)
				current = current[pathParts[i++]];

			current[pathParts[i]] = value;

			return dataCopy;
		});
	}

	const steps = [
		<TokenForm
			setData={setData}
			token={data.token}
			updateFieldHandler={updateFieldHandler}
		/>,
		<InhabitantForm
			apartmentNumber={data.apartment?.number}
			objectArray={inhabitants}
		/>,
		<VehicleForm
			apartmentNumber={data.apartment?.number}
			objectArray={vehicles}
		/>,
		<ProfileForm
			apartmentNumber={data.apartment?.number}
			objectArray={profiles}
		/>,
	];

	return (
		<Forms.Page
			steps={steps}
			stepsCallback={stepsCallback}
			validations={[true]}
			imageSource={"/condominium-registration.png"}
		/>
	);
}
