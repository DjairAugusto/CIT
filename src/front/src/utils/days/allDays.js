const daysOfWeek = {
	sunday: ["Domingo", "Sunday"],
	monday: ["Segunda-feira", "Monday"],
	tuesday: ["Terça-feira", "Tuesday"],
	wednesday: ["Quarta-feira", "Wednesday"],
	thursday: ["Quinta-feira", "Thursday"],
	friday: ["Sexta-feira", "Friday"],
	saturday: ["Sábado", "Saturday"],
};

const daysOfWeekArray = Object.keys(daysOfWeek).map((each) =>
	each.toUpperCase()
);

export { daysOfWeek, daysOfWeekArray };
