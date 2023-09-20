import { isLoggedIn } from "./auth.js";

const authRoutes = ["/", "/register.html"];
const protectedRoutes = ["/dashboard.html", "/profile.html"];

export function redirectBasedOnLogin(path) {
	// if we are logged in, redirect from login and register (auth routes)
	if (isLoggedIn()) {
		if (authRoutes.includes(path)) {
			location.href = "/dashboard.html";
		}
	}
	// if we not logged in, redirect from dashboard, profile, etc (protected routes)
	else {
		if (protectedRoutes.includes(path)) {
			location.href = "/";
		}
	}
}
