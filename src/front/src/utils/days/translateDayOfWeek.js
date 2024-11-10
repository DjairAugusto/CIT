import { daysOfWeek } from "./allDays";

export default function translateDayOfWeek(day, index = 0) {
	return daysOfWeek[day.toLowerCase()][index] || day;
}
