import React, { useState } from "react";
import { ArrowLeft, Pencil, Trash } from "lucide-react";

export default function CommonAreaDetails({
	commonArea,
	deleteFocused,
	clearFocused,
	role,
}) {
	const [reserving, setReservig] = useState(false);

	return !reserving ? (
		<div className="flex flex-col w-full m-6 rounded-3xl overflow-hidden bg-white">
			<div className="flex-initial relative w-full max-h96 overflow-hidden">
				<div className="absolute w-full h-full bg-gradient-to-b from-black to-transparent to-20% opacity-60"></div>
				<div className="absolute w-full h-full bg-gradient-to-b from-transparent from-70% to-black to-87% opacity-80"></div>
				<button
					onClick={() => clearFocused()}
					className="top-3 left-3 text-white flex text-2xl items-center absolute bg-transparent border-none"
				>
					<ArrowLeft className="mr-2" />
					Voltar
				</button>
				<img
					className="w-full h-full object-cover"
					src={commonArea.img}
					alt=""
				/>
				<h2 className="absolute bottom-3 left-3 text-white text-3xl">
					{commonArea.name}
				</h2>
			</div>
			<div className="my-2 mx-3 h-full flex flex-col">
				<h2 className="text-3xl font-semibold">Detalhes</h2>
				<span>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Vel, laudantium voluptatem maiores perferendis, labore
					veritatis velit aperiam nostrum fuga quaerat consectetur
					unde enim excepturi debitis cupiditate dolor molestias hic
					nisi? Ipsa, doloribus! Similique non, sed laudantium
					molestias culpa, eius velit corrupti maiores cupiditate nemo
					est vitae? Veniam quam velit quod?
				</span>
				<div className="w-full h-px my-2 bg-black"></div>
				<div className="flex flex-col md:flex-row h-full">
					<div className="md:w-1/2 md:flex-auto">
						<h2 className="text-3xl font-semibold">
							Horário de Funcionamento
						</h2>
						<span>
							Segunda à Sexta: XX:XX - XX:XX <br />
							Sabado e Domingo: XX:XX - XX:XX
						</span>
					</div>
					<div className="w-full h-px my-4 md:my-0 md:w-px md:h-full md:mx-4 bg-black"></div>
					<div className="md:w-1/2 md:flex-auto">
						<h2 className="text-3xl font-semibold">
							Taxa de Reserva
						</h2>
						<span>
							Segunda à Sexta: R$ XX,XX <br />
							Sabado e Domingo: R$ XX,XX
						</span>
					</div>
				</div>
			</div>
			<div className="flex gap-1">
				<button
					onClick={() => setReservig(true)}
					className="text-white bg-primary-1000 w-full px-8 py-6 text-3xl"
				>
					Fazer Reserva
				</button>
				{role === "ADMIN" && (
					<>
						<button className="text-white bg-blue-500 aspect-square px-8 py-6 text-3xl">
							<Pencil />
						</button>
						<button
							onClick={deleteFocused}
							className="text-white bg-red-500 aspect-square px-8 py-6 text-3xl"
						>
							<Trash />
						</button>
					</>
				)}
			</div>
		</div>
	) : (
		<div className="flex flex-col justify-center items-center bg-white w-full h-full">
			<h1 className="text-3xl">Selecione a Data ou o Intervalo</h1>
			{
				// TODO Calendar component here
			}
		</div>
	);
}
