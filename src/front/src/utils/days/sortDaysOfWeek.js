const daysOrder = [
	["MONDAY", "SEGUNDA", "SEGUNDA-FEIRA"],
	["TUESDAY", "TERÇA", "TERÇA-FEIRA"],
	["WEDNESDAY", "QUARTA", "QUARTA-FEIRA"],
	["THURSDAY", "QUINTA", "QUINTA-FEIRA"],
	["FRIDAY", "SEXTA", "SEXTA-FEIRA"],
	["SATURDAY", "SÁBADO"],
	["SUNDAY", "DOMINGO"],
];

export default function sortDaysOfWeek(days) {
	return days.sort((a, b) => {
		const getOrder = (day) => {
			for (let i = 0; i < daysOrder.length; i++) {
				if (daysOrder[i].includes(day.toUpperCase())) {
					return i;
				}
			}
			return -1;
		};

		return getOrder(a) - getOrder(b);
	});
}
