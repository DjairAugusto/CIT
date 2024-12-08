export default function validateCarPlate(plate) {
	return plate.match("^\\w{3}-\\d[\\w\\d]\\d{2}$");
}