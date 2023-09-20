import { redirectBasedOnLogin } from "./helpers/redirectBasedOnLogin.js";
import * as listeners from "./listeners/index.js";
import { createMenu } from "./ui/common/createMenu.js";

function router() {
	const path = window.location.pathname;

	console.log(path);

	createMenu(path);
	redirectBasedOnLogin(path);

	switch (path) {
		case "/":
		case "/index.html":
			listeners.setLoginListener();
			break;
	}
}

router();
