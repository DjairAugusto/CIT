import React, { useEffect, useState } from "react";
import InhabitantForm from "./InhabitantForm";
import VehicleForm from "./VehicleForm";
import ProfileForm from "./ProfileForm";
import { Forms } from "../../components/Forms";
import useObjectArray from "../../hooks/useObjectArray";
import validateCPF from "../../utils/validCpf";
import validateCarPlate from "../../utils/validateCarPlate";
import validateEmail from "../../utils/validateEmail";

const formsTemplate = {
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

	// TODO finish this method
	function register(data) {
		
	}

	const steps = [
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
			validations={[
				data.apartment,
				data.inhabitants?.every(
					(inhabitant) =>
						validateCPF(inhabitant.cpf) &&
						inhabitant.name.length >= 3
				),
				!data.vehicles ||
					data.vehicles.every(
						(vehicle) =>
							vehicle.type !== "" &&
							vehicle.model.length >= 3 &&
							vehicle.color.length >= 3 &&
							validateCarPlate(vehicle.plate)
					),
				data.profiles?.every(
					(profile) =>
						validateEmail(profile.email) &&
						profile.password.length >= 8
				),
			]}
			imageSource={"/condominium-registration.png"}
			callbak={() => register(data)}
		/>
	);
}
