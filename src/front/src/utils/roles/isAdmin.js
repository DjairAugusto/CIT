import hasRole from "./hasRole";

export default function isAdmin() {
	return hasRole("ADMIN");
}