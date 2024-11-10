import getDecodedToken from "../decodeJWT";

export default function getRoles() {
	const { permissions } = getDecodedToken();

	if (!permissions) throw new Error("Invalid token payload loaded");

	return permissions.map((permission) => permission.replace("ROLE_", ""));
}
