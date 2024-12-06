import React, { useEffect, useState } from "react";
import InfoBase from "./InfoBase";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../utils/requisition/citRequisition";
import { Upload } from "lucide-react";
import { daysOfWeek } from "../../utils/days/allDays";
import formatPrice from "../../utils/formatPrice";
import Loading from "../../components/Loading";
import CommonAreaBase from "./Base";
import { Forms } from "../../components/Forms";

export default function CommonAreaEdit() {
	const [commonArea, setCommonArea] = useState(null);
	const [image, setImage] = useState(null);
	const [selectDay, setSelectDay] = useState("sunday");
	const [currentTimeStart, setCurrentTimeStart] = useState(0);
	const [currentTimeEnd, setCurrentTimeEnd] = useState(0);
	const navigate = useNavigate();
	const { state } = useLocation();

	function selectHandler(e) {
		setSelectDay(e.target.value);
		const schedule = commonArea.schedule.find((each) =>
			each.dayOfWeek.includes(e.target.value.toUpperCase())
		);
		setCurrentTimeStart(schedule.timeStart);
		setCurrentTimeEnd(schedule.timeEnd);
	}

	useEffect(() => {
		if (state === null || state.commonAreaId === undefined)
			navigate("/common-area");
		else
			axios.get(`/common-area/${state.commonAreaId}`).then((res) => {
				setCommonArea(res.data);
				// TOOD fetch image
			});
	});

	if (!commonArea) return <Loading />;

	return (
		<CommonAreaBase>
			<div className="max-w-[1600px] w-full h-full bg-white">
				<div className="overflow-hidden w-full h-2/5 relative">
					<div className="absolute bg-black bg-opacity-40 top-0 left-0 w-full h-full"></div>
					<label className="z-10 gap-5 text-4xl text-white flex justify-center items-center w-full h-full absolute top-0 left-0">
						<Upload size={32} />
						Carregar Nova Imagem
						<input
							className="hidden"
							type="file"
							value={image?.filename}
							onChange={(e) => setImage(e.target.files[0])}
							accept="image/png, image/jpeg"
						/>
					</label>
					<img
						className="h-full w-full object-cover object-center"
						src={image ? URL.createObjectURL(image) : ""}
						alt=""
					/>
				</div>
				<div className="grid grid-cols-12 grid-rows-6 w-full h-3/5 gap-4 p-6">
					<div className="flex-auto row-span-5 col-start-1 col-end-8 h-full p-4">
						<h2 className="text-3xl font-semibold">Detalhes</h2>
						<p>{commonArea.description}</p>
					</div>
					<div className="flex flex-col gap-2 row-span-5 flex-auto col-start-8 col-end-13 bg-gray-low h-full p-4">
						<h2 className="text-2xl font-semibold">
							Horário de Funcionamento
						</h2>
						<Forms.Select
							value={selectDay}
							onChange={selectHandler}
							options={Object.entries(daysOfWeek).map(
								([key, value]) => {
									return { value: key, text: value[0] };
								}
							)}
						/>
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
						<h2 className="text-2xl font-semibold">Taxa</h2>
						<div>
							<input
								className="w-full text-lg py-2 px-3"
								name="tax"
								id="tax"
								defaultValue={formatPrice(
									commonArea.tax,
									false
								)}
							/>
						</div>
					</div>
					<div className="flex col-start-1 col-end-13 gap-2">
						<button
							onClick={() => navigate("../")}
							className="flex-1 text-white text-3xl bg-red-500"
						>
							Cancelar
						</button>
						<button className="flex-1 text-white text-3xl bg-primary-1000">
							Salvar
						</button>
					</div>
				</div>
			</div>
		</CommonAreaBase>
	);
}
