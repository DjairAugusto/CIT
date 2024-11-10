import { Cookies } from "./cookies";
import { decodeJwt } from "jose";

export default function getDecodedToken() {
	const token = Cookies.get("AuthorizationToken");
	return decodeJwt(token);
}