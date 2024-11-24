import React, { useState } from "react";
import OmbudsmanTicket from "./Ticket";
import { Plus } from "lucide-react";
import OmbudsmanListTicket from "./ListTicket";

const tickets = [];

export default function OmbudsmanList() {
	const [isCreating, setIsCreating] = useState(false);

	return (
		<main className="w-dvw h-dvh overflow-hidden">
			<div className="max-w-screen-2xl px-4 lg:px-0 w-full lg:w-2/3 h-full mx-auto flex flex-col py-4 gap-5">
				<div className="flex flex-col gap-2 w-1/5 mx-auto items-center">
					<span className="text-4xl">Ouvidoria</span>
					<span className="bg-[#A1A1A1] h-px w-full"></span>
					<span className="text-2xl">Tickets</span>
				</div>
				<div className="h-1/2 flex-1 flex flex-col p-4 bg-gray-low rounded-lg gap-4">
					<div className="overflow-y-auto flex-1 flex flex-col gap-3">
						{tickets.length === 0 ? (
							<div className="m-auto text-center">
								<h3 className="text-3xl">Ops...</h3>
								<span>Nenhum Ticket Encontrado</span>
							</div>
						) : (
							tickets.map((ticket) => (
								<OmbudsmanListTicket ticket={ticket} />
							))
						)}
					</div>
					<button
						onClick={() => setIsCreating(true)}
						className="rounded-lg bg-primary-1000 w-full gap-1 py-6 items-center justify-center text-white text-2xl flex"
					>
						<Plus size={24} />
						Novo Ticket
					</button>
				</div>
			</div>

			{isCreating && (
				<OmbudsmanTicket closeCallback={() => setIsCreating(false)} />
			)}
		</main>
	);
}
