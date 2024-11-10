import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CommonAreaBase from "./Base";

export default function InfoBase({
	hasBackButton,
	banner,
	description,
	schedule,
	tax,
	painelActions,
	bottomActions,
}) {
	const navigate = useNavigate();

	return (
		<CommonAreaBase>
			<div className="relative w-full h-full bg-white xl:w-9/12 flex flex-col gap-6 items-center">
				{hasBackButton && (
					<button
						onClick={() => {
							navigate("/common-area");
						}}
						className="absolute left-2 top-2 w-12 h-12 rounded-full overflow-hidden"
					>
						<div className="bg-black opacity-20 absolute w-full h-full left-0 top-0"></div>
						<div className="relative z-10 text-white h-full w-full flex justify-center items-center">
							<ArrowLeft size={32} />
						</div>
					</button>
				)}
				<div className="w-full h-2/5 relative">{banner}</div>
				<div className="flex flex-col lg:flex-row w-full h-3/5 px-6">
					<div className="lg:w-8/12 h-2/5 lg:h-full p-6 flex flex-col">
						<h2 className="text-3xl font-semibold">Detalhes</h2>
						{description}
					</div>
					<div className="h-full lg:w-4/12 p-6 gap-4 bg-gray-low flex flex-col justify-between">
						<div className="flex flex-col gap-3">
							<h2 className="text-2xl font-semibold">
								Horário de Funcionamento
							</h2>
							{schedule}
							{tax && (
								<>
									<h2 className="text-2xl font-semibold">
										Taxa de Reserva
									</h2>
									{tax}
								</>
							)}
						</div>
						{painelActions && painelActions}
					</div>
				</div>
				{bottomActions}
			</div>
		</CommonAreaBase>
	);
}
