import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../utils/requisition/citRequisition";
import { Check, Upload, X } from "lucide-react";
import { daysOfWeek } from "../../utils/days/allDays";
import Loading from "../../components/Loading";
import CommonAreaBase from "./Base";
import { Forms } from "../../components/Forms";

export default function CommonAreaCreate() {
	const [commonArea, setCommonArea] = useState({
		description: "",
		tax: 0,
		schedule: [
			{
				timeStart: "00:00:00",
				timeEnd: "01:00:00",
				dayOfWeek: [
					"MONDAY",
					"TUESDAY",
					"WEDNESDAY",
					"THURSDAY",
					"FRIDAY",
					"SATURDAY",
					"SUNDAY",
				],
			},
		],
	});
	const [image, setImage] = useState(null);
	const [selectDay, setSelectDay] = useState("");
	const [currentSchedule, setCurrentSchedule] = useState(null);
	const [timeStart, setTimeStart] = useState("");
	const [timeEnd, setTimeEnd] = useState("");
	const [errors, setErrors] = useState({});
	const [saveButtonText, setSaveButtonText] = useState("Salvar");
	const navigate = useNavigate();
	const { state } = useLocation();

	function selectHandler(e) {
		setSelectDay(e.target.value);
	}

	function setDescription(description) {
		setCommonArea({ ...commonArea, description });
	}

	function setTax(tax) {
		setCommonArea({ ...commonArea, tax });
	}

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
		currentSchedule,
		currentSchedule?.timeStart,
		currentSchedule?.timeEnd,
		setTimeStart,
		setTimeEnd,
	]);

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

		if (start.length === 5) start += ":00";
		if (end.length === 5) end += ":00";
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

	function validateSchedule(errors) {
		const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
		const missingDays = new Set();
		const invalidTimes = new Set();
		Object.keys(daysOfWeek).forEach((day) => {
			const schedule = getScheduleOfDay(commonArea, day);
			if (!schedule) {
				missingDays.add(day);
				return;
			}

			let start, end;
			if ((start = !schedule.timeStart.match(timeRegex)))
				invalidTimes.add(schedule.timeStart);
			if (
				(end = !schedule.timeEnd.match(timeRegex)) ||
				Date.parse(timeEnd) <= Date.parse(timeStart)
			)
				invalidTimes.add(schedule.timeEnd);
			if (start || end) missingDays.add(day);
		});
		if (missingDays.length > 0) errors.missingDays = missingDays;
		if (invalidTimes.length > 0) errors.invalidTimes = invalidTimes;
	}

	function validateCommonArea() {
		if (!commonArea) return false;

		const errors = {};
		validateSchedule(errors);
		if (commonArea.description.length < 20)
			errors.description = "A descrição deve ter no mínimo 20 caracteres";
		if (commonArea.tax < 0) errors.tax = "A taxa não pode ser negativa";

		setErrors(errors);
	}

	function onChange(callback) {
		return (...params) => {
			callback(...params);
			setSaveButtonText("Salvar");
			validateCommonArea();
		};
	}

	function fetchCreation() {
		setSaveButtonText(<Loading />);
		axios
			.post("/common-area", commonArea)
			.then(() => {
				setSaveButtonText(<Check />);
			})
			.catch(() => setSaveButtonText(<X />));
	}

	return (
		<CommonAreaBase>
			<div className="max-w-[1600px] w-full h-full bg-white">
				<div className="overflow-hidden w-full h-2/5 relative">
					<div className="absolute bg-black bg-opacity-40 top-0 left-0 w-full h-full"></div>
					<label className="gap-5 text-4xl text-white flex justify-center items-center w-full h-full absolute top-0 left-0">
						<Upload size={32} />
						Carregar Nova Imagem
						<input
							className="hidden"
							type="file"
							value={image?.filename}
							onChange={onChange((e) =>
								setImage(e.target.files[0])
							)}
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
						<Forms.TextArea
							error={errors.description}
							onChange={onChange((e) =>
								setDescription(e.target.textContent)
							)}
							value={commonArea.description}
						/>
					</div>
					<div className="flex flex-col gap-2 row-span-5 flex-auto col-start-8 col-end-13 bg-gray-low h-full p-4">
						<h2 className="text-2xl font-semibold">
							Horário de Funcionamento
						</h2>
						<Forms.Select
							value={selectDay}
							onChange={onChange((e) => selectHandler(e))}
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
							onChange={onChange((e) =>
								changeStart(e.target.value)
							)}
							disabled={!currentSchedule}
						/>
						<Forms.InputMask
							mask="99:99"
							className="w-full text-lg py-2 px-3"
							value={timeEnd}
							onChange={onChange((e) =>
								changeEnd(e.target.value)
							)}
							disabled={!currentSchedule}
						/>
						<h2 className="text-2xl font-semibold">Taxa</h2>
						<div>
							<Forms.Currency
								className="w-full text-lg py-2 px-3"
								id="tax"
								name="tax"
								value={commonArea.tax}
								onChange={onChange((_, __, values) =>
									setTax(values.float)
								)}
								allowNegativeValue={false}
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
						<button
							onClick={() => fetchCreation()}
							className="flex-1 flex items-center justify-center text-white text-3xl bg-primary-1000"
							disabled={Object.keys(errors).length !== 0}
						>
							{saveButtonText}
						</button>
					</div>
				</div>
			</div>
		</CommonAreaBase>
	);
}
