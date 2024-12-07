import React, { useEffect, useState } from "react";
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
	const [selectDay, setSelectDay] = useState("");
	const [currentSchedule, setCurrentSchedule] = useState(null);
	const [timeStart, setTimeStart] = useState("");
	const [timeEnd, setTimeEnd] = useState("");
	const navigate = useNavigate();
	const { state } = useLocation();

	function selectHandler(e) {
		setSelectDay(e.target.value);
	}

	useEffect(() => {
		if (state === null || state.commonAreaId === undefined)
			navigate("/common-area");
		else
			axios.get(`/common-area/${state.commonAreaId}`).then((res) => {
				setCommonArea(res.data);
				// TOOD fetch image
			});
	}, []);

	function getScheduleOfDay(commonArea, day) {
		return commonArea?.schedule?.find((each) =>
			each.dayOfWeek.includes(day.toUpperCase())
		);
	}

	useEffect(() => {
		if (commonArea)
			setCurrentSchedule(getScheduleOfDay(commonArea, selectDay));
	}, [commonArea, selectDay, setCurrentSchedule]);

	useEffect(() => {
		if (currentSchedule) {
			setTimeStart(currentSchedule.timeStart.substring(0, 5));
			setTimeEnd(currentSchedule.timeEnd.substring(0, 5));
		}
	}, [
		currentSchedule?.timeStart,
		currentSchedule?.timeEnd,
		setTimeStart,
		setTimeEnd,
	]);

	if (!commonArea) return <Loading />;

	function changeStart(start) {
		if (!currentSchedule) return;
		const end = currentSchedule.timeEnd;
		changeTime(start, end);
	}

	function changeEnd(end) {
		if (!currentSchedule) return;
		const start = currentSchedule.timeStart;
		changeTime(start, end);
	}

	function changeTime(start, end) {
		const result = { ...commonArea };

		const sameDay = getScheduleOfDay(result, selectDay);
		if (sameDay === undefined) return;

		sameDay.dayOfWeek.splice(
			sameDay.dayOfWeek.indexOf(selectDay.toUpperCase()),
			1
		);
		if (sameDay.dayOfWeek.length === 0)
			result.schedule.splice(result.schedule.indexOf(sameDay), 1);

		if(start.length === 5) start += ":00";
		if(end.length === 5) end += ":00";
		const sameTime = result.schedule.find(
			(each) => each.timeStart === start && each.timeEnd === end
		);
		if (sameTime) sameTime.dayOfWeek.push(selectDay.toUpperCase());
		else {
			result.schedule.push({
				timeStart: start,
				timeEnd: end,
				dayOfWeek: [selectDay.toUpperCase()],
			});
		}
		setCommonArea(result);
	}

	function fetchUpdate() {
		// TODO implementar validação
		// TODO implementar requisição
	}

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
							defaultOption="Escolha um Dia da Semana"
							options={Object.entries(daysOfWeek).map(
								([key, value]) => {
									return { value: key, text: value[0] };
								}
							)}
						/>
						<Forms.InputMask
							mask="99:99"
							className="w-full text-lg py-2 px-3"
							value={timeStart}
							onChange={(e) => {
								changeStart(e.target.value);
							}}
							disabled={!currentSchedule}
						/>
						<Forms.InputMask
							mask="99:99"
							className="w-full text-lg py-2 px-3"
							value={timeEnd}
							onChange={(e) => {
								changeEnd(e.target.value);
							}}
							disabled={!currentSchedule}
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
