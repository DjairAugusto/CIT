import axios from "axios";
import getCookie from "../cookies/getCookies";

const token = getCookie("AuthorizationToken") || "";

const AuthorizedInstance = axios.create({
	baseURL: "http://localhost:8080/",
	headers: {
		"Content-Type": "application/json",
		Authorization: `Bearer ${token}`,
	},
});

const nonAuthorizedInstance = axios.create({
	baseURL: "http://localhost:8080",
	headers: {
		"Content-Type": "application/json",
	},
});

const multiPartInstance = axios.create({
	baseURL: "http://localhost:8080",
	headers: {
		"Content-Type": "multipart/form-data",
		Authorization: `Bearer ${token}`,
	},
});

const blobInstance = axios.create({
	baseURL: "http://localhost:8080",
	headers: {
		Authorization: `Bearer ${token}`,
	},
	responseType: "blob",
});

export { AuthorizedInstance, nonAuthorizedInstance, multiPartInstance, blobInstance };
export default AuthorizedInstance;
