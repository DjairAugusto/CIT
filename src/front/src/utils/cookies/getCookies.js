function getCookies(name) {
	const cookies = document.cookie.split(';');
	const cookiesObject = {};
	cookies.forEach((cookie) => {
		const [key, value] = cookie.split('=');
		if (!name || key.trim() === name) {
			cookiesObject[key.trim()] = value;
		}
	});
	return name ? cookiesObject[name] : cookiesObject;
}

export default getCookies;