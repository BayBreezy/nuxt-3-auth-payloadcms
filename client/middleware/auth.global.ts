import { useCustomer } from "~~/composables/payload";

export default defineNuxtRouteMiddleware((to, from) => {
	// get the customer
	const customer = useCustomer();
	// if the user is null and the route that they are going to has `admin` in it,
	// send them back to login page
	if (!customer.value && to.path.includes("admin")) {
		return navigateTo("/");
	}

	// if a user is logged in and they are trying to go to login or register page
	// send them to dashboard
	if (customer.value && (to.path == "/" || to.path.includes("register"))) {
		return navigateTo("/admin/dashboard");
	}
});
