import React from "react";
import ApartmentForm from "./ApartmentForm";
import VehicleForm from "./VehicleForm";
import ProfileForm from "./ProfileForm";
import useForm from "../../hooks/useForm";

export default function ApartmentRegistration() {
	const steps = [<ApartmentForm />, <VehicleForm />, <ProfileForm />];
	const { currentStep, currentComponent, changeSteps, isLast, isFist } =
		useForm(steps);

	return (
		<>
			{currentComponent}
		</>
	);
}