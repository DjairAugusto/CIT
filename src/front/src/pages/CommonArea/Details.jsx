import React from "react";
import { ArrowLeft } from "lucide-react";

export default function CommonAreaDetails({ commonArea, clearFocused }) {
	return (
		<div className="w-full m-6 rounded-3xl overflow-hidden bg-white">
			<div className="relative w-full h-full max-h-96 overflow-hidden">
				<div className="absolute w-full h-full bg-gradient-to-b from-black to-transparent to-20% opacity-60"></div>
				<div className="absolute w-full h-full bg-gradient-to-b from-transparent from-70% to-black to-87% opacity-80"></div>
				<button onClick={() => clearFocused()} className="top-3 left-3 text-white flex text-2xl items-center absolute bg-transparent border-none">
					<ArrowLeft className="mr-2" />
					Voltar
				</button>
				<img
					className="w-full object-cover object-bottom"
					src={commonArea.img}
					alt=""
				/>
				<h2 className="absolute bottom-3 left-3 text-white text-3xl">
					{commonArea.name}
				</h2>
			</div>
			<div className="mt-2 ml-3">
				<h2 className="text-3xl font-semibold">Detalhes</h2>
				<span>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, laudantium voluptatem maiores perferendis, labore veritatis velit aperiam nostrum fuga quaerat consectetur unde enim excepturi debitis cupiditate dolor molestias hic nisi? Ipsa, doloribus! Similique non, sed laudantium molestias culpa, eius velit corrupti maiores cupiditate nemo est vitae? Veniam quam velit quod?
				</span>
				<div className="w-full h-px bg-black"></div>
				<div className="flex">
					<div className="w-1/2 flex-auto">
						<h2 className="text-3xl font-semibold">Horário de Funcionamento</h2>
						<span>
							Segunda à Sexta: XX:XX - XX:XX <br />
							Sabado e Domingo: XX:XX - XX:XX
						</span>
					</div>
					<div className="w-px h-full bg-black"></div>
					<div className="w-1/2 flex-auto">
						<h2 className="text-3xl font-semibold">Taxa de Reserva</h2>
						<span>
							Segunda à Sexta: R$XX,XX <br />
							Sabado e Domingo: R$XX,XX
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
