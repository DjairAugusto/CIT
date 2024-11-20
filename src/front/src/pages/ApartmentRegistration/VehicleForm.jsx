import React from "react";
import DropMenu from "../../components/DropMenu";
import { Forms } from "../../components/Forms";

const vehicleOptions = [
	{
		value: "CAR",
		text: "CARRO",
	},
	{
		value: "MOTOCYCLE",
		text: "MOTO",
	},
	{
		value: "OTHER",
		text: "OUTRO",
	},
];

export default function VehicleForm({ apartmentNumber, objectArray }) {
	const {
		array: vehicles,
		addOne: addVehicle,
		removeOne: removeVehicle,
		modifyOne: modifyVehicle,
	} = objectArray;

	return (
		<Forms.PageStep
			title="Cadastro de Veículos"
			subtitle={`Apartamento ${apartmentNumber}`}
		>
			<button
				className="text-primary-1000 block mb-2"
				onClick={addVehicle}
			>
				+ Adicionar Veículo
			</button>
			<div className="flex flex-col gap-6 overflow-y-auto max-h-[600px]">
				{vehicles.map((vehicle) => (
					<DropMenu
						key={vehicle.id}
						text={vehicle.model ? vehicle.model : "Modelo do Carro"}
						removeCallback={() => removeVehicle(vehicle.id)}
					>
						<div className="flex gap-4 flex-col">
							<Forms.Select
								defaultOption="Escolha o tipo do Veículo"
								placeholder="TIPO"
								onChange={(e) =>
									modifyVehicle(vehicle.id, [
										"type",
										e.target.value,
									])
								}
								value={vehicle.type}
								options={vehicleOptions}
								required={true}
							/>
							<Forms.InputText
								placeholder="MODELO"
								onChange={(e) =>
									modifyVehicle(vehicle.id, [
										"model",
										e.target.value,
									])
								}
								value={vehicle.model}
								required
							/>
							<Forms.InputText
								placeholder="COR"
								onChange={(e) =>
									modifyVehicle(vehicle.id, [
										"color",
										e.target.value,
									])
								}
								value={vehicle.color}
								required
							/>
							<Forms.InputMask
								mask="aaa-9*99"
								placeholder="PLACA"
								onChange={(e) =>
									modifyVehicle(vehicle.id, [
										"plate",
										e.target.value,
									])
								}
								value={vehicle.plate?.toUpperCase()}
								required
							/>
						</div>
					</DropMenu>
				))}
			</div>
		</Forms.PageStep>
	);
}
