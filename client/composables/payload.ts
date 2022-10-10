import { Customer } from "~~/types";

interface IAuthData {
	email: string;
	password: string;
	name?: string;
}
// Function that returns the url for our API
export const usePayloadUrl = () => {
	// get the config
	const confg = useRuntimeConfig();

	// declare vars
	let url, prefix, baseURL;

	// check if we are server or client side and then assign vars
	if (process.server) {
		url = confg.API_URL;
		prefix = confg.API_PREFIX;
		baseURL = `${url}${prefix}`;
	} else {
		url = confg.public.API_URL;
		prefix = confg.public.API_PREFIX;
		baseURL = `${url}${prefix}`;
	}
	// return values
	return { url, prefix, baseURL };
};
// The logged in customers
export const useCustomer = () => useState<Customer>("customer");

/**
 * Method used to create a customer
 * @param data - register credentials (email, password, name)
 * @returns Created customers || null
 */
export const usePayloadRegister = async (data: IAuthData) => {
	try {
		// get base url
		const { baseURL } = usePayloadUrl();
		// send reqest to create customer
		const customer = await $fetch<Customer>("/customers/", {
			method: "POST",
			body: data,
			baseURL,
			credentials: "include",
		});
		// login with same credentials
		await usePayloadLogin(data);
		// returns created customer
		return customer;
	} catch (error) {
		throw error.data;
	}
};

/**
 * Method used to log a user in
 * @param data - login credentials (email, password)
 * @returns Logged in user
 */
export const usePayloadLogin = async (data: IAuthData) => {
	try {
		// get base url
		const { baseURL } = usePayloadUrl();
		//get the logged in customer
		const customer = useCustomer();
		// send reqest to login
		const login = await $fetch<Customer>("/customers/login", {
			method: "POST",
			body: data,
			baseURL,
			credentials: "include",
		});
		// Set the customer
		customer.value = login;
		// return logged in user
		return login;
	} catch (error) {
		throw error.data;
	}
};

/**
 * Metod used ot load the logged in user
 * @returns Logged in user or null
 */
export const useGetPayloadCustomer = async () => {
	const customer = useCustomer();
	// get base url
	const { baseURL } = usePayloadUrl();
	try {
		let user = await $fetch<Customer>("/customers/me", {
			method: "GET",
			baseURL,
			// Include the payload cookie on the client side
			credentials: "include",
			// Send cookie on the server side
			headers: useRequestHeaders(),
		});
		// Check if the user came back as null
		if (!user.user) {
			//remove the user
			customer.value = null;
			return;
		}
		// set the customer
		customer.value = user;
	} catch (error) {}
};

/**
 * Method used to log a customer out
 */
export const usePayloadLogout = async () => {
	try {
		const customer = useCustomer();
		// get base url
		const { baseURL } = usePayloadUrl();

		await $fetch("/customers/logout", {
			method: "POST",
			baseURL,
			// Include the payload cookie on the client side
			credentials: "include",
		});
	} catch (error) {
		throw error.data;
	}
};
