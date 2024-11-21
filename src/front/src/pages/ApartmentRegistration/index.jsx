import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InhabitantForm from "./InhabitantForm";
import VehicleForm from "./VehicleForm";
import ProfileForm from "./ProfileForm";
import { Forms } from "../../components/Forms";
import useObjectArray from "../../hooks/useObjectArray";
import validateCPF from "../../utils/validCpf";
import validateCarPlate from "../../utils/validateCarPlate";
import validateEmail from "../../utils/validateEmail";
import { nonAuthorizedInstance as axios } from "../../utils/requisition/citRequisition";
import Loading from "../../components/Loading";

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
	const [isLoading, setIsLoading] = useState(true);
	const { token } = useParams();
	const navigate = useNavigate();

	const inhabitants = useObjectArray({
		entries: ["name", "cpf", "phone", "email", "profile"],
		oneNeeded: true,
	});

	const vehicles = useObjectArray({
		entries: ["type", "brand", "model", "color", "plate"],
	});

	const profiles = useObjectArray({
		entries: ["email", "password"],
		oneNeeded: true,
	});

	useEffect(() => {
		profiles.setMaxLength(inhabitants.array.length);
		inhabitants.array.forEach((inhabitant) => {
			if (inhabitant.profile === "") {
				inhabitants.modifyOne(inhabitant.id, ["profile", undefined]);
			}
		});
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

	useEffect(() => {
		if (token === undefined) navigate("/home");
		else
			axios
				.get(`/apartment/by-token/${token}`)
				.then((res) => {
					if (res.data) {
						updateFieldHandler("apartment", res.data);
						setIsLoading(false);
					}
				})
				.catch((err) => {
					console.log(err);
				});
	}, [token, navigate, setData]);

	if (isLoading) return <Loading />;

	// TODO make this method catch erros and display to the user
	function register(data) {
		axios
			.post(`/apartment/register/${token}`, {
				residents: data.inhabitants,
				vehicles: data.vehicles,
			})
			.then((res) => navigate("/login"))
			.catch((err) => {});
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
			inhabitantsObjectArray={inhabitants}
		/>,
	];

	return (
		<Forms.Page
			steps={steps}
			validations={[
				(() => {
					const allCPFs = data.inhabitants.map(
						(inhabitant) => inhabitant.cpf
					);
					return (
						data.inhabitants?.every(
							(inhabitant) =>
								validateCPF(inhabitant.cpf) &&
								inhabitant.name.length >= 3
						) && new Set(allCPFs).size === allCPFs.length
					);
				})(),
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
						profile.password.length >= 8 &&
						inhabitants.array.find(
							(inhabitant) => inhabitant.profile === profile
						)
				),
			]}
			imageSource={"/condominium-registration.png"}
			callbak={() => register(data)}
		/>
	);
}
