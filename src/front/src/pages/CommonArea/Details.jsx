import React, { useEffect, useState } from "react";
import InfoBase from "./InfoBase";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../utils/requisition/citRequisition";
import formatPrice from "../../utils/formatPrice";
import sortDaysOfWeek from "../../utils/days/sortDaysOfWeek";
import translateDayOfWeek from "../../utils/days/translateDayOfWeek";
import Roles from "../../utils/roles";
import { Pencil, Trash } from "lucide-react";
import Loading from "../../components/Loading";
import CommonAreaBase from "./Base";

export default function CommonAreaDetails() {
	const [commonArea, setCommonArea] = useState(null);
	const [image, setImage] = useState(null);
	const navigate = useNavigate();
	const { state } = useLocation();

	useEffect(() => {
		function fetchImage() {
			// TODO fetch file from backend
		}

		if (!state?.commonAreaId) navigate("/common-area");
		else
			axios
				.get(`/common-area/${state.commonAreaId}`)
				.then((res) => {
					setCommonArea(res.data);
					fetchImage();
				})
				.catch((err) => {
					navigate("../");
				});
	}, [state, navigate]);

	if (!commonArea) return <Loading />;

	return (
		<CommonAreaBase>
			<div className="max-w-[1600px] w-full h-full bg-white">
				<div className="overflow-hidden w-full h-2/5 relative">
					<img
						className="h-full w-full object-cover object-center"
						src={image}
						alt=""
					/>
				</div>
				<div className="flex w-full h-3/5 p-6 [&>*]:p-4">
					<div className="flex-auto w-7/12 h-full">
						<h2 className="text-3xl font-semibold">Detalhes</h2>
						<p>{commonArea.description}</p>
					</div>
					<div className="flex flex-col flex-auto w-5/15 bg-gray-low h-full">
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
								const sortedDays = sortDaysOfWeek(
									days.map((day) => translateDayOfWeek(day))
								);

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
						<div className="mt-auto flex gap-1">
							<button
								onClick={() => {}}
								className="text-white bg-primary-1000 w-full px-4 py-2 text-xl"
							>
								Fazer Reserva
							</button>
							{Roles.isAdmin() && (
								<>
									<button
										onClick={() => {
											navigate("../edit", {
												state,
											});
										}}
										className="text-white bg-blue-500 aspect-square px-4 py-2 text-xl"
									>
										<Pencil />
									</button>
									<button
										onClick={() => {
											axios
												.delete(
													`/common-area/${commonArea.id}`
												)
												.then((res) => {
													console.log(res);
													if (res.status === 200)
														navigate("../");
												});
										}}
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
		</CommonAreaBase>
	);
}
