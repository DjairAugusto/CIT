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

export { AuthorizedInstance, nonAuthorizedInstance, multiPartInstance };
export default AuthorizedInstance;
