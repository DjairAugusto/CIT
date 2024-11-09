export default function translateDayOfWeek(day) {
	const daysOfWeek = {
		sunday: "Domingo",
		monday: "Segunda-feira",
		tuesday: "Terça-feira",
		wednesday: "Quarta-feira",
		thursday: "Quinta-feira",
		friday: "Sexta-feira",
		saturday: "Sábado",
	};

	return daysOfWeek[day.toLowerCase()] || day;
}
