import React from "react";
import { Forms } from ".";
import { ArrowLeft } from "lucide-react";
import useForm from "../../hooks/useForm";

export default function FormsPage({
	steps,
	imageSource,
	validations,
	callback,
}) {
	const { currentStep, currentComponent, changeSteps, isLast, isFirst } =
		useForm(steps);

	return (
		<main className="flex justify-between h-svh overflow-hidden bg-zinc-100">
			<div className="absolute left-5 z-10">
				{!isFirst && (
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
							onClick={callback}
							disabled={!validations[validations.length - 1]}
						>
							Cadastrar
						</Forms.Button>
					) : (
						<Forms.Button
							className="w-2/5"
							type="button"
							onClick={(e) => changeSteps(currentStep + 1, e)}
							disabled={!validations[currentStep]}
						>
							Próximo
						</Forms.Button>
					)}
				</div>
			</div>
			<img
				className="hidden lg:block w-1/2 object-cover"
				src={imageSource}
				alt="Imagem de fundo"
			/>
		</main>
	);
}
