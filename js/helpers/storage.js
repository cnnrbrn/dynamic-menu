const TOKEN_KEY = "token";

export function saveToken(token) {
	localStorage.setItem(TOKEN_KEY, token);
}

export function getToken() {
	return localStorage.getItem(TOKEN_KEY) || null;
}

export function removeToken() {
	localStorage.removeItem(TOKEN_KEY);
}
