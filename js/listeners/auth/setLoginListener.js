import { login } from "../../api/auth/index.js";
import { displayMessage } from "../../ui/common/index.js";
import { saveToken } from "../../helpers/storage.js";

export function setLoginListener() {
	const form = document.querySelector("#loginForm");

	if (form) {
		form.addEventListener("submit", async (event) => {
			event.preventDefault();
			const form = event.target;
			const formData = new FormData(form);
			const profile = Object.fromEntries(formData.entries());

			try {
				const { accessToken } = await login(profile);
				saveToken(accessToken);
				document.location.href = "dashboard.html";
			} catch (error) {
				displayMessage("danger", error.message, "#message");
				console.log(error);
			}
		});
	}
}
