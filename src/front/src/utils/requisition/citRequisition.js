import axios from "axios";
import getCookie from "../cookies/getCookies";

const token = getCookie("AuthorizationToken") || "";
const BACKEND_URL = `${window.location.protocol}//${window.location.hostname}:8080`;

const AuthorizedInstance = axios.create({
	baseURL: BACKEND_URL,
	headers: {
		"Content-Type": "application/json",
		Authorization: `Bearer ${token}`,
	},
});

const nonAuthorizedInstance = axios.create({
	baseURL: BACKEND_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

const multiPartInstance = axios.create({
	baseURL: BACKEND_URL,
	headers: {
		"Content-Type": "multipart/form-data",
		Authorization: `Bearer ${token}`,
	},
});

const blobInstance = axios.create({
	baseURL: BACKEND_URL,
	headers: {
		Authorization: `Bearer ${token}`,
	},
	responseType: "blob",
});

export { AuthorizedInstance, nonAuthorizedInstance, multiPartInstance, blobInstance };
export default AuthorizedInstance;
