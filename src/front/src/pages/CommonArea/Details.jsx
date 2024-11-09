import React, { useEffect, useState } from "react";
import { ArrowLeft, Pencil, Trash } from "lucide-react";
import Loading from "../../components/Loading";
import axios from "../../utils/requisition/citRequisition";
import formatPrice from "../../utils/formatPrice";
import { useNavigate } from "react-router-dom";
import sortDaysOfWeek from "../../utils/sortDaysOfWeek";
import translateDayOfWeek from "../../utils/translateDayOfWeek";

export default function CommonAreaDetails({ commonAreaId }) {
	const [reserving, setReservig] = useState(false);
	const [commonArea, setCommonArea] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		axios.get(`/common-area/${commonAreaId}`).then((res) => {
			setCommonArea(res.data);
			console.log(res.data);
		});
	});

	if (commonArea === null) return <Loading />;

	return !reserving ? (
		<div className="relative w-full h-full bg-white xl:w-9/12 flex flex-col items-center">
			<button
				onClick={() => {
					navigate("/common-area");
				}}
				className="absolute left-2 top-2 p-4 rounded-full overflow-hidden"
			>
				<div className="bg-black opacity-20 absolute w-full h-full left-0 top-0"></div>
				<ArrowLeft className="relative z-10 text-xl text-white" />
			</button>
			<div className="w-full h-2/5">
				<img
					className="w-full h-full object-cover"
					src={commonArea.img}
					alt=""
				/>
			</div>
			<div className="flex flex-col lg:flex-row w-full h-3/5 p-6">
				<div className="lg:w-8/12 h-2/5 lg:h-full p-6 flex flex-col">
					<h2 className="text-3xl font-semibold">Detalhes</h2>
					<span className="overflow-y-auto">
						{commonArea.description}
					</span>
				</div>
				<div className="h-full lg:w-4/12 p-6 gap-4 bg-gray-low flex flex-col justify-between">
					<div>
						<h2 className="text-2xl font-semibold">
							Horário de Funcionamento
						</h2>
						<span>
							{commonArea.schedule.map((each) => {
								const {
									dayOfWeek: days,
									timeStart,
									timeEnd,
								} = each;
								const sortedDays = sortDaysOfWeek(days.map(translateDayOfWeek));

								return `${sortedDays[0]} à ${
									sortedDays[sortedDays.length - 1]
								}: ${timeStart} à ${timeEnd}`;
							})}
						</span>
						{commonArea.tax > 0 && (
							<>
								<h2 className="text-2xl font-semibold">
									Taxa de Reserva
								</h2>
								<span>{formatPrice(commonArea.tax)}</span>
							</>
						)}
					</div>
					<div className="flex gap-1">
						<button
							onClick={() => setReservig(true)}
							className="text-white bg-primary-1000 w-full px-4 py-2 text-xl"
						>
							Fazer Reserva
						</button>
						{"role" === "ADMIN" && (
							<>
								<button className="text-white bg-blue-500 aspect-square px-4 py-2 text-xl">
									<Pencil />
								</button>
								<button
									onClick={() => {}}
									className="text-white bg-red-500 aspect-square px-4 py-2 text-xl"
								>
									<Trash />
								</button>
							</>
						)}
					</div>
				</div>
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
