import React, { useState } from "react";
import DropMenu from "../../components/DropMenu";
import { Forms } from "../../components/Forms";

let nextId = 0;

export default function VehicleForm() {
	const [vehicles, setVehicles] = useState([]);

	function addVehicle() {
		setVehicles([
			...vehicles,
			{
				id: nextId++,
				type: "",
				model: "",
				color: "",
				plate: "",
			}
		]);
	}

	function removeVehicle(target) {
		setVehicles(vehicles.filter(value => value.id !== target));
	}

	function modifyVehicle(target, [key, value]) {
		const newVehicles = [];
		Object.assign(newVehicles, vehicles);
		const vehicle = newVehicles.find(value => value.id === target);
		vehicle[key] = value;
		
		setVehicles(newVehicles);
	}

	return (
		<div className="flex flex-col gap-6 justify-between items-center w-full h-fit">
			<div className="w-full">
				<h1 className="text-center text-4xl mb-4">
					Cadastro de Veículos
				</h1>
				<div className="w-full flex items-center justify-center">
					<div className="bg-zinc-400 h-[1px] w-full"></div>
					<h6 className="px-4 whitespace-nowrap m-auto">
						Apartamento XXX
					</h6>
					<div className="bg-zinc-400 h-[1px] w-full"></div>
				</div>
			</div>

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
									<Forms.InputText
										placeholder="TIPO"
										onChange={e => modifyVehicle(vehicle.id, ["type", e.nativeEvent.srcElement.value])}
										required
									/>
									<Forms.InputText
										placeholder="MODELO"
										onChange={e => modifyVehicle(vehicle.id, ["model", e.nativeEvent.srcElement.value])}
										required
									/>

									<Forms.InputText
										placeholder="COR"
										onChange={e => modifyVehicle(vehicle.id, ["color", e.nativeEvent.srcElement.value])}
										required
									/>

									<Forms.InputText
										placeholder="PLACA"
										onChange={e => modifyVehicle(vehicle.id, ["plate", e.nativeEvent.srcElement.value])}
										required
									/>
								</div>
							</DropMenu>
						))
					}
				</div>
			</div>
		</div>
	);
}