import getRoles from "./getRoles";

export default function hasRole(role) {
	return getRoles().includes(role);
}