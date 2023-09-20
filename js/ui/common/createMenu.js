import { isLoggedIn } from "../../helpers/auth.js";
import * as listeners from "../../listeners/index.js";

export function createMenu(path) {
	const menu = document.querySelector("#menu");

	if (isLoggedIn()) {
		menu.innerHTML = `<li class="nav-item menu-item">
                        <a class="nav-link ${path === "/dashboard.html" ? "active" : ""}" href="/">Dashboard</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link ${path === "/profile.html" ? "active" : ""}" href="/">Profile</a>
                      </li>
                      <li class="nav-item">
                        <button class="btn btn-outline-success" type="button" id="logout">Log Out</button>
                      </li>`;

		listeners.setLogoutListener();
	} else {
		menu.innerHTML = `<li class="nav-item">
                        <a class="nav-link ${path === "/" ? "active" : ""}" aria-current="page" href="#">Login</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link ${path === "/register.html" ? "active" : ""}"" href="#">Register</a>
                      </li>`;
	}
}
