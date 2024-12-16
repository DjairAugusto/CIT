import getDecodedToken from "../decodeJWT";

export default function getRoles() {
	const decodedToken = getDecodedToken();

	if (!decodedToken) return [];

	const { permissions } = decodedToken;

	if (!permissions) throw new Error("Invalid token payload loaded");

	return permissions.map((permission) => permission.replace("ROLE_", ""));
}
