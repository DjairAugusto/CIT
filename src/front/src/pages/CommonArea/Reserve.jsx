import React, { useEffect, useState } from "react";
import CommonAreaBase from "./Base";
import Calendar from "react-calendar";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import axios from "../../utils/requisition/citRequisition";
import "react-calendar/dist/Calendar.css";
import { Forms } from "../../components/Forms";
import formatPrice from "../../utils/formatPrice";
import sortDaysOfWeek from "../../utils/days/sortDaysOfWeek";
import translateDayOfWeek from "../../utils/days/translateDayOfWeek";
import { daysOfWeekArray } from "../../utils/days/allDays";

export default function CommonAreaReserve() {
	const [commonArea, setCommonArea] = useState();
	const [date, setDate] = useState(new Date());
	const [timeStart, setTimeStart] = useState("");
	const [timeEnd, setTimeEnd] = useState("");
	const { state } = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (!state) navigate("/condominium/common-area");
		else
			axios.get(`/common-area/${state.commonAreaId}`).then((res) => {
				if (res.data) {
					res.data.reserves = res.data.reserves.map((reserve) => {
						const date = reserve.date.split("-");
						date[1] = date[1] - 1;
						return date.join("-");
					});
					setCommonArea(res.data);
				} else navigate("/condominium/common-area");
			});
	}, [state, setCommonArea, navigate]);

	if (!commonArea) return <Loading />;

	function parseTime(time) {
		return time.split(":").map((n) => parseInt(n));
	}

	function parseDate() {
		const [startHour, startMinute] = parseTime(timeStart);
		const [endHour, endMinute] = parseTime(timeEnd);
		if ([startHour, startMinute, endHour, endMinute].some(isNaN)) return {};
		return { startHour, startMinute, endHour, endMinute };
	}

	function verifyConflict() {
		const { startHour, startMinute, endHour, endMinute } = parseDate();
		if ([startHour, startMinute, endHour, endMinute].some(isNaN))
			return false;

		const reserves = commonArea.reserves.filter((reserve) => {
			const reserveDate = new Date(reserve.date + " GMT-0300");

			console.log(reserveDate);
			return (
				reserveDate.getDate() === date.getDate() &&
				reserveDate.getMonth() === date.getMonth() &&
				reserveDate.getFullYear() === date.getFullYear()
			);
		});

		console.log(reserves);

		if (
			reserves.some((reserve) => {
				const reserveStart = parseTime(reserve.timeStart);
				const reserveEnd = parseTime(reserve.timeEnd);
				return (
					(startHour < reserveEnd[0] ||
						(startHour === reserveEnd[0] &&
							startMinute < reserveEnd[1])) &&
					(endHour > reserveStart[0] ||
						(endHour === reserveStart[0] &&
							endMinute > reserveStart[1]))
				);
			})
		)
			return true;

		return false;
	}

	function validateInputs() {
		if (!date || !timeStart || !timeEnd) return false;

		const { startHour, startMinute, endHour, endMinute } = parseDate();
		if ([startHour, startMinute, endHour, endMinute].some(isNaN))
			return false;

		if (
			startHour > endHour ||
			(startHour === endHour && startMinute >= endMinute)
		)
			return false;

		if (startHour < 0 || startHour > 23) return false;
		if (startMinute < 0 || startMinute > 59) return false;
		if (endHour < 0 || endHour > 23) return false;
		if (endMinute < 0 || endMinute > 59) return false;

		const day = daysOfWeekArray[date.getDay()];

		const schedule = commonArea.schedule.find((each) =>
			each.dayOfWeek.includes(day)
		);

		if (!schedule) return false;

		const [scheduleStartHour, scheduleStartMinute] = parseTime(
			schedule.timeStart
		);
		const [scheduleEndHour, scheduleEndMinute] = parseTime(
			schedule.timeEnd
		);

		if (
			startHour < scheduleStartHour ||
			(startHour === scheduleStartHour &&
				startMinute < scheduleStartMinute)
		)
			return false;

		if (
			endHour > scheduleEndHour ||
			(endHour === scheduleEndHour && endMinute > scheduleEndMinute)
		)
			return false;

		if (verifyConflict()) return false;

		return true;
	}

	function reserve() {
		let { startHour, startMinute, endHour, endMinute } = parseDate();
		startHour = startHour < 10 ? `0${startHour}` : startHour;
		endHour = endHour < 10 ? `0${endHour}` : endHour;
		startMinute = startMinute < 10 ? `0${startMinute}` : startMinute;
		endMinute = endMinute < 10 ? `0${endMinute}` : endMinute;

		axios
			.post(`/common-area/reserve/${commonArea.id}`, [
				{
					date: `${date.getFullYear()}-${
						date.getMonth() + 1
					}-${date.getDate()}`,
					timeStart: `${startHour}:${startMinute}:00`,
					timeEnd: `${endHour}:${endMinute}:00`,
				},
			])
			.then((res) => {
				if (res.status === 201) navigate("../details");
			});
	}

	return (
		<CommonAreaBase>
			<div>
				<h2 className="text-center mb-3 text-lg">
					Selecione o dia e horário
				</h2>
				<div className="flex gap-4">
					<Calendar
						minDate={new Date()}
						locale="pt-BR"
						onChange={setDate}
						value={date}
					/>
					<div className="flex flex-col gap-2">
						<Forms.InputMask
							placeholder="Horário de início"
							mask="99:99"
							className="w-full text-lg py-2 px-3"
							value={timeStart}
							onChange={(e) => setTimeStart(e.target.value)}
							disabled={!date}
						/>
						<Forms.InputMask
							placeholder="Horário de fim"
							mask="99:99"
							className="w-full text-lg py-2 px-3"
							value={timeEnd}
							onChange={(e) => setTimeEnd(e.target.value)}
							disabled={!date}
						/>
						<div>
							<h2 className="font-semibold">
								Horário de Funcionamento
							</h2>
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
						</div>
						{commonArea.tax > 0 && (
							<span>
								<span className="font-semibold">
									Taxa de Reserva:
								</span>{" "}
								{formatPrice(commonArea.tax)}
							</span>
						)}
						{verifyConflict() && (
							<span className="text-red-500">
								Esse horário conflita com outra reserva
							</span>
						)}
					</div>
				</div>
				<div className="flex gap-1">
					<Forms.Button
						onClick={() =>
							navigate("../details", {
								state: { commonAreaId: commonArea.id },
							})
						}
						className="w-full bg-red-500"
					>
						Cancelar
					</Forms.Button>
					<Forms.Button
						disabled={!validateInputs()}
						className="w-full"
						onClick={reserve}
					>
						Confirmar
					</Forms.Button>
				</div>
			</div>
		</CommonAreaBase>
	);
}
