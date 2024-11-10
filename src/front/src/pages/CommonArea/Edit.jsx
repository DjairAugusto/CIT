import React, { useEffect, useState } from "react";
import InfoBase from "./InfoBase";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../utils/requisition/citRequisition";
import { Upload } from "lucide-react";
import { daysOfWeek } from "../../utils/days/allDays";
import formatPrice from "../../utils/formatPrice";
import Loading from "../../components/Loading";

export default function CommonAreaEdit() {
	const [commonArea, setCommonArea] = useState(null);
	const [selectDay, setSelectDay] = useState("sunday");
	const [currentTimeStart, setCurrentTimeStart] = useState(0);
	const [currentTimeEnd, setCurrentTimeEnd] = useState(0);
	const navigate = useNavigate();
	const { state } = useLocation();

	useEffect(() => {
		if (state === null || state.commonAreaId === undefined)
			navigate("/common-area");
		else
			axios.get(`/common-area/${state.commonAreaId}`).then((res) => {
				setCommonArea(res.data);
			});
	});

	if (!commonArea) return <Loading />;

	return (
		<InfoBase
			banner={
				// TOOD carregar a imagem pro back
				// TOOD pegar a imagem carregada no back e mostrar
				<>
					<img
						className="w-full h-full object-cover"
						src={commonArea.img}
						alt=""
					/>
					<div className="absolute bg-black opacity-40 w-full h-full top-0 left-0"></div>
					<label className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white flex gap-2 text-3xl items-center">
						<Upload size={32} />
						Carregar Nova Imagem
						<input
							type="file"
							name="image"
							id="image"
							className="hidden"
							accept="image/*"
							multiple={false}
						/>
					</label>
				</>
			}
			description={
				<textarea
					className="resize-none bg-gray-low h-full px-3 py-2"
					name="description"
					id="description"
					defaultValue={commonArea.description}
				/>
			}
			schedule={
				<div className="flex flex-wrap">
					<select
						className="w-full py-2 px-3"
						value={selectDay}
						onChange={(e) => {
							// TODO removere esse placeholder e implementar a lógica
							setSelectDay(e.target.value);
							const schedule = commonArea.schedule.find((each) =>
								each.dayOfWeek.includes(
									e.target.value.toUpperCase()
								)
							);
							setCurrentTimeStart(schedule.timeStart);
							setCurrentTimeEnd(schedule.timeEnd);
						}}
						name="day"
						id="day"
					>
						{Object.entries(daysOfWeek).map(([day, values]) => (
							<option key={day} value={day}>
								{values[0]}
							</option>
						))}
					</select>
					<input
						className="w-full text-lg py-2 px-3"
						value={currentTimeStart}
						onChange={(e) => {
							setCurrentTimeStart(e.target.value);
						}}
					/>
					<input
						className="w-full text-lg py-2 px-3"
						value={currentTimeEnd}
						onChange={(e) => {
							setCurrentTimeEnd(e.target.value);
						}}
					/>
				</div>
			}
			tax={
				<div>
					<input
						className="w-full text-lg py-2 px-3"
						name="tax"
						id="tax"
						defaultValue={formatPrice(commonArea.tax, false)}
					/>
				</div>
			}
			bottomActions={
				<div className="w-full flex gap-4 px-6 pb-6">
					<button
						onClick={() =>
							navigate("../details", {
								state: state,
							})
						}
						className="bg-red-500 hover:bg-red-600 transition-colors duration-300 py-4 text-3xl text-white h-full w-full"
					>
						Cancelar
					</button>
					<button
						onClick={() => {}}
						className="bg-blue-500 hover:bg-primary-1000 transition-colors duration-300 py-4 text-3xl text-white h-full w-full"
					>
						Salvar
					</button>
				</div>
			}
		/>
	);
}
