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

export default function CommonAreaDetails() {
	const [commonArea, setCommonArea] = useState(null);
	const navigate = useNavigate();
	const { state } = useLocation();

	useEffect(() => {
		if (!state?.commonAreaId) navigate("/common-area");
		else
			axios
				.get(`/common-area/${state.commonAreaId}`)
				.then((res) => {
					setCommonArea(res.data);
				})
				.catch((err) => {
					navigate("../");
				});
	}, [state, navigate]);

	if (!commonArea) return <Loading />;

	return (
		<InfoBase
			hasBackButton={true}
			banner={
				<img
					className="w-full h-full object-cover"
					src={commonArea.img}
					alt=""
				/>
			}
			description={
				<span className="overflow-y-auto">
					{commonArea.description}
				</span>
			}
			schedule={
				<span>
					{commonArea.schedule.map((each) => {
						const { dayOfWeek: days, timeStart, timeEnd } = each;
						const sortedDays = sortDaysOfWeek(
							days.map((day) => translateDayOfWeek(day))
						);

						return `${sortedDays[0]} à ${
							sortedDays[sortedDays.length - 1]
						}: ${timeStart} à ${timeEnd}`;
					})}
				</span>
			}
			tax={
				commonArea.tax > 0 && <span>{formatPrice(commonArea.tax)}</span>
			}
			painelActions={
				<div className="flex gap-1">
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
										.delete(`/common-area/${commonArea.id}`)
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
			}
		/>
	);
}
