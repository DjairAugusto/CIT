import setCookie from "./setCookies"
import getCookie from "./getCookies"
import erasedCookies from "./erasedCookies"

export const Cookies = {
	set: setCookie,
	get: getCookie,
	delete: erasedCookies,
}