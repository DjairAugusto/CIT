import getCookies from "./cookies/getCookies";
import { nonAuthorizedInstance as axios } from "./requisition/citRequisition";

export default async function validateLogin() {
	const token = getCookies("AuthorizationToken");
	console.log(token);
	if (!token || token.length === 0) return false;

	const res = await axios.get(`/auth/verify/${token}`);
	return !res.expired;
}
