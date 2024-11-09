export default function setCookie(name, value, days = 7, path = "/") {
	const date = new Date();
	date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	const expires = `expires=${date.toUTCString()}`;
	document.cookie = `${name}=${value};${expires};path=${path}`;
}