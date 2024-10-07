import React from "react";
import InhabitantForm from "./InhabitantForm";
import VehicleForm from "./VehicleForm";
import ProfileForm from "./ProfileForm";
import useForm from "../../hooks/useForm";
import { Forms } from "../../components/Forms";
import { ArrowLeft } from "lucide-react";

export default function ApartmentRegistration() {
	const steps = [<InhabitantForm />, <VehicleForm />, <ProfileForm />];
	const { currentStep, currentComponent, changeSteps, isLast, isFist } =
		useForm(steps);

	return (
		<main className="flex justify-between h-svh bg-zinc-100">
			<div className="absolute left-5 z-10">
				{isFist ? (
					""
				) : (
					<Forms.Button
						className="w-24 flex items-center gap-1 justify-center"
						type="button"
						onClick={() => changeSteps(currentStep - 1)}
					>
						<ArrowLeft />
						Voltar
					</Forms.Button>
				)}
			</div>
			<div
				onSubmit={(e) => changeSteps(currentStep + 1, e)}
				className="w-full flex flex-col justify-between items-center pb-24 py-8 m-auto px-4 h-full relative lg:px-16 lg:py-12 sm:w-[600px]"
			>
				{currentComponent}
				<div className="flex justify-evenly w-full">
					{isLast ? (
						<Forms.Button
							className="w-2/5"
							type="submit"
						>
							Cadastra
						</Forms.Button>
					) : (
						<Forms.Button
							className="w-2/5"
							type="button"
							onClick={() => changeSteps(currentStep + 1)}
						>
							Próximo
						</Forms.Button>
					)}
				</div>
			</div>
			<img
				className="hidden lg:block w-1/2 object-cover"
				src="/condominium-registration.png"
				alt=""
			/>
		</main>
	);
}