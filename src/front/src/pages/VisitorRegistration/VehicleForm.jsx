import React from "react";
import DropMenu from "../../components/DropMenu";
import { Forms } from "../../components/Forms";
import useObjectArray from "../../hooks/useObjectArray";

const vehicleOptions = [
	{
		value: "car",
		text: "CARRO"
	},
	{
		value: "motocycle",
		text: "MOTO"
	},
	{
		value: "other",
		text: "OUTRO"
	}
];

export default function VehicleForm() {
	const {
		array: vehicles,
		addOne: addVehicle,
		removeOne: removeVehicle,
		modifyOne: modifyVehicle
	} = useObjectArray({
		entries: [
			"type",
			"model",
			"color",
			"plate",
		]
	});

	return (
		<Forms.PageStep
			title="Cadastro de Veículos"
			subtitle="Veiculo XXX"
		>
			<div className="w-full h-fit">
				<button
					className="text-primary-1000 block mb-2"
					onClick={addVehicle}
				>+ Adicionar Veículo</button>
				<div className="flex flex-col gap-6 overflow-y-auto max-h-[600px]">
					{
						vehicles.map(vehicle => (
							<DropMenu
								key={vehicle.id}
								text={vehicle.model ? vehicle.model : "Modelo do Carro"}
								removeCallback={() => removeVehicle(vehicle.id)}
							>
								<div className="flex gap-4 flex-col">
									<Forms.Select
										placeholder="TIPO"
										onChange={e => modifyVehicle(vehicle.id, ["type", e.nativeEvent.srcElement.value])}
										options={vehicleOptions}
									/>
									<Forms.InputText
										placeholder="MODELO"
										onChange={e => modifyVehicle(vehicle.id, ["model", e.nativeEvent.srcElement.value])}
									/>

									<Forms.InputText
										placeholder="COR"
										onChange={e => modifyVehicle(vehicle.id, ["color", e.nativeEvent.srcElement.value])}
									/>

									<Forms.InputText
										placeholder="PLACA"
										onChange={e => modifyVehicle(vehicle.id, ["plate", e.nativeEvent.srcElement.value])}
									/>
								</div>
							</DropMenu>
						))
					}
				</div>
			</div>
		</Forms.PageStep>
	);
}