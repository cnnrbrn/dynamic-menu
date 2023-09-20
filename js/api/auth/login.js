import { BASE_URL } from "../../constants/api.js";
import handleErrors from "../handleErrors.js";

export async function login(data) {
	const url = `${BASE_URL}auth/login`;
	const body = JSON.stringify(data);

	const response = await fetch(url, {
		headers: {
			"Content-Type": "application/json",
		},
		method: "POST",
		body,
	});

	const json = await response.json();

	if (response.ok) {
		return json;
	}

	handleErrors(json);
}
